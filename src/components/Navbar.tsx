import React, { useState, useEffect, useMemo } from 'react';
import { Code2, Home, Info, Gamepad2, Cpu, Sparkles, LogOut, LogIn, User, Star } from 'lucide-react';
import { Page } from '../App';
import { calculateModeExp, getLevelFromExp } from '../utils/gameModes';
import { loadAllUserData } from '../utils/firestore';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  user?: any;
  onSignIn?: () => void;
  onSignOut?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  user, 
  onSignIn, 
  onSignOut
}) => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });
  const [firestoreData, setFirestoreData] = useState<any>(null);
  const userId = user?.uid || 'guest';

  // Detect screen dimensions and orientation
  useEffect(() => {
    const updateDimensions = () => {
      setScreenDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Determine if we should use vertical monitor layout
  const isVerticalMonitor = useMemo(() => {
    return screenDimensions.width > 0 && screenDimensions.height > screenDimensions.width;
  }, [screenDimensions]);

  // Load Firestore data for authenticated users
  useEffect(() => {
    if (userId !== 'guest' && user?.uid) {
      console.log('📥 [Navbar] Loading Firestore data for user:', userId);
      loadAllUserData(userId).then(data => {
        if (data) {
          console.log('✅ [Navbar] Firestore data loaded:', data);
          setFirestoreData(data);
        } else {
          console.log('⚠️ [Navbar] No Firestore data found');
          setFirestoreData(null);
        }
      }).catch(error => {
        console.error('❌ [Navbar] Error loading Firestore data:', error);
        setFirestoreData(null);
      });
    } else {
      setFirestoreData(null);
    }
  }, [userId, user?.uid, refreshTrigger]);

  // Listen for stats updates
  useEffect(() => {
    const handleUpdate = (event: Event) => {
      console.log('📢 [Navbar] Received update event:', event.type);
      setRefreshTrigger(prev => {
        console.log('🔄 [Navbar] Refreshing (trigger:', prev, '→', prev + 1, ')');
        return prev + 1;
      });
    };
    window.addEventListener('statsUpdate', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('statsUpdate', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  // Calculate player level and total stars
  const playerProgress = useMemo(() => {
    if (userId === 'guest') return { level: 1, exp: 0, currentLevelExp: 0, expToNextLevel: 100, totalStars: 0, activeTitle: '', username: '' };

    const languages = ['javascript', 'java', 'python'];
    let totalExp = 0;
    let totalStars = 0;

    languages.forEach(lang => {
      // Main levels
      for (let level = 1; level <= 150; level++) {
        const starKey = `${userId}_${lang}_level_${level}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
          totalStars += stars;
          totalExp += calculateModeExp({
            mode: 'main',
            stars,
            attempts: stars === 3 ? 1 : 2,
            timeTakenSeconds: stars === 3 ? 30 : 90,
            usedHint: stars < 2
          });
        }
      }
      
      // Puzzles
      for (let p = 1; p <= 30; p++) {
        const starKey = `${userId}_${lang}_puzzle_${p}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
          totalStars += stars;
          totalExp += calculateModeExp({
            mode: 'puzzle',
            stars,
            attempts: stars === 3 ? 1 : 2,
            timeTakenSeconds: stars === 3 ? 30 : 90,
            usedHint: stars < 2
          });
        }
      }
      
      // Drag & Drop
      for (let d = 1; d <= 30; d++) {
        const starKey = `${userId}_${lang}_dragdrop_${d}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
          totalStars += stars;
          totalExp += calculateModeExp({
            mode: 'dragdrop',
            stars,
            attempts: stars === 3 ? 1 : (stars === 1 ? 3 : 2),
            timeTakenSeconds: stars === 3 ? 30 : 90,
            usedHint: false
          });
        }
      }
    });

    const { level, currentLevelExp, expToNextLevel } = getLevelFromExp(totalExp);
    
    // Use Firestore data if available, otherwise fallback to localStorage
    let activeTitle = '';
    let username = '';
    
    if (firestoreData?.profile) {
      activeTitle = firestoreData.profile.activeTitle || '';
      username = firestoreData.profile.username || '';
      console.log('🔍 [Navbar] Using Firestore data - username:', username, ', title:', activeTitle);
    } else {
      // Fallback to localStorage for guest users or when Firestore data isn't loaded yet
      activeTitle = localStorage.getItem('selectedTitle') || '';
      username = localStorage.getItem('username') || '';
      console.log('🔍 [Navbar] Using localStorage fallback - username:', username, ', title:', activeTitle);
    }
    
    return { level, exp: totalExp, currentLevelExp, expToNextLevel, totalStars, activeTitle, username };
  }, [userId, refreshTrigger, firestoreData]); // refreshTrigger will update when profile/stats change via statsUpdate event
  // Order: Home, Game Overview, Features, About (far right)
  const navItems = [
    { id: 'home' as Page, label: 'Home', icon: Home },
    { id: 'game-overview' as Page, label: 'Game Overview', icon: Gamepad2 },
    { id: 'features' as Page, label: 'Features', icon: Cpu },
    { id: 'about' as Page, label: 'About', icon: Info },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900/95 via-purple-900/90 to-slate-900/95 backdrop-blur-lg border-b border-purple-500/30 shadow-lg shadow-purple-500/10 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Desktop Navbar - Large screens with landscape orientation */}
        {!isVerticalMonitor && (
          <div className="hidden 2xl:flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-40"></div>
              <div className="relative bg-gradient-to-br from-cyan-500 to-purple-600 p-2 rounded-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide">
                CodeRealm
              </span>
              <div className="text-[0.5rem] text-purple-400 font-semibold tracking-widest -mt-1">
                LEARN • CODE • CONQUER
              </div>
            </div>
          </div>
          
          {/* Navigation Items - Subtle */}
          <div className="flex items-center space-x-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`group flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === id
                    ? 'text-white bg-slate-800/50 border border-purple-500/40'
                    : 'text-gray-400 hover:text-gray-300 hover:bg-slate-800/30 border border-transparent'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{label}</span>
              </button>
            ))}
          </div>

          {/* Right Section - Arcane AI & User Info */}
          <div className="flex items-center space-x-3">
            {/* Arcane AI Button - Eye-catching */}
            <button
              onClick={() => onNavigate('arcane-showcase')}
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 hover:from-purple-600/60 hover:to-pink-600/60 border-2 border-purple-400/50 hover:border-purple-300/70 rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30 group"
              title="Meet Arcane AI"
            >
              <Sparkles className="h-4 w-4 text-purple-200 group-hover:text-white animate-pulse" />
              <span className="font-bold text-sm text-purple-100 group-hover:text-white">Arcane AI</span>
            </button>

            {user && user.uid !== 'guest' ? (
              <div className="flex items-center space-x-3">
                {/* Player Progress Card - Prominent */}
                <div className="hidden lg:flex items-center gap-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-2 border-cyan-500/40 rounded-xl px-4 py-2 shadow-lg shadow-cyan-500/20 backdrop-blur-sm max-w-md">
                  {/* Stars */}
                  <div className="flex items-center space-x-1.5 flex-shrink-0">
                    <div className="relative">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <div className="absolute inset-0 bg-yellow-400 blur-sm opacity-50"></div>
                    </div>
                    <span className="text-sm font-bold text-yellow-400">{playerProgress.totalStars}</span>
                  </div>
                  
                  <div className="h-7 w-px bg-slate-600/50 flex-shrink-0"></div>
                  
                  {/* Level, Title & Progress Bar */}
                  <div className="flex flex-col items-start min-w-0 flex-shrink-0">
                    {/* Level and Title */}
                    <div className="flex items-center space-x-1.5 mb-0.5">
                      <span className="text-sm font-bold text-cyan-400 whitespace-nowrap">Lv {playerProgress.level}</span>
                      {playerProgress.activeTitle && (
                        <span className="text-[0.65rem] text-purple-300 italic whitespace-nowrap">• {playerProgress.activeTitle}</span>
                      )}
                    </div>
                    {/* Compact Progress Bar */}
                    <div className="w-32 h-1 bg-slate-900/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
                        style={{ width: `${Math.min(100, (playerProgress.currentLevelExp / playerProgress.expToNextLevel) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="h-7 w-px bg-slate-600/50 flex-shrink-0"></div>
                  
                  {/* Username - Truncated */}
                  <button
                    onClick={() => onNavigate('stats')}
                    className="flex items-center space-x-1.5 hover:text-cyan-300 transition-colors group min-w-0 max-w-[120px]"
                    title={`${playerProgress.username || user.email} - Click to view stats`}
                  >
                    <User className="h-4 w-4 text-gray-400 group-hover:text-cyan-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white truncate">
                      {playerProgress.username || user.email}
                    </span>
                  </button>
                </div>

                {/* Sign Out - Subtle */}
                <button
                  onClick={onSignOut}
                  className="hidden lg:flex items-center space-x-1.5 px-3 py-2 bg-slate-800/40 hover:bg-red-900/30 border border-slate-600/40 hover:border-red-500/50 rounded-lg transition-all duration-200 group"
                  title="Sign Out"
                >
                  <LogOut className="h-4 w-4 text-gray-500 group-hover:text-red-400" />
                  <span className="text-xs text-gray-500 group-hover:text-red-400">Exit</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onSignIn}
                className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 border border-cyan-400/30"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
        )}

        {/* Tablet/Vertical Monitor Navbar - Single Row Layout */}
        {(isVerticalMonitor || (screenDimensions.width >= 768 && screenDimensions.width < 1536)) && (
          <div className="flex justify-between items-center h-12">
            {/* Left Section: Logo + Navigation */}
            <div className="flex items-center space-x-3">
              {/* Logo - Compact */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded blur opacity-40"></div>
                  <div className="relative bg-gradient-to-br from-cyan-500 to-purple-600 p-1.5 rounded">
                    <Code2 className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide">
                    CodeRealm
                  </span>
                  <div className="text-[0.4rem] text-purple-400 font-semibold tracking-widest -mt-0.5">
                    LEARN • CODE • CONQUER
                  </div>
                </div>
              </div>

              {/* Navigation Items - Inline with Logo */}
              <div className="flex items-center space-x-1">
                {navItems.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => onNavigate(id)}
                    className={`group flex items-center space-x-1 px-1.5 py-1 rounded-lg transition-all duration-200 ${
                      currentPage === id
                        ? 'text-white bg-slate-800/50 border border-purple-500/40'
                        : 'text-gray-400 hover:text-gray-300 hover:bg-slate-800/30 border border-transparent'
                    }`}
                  >
                    <Icon className="h-3 w-3" />
                    <span className="text-[0.6rem]">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Section - Arcane AI & User Actions */}
            <div className="flex items-center space-x-2">
              {/* Arcane AI Button - Vertical Monitor Optimized */}
              <button
                onClick={() => onNavigate('arcane-showcase')}
                className="inline-flex items-center space-x-1 px-2 py-1.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 hover:from-purple-600/60 hover:to-pink-600/60 border border-purple-400/50 hover:border-purple-300/70 rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30 group"
                title="Meet Arcane AI"
              >
                <Sparkles className="h-3 w-3 text-purple-200 group-hover:text-white animate-pulse" />
                <span className="font-bold text-[0.6rem] text-purple-100 group-hover:text-white">Arcane AI</span>
              </button>

              {user && user.uid !== 'guest' ? (
                <>
                  {/* Complete User Info - Vertical Monitor Optimized */}
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-cyan-500/40 rounded-lg px-2 py-1">
                    {/* Stars */}
                    <div className="flex items-center space-x-1">
                      <Star className="h-2.5 w-2.5 text-yellow-400 fill-current" />
                      <span className="text-[0.6rem] font-bold text-yellow-400">{playerProgress.totalStars}</span>
                    </div>
                    <div className="h-3 w-px bg-slate-600/50"></div>
                    
                    {/* Level & Title */}
                    <div className="flex flex-col items-start min-w-0">
                      <div className="flex items-center space-x-1">
                        <span className="text-[0.6rem] font-bold text-cyan-400">Lv {playerProgress.level}</span>
                        {playerProgress.activeTitle && (
                          <span className="text-[0.5rem] text-purple-300 italic truncate max-w-[60px]">{playerProgress.activeTitle}</span>
                        )}
                      </div>
                      {/* Mini Progress Bar */}
                      <div className="w-16 h-0.5 bg-slate-900/50 rounded-full overflow-hidden mt-0.5">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
                          style={{ width: `${Math.min(100, (playerProgress.currentLevelExp / playerProgress.expToNextLevel) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="h-3 w-px bg-slate-600/50"></div>
                    
                    {/* Username */}
                    <button
                      onClick={() => onNavigate('stats')}
                      className="flex items-center space-x-1 hover:text-cyan-300 transition-colors min-w-0"
                      title={`${playerProgress.username || user.email} - Click to view stats`}
                    >
                      <User className="h-2.5 w-2.5 text-gray-400" />
                      <span className="text-[0.6rem] text-gray-300 truncate max-w-[50px]">
                        {playerProgress.username || user.email?.split('@')[0]}
                      </span>
                    </button>
                  </div>

                  {/* Sign Out Button */}
                  <button
                    onClick={onSignOut}
                    className="flex items-center space-x-1 px-1.5 py-1 bg-slate-800/40 hover:bg-red-900/30 border border-slate-600/40 hover:border-red-500/50 rounded-lg transition-all duration-200 group"
                    title="Sign Out"
                  >
                    <LogOut className="h-2.5 w-2.5 text-gray-400 group-hover:text-red-400" />
                  </button>
                </>
              ) : (
                <button
                  onClick={onSignIn}
                  className="flex items-center space-x-1 px-2 py-1.5 bg-slate-800/40 hover:bg-green-900/30 border border-slate-600/40 hover:border-green-500/50 rounded-lg transition-all duration-200 group"
                  title="Sign In"
                >
                  <LogIn className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-400" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navbar */}
        {!isVerticalMonitor && (
          <div className="md:hidden">
          {/* Top Row: Logo + Menu */}
          <div className="flex justify-between items-center h-14">
            {/* Logo - Compact */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded blur opacity-40"></div>
                <div className="relative bg-gradient-to-br from-cyan-500 to-purple-600 p-1.5 rounded">
                  <Code2 className="h-4 w-4 text-white" />
                </div>
              </div>
              <span className="text-base font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                CodeRealm
              </span>
            </div>

            {/* Navigation Dropdown */}
            <select
              value={currentPage}
              onChange={(e) => onNavigate(e.target.value as Page)}
              className="bg-slate-800/50 border border-purple-500/30 rounded-lg px-2 py-1.5 text-white text-xs focus:outline-none focus:border-cyan-400"
            >
              {navItems.map(({ id, label }) => (
                <option key={id} value={id} className="bg-slate-800">
                  {label}
                </option>
              ))}
              <option value="arcane-showcase" className="bg-slate-800">Arcane AI</option>
              {user && user.uid !== 'guest' && <option value="stats" className="bg-slate-800">Stats</option>}
            </select>
          </div>

          {/* Bottom Row: User Progress (if logged in) */}
          {user && user.uid !== 'guest' && (
            <div className="pb-2 border-t border-purple-500/20 pt-2">
              <div className="flex items-center justify-between bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-cyan-500/40 rounded-lg px-3 py-2">
                {/* Stars & Level */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <div className="relative">
                      <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                      <div className="absolute inset-0 bg-yellow-400 blur-sm opacity-50"></div>
                    </div>
                    <span className="text-xs font-bold text-yellow-400">{playerProgress.totalStars}</span>
                  </div>
                  <div className="h-5 w-px bg-slate-600/50"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-300">Lv {playerProgress.level}</span>
                    {playerProgress.activeTitle && (
                      <span className="text-[0.55rem] text-gray-300 italic truncate max-w-[100px]">{playerProgress.activeTitle}</span>
                    )}
                    {/* Mobile Progress Bar */}
                    <div className="w-20 h-0.5 bg-slate-900/50 rounded-full overflow-hidden mt-0.5">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                        style={{ width: `${Math.min(100, (playerProgress.currentLevelExp / playerProgress.expToNextLevel) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Username & Sign Out */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onNavigate('stats')}
                    className="flex items-center space-x-1 bg-slate-700/50 px-2 py-1 rounded"
                  >
                    <User className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-300 truncate max-w-[80px]">
                      {playerProgress.username || user.email?.split('@')[0]}
                    </span>
                  </button>
                  <button
                    onClick={onSignOut}
                    className="p-1.5 bg-red-900/20 hover:bg-red-900/40 border border-red-500/40 rounded transition-colors"
                    title="Sign Out"
                  >
                    <LogOut className="h-3.5 w-3.5 text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
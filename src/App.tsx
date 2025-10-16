import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import About from './pages/About';
import GameOverview from './pages/GameOverview';
import Features from './pages/Features';
import CodeEditor from './pages/CodeEditor';
import AIGuide from './pages/AIGuide';
import ArcaneShowcase from './pages/ArcaneShowcase';
import DragDrop from './pages/DragDrop';
import Stats from './pages/Stats';
import { pingFirestore, loadAllUserData } from './utils/firestore';
import { onAuthStateChange, signOutUser } from './utils/auth';

export type Page = 'home' | 'about' | 'game-overview' | 'features' | 'code-editor' | 'ai-guide' | 'arcane-showcase' | 'stats' | 'drag-drop';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<'javascript' | 'java' | 'python'>('javascript');
  const [user, setUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sessionStartTime] = useState<number>(Date.now());

  // Handle navigation with scroll to top
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Track session time efficiently - reduced Firebase calls
  useEffect(() => {
    const updateSessionTime = () => {
      const currentTime = Date.now();
      const sessionDuration = Math.floor((currentTime - sessionStartTime) / 1000);
      
      // Store current session time for Stats component
      localStorage.setItem('currentSessionTime', String(sessionDuration));
      
      // Save to localStorage every 60 seconds to reduce Firebase calls
      if (sessionDuration % 60 === 0 && sessionDuration > 0) {
        const userId = localStorage.getItem('userId') || 'guest';
        const totalTimeKey = userId === 'guest' ? 'guest_totalSessionTime' : `${userId}_totalSessionTime`;
        const currentTotalTime = parseInt(localStorage.getItem(totalTimeKey) || '0');
        localStorage.setItem(totalTimeKey, String(currentTotalTime + 60));
      }
    };

    // Update every 10 seconds to reduce frequency
    const interval = setInterval(updateSessionTime, 10000);
    
    // Save on page unload
    const handleBeforeUnload = () => {
      const currentTime = Date.now();
      const sessionDuration = Math.floor((currentTime - sessionStartTime) / 1000);
      const userId = localStorage.getItem('userId') || 'guest';
      const totalTimeKey = userId === 'guest' ? 'guest_totalSessionTime' : `${userId}_totalSessionTime`;
      const currentTotalTime = parseInt(localStorage.getItem(totalTimeKey) || '0');
      localStorage.setItem(totalTimeKey, String(currentTotalTime + sessionDuration));
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload(); // Final save on cleanup
    };
  }, [sessionStartTime]);

  // Test Firebase connection on app load
  useEffect(() => {
    pingFirestore().then((ok) => {
      console.log(ok ? '🔥 Firebase connected!' : '❌ Firebase failed');
    });
    
    // Check if user has made a choice (guest or sign in)
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    const userId = localStorage.getItem('userId');
    
    // Show modal if they haven't seen it OR if no userId is set (bypassed somehow)
    if (!hasSeenWelcome || !userId) {
      console.log('🚨 Showing guest modal - hasSeenWelcome:', hasSeenWelcome, 'userId:', userId);
      setShowGuestModal(true);
    }
  }, []);

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
      
      if (user) {
        // Store user ID in localStorage for the game
        localStorage.setItem('userId', user.uid);
        localStorage.setItem('userEmail', user.email || '');
        
                 // Load user data from Firestore - reduced frequency
                 loadAllUserData(user.uid).then(userData => {
                   if (userData) {
                     // Sync profile data
                     if (userData.profile.username) {
                       localStorage.setItem('username', userData.profile.username);
                     }
                     if (userData.profile.activeTitle) {
                       localStorage.setItem('selectedTitle', userData.profile.activeTitle);
                     }

                     // Sync stars data - convert Firestore keys to localStorage keys
                     Object.entries(userData.stars).forEach(([key, value]) => {
                       // Convert keys like "javascript_main_1_stars" to localStorage format
                       const match = key.match(/(javascript|java|python)_(main|puzzle|dragdrop)_(\d+)_stars/);
                       if (match) {
                         const [, language, mode, levelStr] = match;
                         const level = parseInt(levelStr);
                         let localStorageKey: string;

                         if (mode === 'main') {
                           localStorageKey = `${user.uid}_${language}_level_${level}_stars`;
                         } else if (mode === 'puzzle') {
                           localStorageKey = `${user.uid}_${language}_puzzle_${level}_stars`;
                         } else if (mode === 'dragdrop') {
                           localStorageKey = `${user.uid}_${language}_dragdrop_${level}_stars`;
                         } else {
                           return; // Skip unknown modes
                         }

                         const localValue = parseInt(localStorage.getItem(localStorageKey) || '0');
                         if (value > localValue) {
                           localStorage.setItem(localStorageKey, String(value));
                         }
                       }
                     });

                     // Sync level and achievements if available
                     if (userData.profile.level) {
                       localStorage.setItem('userLevel', String(userData.profile.level));
                     }
                     if (userData.profile.totalExp) {
                       localStorage.setItem('userTotalExp', String(userData.profile.totalExp));
                     }
                     if (userData.profile.unlockedAchievements) {
                       localStorage.setItem('unlockedAchievements', JSON.stringify(userData.profile.unlockedAchievements));
                     }
                     if (userData.profile.unlockedTitles) {
                       localStorage.setItem('unlockedTitles', JSON.stringify(userData.profile.unlockedTitles));
                     }
                   }

                   // Notify components to refresh
                   window.dispatchEvent(new Event('statsUpdate'));
                 }).catch(error => {
                   console.error('❌ Error loading user data:', error);
                 });
        
        // One-time migration: copy guest stars to user stars if user stars are empty
        ['javascript','java','python'].forEach((lang) => {
          for (let level = 1; level <= 150; level++) {
            const guestKey = `guest_${lang}_level_${level}_stars`;
            const userKey = `${user.uid}_${lang}_level_${level}_stars`;
            const userStars = localStorage.getItem(userKey);
            const guestStars = localStorage.getItem(guestKey);
            if ((!userStars || userStars === '0') && guestStars && guestStars !== '0') {
              localStorage.setItem(userKey, guestStars);
            }
          }
          for (let p = 1; p <= 5; p++) {
            const guestPuzzle = `guest_${lang}_puzzle_${p}_stars`;
            const userPuzzle = `${user.uid}_${lang}_puzzle_${p}_stars`;
            const userPS = localStorage.getItem(userPuzzle);
            const guestPS = localStorage.getItem(guestPuzzle);
            if ((!userPS || userPS === '0') && guestPS && guestPS !== '0') {
              localStorage.setItem(userPuzzle, guestPS);
            }
          }
        });
      } else {
        console.log('👤 User not authenticated');
        localStorage.setItem('userId', 'guest');
        localStorage.setItem('userEmail', '');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthSuccess = (user: any) => {
    setUser(user);
    setShowAuthModal(false);
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('authStateChanged', { 
      detail: { user, action: 'login' } 
    }));
  };

  const handleSignOut = async () => {
    await signOutUser();
    setUser(null);
    
    // Clear guest progress when signing out
    localStorage.removeItem('guestCompletedLevels');
    localStorage.removeItem('guestUnlockedLevels');
    
    // Clear any user-specific progress from localStorage
    const userId = localStorage.getItem('userId');
    if (userId && userId !== 'guest') {
      localStorage.removeItem(`${userId}_completedLevels`);
      localStorage.removeItem(`${userId}_unlockedLevels`);
    }
    
    // Clear welcome flag to show prompt again
    localStorage.removeItem('hasSeenWelcome');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('username');
    localStorage.removeItem('selectedTitle');
    
    // Redirect to home page after logout
    setCurrentPage('home');
    
    // Show the guest/sign in modal again
    setShowGuestModal(true);
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('authStateChanged', { 
      detail: { user: null, action: 'logout' } 
    }));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'game-overview':
        return <GameOverview onNavigate={handleNavigate} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />;
      case 'features':
        return <Features onNavigate={handleNavigate} />;
      case 'code-editor':
        return <CodeEditor selectedLanguage={selectedLanguage} onNavigate={handleNavigate} />;
      case 'ai-guide':
        return <AIGuide onNavigate={handleNavigate} />;
      case 'arcane-showcase':
        return <ArcaneShowcase onNavigate={handleNavigate} />;
      case 'stats':
        return <Stats onNavigate={handleNavigate} />;
      case 'drag-drop':
        return <DragDrop selectedLanguage={selectedLanguage} onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading CodeRealm...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar 
          currentPage={currentPage} 
          onNavigate={handleNavigate}
          user={user}
          onSignIn={() => setShowAuthModal(true)}
          onSignOut={handleSignOut}
        />
        {renderPage()}
      </div>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuthSuccess={handleAuthSuccess}
      />
      
      {/* Guest or Sign In Modal */}
      {showGuestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-purple-500/30 rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Welcome to CodeRealm!
              </h2>
              <p className="text-gray-300 text-sm">
                Choose how you'd like to start your coding adventure
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => {
                  localStorage.setItem('hasSeenWelcome', 'true');
                  setShowGuestModal(false);
                  setShowAuthModal(true);
                }}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                <span>🔐</span>
                <span>Sign In / Create Account</span>
              </button>
              
              <div className="text-center text-gray-400 text-sm">or</div>
              
              <button
                onClick={() => {
                  localStorage.setItem('hasSeenWelcome', 'true');
                  localStorage.setItem('userId', 'guest');
                  setShowGuestModal(false);
                }}
                className="w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>👤</span>
                <span>Continue as Guest</span>
              </button>
              
              <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                <p className="text-xs text-gray-400 text-center">
                  <span className="text-cyan-400 font-semibold">💡 Tip:</span> Sign in to save your progress across devices and track your achievements!
                </p>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Guest progress is saved locally and won't sync to your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
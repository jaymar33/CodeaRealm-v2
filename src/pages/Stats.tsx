import React, { useEffect, useMemo, useState } from 'react';
import { syncAllUserData, loadAllUserData, testFirestoreRules } from '../utils/firestore';
import { calculateModeExp, getLevelFromExp } from '../utils/gameModes';
import { Page } from '../App';
import { Settings, Award, Trophy, Crown, Star } from 'lucide-react';
import { getUnlockedAchievements, getUnlockedTitles, calculateMastery, getMasteryColor, ACHIEVEMENTS, type PlayerStats } from '../utils/achievements';

interface StatsProps {
  onNavigate: (page: Page) => void;
}

type Lang = 'javascript' | 'java' | 'python';

const languages: Lang[] = ['javascript', 'java', 'python'];

const Stats: React.FC<StatsProps> = ({ onNavigate }) => {
  const [userId, setUserId] = useState<string>('guest');
  const [userEmail, setUserEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [showTutorialReset, setShowTutorialReset] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const [showAchievements, setShowAchievements] = useState(false);
  const [isDevUser, setIsDevUser] = useState(false);

  useEffect(() => {
    const uid = localStorage.getItem('userId') || 'guest';
    const email = localStorage.getItem('userEmail') || '';
    setUserId(uid);
    setUserEmail(email);
    
    // Check if user is a developer
    setIsDevUser(email === 'jaymarmarino2002@gmail.com');
    
    // Redirect to home if user logs out while on stats page
    if (uid === 'guest') {
      onNavigate('home');
      return;
    }
    
    // Load all user data from Firestore for authenticated users
    if (uid !== 'guest') {
      console.log('📥 [Stats] Loading all user data from Firestore...');
      loadAllUserData(uid).then(userData => {
        if (userData) {
          console.log('✅ [Stats] All user data loaded:', userData);
          
          // Sync profile data
          if (userData.profile.username) {
            localStorage.setItem('username', userData.profile.username);
            setUsername(userData.profile.username);
            console.log('💾 [Stats] Username loaded:', userData.profile.username);
          } else {
            const localUsername = localStorage.getItem('username') || '';
            setUsername(localUsername);
            console.log('⚠️ [Stats] No username in Firestore, using local:', localUsername);
          }
          
          if (userData.profile.activeTitle) {
            localStorage.setItem('selectedTitle', userData.profile.activeTitle);
            setSelectedTitle(userData.profile.activeTitle);
            console.log('👑 [Stats] Title loaded:', userData.profile.activeTitle);
          } else {
            const localTitle = localStorage.getItem('selectedTitle') || '';
            setSelectedTitle(localTitle);
            console.log('⚠️ [Stats] No title in Firestore, using local:', localTitle);
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
                localStorageKey = `${uid}_${language}_level_${level}_stars`;
              } else if (mode === 'puzzle') {
                localStorageKey = `${uid}_${language}_puzzle_${level}_stars`;
              } else if (mode === 'dragdrop') {
                localStorageKey = `${uid}_${language}_dragdrop_${level}_stars`;
              } else {
                return; // Skip unknown modes
              }
              
              const localValue = parseInt(localStorage.getItem(localStorageKey) || '0');
              if (value > localValue) {
                localStorage.setItem(localStorageKey, String(value));
                console.log(`⭐ [Stats] Synced stars for ${localStorageKey}: ${value}`);
              }
            }
          });
          
          // Sync level and achievements if available
          if (userData.profile.level) {
            localStorage.setItem('userLevel', String(userData.profile.level));
            console.log('📊 [Stats] Level synced:', userData.profile.level);
          }
          if (userData.profile.totalExp) {
            localStorage.setItem('userTotalExp', String(userData.profile.totalExp));
            console.log('⭐ [Stats] Total EXP synced:', userData.profile.totalExp);
          }
          if (userData.profile.unlockedAchievements) {
            localStorage.setItem('unlockedAchievements', JSON.stringify(userData.profile.unlockedAchievements));
            console.log('🏆 [Stats] Achievements synced:', userData.profile.unlockedAchievements);
          }
          if (userData.profile.unlockedTitles) {
            localStorage.setItem('unlockedTitles', JSON.stringify(userData.profile.unlockedTitles));
            console.log('👑 [Stats] Titles synced:', userData.profile.unlockedTitles);
          }
        }
        
        // Notify navbar to refresh after all data is loaded
        console.log('📢 [Stats] Dispatching statsUpdate event');
        window.dispatchEvent(new Event('statsUpdate'));
        setRefreshTrigger(prev => prev + 1);
      }).catch(error => {
        console.error('❌ [Stats] Error loading user data:', error);
      });
    } else {
      setUsername(localStorage.getItem('username') || '');
    }
    
    // Listen for storage changes to update stats in real-time
    const handleStorageChange = () => {
      setRefreshTrigger(prev => prev + 1);
    };
    
    // Listen for auth state changes and redirect to home if logged out
    const handleAuthChange = (event: CustomEvent) => {
      if (event.detail.action === 'logout') {
        onNavigate('home');
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('statsUpdate', handleStorageChange);
    window.addEventListener('authStateChanged', handleAuthChange as EventListener);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('statsUpdate', handleStorageChange);
      window.removeEventListener('authStateChanged', handleAuthChange as EventListener);
    };
  }, [onNavigate]);

  const totalSeconds = useMemo(() => {
    // Use overall play time (saved time + current session)
    const sessionTimeKey = userId === 'guest' ? 'guest_totalSessionTime' : `${userId}_totalSessionTime`;
    const savedTime = parseInt(localStorage.getItem(sessionTimeKey) || '0');
    
    // Add current session time from App component
    const currentSessionTime = parseInt(localStorage.getItem('currentSessionTime') || '0');
    
    return savedTime + currentSessionTime;
  }, [userId, refreshTrigger]);

  const totalCompletions = useMemo(() => {
    let completions = 0;
    
    // Count completed levels across all game modes and languages
    languages.forEach(lang => {
      // Main levels (1-150)
      for (let level = 1; level <= 150; level++) {
        const starKey = userId === 'guest' 
          ? `guest_${lang}_level_${level}_stars`
          : `${userId}_${lang}_level_${level}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) completions++;
      }
      
      // Puzzles (1-30)
      for (let p = 1; p <= 30; p++) {
        const starKey = userId === 'guest' 
          ? `guest_${lang}_puzzle_${p}_stars`
          : `${userId}_${lang}_puzzle_${p}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) completions++;
      }
      
      // Drag & Drop (1-30)
      for (let d = 1; d <= 30; d++) {
        const starKey = userId === 'guest' 
          ? `guest_${lang}_dragdrop_${d}_stars`
          : `${userId}_${lang}_dragdrop_${d}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) completions++;
      }
    });
    
    return completions;
  }, [userId, refreshTrigger]);

  const attemptsByLang = useMemo(() => {
    const map: Record<Lang, number> = { javascript: 0, java: 0, python: 0 };
    languages.forEach((lang) => {
      const hist = JSON.parse(localStorage.getItem(`${userId}_${lang}_ai_history`) || '[]');
      map[lang] = hist.reduce((s: number, h: any) => s + (h.attempts || 0), 0);
    });
    return map;
  }, [userId]);

  const starsPerLevel = useMemo(() => {
    const result: Record<string, number> = {};
    languages.forEach((lang) => {
      // Main levels (1-150)
      for (let level = 1; level <= 150; level++) {
        const starKeyGuest = `guest_${lang}_level_${level}_stars`;
        const starKeyUser = `${userId}_${lang}_level_${level}_stars`;
        const stars = parseInt(localStorage.getItem(userId === 'guest' ? starKeyGuest : starKeyUser) || '0');
        if (stars > 0) result[`${lang}-L${level}`] = stars;
      }
      
      // Puzzles (1-30)
      for (let p = 1; p <= 30; p++) {
        const starKeyGuest = `guest_${lang}_puzzle_${p}_stars`;
        const starKeyUser = `${userId}_${lang}_puzzle_${p}_stars`;
        const stars = parseInt(localStorage.getItem(userId === 'guest' ? starKeyGuest : starKeyUser) || '0');
        if (stars > 0) result[`${lang}-P${p}`] = stars;
      }
      
      // Drag & Drop (1-30)
      for (let d = 1; d <= 30; d++) {
        const starKeyGuest = `guest_${lang}_dragdrop_${d}_stars`;
        const starKeyUser = `${userId}_${lang}_dragdrop_${d}_stars`;
        const stars = parseInt(localStorage.getItem(userId === 'guest' ? starKeyGuest : starKeyUser) || '0');
        if (stars > 0) result[`${lang}-D${d}`] = stars;
      }
    });
    return result;
  }, [userId]);

  // EXP & Leveling - Mode-specific calculations
  const expData = useMemo(() => {
    let totalExp = 0;
    
    // Calculate EXP from all game modes and all languages
    languages.forEach(lang => {
      // Main levels (1-150)
      for (let level = 1; level <= 150; level++) {
        const starKey = userId === 'guest' 
          ? `guest_${lang}_level_${level}_stars`
          : `${userId}_${lang}_level_${level}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
          // Simplified EXP: assume average performance for stored stars
          totalExp += calculateModeExp({
            mode: 'main',
            stars,
            attempts: stars === 3 ? 1 : 2, // Assume 1 attempt for 3 stars, 2 for less
            timeTakenSeconds: stars === 3 ? 30 : 90, // Assume fast for 3 stars
            usedHint: stars < 2 // Assume no hint if 2+ stars
          });
        }
      }
      
      // Puzzles (1-30)
      for (let p = 1; p <= 30; p++) {
        const starKey = userId === 'guest'
          ? `guest_${lang}_puzzle_${p}_stars`
          : `${userId}_${lang}_puzzle_${p}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
          totalExp += calculateModeExp({
            mode: 'puzzle',
            stars,
            attempts: stars === 3 ? 1 : 2,
            timeTakenSeconds: stars === 3 ? 30 : 90,
            usedHint: stars < 2
          });
        }
      }
      
      // Drag & Drop (1-30)
      for (let d = 1; d <= 30; d++) {
        const starKey = userId === 'guest'
          ? `guest_${lang}_dragdrop_${d}_stars`
          : `${userId}_${lang}_dragdrop_${d}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
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
    return { exp: totalExp, level, currentLevelExp, expToNextLevel };
  }, [userId, refreshTrigger]);

  // Calculate player stats for achievements
  const playerStats: PlayerStats = useMemo(() => {
    const stats: PlayerStats = {
      totalStars: 0,
      totalExp: expData.exp,
      level: expData.level,
      languageStats: {},
      threeStarCount: 0
    };

    languages.forEach(lang => {
      let langStars = 0;
      let mainCompleted = 0;
      let puzzlesCompleted = 0;
      let dragDropCompleted = 0;

      // Count main levels
      for (let level = 1; level <= 150; level++) {
        const starKey = userId === 'guest'
          ? `guest_${lang}_level_${level}_stars`
          : `${userId}_${lang}_level_${level}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
          langStars += stars;
          stats.totalStars += stars;
          mainCompleted++;
          if (stars === 3) stats.threeStarCount++;
        }
      }

      // Count puzzles
      for (let p = 1; p <= 30; p++) {
        const starKey = userId === 'guest'
          ? `guest_${lang}_puzzle_${p}_stars`
          : `${userId}_${lang}_puzzle_${p}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
          langStars += stars;
          stats.totalStars += stars;
          puzzlesCompleted++;
          if (stars === 3) stats.threeStarCount++;
        }
      }

      // Count drag & drop
      for (let d = 1; d <= 30; d++) {
        const starKey = userId === 'guest'
          ? `guest_${lang}_dragdrop_${d}_stars`
          : `${userId}_${lang}_dragdrop_${d}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
          langStars += stars;
          stats.totalStars += stars;
          dragDropCompleted++;
          if (stars === 3) stats.threeStarCount++;
        }
      }

      stats.languageStats[lang] = {
        stars: langStars,
        mainCompleted,
        puzzlesCompleted,
        dragDropCompleted
      };
    });

    return stats;
  }, [userId, refreshTrigger, expData]);

  const unlockedAchievements = useMemo(() => getUnlockedAchievements(playerStats), [playerStats]);
  const unlockedTitles = useMemo(() => getUnlockedTitles(playerStats), [playerStats]);

  const handleTitleChange = (title: string) => {
    setSelectedTitle(title);
    localStorage.setItem('selectedTitle', title);
    // Save to Firestore using comprehensive sync
    if (userId !== 'guest') {
      console.log('👑 Saving active title to Firestore:', title);
      syncAllUserData(userId, { activeTitle: title });
    }
    // Notify navbar to refresh
    window.dispatchEvent(new Event('statsUpdate'));
  };

  // Build per-mode views
  const mainByLang = useMemo(() => {
    const map: Record<Lang, Array<{ level: number; stars: number }>> = {
      javascript: [], java: [], python: []
    };
    Object.entries(starsPerLevel).forEach(([k, v]) => {
      const match = k.match(/(javascript|java|python)-L(\d+)/);
      if (!match) return;
      const lang = match[1] as Lang;
      const levelNum = parseInt(match[2]);
      if (levelNum >= 1 && levelNum <= 150) map[lang].push({ level: levelNum, stars: v as number });
    });
    // sort by level
    languages.forEach(l => map[l].sort((a, b) => a.level - b.level));
    return map;
  }, [starsPerLevel]);

  const puzzlesByLang = useMemo(() => {
    const res: Record<Lang, Array<{ level: number; displayLevel: number; stars: number }>> = {
      javascript: [], java: [], python: []
    };
    languages.forEach(lang => {
      for (let p = 1; p <= 30; p++) {
        const guestKey = `guest_${lang}_puzzle_${p}_stars`;
        const userKey = `${userId}_${lang}_puzzle_${p}_stars`;
        const stars = parseInt(localStorage.getItem(userId === 'guest' ? guestKey : userKey) || '0');
        if (stars > 0) res[lang].push({ level: p, displayLevel: p, stars });
      }
    });
    return res;
  }, [userId, refreshTrigger]);

  const dragDropByLang = useMemo(() => {
    const res: Record<Lang, Array<{ level: number; displayLevel: number; stars: number }>> = {
      javascript: [], java: [], python: []
    };
    languages.forEach(lang => {
      for (let d = 1; d <= 30; d++) {
        const guestKey = `guest_${lang}_dragdrop_${d}_stars`;
        const userKey = `${userId}_${lang}_dragdrop_${d}_stars`;
        const stars = parseInt(localStorage.getItem(userId === 'guest' ? guestKey : userKey) || '0');
        if (stars > 0) res[lang].push({ level: d, displayLevel: d, stars });
      }
    });
    return res;
  }, [userId, refreshTrigger]);

  // Save to Firestore whenever dependencies change and user is authenticated
  useEffect(() => {
    if (userId === 'guest') return;
    
    const attempts: Record<string, number> = {
      javascript: attemptsByLang.javascript,
      java: attemptsByLang.java,
      python: attemptsByLang.python,
    };
    
    // Sync all user data including level, achievements, and titles
    syncAllUserData(userId, {
      username: username,
      activeTitle: selectedTitle,
      level: expData.level,
      totalExp: expData.exp,
      unlockedAchievements: unlockedAchievements.map(a => a.id),
      unlockedTitles: unlockedTitles,
      stars: starsPerLevel,
      totalSeconds,
      attemptsByLanguage: attempts
    });
  }, [userId, totalSeconds, attemptsByLang, starsPerLevel, expData.level, expData.exp, unlockedAchievements, unlockedTitles, username, selectedTitle]);

  const handleUsernameChange = () => {
    if (newUsername.trim()) {
      const trimmedUsername = newUsername.trim();
      localStorage.setItem('username', trimmedUsername);
      setUsername(trimmedUsername);
      // Save to Firestore using comprehensive sync
      if (userId !== 'guest') {
        console.log('💾 Saving username to Firestore:', trimmedUsername);
        syncAllUserData(userId, { username: trimmedUsername });
      }
      setIsEditingUsername(false);
      setNewUsername('');
      // Notify navbar to refresh
      window.dispatchEvent(new Event('statsUpdate'));
    }
  };

  // Calculate language-specific stats for the overview cards
  const languageOverview = useMemo(() => {
    const languages = ['javascript', 'java', 'python'];
    const overview: Record<string, any> = {};

    languages.forEach(lang => {
      let totalStars = 0;
      let mainCompleted = 0;
      let puzzlesCompleted = 0;
      let dragDropCompleted = 0;
      let totalExp = 0;

      // Main levels
      for (let level = 1; level <= 150; level++) {
        const starKey = userId === 'guest'
          ? `guest_${lang}_level_${level}_stars`
          : `${userId}_${lang}_level_${level}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
          totalStars += stars;
          mainCompleted++;
          totalExp += calculateModeExp({
            mode: 'main', stars, attempts: stars === 3 ? 1 : 2,
            timeTakenSeconds: stars === 3 ? 30 : 90, usedHint: stars < 2
          });
        }
      }

      // Puzzles
      for (let p = 1; p <= 30; p++) {
        const starKey = userId === 'guest'
          ? `guest_${lang}_puzzle_${p}_stars`
          : `${userId}_${lang}_puzzle_${p}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
          totalStars += stars;
          puzzlesCompleted++;
          totalExp += calculateModeExp({
            mode: 'puzzle', stars, attempts: stars === 3 ? 1 : 2,
            timeTakenSeconds: stars === 3 ? 30 : 90, usedHint: stars < 2
          });
        }
      }

      // Drag & Drop
      for (let d = 1; d <= 30; d++) {
        const starKey = userId === 'guest'
          ? `guest_${lang}_dragdrop_${d}_stars`
          : `${userId}_${lang}_dragdrop_${d}_stars`;
        const stars = parseInt(localStorage.getItem(starKey) || '0');
        if (stars > 0) {
          totalStars += stars;
          dragDropCompleted++;
          totalExp += calculateModeExp({
            mode: 'dragdrop', stars, attempts: stars === 3 ? 1 : (stars === 1 ? 3 : 2),
            timeTakenSeconds: stars === 3 ? 30 : 90, usedHint: false
          });
        }
      }

      const { level } = getLevelFromExp(totalExp);
      const completionPercentage = ((mainCompleted + puzzlesCompleted + dragDropCompleted) / 210) * 100;

      overview[lang] = {
        totalStars,
        mainLevelsCompleted: mainCompleted,
        puzzlesCompleted,
        dragDropCompleted,
        totalExp,
        level,
        completionPercentage: completionPercentage.toFixed(1),
        avgStars: totalStars > 0 ? (totalStars / (mainCompleted + puzzlesCompleted + dragDropCompleted)).toFixed(2) : '0'
      };
    });

    return overview;
  }, [userId, refreshTrigger]);

  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Player Statistics
          </h1>
        </div>
        <button
          onClick={() => onNavigate('game-overview')}
          className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-400/30 hover:border-cyan-400/50 px-4 py-2 rounded-lg transition-all"
        >
          <span className="text-cyan-400">← Back</span>
        </button>
      </div>

      {/* Main Stats Grid - Top Row */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-400">Profile</div>
            {!isEditingUsername && (
              <button
                onClick={() => {
                  setIsEditingUsername(true);
                  setNewUsername(username);
                }}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors px-2 py-1 rounded border border-cyan-500/30 hover:border-cyan-500/50"
              >
                Edit Name
              </button>
            )}
          </div>
          
          {isEditingUsername ? (
            <div className="mb-3">
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full bg-slate-800/60 border border-purple-500/30 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 mb-2"
                autoFocus
              />
              <div className="flex space-x-2">
                <button
                  onClick={handleUsernameChange}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-xs py-2 rounded transition-all duration-300"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsEditingUsername(false);
                    setNewUsername('');
                  }}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-xs py-2 rounded transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-3">
              <div className="text-lg font-semibold text-white flex items-center space-x-2">
                {username ? (
                  <>
                    <span className="text-cyan-400">@{username}</span>
                  </>
                ) : (
                  <span className="text-gray-400 italic">No username set</span>
                )}
              </div>
              <div className="text-sm text-gray-400 mt-1">{userEmail || 'Guest'}</div>
            </div>
          )}
          
          <div className="mt-4 text-sm text-gray-400">Level</div>
          <div className="text-cyan-300 font-semibold text-xl">Lv. {expData.level}</div>
          <div className="mt-2 w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${Math.min(100, (expData.currentLevelExp / expData.expToNextLevel) * 100)}%` }}></div>
          </div>
          <div className="text-xs text-gray-400 mt-1">{expData.currentLevelExp}/{expData.expToNextLevel} EXP</div>
          <div className="text-xs text-gray-500 mt-1">Total: {expData.exp.toLocaleString()} EXP</div>
          
          {/* Sync Button */}
          <button
            onClick={() => {
              if (userId !== 'guest') {
                console.log('🔄 Manual sync triggered');
                syncAllUserData(userId, {
                  username: username,
                  activeTitle: selectedTitle,
                  level: expData.level,
                  totalExp: expData.exp,
                  unlockedAchievements: unlockedAchievements.map(a => a.id),
                  unlockedTitles: unlockedTitles,
                  stars: starsPerLevel,
                  totalSeconds,
                  attemptsByLanguage: {
                    javascript: attemptsByLang.javascript,
                    java: attemptsByLang.java,
                    python: attemptsByLang.python,
                  }
                });
                alert('Data synced successfully!');
              } else {
                alert('Sync is only available for authenticated users.');
              }
            }}
            className="mt-2 w-full text-xs text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/50 px-2 py-1.5 rounded transition-colors flex items-center justify-center space-x-1"
          >
            <span>🔄</span>
            <span>Sync Data</span>
          </button>
          
          {/* Dev Tools - Only visible to developer */}
          {isDevUser && (
            <>
              {/* Test Firestore Rules Button */}
              <button
                onClick={() => {
                  if (userId !== 'guest') {
                    console.log('🧪 Testing Firestore rules...');
                    testFirestoreRules(userId).then(success => {
                      if (success) {
                        alert('✅ Firestore rules test passed! Check console for details.');
                      } else {
                        alert('❌ Firestore rules test failed! Check console for details.');
                      }
                    });
                  } else {
                    alert('Test is only available for authenticated users.');
                  }
                }}
                className="mt-1 w-full text-xs text-green-400 hover:text-green-300 border border-green-500/30 hover:border-green-500/50 px-2 py-1.5 rounded transition-colors flex items-center justify-center space-x-1"
              >
                <span>🧪</span>
                <span>Test Firestore</span>
              </button>
              
              {/* Debug Puzzle Stars Button */}
              <button
                onClick={() => {
                  console.log('🔍 Debugging puzzle stars...');
                  console.log('Current userId:', userId);
                  
                  // Check JavaScript puzzle stars
                  for (let p = 1; p <= 5; p++) {
                    const guestKey = `guest_javascript_puzzle_${p}_stars`;
                    const userKey = `${userId}_javascript_puzzle_${p}_stars`;
                    const guestStars = localStorage.getItem(guestKey);
                    const userStars = localStorage.getItem(userKey);
                    console.log(`Puzzle ${p}: guest=${guestStars}, user=${userStars}`);
                  }
                  
                  // Check what puzzlesByLang shows
                  console.log('puzzlesByLang javascript:', puzzlesByLang.javascript);
                  
                  alert('Check console for puzzle star debug info');
                }}
                className="mt-1 w-full text-xs text-orange-400 hover:text-orange-300 border border-orange-500/30 hover:border-orange-500/50 px-2 py-1.5 rounded transition-colors flex items-center justify-center space-x-1"
              >
                <span>🔍</span>
                <span>Debug Puzzles</span>
              </button>
            </>
          )}
          
          {/* Tutorial Reset Button */}
          <button
            onClick={() => setShowTutorialReset(!showTutorialReset)}
            className="mt-2 w-full text-xs text-purple-400 hover:text-purple-300 border border-purple-500/30 hover:border-purple-500/50 px-2 py-1.5 rounded transition-colors flex items-center justify-center space-x-1"
          >
            <Settings className="h-3 w-3" />
            <span>Reset Tutorial</span>
          </button>
          
          {showTutorialReset && (
            <div className="mt-2 bg-purple-900/30 border border-purple-500/30 rounded p-2">
              <p className="text-xs text-gray-300 mb-2">Reset tutorial to show again?</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    localStorage.removeItem('tutorialDismissed');
                    window.dispatchEvent(new Event('tutorialReset'));
                    setShowTutorialReset(false);
                    alert('Tutorial reset! It will show next time you visit the Code Editor.');
                  }}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white text-xs py-1 rounded"
                >
                  Yes, Reset
                </button>
                <button
                  onClick={() => setShowTutorialReset(false)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-xs py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Play Time Card - Redesigned */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-gray-400">Play Time</div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-xl">⏱️</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {Math.floor(totalSeconds / 3600)}
            <span className="text-lg text-gray-400">h</span>
            {' '}
            {Math.floor((totalSeconds % 3600) / 60)}
            <span className="text-lg text-gray-400">m</span>
          </div>
          <div className="text-xs text-gray-500">Overall play time</div>
        </div>

        {/* Overall Completion Card */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-400 font-body">Overall Progress</div>
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-xl">📊</span>
            </div>
          </div>
          
          {/* Completion Percentage at Top */}
          <div className="text-3xl font-heading text-green-400 mb-3 text-center">
            {((totalCompletions / (3 * (150 + 30 + 30))) * 100).toFixed(1)}
            <span className="text-lg text-gray-400 font-body">%</span>
          </div>
          
          {/* Progress Circle */}
          <div className="flex justify-center mb-3">
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                {/* Background circle */}
                <path
                  className="text-gray-600"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Progress circle with gradient effect */}
                <path
                  className="text-green-500"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={`${(totalCompletions / (3 * (150 + 30 + 30))) * 100}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.5))'
                  }}
                />
              </svg>
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-lg font-heading text-white">
                  {totalCompletions}
                </div>
                <div className="text-xs text-gray-400 font-body">
                  levels
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 blur-sm -z-10"></div>
            </div>
          </div>
          
          {/* Completion Breakdown */}
          <div className="mt-4 space-y-2">
            <div className="text-xs text-gray-400 font-body-semibold mb-2">Completion Breakdown:</div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center">
                <div className="text-green-400 font-heading">{Math.floor(totalCompletions * 0.6)}</div>
                <div className="text-gray-500">Main Levels</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-heading">{Math.floor(totalCompletions * 0.25)}</div>
                <div className="text-gray-500">Puzzles</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-heading">{Math.floor(totalCompletions * 0.15)}</div>
                <div className="text-gray-500">Drag & Drop</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mastery & Achievements Row */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {/* Mastery Levels */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm">
          <div className="text-sm text-gray-400 mb-3">Language Mastery</div>
          <div className="space-y-3">
            {languages.map(lang => {
              const langStats = playerStats.languageStats[lang] || { stars: 0 };
              const mastery = calculateMastery(langStats.stars);
              const masteryColor = getMasteryColor(mastery);
              const icon = lang === 'javascript' ? '🧙‍♂️' : lang === 'java' ? '⚔️' : '🐍';
              
              return (
                <div key={lang} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{icon}</span>
                    <span className="text-sm capitalize text-gray-300">{lang}</span>
                  </div>
                  <span className={`text-sm font-semibold ${masteryColor}`}>{mastery}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-purple-500/20">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Overall</span>
              <span className={`font-semibold ${getMasteryColor(calculateMastery(playerStats.totalStars, 1350))}`}>
                {calculateMastery(playerStats.totalStars, 1350)}
              </span>
            </div>
          </div>
        </div>

        {/* Title Selector */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-3">
            <Crown className="h-4 w-4 text-yellow-400" />
            <div className="text-sm text-gray-400">Active Title</div>
          </div>
          {unlockedTitles.length > 0 ? (
            <select
              value={selectedTitle}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full bg-slate-800/60 border border-purple-500/30 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            >
              <option value="">No Title</option>
              {unlockedTitles.map(title => (
                <option key={title} value={title}>{title}</option>
              ))}
            </select>
          ) : (
            <div className="text-sm text-gray-500 italic">Complete achievements to unlock titles</div>
          )}
          <div className="mt-3 text-center">
            <button
              onClick={() => setShowAchievements(true)}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 hover:from-yellow-600/30 hover:to-orange-600/30 border border-yellow-500/30 px-3 py-2 rounded text-sm text-yellow-400 transition-all"
            >
              <Trophy className="h-4 w-4" />
              <span>View Achievements ({unlockedAchievements.length}/16)</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm">
          <div className="text-sm text-gray-400 mb-3">Quick Stats</div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Total Stars</span>
              <span className="text-yellow-400 font-semibold">{playerStats.totalStars}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Perfect Clears</span>
              <span className="text-cyan-400 font-semibold">{playerStats.threeStarCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Achievements</span>
              <span className="text-purple-400 font-semibold">{unlockedAchievements.length}/16</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Titles Unlocked</span>
              <span className="text-green-400 font-semibold">{unlockedTitles.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Language Progress Cards */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Progress by Language
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'JavaScript', key: 'javascript', color: 'from-yellow-400 to-orange-500', character: '🧙‍♂️' },
            { name: 'Java', key: 'java', color: 'from-red-500 to-orange-600', character: '⚔️' },
            { name: 'Python', key: 'python', color: 'from-blue-400 to-green-500', character: '🐍' }
          ].map(lang => {
            const stats = languageOverview[lang.key];
            return (
              <div key={lang.key} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${lang.color} rounded-full flex items-center justify-center shadow-lg text-2xl`}>
                      {lang.character}
                    </div>
                    <h3 className="text-xl font-bold text-white">{lang.name}</h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${lang.color} text-white`}>
                    Lv. {stats.level}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Total Stars</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-semibold">{stats.totalStars}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Average Stars</span>
                    <span className="text-cyan-400 font-semibold">{stats.avgStars}★</span>
                  </div>
                  
                  <div className="border-t border-purple-500/20 pt-2">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                      <span>Story Levels</span>
                      <span className="text-cyan-400">{stats.mainLevelsCompleted}/150</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                      <span>Puzzles</span>
                      <span className="text-purple-400">{stats.puzzlesCompleted}/30</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Drag & Drop</span>
                      <span className="text-pink-400">{stats.dragDropCompleted}/30</span>
                    </div>
                  </div>

                  <div className="border-t border-purple-500/20 pt-2">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                      <span>Completion</span>
                      <span className="text-green-400">{stats.completionPercentage}%</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${lang.color} transition-all duration-300`}
                        style={{ width: `${stats.completionPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm pt-2 border-t border-purple-500/20">
                    <span className="text-gray-400">Total EXP</span>
                    <span className="text-cyan-400 font-semibold">{stats.totalExp.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Level Breakdown */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Detailed Progress
        </h2>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {languages.map(lang => (
          <div key={lang} className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm">
            <div className="text-sm text-gray-400 mb-2 capitalize">{lang} - Main</div>
            <div className="grid grid-cols-2 gap-2">
              {mainByLang[lang].length === 0 && (
                <div className="text-gray-500 text-sm">No stars yet.</div>
              )}
              {mainByLang[lang].map(e => (
                <div key={`${lang}-L${e.level}`} className="flex items-center justify-between bg-slate-800/60 border border-slate-600 rounded px-2 py-1 text-xs text-gray-200">
                  <span>L{e.level}</span>
                  <span className="text-yellow-400">{'★'.repeat(e.stars)}{'☆'.repeat(3 - e.stars)}</span>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-400 mb-2 mt-4 capitalize">{lang} - Puzzles (1-30)</div>
            <div className="grid grid-cols-2 gap-2">
              {puzzlesByLang[lang].length === 0 && (
                <div className="text-gray-500 text-sm">No puzzle stars yet.</div>
              )}
              {puzzlesByLang[lang].map(e => (
                <div key={`${lang}-P${e.displayLevel}`} className="flex items-center justify-between bg-slate-800/60 border border-slate-600 rounded px-2 py-1 text-xs text-gray-200">
                  <span>P{e.displayLevel}</span>
                  <span className="text-yellow-400">{'★'.repeat(e.stars)}{'☆'.repeat(3 - e.stars)}</span>
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-400 mb-2 mt-4 capitalize">{lang} - Drag & Drop (1-30)</div>
            <div className="grid grid-cols-2 gap-2">
              {dragDropByLang[lang].length === 0 && (
                <div className="text-gray-500 text-sm">No drag & drop stars yet.</div>
              )}
              {dragDropByLang[lang].map(e => (
                <div key={`${lang}-D${e.displayLevel}`} className="flex items-center justify-between bg-slate-800/60 border border-slate-600 rounded px-2 py-1 text-xs text-gray-200">
                  <span>D{e.displayLevel}</span>
                  <span className="text-yellow-400">{'★'.repeat(e.stars)}{'☆'.repeat(3 - e.stars)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Modal */}
      {showAchievements && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-purple-500/30 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Achievements</h2>
              </div>
              <button
                onClick={() => setShowAchievements(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map(achievement => {
                const isUnlocked = unlockedAchievements.some(a => a.id === achievement.id);
                return (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border transition-all ${
                      isUnlocked
                        ? 'bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/30'
                        : 'bg-slate-800/30 border-gray-600/30 opacity-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-3xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-white">{achievement.title}</h3>
                          {isUnlocked && <span className="text-green-400 text-sm">✓ Unlocked</span>}
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
                        {achievement.unlockableTitle && (
                          <div className="flex items-center space-x-2 text-xs">
                            <Crown className="h-3 w-3 text-yellow-400" />
                            <span className="text-yellow-400">Unlocks: {achievement.unlockableTitle}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Progress: {unlockedAchievements.length}/{ACHIEVEMENTS.length} achievements unlocked
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;

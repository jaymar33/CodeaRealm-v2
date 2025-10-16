import React, { useState, useEffect } from 'react';
import { Sword, Shield, Wand2, Settings, Star, Lock, Play, CheckCircle, X } from 'lucide-react';
import { Page } from '../App';
import { loadPlayerProgress } from '../utils/firestore';
import { getSuggestionBanner, unlockLessonsBasedOnPerformance } from '../utils/adaptiveAI';
import { javascriptChallenges, javaChallenges, pythonChallenges } from '../data/challenges';
import { getLessonInfo, getLevelNarrative } from '../data/lessonTitles';

interface GameOverviewProps {
  onNavigate: (page: Page) => void;
  selectedLanguage: 'javascript' | 'java' | 'python';
  setSelectedLanguage: (language: 'javascript' | 'java' | 'python') => void;
}

const GameOverview: React.FC<GameOverviewProps> = ({ onNavigate, selectedLanguage, setSelectedLanguage }) => {
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Start with first 3 lessons (9 levels) unlocked
  const [showPuzzleModal, setShowPuzzleModal] = useState(false);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [showDragDropModal, setShowDragDropModal] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  // Load progress based on user authentication status
  useEffect(() => {
    const userId = localStorage.getItem('userId') || 'guest';
    const userEmail = localStorage.getItem('userEmail') || '';
    
    if (userId === 'guest') {
      // For guest users, use localStorage with language-specific keys
      const languageKey = `guest_${selectedLanguage}_completedLevels`;
      const unlockedKey = `guest_${selectedLanguage}_unlockedLevels`;
      
      const storedCompleted = JSON.parse(localStorage.getItem(languageKey) || '[]');
      const storedUnlocked = JSON.parse(localStorage.getItem(unlockedKey) || '[1,2,3,4,5,6,7,8,9]'); // First 3 lessons (9 levels) unlocked
      setCompletedLevels(storedCompleted);
      setUnlockedLevels(storedUnlocked);
    } else {
      // For authenticated users, load from Firestore
      loadUserProgress(userId);
    }
    
    // Always ensure minimum unlocking
    ensureMinimumUnlocking();
  }, [selectedLanguage]);

  // Ensure minimum unlocking (always at least 3 levels unlocked)
  const ensureMinimumUnlocking = () => {
    const userId = localStorage.getItem('userId') || 'guest';
    const unlockedKey = userId === 'guest' 
      ? `guest_${selectedLanguage}_unlockedLevels`
      : `${selectedLanguage}_unlockedLevels`;
    
    const storedUnlocked = JSON.parse(localStorage.getItem(unlockedKey) || '[]');
    
    // Ensure at least 3 levels (1 lesson) are always unlocked
    const minUnlocked = [1, 2, 3];
    const finalUnlocked = [...new Set([...minUnlocked, ...storedUnlocked])].sort((a, b) => a - b);
    
    // Ensure we don't exceed 9 levels (3 lessons) unless user is performing exceptionally
    const maxUnlocked = Math.min(9, ...finalUnlocked);
    const cappedUnlocked = finalUnlocked.filter(level => level <= maxUnlocked);
    
    setUnlockedLevels(cappedUnlocked);
    localStorage.setItem(unlockedKey, JSON.stringify(cappedUnlocked));
  };

  // Apply adaptive progression when levels are completed
  const applyAdaptiveProgression = (completedLevel: number) => {
    const userId = localStorage.getItem('userId') || 'guest';
    
    // Get current performance metrics for this level
    const starKey = userId === 'guest' 
      ? `guest_${selectedLanguage}_level_${completedLevel}_stars`
      : `${userId}_${selectedLanguage}_level_${completedLevel}_stars`;
    const stars = parseInt(localStorage.getItem(starKey) || '0');
    
    // Create metrics for adaptive AI
    const metrics = {
      language: selectedLanguage,
      level: completedLevel,
      attempts: 1, // Default, could be tracked more precisely
      timeTakenSeconds: 120, // Default 2 minutes
      usedHint: false,
      hadErrors: stars < 3,
      stars: stars
    };
    
    // Get adaptive unlocking recommendation
    const newUnlockedLevels = unlockLessonsBasedOnPerformance(
      userId,
      selectedLanguage,
      completedLevel,
      metrics
    );
    
    // Apply the new unlocked levels
    if (newUnlockedLevels.length > 0) {
      const currentUnlocked = [...unlockedLevels];
      newUnlockedLevels.forEach(level => {
        if (!currentUnlocked.includes(level)) {
          currentUnlocked.push(level);
        }
      });
      
      // Ensure we always have at least 1 lesson (3 levels) unlocked
      const minUnlocked = Math.max(3, ...currentUnlocked);
      for (let i = 1; i <= minUnlocked; i++) {
        if (!currentUnlocked.includes(i)) {
          currentUnlocked.push(i);
        }
      }
      
      // Ensure we never unlock more than 3 lessons (9 levels) at once
      const maxUnlocked = Math.min(9, ...currentUnlocked);
      const finalUnlocked = currentUnlocked.filter(level => level <= maxUnlocked);
      
      setUnlockedLevels(finalUnlocked);
      
      // Save to localStorage
      const unlockedKey = userId === 'guest' 
        ? `guest_${selectedLanguage}_unlockedLevels`
        : `${selectedLanguage}_unlockedLevels`;
      localStorage.setItem(unlockedKey, JSON.stringify(finalUnlocked));
    }
  };

  // Listen for authentication changes
  useEffect(() => {
    const handleAuthChange = () => {
      const userId = localStorage.getItem('userId') || 'guest';
      if (userId === 'guest') {
        // Clear any user progress and load guest progress
        const languageKey = `guest_${selectedLanguage}_completedLevels`;
        const unlockedKey = `guest_${selectedLanguage}_unlockedLevels`;
        
        const storedCompleted = JSON.parse(localStorage.getItem(languageKey) || '[]');
        const storedUnlocked = JSON.parse(localStorage.getItem(unlockedKey) || '[1,2,3,4,5,6,7,8,9]'); // First 3 lessons (9 levels) unlocked
        setCompletedLevels(storedCompleted);
        setUnlockedLevels(storedUnlocked);
      } else {
        // Load user progress
        loadUserProgress(userId);
      }
    };

    // Listen for storage changes (when user logs in/out)
    window.addEventListener('storage', handleAuthChange);
    
    // Listen for custom auth events
    window.addEventListener('authStateChanged', handleAuthChange);
    
    // Also check on component mount
    handleAuthChange();

    return () => {
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('authStateChanged', handleAuthChange);
    };
  }, []);

  // Listen for level completions and apply adaptive progression
  useEffect(() => {
    const handleLevelCompletion = () => {
      // Check if any new levels have been completed
      const userId = localStorage.getItem('userId') || 'guest';
      const languageKey = userId === 'guest' 
        ? `guest_${selectedLanguage}_completedLevels`
        : `${selectedLanguage}_completedLevels`;
      
      const storedCompleted = JSON.parse(localStorage.getItem(languageKey) || '[]');
      const newCompleted = storedCompleted.filter((level: number) => !completedLevels.includes(level));
      
      // Apply adaptive progression for each newly completed level
      newCompleted.forEach((level: number) => {
        applyAdaptiveProgression(level);
      });
      
      // Update completed levels
      setCompletedLevels(storedCompleted);
    };

    // Listen for storage changes
    window.addEventListener('storage', handleLevelCompletion);
    window.addEventListener('statsUpdate', handleLevelCompletion);
    
    return () => {
      window.removeEventListener('storage', handleLevelCompletion);
      window.removeEventListener('statsUpdate', handleLevelCompletion);
    };
  }, [selectedLanguage, completedLevels, unlockedLevels]);

  const loadUserProgress = async (userId: string) => {
    try {
      // Load progress from Firestore
      const progress = await loadPlayerProgress(userId);
      if (progress) {
        // Load language-specific progress
        const languageKey = `${selectedLanguage}_completedLevels`;
        const unlockedKey = `${selectedLanguage}_unlockedLevels`;
        
        setCompletedLevels(progress[languageKey] || []);
        setUnlockedLevels(progress[unlockedKey] || [1, 2, 3, 4, 5, 6, 7, 8, 9]);
      } else {
        // If no saved progress, start fresh
        setCompletedLevels([]);
        setUnlockedLevels([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      }
    } catch (error) {
      console.error('Error loading user progress:', error);
      // Fallback to default
      setCompletedLevels([]);
      setUnlockedLevels([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
  };
  const languages = [
    {
      id: 'javascript' as const,
      name: 'JavaScript',
      color: 'from-yellow-400 to-orange-500',
      description: 'The Web Wizard\'s Path',
      character: '🧙‍♂️',
      difficulty: 'Easy'
    },
    {
      id: 'java' as const,
      name: 'Java',
      color: 'from-red-500 to-orange-600',
      description: 'The Code Knight\'s Journey',
      character: '⚔️',
      difficulty: 'Intermediate'
    },
    {
      id: 'python' as const,
      name: 'Python',
      color: 'from-blue-400 to-green-500',
      description: 'The Data Sage\'s Quest',
      character: '🐍',
      difficulty: 'Easy'
    }
  ];

  const questTypes = [
    {
      name: 'Story Quests',
      icon: Sword,
      color: 'text-cyan-400',
      description: 'Follow epic narratives while solving coding challenges',
      clickable: false
    },
    {
      name: 'Drag & Drop',
      icon: Shield,
      color: 'text-purple-400',
      description: 'Arrange code blocks to learn syntax patterns',
      clickable: true,
      onClick: () => setShowDragDropModal(true)
    },
    {
      name: 'Code Puzzles',
      icon: Wand2,
      color: 'text-green-400',
      description: 'Solve focused coding challenges (1-30 levels)',
      clickable: true,
      onClick: () => setShowPuzzleModal(true)
    }
  ];

  // Get 30 puzzle descriptors (10 easy, 10 intermediate, 10 advanced)
  const getPuzzles = () => {
    const difficulties = (i: number) => (i < 10 ? 'beginner' : i < 20 ? 'intermediate' : 'advanced') as const;
    const descriptions = [
      // Beginner (1-10)
      'Basic variable operations', 'Simple math calculations', 'String concatenation', 'Basic conditionals',
      'Array indexing', 'Loop fundamentals', 'Function basics', 'Object property access',
      'Type conversion', 'Simple algorithms',
      // Intermediate (11-20)
      'Array manipulation', 'String processing', 'Nested loops', 'Complex conditionals',
      'Function composition', 'Object methods', 'Error handling', 'Data structures',
      'Algorithm patterns', 'Performance optimization',
      // Advanced (21-30)
      'Recursive algorithms', 'Dynamic programming', 'Complex data structures', 'Advanced patterns',
      'Memory management', 'Concurrency concepts', 'Design patterns', 'System architecture',
      'Performance analysis', 'Advanced optimization'
    ];
    
    return Array.from({ length: 30 }, (_, i) => {
      const idx = i + 1;
      return {
        title: `Puzzle ${idx}`,
        description: descriptions[i] || 'Advanced coding challenge',
        story: 'Sharpen your skills with focused challenges.',
        type: 'puzzle',
        difficulty: difficulties(i),
        level: 1000 + idx // decouple from main lessons
      } as any;
    });
  };

  const generateLevels = () => {
    // 50 lessons × 3 levels each = 150 levels; show lessons with their 3 sub-levels on click
    return Array.from({ length: 50 }, (_, i) => {
      const lessonNum = i + 1;
      const levelNum = (lessonNum - 1) * 3 + 1; // representative level for the card
      const maxUnlocked = Math.max(3, ...unlockedLevels, 0);
      const isUnlocked = levelNum <= maxUnlocked || unlockedLevels.includes(levelNum) || unlockedLevels.includes(levelNum + 1) || unlockedLevels.includes(levelNum + 2);
      const userId = localStorage.getItem('userId') || 'guest';
      // Stars: prefer user stars; fallback to guest stars
      const starsFor = (n: number) => {
        const userStarKey = `${userId}_${selectedLanguage}_level_${n}_stars`;
        const guestStarKey = `guest_${selectedLanguage}_level_${n}_stars`;
        let s = parseInt(localStorage.getItem(userStarKey) || '0');
        if ((!s || s === 0) && userId !== 'guest') s = parseInt(localStorage.getItem(guestStarKey) || '0');
        return s;
      };
      const stars1 = starsFor(levelNum);
      const stars2 = starsFor(levelNum + 1);
      const stars3 = starsFor(levelNum + 2);
      const stars = Math.round((stars1 + stars2 + stars3) / 3);
      if ((!stars || stars === 0) && userId !== 'guest') {
        // already handled in starsFor
      }
      const isCompleted = (stars1 > 0 && stars2 > 0 && stars3 > 0) || completedLevels.includes(levelNum) || completedLevels.includes(levelNum + 1) || completedLevels.includes(levelNum + 2);
      
      // stars already resolved above
      
      return {
        level: lessonNum,
        title: `Lesson ${lessonNum}: ${getLessonTitle(lessonNum, selectedLanguage)}`,
        unlocked: isUnlocked,
        completed: isCompleted,
        stars,
        difficulty: lessonNum <= 20 ? 'Easy' : lessonNum <= 40 ? 'Intermediate' : 'Advanced'
      };
    });
  };

  const handleLevelClick = (level: number) => {
    if (unlockedLevels.includes(level)) {
      // Navigate to CodeEditor with the selected level
      onNavigate('code-editor');
      // Store the selected level in localStorage for the CodeEditor to pick up
      localStorage.setItem('selectedLevel', level.toString());
    }
  };

  // New: handle lesson click (each lesson has 3 sub-levels)
  const handleLessonClick = (lessonNum: number) => {
    // Open lesson modal instead of navigating directly
    setSelectedLesson(lessonNum);
    setShowLessonModal(true);
  };
  
  const handleLevelSelection = (level: number) => {
    localStorage.setItem('selectedLevel', String(level));
    setShowLessonModal(false);
    onNavigate('code-editor');
  };

  // Separate handler for puzzles - they're always unlocked!
  const handlePuzzleClick = (level: number) => {
    // Navigate to CodeEditor with the selected puzzle level
    onNavigate('code-editor');
    // Store the selected level in localStorage for the CodeEditor to pick up
    localStorage.setItem('selectedLevel', level.toString());
  };

  const getLessonTitle = (lesson: number, language: string) => {
    const js: string[] = [
      'Intro & Syntax', 'Variables & Data Types', 'Operators', 'Conditionals', 'Loops',
      'Functions', 'Scope & Hoisting', 'Arrays Basics', 'Array Methods', 'Objects Basics',
      'Object Methods', 'Prototypes & Classes', 'Strings & Methods', 'Numbers & Math', 'Dates & Times',
      'DOM Basics', 'DOM Events', 'Forms & Validation', 'BOM & Window', 'Error Handling',
      'Regular Expressions', 'JSON & Storage', 'Fetch & HTTP', 'Promises', 'Async/Await',
      'Modules (ES6)', 'Iterators & Generators', 'Map & Set', 'WeakMap & WeakSet', 'Destructuring & Spread',
      'Template Literals', 'Rest Params & Default', 'Closures', 'Currying & Composition', 'Performance & Big-O',
      'Debugging Tools', 'Unit Testing Basics', 'Tooling (NPM/Vite)', 'Type Checks & TS Intro', 'Patterns: Factory/Module',
      'Patterns: Observer', 'Patterns: Singleton', 'Web APIs: Canvas', 'Web APIs: Geolocation', 'Storage & IndexedDB',
      'Workers & Service Workers', 'PWA Basics', 'Accessibility Basics', 'Security Basics', 'Best Practices'
    ];
    const ja: string[] = [
      'Intro & Syntax', 'Variables & Types', 'Operators', 'Conditionals', 'Loops',
      'Methods', 'Classes & Objects', 'OOP Principles', 'Inheritance', 'Polymorphism',
      'Abstraction & Interfaces', 'Packages & Access', 'Exceptions', 'Strings & Regex', 'Arrays',
      'Collections Basics', 'Generics', 'Streams API', 'Lambdas', 'Date/Time API',
      'File I/O & NIO', 'Serialization', 'Networking', 'Annotations & Enums', 'Inner & Nested Classes',
      'Reflection', 'JVM & GC Basics', 'Multithreading', 'Concurrency Utils', 'Memory Model',
      'Logging', 'Build Tools (Maven)', 'Testing (JUnit)', 'Dependency Injection', 'JDBC & Databases',
      'HTTP & JSON', 'REST Basics', 'Spring Boot Intro', 'Security Basics', 'Configuration & Profiles',
      'Internationalization', 'JavaFX Basics', 'Performance Tuning', 'Profiling & Debugging', 'Packaging & Deployment',
      'Cloud & Microservices', 'Messaging (JMS)', 'Design Patterns', 'Best Practices', 'Interview Prep'
    ];
    const py: string[] = [
      'Intro & Syntax', 'Variables & Types', 'Operators', 'Conditionals', 'Loops',
      'Functions', 'Modules & Packages', 'Virtual Environments', 'Strings', 'Lists',
      'Tuples', 'Sets', 'Dictionaries', 'Comprehensions', 'Exception Handling',
      'File I/O', 'Datetime & Time', 'Regex', 'JSON & CSV', 'OS/Sys/Subprocess',
      'Iterators & Generators', 'Decorators', 'Context Managers', 'Typing & Dataclasses', 'Testing (pytest)',
      'Logging', 'Requests & HTTP', 'Web Scraping', 'Asyncio', 'Multiprocessing & Threading',
      'NumPy Basics', 'Pandas Basics', 'Visualization (Matplotlib)', 'Seaborn', 'Scikit-learn Intro',
      'Flask Basics', 'Django Basics', 'APIs & FastAPI Intro', 'Packaging & Distribution', 'Performance & Profiling',
      'Security Basics', 'Data Pipelines', 'CLI Applications', 'Automation Scripts', 'Notebooks & Reproducibility',
      'Cloud & Deployment', 'Best Practices', 'Interview Prep', 'Project: Capstone'
    ];
    const map: { [k: string]: string[] } = { javascript: js, java: ja, python: py };
    return map[language]?.[lesson - 1] || `Lesson ${lesson}`;
  };

  const levels = generateLevels();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Welcome to CodeRealm
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            In the mystical realm of CodeRealm, programming knowledge is the ultimate power. 
            Choose your language, embark on epic quests, and master the ancient arts of coding 
            through immersive storytelling and challenging adventures.
          </p>
        </div>
      </section>

      {/* AI Suggestion Banner */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          {(() => {
            const userId = localStorage.getItem('userId') || 'guest';
            const banner = getSuggestionBanner(userId, selectedLanguage);
            if (!banner) return null;
            return (
              <div className="mb-6 bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-500/30 rounded-xl p-4 text-left">
                <div className="text-cyan-400 font-semibold">{banner.title}</div>
                <div className="text-gray-300 text-sm">{banner.body}</div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Language Selection */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-16 text-cyan-400">
            Choose Your Programming Path
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((lang) => (
              <div
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`cursor-pointer group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  selectedLanguage === lang.id 
                    ? 'border-cyan-500/80 shadow-lg shadow-cyan-500/25' 
                    : 'border-purple-500/30 hover:border-cyan-500/50'
                }`}
              >
                <div className="text-center">
                  <div className={`w-24 h-24 bg-gradient-to-br ${lang.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform text-4xl`}>
                    {lang.character}
                  </div>
                  <h3 className="text-2xl font-heading mb-2 text-white">{lang.name}</h3>
                  <p className="text-cyan-400 font-subheading mb-4">{lang.description}</p>
                  <div className="inline-block bg-purple-600/20 px-3 py-1 rounded-full text-sm text-purple-300 border border-purple-500/30">
                    {lang.difficulty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Mechanics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-400">
            Game Mechanics
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Coding to Progress</h3>
                <p className="text-gray-300 text-lg">
                  Every challenge requires real code to solve. Write functions, debug programs, 
                  and build applications to advance through the story and unlock new areas.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Adaptive Learning</h3>
                <p className="text-gray-300 text-lg">
                  The difficulty adjusts to your skill level, providing hints for beginners 
                  and advanced challenges for experienced coders.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Real-time Feedback</h3>
                <p className="text-gray-300 text-lg">
                  Get instant feedback on your code with detailed error messages, 
                  suggestions, and explanations to help you learn from mistakes.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-sm">
              <div className="text-center">
                <Settings className="h-24 w-24 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Interactive Code Editor</h3>
                <p className="text-gray-300">
                  Full-featured editor with syntax highlighting, auto-completion, 
                  and debugging tools integrated into every challenge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quest Types */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-400">
            Types of Quests
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {questTypes.map((quest) => (
              <div 
                key={quest.name} 
                onClick={quest.clickable ? quest.onClick : undefined}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 ${
                  quest.clickable ? 'cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20' : ''
                }`}
              >
                <quest.icon className={`h-16 w-16 ${quest.color} mb-6`} />
                <h3 className="text-xl font-bold mb-4 text-white flex items-center justify-between">
                  {quest.name}
                  {quest.clickable && <Play className="h-5 w-5 text-green-400" />}
                </h3>
                <p className="text-gray-300">{quest.description}</p>
                {quest.clickable && (
                  <p className="text-green-400 text-sm mt-4 font-semibold">Click to view puzzles →</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Level Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
              {languages.find(l => l.id === selectedLanguage)?.name} Journey
            </h2>
            <p className="text-xl text-gray-300">
              150 Progressive Levels (50 Lessons × 3 Levels) • Story-Driven Challenges • Real Code Practice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {levels.map((level) => (
              <div
                key={level.level}
                onClick={() => handleLessonClick(level.level)}
                className={`relative p-6 rounded-xl border transition-all duration-300 ${
                  level.unlocked
                    ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/30 hover:border-cyan-500/50 cursor-pointer hover:transform hover:scale-105'
                    : 'bg-gray-900/30 border-gray-700/30 opacity-60'
                }`}
              >
                {!level.unlocked && (
                  <Lock className="absolute top-2 right-2 h-5 w-5 text-gray-500" />
                )}
                {level.completed && (
                  <CheckCircle className="absolute top-2 right-2 h-5 w-5 text-green-400" />
                )}
                
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-2 ${level.unlocked ? 'text-cyan-400' : 'text-gray-500'}`}>
                    {level.level}
                  </div>
                  <h4 className={`font-semibold mb-2 text-sm ${level.unlocked ? 'text-white' : 'text-gray-500'}`}>
                    {level.title}
                  </h4>
                  
                  {level.unlocked && (
                    <div className="flex justify-center mb-2">
                      {[1, 2, 3].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= level.stars
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    level.difficulty === 'Easy'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : level.difficulty === 'Intermediate'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {level.difficulty}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => { localStorage.setItem('selectedLevel', '1'); onNavigate('code-editor'); }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Play className="h-6 w-6" />
              <span>Start Lesson 1</span>
            </button>
          </div>
        </div>
      </section>

      {/* Puzzle Modal */}
      {showPuzzleModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-green-500/50 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent flex items-center space-x-2">
                  <Wand2 className="h-8 w-8 text-green-400" />
                  <span>Code Puzzles</span>
                </h2>
                <p className="text-gray-300 mt-2">
                  Test your problem-solving skills with these coding challenges
                </p>
              </div>
              <button
                onClick={() => setShowPuzzleModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Puzzles Grid */}
            <div className="grid grid-cols-5 gap-3">
              {getPuzzles().map((puzzle, index) => {
                // Puzzles are always unlocked!
                const isCompleted = completedLevels.includes(puzzle.level);
                const userId = localStorage.getItem('userId') || 'guest';
                const puzzleNumber = puzzle.level - 1000; // Extract actual puzzle number from level (1001 -> 1, 1002 -> 2, etc.)
                const puzzleStarKey = userId === 'guest'
                  ? `guest_${selectedLanguage}_puzzle_${puzzleNumber}_stars`
                  : `${userId}_${selectedLanguage}_puzzle_${puzzleNumber}_stars`;
                const stars = parseInt(localStorage.getItem(puzzleStarKey) || '0');

                return (
                  <div
                    key={puzzle.level}
                    onClick={() => {
                      setShowPuzzleModal(false);
                      // Enter puzzle mode with actual puzzle number
                      console.log(`🧩 GameOverview: Starting puzzle ${puzzleNumber} for ${selectedLanguage}`);
                      localStorage.setItem('selectedMode', 'puzzle');
                      localStorage.setItem('selectedPuzzleIndex', String(puzzleNumber));
                      onNavigate('code-editor');
                    }}
                    className="relative p-3 rounded-lg border transition-all duration-300 bg-gradient-to-br from-green-900/30 to-cyan-900/30 border-green-500/30 hover:border-green-500/70 cursor-pointer hover:transform hover:scale-105"
                    title={puzzle.description}
                  >
                    {isCompleted && (
                      <CheckCircle className="absolute top-4 right-4 h-5 w-5 text-green-400" />
                    )}

                    {/* Puzzle Number + Stars */}
                    <div className="text-center">
                      <div className="text-sm font-heading text-white mb-1">P{puzzleNumber}</div>
                      <div className="text-xs text-gray-300 mb-2 px-1 font-body">{puzzle.description}</div>
                      <div className="flex justify-center space-x-1 mb-2">
                        {[1, 2, 3].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-3 w-3 ${
                              star <= stars ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        puzzle.difficulty === 'beginner' 
                          ? 'bg-green-500/20 text-green-400' 
                          : puzzle.difficulty === 'intermediate'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {puzzle.difficulty}
                      </div>
                    </div>

                    {/* Play button */}
                    {!isCompleted && (
                      <div className="mt-4 flex items-center text-green-400 text-sm font-semibold">
                        <Play className="h-4 w-4 mr-1" />
                        Start Puzzle
                      </div>
                    )}
                    {isCompleted && (
                      <div className="mt-4 flex items-center text-cyan-400 text-sm font-semibold">
                        <Play className="h-4 w-4 mr-1" />
                        Replay
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Info Box */}
            <div className="mt-6 bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                <strong className="text-green-400">💡 Tip:</strong> Code Puzzles are simple practice exercises perfect for beginners. 
                Take your time and use hints whenever you need help!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Drag & Drop Level Selector Modal */}
      {showDragDropModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-purple-500/30 rounded-2xl max-w-6xl w-full max-h-[80vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Drag & Drop Challenges</h2>
              </div>
              <button
                onClick={() => setShowDragDropModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Drag & Drop Grid */}
            <div className="grid grid-cols-5 gap-3">
              {Array.from({ length: 30 }, (_, i) => {
                const levelNum = i + 1;
                const difficulty: 'beginner' | 'intermediate' | 'advanced' = levelNum <= 10 ? 'beginner' : levelNum <= 20 ? 'intermediate' : 'advanced';
                const userId = localStorage.getItem('userId') || 'guest';
                const starKey = userId === 'guest'
                  ? `guest_${selectedLanguage}_dragdrop_${levelNum}_stars`
                  : `${userId}_${selectedLanguage}_dragdrop_${levelNum}_stars`;
                const stars = parseInt(localStorage.getItem(starKey) || '0');
                
                // Drag & Drop level descriptions
                const dragDropDescriptions = [
                  // Beginner (1-10)
                  'Basic variable declaration', 'Simple console output', 'Basic arithmetic operations', 'String concatenation',
                  'Simple conditionals', 'Array creation', 'Loop basics', 'Function declaration',
                  'Object property access', 'Type conversion',
                  // Intermediate (11-20)
                  'Array manipulation', 'String methods', 'Nested conditionals', 'Complex loops',
                  'Function parameters', 'Object methods', 'Error handling', 'Data validation',
                  'Algorithm patterns', 'Performance basics',
                  // Advanced (21-30)
                  'Recursive functions', 'Complex data structures', 'Advanced patterns', 'Memory optimization',
                  'Concurrency concepts', 'Design patterns', 'System architecture', 'Advanced algorithms',
                  'Performance analysis', 'Code optimization'
                ];
                
                return (
                  <button
                    key={levelNum}
                    onClick={() => {
                      setShowDragDropModal(false);
                      localStorage.setItem('selectedDragDropLevel', String(levelNum));
                      onNavigate('drag-drop');
                    }}
                    className="relative p-3 rounded-lg border transition-all duration-300 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border-purple-500/30 hover:border-purple-500/70 cursor-pointer hover:transform hover:scale-105"
                    title={dragDropDescriptions[i] || 'Advanced drag & drop challenge'}
                  >
                    <div className="text-center">
                      <div className="text-sm font-heading text-white mb-1">D{levelNum}</div>
                      <div className="text-xs text-gray-300 mb-2 px-1 font-body">{dragDropDescriptions[i]}</div>
                      <div className="flex justify-center space-x-1 mb-2">
                        {[1, 2, 3].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-3 w-3 ${
                              star <= stars ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        difficulty === 'beginner' 
                          ? 'bg-green-500/20 text-green-400' 
                          : difficulty === 'intermediate'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {difficulty}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Info Box */}
            <div className="mt-6 bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                <strong className="text-purple-400">🎯 Tip:</strong> Drag & Drop challenges help you learn syntax by arranging code blocks. 
                Perfect for visual learners and beginners!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lesson Selection Modal */}
      {showLessonModal && selectedLesson && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500/50 rounded-2xl p-8 max-w-2xl w-full shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => {setShowLessonModal(false); setSelectedLesson(null);}}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Lesson Info */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
                {getLessonInfo(selectedLesson).title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{getLessonInfo(selectedLesson).story}</p>
            </div>

            {/* Level Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Choose a Level:</h3>
              {[1, 2, 3].map((stage) => {
                const level = (selectedLesson - 1) * 3 + stage;
                const maxUnlocked = Math.max(3, ...unlockedLevels, 0);
                const isUnlocked = level <= maxUnlocked || unlockedLevels.includes(level);
                const isCompleted = completedLevels.includes(level);
                const userId = localStorage.getItem('userId') || 'guest';
                const starKey = userId === 'guest'
                  ? `guest_${selectedLanguage}_level_${level}_stars`
                  : `${userId}_${selectedLanguage}_level_${level}_stars`;
                const userStars = parseInt(localStorage.getItem(starKey) || '0');
                const guestStars = parseInt(localStorage.getItem(`guest_${selectedLanguage}_level_${level}_stars`) || '0');
                const stars = userId !== 'guest' && userStars === 0 ? guestStars : userStars;
                const narrative = getLevelNarrative(selectedLesson, stage as 1 | 2 | 3, selectedLanguage);

                return (
                  <div
                    key={stage}
                    onClick={() => isUnlocked && handleLevelSelection(level)}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      isUnlocked
                        ? 'bg-gradient-to-r from-purple-900/40 to-cyan-900/30 border-purple-500/30 hover:border-purple-500/70 cursor-pointer hover:transform hover:scale-105'
                        : 'bg-slate-900/40 border-slate-700 opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        {isCompleted ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : isUnlocked ? (
                          <Play className="h-5 w-5 text-cyan-400" />
                        ) : (
                          <Lock className="h-5 w-5 text-gray-600" />
                        )}
                        <span className={`font-semibold ${isUnlocked ? 'text-white' : 'text-gray-600'}`}>
                          Level {stage}/3 - {narrative.title.split(' - ')[1]}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3].map((s) => (
                          <Star 
                            key={s} 
                            className={`h-4 w-4 ${
                              s <= stars ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className={`text-sm ${isUnlocked ? 'text-gray-300' : 'text-gray-600'}`}>
                      {narrative.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Cancel Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {setShowLessonModal(false); setSelectedLesson(null);}}
                className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameOverview;
import React, { useEffect, useState } from 'react';
import { Sparkles, Brain, Eye, Zap, Shield, ChevronDown, ChevronUp, HelpCircle, BarChart3, Lightbulb } from 'lucide-react';
import { Page } from '../App';

interface ArcaneCodeEditorPanelProps {
  selectedLanguage: 'javascript' | 'java' | 'python';
  currentLevel: number;
  onNavigate: (page: Page) => void;
}

const ArcaneCodeEditorPanel: React.FC<ArcaneCodeEditorPanelProps> = ({ 
  selectedLanguage, 
  currentLevel, 
  onNavigate 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hint, setHint] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [hasErrors, setHasErrors] = useState<boolean>(false);
  const [usedHint, setUsedHint] = useState<boolean>(false);
  const [showStats, setShowStats] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const a = parseInt(localStorage.getItem('arcane_attempts') || '0');
      const t = parseInt(localStorage.getItem('arcane_time') || '0');
      const e = localStorage.getItem('arcane_errors') === '1';
      const h = localStorage.getItem('arcane_used_hint') === '1';
      
      setAttempts(a);
      setTimeElapsed(t);
      setHasErrors(e);
      setUsedHint(h);
      
      // Generate level-specific, realistic hints
      let next = '';
      
      if (e) {
        // Error handling - level specific
        if (currentLevel <= 3) {
          next = '🔍 I see an error! Read the red message carefully - it tells you exactly what went wrong. Look for typos in variable names or missing semicolons.';
        } else if (currentLevel <= 7) {
          next = '🔍 Error detected! Check your syntax carefully. Common issues: missing brackets, wrong variable names, or incorrect method calls.';
        } else {
          next = '🔍 Error found! Debug step by step: 1) Read the error message, 2) Check the line number, 3) Verify your logic flow.';
        }
      } else if (a >= 3 && !h) {
        // Multiple attempts without hint
        if (currentLevel <= 3) {
          next = '💡 You\'ve tried 3 times - that\'s brave! Try the hint button now. It\'s not cheating, it\'s learning the right approach!';
        } else if (currentLevel <= 7) {
          next = '💡 Three attempts without success? Try the hint to understand the pattern, then implement it yourself.';
        } else {
          next = '💡 Struggling after 3 tries? Use the hint to see the approach, then code your own solution.';
        }
      } else if (t > 75) {
        // Taking too long
        if (currentLevel <= 3) {
          next = '⏰ Take a breath! Break it down: 1) Write what you want to do as comments, 2) Write one line of code, 3) Test it.';
        } else if (currentLevel <= 7) {
          next = '⏰ Feeling stuck? Try this approach: 1) Plan your algorithm in comments, 2) Implement one piece at a time, 3) Test each piece.';
        } else {
          next = '⏰ Complex problem? Break it into smaller functions: 1) Define the main logic, 2) Create helper functions, 3) Test each component.';
        }
      } else if (h) {
        // Used hint
        if (currentLevel <= 3) {
          next = '✨ Great job using the hint! Now try writing the solution in your own words to really understand it.';
        } else if (currentLevel <= 7) {
          next = '✨ Good use of the hint! Now implement it yourself and try to understand why this approach works.';
        } else {
          next = '✨ Excellent! You used the hint wisely. Now code your own version and consider how to optimize it further.';
        }
      } else if (a === 1) {
        // First attempt
        if (currentLevel <= 3) {
          next = '🚀 Good start! Remember: write a little, test a little. Add console.log() to see what your variables contain.';
        } else if (currentLevel <= 7) {
          next = '🚀 Great beginning! Plan your approach first, then implement step by step. Use console.log() for debugging.';
        } else {
          next = '🚀 Excellent start! Think about the algorithm first, then implement with proper error handling and edge cases.';
        }
      } else {
        // General encouragement
        if (currentLevel <= 3) {
          next = '💪 Keep going! If stuck, try adding console.log() to see what your variables contain. Debugging is a superpower!';
        } else if (currentLevel <= 7) {
          next = '💪 You\'re doing well! If you get stuck, try breaking the problem into smaller parts or use console.log() to trace execution.';
        } else {
          next = '💪 Great progress! Remember to consider edge cases and error handling. Use debugging tools to trace through your logic.';
        }
      }
      
      setHint(next);
    }, 1200);
    return () => clearInterval(timer);
  }, [currentLevel]);

  const getLanguageIcon = () => {
    switch (selectedLanguage) {
      case 'javascript': return '🟨';
      case 'java': return '☕';
      case 'python': return '🐍';
      default: return '💻';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Collapsed State */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white p-4 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 animate-pulse"
          title="Open Arcane Mentor"
        >
          <Sparkles className="h-6 w-6" />
        </button>
      )}

      {/* Expanded State */}
      {isExpanded && (
        <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md border border-purple-500/50 rounded-xl shadow-2xl w-80 max-h-96 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 p-3 border-b border-purple-500/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-purple-400" />
                <span className="text-white font-semibold">Arcane Mentor</span>
                <span className="text-xs text-cyan-400">Lv.{currentLevel}</span>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setShowStats(!showStats)}
                  className="p-1 text-purple-400 hover:text-purple-300 transition-colors"
                  title="Toggle Stats"
                >
                  <BarChart3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setShowHelp(!showHelp)}
                  className="p-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                  title="Help"
                >
                  <HelpCircle className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                  title="Minimize"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            {/* Live Tip */}
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Lightbulb className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-cyan-300 font-semibold">Live Guidance</span>
              </div>
              <div className="text-gray-300 text-sm">{hint || 'Waiting for activity...'}</div>
            </div>

            {/* Current Status */}
            <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-3">
              <div className="text-sm text-purple-300 mb-2 font-semibold">Quest Status - Level {currentLevel}</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-gray-300">
                  <span className="text-gray-400">Realm:</span> {getLanguageIcon()} {selectedLanguage}
                </div>
                <div className="text-gray-300">
                  <span className="text-gray-400">Attempts:</span> <span className="text-cyan-400">{attempts}</span>
                </div>
                <div className="text-gray-300">
                  <span className="text-gray-400">Time:</span> <span className="text-cyan-400">{Math.round(timeElapsed)}s</span>
                </div>
                <div className="text-gray-300">
                  <span className="text-gray-400">Errors:</span> 
                  <span className={hasErrors ? 'text-red-400 ml-1' : 'text-green-400 ml-1'}>
                    {hasErrors ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Panel */}
            {showStats && (
              <div className="bg-slate-800/60 border border-cyan-500/30 rounded-lg p-3">
                <div className="text-sm text-cyan-300 mb-2 font-semibold">Your Progress</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-gray-300">
                    <span>Progress:</span>
                    <span className="text-cyan-400">{Math.min(100, (attempts * 20))}%</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Hint Usage:</span>
                    <span className={usedHint ? 'text-yellow-400' : 'text-green-400'}>
                      {usedHint ? 'Learning' : 'Independent'}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Status:</span>
                    <span className={hasErrors ? 'text-red-400' : 'text-green-400'}>
                      {hasErrors ? 'Debugging' : 'Clean'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Help Panel */}
            {showHelp && (
              <div className="bg-slate-800/60 border border-purple-500/30 rounded-lg p-3">
                <div className="text-sm text-purple-300 mb-2 font-semibold">About Arcane</div>
                <div className="space-y-2 text-xs text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Brain className="h-3 w-3 text-purple-400" />
                    <span>Watches your patterns and adapts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-3 w-3 text-purple-400" />
                    <span>Provides real-time hints</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-3 w-3 text-purple-400" />
                    <span>Unlocks up to 3 lessons ahead</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-3 w-3 text-purple-400" />
                    <span>Tracks progress without interfering</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('arcane-showcase')}
                  className="mt-3 w-full text-xs bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-3 py-2 rounded-lg transition-all duration-300"
                >
                  Learn More About Arcane
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArcaneCodeEditorPanel;

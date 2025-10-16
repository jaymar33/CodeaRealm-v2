import React, { useEffect, useState } from 'react';
import { X, Sparkles } from 'lucide-react';

interface ArcaneMentorPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ArcaneMentorPanel: React.FC<ArcaneMentorPanelProps> = ({ isOpen, onClose }) => {
  const [hint, setHint] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [hasErrors, setHasErrors] = useState<boolean>(false);
  const [usedHint, setUsedHint] = useState<boolean>(false);
  const [language, setLanguage] = useState<'javascript' | 'java' | 'python'>('javascript');
  const [currentLevel, setCurrentLevel] = useState<number>(1);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      const lang = (localStorage.getItem('arcane_lang') as any) || 'javascript';
      const a = parseInt(localStorage.getItem('arcane_attempts') || '0');
      const t = parseInt(localStorage.getItem('arcane_time') || '0');
      const e = localStorage.getItem('arcane_errors') === '1';
      const h = localStorage.getItem('arcane_used_hint') === '1';
      const level = parseInt(localStorage.getItem('arcane_level') || '1');
      setLanguage(lang);
      setAttempts(a);
      setTimeElapsed(t);
      setHasErrors(e);
      setUsedHint(h);
      setCurrentLevel(level);
      
      // Use improved hint logic from adaptiveAI
      let next = '';
      if (e) next = '🔍 I see an error! Look at the red error message - it tells you exactly what went wrong. Try reading it carefully and fixing just that one thing.';
      else if (a >= 3 && !h) next = '💡 You\'ve tried 3 times - that\'s brave! Try clicking the hint button now. It\'s not cheating, it\'s learning! Then make one small change and try again.';
      else if (t > 75) next = '⏰ Take a breath! Let\'s break this down: 1) Write comments explaining what you want to do, 2) Write one line of code, 3) Test it. Small steps work!';
      else if (h) next = '✨ Great job using the hint! Now try to write the solution in your own words. Understanding is better than copying - you\'re learning!';
      else if (a === 1) next = '🚀 Good start! Remember: write a little, test a little. If something doesn\'t work, add a print statement to see what\'s happening.';
      else next = '💪 Keep going! If you get stuck, try adding console.log() to see what your variables contain. Debugging is a superpower!';
      setHint(next);
    }, 1200);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-slate-900 border-l border-purple-500/30 p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span className="text-white font-semibold">Arcane Mentor</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-800/60 border border-purple-500/30 rounded-xl p-4">
            <div className="text-sm text-cyan-300 mb-1">Live Tip</div>
            <div className="text-gray-200 text-sm min-h-[40px]">{hint || 'Waiting for activity...'}</div>
          </div>
          <div className="bg-slate-800/60 border border-purple-500/30 rounded-xl p-4">
            <div className="text-sm text-cyan-300 mb-2">Current Status - Level {currentLevel}</div>
            <div className="text-gray-300 text-sm space-y-1">
              <div>Language: <span className="text-cyan-400 capitalize">{language}</span></div>
              <div>Attempts: <span className="text-cyan-400">{attempts}</span></div>
              <div>Active Time: <span className="text-cyan-400">{Math.round(timeElapsed)}s</span></div>
              <div>Errors: <span className={hasErrors ? 'text-red-400' : 'text-green-400'}>{hasErrors ? 'Yes' : 'No'}</span></div>
              <div>Hints Used: <span className={usedHint ? 'text-yellow-300' : 'text-gray-400'}>{usedHint ? 'Yes' : 'No'}</span></div>
            </div>
          </div>
          <div className="text-xs text-gray-400">The mentor watches your progress and suggests next steps. It doesn’t execute your code — that’s handled by the game’s judge.</div>
        </div>
      </div>
    </div>
  );
};

export default ArcaneMentorPanel;



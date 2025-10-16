import React, { useEffect, useState } from 'react';
import { Page } from '../App';
import { getLiveHint } from '../utils/adaptiveAI';
import { Sparkles, ArrowLeft } from 'lucide-react';

interface ArcaneMentorProps {
  onNavigate: (page: Page) => void;
}

const ArcaneMentor: React.FC<ArcaneMentorProps> = ({ onNavigate }) => {
  const [hint, setHint] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [hasErrors, setHasErrors] = useState<boolean>(false);
  const [usedHint, setUsedHint] = useState<boolean>(false);
  const [language, setLanguage] = useState<'javascript' | 'java' | 'python'>('javascript');

  useEffect(() => {
    const timer = setInterval(() => {
      const lang = (localStorage.getItem('arcane_lang') as any) || 'javascript';
      const a = parseInt(localStorage.getItem('arcane_attempts') || '0');
      const t = parseInt(localStorage.getItem('arcane_time') || '0');
      const e = localStorage.getItem('arcane_errors') === '1';
      const h = localStorage.getItem('arcane_used_hint') === '1';
      setLanguage(lang);
      setAttempts(a);
      setTimeElapsed(t);
      setHasErrors(e);
      setUsedHint(h);
      setHint(
        getLiveHint({
          language: lang,
          attempts: a,
          timeTakenSeconds: t,
          usedHint: h,
          hadErrors: e
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-16">
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="h-6 w-6 text-cyan-400" />
            <h1 className="text-3xl font-bold text-white">Arcane Mentor</h1>
          </div>
          <p className="text-gray-300 mb-6">Your magical guide that watches your journey and offers friendly tips in real time — without interfering with code execution. When signed in, Arcane saves your session stats so you can review progress over time.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-purple-500/30 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-2">Live Tips</h2>
              <div className="text-cyan-200 text-sm min-h-[48px]">{hint || 'Waiting for activity...'}</div>
            </div>

            <div className="bg-slate-900 border border-purple-500/30 rounded-xl p-5">
              <h2 className="text-white font-semibold mb-2">Current Status</h2>
              <div className="text-gray-300 text-sm space-y-1">
                <div>Language: <span className="text-cyan-400 capitalize">{language}</span></div>
                <div>Attempts this level: <span className="text-cyan-400">{attempts}</span></div>
                <div>Time active: <span className="text-cyan-400">{Math.round(timeElapsed)}s</span></div>
                <div>Errors detected: <span className={hasErrors ? 'text-red-400' : 'text-green-400'}>{hasErrors ? 'Yes' : 'No'}</span></div>
                <div>Hints toggled: <span className={usedHint ? 'text-yellow-300' : 'text-gray-400'}>{usedHint ? 'Yes' : 'No'}</span></div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-slate-900 border border-purple-500/30 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Saved Sessions</h2>
            <p className="text-gray-400 text-sm">(Coming soon) Signed-in players will see a timeline of their recent sessions here with attempts, time, and hints usage per level.</p>
          </div>

          <div className="mt-6 text-gray-300 text-sm">
            Tip: Keep this page open in a separate tab or window while you play. The mentor updates as you attempt, run, and debug levels.
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArcaneMentor;



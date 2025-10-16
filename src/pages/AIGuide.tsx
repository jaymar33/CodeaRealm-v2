import React from 'react';
import { ArrowLeft, Cpu, Sparkles } from 'lucide-react';
import { Page } from '../App';

interface AIGuideProps {
  onNavigate: (page: Page) => void;
}

const AIGuide: React.FC<AIGuideProps> = ({ onNavigate }) => {
  return (
    <div className="pt-16">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => onNavigate('game-overview')}
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Overview</span>
          </button>

          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Cpu className="h-7 w-7 text-cyan-400" />
              <h1 className="text-3xl font-bold text-white">Your AI Mentor</h1>
            </div>
            <p className="text-gray-300 mb-4">
              CodeRealm’s mentor is built for beginners. It watches for signs you might be stuck — like
              many attempts, long run times, or frequent errors — and gently offers hints you can toggle.
              When you’re cruising with 3★ victories, it may suggest skipping up to 3 levels to keep you
              challenged without getting bored.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/20 rounded-xl border border-purple-500/30 p-5">
                <h2 className="text-xl font-semibold text-white mb-2">What the AI Tracks</h2>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>Attempts per level (are you repeating a lot?)</li>
                  <li>Time to complete (is it taking too long?)</li>
                  <li>Hint usage (do you toggle hints often?)</li>
                  <li>Errors and output clues (what is the console saying?)</li>
                  <li>Stars earned (0–3)</li>
                </ul>
              </div>
              <div className="bg-black/20 rounded-xl border border-purple-500/30 p-5">
                <h2 className="text-xl font-semibold text-white mb-2">How AI Decides</h2>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  <li>Show friendly hints if you seem stuck</li>
                  <li>Advance normally if progress is steady</li>
                  <li>Offer up to +3 level skip when you consistently get 3★</li>
                  <li>Use fun prompts to cheer you on and keep motivation high</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl border border-purple-500/30 p-5">
                <h3 className="text-white font-semibold mb-2">Strengths</h3>
                <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm">
                  <li>Beginner-first hints that explain the why</li>
                  <li>Detects struggle early and offers help</li>
                  <li>Motivating prompts to keep momentum</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl border border-purple-500/30 p-5">
                <h3 className="text-white font-semibold mb-2">Weaknesses</h3>
                <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm">
                  <li>Does not execute your code (Judge0 does)</li>
                  <li>Relies on your output and behavior patterns</li>
                  <li>Might suggest repeats when you prefer exploration</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl border border-purple-500/30 p-5">
                <h3 className="text-white font-semibold mb-2">Best For</h3>
                <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm">
                  <li>Absolute beginners needing scaffolding</li>
                  <li>Learners who benefit from small steps</li>
                  <li>Anyone who enjoys gamified coaching</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-5">
              <div className="flex items-center space-x-2 text-cyan-300 mb-1">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Tip</span>
              </div>
              <p className="text-gray-300">As your consistency improves, the AI may offer to jump two levels. You can always ignore the suggestion and proceed one level at a time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIGuide;



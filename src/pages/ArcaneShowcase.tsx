import React from 'react';
import { Page } from '../App';
import { Sparkles, Brain, Eye, Zap, Shield, ArrowLeft } from 'lucide-react';

interface ArcaneShowcaseProps {
  onNavigate: (page: Page) => void;
}

const ArcaneShowcase: React.FC<ArcaneShowcaseProps> = ({ onNavigate }) => {
  return (
    <div className="pt-16">
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="h-12 w-12 text-cyan-400" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Arcane AI Mentor
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your personalized AI coding companion. Here's what I know about your journey so far:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Smart Analysis</h3>
                <p className="text-gray-300 text-sm">
                  Watches your coding patterns, attempts, and time to understand your learning style and struggles.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Real-time Guidance</h3>
                <p className="text-gray-300 text-sm">
                  Provides instant, beginner-friendly hints without interfering with your code execution.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Adaptive Progression</h3>
                <p className="text-gray-300 text-sm">
                  Unlocks up to 3 levels ahead when you consistently perform well, keeping you challenged.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-cyan-400">How I Guide Your Journey</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">What I Track</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-cyan-400" />
                    <span>Your attempts per level (per language)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-cyan-400" />
                    <span>Time spent on each challenge</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-cyan-400" />
                    <span>Hint usage patterns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-cyan-400" />
                    <span>Error types and console output</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-cyan-400" />
                    <span>Stars earned across all game modes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-cyan-400" />
                    <span>Progress in Story, Puzzle, and Drag & Drop</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">How I Adapt to You</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-purple-400" />
                    <span>Offers beginner-friendly hints when stuck</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-purple-400" />
                    <span>Explains errors in simple, clear terms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-purple-400" />
                    <span>Unlocks up to 3 lessons ahead for top performers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-purple-400" />
                    <span>Gives motivating feedback based on your progress</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-purple-400" />
                    <span>Syncs your progress across all devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-purple-400" />
                    <span>Tracks separate progress for each language</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('game-overview')}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Sparkles className="h-6 w-6" />
              <span>Start Your Journey with Arcane</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArcaneShowcase;


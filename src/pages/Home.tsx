import React from 'react';
import { Play, Gamepad2, TrendingUp, Code2, Star } from 'lucide-react';
import { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CodeRealm
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Embark on an epic coding adventure through the realms of JavaScript, Java, and Python. 
              Master programming through story-driven quests and interactive challenges.
            </p>
          </div>

          {/* Game Trailer Section */}
          <div className="mb-12">
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl border border-purple-500/30 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <Play className="h-24 w-24 text-cyan-400 mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform" />
                  <p className="text-lg text-gray-300">Watch Game Trailer</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('game-overview')}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <Gamepad2 className="h-6 w-6" />
            <span>Start Learning</span>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose CodeRealm?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Gamepad2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Interactive Learning</h3>
                <p className="text-gray-300">
                  Learn programming concepts through engaging storylines and interactive challenges designed for beginners.
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Real Code Editor</h3>
                <p className="text-gray-300">
                  Practice with a full-featured code editor with syntax highlighting, error detection, and instant feedback.
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Progress Tracking</h3>
                <p className="text-gray-300">
                  Track your journey with detailed progress indicators, achievements, and level unlocking system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tutorial */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">1) Pick a Path</h3>
              <p className="text-gray-300">Choose JavaScript, Java, or Python and start at Level 1.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">2) Solve Quests</h3>
              <p className="text-gray-300">Write real code, run it, and earn up to 3 stars per level.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">3) Adaptive AI</h3>
              <p className="text-gray-300">An AI mentor tracks your attempts/time and adjusts difficulty.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('arcane-showcase')}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <TrendingUp className="h-6 w-6" />
              <span>Meet Your AI Mentor</span>
            </button>
          </div>
        </div>
      </section>

      {/* Language Selection Preview */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Programming Path
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'JavaScript', 
                color: 'from-yellow-400 to-orange-500', 
                description: 'Master web development and create interactive applications',
                lessons: 50,
                levels: 150,
                difficulty: 'Beginner Friendly'
              },
              { 
                name: 'Java', 
                color: 'from-red-500 to-orange-600', 
                description: 'Learn object-oriented programming and enterprise development',
                lessons: 50,
                levels: 150,
                difficulty: 'Intermediate'
              },
              { 
                name: 'Python', 
                color: 'from-blue-400 to-green-500', 
                description: 'Explore data science, AI, and versatile programming concepts',
                lessons: 50,
                levels: 150,
                difficulty: 'Beginner Friendly'
              }
            ].map((lang) => (
              <div key={lang.name} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-20 h-20 bg-gradient-to-br ${lang.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform`}>
                  <Code2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{lang.name}</h3>
                <p className="text-gray-300 mb-6">{lang.description}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Lessons:</span>
                    <span className="text-cyan-400">{lang.lessons}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Levels:</span>
                    <span className="text-cyan-400">{lang.levels}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span className="text-cyan-400">{lang.difficulty}</span>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
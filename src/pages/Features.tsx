import React from 'react';
import { Code, Zap, Trophy, Target, MessageCircle, BarChart3, Puzzle, Shield } from 'lucide-react';
import { Page } from '../App';

interface FeaturesProps {
  onNavigate: (page: Page) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Code,
      title: 'Professional Code Editor',
      description: 'Full-featured editor with syntax highlighting, auto-completion, error detection, and debugging tools for JavaScript, Java, and Python.',
      color: 'text-cyan-400',
      bgColor: 'from-cyan-500/20 to-cyan-600/20'
    },
    {
      icon: Target,
      title: 'Quest-Based Learning',
      description: 'Learn through engaging storylines and missions. Each quest teaches specific programming concepts while advancing an epic narrative.',
      color: 'text-purple-400',
      bgColor: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: BarChart3,
      title: 'Adaptive Difficulty',
      description: 'AI-powered system that adjusts challenge difficulty based on your performance, ensuring optimal learning pace for every student.',
      color: 'text-green-400',
      bgColor: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Get real-time error detection, code suggestions, and detailed explanations to understand mistakes and improve quickly.',
      color: 'text-yellow-400',
      bgColor: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
      icon: Trophy,
      title: 'Progress Tracking',
      description: 'Comprehensive tracking system with achievements, skill trees, level progression, and detailed analytics of your learning journey.',
      color: 'text-orange-400',
      bgColor: 'from-orange-500/20 to-orange-600/20'
    },
    {
      icon: Puzzle,
      title: 'Interactive Challenges',
      description: 'Diverse challenge types including drag-and-drop coding, debugging quests, algorithm puzzles, and creative projects.',
      color: 'text-pink-400',
      bgColor: 'from-pink-500/20 to-pink-600/20'
    }
  ];

  const codeEditorFeatures = [
    'Syntax highlighting for JavaScript, Java, and Python',
    'Intelligent auto-completion and suggestions',
    'Real-time error detection and debugging',
    'Code formatting and style checking',
    'Integrated console and output display',
    'File management and project organization',
    'Customizable themes and layouts',
    'Keyboard shortcuts and productivity tools'
  ];

  const learningFeatures = [
    'Story-driven curriculum with character development',
    'Adaptive learning paths based on skill level',
    '150 levels per programming language (50 lessons × 3 levels)',
    'Multiple quest types: Story, Puzzle, Drag & Drop',
    'Comprehensive skill assessment system',
    'Peer collaboration and code sharing',
    'Mentor feedback and code reviews',
    'Industry-relevant project assignments'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            CodeRealm combines cutting-edge technology with proven educational methods 
            to create the most effective programming learning experience available.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Editor Spotlight */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
                Professional Code Editor
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience coding with our state-of-the-art editor that rivals industry-standard IDEs, 
                designed specifically for learning and practicing programming.
              </p>
              
              <div className="space-y-4">
                {codeEditorFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('code-editor')}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 mt-8"
              >
                <Code className="h-5 w-5" />
                <span>Try Code Editor</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-purple-500/30 p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">main.js</span>
                </div>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-500">// Welcome to CodeRealm</div>
                  <div className="text-blue-400">function <span className="text-yellow-400">greetAdventurer</span>(<span className="text-orange-400">name</span>) {'{'}</div>
                  <div className="text-white ml-4">console.log(<span className="text-green-400">`Welcome ${'${name}'} to CodeRealm!`</span>);</div>
                  <div className="text-blue-400">{'}'}</div>
                  <div className="mt-2 text-yellow-400">greetAdventurer(<span className="text-green-400">'Hero'</span>);</div>
                </div>
                <div className="mt-4 bg-slate-700 rounded-lg p-3 text-green-400 text-sm font-mono">
                  &gt; Welcome Hero to CodeRealm!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning System */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400">
                Advanced Learning System
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our proprietary learning system adapts to your pace, provides personalized feedback, 
                and ensures you master each concept before advancing.
              </p>
              
              <div className="space-y-4">
                {learningFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <Shield className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Skill Mastery</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Variables & Functions</span>
                    <span className="text-green-400 font-bold">100%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-full"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Object-Oriented Programming</span>
                    <span className="text-yellow-400 font-bold">75%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Advanced Algorithms</span>
                    <span className="text-gray-400 font-bold">25%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Feedback System */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-400">
            Intelligent Feedback System
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900/30 to-cyan-900/30 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <MessageCircle className="h-12 w-12 text-green-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-green-400">Success Feedback</h3>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-300 font-mono text-sm">
                  ✓ Excellent work! Your function correctly handles all edge cases. 
                  Consider optimizing the time complexity using memoization for even better performance.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <MessageCircle className="h-12 w-12 text-red-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-red-400">Error Guidance</h3>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-mono text-sm">
                  ⚠ Syntax Error on line 5: Missing closing parenthesis. 
                  Hint: Check your function call and ensure all parentheses are balanced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Start your coding adventure today and discover why CodeRealm is the most effective 
            way to learn programming through engaging, interactive experiences.
          </p>
          <button
            onClick={() => onNavigate('game-overview')}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <Trophy className="h-6 w-6" />
            <span>Begin Your Journey</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Features;
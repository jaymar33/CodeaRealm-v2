import React from 'react';
import { Target, Users, Zap, Trophy, BookOpen, Code } from 'lucide-react';
import { Page } from '../App';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About CodeRealm
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            CodeRealm is a revolutionary story-driven programming learning platform that transforms 
            the way beginners learn to code. Through immersive narratives and interactive challenges, 
            we make programming education engaging, accessible, and fun.
          </p>
        </div>
      </section>

      {/* What is CodeRealm */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
                What is CodeRealm?
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  CodeRealm is an innovative educational platform that combines the excitement of gaming 
                  with the fundamentals of programming education. Our sci-fi fantasy themed environment 
                  creates an immersive learning experience where students embark on coding quests.
                </p>
                <p className="text-lg">
                  Unlike traditional programming courses, CodeRealm uses storytelling, character development, 
                  and progressive challenges to keep learners engaged throughout their journey. Each line of 
                  code written contributes to an epic adventure across three major programming languages.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <Code className="h-6 w-6 text-cyan-400" />
                    <span>3 Programming Languages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-6 w-6 text-cyan-400" />
                    <span>60+ Lessons Total</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-6 w-6 text-cyan-400" />
                    <span>Achievement System</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-cyan-400" />
                    <span>Instant Feedback</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h3>
                  <p className="text-gray-300">
                    To make programming education accessible, engaging, and effective for learners 
                    of all backgrounds through innovative storytelling and interactive technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-400">
            Who is CodeRealm For?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <Users className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">IT Students</h3>
              <p className="text-gray-300">
                Computer science and IT students looking to supplement their formal education 
                with practical, hands-on programming experience in a fun environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <BookOpen className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Complete Beginners</h3>
              <p className="text-gray-300">
                Absolute beginners with no prior programming experience who want to learn 
                coding fundamentals through an engaging, story-driven approach.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <Zap className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-white">Career Switchers</h3>
              <p className="text-gray-300">
                Professionals from other fields who want to transition into technology 
                and need an engaging way to build programming skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-400">
            How We Compare
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="p-6 text-left text-cyan-400 font-semibold">Feature</th>
                  <th className="p-6 text-center text-cyan-400 font-semibold">CodeRealm</th>
                  <th className="p-6 text-center text-gray-400 font-semibold">Traditional Platforms</th>
                  <th className="p-6 text-center text-gray-400 font-semibold">CodeCombat</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-purple-500/20">
                  <td className="p-6 font-medium">Story-driven Learning</td>
                  <td className="p-6 text-center text-green-400">✓ Full narrative</td>
                  <td className="p-6 text-center text-red-400">✗ Tutorials only</td>
                  <td className="p-6 text-center text-yellow-400">~ Game-focused</td>
                </tr>
                <tr className="border-b border-purple-500/20">
                  <td className="p-6 font-medium">Multiple Languages</td>
                  <td className="p-6 text-center text-green-400">✓ JS, Java, Python</td>
                  <td className="p-6 text-center text-green-400">✓ Various</td>
                  <td className="p-6 text-center text-yellow-400">~ Limited</td>
                </tr>
                <tr className="border-b border-purple-500/20">
                  <td className="p-6 font-medium">Real Code Editor</td>
                  <td className="p-6 text-center text-green-400">✓ Full featured</td>
                  <td className="p-6 text-center text-green-400">✓ Yes</td>
                  <td className="p-6 text-center text-yellow-400">~ Basic</td>
                </tr>
                <tr className="border-b border-purple-500/20">
                  <td className="p-6 font-medium">Beginner Friendly</td>
                  <td className="p-6 text-center text-green-400">✓ From zero</td>
                  <td className="p-6 text-center text-yellow-400">~ Some experience</td>
                  <td className="p-6 text-center text-green-400">✓ Kid-friendly</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium">Instant Feedback</td>
                  <td className="p-6 text-center text-green-400">✓ Real-time</td>
                  <td className="p-6 text-center text-yellow-400">~ Delayed</td>
                  <td className="p-6 text-center text-green-400">✓ Immediate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Begin Your Coding Adventure?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of learners who are mastering programming through CodeRealm's 
            innovative story-driven approach.
          </p>
          <button
            onClick={() => onNavigate('game-overview')}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <Target className="h-6 w-6" />
            <span>Start Your Journey</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
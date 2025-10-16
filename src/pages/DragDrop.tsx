import React, { useState, useEffect } from 'react';
import { Page } from '../App';
import { ArrowLeft, CheckCircle, Star, Play, RotateCcw } from 'lucide-react';
import { saveStars } from '../utils/firestore';

interface DragDropProps {
  selectedLanguage: 'javascript' | 'java' | 'python';
  onNavigate: (page: Page) => void;
}

interface CodeBlock {
  id: string;
  content: string;
}

interface DragDropLevel {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  blocks: CodeBlock[];
  correctOrder: string[];
  explanation: string;
  expectedOutput?: string;
}

const DragDrop: React.FC<DragDropProps> = ({ selectedLanguage, onNavigate }) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [draggedBlock, setDraggedBlock] = useState<string | null>(null);
  const [placedBlocks, setPlacedBlocks] = useState<(string | null)[]>([]);
  const [availableBlocks, setAvailableBlocks] = useState<CodeBlock[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [stars, setStars] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [userId, setUserId] = useState('guest');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    setUserId(localStorage.getItem('userId') || 'guest');
    
    // Check if a specific level was selected from GameOverview
    const selectedLevel = localStorage.getItem('selectedDragDropLevel');
    if (selectedLevel) {
      const levelNum = Math.max(1, Math.min(30, parseInt(selectedLevel)));
      setCurrentLevel(levelNum);
      localStorage.removeItem('selectedDragDropLevel');
    }
  }, []);

  const getDragDropLevels = (lang: 'javascript' | 'java' | 'python'): DragDropLevel[] => {
    const levels: DragDropLevel[] = [];
    
    for (let i = 1; i <= 30; i++) {
      const difficulty: 'beginner' | 'intermediate' | 'advanced' = i <= 10 ? 'beginner' : i <= 20 ? 'intermediate' : 'advanced';
      const patternIdx = ((i - 1) % 10) + 1;
      
      if (lang === 'javascript') {
        switch (patternIdx) {
          case 1:
            levels.push({
              id: i, title: difficulty === 'beginner' ? 'Console Log' : difficulty === 'intermediate' ? 'Function Declaration' : 'Array Map',
              description: `Arrange code to ${difficulty === 'beginner' ? 'print to console' : difficulty === 'intermediate' ? 'create a function' : 'map over an array'}.`,
              difficulty, blocks: [{ id: 'a', content: difficulty === 'beginner' ? 'console.log(' : difficulty === 'intermediate' ? 'function greet() {' : 'const nums = [1,2,3];' }, { id: 'b', content: difficulty === 'beginner' ? '"Hello"' : difficulty === 'intermediate' ? 'return "Hi";' : 'nums.map(n =>' }, { id: 'c', content: difficulty === 'beginner' ? ');' : difficulty === 'intermediate' ? '}' : 'n * 2);' }],
              correctOrder: ['a', 'b', 'c'], explanation: difficulty === 'beginner' ? 'Prints a message.' : difficulty === 'intermediate' ? 'Returns a string.' : 'Doubles each number.',
              expectedOutput: difficulty === 'beginner' ? 'Hello' : difficulty === 'intermediate' ? 'Hi' : '[2, 4, 6]'
            });
            break;
          case 2:
            levels.push({
              id: i, title: difficulty === 'beginner' ? 'Variable' : difficulty === 'intermediate' ? 'If Statement' : 'Arrow Function',
              description: `Build ${difficulty === 'beginner' ? 'a variable' : difficulty === 'intermediate' ? 'a condition' : 'a compact function'}.`,
              difficulty, blocks: [{ id: 'a', content: difficulty === 'beginner' ? 'const x = ' : difficulty === 'intermediate' ? 'if (x > 0) {' : 'const double = ' }, { id: 'b', content: difficulty === 'beginner' ? '10' : difficulty === 'intermediate' ? 'return true;' : 'n => ' }, { id: 'c', content: difficulty === 'beginner' ? ';' : difficulty === 'intermediate' ? '}' : 'n * 2;' }],
              correctOrder: ['a', 'b', 'c'], explanation: difficulty === 'beginner' ? 'Stores a value.' : difficulty === 'intermediate' ? 'Checks a condition.' : 'Multiplies by 2.',
              expectedOutput: difficulty === 'beginner' ? 'x = 10' : difficulty === 'intermediate' ? 'true' : 'double(5) = 10'
            });
            break;
          case 3:
            levels.push({
              id: i, title: difficulty === 'beginner' ? 'String' : difficulty === 'intermediate' ? 'For Loop' : 'Destructuring',
              description: `Arrange ${difficulty === 'beginner' ? 'a text string' : difficulty === 'intermediate' ? 'a loop' : 'object destructuring'}.`,
              difficulty, blocks: [{ id: 'a', content: difficulty === 'beginner' ? 'const name = ' : difficulty === 'intermediate' ? 'for (let i = 0;' : 'const {name,' }, { id: 'b', content: difficulty === 'beginner' ? '"Hero"' : difficulty === 'intermediate' ? 'i < 5;' : 'age} = ' }, { id: 'c', content: difficulty === 'beginner' ? ';' : difficulty === 'intermediate' ? 'i++) {}' : 'user;' }],
              correctOrder: ['a', 'b', 'c'], explanation: difficulty === 'beginner' ? 'Defines a string.' : difficulty === 'intermediate' ? 'Repeats code.' : 'Extracts properties.'
            });
            break;
          default:
            levels.push({
              id: i, title: 'Array', description: 'Create an array of numbers.', difficulty,
              blocks: [{ id: 'a', content: 'const arr = [' }, { id: 'b', content: '1, 2, 3' }, { id: 'c', content: '];' }],
              correctOrder: ['a', 'b', 'c'], explanation: 'Stores multiple values.'
            });
        }
      } else if (lang === 'python') {
        switch (patternIdx) {
          case 1:
            levels.push({
              id: i, title: difficulty === 'beginner' ? 'Print Statement' : difficulty === 'intermediate' ? 'Function Definition' : 'List Comprehension',
              description: `Arrange code to ${difficulty === 'beginner' ? 'print text' : difficulty === 'intermediate' ? 'define a function' : 'create a new list'}.`,
              difficulty, blocks: [{ id: 'a', content: difficulty === 'beginner' ? 'print(' : difficulty === 'intermediate' ? 'def greet():' : 'nums = [1,2,3]' }, { id: 'b', content: difficulty === 'beginner' ? '"Hello"' : difficulty === 'intermediate' ? '    return "Hi"' : 'doubled = [n*2' }, { id: 'c', content: difficulty === 'beginner' ? ')' : difficulty === 'intermediate' ? '' : 'for n in nums]' }],
              correctOrder: difficulty === 'intermediate' ? ['a', 'b'] : ['a', 'b', 'c'], explanation: difficulty === 'beginner' ? 'Outputs text.' : difficulty === 'intermediate' ? 'Defines a reusable function.' : 'Creates doubled list.'
            });
            break;
          case 2:
            levels.push({
              id: i, title: difficulty === 'beginner' ? 'Variable' : difficulty === 'intermediate' ? 'If Statement' : 'Lambda Function',
              description: `Build ${difficulty === 'beginner' ? 'a variable' : difficulty === 'intermediate' ? 'a condition' : 'an anonymous function'}.`,
              difficulty, blocks: [{ id: 'a', content: difficulty === 'beginner' ? 'x = ' : difficulty === 'intermediate' ? 'if x > 0:' : 'double = ' }, { id: 'b', content: difficulty === 'beginner' ? '10' : difficulty === 'intermediate' ? '    return True' : 'lambda n: ' }, { id: 'c', content: difficulty === 'beginner' ? '' : difficulty === 'intermediate' ? '' : 'n * 2' }],
              correctOrder: difficulty === 'beginner' ? ['a', 'b'] : difficulty === 'intermediate' ? ['a', 'b'] : ['a', 'b', 'c'], explanation: difficulty === 'beginner' ? 'Stores a number.' : difficulty === 'intermediate' ? 'Checks positivity.' : 'Inline function.'
            });
            break;
          case 3:
            levels.push({
              id: i, title: difficulty === 'beginner' ? 'String' : difficulty === 'intermediate' ? 'For Loop' : 'Dictionary',
              description: `Arrange ${difficulty === 'beginner' ? 'a text string' : difficulty === 'intermediate' ? 'a loop' : 'key-value pairs'}.`,
              difficulty, blocks: [{ id: 'a', content: difficulty === 'beginner' ? 'name = ' : difficulty === 'intermediate' ? 'for i in range(5):' : 'user = {' }, { id: 'b', content: difficulty === 'beginner' ? '"Hero"' : difficulty === 'intermediate' ? '    print(i)' : '"name": "Hero"' }, { id: 'c', content: difficulty === 'beginner' ? '' : difficulty === 'intermediate' ? '' : '}' }],
              correctOrder: difficulty === 'beginner' ? ['a', 'b'] : difficulty === 'intermediate' ? ['a', 'b'] : ['a', 'b', 'c'], explanation: difficulty === 'beginner' ? 'Assigns text.' : difficulty === 'intermediate' ? 'Prints 0 to 4.' : 'Creates a dict.'
            });
            break;
          default:
            levels.push({
              id: i, title: 'List', description: 'Create a list of numbers.', difficulty,
              blocks: [{ id: 'a', content: 'arr = [' }, { id: 'b', content: '1, 2, 3' }, { id: 'c', content: ']' }],
              correctOrder: ['a', 'b', 'c'], explanation: 'Stores multiple values.'
            });
        }
      } else if (lang === 'java') {
        switch (patternIdx) {
          case 1:
            levels.push({
              id: i, title: difficulty === 'beginner' ? 'Print Statement' : difficulty === 'intermediate' ? 'Method Definition' : 'Stream Map',
              description: `Arrange code to ${difficulty === 'beginner' ? 'print text' : difficulty === 'intermediate' ? 'create a method' : 'use streams'}.`,
              difficulty, blocks: [{ id: 'a', content: difficulty === 'beginner' ? 'System.out.println(' : difficulty === 'intermediate' ? 'public static String greet() {' : 'int[] nums = {1,2,3};' }, { id: 'b', content: difficulty === 'beginner' ? '"Hello"' : difficulty === 'intermediate' ? 'return "Hi";' : 'Arrays.stream(nums).map(' }, { id: 'c', content: difficulty === 'beginner' ? ');' : difficulty === 'intermediate' ? '}' : 'n -> n * 2);' }],
              correctOrder: ['a', 'b', 'c'], explanation: difficulty === 'beginner' ? 'Outputs text.' : difficulty === 'intermediate' ? 'Returns a greeting.' : 'Doubles each number.'
            });
            break;
          case 2:
            levels.push({
              id: i, title: difficulty === 'beginner' ? 'Variable' : difficulty === 'intermediate' ? 'If Statement' : 'Lambda Expression',
              description: `Build ${difficulty === 'beginner' ? 'a variable' : difficulty === 'intermediate' ? 'a condition' : 'a lambda'}.`,
              difficulty, blocks: [{ id: 'a', content: difficulty === 'beginner' ? 'int x = ' : difficulty === 'intermediate' ? 'if (x > 0) {' : 'Function<Integer,Integer> double = ' }, { id: 'b', content: difficulty === 'beginner' ? '10' : difficulty === 'intermediate' ? 'return true;' : 'n -> ' }, { id: 'c', content: difficulty === 'beginner' ? ';' : difficulty === 'intermediate' ? '}' : 'n * 2;' }],
              correctOrder: ['a', 'b', 'c'], explanation: difficulty === 'beginner' ? 'Stores an integer.' : difficulty === 'intermediate' ? 'Checks condition.' : 'Anonymous function.'
            });
            break;
          case 3:
            levels.push({
              id: i, title: difficulty === 'beginner' ? 'String' : difficulty === 'intermediate' ? 'For Loop' : 'HashMap',
              description: `Arrange ${difficulty === 'beginner' ? 'a text string' : difficulty === 'intermediate' ? 'a loop' : 'a map structure'}.`,
              difficulty, blocks: [{ id: 'a', content: difficulty === 'beginner' ? 'String name = ' : difficulty === 'intermediate' ? 'for (int i = 0;' : 'HashMap<String,String> user = ' }, { id: 'b', content: difficulty === 'beginner' ? '"Hero"' : difficulty === 'intermediate' ? 'i < 5;' : 'new HashMap<>();' }, { id: 'c', content: difficulty === 'beginner' ? ';' : difficulty === 'intermediate' ? 'i++) {}' : 'user.put("name","Hero");' }],
              correctOrder: difficulty === 'beginner' || difficulty === 'intermediate' ? ['a', 'b', 'c'] : ['a', 'b', 'c'], explanation: difficulty === 'beginner' ? 'Defines a string.' : difficulty === 'intermediate' ? 'Loops 5 times.' : 'Creates a map.'
            });
            break;
          default:
            levels.push({
              id: i, title: 'Array', description: 'Create an array of integers.', difficulty,
              blocks: [{ id: 'a', content: 'int[] arr = {' }, { id: 'b', content: '1, 2, 3' }, { id: 'c', content: '};' }],
              correctOrder: ['a', 'b', 'c'], explanation: 'Stores multiple integers.'
            });
        }
      }
    }
    return levels;
  };

  const levels = getDragDropLevels(selectedLanguage);
  const level = levels[currentLevel - 1] || levels[0];

  useEffect(() => {
    // Shuffle blocks for placement
    const shuffled = [...level.blocks].sort(() => Math.random() - 0.5);
    setAvailableBlocks(shuffled);
    setPlacedBlocks(Array(level.correctOrder.length).fill(null));
    setIsCompleted(false);
    setStars(0);
    setAttempts(0);
    setStartTime(Date.now());
  }, [currentLevel, selectedLanguage, level.blocks.length, level.correctOrder.length]);

  const handleDragStart = (blockId: string, fromSlot?: number) => {
    setDraggedBlock(blockId);
  };

  const handleDragEnd = () => {
    // Reset drag state when drag ends (even if drop didn't happen)
    setDraggedBlock(null);
  };

  const handleDrop = (index: number) => {
    if (!draggedBlock) return;
    
    // Check if dragging from a placed slot
    const draggedFromSlot = placedBlocks.indexOf(draggedBlock);
    
    // Create a copy of placed blocks for modifications
    const newPlaced = [...placedBlocks];
    
    // If slot already has a block, return it to available
    const existing = placedBlocks[index];
    if (existing && existing !== draggedBlock) {
      const existingBlock = level.blocks.find(b => b.id === existing);
      if (existingBlock) {
        // Only add to available if it's not already there
        setAvailableBlocks(prev => {
          const alreadyThere = prev.some(b => b.id === existing);
          return alreadyThere ? prev : [...prev, existingBlock];
        });
      }
    }
    
    // Handle the dragged block placement
    if (draggedFromSlot !== -1) {
      // It's coming from a placed slot - clear the old position
      newPlaced[draggedFromSlot] = null;
    } else {
      // It's coming from available blocks - remove it from available
      setAvailableBlocks(prev => prev.filter(b => b.id !== draggedBlock));
    }
    
    // Place the block in the new position
    newPlaced[index] = draggedBlock;
    setPlacedBlocks(newPlaced);
    setDraggedBlock(null);
  };

  const handleCheck = () => {
    setAttempts(prev => prev + 1);
    // Flexible validation: check if placed blocks match correctOrder
    const allPlaced = !placedBlocks.includes(null);
    if (!allPlaced) return;
    
    const isCorrect = placedBlocks.every((id, idx) => id === level.correctOrder[idx]);
    
    if (isCorrect) {
      setShowFeedback(false);
      setFeedbackMessage('');
      const elapsedSeconds = (Date.now() - startTime) / 1000;
      let starCount = 1;
      if (attempts === 0) starCount += 1; // First try
      if (elapsedSeconds <= 60) starCount += 1; // Under 60s
      setStars(starCount);
      setIsCompleted(true);
      
      // Save stars - ensure proper validation
      const starKey = userId === 'guest'
        ? `guest_${selectedLanguage}_dragdrop_${currentLevel}_stars`
        : `${userId}_${selectedLanguage}_dragdrop_${currentLevel}_stars`;
      const prevStars = parseInt(localStorage.getItem(starKey) || '0');
      const bestStars = Math.max(prevStars, starCount);
      localStorage.setItem(starKey, String(bestStars));
      
      console.log(`⭐ DragDrop Stars Saved: ${selectedLanguage} Level ${currentLevel} = ${bestStars} stars (${userId})`);
      
      // Save to Firestore for cloud sync
      if (userId !== 'guest') {
        saveStars(userId, selectedLanguage, 'dragdrop', currentLevel, bestStars);
      }
      
      // Trigger stats update event for real-time UI updates
      window.dispatchEvent(new Event('statsUpdate'));
    } else {
      // Wrong answer - show feedback
      setShowFeedback(true);
      setFeedbackMessage(`❌ Not quite right! Try again. The correct order should produce: ${level.expectedOutput || 'the expected result'}`);
      
      // Clear the placed blocks after a short delay
      setTimeout(() => {
        setPlacedBlocks(Array(level.correctOrder.length).fill(null));
        setShowFeedback(false);
        setFeedbackMessage('');
      }, 2000);
    }
  };

  const handleReset = () => {
    setAvailableBlocks([...level.blocks].sort(() => Math.random() - 0.5));
    setPlacedBlocks(Array(level.correctOrder.length).fill(null));
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('game-overview')}
            className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-2 bg-cyan-400/10 px-4 py-2 rounded-lg border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Overview</span>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-300 capitalize">{selectedLanguage} - Level {currentLevel}/30</span>
            <div className="flex space-x-1">
              {[1, 2, 3].map(s => (
                <Star key={s} className={`h-4 w-4 ${s <= stars ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Feedback Display */}
        {showFeedback && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg">
            <div className="text-red-400 font-semibold">{feedbackMessage}</div>
          </div>
        )}

        {/* Level Info */}
        <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold text-white">{level.title}</h2>
            <span className={`text-xs px-3 py-1 rounded-full ${
              level.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
              level.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {level.difficulty}
            </span>
          </div>
          <p className="text-gray-300">{level.description}</p>
        </div>

        {/* Drop Zones */}
        <div className="bg-slate-900/80 rounded-2xl border border-purple-500/30 p-6 mb-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">📝 Arrange code in proper order:</h3>
          <div className="space-y-2">
            {placedBlocks.map((blockId, idx) => (
              <div
                key={idx}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(idx)}
                className="min-h-[50px] bg-slate-800/60 border-2 border-dashed border-purple-500/30 rounded-lg p-3 flex items-center hover:border-purple-500/60 transition-colors"
              >
                {blockId ? (
                  <div
                    draggable
                    onDragStart={() => handleDragStart(blockId, idx)}
                    onDragEnd={handleDragEnd}
                    className="flex-1 cursor-move hover:bg-purple-500/10 rounded px-2 py-1 transition-colors"
                  >
                    <code className="text-sm text-cyan-300 font-mono">{level.blocks.find(b => b.id === blockId)?.content}</code>
                  </div>
                ) : (
                  <span className="text-sm text-gray-500 font-mono">{`// Line ${idx + 1} - drag a block here`}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Available Blocks */}
        <div className="bg-slate-900/80 rounded-2xl border border-cyan-500/30 p-6 mb-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">🧩 Drag these code blocks above:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {availableBlocks.map(block => (
              <div
                key={block.id}
                draggable
                onDragStart={() => handleDragStart(block.id)}
                onDragEnd={handleDragEnd}
                className="group bg-gradient-to-r from-slate-800 to-slate-700 border-2 border-cyan-500/30 rounded-lg p-4 cursor-move hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
              >
                <code className="text-sm text-cyan-300 font-mono group-hover:text-cyan-200">{block.content}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Output Display */}
        {level.expectedOutput && (
          <div className="mb-6 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
            <div className="text-sm text-blue-400 font-semibold mb-1">Expected Output:</div>
            <div className="text-white font-mono text-sm">{level.expectedOutput}</div>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-4">
          <button
            onClick={handleReset}
            className="flex-1 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset</span>
          </button>
          <button
            onClick={handleCheck}
            disabled={placedBlocks.includes(null)}
            className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 disabled:opacity-50 px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <Play className="h-4 w-4" />
            <span>Check Solution</span>
          </button>
        </div>

        {/* Completion Modal */}
        {isCompleted && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/50 p-8 rounded-2xl max-w-md text-center shadow-2xl">
              <CheckCircle className="h-16 w-16 text-cyan-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-3">🎉 Level Complete!</h3>
              <p className="text-gray-300 mb-4">{level.explanation}</p>
              <div className="flex justify-center space-x-1 mb-6">
                {[1, 2, 3].map(s => (
                  <Star key={s} className={`h-6 w-6 ${s <= stars ? 'text-yellow-400 fill-current animate-pulse' : 'text-gray-600'}`} />
                ))}
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsCompleted(false)}
                  className="flex-1 bg-purple-500 hover:bg-purple-600 px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Review
                </button>
                <button
                  onClick={() => {
                    if (currentLevel < 30) {
                      setCurrentLevel(prev => prev + 1);
                    }
                    setIsCompleted(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  {currentLevel < 30 ? 'Next Level →' : 'Complete!'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragDrop;

import React, { useState, useRef, useEffect } from 'react';
import { Play, RotateCcw, Lightbulb, CheckCircle, Star, ArrowLeft } from 'lucide-react';
import { Page } from '../App';
import { runCode as judge0RunCode } from '../utils/runCode';
import { savePlayerProgress, saveStars } from '../utils/firestore';
import { recordSession, unlockLessonsBasedOnPerformance } from '../utils/adaptiveAI';
import ArcaneCodeEditorPanel from '../components/ArcaneCodeEditorPanel';
import { javascriptChallenges, javaChallenges, pythonChallenges } from '../data/challenges';
import { getLevelNarrative } from '../data/lessonTitles';

interface CodeEditorProps {
  selectedLanguage: 'javascript' | 'java' | 'python';
  onNavigate: (page: Page) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ selectedLanguage, onNavigate }) => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [puzzleInputs, setPuzzleInputs] = useState<Record<string, string>>({});
  const [showPuzzleHints, setShowPuzzleHints] = useState<Record<string, number>>({});
  const [isRunning, setIsRunning] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showHint, setShowHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [_justAdvanced, setJustAdvanced] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [_completionTimeMs, setCompletionTime] = useState<number | null>(null);
  const [stars, setStars] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [tutorialDismissed, setTutorialDismissed] = useState(false);
  const [userId, setUserId] = useState<string>('guest');
  const [isPuzzleSession, setIsPuzzleSession] = useState(false);
  const [puzzleIndex, setPuzzleIndex] = useState<number | null>(null); // 1..30
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Get user ID and selected level from localStorage on component mount
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId') || 'guest';
    setUserId(storedUserId);
    
    // Check if tutorial was dismissed
    const dismissed = localStorage.getItem('tutorialDismissed') === 'true';
    setTutorialDismissed(dismissed);
    setIsFirstTime(!dismissed);
    
    // Listen for tutorial reset
    const handleTutorialReset = () => {
      setTutorialDismissed(false);
      setIsFirstTime(true);
    };
    window.addEventListener('tutorialReset', handleTutorialReset);
    
    // Check if a specific level was selected from GameOverview
    const selectedMode = localStorage.getItem('selectedMode');
    if (selectedMode === 'puzzle') {
      const pIndex = Math.max(1, Math.min(30, parseInt(localStorage.getItem('selectedPuzzleIndex') || '1')));
      console.log('🧩 CodeEditor: Starting puzzle session with index:', pIndex);
      setIsPuzzleSession(true);
      setPuzzleIndex(pIndex);
      localStorage.removeItem('selectedMode');
      localStorage.removeItem('selectedPuzzleIndex');
    } else {
    const selectedLevel = localStorage.getItem('selectedLevel');
    if (selectedLevel) {
      setCurrentLevel(parseInt(selectedLevel));
        localStorage.removeItem('selectedLevel');
      }
    }
    
    return () => {
      window.removeEventListener('tutorialReset', handleTutorialReset);
    };
  }, []);

  const challenges = {
    javascript: javascriptChallenges,
    java: javaChallenges,
    python: pythonChallenges
  };

  // Get current challenge with enhanced story narrative for main game
  const getEnhancedChallenge = () => {
    const baseChallenge = challenges[selectedLanguage][Math.min(currentLevel - 1, challenges[selectedLanguage].length - 1)] || challenges[selectedLanguage][0];
    
    // For main game levels (not puzzles), add lesson-specific story
    if (!isPuzzleSession && currentLevel <= 150) {
      const lessonNum = Math.ceil(currentLevel / 3);
      const levelStage = ((currentLevel - 1) % 3) + 1 as 1 | 2 | 3;
      const narrative = getLevelNarrative(lessonNum, levelStage, selectedLanguage);
      
      return {
        ...baseChallenge,
        title: narrative.title,
        description: narrative.description,
        story: narrative.story
      };
    }
    
    return baseChallenge;
  };

const currentChallenge = getEnhancedChallenge();

  useEffect(() => {
    if (isPuzzleSession && puzzleIndex) {
      const p = getGeneratedPuzzle(selectedLanguage, puzzleIndex);
      setCode(p.starterCode);
    } else {
    setCode(currentChallenge.starterCode);
    }
    setOutput('');
    setIsCompleted(false);
    setShowHint(false);
    setAttempts(0);
    setStartTime(Date.now());
    setCompletionTime(null);
    setStars(0);
    setPuzzleInputs({});
    setShowPuzzleHints({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setJustAdvanced(true);
    const t = setTimeout(() => setJustAdvanced(false), 900);
    return () => clearTimeout(t);
  }, [selectedLanguage, currentLevel, currentChallenge.starterCode, isPuzzleSession, puzzleIndex]);

  // Update Arcane time every second for real-time bubble updates
  useEffect(() => {
    const timer = setInterval(() => {
      if (startTime && !isCompleted) {
        const timeElapsed = (Date.now() - startTime) / 1000;
        localStorage.setItem('arcane_time', String(Math.floor(timeElapsed)));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime, isCompleted]);

  // Main game is ALWAYS typing editor; only separate puzzle sessions use fill-in mode
  const isFillInPuzzle = isPuzzleSession;
  const usedAnyPuzzleHint = Object.values(showPuzzleHints).some((idx) => (idx ?? -1) >= 0);

  // Generate 30 puzzle bank programmatically (easy 1-10, intermediate 11-20, advanced 21-30)
  // LANGUAGE-SPECIFIC puzzles for JavaScript, Python, and Java
  const getGeneratedPuzzle = (lang: 'javascript'|'java'|'python', idx: number) => {
    const easy = idx <= 10;
    const inter = idx > 10 && idx <= 20;
    const pat = ((idx - 1) % 10) + 1;
    const mk = (title: string, desc: string, starter: string, expected: string[], mainHint: string, blanks?: {id:string;prompt:string;choices:string[];solution:string}[]) => ({
      title, description: desc, starterCode: starter, hint: mainHint, story: 'Solve the short puzzle by filling in the missing code.', type: 'puzzle', difficulty: easy? 'beginner' : inter ? 'intermediate':'advanced', expectedIncludes: expected, puzzleMeta: { mode: 'fill-in', template: starter.replace(/\n/g,'\n'), blanks: blanks||[] }
    });
    
    if (lang === 'javascript') {
      switch (pat) {
        case 1: return mk('Add Two Numbers', 'Return the sum of a and b.', 'function add(a,b){\n  return __BLANK1__;\n}\nconsole.log(add(2,3))\nconsole.log(add(10,20))', ['5','30'], 'In JavaScript, use the + operator to add two numbers. Return the result of a + b.', [{id:'BLANK1',prompt:'Sum a and b',choices:['a+b','a-b','a*b','a/b'],solution:'a+b'}]);
        case 2: return mk('Is Even', 'Return true if n is even.', 'function isEven(n){\n  return __BLANK1__;\n}\nconsole.log(isEven(4))\nconsole.log(isEven(5))', ['true','false'], 'Use the modulo operator (%) to check if a number is divisible by 2. If n % 2 equals 0, the number is even.', [{id:'BLANK1',prompt:'Check divisibility by 2',choices:['n%2===0','n%2==1','n/2===0','n%3===0'],solution:'n%2===0'}]);
        case 3: return mk('First Element', 'Return the first element of an array.', 'function first(arr){\n  return __BLANK1__;\n}\nconsole.log(first([1,2,3]))\nconsole.log(first([9]))', ['1','9'], 'Arrays in JavaScript are zero-indexed. Use arr[0] to access the first element.', [{id:'BLANK1',prompt:'Access first item',choices:['arr[0]','arr[1]','arr.first()','arr[-1]'],solution:'arr[0]'}]);
        case 4: return mk('Array Length', 'Return the number of items in an array.', 'function count(arr){\n  return __BLANK1__;\n}\nconsole.log(count([1,2,3]))', ['3'], 'In JavaScript, arrays have a .length property that returns the number of elements.', [{id:'BLANK1',prompt:'Get number of items',choices:['arr.length','len(arr)','arr.size()','arr.count'],solution:'arr.length'}]);
        case 5: return mk('Greet', 'Return a greeting with a name using template literals.', 'function greet(name){\n  return __BLANK1__;\n}\nconsole.log(greet("Hero"))', ['Hello Hero!'], 'Use template literals (backticks) with ${} to embed variables in strings.', [{id:'BLANK1',prompt:'Template literal greeting',choices:['`Hello ${name}!`','"Hello ${name}!"','"Hello " + name + "!"','name + "Hello"'],solution:'`Hello ${name}!`'}]);
        case 6: return mk('Min of Two', 'Return the smaller of two numbers.', 'function min(a,b){\n  return __BLANK1__;\n}\nconsole.log(min(2,5))', ['2'], 'Use a ternary operator: condition ? valueIfTrue : valueIfFalse. Check if a < b.', [{id:'BLANK1',prompt:'Ternary for min',choices:['a<b?a:b','a>b?a:b','Math.min(a,b)','a-b'],solution:'a<b?a:b'}]);
        case 7: return mk('Max in Array', 'Return the maximum number in an array.', 'function maxIn(arr){\n  return __BLANK1__;\n}\nconsole.log(maxIn([1,5,3]))', ['5'], 'Use Math.max() with the spread operator (...) to pass array elements as arguments.', [{id:'BLANK1',prompt:'Use Math.max with spread',choices:['Math.max(...arr)','arr.max()','Math.max(arr)','max(arr)'],solution:'Math.max(...arr)'}]);
        case 8: return mk('Reverse String', 'Return a reversed string.', 'function rev(s){\n  return __BLANK1__;\n}\nconsole.log(rev("abc"))', ['cba'], 'Split the string into an array, reverse it, then join back into a string.', [{id:'BLANK1',prompt:'Split-reverse-join',choices:['s.split("").reverse().join("")','s.reverse()','reverse(s)','s.split().reverse()'],solution:'s.split("").reverse().join("")'}]);
        case 9: return mk('Count Vowels', 'Count vowels in a string.', 'function countV(s){\n  let c=0;\n  for(const ch of s){ if(__BLANK1__) c++; }\n  return c;\n}\nconsole.log(countV("hello"))', ['2'], 'Use string.includes() to check if a character is in the vowel string "aeiouAEIOU".', [{id:'BLANK1',prompt:'Check if vowel',choices:['"aeiouAEIOU".includes(ch)','ch.isVowel()','vowels.has(ch)','ch in vowels'],solution:'"aeiouAEIOU".includes(ch)'}]);
        default: return mk('Sum Array', 'Sum all numbers in an array.', 'function sum(arr){\n  let s=0; for(const n of arr) s+=__BLANK1__; return s;\n}\nconsole.log(sum([1,2,3]))', ['6'], 'In the loop, add each element (n) to the sum variable.', [{id:'BLANK1',prompt:'Add current number',choices:['n','arr[i]','i','arr.length'],solution:'n'}]);
      }
    }
    
    if (lang === 'python') {
      switch (pat) {
        case 1: return mk('Add Two Numbers', 'Return the sum of a and b.', 'def add(a, b):\n    return __BLANK1__\n\nprint(add(2, 3))\nprint(add(10, 20))', ['5','30'], 'In Python, use the + operator to add two numbers. Return a + b.', [{id:'BLANK1',prompt:'Sum a and b',choices:['a + b','a - b','a * b','a / b'],solution:'a + b'}]);
        case 2: return mk('Is Even', 'Return True if n is even.', 'def is_even(n):\n    return __BLANK1__\n\nprint(is_even(4))\nprint(is_even(5))', ['True','False'], 'Use the modulo operator (%) to check divisibility. If n % 2 equals 0, return True.', [{id:'BLANK1',prompt:'Check divisibility by 2',choices:['n % 2 == 0','n % 2 == 1','n / 2 == 0','n % 3 == 0'],solution:'n % 2 == 0'}]);
        case 3: return mk('First Element', 'Return the first element of a list.', 'def first(arr):\n    return __BLANK1__\n\nprint(first([1, 2, 3]))\nprint(first([9]))', ['1','9'], 'Lists in Python are zero-indexed. Use arr[0] to get the first element.', [{id:'BLANK1',prompt:'Access first item',choices:['arr[0]','arr[1]','arr.first()','arr[-1]'],solution:'arr[0]'}]);
        case 4: return mk('List Length', 'Return the number of items in a list.', 'def count(arr):\n    return __BLANK1__\n\nprint(count([1, 2, 3]))', ['3'], 'In Python, use the len() function to get the number of elements in a list.', [{id:'BLANK1',prompt:'Get number of items',choices:['len(arr)','arr.length','arr.size()','length(arr)'],solution:'len(arr)'}]);
        case 5: return mk('Greet', 'Return a greeting with a name using f-strings.', 'def greet(name):\n    return __BLANK1__\n\nprint(greet("Hero"))', ['Hello Hero!'], 'Use f-strings (f"...{variable}...") to embed variables in strings.', [{id:'BLANK1',prompt:'F-string greeting',choices:['f"Hello {name}!"','"Hello {name}!"','"Hello " + name + "!"','name + "Hello"'],solution:'f"Hello {name}!"'}]);
        case 6: return mk('Min of Two', 'Return the smaller of two numbers.', 'def minimum(a, b):\n    return __BLANK1__\n\nprint(minimum(2, 5))', ['2'], 'Use a ternary expression: a if a < b else b, or use the min() function.', [{id:'BLANK1',prompt:'Ternary or min function',choices:['a if a < b else b','b if a < b else a','min(a, b)','a - b'],solution:'a if a < b else b'}]);
        case 7: return mk('Max in List', 'Return the maximum number in a list.', 'def max_in(arr):\n    return __BLANK1__\n\nprint(max_in([1, 5, 3]))', ['5'], 'Use the built-in max() function to find the largest element in a list.', [{id:'BLANK1',prompt:'Use max function',choices:['max(arr)','arr.max()','Math.max(arr)','maximum(arr)'],solution:'max(arr)'}]);
        case 8: return mk('Reverse String', 'Return a reversed string.', 'def rev(s):\n    return __BLANK1__\n\nprint(rev("abc"))', ['cba'], 'Use slicing [::-1] to reverse a string in Python.', [{id:'BLANK1',prompt:'String slicing',choices:['s[::-1]','s.reverse()','reverse(s)','s[-1]'],solution:'s[::-1]'}]);
        case 9: return mk('Count Vowels', 'Count vowels in a string.', 'def count_v(s):\n    c = 0\n    for ch in s:\n        if __BLANK1__:\n            c += 1\n    return c\n\nprint(count_v("hello"))', ['2'], 'Check if a character is in the string "aeiouAEIOU" using the in operator.', [{id:'BLANK1',prompt:'Check if vowel',choices:['ch in "aeiouAEIOU"','ch.is_vowel()','vowels.has(ch)','ch == "aeiou"'],solution:'ch in "aeiouAEIOU"'}]);
        default: return mk('Sum List', 'Sum all numbers in a list.', 'def total(arr):\n    s = 0\n    for n in arr:\n        s += __BLANK1__\n    return s\n\nprint(total([1, 2, 3]))', ['6'], 'In the loop, add each element (n) to the sum variable s.', [{id:'BLANK1',prompt:'Add current number',choices:['n','arr[i]','i','len(arr)'],solution:'n'}]);
      }
    }
    
    if (lang === 'java') {
      switch (pat) {
        case 1: return mk('Add Two Numbers', 'Return the sum of a and b.', 'public class Main {\n  public static int add(int a, int b) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    System.out.println(add(2, 3));\n    System.out.println(add(10, 20));\n  }\n}', ['5','30'], 'In Java, use the + operator to add two integers. Return a + b.', [{id:'BLANK1',prompt:'Sum a and b',choices:['a + b','a - b','a * b','a / b'],solution:'a + b'}]);
        case 2: return mk('Is Even', 'Return true if n is even.', 'public class Main {\n  public static boolean isEven(int n) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    System.out.println(isEven(4));\n    System.out.println(isEven(5));\n  }\n}', ['true','false'], 'Use the modulo operator (%) to check divisibility. If n % 2 equals 0, the number is even.', [{id:'BLANK1',prompt:'Check divisibility by 2',choices:['n % 2 == 0','n % 2 == 1','n / 2 == 0','n % 3 == 0'],solution:'n % 2 == 0'}]);
        case 3: return mk('First Element', 'Return the first element of an array.', 'public class Main {\n  public static int first(int[] arr) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    System.out.println(first(new int[]{1, 2, 3}));\n    System.out.println(first(new int[]{9}));\n  }\n}', ['1','9'], 'Arrays in Java are zero-indexed. Use arr[0] to access the first element.', [{id:'BLANK1',prompt:'Access first item',choices:['arr[0]','arr[1]','arr.first()','arr[-1]'],solution:'arr[0]'}]);
        case 4: return mk('Array Length', 'Return the length of an array.', 'public class Main {\n  public static int count(int[] arr) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    System.out.println(count(new int[]{1, 2, 3}));\n  }\n}', ['3'], 'In Java, arrays have a .length field (not a method) that gives the number of elements.', [{id:'BLANK1',prompt:'Get array length',choices:['arr.length','len(arr)','arr.size()','arr.length()'],solution:'arr.length'}]);
        case 5: return mk('Greet', 'Return a greeting with a name.', 'public class Main {\n  public static String greet(String name) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    System.out.println(greet("Hero"));\n  }\n}', ['Hello Hero!'], 'In Java, use string concatenation with + or String.format(). Concatenate "Hello " + name + "!".', [{id:'BLANK1',prompt:'String concatenation',choices:['"Hello " + name + "!"','"Hello {name}!"','`Hello ${name}!`','name + "Hello"'],solution:'"Hello " + name + "!"'}]);
        case 6: return mk('Min of Two', 'Return the smaller of two integers.', 'public class Main {\n  public static int min(int a, int b) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    System.out.println(min(2, 5));\n  }\n}', ['2'], 'Use a ternary operator: (a < b) ? a : b, or use Math.min(a, b).', [{id:'BLANK1',prompt:'Ternary or Math.min',choices:['(a < b) ? a : b','(a > b) ? a : b','Math.min(a, b)','a - b'],solution:'(a < b) ? a : b'}]);
        case 7: return mk('Max in Array', 'Return the maximum integer in an array.', 'public class Main {\n  public static int maxIn(int[] arr) {\n    int max = arr[0];\n    for (int n : arr) if (n > max) max = n;\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    System.out.println(maxIn(new int[]{1, 5, 3}));\n  }\n}', ['5'], 'After looping through the array to find the max, return the max variable.', [{id:'BLANK1',prompt:'Return max',choices:['max','arr[0]','n','arr.length'],solution:'max'}]);
        case 8: return mk('Reverse String', 'Return a reversed string.', 'public class Main {\n  public static String rev(String s) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    System.out.println(rev("abc"));\n  }\n}', ['cba'], 'Use StringBuilder with reverse() method: new StringBuilder(s).reverse().toString().', [{id:'BLANK1',prompt:'StringBuilder reverse',choices:['new StringBuilder(s).reverse().toString()','s.reverse()','reverse(s)','s.split("").reverse()'],solution:'new StringBuilder(s).reverse().toString()'}]);
        case 9: return mk('Count Vowels', 'Count vowels in a string.', 'public class Main {\n  public static int countV(String s) {\n    int c = 0;\n    for (char ch : s.toCharArray()) {\n      if (__BLANK1__) c++;\n    }\n    return c;\n  }\n  public static void main(String[] args) {\n    System.out.println(countV("hello"));\n  }\n}', ['2'], 'Use "aeiouAEIOU".indexOf(ch) >= 0 to check if a character is a vowel.', [{id:'BLANK1',prompt:'Check if vowel',choices:['"aeiouAEIOU".indexOf(ch) >= 0','ch.isVowel()','vowels.contains(ch)','ch in vowels'],solution:'"aeiouAEIOU".indexOf(ch) >= 0'}]);
        default: return mk('Sum Array', 'Sum all integers in an array.', 'public class Main {\n  public static int sum(int[] arr) {\n    int s = 0;\n    for (int n : arr) s += __BLANK1__;\n    return s;\n  }\n  public static void main(String[] args) {\n    System.out.println(sum(new int[]{1, 2, 3}));\n  }\n}', ['6'], 'In the enhanced for loop, add each element (n) to the sum variable.', [{id:'BLANK1',prompt:'Add current number',choices:['n','arr[i]','i','arr.length'],solution:'n'}]);
      }
    }
    
    // Fallback
    return mk('Placeholder', 'Not implemented yet.', '// Coming soon', [''], 'This puzzle is under construction.', []);
  };

  const buildCodeFromPuzzle = (): string => {
    if (isPuzzleSession && puzzleIndex) {
      const p = getGeneratedPuzzle(selectedLanguage, puzzleIndex);
      const meta = p.puzzleMeta;
      if (!meta) return code;
      let generated = meta.template as string;
      for (const blank of meta.blanks) {
        const token = `__${blank.id}__`;
        const value = (puzzleInputs[blank.id] ?? '').trim();
        generated = generated.replace(token, value);
      }
      return generated;
    }
    return code;
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('⏳ Running...');
    setAttempts(prev => prev + 1);

    // Update Arcane tracking
    localStorage.setItem('arcane_attempts', String(attempts + 1));
    localStorage.setItem('arcane_lang', selectedLanguage);
    
    const timeElapsed = startTime ? (Date.now() - startTime) / 1000 : 0;
    localStorage.setItem('arcane_time', String(timeElapsed));

    try {
      // FOR PUZZLES: Use hardcoded validation (no Judge0)
      if (isPuzzleSession && puzzleIndex) {
        const puzzle = getGeneratedPuzzle(selectedLanguage, puzzleIndex);
        const expected = puzzle.expectedIncludes || [];
        
        // Hardcoded validation: check if user selected the correct choices
        const meta = puzzle.puzzleMeta;
        let allCorrect = true;
        if (meta && meta.blanks) {
          for (const blank of meta.blanks) {
            const userChoice = puzzleInputs[blank.id];
            if (userChoice !== blank.solution) {
              allCorrect = false;
              break;
            }
          }
        }
        
        // Show hardcoded output
        if (allCorrect) {
          const hardcodedOutput = expected.join('\n');
          setOutput(hardcodedOutput);
          localStorage.setItem('arcane_errors', '0');
        } else {
          setOutput('❌ Incorrect! Check your selections and try again.');
          setIsRunning(false);
          localStorage.setItem('arcane_errors', '1');
          return;
        }

        // Check completion for puzzles
        const passesPuzzle = allCorrect;

        if (passesPuzzle) {
          setIsCompleted(true);
          const completionTimeNow = Date.now();
          setCompletionTime(completionTimeNow);
          const elapsedSeconds = startTime ? (completionTimeNow - startTime) / 1000 : Infinity;
          let starCount = 1;
          if (!showHint && !usedAnyPuzzleHint) starCount += 1;
          if (elapsedSeconds <= 60) starCount += 1;
          setStars(starCount);

          // Save puzzle stars
          const uid = localStorage.getItem('userId') || 'guest';
          const puzzleStarKey = uid === 'guest'
            ? `guest_${selectedLanguage}_puzzle_${puzzleIndex}_stars`
            : `${uid}_${selectedLanguage}_puzzle_${puzzleIndex}_stars`;
          const prevPuzzleStars = parseInt(localStorage.getItem(puzzleStarKey) || '0');
          const bestPuzzleStars = Math.max(prevPuzzleStars, starCount);
          localStorage.setItem(puzzleStarKey, String(bestPuzzleStars));
          setStars(bestPuzzleStars);
          
          // Save to Firestore for cloud sync
          if (uid !== 'guest' && puzzleIndex) {
            saveStars(uid, selectedLanguage, 'puzzle', puzzleIndex, bestPuzzleStars);
          }
          
          // Trigger stats update event for real-time UI updates
          window.dispatchEvent(new Event('statsUpdate'));

          // Mark completion
          if (uid === 'guest') {
            const completedPuzzleKey = `guest_${selectedLanguage}_puzzle_completed`;
            const prevCompletedPuzzles = JSON.parse(localStorage.getItem(completedPuzzleKey) || '[]') as number[];
            if (!prevCompletedPuzzles.includes(puzzleIndex)) {
              localStorage.setItem(completedPuzzleKey, JSON.stringify([...prevCompletedPuzzles, puzzleIndex]));
            }
          }

          // Record session
          const sessionData = {
            language: selectedLanguage,
            level: puzzleIndex,
            attempts: attempts + 1,
            timeTakenSeconds: (completionTimeNow - (startTime || Date.now())) / 1000,
            usedHint: showHint || usedAnyPuzzleHint,
            hadErrors: false,
            stars: bestPuzzleStars
          };
          recordSession(uid, sessionData);
        }

        setIsRunning(false);
        return;
      }

      // FOR MAIN GAME: Use Judge0 API
      const languageMap: Record<string, number> = {
        javascript: 63,
        java: 62,
        python: 71,
      };

      const source = code;
      const result = await judge0RunCode(source, languageMap[selectedLanguage]);
      const cleanedResult = result.trim();
      setOutput(cleanedResult);

      // Check for syntax errors or runtime errors
      const hasError = cleanedResult.toLowerCase().includes('error') || 
                       cleanedResult.toLowerCase().includes('exception') ||
                       cleanedResult.toLowerCase().includes('syntaxerror') ||
                       cleanedResult.toLowerCase().includes('referenceerror') ||
                       cleanedResult.toLowerCase().includes('typeerror');

      localStorage.setItem('arcane_errors', hasError ? '1' : '0');

      // Main game flexible validation
      // Pass if: 1) No errors, 2) Has output, 3) Output matches expected patterns
      const passesPuzzle = (() => {
        // If there are errors, fail
        if (hasError) return false;
        
        // If no output at all, fail (unless it's a valid empty output scenario)
        if (!cleanedResult && currentLevel > 5) return false;
        
        // Flexible success criteria:
        const outLower = cleanedResult.toLowerCase();
        
        // For early lessons (1-10): check for specific keywords
        if (currentLevel <= 10) {
          return outLower.includes('coderealm') || 
                 outLower.includes('hello') ||
                 outLower.includes('welcome') ||
                 cleanedResult.length > 0; // Any output is good for beginners
        }
        
        // For intermediate/advanced: just needs successful execution (no errors + has output)
        return !hasError && cleanedResult.length > 0;
      })();

      if (passesPuzzle) {
        setIsCompleted(true);
        const completionTimeNow = Date.now();
        setCompletionTime(completionTimeNow);
        // Stars: 1 star for completion, +1 if no hint used (global or puzzle), +1 if finished within 60s
        const elapsedSeconds = startTime ? (completionTimeNow - startTime) / 1000 : Infinity;
        let starCount = 1;
        if (!showHint && !usedAnyPuzzleHint) starCount += 1;
        if (elapsedSeconds <= 60) starCount += 1;
        setStars(starCount);

        // Persist stars for GameOverview display (separate keys for puzzles 1-30)
        const uid = localStorage.getItem('userId') || 'guest';
        if (isPuzzleSession && puzzleIndex) {
          const puzzleStarKey = uid === 'guest'
            ? `guest_${selectedLanguage}_puzzle_${puzzleIndex}_stars`
            : `${uid}_${selectedLanguage}_puzzle_${puzzleIndex}_stars`;
          const prevPuzzleStars = parseInt(localStorage.getItem(puzzleStarKey) || '0');
          const bestPuzzleStars = Math.max(prevPuzzleStars, starCount);
          localStorage.setItem(puzzleStarKey, String(bestPuzzleStars));
          setStars(bestPuzzleStars);
          
          console.log(`🧩 Puzzle completed: ${selectedLanguage} P${puzzleIndex} = ${bestPuzzleStars} stars (${uid})`);
          console.log(`💾 Saved to localStorage key: ${puzzleStarKey}`);
          
          // Save to Firestore for cloud sync
          if (uid !== 'guest' && puzzleIndex) {
            console.log(`☁️ Saving to Firestore: ${selectedLanguage} puzzle ${puzzleIndex} = ${bestPuzzleStars} stars`);
            saveStars(uid, selectedLanguage, 'puzzle', puzzleIndex, bestPuzzleStars);
          }
          
          // Trigger stats update event for real-time UI updates
          window.dispatchEvent(new Event('statsUpdate'));
        } else {
          // Main level completion
          const starKey = uid === 'guest'
            ? `guest_${selectedLanguage}_level_${currentLevel}_stars`
            : `${uid}_${selectedLanguage}_level_${currentLevel}_stars`;
          const prevStars = parseInt(localStorage.getItem(starKey) || '0');
          const bestStars = Math.max(prevStars, starCount);
          localStorage.setItem(starKey, String(bestStars));
          setStars(bestStars);
          
          console.log(`⭐ CodeEditor Main Stars Saved: ${selectedLanguage} Level ${currentLevel} = ${bestStars} stars (${uid})`);
          
          // Save to Firestore for cloud sync
          if (uid !== 'guest') {
            saveStars(uid, selectedLanguage, 'main', currentLevel, bestStars);
          }
          
          // Trigger stats update event for real-time UI updates
          window.dispatchEvent(new Event('statsUpdate'));
        }

        // Mark completion for guest progress: keep puzzles (1-30) separate from main levels
        if (uid === 'guest') {
          if (isPuzzleSession && puzzleIndex) {
            const completedPuzzleKey = `guest_${selectedLanguage}_puzzle_completed`;
            const prevCompletedPuzzles = JSON.parse(localStorage.getItem(completedPuzzleKey) || '[]') as number[];
            if (!prevCompletedPuzzles.includes(puzzleIndex)) {
              localStorage.setItem(completedPuzzleKey, JSON.stringify([...prevCompletedPuzzles, puzzleIndex]));
            }
          } else {
            const completedKey = `guest_${selectedLanguage}_completedLevels`;
            const unlockedKey = `guest_${selectedLanguage}_unlockedLevels`;
            const prevCompleted = JSON.parse(localStorage.getItem(completedKey) || '[]') as number[];
            if (!prevCompleted.includes(currentLevel)) {
              localStorage.setItem(completedKey, JSON.stringify([...prevCompleted, currentLevel]));
            }
            
            // Use AI to determine which lessons to unlock (1-3 lessons based on performance)
            const prevUnlocked = JSON.parse(localStorage.getItem(unlockedKey) || '[1,2,3,4,5,6,7,8,9]') as number[];
            const sessionData = {
              language: selectedLanguage,
              level: currentLevel,
              attempts: attempts + 1,
              timeTakenSeconds: (completionTimeNow - (startTime || Date.now())) / 1000,
              usedHint: showHint || usedAnyPuzzleHint,
              hadErrors: cleanedResult.includes('error'),
              stars
            };
            const levelsToUnlock = unlockLessonsBasedOnPerformance(uid, selectedLanguage, currentLevel, sessionData);
            const newUnlocked = [...new Set([...prevUnlocked, ...levelsToUnlock])];
            localStorage.setItem(unlockedKey, JSON.stringify(newUnlocked));
          }
        }

        // Save progress (merge) and store unlocked/completed per language
        if (userId !== 'guest') {
          const completedKey = `${selectedLanguage}_completedLevels`;
          const unlockedKey = `${selectedLanguage}_unlockedLevels`;
          
          // Use AI to determine which lessons to unlock (1-3 lessons based on performance)
          const sessionData = {
            language: selectedLanguage,
            level: currentLevel,
            attempts: attempts + 1,
            timeTakenSeconds: (completionTimeNow - (startTime || Date.now())) / 1000,
            usedHint: showHint || usedAnyPuzzleHint,
            hadErrors: cleanedResult.includes('error'),
            stars
          };
          const levelsToUnlock = unlockLessonsBasedOnPerformance(userId, selectedLanguage, currentLevel, sessionData);
          
          // Merge arrays in Firestore: we save last-completed and AI-recommended unlocks
            await savePlayerProgress(userId, { 
              currentLevel, 
              selectedLanguage, 
              code,
            [completedKey]: [currentLevel],
            [unlockedKey]: levelsToUnlock
            });
          }

        // Record session for AI
        const sessionData = {
            language: selectedLanguage,
            level: currentLevel,
          attempts: attempts + 1,
          timeTakenSeconds: (completionTimeNow - (startTime || Date.now())) / 1000,
          usedHint: showHint || usedAnyPuzzleHint,
          hadErrors: cleanedResult.includes('error'),
          stars
        };
        recordSession(userId, sessionData);
      }
    } catch (error: any) {
      setOutput(`❌ Error: ${error.message || error}`);
      setIsCompleted(false);
      localStorage.setItem('arcane_errors', '1');
    }

    setIsRunning(false);
  };

  const resetCode = () => {
    setCode(currentChallenge.starterCode);
    setOutput('');
    setIsCompleted(false);
  };

  const renderPuzzleFillIn = () => {
    if (!isPuzzleSession || !puzzleIndex) return null;
    const p = getGeneratedPuzzle(selectedLanguage, puzzleIndex);
    const meta = p.puzzleMeta;
    if (!meta) return null;
    return (
      <div className="space-y-4">
        {/* Blanks */}
        {meta.blanks.map((blank: any) => {
          return (
            <div key={blank.id} className="bg-slate-900/60 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-cyan-300">{blank.prompt}</label>
              </div>
              {blank.choices ? (
                <div className="flex flex-wrap gap-2">
                  {blank.choices.map((choice: string) => (
                    <button
                      key={choice}
                      onClick={() => setPuzzleInputs(prev => ({ ...prev, [blank.id]: choice }))}
                      className={`px-3 py-1 rounded border text-sm ${
                        (puzzleInputs[blank.id] ?? '') === choice
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'bg-slate-800/60 border-slate-600 text-gray-300 hover:bg-slate-800'
                      }`}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  value={puzzleInputs[blank.id] ?? ''}
                  onChange={(e) => setPuzzleInputs(prev => ({ ...prev, [blank.id]: e.target.value }))}
                  placeholder={blank.placeholder || 'Type your answer'}
                  className="w-full bg-slate-800/60 border border-slate-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              )}
            </div>
          );
        })}
        {/* Live preview of generated code */}
        <div className="bg-slate-900/60 border border-purple-500/30 rounded-xl">
          <div className="p-3 border-b border-purple-500/20 text-xs text-gray-400">Preview (generated from your pieces)</div>
          <pre className="p-4 text-sm text-gray-200 whitespace-pre-wrap">{buildCodeFromPuzzle()}</pre>
        </div>
      </div>
    );
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const insertTab = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  };

  // legacy function no longer used; logic moved inline with new rules
  // removed legacy calculateStars usage

  const toggleHint = () => {
    setShowHint(!showHint);
    localStorage.setItem('arcane_used_hint', showHint ? '0' : '1');
  };

  const getLanguageColor = () => {
    switch (selectedLanguage) {
      case 'javascript': return 'from-yellow-400 to-orange-500';
      case 'java': return 'from-red-500 to-orange-600';
      case 'python': return 'from-blue-400 to-green-500';
    }
  };

  const getLanguageIcon = () => {
    switch (selectedLanguage) {
      case 'javascript': return '🧙‍♂️';
      case 'java': return '⚔️';
      case 'python': return '🐍';
    }
  };

  const getLessonMeta = (level: number) => {
    const lesson = Math.ceil(level / 3);
    const stage = ((level - 1) % 3) + 1; // 1..3
    return { lesson, stage };
  };

  // W3 reference removed per request

  const getTutorialContent = () => {
    const tutorials = {
      javascript: {
        title: 'JavaScript Wizard Tutorial 🧙‍♂️',
        steps: [
          {
            title: 'Welcome to JavaScript Realm!',
            content: 'JavaScript is the language of the web! It\'s beginner-friendly and powerful. You\'ll learn to create interactive applications and master modern programming concepts.',
            tips: ['Start with simple console.log() statements', 'JavaScript uses const and let for variables', 'Functions are your best friends!']
          },
          {
            title: 'Using the Code Editor',
            content: 'The left side shows your quest story and objectives. The right side is your coding workspace where you write and test your code.',
            tips: ['Press Tab to indent your code', 'Click "Run Code" to execute', 'Use "Reset" to start fresh', 'The output appears below the editor']
          },
          {
            title: 'Getting Hints & Help',
            content: 'Stuck? No problem! Click "Show Hint" to get step-by-step guidance. The Arcane Mentor (floating button) watches your progress and offers smart tips.',
            tips: ['Hints explain the "why" not just the "what"', 'Using hints is learning, not cheating!', 'Arcane tracks your attempts and time']
          },
          {
            title: 'JavaScript Syntax Basics',
            content: 'Key syntax you\'ll use: console.log() for output, const/let for variables, function for reusable code, and if/else for decisions.',
            tips: ['End statements with semicolons ;', 'Use quotes for text: "hello"', 'Brackets {} group code together', 'Comments start with //']
          },
          {
            title: 'Earning Stars & EXP',
            content: 'Each game mode has different star criteria and EXP rewards! Main levels focus on code completion, puzzles test problem-solving, and drag-drop challenges test speed and accuracy.',
            tips: [
              '📖 Main Levels: 1★ Complete | 2★ No errors | 3★ Fast + Perfect',
              '🧩 Puzzles: 1★ Solve | 2★ Quick solve | 3★ Perfect + Fast',
              '🎯 Drag-Drop: 1★ Complete | 2★ First try | 3★ Under 60s',
              '⭐ Different EXP per mode: Main (15★) > Puzzles (10★) > Drag-Drop (8★)'
            ]
          }
        ]
      },
      java: {
        title: 'Java Knight Tutorial ⚔️',
        steps: [
          {
            title: 'Welcome to Java Kingdom!',
            content: 'Java is powerful and structured! It\'s used for enterprise applications, Android apps, and large systems. You\'ll learn object-oriented programming and strong typing.',
            tips: ['Java is verbose but clear', 'Everything is inside a class', 'Strong typing prevents many errors']
          },
          {
            title: 'Java Program Structure',
            content: 'Every Java program needs a class and a main method. The basic structure is: public class ClassName { public static void main(String[] args) { /* code here */ } }',
            tips: ['Class names start with capital letters', 'main() is where execution begins', 'Use System.out.println() for output', 'Semicolons end each statement']
          },
          {
            title: 'Using the Code Editor',
            content: 'Write your Java code in the editor. The compiler checks your syntax before running. Errors will show in the output console with helpful messages.',
            tips: ['Java is case-sensitive!', 'Match your brackets carefully', 'Read error messages - they help!', 'Use Tab for proper indentation']
          },
          {
            title: 'Object-Oriented Concepts',
            content: 'Java is all about objects and classes. You\'ll create classes, objects, methods, and learn inheritance as you progress through levels.',
            tips: ['Classes are blueprints', 'Objects are instances of classes', 'Methods are functions inside classes', 'Constructors initialize objects']
          },
          {
            title: 'Stars & EXP System',
            content: 'Each game mode has different star criteria and EXP rewards! Main levels focus on code completion, puzzles test problem-solving, and drag-drop challenges test speed and accuracy.',
            tips: [
              '📖 Main Levels: 1★ Complete | 2★ No errors | 3★ Fast + Perfect',
              '🧩 Puzzles: 1★ Solve | 2★ Quick solve | 3★ Perfect + Fast',
              '🎯 Drag-Drop: 1★ Complete | 2★ First try | 3★ Under 60s',
              '⭐ Different EXP per mode: Main (15★) > Puzzles (10★) > Drag-Drop (8★)'
            ]
          }
        ]
      },
      python: {
        title: 'Python Sage Tutorial 🐍',
        steps: [
          {
            title: 'Welcome to Python Sanctum!',
            content: 'Python is elegant and powerful! It\'s perfect for beginners and used in data science, web development, AI, and automation. You\'ll love its clean syntax.',
            tips: ['Python is beginner-friendly', 'Indentation matters!', 'No semicolons needed', 'Very readable code']
          },
          {
            title: 'Python Syntax Basics',
            content: 'Python uses indentation (spaces) instead of brackets. Use print() for output, variables need no type declaration, and # for comments.',
            tips: ['Indent with 2 or 4 spaces consistently', 'No curly braces needed', 'Colons : start code blocks', 'print() shows output']
          },
          {
            title: 'Using the Code Editor',
            content: 'Write clean Python code with proper indentation. The editor helps you, but Python is strict about spacing!',
            tips: ['Press Tab for indentation', 'Keep indentation consistent', 'Run code to see output', 'Errors explain what went wrong']
          },
          {
            title: 'Python Features',
            content: 'You\'ll learn variables, functions, lists, dictionaries, loops, and more. Python makes complex tasks simple with its extensive libraries.',
            tips: ['Lists use square brackets []', 'Dictionaries use curly braces {}', 'Functions defined with def', 'f-strings make formatting easy']
          },
          {
            title: 'EXP & Level System',
            content: 'Each game mode has different star criteria and EXP rewards! Main levels focus on code completion, puzzles test problem-solving, and drag-drop challenges test speed and accuracy.',
            tips: [
              '📖 Main Levels: 1★ Complete | 2★ No errors | 3★ Fast + Perfect',
              '🧩 Puzzles: 1★ Solve | 2★ Quick solve | 3★ Perfect + Fast',
              '🎯 Drag-Drop: 1★ Complete | 2★ First try | 3★ Under 60s',
              '⭐ Different EXP per mode: Main (15★) > Puzzles (10★) > Drag-Drop (8★)'
            ]
          }
        ]
      }
    };
    return tutorials[selectedLanguage];
  };

  const tutorial = getTutorialContent();
  const currentTutorialStep = tutorial.steps[tutorialStep];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* First Time Welcome */}
      {isFirstTime && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/50 rounded-2xl p-8 max-w-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🎮 Welcome to CodeRealm!
            </h2>
            <p className="text-gray-300 text-center mb-6">You're about to begin your coding adventure. Write code, solve challenges, and level up!</p>
            
            {/* Don't show again checkbox */}
            <div className="mb-6 flex items-center justify-center">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tutorialDismissed}
                  onChange={(e) => setTutorialDismissed(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-cyan-500 focus:ring-2 focus:ring-cyan-500"
                />
                <span className="text-sm text-gray-400">Don't show this again</span>
              </label>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  if (tutorialDismissed) {
                    localStorage.setItem('tutorialDismissed', 'true');
                  }
                  setIsFirstTime(false);
                  setShowTutorial(true);
                  setTutorialStep(0);
                }}
                className="flex-1 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-cyan-300"
              >
                Show Tutorial 📚
              </button>
              <button
                onClick={() => {
                  if (tutorialDismissed) {
                    localStorage.setItem('tutorialDismissed', 'true');
                  }
                  setIsFirstTime(false);
                  setShowTutorial(false);
                }}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Coding 🚀
              </button>
        </div>
        </div>
      </div>
      )}

      {/* Interactive Tutorial Modal */}
      {showTutorial && !isFirstTime && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500/50 rounded-2xl p-8 max-w-3xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
              <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {tutorial.title}
                </h2>
              <p className="text-gray-400 text-sm">Step {tutorialStep + 1} of {tutorial.steps.length}</p>
              </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((tutorialStep + 1) / tutorial.steps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-slate-900/50 rounded-xl p-6 mb-6 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{currentTutorialStep.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{currentTutorialStep.content}</p>
              
              {/* Tips */}
              <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                <h4 className="text-purple-300 font-semibold mb-3 flex items-center space-x-2">
                  <span>💡</span>
                  <span>Pro Tips:</span>
                </h4>
                <ul className="space-y-2">
                  {currentTutorialStep.tips.map((tip, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => {
                  if (tutorialStep > 0) {
                    setTutorialStep(tutorialStep - 1);
                  }
                }}
                disabled={tutorialStep === 0}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tutorialStep === 0
                    ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                }`}
              >
                ← Previous
              </button>

              <div className="flex space-x-2">
                {tutorial.steps.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === tutorialStep ? 'bg-cyan-400 w-6' : 'bg-slate-600'
                    }`}
                  ></div>
                ))}
              </div>

              {tutorialStep < tutorial.steps.length - 1 ? (
                <button
                  onClick={() => setTutorialStep(tutorialStep + 1)}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={() => {
                  setShowTutorial(false);
                    setTutorialStep(0);
                }}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                  Start Coding! 🚀
              </button>
              )}
            </div>

            {/* Skip Button */}
            <button
              onClick={() => {
                setShowTutorial(false);
                setTutorialStep(0);
              }}
              className="w-full mt-4 text-gray-400 hover:text-gray-300 text-sm transition-colors"
            >
              Skip Tutorial
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('game-overview')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-2 bg-cyan-400/10 px-4 py-2 rounded-lg border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Overview</span>
            </button>
            <button
              onClick={() => {
                setShowTutorial(true);
                setTutorialStep(0);
              }}
              className="text-purple-400 hover:text-purple-300 flex items-center space-x-2 bg-purple-400/10 px-4 py-2 rounded-lg border border-purple-400/20 hover:bg-purple-400/20 transition-all duration-300"
              title="Show Tutorial"
            >
              <Lightbulb className="h-5 w-5" />
              <span>Tutorial</span>
            </button>
            <div className="w-px h-8 bg-purple-500/30"></div>
            
            {/* Language & Level Info */}
            <div className="flex items-center space-x-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-purple-500/30 rounded-xl p-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${getLanguageColor()} rounded-lg flex items-center justify-center text-2xl shadow-lg`}>
                  {getLanguageIcon()}
                </div>
                <div>
                <h1 className="text-xl font-bold text-white capitalize">{selectedLanguage}</h1>
                <p className="text-sm text-cyan-400">{
                  isPuzzleSession
                    ? `Puzzle ${puzzleIndex} of 30`
                    : (() => { const m = getLessonMeta(currentLevel); return `Lesson ${m.lesson} • Level ${m.stage}/3 (of 150)`; })()
                }</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              {[1, 2, 3].map((star) => (
                <Star key={star} className={`h-5 w-5 ${star <= stars ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
              ))}
            </div>
            {isCompleted && (
              <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-semibold">Completed!</span>
              </div>
            )}
          </div>
        </div>

        {/* Challenge Story + Editor */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Story Card */}
            <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center space-x-2">
                <span>📖</span>
                <span>Story</span>
              </h2>
              <p className="text-gray-300 italic leading-relaxed">{isPuzzleSession && puzzleIndex ? getGeneratedPuzzle(selectedLanguage, puzzleIndex).story : currentChallenge.story}</p>
            </div>
            
            {/* Challenge Card */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <span>🎯</span>
                <span>{isPuzzleSession && puzzleIndex ? getGeneratedPuzzle(selectedLanguage, puzzleIndex).title : currentChallenge.title}</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">{isPuzzleSession && puzzleIndex ? getGeneratedPuzzle(selectedLanguage, puzzleIndex).description : currentChallenge.description}</p>
            </div>
            
            {/* Hint Card - Available for both main game and puzzles */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-6 rounded-2xl border border-yellow-500/30 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-yellow-400 flex items-center space-x-2">
                  <span>💡</span>
                  <span>Need a Hint?</span>
                </h3>
                  <button
                  onClick={toggleHint}
                  className="bg-yellow-500/20 hover:bg-yellow-500/30 px-3 py-1 rounded-lg text-yellow-300 transition-colors"
                >
                  {showHint ? 'Hide' : 'Show'} Hint
                </button>
              </div>
              {showHint && <p className="text-yellow-200 leading-relaxed">{isPuzzleSession && puzzleIndex ? getGeneratedPuzzle(selectedLanguage, puzzleIndex).hint : currentChallenge.hint}</p>}
            </div>
          </div>

          {/* Editor + Output */}
          <div className="space-y-4">
            {/* Code Editor or Fill-in Puzzle UI */}
            {!isFillInPuzzle ? (
              <div className="bg-slate-900/80 rounded-2xl border border-purple-500/30 backdrop-blur-sm shadow-2xl">
                <div className="flex justify-between items-center p-4 border-b border-purple-500/30">
                  <span className="text-cyan-400 text-sm font-mono">
                    main.{selectedLanguage === 'java' ? 'java' : selectedLanguage === 'python' ? 'py' : 'js'}
                    </span>
                  <button
                    onClick={resetCode}
                    className="text-gray-400 hover:text-white flex items-center space-x-1 transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span className="text-sm">Reset</span>
                  </button>
                </div>
                <textarea
                  ref={textareaRef}
                  value={code}
                  onChange={handleTextAreaChange}
                  onKeyDown={insertTab}
                  className="w-full h-80 bg-slate-800/50 text-white font-mono text-sm p-4 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-b-2xl"
                  placeholder="Write your code here..."
                  spellCheck={false}
                />
                <div className="flex justify-between items-center p-4 border-t border-purple-500/30 bg-slate-900/50">
                  <span className="text-sm text-gray-400">Press Tab to indent</span>
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 disabled:opacity-50 px-6 py-2 rounded-lg font-semibold text-white flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Play className="h-4 w-4" />
                    <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm shadow-2xl p-4">
                <div className="flex items-center justify-between pb-3 border-b border-green-500/20 mb-4">
                  <div className="text-green-300 font-semibold">Fill in the missing pieces</div>
                  <button
                    onClick={() => { setPuzzleInputs({}); setShowPuzzleHints({}); }}
                    className="text-gray-400 hover:text-white flex items-center space-x-1 transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span className="text-sm">Reset Pieces</span>
                  </button>
            </div>
                {renderPuzzleFillIn()}
                <div className="flex justify-end pt-3 border-t border-green-500/20 mt-4">
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 disabled:opacity-50 px-6 py-2 rounded-lg font-semibold text-white flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Play className="h-4 w-4" />
                    <span>{isRunning ? 'Running...' : 'Run Puzzle'}</span>
                  </button>
                  </div>
                  </div>
            )}

            {/* Output Console */}
            <div className="bg-slate-900/80 rounded-2xl border border-purple-500/30 backdrop-blur-sm shadow-2xl">
              <div className="flex justify-between items-center p-4 border-b border-purple-500/30">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <span>📊</span>
                  <span>Output</span>
                </h3>
                </div>
              <div className="p-4 bg-slate-800/50 min-h-32">
                  <pre className={`font-mono text-sm whitespace-pre-wrap ${
                  output.includes('Error') || output.includes('❌') ? 'text-red-400' : 'text-green-400'
                  }`}>
                  {output || '🚀 Click "Run Code" to see the output...'}
                  </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Completion Modal */}
        {isCompleted && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/50 p-8 rounded-2xl max-w-md text-center shadow-2xl">
              <CheckCircle className="h-16 w-16 text-cyan-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-3">{isPuzzleSession ? '🧩 Puzzle Complete!' : '🎉 Level Complete!'}</h3>
              <p className="text-gray-300 mb-2">You've mastered <span className="text-cyan-400 font-semibold">{isPuzzleSession && puzzleIndex ? getGeneratedPuzzle(selectedLanguage, puzzleIndex).title : currentChallenge.title}</span>!</p>
              <div className="flex justify-center space-x-1 mb-6">
                  {[1, 2, 3].map((star) => (
                  <Star key={star} className={`h-6 w-6 ${star <= stars ? 'text-yellow-400 fill-current animate-pulse' : 'text-gray-600'}`} />
                  ))}
                </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsCompleted(false)}
                  className="flex-1 bg-purple-500 hover:bg-purple-600 px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Review Code
                </button>
                <button
                  onClick={() => {
                    if (isPuzzleSession && puzzleIndex) {
                      if (puzzleIndex < 30) {
                        setPuzzleIndex(puzzleIndex + 1);
                      }
                    } else {
                      if (currentLevel < 150) {
                        setCurrentLevel(prev => prev + 1);
                      }
                    }
                    setIsCompleted(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  {isPuzzleSession ? (puzzleIndex && puzzleIndex < 30 ? 'Next Puzzle →' : 'Complete!') : (currentLevel < 150 ? 'Next Level →' : 'Complete!')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Arcane Mentor Panel */}
      <ArcaneCodeEditorPanel 
        selectedLanguage={selectedLanguage}
        currentLevel={currentLevel}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default CodeEditor;

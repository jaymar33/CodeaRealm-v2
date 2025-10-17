import React, { useState, useRef, useEffect } from 'react';
import { Play, RotateCcw, Lightbulb, CheckCircle, Star, ArrowLeft } from 'lucide-react';
import { Page } from '../App';
import { runCode as judge0RunCode } from '../utils/runCode';
import { savePlayerProgress, saveStars } from '../utils/firestore';
import { recordSession } from '../utils/adaptiveAI';
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
  const [showDetailedHelp, setShowDetailedHelp] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Debug isCompleted state changes
  useEffect(() => {
    console.log('🔍 [CodeEditor] isCompleted state changed to:', isCompleted);
  }, [isCompleted]);
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
    setShowDetailedHelp(false);
    // BULLETPROOF HINT RESET: Clear hint usage tracking for new level
    localStorage.setItem('arcane_used_hint', '0');
    console.log('🔍 BULLETPROOF: Reset hint usage tracking for new level');
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
      if (easy) {
        // EASY PUZZLES (1-10) - Basic concepts
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
      } else if (inter) {
        // INTERMEDIATE PUZZLES (11-20) - More complex logic
        switch (pat) {
          case 1: return mk('Find Duplicates', 'Find duplicate numbers in an array.', 'function findDuplicates(arr){\n  const seen = new Set();\n  const duplicates = [];\n  for(const num of arr){\n    if(__BLANK1__){\n      duplicates.push(num);\n    } else {\n      seen.add(num);\n    }\n  }\n  return duplicates;\n}\nconsole.log(findDuplicates([1,2,2,3,4,4]))', ['2','4'], 'Check if the number already exists in the Set using seen.has(num).', [{id:'BLANK1',prompt:'Check if already seen',choices:['seen.has(num)','seen.includes(num)','seen.contains(num)','seen[num]'],solution:'seen.has(num)'}]);
          case 2: return mk('Anagram Checker', 'Check if two strings are anagrams.', 'function isAnagram(s1, s2){\n  if(s1.length !== s2.length) return false;\n  const sorted1 = s1.split("").sort().join("");\n  const sorted2 = s2.split("").sort().join("");\n  return __BLANK1__;\n}\nconsole.log(isAnagram("listen", "silent"))', ['true'], 'Compare the two sorted strings using === operator.', [{id:'BLANK1',prompt:'Compare sorted strings',choices:['sorted1 === sorted2','sorted1 == sorted2','sorted1.equals(sorted2)','sorted1 ==== sorted2'],solution:'sorted1 === sorted2'}]);
          case 3: return mk('Fibonacci Sequence', 'Generate nth Fibonacci number.', 'function fibonacci(n){\n  if(n <= 1) return n;\n  return __BLANK1__;\n}\nconsole.log(fibonacci(7))', ['13'], 'Fibonacci formula: fib(n) = fib(n-1) + fib(n-2). Use recursive calls.', [{id:'BLANK1',prompt:'Recursive formula',choices:['fibonacci(n-1) + fibonacci(n-2)','fibonacci(n-1) - fibonacci(n-2)','fibonacci(n) + fibonacci(n-1)','n + fibonacci(n-1)'],solution:'fibonacci(n-1) + fibonacci(n-2)'}]);
          case 4: return mk('Prime Checker', 'Check if a number is prime.', 'function isPrime(n){\n  if(n < 2) return false;\n  for(let i = 2; i <= Math.sqrt(n); i++){\n    if(__BLANK1__) return false;\n  }\n  return true;\n}\nconsole.log(isPrime(17))', ['true'], 'Check if n is divisible by i using modulo operator.', [{id:'BLANK1',prompt:'Check divisibility',choices:['n % i === 0','n / i === 0','n % i == 0','i % n === 0'],solution:'n % i === 0'}]);
          case 5: return mk('Array Intersection', 'Find common elements in two arrays.', 'function intersection(arr1, arr2){\n  return arr1.filter(__BLANK1__);\n}\nconsole.log(intersection([1,2,3], [2,3,4]))', ['2','3'], 'Use filter with includes() to find elements that exist in both arrays.', [{id:'BLANK1',prompt:'Filter common elements',choices:['item => arr2.includes(item)','item => arr1.includes(item)','item => arr2.has(item)','item => arr2.indexOf(item)'],solution:'item => arr2.includes(item)'}]);
          case 6: return mk('Binary Search', 'Find index of target in sorted array.', 'function binarySearch(arr, target){\n  let left = 0, right = arr.length - 1;\n  while(left <= right){\n    const mid = Math.floor((left + right) / 2);\n    if(arr[mid] === target) return mid;\n    if(arr[mid] < target) left = mid + 1;\n    else right = __BLANK1__;\n  }\n  return -1;\n}\nconsole.log(binarySearch([1,3,5,7,9], 5))', ['2'], 'When target is smaller, move right boundary to mid - 1.', [{id:'BLANK1',prompt:'Move right boundary',choices:['mid - 1','mid + 1','mid','left - 1'],solution:'mid - 1'}]);
          case 7: return mk('Valid Parentheses', 'Check if parentheses are balanced.', 'function isValid(s){\n  const stack = [];\n  const pairs = {"(": ")", "[": "]", "{": "}"};\n  for(const char of s){\n    if(pairs[char]){\n      stack.push(__BLANK1__);\n    } else if(stack.length === 0 || stack.pop() !== char){\n      return false;\n    }\n  }\n  return stack.length === 0;\n}\nconsole.log(isValid("()[]{}"))', ['true'], 'Push the closing bracket for each opening bracket.', [{id:'BLANK1',prompt:'Push closing bracket',choices:['pairs[char]','char','pairs.char','pairs[char]'],solution:'pairs[char]'}]);
          case 8: return mk('Two Sum', 'Find two numbers that add up to target.', 'function twoSum(nums, target){\n  const map = new Map();\n  for(let i = 0; i < nums.length; i++){\n    const complement = target - nums[i];\n    if(map.has(complement)){\n      return [map.get(complement), __BLANK1__];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}\nconsole.log(twoSum([2,7,11,15], 9))', ['0','1'], 'Return the current index i as the second element.', [{id:'BLANK1',prompt:'Current index',choices:['i','nums[i]','complement','map.get(complement)'],solution:'i'}]);
          case 9: return mk('Longest Common Prefix', 'Find longest common prefix.', 'function longestCommonPrefix(strs){\n  if(strs.length === 0) return "";\n  let prefix = strs[0];\n  for(let i = 1; i < strs.length; i++){\n    while(!strs[i].startsWith(prefix)){\n      prefix = prefix.substring(0, __BLANK1__);\n    }\n  }\n  return prefix;\n}\nconsole.log(longestCommonPrefix(["flower","flow","flight"]))', ['fl'], 'Remove last character from prefix using substring(0, length-1).', [{id:'BLANK1',prompt:'Remove last character',choices:['prefix.length - 1','prefix.length','prefix.length + 1','prefix.length - 2'],solution:'prefix.length - 1'}]);
          default: return mk('Merge Sorted Arrays', 'Merge two sorted arrays.', 'function mergeSorted(arr1, arr2){\n  const result = [];\n  let i = 0, j = 0;\n  while(i < arr1.length && j < arr2.length){\n    if(arr1[i] <= arr2[j]){\n      result.push(arr1[i++]);\n    } else {\n      result.push(__BLANK1__);\n    }\n  }\n  return result.concat(arr1.slice(i)).concat(arr2.slice(j));\n}\nconsole.log(mergeSorted([1,3,5], [2,4,6]))', ['1','2','3','4','5','6'], 'Push the smaller element from arr2 and increment j.', [{id:'BLANK1',prompt:'Push from arr2',choices:['arr2[j++]','arr2[j]','arr2[i++]','arr1[j++]'],solution:'arr2[j++]'}]);
        }
      } else {
        // ADVANCED PUZZLES (21-30) - Complex algorithms
        switch (pat) {
          case 1: return mk('Quick Sort', 'Implement quicksort algorithm.', 'function quickSort(arr){\n  if(arr.length <= 1) return arr;\n  const pivot = arr[Math.floor(arr.length / 2)];\n  const left = arr.filter(x => x < pivot);\n  const right = arr.filter(x => x > pivot);\n  const equal = arr.filter(x => x === pivot);\n  return __BLANK1__;\n}\nconsole.log(quickSort([3,6,8,10,1,2,1]))', ['1','1','2','3','6','8','10'], 'Concatenate recursive calls: [...left, ...equal, ...right].', [{id:'BLANK1',prompt:'Concatenate sorted parts',choices:['quickSort(left).concat(equal, quickSort(right))','quickSort(left).concat(quickSort(right))','left.concat(equal, right)','quickSort(left, equal, quickSort(right))'],solution:'quickSort(left).concat(equal, quickSort(right))'}]);
          case 2: return mk('Dijkstra Algorithm', 'Find shortest path using Dijkstra.', 'function dijkstra(graph, start){\n  const distances = {};\n  const visited = new Set();\n  const pq = [[0, start]];\n  distances[start] = 0;\n  while(pq.length > 0){\n    const [dist, node] = pq.shift();\n    if(visited.has(node)) continue;\n    visited.add(node);\n    for(const [neighbor, weight] of graph[node] || []){\n      const newDist = dist + weight;\n      if(!distances[neighbor] || newDist < distances[neighbor]){\n        distances[neighbor] = __BLANK1__;\n        pq.push([newDist, neighbor]);\n      }\n    }\n  }\n  return distances;\n}\nconsole.log(dijkstra({A:[[B,1]], B:[[C,2]]}, "A"))', ['0','1','3'], 'Update distance to neighbor with the new calculated distance.', [{id:'BLANK1',prompt:'Update distance',choices:['newDist','dist','weight','dist + weight'],solution:'newDist'}]);
          case 3: return mk('LRU Cache', 'Implement Least Recently Used cache.', 'class LRUCache{\n  constructor(capacity){\n    this.capacity = capacity;\n    this.cache = new Map();\n  }\n  get(key){\n    if(this.cache.has(key)){\n      const value = this.cache.get(key);\n      this.cache.delete(key);\n      this.cache.set(key, value);\n      return value;\n    }\n    return -1;\n  }\n  put(key, value){\n    if(this.cache.has(key)){\n      this.cache.delete(key);\n    } else if(this.cache.size >= this.capacity){\n      const firstKey = this.cache.keys().next().value;\n      this.cache.delete(__BLANK1__);\n    }\n    this.cache.set(key, value);\n  }\n}\nconst lru = new LRUCache(2);', ['2'], 'Delete the least recently used (first) key when cache is full.', [{id:'BLANK1',prompt:'Delete LRU key',choices:['firstKey','key','value','this.capacity'],solution:'firstKey'}]);
          case 4: return mk('Trie Implementation', 'Implement a trie data structure.', 'class Trie{\n  constructor(){\n    this.root = {};\n  }\n  insert(word){\n    let node = this.root;\n    for(const char of word){\n      if(!node[char]) node[char] = {};\n      node = __BLANK1__;\n    }\n    node.isEnd = true;\n  }\n  search(word){\n    let node = this.root;\n    for(const char of word){\n      if(!node[char]) return false;\n      node = node[char];\n    }\n    return node.isEnd === true;\n  }\n}\nconst trie = new Trie();', ['true'], 'Move to the next node in the trie structure.', [{id:'BLANK1',prompt:'Move to next node',choices:['node[char]','node.char','char','node'],solution:'node[char]'}]);
          case 5: return mk('Kadane Algorithm', 'Find maximum subarray sum.', 'function maxSubArray(nums){\n  let maxSoFar = nums[0];\n  let maxEndingHere = nums[0];\n  for(let i = 1; i < nums.length; i++){\n    maxEndingHere = Math.max(nums[i], __BLANK1__);\n    maxSoFar = Math.max(maxSoFar, maxEndingHere);\n  }\n  return maxSoFar;\n}\nconsole.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))', ['6'], 'Either start new subarray or extend existing one: maxEndingHere + nums[i].', [{id:'BLANK1',prompt:'Extend or start new',choices:['maxEndingHere + nums[i]','maxEndingHere','nums[i]','maxSoFar + nums[i]'],solution:'maxEndingHere + nums[i]'}]);
          case 6: return mk('Floyd Cycle Detection', 'Detect cycle in linked list.', 'function hasCycle(head){\n  if(!head || !head.next) return false;\n  let slow = head;\n  let fast = head;\n  while(fast && fast.next){\n    slow = slow.next;\n    fast = __BLANK1__;\n    if(slow === fast) return true;\n  }\n  return false;\n}\nconsole.log(hasCycle({val:1, next:{val:2, next:null}}))', ['false'], 'Move fast pointer two steps ahead: fast.next.next.', [{id:'BLANK1',prompt:'Move fast pointer',choices:['fast.next.next','fast.next','slow.next','head.next'],solution:'fast.next.next'}]);
          case 7: return mk('Edit Distance', 'Calculate minimum edit distance.', 'function minDistance(word1, word2){\n  const m = word1.length, n = word2.length;\n  const dp = Array(m+1).fill().map(() => Array(n+1).fill(0));\n  for(let i = 0; i <= m; i++) dp[i][0] = i;\n  for(let j = 0; j <= n; j++) dp[0][j] = j;\n  for(let i = 1; i <= m; i++){\n    for(let j = 1; j <= n; j++){\n      if(word1[i-1] === word2[j-1]){\n        dp[i][j] = dp[i-1][j-1];\n      } else {\n        dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], __BLANK1__);\n      }\n    }\n  }\n  return dp[m][n];\n}\nconsole.log(minDistance("horse", "ros"))', ['3'], 'Consider all three operations: delete, insert, replace (diagonal).', [{id:'BLANK1',prompt:'Replace operation',choices:['dp[i-1][j-1]','dp[i-1][j]','dp[i][j-1]','dp[i][j]'],solution:'dp[i-1][j-1]'}]);
          case 8: return mk('Segment Tree', 'Implement range sum query.', 'class SegmentTree{\n  constructor(arr){\n    this.n = arr.length;\n    this.tree = new Array(4 * this.n).fill(0);\n    this.build(arr, 0, 0, this.n - 1);\n  }\n  build(arr, node, start, end){\n    if(start === end){\n      this.tree[node] = arr[start];\n    } else {\n      const mid = Math.floor((start + end) / 2);\n      this.build(arr, 2*node+1, start, mid);\n      this.build(arr, 2*node+2, mid+1, end);\n      this.tree[node] = __BLANK1__;\n    }\n  }\n  query(l, r){\n    return this.queryHelper(0, 0, this.n-1, l, r);\n  }\n}\nconst st = new SegmentTree([1,3,5,7,9]);', ['15'], 'Sum left and right children: tree[2*node+1] + tree[2*node+2].', [{id:'BLANK1',prompt:'Sum children',choices:['this.tree[2*node+1] + this.tree[2*node+2]','this.tree[node]','arr[start] + arr[end]','this.tree[2*node+1]'],solution:'this.tree[2*node+1] + this.tree[2*node+2]'}]);
          case 9: return mk('Union Find', 'Implement disjoint set union.', 'class UnionFind{\n  constructor(n){\n    this.parent = Array(n).fill().map((_, i) => i);\n    this.rank = Array(n).fill(0);\n  }\n  find(x){\n    if(this.parent[x] !== x){\n      this.parent[x] = __BLANK1__;\n    }\n    return this.parent[x];\n  }\n  union(x, y){\n    const px = this.find(x), py = this.find(y);\n    if(px === py) return;\n    if(this.rank[px] < this.rank[py]){\n      this.parent[px] = py;\n    } else if(this.rank[px] > this.rank[py]){\n      this.parent[py] = px;\n    } else {\n      this.parent[py] = px;\n      this.rank[px]++;\n    }\n  }\n}\nconst uf = new UnionFind(5);', ['true'], 'Path compression: make parent point to root recursively.', [{id:'BLANK1',prompt:'Path compression',choices:['this.find(this.parent[x])','this.parent[x]','x','this.parent[this.parent[x]]'],solution:'this.find(this.parent[x])'}]);
          default: return mk('Suffix Array', 'Build suffix array for string.', 'function buildSuffixArray(s){\n  const suffixes = [];\n  for(let i = 0; i < s.length; i++){\n    suffixes.push({index: i, suffix: s.substring(__BLANK1__)});\n  }\n  suffixes.sort((a, b) => a.suffix.localeCompare(b.suffix));\n  return suffixes.map(s => s.index);\n}\nconsole.log(buildSuffixArray("banana"))', ['0','1','2','3','4','5'], 'Create suffix starting from index i: s.substring(i).', [{id:'BLANK1',prompt:'Suffix from index',choices:['i','i+1','0','s.length'],solution:'i'}]);
        }
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
          // BULLETPROOF PUZZLE STAR CALCULATION
          const elapsedSeconds = startTime ? (completionTimeNow - startTime) / 1000 : Infinity;
          const hintWasUsed = showHint || usedAnyPuzzleHint || localStorage.getItem('arcane_used_hint') === '1';
          let starCount = 1; // Base star for completion
          
          // Add star for no hint usage
          if (!hintWasUsed) {
            starCount += 1;
          }
          
          // Add star for speed (under 60 seconds)
          if (elapsedSeconds <= 60) {
            starCount += 1;
          }
          
          // Ensure minimum 1 star, maximum 3 stars
          starCount = Math.max(1, Math.min(3, starCount));
          
          console.log(`⭐ BULLETPROOF Puzzle Star calculation:`);
          console.log(`   - Base completion: 1 star`);
          console.log(`   - No hint used: ${!hintWasUsed ? '+1' : '+0'} star`);
          console.log(`   - Fast completion (${elapsedSeconds.toFixed(1)}s): ${elapsedSeconds <= 60 ? '+1' : '+0'} star`);
          console.log(`   - Final: ${starCount} stars`);
          
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

      // Main game flexible validation - lesson-specific and lenient
      const passesPuzzle = (() => {
        console.log('🔍 [CodeEditor] Validation Debug:', {
          currentLevel,
          hasError,
          cleanedResult,
          outLower: cleanedResult.toLowerCase()
        });
        
        // If there are errors, fail
        if (hasError) return false;
        
        // If no output at all, fail (unless it's a valid empty output scenario)
        if (!cleanedResult && currentLevel > 5) return false;
        
        // Flexible success criteria based on lesson content
        const outLower = cleanedResult.toLowerCase();
        
        // Get lesson-specific validation based on current challenge
        const lessonNum = Math.ceil(currentLevel / 3);
        const levelStage = ((currentLevel - 1) % 3) + 1;
        
        // Lesson-specific validation patterns - properly categorized by difficulty
        const getLessonValidation = (lesson: number, stage: number, language: string) => {
          const patterns: Record<string, Record<number, Record<number, string[]>>> = {
            python: {
              // EASY LEVEL (1-20) - True Beginner Concepts
              1: { 1: ['print', 'hello'], 2: ['print', 'hello'], 3: ['print', 'hello'] },
              2: { 1: ['=', 'variable', 'f"'], 2: ['=', 'variable', 'f"'], 3: ['=', 'variable', 'f"'] },
              3: { 1: ['def', 'function', 'return'], 2: ['def', 'function', 'return'], 3: ['def', 'function', 'return'] },
              4: { 1: ['[', ']', 'list'], 2: ['[', ']', 'list'], 3: ['[', ']', 'list'] },
              5: { 1: ['if', 'condition'], 2: ['if', 'condition'], 3: ['if', 'condition'] },
              6: { 1: ['for', 'range'], 2: ['for', 'range'], 3: ['for', 'range'] },
              7: { 1: ['string', 'upper', 'lower'], 2: ['string', 'upper', 'lower'], 3: ['string', 'upper', 'lower'] },
              8: { 1: ['+', '-', '*', '/'], 2: ['+', '-', '*', '/'], 3: ['+', '-', '*', '/'] },
              9: { 1: ['==', '!=', '>', '<'], 2: ['==', '!=', '>', '<'], 3: ['==', '!=', '>', '<'] },
              10: { 1: ['+', 'concat'], 2: ['+', 'concat'], 3: ['+', 'concat'] },
              11: { 1: ['input', 'user'], 2: ['input', 'user'], 3: ['input', 'user'] },
              12: { 1: ['int', 'float', 'str'], 2: ['int', 'float', 'str'], 3: ['int', 'float', 'str'] },
              13: { 1: ['bool', 'true', 'false'], 2: ['bool', 'true', 'false'], 3: ['bool', 'true', 'false'] },
              14: { 1: ['and', 'or', 'not'], 2: ['and', 'or', 'not'], 3: ['and', 'or', 'not'] },
              15: { 1: ['elif', 'multiple'], 2: ['elif', 'multiple'], 3: ['elif', 'multiple'] },
              16: { 1: ['while', 'loop'], 2: ['while', 'loop'], 3: ['while', 'loop'] },
              17: { 1: ['break', 'continue'], 2: ['break', 'continue'], 3: ['break', 'continue'] },
              18: { 1: ['split', 'join'], 2: ['split', 'join'], 3: ['split', 'join'] },
              19: { 1: ['format', 'f"'], 2: ['format', 'f"'], 3: ['format', 'f"'] },
              20: { 1: ['len', 'count'], 2: ['len', 'count'], 3: ['len', 'count'] },
              
              // INTERMEDIATE LEVEL (21-40) - Building on Basics
              21: { 1: ['def', 'parameter'], 2: ['def', 'parameter'], 3: ['def', 'parameter'] },
              22: { 1: ['append', 'remove', 'insert'], 2: ['append', 'remove', 'insert'], 3: ['append', 'remove', 'insert'] },
              23: { 1: ['if', 'else'], 2: ['if', 'else'], 3: ['if', 'else'] },
              24: { 1: ['for', 'in', 'list'], 2: ['for', 'in', 'list'], 3: ['for', 'in', 'list'] },
              25: { 1: ['dict', '{', '}', 'key'], 2: ['dict', '{', '}', 'key'], 3: ['dict', '{', '}', 'key'] },
              26: { 1: ['tuple', '(', ')'], 2: ['tuple', '(', ')'], 3: ['tuple', '(', ')'] },
              27: { 1: ['set', '{', '}', 'unique'], 2: ['set', '{', '}', 'unique'], 3: ['set', '{', '}', 'unique'] },
              28: { 1: ['try', 'except'], 2: ['try', 'except'], 3: ['try', 'except'] },
              29: { 1: ['lambda', 'anonymous'], 2: ['lambda', 'anonymous'], 3: ['lambda', 'anonymous'] },
              30: { 1: ['comprehension', 'for', 'in'], 2: ['comprehension', 'for', 'in'], 3: ['comprehension', 'for', 'in'] },
              31: { 1: ['import', 'module'], 2: ['import', 'module'], 3: ['import', 'module'] },
              32: { 1: ['enumerate', 'zip'], 2: ['enumerate', 'zip'], 3: ['enumerate', 'zip'] },
              33: { 1: ['map', 'filter'], 2: ['map', 'filter'], 3: ['map', 'filter'] },
              34: { 1: ['sorted', 'reverse'], 2: ['sorted', 'reverse'], 3: ['sorted', 'reverse'] },
              35: { 1: ['max', 'min', 'sum'], 2: ['max', 'min', 'sum'], 3: ['max', 'min', 'sum'] },
              36: { 1: ['any', 'all'], 2: ['any', 'all'], 3: ['any', 'all'] },
              37: { 1: ['isinstance', 'type'], 2: ['isinstance', 'type'], 3: ['isinstance', 'type'] },
              38: { 1: ['hasattr', 'getattr'], 2: ['hasattr', 'getattr'], 3: ['hasattr', 'getattr'] },
              39: { 1: ['globals', 'locals'], 2: ['globals', 'locals'], 3: ['globals', 'locals'] },
              40: { 1: ['eval', 'exec'], 2: ['eval', 'exec'], 3: ['eval', 'exec'] },
              
              // ADVANCED LEVEL (41-50) - Complex Topics
              41: { 1: ['class', 'object', 'self'], 2: ['class', 'object', 'self'], 3: ['class', 'object', 'self'] },
              42: { 1: ['file', 'open', 'read', 'write'], 2: ['file', 'open', 'read', 'write'], 3: ['file', 'open', 'read', 'write'] },
              43: { 1: ['inheritance', 'super'], 2: ['inheritance', 'super'], 3: ['inheritance', 'super'] },
              44: { 1: ['polymorphism', 'override'], 2: ['polymorphism', 'override'], 3: ['polymorphism', 'override'] },
              45: { 1: ['decorator', '@'], 2: ['decorator', '@'], 3: ['decorator', '@'] },
              46: { 1: ['context', 'with', 'as'], 2: ['context', 'with', 'as'], 3: ['context', 'with', 'as'] },
              47: { 1: ['generator', 'yield'], 2: ['generator', 'yield'], 3: ['generator', 'yield'] },
              48: { 1: ['threading', 'thread'], 2: ['threading', 'thread'], 3: ['threading', 'thread'] },
              49: { 1: ['asyncio', 'async', 'await'], 2: ['asyncio', 'async', 'await'], 3: ['asyncio', 'async', 'await'] },
              50: { 1: ['metaclass', 'descriptor'], 2: ['metaclass', 'descriptor'], 3: ['metaclass', 'descriptor'] }
            },
            javascript: {
              // EASY LEVEL (1-20) - True Beginner Concepts
              1: { 1: ['console.log', 'hello'], 2: ['console.log', 'hello'], 3: ['console.log', 'hello'] },
              2: { 1: ['const', 'let', 'var'], 2: ['const', 'let', 'var'], 3: ['const', 'let', 'var'] },
              3: { 1: ['function', 'return'], 2: ['function', 'return'], 3: ['function', 'return'] },
              4: { 1: ['[', ']', 'array'], 2: ['[', ']', 'array'], 3: ['[', ']', 'array'] },
              5: { 1: ['if', 'condition'], 2: ['if', 'condition'], 3: ['if', 'condition'] },
              6: { 1: ['for', 'loop'], 2: ['for', 'loop'], 3: ['for', 'loop'] },
              7: { 1: ['string', 'toUpperCase', 'toLowerCase'], 2: ['string', 'toUpperCase', 'toLowerCase'], 3: ['string', 'toUpperCase', 'toLowerCase'] },
              8: { 1: ['+', '-', '*', '/'], 2: ['+', '-', '*', '/'], 3: ['+', '-', '*', '/'] },
              9: { 1: ['==', '===', '!=', '!=='], 2: ['==', '===', '!=', '!=='], 3: ['==', '===', '!=', '!=='] },
              10: { 1: ['+', 'concat'], 2: ['+', 'concat'], 3: ['+', 'concat'] },
              11: { 1: ['prompt', 'input'], 2: ['prompt', 'input'], 3: ['prompt', 'input'] },
              12: { 1: ['Number', 'String', 'Boolean'], 2: ['Number', 'String', 'Boolean'], 3: ['Number', 'String', 'Boolean'] },
              13: { 1: ['true', 'false'], 2: ['true', 'false'], 3: ['true', 'false'] },
              14: { 1: ['&&', '||', '!'], 2: ['&&', '||', '!'], 3: ['&&', '||', '!'] },
              15: { 1: ['else', 'if'], 2: ['else', 'if'], 3: ['else', 'if'] },
              16: { 1: ['while', 'loop'], 2: ['while', 'loop'], 3: ['while', 'loop'] },
              17: { 1: ['break', 'continue'], 2: ['break', 'continue'], 3: ['break', 'continue'] },
              18: { 1: ['split', 'join'], 2: ['split', 'join'], 3: ['split', 'join'] },
              19: { 1: ['template', 'literal'], 2: ['template', 'literal'], 3: ['template', 'literal'] },
              20: { 1: ['length', 'indexOf'], 2: ['length', 'indexOf'], 3: ['length', 'indexOf'] },
              
              // INTERMEDIATE LEVEL (21-40) - Building on Basics
              21: { 1: ['function', 'parameter'], 2: ['function', 'parameter'], 3: ['function', 'parameter'] },
              22: { 1: ['push', 'pop', 'shift', 'unshift'], 2: ['push', 'pop', 'shift', 'unshift'], 3: ['push', 'pop', 'shift', 'unshift'] },
              23: { 1: ['if', 'else'], 2: ['if', 'else'], 3: ['if', 'else'] },
              24: { 1: ['for', 'in', 'of'], 2: ['for', 'in', 'of'], 3: ['for', 'in', 'of'] },
              25: { 1: ['object', '{', '}', 'property'], 2: ['object', '{', '}', 'property'], 3: ['object', '{', '}', 'property'] },
              26: { 1: ['null', 'undefined'], 2: ['null', 'undefined'], 3: ['null', 'undefined'] },
              27: { 1: ['Set', 'Map'], 2: ['Set', 'Map'], 3: ['Set', 'Map'] },
              28: { 1: ['try', 'catch'], 2: ['try', 'catch'], 3: ['try', 'catch'] },
              29: { 1: ['arrow', '=>'], 2: ['arrow', '=>'], 3: ['arrow', '=>'] },
              30: { 1: ['destructuring', 'spread'], 2: ['destructuring', 'spread'], 3: ['destructuring', 'spread'] },
              31: { 1: ['import', 'export'], 2: ['import', 'export'], 3: ['import', 'export'] },
              32: { 1: ['forEach', 'for'], 2: ['forEach', 'for'], 3: ['forEach', 'for'] },
              33: { 1: ['map', 'filter', 'reduce'], 2: ['map', 'filter', 'reduce'], 3: ['map', 'filter', 'reduce'] },
              34: { 1: ['sort', 'reverse'], 2: ['sort', 'reverse'], 3: ['sort', 'reverse'] },
              35: { 1: ['Math.max', 'Math.min'], 2: ['Math.max', 'Math.min'], 3: ['Math.max', 'Math.min'] },
              36: { 1: ['some', 'every'], 2: ['some', 'every'], 3: ['some', 'every'] },
              37: { 1: ['typeof', 'instanceof'], 2: ['typeof', 'instanceof'], 3: ['typeof', 'instanceof'] },
              38: { 1: ['hasOwnProperty', 'in'], 2: ['hasOwnProperty', 'in'], 3: ['hasOwnProperty', 'in'] },
              39: { 1: ['global', 'window'], 2: ['global', 'window'], 3: ['global', 'window'] },
              40: { 1: ['eval', 'Function'], 2: ['eval', 'Function'], 3: ['eval', 'Function'] },
              
              // ADVANCED LEVEL (41-50) - Complex Topics
              41: { 1: ['class', 'constructor'], 2: ['class', 'constructor'], 3: ['class', 'constructor'] },
              42: { 1: ['fetch', 'api'], 2: ['fetch', 'api'], 3: ['fetch', 'api'] },
              43: { 1: ['extends', 'super'], 2: ['extends', 'super'], 3: ['extends', 'super'] },
              44: { 1: ['polymorphism', 'override'], 2: ['polymorphism', 'override'], 3: ['polymorphism', 'override'] },
              45: { 1: ['proxy', 'reflect'], 2: ['proxy', 'reflect'], 3: ['proxy', 'reflect'] },
              46: { 1: ['symbol', 'iterator'], 2: ['symbol', 'iterator'], 3: ['symbol', 'iterator'] },
              47: { 1: ['generator', 'yield'], 2: ['generator', 'yield'], 3: ['generator', 'yield'] },
              48: { 1: ['WebWorker', 'thread'], 2: ['WebWorker', 'thread'], 3: ['WebWorker', 'thread'] },
              49: { 1: ['async', 'await'], 2: ['async', 'await'], 3: ['async', 'await'] },
              50: { 1: ['metaprogramming', 'decorator'], 2: ['metaprogramming', 'decorator'], 3: ['metaprogramming', 'decorator'] }
            },
            java: {
              // EASY LEVEL (1-20) - True Beginner Concepts
              1: { 1: ['System.out.println', 'hello'], 2: ['System.out.println', 'hello'], 3: ['System.out.println', 'hello'] },
              2: { 1: ['String', 'int', 'double'], 2: ['String', 'int', 'double'], 3: ['String', 'int', 'double'] },
              3: { 1: ['public', 'static', 'void', 'main'], 2: ['public', 'static', 'void', 'main'], 3: ['public', 'static', 'void', 'main'] },
              4: { 1: ['[]', 'array'], 2: ['[]', 'array'], 3: ['[]', 'array'] },
              5: { 1: ['if', 'condition'], 2: ['if', 'condition'], 3: ['if', 'condition'] },
              6: { 1: ['for', 'loop'], 2: ['for', 'loop'], 3: ['for', 'loop'] },
              7: { 1: ['String', 'charAt', 'length'], 2: ['String', 'charAt', 'length'], 3: ['String', 'charAt', 'length'] },
              8: { 1: ['+', '-', '*', '/'], 2: ['+', '-', '*', '/'], 3: ['+', '-', '*', '/'] },
              9: { 1: ['==', '!=', '>', '<'], 2: ['==', '!=', '>', '<'], 3: ['==', '!=', '>', '<'] },
              10: { 1: ['+', 'concat'], 2: ['+', 'concat'], 3: ['+', 'concat'] },
              11: { 1: ['Scanner', 'input'], 2: ['Scanner', 'input'], 3: ['Scanner', 'input'] },
              12: { 1: ['Integer', 'Double', 'Boolean'], 2: ['Integer', 'Double', 'Boolean'], 3: ['Integer', 'Double', 'Boolean'] },
              13: { 1: ['true', 'false'], 2: ['true', 'false'], 3: ['true', 'false'] },
              14: { 1: ['&&', '||', '!'], 2: ['&&', '||', '!'], 3: ['&&', '||', '!'] },
              15: { 1: ['else', 'if'], 2: ['else', 'if'], 3: ['else', 'if'] },
              16: { 1: ['while', 'loop'], 2: ['while', 'loop'], 3: ['while', 'loop'] },
              17: { 1: ['break', 'continue'], 2: ['break', 'continue'], 3: ['break', 'continue'] },
              18: { 1: ['split', 'join'], 2: ['split', 'join'], 3: ['split', 'join'] },
              19: { 1: ['String.format', 'printf'], 2: ['String.format', 'printf'], 3: ['String.format', 'printf'] },
              20: { 1: ['length', 'indexOf'], 2: ['length', 'indexOf'], 3: ['length', 'indexOf'] },
              
              // INTERMEDIATE LEVEL (21-40) - Building on Basics
              21: { 1: ['method', 'parameter'], 2: ['method', 'parameter'], 3: ['method', 'parameter'] },
              22: { 1: ['ArrayList', 'add', 'remove'], 2: ['ArrayList', 'add', 'remove'], 3: ['ArrayList', 'add', 'remove'] },
              23: { 1: ['if', 'else'], 2: ['if', 'else'], 3: ['if', 'else'] },
              24: { 1: ['for', 'enhanced'], 2: ['for', 'enhanced'], 3: ['for', 'enhanced'] },
              25: { 1: ['HashMap', 'Map'], 2: ['HashMap', 'Map'], 3: ['HashMap', 'Map'] },
              26: { 1: ['null', 'Optional'], 2: ['null', 'Optional'], 3: ['null', 'Optional'] },
              27: { 1: ['HashSet', 'TreeSet'], 2: ['HashSet', 'TreeSet'], 3: ['HashSet', 'TreeSet'] },
              28: { 1: ['try', 'catch'], 2: ['try', 'catch'], 3: ['try', 'catch'] },
              29: { 1: ['Lambda', '->'], 2: ['Lambda', '->'], 3: ['Lambda', '->'] },
              30: { 1: ['Stream', 'forEach'], 2: ['Stream', 'forEach'], 3: ['Stream', 'forEach'] },
              31: { 1: ['import', 'package'], 2: ['import', 'package'], 3: ['import', 'package'] },
              32: { 1: ['Iterator', 'for'], 2: ['Iterator', 'for'], 3: ['Iterator', 'for'] },
              33: { 1: ['Stream', 'map', 'filter'], 2: ['Stream', 'map', 'filter'], 3: ['Stream', 'map', 'filter'] },
              34: { 1: ['Collections.sort', 'reverse'], 2: ['Collections.sort', 'reverse'], 3: ['Collections.sort', 'reverse'] },
              35: { 1: ['Collections.max', 'Collections.min'], 2: ['Collections.max', 'Collections.min'], 3: ['Collections.max', 'Collections.min'] },
              36: { 1: ['Stream.anyMatch', 'Stream.allMatch'], 2: ['Stream.anyMatch', 'Stream.allMatch'], 3: ['Stream.anyMatch', 'Stream.allMatch'] },
              37: { 1: ['instanceof', 'getClass'], 2: ['instanceof', 'getClass'], 3: ['instanceof', 'getClass'] },
              38: { 1: ['reflection', 'Field'], 2: ['reflection', 'Field'], 3: ['reflection', 'Field'] },
              39: { 1: ['System', 'Properties'], 2: ['System', 'Properties'], 3: ['System', 'Properties'] },
              40: { 1: ['ScriptEngine', 'eval'], 2: ['ScriptEngine', 'eval'], 3: ['ScriptEngine', 'eval'] },
              
              // ADVANCED LEVEL (41-50) - Complex Topics
              41: { 1: ['class', 'object', 'new'], 2: ['class', 'object', 'new'], 3: ['class', 'object', 'new'] },
              42: { 1: ['Socket', 'URL'], 2: ['Socket', 'URL'], 3: ['Socket', 'URL'] },
              43: { 1: ['extends', 'inheritance'], 2: ['extends', 'inheritance'], 3: ['extends', 'inheritance'] },
              44: { 1: ['implements', 'interface'], 2: ['implements', 'interface'], 3: ['implements', 'interface'] },
              45: { 1: ['annotation', '@'], 2: ['annotation', '@'], 3: ['annotation', '@'] },
              46: { 1: ['enum', 'enumeration'], 2: ['enum', 'enumeration'], 3: ['enum', 'enumeration'] },
              47: { 1: ['generics', '<T>'], 2: ['generics', '<T>'], 3: ['generics', '<T>'] },
              48: { 1: ['Thread', 'Runnable'], 2: ['Thread', 'Runnable'], 3: ['Thread', 'Runnable'] },
              49: { 1: ['CompletableFuture', 'async'], 2: ['CompletableFuture', 'async'], 3: ['CompletableFuture', 'async'] },
              50: { 1: ['reflection', 'metaprogramming'], 2: ['reflection', 'metaprogramming'], 3: ['reflection', 'metaprogramming'] }
            }
          };
          
          return patterns[language]?.[lesson]?.[stage] || ['output', 'result'];
        };
        
        // For all lessons (1-150): use lesson-specific patterns
        if (currentLevel <= 150) { // 50 lessons * 3 stages
          const expectedPatterns = getLessonValidation(lessonNum, levelStage, selectedLanguage);
          const hasExpectedPattern = expectedPatterns.some(pattern => 
            outLower.includes(pattern.toLowerCase())
          );
          
          // Additional lenient checks for specific lessons
          let hasLenientPattern = false;
          
          // Python-specific lenient patterns
          if (selectedLanguage === 'python') {
            if (lessonNum === 3) {
              // Functions lesson - accept numeric output or function keywords
              hasLenientPattern = /\d/.test(cleanedResult) || 
                                 outLower.includes('def') || 
                                 outLower.includes('function') || 
                                 outLower.includes('count') || 
                                 outLower.includes('len');
            } else if (lessonNum === 4) {
              // Arrays/Lists lesson - accept list operations
              hasLenientPattern = /\d/.test(cleanedResult) || 
                                 outLower.includes('list') || 
                                 outLower.includes('len') || 
                                 outLower.includes('[') || 
                                 outLower.includes(']');
            } else if (lessonNum === 6) {
              // Loops lesson - accept loop keywords or repeated output
              hasLenientPattern = outLower.includes('for') || 
                                 outLower.includes('while') || 
                                 outLower.includes('range') ||
                                 (cleanedResult.split('\n').length > 2); // Multiple lines of output
            }
          }
          
          // JavaScript-specific lenient patterns
          if (selectedLanguage === 'javascript') {
            if (lessonNum === 3) {
              // Functions lesson - accept function keywords
              hasLenientPattern = outLower.includes('function') || 
                                 outLower.includes('return') ||
                                 outLower.includes('()');
            } else if (lessonNum === 4) {
              // Arrays lesson - accept array operations
              hasLenientPattern = /\d/.test(cleanedResult) || 
                                 outLower.includes('array') || 
                                 outLower.includes('length') || 
                                 outLower.includes('[') || 
                                 outLower.includes(']');
            } else if (lessonNum === 6) {
              // Loops lesson - accept loop keywords
              hasLenientPattern = outLower.includes('for') || 
                                 outLower.includes('while') ||
                                 (cleanedResult.split('\n').length > 2);
            }
          }
          
          // Java-specific lenient patterns
          if (selectedLanguage === 'java') {
            if (lessonNum === 3) {
              // Methods lesson - accept method keywords
              hasLenientPattern = outLower.includes('public') || 
                                 outLower.includes('static') || 
                                 outLower.includes('return') ||
                                 outLower.includes('method');
            } else if (lessonNum === 4) {
              // OOP lesson - accept class/object keywords
              hasLenientPattern = outLower.includes('class') || 
                                 outLower.includes('object') || 
                                 outLower.includes('new') || 
                                 outLower.includes('constructor');
            } else if (lessonNum === 6) {
              // Loops lesson - accept loop keywords
              hasLenientPattern = outLower.includes('for') || 
                                 outLower.includes('while') ||
                                 (cleanedResult.split('\n').length > 2);
            }
          }
          
          // General lenient patterns for all languages
          if (!hasLenientPattern) {
            // Accept any meaningful output (not just comments or empty)
            hasLenientPattern = cleanedResult.trim().length > 0 && 
                               !cleanedResult.trim().startsWith('//') && 
                               !cleanedResult.trim().startsWith('#') && 
                               !cleanedResult.trim().startsWith('/*') &&
                               !cleanedResult.trim().startsWith('*') &&
                               /\S/.test(cleanedResult); // Contains non-whitespace
          }
          
          const passesValidation = hasExpectedPattern || hasLenientPattern;
          
          console.log('🔍 [CodeEditor] Lesson-specific validation:', {
            lessonNum,
            levelStage,
            selectedLanguage,
            expectedPatterns,
            hasExpectedPattern,
            hasLenientPattern,
            passesValidation,
            output: cleanedResult
          });
          
          return passesValidation;
        }
        
        // For advanced lessons: needs meaningful output (not just comments)
        const meaningfulOutput = cleanedResult.trim().length > 0 && 
                                !cleanedResult.trim().startsWith('//') && 
                                !cleanedResult.trim().startsWith('#') && 
                                !cleanedResult.trim().startsWith('/*');
        
        console.log('🔍 [CodeEditor] Advanced lesson validation:', {
          meaningfulOutput,
          trimmedLength: cleanedResult.trim().length,
          startsWithComment: cleanedResult.trim().startsWith('#')
        });
        
        return !hasError && meaningfulOutput;
      })();

      if (passesPuzzle) {
        console.log('🎉 [CodeEditor] Level completed! Setting isCompleted to true');
        setIsCompleted(true);
        const completionTimeNow = Date.now();
        setCompletionTime(completionTimeNow);
        // BULLETPROOF STAR CALCULATION
        const elapsedSeconds = startTime ? (completionTimeNow - startTime) / 1000 : Infinity;
        const hintWasUsed = showHint || usedAnyPuzzleHint || localStorage.getItem('arcane_used_hint') === '1';
        let starCount = 1; // Base star for completion
        
        // Add star for no hint usage
        if (!hintWasUsed) {
          starCount += 1;
        }
        
        // Add star for speed (under 60 seconds)
        if (elapsedSeconds <= 60) {
          starCount += 1;
        }
        
        // Ensure minimum 1 star, maximum 3 stars
        starCount = Math.max(1, Math.min(3, starCount));
        
        console.log(`⭐ BULLETPROOF Star calculation:`);
        console.log(`   - Base completion: 1 star`);
        console.log(`   - No hint used: ${!hintWasUsed ? '+1' : '+0'} star`);
        console.log(`   - Fast completion (${elapsedSeconds.toFixed(1)}s): ${elapsedSeconds <= 60 ? '+1' : '+0'} star`);
        console.log(`   - Final: ${starCount} stars`);
        
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
            // BULLETPROOF LEVEL PROGRESSION
            const currentLesson = Math.ceil(currentLevel / 3);
            const nextLesson = currentLesson + 1;
            const nextLessonStart = (nextLesson - 1) * 3 + 1;
            const nextLessonEnd = nextLesson * 3;
            
            // Always unlock the next lesson (3 levels)
            const levelsToUnlock = [];
            for (let level = nextLessonStart; level <= nextLessonEnd && level <= 150; level++) {
              levelsToUnlock.push(level);
            }
            
            // Merge with existing unlocked levels
            const newUnlocked = [...new Set([...prevUnlocked, ...levelsToUnlock])];
            localStorage.setItem(unlockedKey, JSON.stringify(newUnlocked));
            
            console.log(`🔓 BULLETPROOF Progression:`);
            console.log(`   - Completed: Level ${currentLevel} (Lesson ${currentLesson})`);
            console.log(`   - Unlocking: Lesson ${nextLesson} (Levels ${nextLessonStart}-${nextLessonEnd})`);
            console.log(`   - Total unlocked: ${newUnlocked.length} levels`);
            console.log(`   - Unlocked levels:`, newUnlocked.sort((a, b) => a - b));
          }
        }

        // Save progress (merge) and store unlocked/completed per language
        if (userId !== 'guest') {
          const completedKey = `${selectedLanguage}_completedLevels`;
          const unlockedKey = `${selectedLanguage}_unlockedLevels`;
          
          // BULLETPROOF LEVEL PROGRESSION FOR AUTHENTICATED USERS
          const currentLesson = Math.ceil(currentLevel / 3);
          const nextLesson = currentLesson + 1;
          const nextLessonStart = (nextLesson - 1) * 3 + 1;
          const nextLessonEnd = nextLesson * 3;
          
          // Always unlock the next lesson (3 levels)
          const levelsToUnlock = [];
          for (let level = nextLessonStart; level <= nextLessonEnd && level <= 150; level++) {
            levelsToUnlock.push(level);
          }
          
          console.log(`🔓 BULLETPROOF Progression (Authenticated):`);
          console.log(`   - Completed: Level ${currentLevel} (Lesson ${currentLesson})`);
          console.log(`   - Unlocking: Lesson ${nextLesson} (Levels ${nextLessonStart}-${nextLessonEnd})`);
          console.log(`   - Levels to unlock:`, levelsToUnlock);
          
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
    const newShowHint = !showHint;
    setShowHint(newShowHint);
    
    if (!newShowHint) {
      // When hiding hint, also hide detailed help
      setShowDetailedHelp(false);
    }
    
    // BULLETPROOF HINT TRACKING
    if (newShowHint) {
      // Hint is being shown - mark as used
      localStorage.setItem('arcane_used_hint', '1');
      console.log('🔍 Hint was SHOWN - will deduct 1 star');
    } else {
      // Hint is being hidden - keep the used flag (don't reset it)
      console.log('🔍 Hint was HIDDEN - star deduction remains');
    }
  };

  const toggleDetailedHelp = () => {
    setShowDetailedHelp(!showDetailedHelp);
  };

  const getLevelSpecificHint = () => {
    const lessonNum = Math.floor((currentLevel - 1) / 3) + 1;
    const stage = ((currentLevel - 1) % 3) + 1;
    
    if (lessonNum === 1) {
      if (stage === 1) {
        return selectedLanguage === 'javascript' ? 
          'Start with console.log("Hello, CodeRealm!"); - remember to use quotes around the text and end with a semicolon.' :
          selectedLanguage === 'python' ? 
          'Start with print("Hello, CodeRealm!") - remember to use quotes around the text.' :
          'Start with System.out.println("Hello, CodeRealm!"); - remember to use quotes around the text and end with a semicolon.';
      } else if (stage === 2) {
        return selectedLanguage === 'javascript' ? 
          'Create a function: function greet() { return "Welcome to CodeRealm!"; } then call it with console.log(greet());' :
          selectedLanguage === 'python' ? 
          'Create a function: def greet(): return "Welcome to CodeRealm!" then call it with print(greet())' :
          'Create a method: public static String greet() { return "Welcome to CodeRealm!"; } then call it with System.out.println(greet());';
      } else {
        return selectedLanguage === 'javascript' ? 
          'Use a for loop: for(let i = 0; i < 3; i++) { console.log("CodeRealm"); }' :
          selectedLanguage === 'python' ? 
          'Use a for loop: for i in range(3): print("CodeRealm")' :
          'Use a for loop: for(int i = 0; i < 3; i++) { System.out.println("CodeRealm"); }';
      }
    } else if (lessonNum === 2) {
      if (stage === 1) {
        return selectedLanguage === 'javascript' ? 
          'Create a variable: const heroName = "YourName"; - replace "YourName" with your actual name.' :
          selectedLanguage === 'python' ? 
          'Create a variable: hero_name = "YourName" - replace "YourName" with your actual name.' :
          'Create a variable: String heroName = "YourName"; - replace "YourName" with your actual name.';
      } else if (stage === 2) {
        return selectedLanguage === 'javascript' ? 
          'Create a variable for age: const age = 25; then use template literals: console.log(`I am ${age} years old`);' :
          selectedLanguage === 'python' ? 
          'Create a variable for age: age = 25 then use f-strings: print(f"I am {age} years old")' :
          'Create a variable for age: int age = 25; then use concatenation: System.out.println("I am " + age + " years old");';
      } else {
        return selectedLanguage === 'javascript' ? 
          'Create variables for name, age, and quest, then combine them: console.log(`Name: ${name}, Age: ${age}, Quest: ${quest}`);' :
          selectedLanguage === 'python' ? 
          'Create variables for name, age, and quest, then combine them: print(f"Name: {name}, Age: {age}, Quest: {quest}")' :
          'Create variables for name, age, and quest, then combine them: System.out.println("Name: " + name + ", Age: " + age + ", Quest: " + quest);';
      }
    } else if (lessonNum >= 21) {
      if (stage === 1) {
        return selectedLanguage === 'javascript' ? 
          'Create an object: const hero = { name: "Hero", level: 5, health: 100 }; - remember to use commas between properties.' :
          selectedLanguage === 'python' ? 
          'Create a dictionary: hero = {"name": "Hero", "level": 5, "health": 100} - remember to use commas between items.' :
          'Create a class: public class Hero { private String name; private int level; private int health; } - remember to add a constructor.';
      } else if (stage === 2) {
        return selectedLanguage === 'javascript' ? 
          'Access properties: hero.name = "NewName"; hero.level = 10; then display: console.log(hero);' :
          selectedLanguage === 'python' ? 
          'Access values: hero["name"] = "NewName"; hero["level"] = 10; then display: print(hero)' :
          'Create getter/setter methods: public String getName() { return name; } public void setName(String name) { this.name = name; }';
      } else {
        return selectedLanguage === 'javascript' ? 
          'Add a method: hero.greet = function() { return "Hello, I am " + this.name; }; then call: console.log(hero.greet());' :
          selectedLanguage === 'python' ? 
          'Create a class with methods: class Hero: def greet(self): return f"Hello, I am {self.name}"' :
          'Add methods to class: public String greet() { return "Hello, I am " + name; } then call: System.out.println(hero.greet());';
      }
    } else {
      // Generate hints for other lessons based on lesson number
      if (lessonNum >= 3 && lessonNum <= 20) {
        // Basic lessons (3-20)
        if (stage === 1) {
          return selectedLanguage === 'javascript' ? 
            'Start with the basics you\'ve learned. Use console.log() for output and proper syntax.' :
            selectedLanguage === 'python' ? 
            'Start with the basics you\'ve learned. Use print() for output and proper syntax.' :
            'Start with the basics you\'ve learned. Use System.out.println() for output and proper syntax.';
        } else if (stage === 2) {
          return selectedLanguage === 'javascript' ? 
            'Practice what you\'ve learned. Use functions, variables, and proper JavaScript syntax.' :
            selectedLanguage === 'python' ? 
            'Practice what you\'ve learned. Use functions, variables, and proper Python syntax.' :
            'Practice what you\'ve learned. Use methods, variables, and proper Java syntax.';
        } else {
          return selectedLanguage === 'javascript' ? 
            'Master the concepts. Combine functions, variables, and objects in your solution.' :
            selectedLanguage === 'python' ? 
            'Master the concepts. Combine functions, variables, and dictionaries in your solution.' :
            'Master the concepts. Combine methods, variables, and classes in your solution.';
        }
      } else if (lessonNum >= 22 && lessonNum <= 40) {
        // Intermediate lessons (22-40)
        if (stage === 1) {
          return selectedLanguage === 'javascript' ? 
            'Use intermediate concepts. Work with objects, arrays, and advanced functions.' :
            selectedLanguage === 'python' ? 
            'Use intermediate concepts. Work with classes, lists, and advanced functions.' :
            'Use intermediate concepts. Work with classes, arrays, and advanced methods.';
        } else if (stage === 2) {
          return selectedLanguage === 'javascript' ? 
            'Practice intermediate concepts. Use arrow functions, array methods, and object manipulation.' :
            selectedLanguage === 'python' ? 
            'Practice intermediate concepts. Use lambda functions, list comprehensions, and class methods.' :
            'Practice intermediate concepts. Use lambda expressions, streams, and advanced class features.';
        } else {
          return selectedLanguage === 'javascript' ? 
            'Master intermediate concepts. Combine objects, arrays, functions, and modern JavaScript features.' :
            selectedLanguage === 'python' ? 
            'Master intermediate concepts. Combine classes, lists, functions, and Pythonic features.' :
            'Master intermediate concepts. Combine classes, arrays, methods, and modern Java features.';
        }
      } else if (lessonNum >= 42 && lessonNum <= 50) {
        // Advanced lessons (42-50)
        if (stage === 1) {
          return selectedLanguage === 'javascript' ? 
            'Use advanced concepts. Work with async/await, modules, and complex data structures.' :
            selectedLanguage === 'python' ? 
            'Use advanced concepts. Work with async/await, modules, and complex data structures.' :
            'Use advanced concepts. Work with multithreading, packages, and complex data structures.';
        } else if (stage === 2) {
          return selectedLanguage === 'javascript' ? 
            'Practice advanced concepts. Use Promises, error handling, and performance optimization.' :
            selectedLanguage === 'python' ? 
            'Practice advanced concepts. Use asyncio, exception handling, and performance optimization.' :
            'Practice advanced concepts. Use CompletableFuture, exception handling, and performance optimization.';
        } else {
          return selectedLanguage === 'javascript' ? 
            'Master advanced concepts. Combine all JavaScript features for production-ready code.' :
            selectedLanguage === 'python' ? 
            'Master advanced concepts. Combine all Python features for production-ready code.' :
            'Master advanced concepts. Combine all Java features for production-ready code.';
        }
      } else {
        // Fallback for any other lessons
        return selectedLanguage === 'javascript' ? 
          'Apply your JavaScript knowledge to solve this challenge. Use proper syntax and best practices.' :
          selectedLanguage === 'python' ? 
          'Apply your Python knowledge to solve this challenge. Use proper syntax and best practices.' :
          'Apply your Java knowledge to solve this challenge. Use proper syntax and best practices.';
      }
    }
  };

  const getDetailedHelpContent = () => {
    const challenge = isPuzzleSession && puzzleIndex ? getGeneratedPuzzle(selectedLanguage, puzzleIndex) : currentChallenge;
    const lessonNum = Math.floor((currentLevel - 1) / 3) + 1;
    
    // Generate lesson-specific content based on the current lesson
    if (lessonNum === 1) {
      // Function lessons
      if (selectedLanguage === 'javascript') {
        return {
          syntax: `Functions: function greet() { return "Hello"; }
Variables: const name = "Hero"; let age = 25;
Objects: const hero = { name: "Knight", level: 5 };
Arrays: const items = ["sword", "shield", "potion"];`,
          solution: `Solution:
function greet() {
    return "Welcome to CodeRealm!";
}

console.log(greet());

Explanation:
${getLevelSpecificHint()}`
        };
      } else if (selectedLanguage === 'python') {
        return {
          syntax: `Functions: def greet(): return "Hello"
Variables: name = "Hero"; age = 25
Dictionaries: hero = {"name": "Sage", "level": 5}
Lists: items = ["sword", "shield", "potion"]`,
          solution: `Solution:
def greet():
    return "Welcome to CodeRealm!"

print(greet())

Explanation:
${getLevelSpecificHint()}`
        };
      } else { // Java
        return {
          syntax: `Methods: public static String greet() { return "Hello"; }
Variables: String name = "Hero"; int age = 25;
Classes: public class Hero { private String name; }
Arrays: String[] items = {"sword", "shield", "potion"};`,
          solution: `Solution:
public class Main {
    public static String greet() {
        return "Welcome to CodeRealm!";
    }
    
    public static void main(String[] args) {
        System.out.println(greet());
    }
}

Explanation:
${getLevelSpecificHint()}`
        };
      }
    } else if (lessonNum === 2) {
      // Variable lessons
      if (selectedLanguage === 'javascript') {
        return {
          syntax: `Variables: const name = "Hero"; let age = 25;
Functions: function greet(name) { return "Hello, " + name; }
Objects: const hero = { name: "Knight", level: 5 };
Arrays: const items = ["sword", "shield", "potion"];`,
          solution: `Solution:
const heroName = "Hero";
console.log("Welcome to CodeRealm, " + heroName + "!");

Explanation:
${getLevelSpecificHint()}`
        };
      } else if (selectedLanguage === 'python') {
        return {
          syntax: `Variables: name = "Hero"; age = 25
Functions: def greet(name): return f"Hello, {name}"
Dictionaries: hero = {"name": "Sage", "level": 5}
Lists: items = ["sword", "shield", "potion"]`,
          solution: `Solution:
hero_name = "Hero"
print(f"Welcome to CodeRealm, {hero_name}!")

Explanation:
${getLevelSpecificHint()}`
        };
      } else { // Java
        return {
          syntax: `Variables: String name = "Hero"; int age = 25;
Methods: public static String greet(String name) { return "Hello, " + name; }
Classes: public class Hero { private String name; }
Arrays: String[] items = {"sword", "shield", "potion"};`,
          solution: `Solution:
String heroName = "Hero";
System.out.println("Welcome to CodeRealm, " + heroName + "!");

Explanation:
${getLevelSpecificHint()}`
        };
      }
    } else if (lessonNum >= 21) {
      // Object/Class lessons
      if (selectedLanguage === 'javascript') {
        return {
          syntax: `Objects: const hero = { name: "Knight", level: 5 };
Functions: function greet(name) { return "Hello, " + name; }
Variables: const name = "Hero"; let age = 25;
Arrays: const items = ["sword", "shield", "potion"];`,
          solution: `Solution:
const hero = {
    name: "Hero",
    level: 5,
    health: 100
};

console.log(hero);

Explanation:
${getLevelSpecificHint()}`
        };
      } else if (selectedLanguage === 'python') {
        return {
          syntax: `Dictionaries: hero = {"name": "Sage", "level": 5}
Functions: def greet(name): return f"Hello, {name}"
Variables: name = "Hero"; age = 25
Lists: items = ["sword", "shield", "potion"]`,
          solution: `Solution:
hero = {
    "name": "Hero",
    "level": 5,
    "health": 100
}

print(hero)

Explanation:
${getLevelSpecificHint()}`
        };
      } else { // Java
        return {
          syntax: `Classes: public class Hero { private String name; }
Methods: public static String greet(String name) { return "Hello, " + name; }
Variables: String name = "Hero"; int age = 25;
Arrays: String[] items = {"sword", "shield", "potion"};`,
          solution: `Solution:
public class Hero {
    private String name;
    private int level;
    private int health;
    
    public Hero(String name, int level, int health) {
        this.name = name;
        this.level = level;
        this.health = health;
    }
    
    public static void main(String[] args) {
        Hero hero = new Hero("Hero", 5, 100);
        System.out.println(hero.name);
    }
}

Explanation:
${getLevelSpecificHint()}`
        };
      }
    } else {
      // Default for other lessons
      if (selectedLanguage === 'javascript') {
        return {
          syntax: `Variables: const name = "Hero"; let age = 25;
Functions: function greet(name) { return "Hello, " + name; }
Objects: const hero = { name: "Knight", level: 5 };
Arrays: const items = ["sword", "shield", "potion"];`,
          solution: `Solution:
${(challenge as any).solution || 'Solution not available for this puzzle type'}

Explanation:
${getLevelSpecificHint()}`
        };
      } else if (selectedLanguage === 'python') {
        return {
          syntax: `Variables: name = "Hero"; age = 25
Functions: def greet(name): return f"Hello, {name}"
Dictionaries: hero = {"name": "Sage", "level": 5}
Lists: items = ["sword", "shield", "potion"]`,
          solution: `Solution:
${(challenge as any).solution || 'Solution not available for this puzzle type'}

Explanation:
${getLevelSpecificHint()}`
        };
      } else { // Java
        return {
          syntax: `Variables: String name = "Hero"; int age = 25;
Methods: public static String greet(String name) { return "Hello, " + name; }
Classes: public class Hero { private String name; }
Arrays: String[] items = {"sword", "shield", "potion"};`,
          solution: `Solution:
${(challenge as any).solution || 'Solution not available for this puzzle type'}

Explanation:
${getLevelSpecificHint()}`
        };
      }
    }
  };

  const getImmersiveTitle = () => {
    if (isPuzzleSession && puzzleIndex) {
      return getGeneratedPuzzle(selectedLanguage, puzzleIndex).title;
    }
    
    const lessonNum = Math.floor((currentLevel - 1) / 3) + 1;
    const stage = ((currentLevel - 1) % 3) + 1;
    
    // Generate immersive titles based on lesson progression
    if (lessonNum === 1) {
      if (stage === 1) {
        return selectedLanguage === 'javascript' ? 'The Awakening - Introduction' : selectedLanguage === 'python' ? 'The Awakening - Introduction' : 'The Awakening - Introduction';
      } else if (stage === 2) {
        return selectedLanguage === 'javascript' ? 'The Oracle\'s Challenge - Practice' : selectedLanguage === 'python' ? 'The Sage\'s Challenge - Practice' : 'The Oracle\'s Challenge - Practice';
      } else {
        return selectedLanguage === 'javascript' ? 'The Oracle\'s Mastery - Advanced' : selectedLanguage === 'python' ? 'The Sage\'s Mastery - Advanced' : 'The Oracle\'s Mastery - Advanced';
      }
    } else if (lessonNum === 2) {
      if (stage === 1) {
        return selectedLanguage === 'javascript' ? 'The Variable Realm - Introduction' : selectedLanguage === 'python' ? 'The Variable Sanctum - Introduction' : 'The Variable Kingdom - Introduction';
      } else if (stage === 2) {
        return selectedLanguage === 'javascript' ? 'The Variable Realm - Practice' : selectedLanguage === 'python' ? 'The Variable Sanctum - Practice' : 'The Variable Kingdom - Practice';
      } else {
        return selectedLanguage === 'javascript' ? 'The Variable Realm - Mastery' : selectedLanguage === 'python' ? 'The Variable Sanctum - Mastery' : 'The Variable Kingdom - Mastery';
      }
    } else if (lessonNum >= 21) {
      if (stage === 1) {
        return selectedLanguage === 'javascript' ? 'The Object Realm - Introduction' : selectedLanguage === 'python' ? 'The Dictionary Sanctum - Introduction' : 'The Class Kingdom - Introduction';
      } else if (stage === 2) {
        return selectedLanguage === 'javascript' ? 'The Object Realm - Practice' : selectedLanguage === 'python' ? 'The Dictionary Sanctum - Practice' : 'The Class Kingdom - Practice';
      } else {
        return selectedLanguage === 'javascript' ? 'The Object Realm - Mastery' : selectedLanguage === 'python' ? 'The Dictionary Sanctum - Mastery' : 'The Class Kingdom - Mastery';
      }
    } else {
      // Default titles for other lessons
      if (stage === 1) {
        return selectedLanguage === 'javascript' ? `The JavaScript Realm - Lesson ${lessonNum}` : selectedLanguage === 'python' ? `The Python Sanctum - Lesson ${lessonNum}` : `The Java Kingdom - Lesson ${lessonNum}`;
      } else if (stage === 2) {
        return selectedLanguage === 'javascript' ? `The JavaScript Realm - Practice ${lessonNum}` : selectedLanguage === 'python' ? `The Python Sanctum - Practice ${lessonNum}` : `The Java Kingdom - Practice ${lessonNum}`;
      } else {
        return selectedLanguage === 'javascript' ? `The JavaScript Realm - Mastery ${lessonNum}` : selectedLanguage === 'python' ? `The Python Sanctum - Mastery ${lessonNum}` : `The Java Kingdom - Mastery ${lessonNum}`;
      }
    }
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
              <span>Back to Lesson Select</span>
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
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {/* Story Card */}
            <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/30 p-4 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-cyan-400 mb-3 flex items-center space-x-2">
                <span>📖</span>
                <span>Story</span>
              </h2>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">{isPuzzleSession && puzzleIndex ? getGeneratedPuzzle(selectedLanguage, puzzleIndex).story : currentChallenge.story}</div>
            </div>
            
            {/* Challenge & Objectives Card */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-4 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                <span>🎯</span>
                <span>{getImmersiveTitle()}</span>
              </h2>
              <div className="space-y-2">
                <h3 className="text-green-400 font-semibold text-sm">Your Quest:</h3>
                <div className="space-y-1">
                  <div className="flex items-start space-x-2">
                    <span className="text-green-400 font-bold text-xs">•</span>
                    <p className="text-gray-300 text-xs">
                      {isPuzzleSession && puzzleIndex ? 
                        `Complete the puzzle by filling in the missing code pieces` : 
                        currentChallenge.description
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hint Card - Available for both main game and puzzles */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-4 rounded-2xl border border-yellow-500/30 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-yellow-400 flex items-center space-x-2">
                  <span>💡</span>
                  <span>Need a Hint?</span>
                </h3>
                  <button
                  onClick={toggleHint}
                    className="bg-yellow-500/20 hover:bg-yellow-500/30 px-3 py-1 rounded-lg text-yellow-300 transition-colors text-sm"
                >
                  {showHint ? 'Hide' : 'Show'} Hint
                </button>
              </div>
              
              {showHint && (
                <div className="mb-3">
                  <p className="text-yellow-200 leading-relaxed text-sm">
                    {getLevelSpecificHint()}
                  </p>
                  <div className="mt-2">
                    <button
                      onClick={toggleDetailedHelp}
                      className="bg-blue-500/20 hover:bg-blue-500/30 px-3 py-1 rounded-lg text-blue-300 transition-colors text-xs"
                    >
                      {showDetailedHelp ? 'Hide' : 'Need More Help?'}
                    </button>
                  </div>
                </div>
              )}
              
              {showDetailedHelp && (
                <div className="space-y-2">
                  <div className="bg-slate-800/50 p-3 rounded-lg border border-blue-500/30">
                    <h4 className="text-blue-300 font-semibold mb-1 text-sm">Syntax Guide</h4>
                    <div className="text-gray-300 text-xs leading-relaxed whitespace-pre-line">
                      {getDetailedHelpContent().syntax}
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 p-3 rounded-lg border border-purple-500/30">
                    <h4 className="text-purple-300 font-semibold mb-1 text-sm">Solution & Explanation</h4>
                    <div className="text-gray-300 text-xs leading-relaxed whitespace-pre-line">
                      {getDetailedHelpContent().solution}
                    </div>
                  </div>
                </div>
              )}
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
                  className="w-full h-64 bg-slate-800/50 text-white font-mono text-sm p-4 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-b-2xl"
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
                  onClick={() => {
                    console.log('🔍 [CodeEditor] Review Code clicked, setting isCompleted to false');
                    setIsCompleted(false);
                  }}
                  className="flex-1 bg-purple-500 hover:bg-purple-600 px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Review Code
                </button>
                <button
                  onClick={() => {
                    console.log('🔍 [CodeEditor] Next Level clicked, currentLevel:', currentLevel);
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

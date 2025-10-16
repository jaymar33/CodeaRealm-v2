import React, { useState, useRef, useEffect } from 'react';
import { Play, RotateCcw, Lightbulb, CheckCircle, XCircle, Star, ArrowLeft } from 'lucide-react';
import { Page } from '../App';
import { runCode as judge0RunCode } from '../utils/runCode';
interface CodeEditorProps {
  selectedLanguage: 'javascript' | 'java' | 'python';
  onNavigate: (page: Page) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ selectedLanguage, onNavigate }) => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showHint, setShowHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [justAdvanced, setJustAdvanced] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [completionTime, setCompletionTime] = useState<number | null>(null);
  const [stars, setStars] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const challenges = {
  javascript: [
    {
      title: 'Hello World - Your First Code',
      description: 'Write your very first line of code! Just log "Hello, CodeRealm!" to the console.',
      starterCode: '// Welcome to CodeRealm! This is your first coding adventure.\n// Just write one line to say hello to the console.\n\n// Your first code goes here:\n\n',
      solution: 'console.log("Hello, CodeRealm!");',
      hint: 'Simply write: console.log("Hello, CodeRealm!"); - This tells the computer to display a message. Don\'t forget the quotes around the text!',
      story: 'Welcome, brave adventurer! You\'ve entered the magical world of CodeRealm. Your journey begins with a simple greeting to the ancient console...'
    },
    {
      title: 'Variables & Basic Syntax',
      description: 'Create a variable called "heroName" and assign it your name. Then log a welcome message to the console.',
      starterCode: '// Welcome to CodeRealm, brave adventurer!\n// A variable is like a box that holds information\n// Step 1: Create a variable called heroName and give it your name\n// Step 2: Use console.log() to display a message\n\n// Your code goes here:\nconst heroName = "YourName";\nconsole.log("Welcome to CodeRealm, " + heroName + "!");',
      solution: 'const heroName = "Hero";\nconsole.log("Welcome to CodeRealm, " + heroName + "!");',
      hint: 'Step 1: Write "const heroName = "YourName";" to create a variable (replace "YourName" with your actual name). Step 2: Write "console.log("Welcome to CodeRealm, " + heroName + "!");" to display the message. The + sign combines text together!',
      story: 'You stand at the entrance of CodeRealm, a mystical land where code is magic. The ancient guardian asks for your name...'
    },
    {
      title: 'Simple Functions',
      description: 'Create a simple function that says hello and use it.',
      starterCode: '// A function is like a recipe that you can use over and over\n// Step 1: Create a function called sayHello\n// Step 2: Make it return "Hello from CodeRealm!"\n// Step 3: Call the function and log the result\n\n// Your code goes here:\nfunction sayHello() {\n return "Hello from CodeRealm!";\n}\nconsole.log(sayHello());',
      solution: 'function sayHello() {\n return "Hello from CodeRealm!";\n}\nconsole.log(sayHello());',
      hint: 'Step 1: Write "function sayHello() {" to start the function. Step 2: Inside the function, write "return "Hello from CodeRealm!";". Step 3: Close with "}" and then call "console.log(sayHello());" to use the function.',
      story: 'A village elder asks you to create a simple greeting spell that you can use anytime.'
    },
    {
      title: 'Simple Arrays',
      description: 'Create a simple list of items and display it.',
      starterCode: '// An array is like a shopping list - it holds multiple items\n// Step 1: Create an array with 3 items\n// Step 2: Log the array to see all items\n\n// Your code goes here:\nconst items = ["sword", "shield", "potion"];\nconsole.log("My items:", items);',
      solution: 'const items = ["sword", "shield", "potion"];\nconsole.log("My items:", items);',
      hint: 'Step 1: Write "const items = ["sword", "shield", "potion"];" to create an array (use square brackets []). Step 2: Write "console.log("My items:", items);" to display the array.',
      story: 'You prepare your inventory before entering the dungeon.'
    },
    {
      title: 'Simple If Statements',
      description: 'Check if a number is big and print a message.',
      starterCode: '// An if statement helps you make decisions in code\n// Step 1: Create a number variable (like const number = 10;)\n// Step 2: Check if the number is greater than 5\n// Step 3: If it is, print "That\'s a big number!"\n\n// Your code goes here:\nconst number = 10;\nif (number > 5) {\n console.log("That\'s a big number!");\n}',
      solution: 'const number = 10;\nif (number > 5) {\n console.log("That\'s a big number!");\n}',
      hint: 'Step 1: Write "const number = 10;" to create a number. Step 2: Write "if (number > 5) {" to check if the number is greater than 5. Step 3: Inside the if statement, write "console.log("That\'s a big number!");" and close with "}".',
      story: 'You find a magical number and need to decide if it\'s powerful enough.'
    },
    {
      title: 'Simple Math Operations',
      description: 'Create two numbers and perform basic math operations (add, subtract, multiply).',
      starterCode: '// Step 1: Create two number variables (like const a = 10; const b = 5;)\n// Step 2: Add them together and log the result\n// Step 3: Subtract b from a and log the result\n// Step 4: Multiply them and log the result\n\n// Your code goes here:\n\n',
      solution: 'const a = 10;\nconst b = 5;\nconsole.log("Addition:", a + b);\nconsole.log("Subtraction:", a - b);\nconsole.log("Multiplication:", a * b);',
      hint: 'Step 1: Write "const a = 10;" and "const b = 5;" to create numbers. Step 2: Use "console.log("Addition:", a + b);" for addition. Step 3: Use "console.log("Subtraction:", a - b);" for subtraction. Step 4: Use "console.log("Multiplication:", a * b);" for multiplication.',
      story: 'You learn the ancient art of mathematical magic from the village calculator.'
    },
    {
      title: 'String Operations',
      description: 'Work with text strings - combine them, find their length, and convert to uppercase.',
      starterCode: '// Step 1: Create two string variables (like const firstName = "Hero"; const lastName = "Adventurer";)\n// Step 2: Combine them into a full name and log it\n// Step 3: Log the length of the full name\n// Step 4: Log the full name in uppercase\n\n// Your code goes here:\n\n',
      solution: 'const firstName = "Hero";\nconst lastName = "Adventurer";\nconst fullName = firstName + " " + lastName;\nconsole.log("Full name:", fullName);\nconsole.log("Name length:", fullName.length);\nconsole.log("Uppercase:", fullName.toUpperCase());',
      hint: 'Step 1: Write "const firstName = "Hero";" and "const lastName = "Adventurer";". Step 2: Combine with "const fullName = firstName + " " + lastName;". Step 3: Use "fullName.length" for length. Step 4: Use "fullName.toUpperCase()" for uppercase.',
      story: 'You learn to manipulate the ancient texts and inscriptions found in the temple.'
    },
    {
      title: 'If Statements & Comparisons',
      description: 'Use if statements to make decisions based on conditions.',
      starterCode: '// Step 1: Create a variable for your level (like const level = 5;)\n// Step 2: Check if level is greater than 3\n// Step 3: If true, log "You are experienced!"\n// Step 4: If false, log "Keep practicing!"\n\n// Your code goes here:\n\n',
      solution: 'const level = 5;\nif (level > 3) {\n console.log("You are experienced!");\n} else {\n console.log("Keep practicing!");\n}',
      hint: 'Step 1: Write "const level = 5;". Step 2: Write "if (level > 3) {". Step 3: Inside the if, write "console.log("You are experienced!");". Step 4: Add "} else { console.log("Keep practicing!"); }" to handle the other case.',
      story: 'You learn to make wise decisions based on your experience level in the realm.'
    },
    {
      title: 'Modules & Import',
      description: 'Create a module with an export and import it.',
      starterCode: '// Create a utility function and export it\n\n',
      solution: 'function calculateDamage(attack, defense) {\n return Math.max(1, attack - defense);\n}\n\nfunction formatMessage(hero, damage) {\n return Welcome to CodeRealm, ${hero}! Damage: ${damage};\n}\n\nconsole.log(formatMessage("Warrior", calculateDamage(10, 3)));',
      hint: 'Create functions and use them together.',
      story: 'You organize your spells into reusable modules.'
    },
    {
      title: 'Closures & Hoisting',
      description: 'Create a closure that remembers a counter value.',
      starterCode: '// Create a function that returns another function\n\n',
      solution: 'function createCounter() {\n let count = 0;\n return function() {\n count++;\n return Welcome to CodeRealm, attempt ${count}!;\n };\n}\n\nconst counter = createCounter();\nconsole.log(counter());\nconsole.log(counter());',
      hint: 'Return a function from another function to create a closure.',
      story: 'You learn to create persistent memories in your spells.'
    },
    {
      title: 'Prototype & Classes',
      description: 'Create a class with methods and instantiate it.',
      starterCode: '// Create a Hero class with attack and defend methods\n\n',
      solution: 'class Hero {\n constructor(name, health) {\n this.name = name;\n this.health = health;\n }\n \n attack() {\n return Welcome to CodeRealm, ${this.name} attacks!;\n }\n \n defend() {\n this.health += 10;\n return Welcome to CodeRealm, ${this.name} defends! Health: ${this.health};\n }\n}\n\nconst hero = new Hero("Knight", 100);\nconsole.log(hero.attack());\nconsole.log(hero.defend());',
      hint: 'Use class keyword with constructor and methods.',
      story: 'You forge a legendary hero with unique abilities.'
    },
    {
      title: 'Fetch API',
      description: 'Simulate fetching data and handle the response.',
      starterCode: '// Simulate an API call (use setTimeout instead of fetch)\n\n',
      solution: 'function fetchQuestData() {\n return new Promise((resolve) => {\n setTimeout(() => {\n resolve({ quest: "Defeat the Dragon", reward: "Legendary Sword" });\n }, 500);\n });\n}\n\nfetchQuestData().then(data => {\n console.log(Welcome to CodeRealm, new quest: ${data.quest});\n console.log(Reward: ${data.reward});\n});',
      hint: 'Use Promise with setTimeout to simulate async data fetching.',
      story: 'You contact the quest board for new adventures.'
    },
    {
      title: 'Local Storage',
      description: 'Save and retrieve data from localStorage.',
      starterCode: '// Save progress and retrieve it\n\n',
      solution: 'const progress = { level: 8, score: 850, name: "Hero" };\nlocalStorage.setItem("gameProgress", JSON.stringify(progress));\n\nconst saved = JSON.parse(localStorage.getItem("gameProgress"));\nconsole.log(Welcome to CodeRealm, ${saved.name}!);\nconsole.log(Level: ${saved.level}, Score: ${saved.score});',
      hint: 'Use localStorage.setItem() and localStorage.getItem() with JSON.',
      story: 'You save your progress in the ancient archives.'
    },
    {
      title: 'Form Validation',
      description: 'Validate user input and provide feedback.',
      starterCode: 'const userInput = "test@email.com";\nconst password = "password123";\n\n',
      solution: 'const userInput = "test@email.com";\nconst password = "password123";\n\nfunction validateEmail(email) {\n return email.includes("@") && email.includes(".");\n}\n\nfunction validatePassword(pass) {\n return pass.length >= 8;\n}\n\nif (validateEmail(userInput) && validatePassword(password)) {\n console.log("Welcome to CodeRealm, valid user!");\n} else {\n console.log("Welcome to CodeRealm, but validation failed!");\n}',
      hint: 'Create validation functions and check both email and password.',
      story: 'You guard the entrance with validation spells.'
    },
    {
      title: 'Regular Expressions',
      description: 'Use regex to validate and extract data from strings.',
      starterCode: 'const text = "Contact: hero@coderealm.com or call 555-1234";\n\n',
      solution: 'const text = "Contact: hero@coderealm.com or call 555-1234";\n\nconst emailRegex = /[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}/;\nconst phoneRegex = /\\d{3}-\\d{3}-\\d{4}/;\n\nconst email = text.match(emailRegex);\nconst phone = text.match(phoneRegex);\n\nconsole.log("Welcome to CodeRealm, data extracted!");\nconsole.log(Email: ${email[0]}, Phone: ${phone[0]});',
      hint: 'Use .match() with regex patterns to find email and phone.',
      story: 'You decipher ancient texts using pattern recognition.'
    },
    {
      title: 'Canvas API',
      description: 'Create a simple drawing on canvas (simulate with console).',
      starterCode: '// Simulate drawing shapes (use console output)\n\n',
      solution: 'function drawShapes() {\n const shapes = [\n { type: "circle", x: 50, y: 50, size: 20 },\n { type: "rectangle", x: 100, y: 100, width: 40, height: 30 }\n ];\n \n shapes.forEach(shape => {\n if (shape.type === "circle") {\n console.log(Welcome to CodeRealm, drawing circle at (${shape.x}, ${shape.y}));\n } else {\n console.log(Welcome to CodeRealm, drawing rectangle at (${shape.x}, ${shape.y}));\n }\n });\n}\n\ndrawShapes();',
      hint: 'Create an array of shape objects and iterate through them.',
      story: 'You paint magical symbols on the canvas of reality.'
    },
    {
      title: 'Web Workers',
      description: 'Simulate background processing with setTimeout.',
      starterCode: '// Simulate heavy computation in background\n\n',
      solution: 'function heavyComputation() {\n return new Promise((resolve) => {\n setTimeout(() => {\n let result = 0;\n for (let i = 0; i < 1000000; i++) {\n result += Math.random();\n }\n resolve(result);\n }, 100);\n });\n}\n\nheavyComputation().then(result => {\n console.log("Welcome to CodeRealm, computation complete!");\n console.log(Result: ${Math.floor(result)});\n});',
      hint: 'Use Promise with setTimeout to simulate async computation.',
      story: 'You delegate complex calculations to background spirits.'
    },
    {
      title: 'Service Workers',
      description: 'Simulate caching and offline functionality.',
      starterCode: '// Simulate cache operations\n\n',
      solution: 'const cache = new Map();\n\nfunction cacheData(key, data) {\n cache.set(key, { data, timestamp: Date.now() });\n return Welcome to CodeRealm, cached ${key}!;\n}\n\nfunction getCachedData(key) {\n const cached = cache.get(key);\n if (cached) {\n return Welcome to CodeRealm, retrieved ${key} from cache!;\n }\n return Welcome to CodeRealm, ${key} not in cache!;\n}\n\nconsole.log(cacheData("quest1", "Defeat Dragon"));\nconsole.log(getCachedData("quest1"));',
      hint: 'Use Map to simulate cache storage and retrieval.',
      story: 'You create a magical cache to store quest information.'
    },
    {
      title: 'Advanced Patterns',
      description: 'Implement observer pattern with event emitters.',
      starterCode: '// Create a simple event emitter\n\n',
      solution: 'class EventEmitter {\n constructor() {\n this.events = {};\n }\n \n on(event, callback) {\n if (!this.events[event]) this.events[event] = [];\n this.events[event].push(callback);\n }\n \n emit(event, data) {\n if (this.events[event]) {\n this.events[event].forEach(callback => callback(data));\n }\n }\n}\n\nconst emitter = new EventEmitter();\nemitter.on("quest", (data) => console.log(Welcome to CodeRealm, quest: ${data}));\nemitter.emit("quest", "Save the Princess");',
      hint: 'Create a class that can register and trigger event callbacks.',
      story: 'You master the observer pattern to communicate with distant realms.'
    }
  ],
  java: [
    {
      title: 'Hello Java - Your First Program',
      description: 'Write your very first Java program! Just print "Hello, CodeRealm!" to the console.',
      starterCode: '// Welcome to the Java Kingdom! This is your first Java adventure.\n// Just write a simple program to say hello to the console.\n\n// Your first Java code goes here:\n\n',
      solution: 'public class HelloWorld {\n public static void main(String[] args) {\n System.out.println("Hello, CodeRealm!");\n }\n}',
      hint: 'Write: public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, CodeRealm!"); } } - This is the basic Java structure!',
      story: 'Welcome, brave knight! You\'ve entered the Java Kingdom where code is structured and powerful. Your journey begins with a simple greeting...'
    },
    {
      title: 'Variables & Data Types',
      description: 'Create a String variable for your hero name and print a welcome message.',
      starterCode: 'public class Hero {\n public static void main(String[] args) {\n // Step 1: Create a String variable called heroName and give it your name\n // Step 2: Use System.out.println() to display a welcome message\n \n // Your code goes here:\n \n }\n}',
      solution: 'public class Hero {\n public static void main(String[] args) {\n String heroName = "Knight";\n System.out.println("Welcome to CodeRealm, " + heroName + "!");\n }\n}',
      hint: 'Step 1: Write "String heroName = "YourName";" to create a variable. Step 2: Write "System.out.println("Welcome to CodeRealm, " + heroName + "!");" to display the message.',
      story: 'In the ancient fortress of Java Kingdom, knights must prove their worth by mastering the sacred syntax...'
    },
    {
      title: 'Methods & Classes',
      description: 'Create a method that says hello and call it from main.',
      starterCode: 'public class Hero {\n public static void main(String[] args) {\n // Step 1: Call the greet method and print the result\n \n // Your code goes here:\n \n }\n \n // Step 2: Create a method called greet that returns a hello message\n \n}',
      solution: 'public class Hero {\n public static void main(String[] args) {\n System.out.println(greet("Knight"));\n }\n \n static String greet(String name){\n return "Welcome to CodeRealm, " + name + "!";\n }\n}',
      hint: 'Step 1: Write "System.out.println(greet("Knight"));" in main. Step 2: Add "static String greet(String name) { return "Welcome to CodeRealm, " + name + "!"; }" method.',
      story: 'You inscribe a reusable greeting into your grimoire.'
    },
    {
      title: 'OOP Fundamentals',
      description: 'Create a Hero class with a name field and a greet method.',
      starterCode: '// implement class Hero and main\n',
      solution: 'class Hero {\n String name;\n Hero(String name){ this.name = name; }\n String greet(){ return "Welcome to CodeRealm, " + name + "!"; }\n}\npublic class Main {\n public static void main(String[] args){\n Hero h = new Hero("Knight");\n System.out.println(h.greet());\n }\n}',
      hint: 'Use constructor, field, and instance method.',
      story: 'You forge an identity and voice for your hero.'
    },
    {
      title: 'Exception Handling',
      description: 'Parse integer from text using try/catch and print a fallback message.',
      starterCode: 'public class Main {\n public static void main(String[] args){\n String text = "not-number";\n // ...\n }\n}\n',
      solution: 'public class Main {\n public static void main(String[] args){\n String text = "not-number";\n try {\n Integer.parseInt(text);\n System.out.println("Welcome to CodeRealm, parser!");\n } catch (Exception e){\n System.out.println("Welcome to CodeRealm, but parsing failed");\n }\n }\n}',
      hint: 'Use try/catch (Exception e).',
      story: 'A malfunctioning artifact requires careful handling.'
    },
    {
      title: 'Collections Framework',
      description: 'Create an ArrayList of items and iterate to print a special message for "potion".',
      starterCode: 'import java.util.*;\n\n',
      solution: 'import java.util.*;\npublic class Main {\n public static void main(String[] args){\n List<String> items = Arrays.asList("sword","shield","potion");\n for (String it : items){\n if ("potion".equals(it)) System.out.println("Welcome to CodeRealm, potion master!");\n }\n }\n}',
      hint: 'Use java.util.List and enhanced for-loop.',
      story: 'You catalog your armory using lists.'
    },
    {
      title: 'Generics',
      description: 'Create a generic class that can store any type of data.',
      starterCode: '// Create a generic TreasureBox class\n\n',
      solution: 'class TreasureBox<T> {\n private T treasure;\n \n public void setTreasure(T treasure) {\n this.treasure = treasure;\n }\n \n public T getTreasure() {\n return treasure;\n }\n}\n\npublic class Main {\n public static void main(String[] args) {\n TreasureBox<String> box = new TreasureBox<>();\n box.setTreasure("Golden Sword");\n System.out.println("Welcome to CodeRealm, treasure: " + box.getTreasure());\n }\n}',
      hint: 'Use <T> for generic type parameter.',
      story: 'You create a magical box that can hold any treasure.'
    },
    {
      title: 'File I/O',
      description: 'Simulate file operations with string manipulation.',
      starterCode: '// Simulate reading and writing quest data\n\n',
      solution: 'import java.util.*;\n\npublic class Main {\n public static void main(String[] args) {\n String questData = "Quest: Defeat Dragon\\nReward: 1000 gold\\nDifficulty: Hard";\n \n String[] lines = questData.split("\\\\n");\n for (String line : lines) {\n System.out.println("Welcome to CodeRealm, " + line);\n }\n }\n}',
      hint: 'Use split() to break text into lines.',
      story: 'You read ancient scrolls containing quest information.'
    },
    {
      title: 'Multithreading',
      description: 'Create a simple thread that prints messages.',
      starterCode: '// Create a thread that runs in background\n\n',
      solution: 'public class Main {\n public static void main(String[] args) {\n Thread questThread = new Thread(() -> {\n for (int i = 1; i <= 3; i++) {\n System.out.println("Welcome to CodeRealm, quest " + i + " in progress...");\n try { Thread.sleep(100); } catch (Exception e) {}\n }\n });\n \n questThread.start();\n System.out.println("Welcome to CodeRealm, main thread continues!");\n }\n}',
      hint: 'Use Thread with lambda expression.',
      story: 'You learn to perform multiple tasks simultaneously.'
    },
    {
      title: 'Lambda Expressions',
      description: 'Use lambda expressions with collections.',
      starterCode: 'import java.util.*;\n\n',
      solution: 'import java.util.*;\n\npublic class Main {\n public static void main(String[] args) {\n List<String> quests = Arrays.asList("Dragon", "Goblin", "Wizard");\n \n quests.stream()\n .filter(q -> q.length() > 4)\n .forEach(q -> System.out.println("Welcome to CodeRealm, " + q + " quest!"));\n }\n}',
      hint: 'Use stream(), filter(), and forEach() with lambda.',
      story: 'You master the art of functional programming.'
    },
    {
      title: 'Stream API',
      description: 'Use streams to process collections of data.',
      starterCode: 'import java.util.*;\n\n',
      solution: 'import java.util.*;\n\npublic class Main {\n public static void main(String[] args) {\n List<Integer> scores = Arrays.asList(85, 92, 78, 96, 88);\n \n double average = scores.stream()\n .mapToInt(Integer::intValue)\n .average()\n .orElse(0.0);\n \n System.out.println("Welcome to CodeRealm, average score: " + average);\n }\n}',
      hint: 'Use stream(), mapToInt(), and average().',
      story: 'You calculate statistics from your adventure scores.'
    },
    {
      title: 'Design Patterns',
      description: 'Implement the Singleton pattern.',
      starterCode: '// Create a singleton GameManager class\n\n',
      solution: 'class GameManager {\n private static GameManager instance;\n private String playerName;\n \n private GameManager() {}\n \n public static GameManager getInstance() {\n if (instance == null) {\n instance = new GameManager();\n }\n return instance;\n }\n \n public void setPlayerName(String name) {\n this.playerName = name;\n }\n \n public String getPlayerName() {\n return playerName;\n }\n}\n\npublic class Main {\n public static void main(String[] args) {\n GameManager gm = GameManager.getInstance();\n gm.setPlayerName("Hero");\n System.out.println("Welcome to CodeRealm, " + gm.getPlayerName() + "!");\n }\n}',
      hint: 'Use private constructor and static getInstance() method.',
      story: 'You create a unique game manager that controls the realm.'
    },
    {
      title: 'Database Connectivity',
      description: 'Simulate database operations with mock data.',
      starterCode: '// Simulate database queries\n\n',
      solution: 'import java.util.*;\n\nclass MockDatabase {\n private Map<String, String> players = new HashMap<>();\n \n public void savePlayer(String id, String name) {\n players.put(id, name);\n }\n \n public String getPlayer(String id) {\n return players.get(id);\n }\n}\n\npublic class Main {\n public static void main(String[] args) {\n MockDatabase db = new MockDatabase();\n db.savePlayer("001", "Knight");\n String player = db.getPlayer("001");\n System.out.println("Welcome to CodeRealm, " + player + "!");\n }\n}',
      hint: 'Use HashMap to simulate database storage.',
      story: 'You connect to the ancient player database.'
    },
    {
      title: 'Spring Framework',
      description: 'Simulate dependency injection with simple classes.',
      starterCode: '// Create a simple dependency injection example\n\n',
      solution: 'interface Weapon {\n String attack();\n}\n\nclass Sword implements Weapon {\n public String attack() {\n return "Sword slash!";\n }\n}\n\nclass Hero {\n private Weapon weapon;\n \n public Hero(Weapon weapon) {\n this.weapon = weapon;\n }\n \n public String fight() {\n return "Welcome to CodeRealm, " + weapon.attack();\n }\n}\n\npublic class Main {\n public static void main(String[] args) {\n Hero hero = new Hero(new Sword());\n System.out.println(hero.fight());\n }\n}',
      hint: 'Use interface and constructor injection.',
      story: 'You learn the art of dependency injection.'
    },
    {
      title: 'Testing with JUnit',
      description: 'Create a simple test method.',
      starterCode: '// Create a method to test\n\n',
      solution: 'public class Calculator {\n public static int add(int a, int b) {\n return a + b;\n }\n \n public static int multiply(int a, int b) {\n return a * b;\n }\n}\n\npublic class Main {\n public static void main(String[] args) {\n // Simple test\n int result1 = Calculator.add(5, 3);\n int result2 = Calculator.multiply(4, 6);\n \n if (result1 == 8 && result2 == 24) {\n System.out.println("Welcome to CodeRealm, all tests passed!");\n } else {\n System.out.println("Welcome to CodeRealm, tests failed!");\n }\n }\n}',
      hint: 'Create methods and test them with assertions.',
      story: 'You verify your magical calculations are correct.'
    },
    {
      title: 'Maven & Build Tools',
      description: 'Organize code into packages and modules.',
      starterCode: '// Create a package structure\n\n',
      solution: 'class Quest {\n private String name;\n private int difficulty;\n \n public Quest(String name, int difficulty) {\n this.name = name;\n this.difficulty = difficulty;\n }\n \n public String getInfo() {\n return "Quest: " + name + ", Difficulty: " + difficulty;\n }\n}\n\npublic class Main {\n public static void main(String[] args) {\n Quest quest = new Quest("Dragon Slayer", 5);\n System.out.println("Welcome to CodeRealm, " + quest.getInfo());\n }\n}',
      hint: 'Create classes with proper encapsulation.',
      story: 'You organize your code into well-structured modules.'
    },
    {
      title: 'REST APIs',
      description: 'Simulate API endpoints with method calls.',
      starterCode: '// Create REST-like methods\n\n',
      solution: 'import java.util.*;\n\nclass QuestAPI {\n private Map<String, String> quests = new HashMap<>();\n \n public String getQuest(String id) {\n return quests.getOrDefault(id, "Quest not found");\n }\n \n public String createQuest(String id, String name) {\n quests.put(id, name);\n return "Welcome to CodeRealm, quest created: " + name;\n }\n}\n\npublic class Main {\n public static void main(String[] args) {\n QuestAPI api = new QuestAPI();\n System.out.println(api.createQuest("001", "Dragon Hunt"));\n System.out.println(api.getQuest("001"));\n }\n}',
      hint: 'Create methods that simulate GET and POST operations.',
      story: 'You build an API to manage quests across the realm.'
    },
    {
      title: 'Microservices',
      description: 'Create separate service classes that work together.',
      starterCode: '// Create microservices architecture\n\n',
      solution: 'class UserService {\n public String getUser(String id) {\n return "User " + id;\n }\n}\n\nclass QuestService {\n public String getQuest(String id) {\n return "Quest " + id;\n }\n}\n\nclass GameService {\n private UserService userService;\n private QuestService questService;\n \n public GameService(UserService userService, QuestService questService) {\n this.userService = userService;\n this.questService = questService;\n }\n \n public String startGame(String userId, String questId) {\n return "Welcome to CodeRealm, " + userService.getUser(userId) + " starts " + questService.getQuest(questId);\n }\n}\n\npublic class Main {\n public static void main(String[] args) {\n GameService game = new GameService(new UserService(), new QuestService());\n System.out.println(game.startGame("001", "Dragon"));\n }\n}',
      hint: 'Create separate service classes and inject dependencies.',
      story: 'You architect a distributed system of microservices.'
    }
  ],
  python: [
    {
      title: 'Hello Python - Your First Code',
      description: 'Write your very first Python program! Just print "Hello, CodeRealm!" to the screen.',
      starterCode: '# Welcome to the Python Sanctum! This is your first Python adventure.\n# Just write one line to say hello to the console.\n\n# Your first Python code goes here:\n\n',
      solution: 'print("Hello, CodeRealm!")',
      hint: 'Simply write: print("Hello, CodeRealm!") - This tells Python to display a message. Don\'t forget the quotes around the text!',
      story: 'Welcome, young sage! You\'ve entered the Python Sanctum where elegant code flows like poetry. Your journey begins with a simple greeting...'
    },
    {
      title: 'Variables & Syntax',
      description: 'Create a variable for your hero name and print a welcome message using Python syntax.',
      starterCode: '# Welcome to the Data Sage\'s Quest!\n# Step 1: Create a variable called hero_name and give it your name\n# Step 2: Use print() to display a welcome message\n\n# Your code goes here:\n\n',
      solution: 'hero_name = "Sage"\nprint(f"Welcome to CodeRealm, {hero_name}!")',
      hint: 'Step 1: Write "hero_name = "YourName"" to create a variable. Step 2: Write "print(f"Welcome to CodeRealm, {hero_name}!")" to display the message. Python uses f-strings for easy formatting!',
      story: 'Deep in the Python Sanctum, ancient wisdom flows through elegant code. The sage asks for your identity...'
    },
    {
      title: 'Functions & Modules',
      description: 'Define greet(name) returning the welcome string and print it.',
      starterCode: 'hero_name = "Sage"\n\n# Step 1: Create a function called greet that takes a name parameter\n# Step 2: Make it return a welcome message with the name\n# Step 3: Call the function with hero_name and print the result\n\n# Your code goes here:\n\n',
      solution: 'hero_name = "Sage"\n\ndef greet(name):\n return f"Welcome to CodeRealm, {name}!"\n\nprint(greet(hero_name))',
      hint: 'Step 1: Write "def greet(name):" to start the function. Step 2: Inside the function, write "return f"Welcome to CodeRealm, {name}!"" (use f-strings for easy formatting). Step 3: Call "print(greet(hero_name))" to use the function.',
      story: 'You bottle a greeting spell for reuse.'
    },
    {
      title: 'Data Structures',
      description: 'Create a list and dict, then print lengths and a welcome.',
      starterCode: '# Step 1: Create a list with 3 items (like ["sword", "shield", "potion"])\n# Step 2: Create a dictionary with a name key (like {"name": "Sage"})\n# Step 3: Print both the list and dictionary\n\n# Your code goes here:\n\n',
      solution: 'inventory = ["sword","shield","potion"]\nhero = {"name": "Sage"}\nprint(f"Welcome to CodeRealm, {hero[\"name\"]}!")\nprint(len(inventory))',
      hint: 'Step 1: Write "inventory = ["sword", "shield", "potion"]" to create a list. Step 2: Write "hero = {"name": "Sage"}" to create a dictionary. Step 3: Use "print(inventory)" and "print(hero)" to display them.',
      story: 'You organize your supplies.'
    },
    {
      title: 'Conditionals & Loops',
      description: 'Loop through items and print a special message for "potion".',
      starterCode: 'inventory = ["sword","shield","potion"]\n\n# Step 1: Use a for loop to go through each item in inventory\n# Step 2: Check if the item equals "potion"\n# Step 3: If it is, print a special message\n\n# Your code goes here:\n\n',
      solution: 'inventory = ["sword","shield","potion"]\nfor item in inventory:\n if item == "potion":\n print("Welcome to CodeRealm, potion master!")',
      hint: 'Step 1: Write "for item in inventory:" to loop through items. Step 2: Inside the loop, write "if item == "potion":" to check for potion. Step 3: Inside the if, write "print("Welcome to CodeRealm, potion master!")".',
      story: 'You search your bag for helpful items.'
    },
    {
      title: 'Simple Math Operations',
      description: 'Create two numbers and perform basic math operations (add, subtract, multiply).',
      starterCode: '# Step 1: Create two number variables (like a = 10, b = 5)\n# Step 2: Add them together and print the result\n# Step 3: Subtract b from a and print the result\n# Step 4: Multiply them and print the result\n\n# Your code goes here:\n\n',
      solution: 'a = 10\nb = 5\nprint("Addition:", a + b)\nprint("Subtraction:", a - b)\nprint("Multiplication:", a * b)',
      hint: 'Step 1: Write "a = 10" and "b = 5" to create numbers. Step 2: Use "print("Addition:", a + b)" for addition. Step 3: Use "print("Subtraction:", a - b)" for subtraction. Step 4: Use "print("Multiplication:", a * b)" for multiplication.',
      story: 'You learn the ancient art of mathematical magic from the village calculator.'
    },
    {
      title: 'String Operations',
      description: 'Work with text strings - combine them, find their length, and convert to uppercase.',
      starterCode: '# Step 1: Create two string variables (like first_name = "Hero", last_name = "Adventurer")\n# Step 2: Combine them into a full name and print it\n# Step 3: Print the length of the full name\n# Step 4: Print the full name in uppercase\n\n# Your code goes here:\n\n',
      solution: 'first_name = "Hero"\nlast_name = "Adventurer"\nfull_name = first_name + " " + last_name\nprint("Full name:", full_name)\nprint("Name length:", len(full_name))\nprint("Uppercase:", full_name.upper())',
      hint: 'Step 1: Write "first_name = "Hero"" and "last_name = "Adventurer"". Step 2: Combine with "full_name = first_name + " " + last_name". Step 3: Use "len(full_name)" for length. Step 4: Use "full_name.upper()" for uppercase.',
      story: 'You learn to manipulate the ancient texts and inscriptions found in the temple.'
    },
    {
      title: 'Web Scraping',
      description: 'Simulate web scraping with string manipulation.',
      starterCode: 'html_content = \'<div class="quest">Dragon Hunt</div><div class="reward">1000 gold</div>\'\n\n',
      solution: 'html_content = \'<div class="quest">Dragon Hunt</div><div class="reward">1000 gold</div>\'\n\n# Simple extraction (simulate BeautifulSoup)\nquest_start = html_content.find(\'>\') + 1\nquest_end = html_content.find(\'<\', quest_start)\nquest = html_content[quest_start:quest_end]\n\nreward_start = html_content.find(\'>\', quest_end) + 1\nreward_end = html_content.find(\'<\', reward_start)\nreward = html_content[reward_start:reward_end]\n\nprint(f"Welcome to CodeRealm, quest: {quest}")\nprint(f"Reward: {reward}")',
      hint: 'Use string methods like find() to extract data.',
      story: 'You extract information from ancient web scrolls.'
    },
    {
      title: 'Data Analysis',
      description: 'Analyze a list of numbers with basic statistics.',
      starterCode: 'scores = [85, 92, 78, 96, 88, 91, 87, 94]\n\n',
      solution: 'scores = [85, 92, 78, 96, 88, 91, 87, 94]\n\nmax_score = max(scores)\nmin_score = min(scores)\naverage = sum(scores) / len(scores)\n\nprint(f"Welcome to CodeRealm, max score: {max_score}")\nprint(f"Min score: {min_score}")\nprint(f"Average: {average:.1f}")',
      hint: 'Use max(), min(), sum(), and len() functions.',
      story: 'You analyze your adventure statistics.'
    },
    {
      title: 'NumPy & Pandas',
      description: 'Simulate array operations with lists.',
      starterCode: 'import math\n\n# Simulate NumPy operations\n',
      solution: 'import math\n\n# Simulate NumPy operations\narray1 = [1, 2, 3, 4, 5]\narray2 = [2, 4, 6, 8, 10]\n\n# Element-wise addition\nresult = [a + b for a, b in zip(array1, array2)]\nprint(f"Welcome to CodeRealm, array sum: {result}")\n\n# Calculate mean\nmean = sum(array1) / len(array1)\nprint(f"Mean: {mean}")',
      hint: 'Use list comprehensions and zip() for array operations.',
      story: 'You perform mathematical operations on data arrays.'
    },
    {
      title: 'Matplotlib Visualization',
      description: 'Simulate plotting with text-based charts.',
      starterCode: 'data = [5, 3, 8, 2, 7, 4, 6, 9]\n\n',
      solution: 'data = [5, 3, 8, 2, 7, 4, 6, 9]\n\nprint("Welcome to CodeRealm, simple bar chart:")\nfor i, value in enumerate(data):\n bar = "█" * value\n print(f"Bar {i+1}: {bar} ({value})")',
      hint: 'Use string multiplication to create simple bars.',
      story: 'You create visual representations of your data.'
    },
    {
      title: 'Django Basics',
      description: 'Create a simple class-based view simulation.',
      starterCode: 'class QuestView:\n def __init__(self, quest_name):\n self.quest_name = quest_name\n \n def get(self):\n # TODO: implement GET method\n pass\n\n',
      solution: 'class QuestView:\n def __init__(self, quest_name):\n self.quest_name = quest_name\n \n def get(self):\n return f"Welcome to CodeRealm, quest: {self.quest_name}"\n \n def post(self, data):\n return f"Welcome to CodeRealm, quest updated: {data}"\n\nview = QuestView("Dragon Hunt")\nprint(view.get())\nprint(view.post("New Dragon Hunt"))',
      hint: 'Implement get() and post() methods in the class.',
      story: 'You create web views to handle quest requests.'
    },
    {
      title: 'Flask Web Apps',
      description: 'Simulate Flask routes with function calls.',
      starterCode: 'class Flask:\n def __init__(self):\n self.routes = {}\n \n def route(self, path):\n def decorator(func):\n self.routes[path] = func\n return func\n return decorator\n \n def run_route(self, path):\n if path in self.routes:\n return self.routes[path]()\n return "404 Not Found"\n\n',
      solution: 'class Flask:\n def __init__(self):\n self.routes = {}\n \n def route(self, path):\n def decorator(func):\n self.routes[path] = func\n return func\n return decorator\n \n def run_route(self, path):\n if path in self.routes:\n return self.routes[path]()\n return "404 Not Found"\n\napp = Flask()\n\n@app.route("/quest")\ndef get_quest():\n return "Welcome to CodeRealm, quest endpoint!"\n\nprint(app.run_route("/quest"))',
      hint: 'Use decorators to register routes.',
      story: 'You build a web application to serve quests.'
    },
    {
      title: 'API Development',
      description: 'Create a simple API with JSON-like responses.',
      starterCode: 'import json\n\nclass QuestAPI:\n def __init__(self):\n self.quests = {}\n \n def create_quest(self, quest_id, name):\n # TODO: implement\n pass\n \n def get_quest(self, quest_id):\n # TODO: implement\n pass\n\n',
      solution: 'import json\n\nclass QuestAPI:\n def __init__(self):\n self.quests = {}\n \n def create_quest(self, quest_id, name):\n self.quests[quest_id] = {"name": name, "status": "active"}\n return {"message": f"Welcome to CodeRealm, quest {name} created!"}\n \n def get_quest(self, quest_id):\n if quest_id in self.quests:\n return {"quest": self.quests[quest_id]}\n return {"error": "Quest not found"}\n\napi = QuestAPI()\nprint(api.create_quest("001", "Dragon Hunt"))\nprint(api.get_quest("001"))',
      hint: 'Return dictionaries that simulate JSON responses.',
      story: 'You build an API to manage quest data.'
    },
    {
      title: 'Database Integration',
      description: 'Simulate database operations with dictionaries.',
      starterCode: 'class Database:\n def __init__(self):\n self.tables = {}\n \n def create_table(self, name, columns):\n # TODO: implement\n pass\n \n def insert(self, table, data):\n # TODO: implement\n pass\n\n',
      solution: 'class Database:\n def __init__(self):\n self.tables = {}\n \n def create_table(self, name, columns):\n self.tables[name] = {"columns": columns, "data": []}\n return f"Welcome to CodeRealm, table {name} created!"\n \n def insert(self, table, data):\n if table in self.tables:\n self.tables[table]["data"].append(data)\n return f"Welcome to CodeRealm, data inserted into {table}!"\n return "Table not found"\n\n def select(self, table):\n if table in self.tables:\n return self.tables[table]["data"]\n return []\n\ndb = Database()\nprint(db.create_table("quests", ["id", "name", "difficulty"]))\nprint(db.insert("quests", {"id": 1, "name": "Dragon Hunt", "difficulty": "Hard"}))\nprint(db.select("quests"))',
      hint: 'Use dictionaries to simulate database tables.',
      story: 'You connect to the ancient quest database.'
    },
    {
      title: 'Machine Learning Intro',
      description: 'Implement a simple linear regression simulation.',
      starterCode: 'def simple_linear_regression(x_values, y_values):\n # TODO: implement simple linear regression\n pass\n\n',
      solution: 'def simple_linear_regression(x_values, y_values):\n n = len(x_values)\n sum_x = sum(x_values)\n sum_y = sum(y_values)\n sum_xy = sum(x * y for x, y in zip(x_values, y_values))\n sum_x2 = sum(x * x for x in x_values)\n \n slope = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x * sum_x)\n intercept = (sum_y - slope * sum_x) / n\n \n return slope, intercept\n\n# Sample data: level vs experience\nlevels = [1, 2, 3, 4, 5]\nexperience = [100, 250, 450, 700, 1000]\n\nslope, intercept = simple_linear_regression(levels, experience)\nprint(f"Welcome to CodeRealm, ML model trained!")\nprint(f"Slope: {slope:.2f}, Intercept: {intercept:.2f}")\nprint(f"Predicted exp for level 6: {slope * 6 + intercept:.0f}")',
      hint: 'Calculate slope and intercept using the linear regression formula.',
      story: 'You train a machine learning model to predict experience gains.'
    },
    {
      title: 'Data Science Projects',
      description: 'Analyze a dataset with multiple operations.',
      starterCode: 'quest_data = [\n {"name": "Dragon", "difficulty": 5, "reward": 1000},\n {"name": "Goblin", "difficulty": 2, "reward": 200},\n {"name": "Wizard", "difficulty": 4, "reward": 800},\n {"name": "Troll", "difficulty": 3, "reward": 500}\n]\n\n',
      solution: 'quest_data = [\n {"name": "Dragon", "difficulty": 5, "reward": 1000},\n {"name": "Goblin", "difficulty": 2, "reward": 200},\n {"name": "Wizard", "difficulty": 4, "reward": 800},\n {"name": "Troll", "difficulty": 3, "reward": 500}\n]\n\n# Analysis\nrewards = [quest["reward"] for quest in quest_data]\nhigh_difficulty = [quest for quest in quest_data if quest["difficulty"] >= 4]\n\nprint("Welcome to CodeRealm, data analysis complete!")\nprint(f"Average reward: {sum(rewards) / len(rewards):.0f}")\nprint(f"High difficulty quests: {len(high_difficulty)}")\nprint(f"Highest reward: {max(rewards)}")',
      hint: 'Use list comprehensions and built-in functions for analysis.',
      story: 'You analyze quest data to find patterns and insights.'
    },
    {
      title: 'Automation Scripts',
      description: 'Create a script that processes multiple items.',
      starterCode: 'def process_quest(quest_name, difficulty):\n # TODO: implement quest processing\n pass\n\nquests = ["Dragon Hunt", "Goblin Raid", "Wizard Duel"]\n\n',
      solution: 'def process_quest(quest_name, difficulty):\n return f"Welcome to CodeRealm, processing {quest_name} (difficulty: {difficulty})"\n\ndef automate_quest_processing(quest_list):\n results = []\n for i, quest in enumerate(quest_list, 1):\n result = process_quest(quest, i * 2)\n results.append(result)\n return results\n\nquests = ["Dragon Hunt", "Goblin Raid", "Wizard Duel"]\nresults = automate_quest_processing(quests)\nfor result in results:\n print(result)',
      hint: 'Use loops and functions to automate repetitive tasks.',
      story: 'You create automation scripts to process multiple quests.'
    },
    {
      title: 'Testing & Debugging',
      description: 'Create unit tests for a simple function.',
      starterCode: 'def calculate_damage(attack, defense):\n return max(1, attack - defense)\n\n# TODO: create tests\n\n',
      solution: 'def calculate_damage(attack, defense):\n return max(1, attack - defense)\n\ndef test_calculate_damage():\n # Test cases\n assert calculate_damage(10, 5) == 5, "Normal damage calculation failed"\n assert calculate_damage(3, 5) == 1, "Minimum damage not enforced"\n assert calculate_damage(8, 8) == 1, "Equal attack/defense failed"\n print("Welcome to CodeRealm, all tests passed!")\n\ntest_calculate_damage()',
      hint: 'Use assert statements to test different scenarios.',
      story: 'You write tests to ensure your damage calculations are correct.'
    },
    {
      title: 'Advanced Projects',
      description: 'Create a complete game system with multiple classes.',
      starterCode: 'class Player:\n def __init__(self, name):\n # TODO: implement\n pass\n\nclass Quest:\n def __init__(self, name, difficulty):\n # TODO: implement\n pass\n\n',
      solution: 'class Player:\n def __init__(self, name):\n self.name = name\n self.level = 1\n self.experience = 0\n \n def gain_experience(self, exp):\n self.experience += exp\n if self.experience >= 100:\n self.level += 1\n self.experience = 0\n return f"Welcome to CodeRealm, {self.name} leveled up to {self.level}!"\n return f"Welcome to CodeRealm, {self.name} gained {exp} experience!"\n\nclass Quest:\n def __init__(self, name, difficulty):\n self.name = name\n self.difficulty = difficulty\n self.reward = difficulty * 100\n \n def complete(self, player):\n return player.gain_experience(self.reward)\n\nplayer = Player("Hero")\nquest = Quest("Dragon Hunt", 5)\nprint(quest.complete(player))',
      hint: 'Create classes with methods that interact with each other.',
      story: 'You build a complete game system with players and quests.'
    }
  ]
};

const currentChallenge = challenges[selectedLanguage][currentLevel - 1];

  useEffect(() => {
    setCode(currentChallenge.starterCode);
    setOutput('');
    setIsCompleted(false);
    setShowHint(false);
    setAttempts(0);
    setStartTime(Date.now());
    setCompletionTime(null);
    setStars(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setJustAdvanced(true);
    const t = setTimeout(() => setJustAdvanced(false), 900);
    return () => clearTimeout(t);
  }, [selectedLanguage, currentLevel]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('⏳ Running...');
    setAttempts(prev => prev + 1);

    try {
      const languageMap: Record<string, number> = {
        javascript: 63,
        java: 62,
        python: 71,
      };

      const result = await judge0RunCode(code, languageMap[selectedLanguage]);
      const cleanedResult = result.trim();
      setOutput(cleanedResult);

      const outLower = cleanedResult.toLowerCase();
      if (outLower.includes('coderealm') || outLower.includes('hello')) {
        setIsCompleted(true);
        setCompletionTime(Date.now());
        calculateStars();

      }
    } catch (error: any) {
      setOutput(`❌ Error: ${error.message || error}`);
      setIsCompleted(false);
    }

    setIsRunning(false);
  };

  const resetCode = () => {
    setCode(currentChallenge.starterCode);
    setOutput('');
    setIsCompleted(false);
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

  const calculateStars = () => {
    if (!startTime || !completionTime) return;
    const timeTaken = (completionTime - startTime) / 1000;
    let starCount = 0;
    if (attempts === 1 && timeTaken < 30) starCount = 3;
    else if (attempts <= 2 && timeTaken < 60) starCount = 2;
    else if (attempts <= 3 && timeTaken < 120) starCount = 1;
    else starCount = 0;
    setStars(starCount);
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



  return (
    <div className="pt-16 min-h-screen">
      {/* Tutorial Overlay */}
      {isFirstTime && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">
              🎮 Welcome to CodeRealm!
            </h2>
            <p className="text-gray-300 text-center mb-4">You're about to begin your coding adventure.</p>
            <button
              onClick={() => {
                setIsFirstTime(false);
                setShowTutorial(false);
              }}
              className="bg-purple-500 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition"
            >
              Start Your Journey 🚀
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('game-overview')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Overview</span>
            </button>
            <button
              onClick={() => setShowTutorial(!showTutorial)}
              className="text-purple-400 hover:text-purple-300 flex items-center space-x-2"
              title="Show Tutorial"
            >
              <Lightbulb className="h-5 w-5" />
              <span>Tutorial</span>
            </button>
            <div className="w-px h-8 bg-purple-500/30"></div>
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${getLanguageColor()} rounded-lg flex items-center justify-center text-2xl`}>
                {getLanguageIcon()}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white capitalize">{selectedLanguage}</h1>
                <p className="text-gray-400">Level {currentLevel} of 20</p>
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

        {/* Challenge Story + Hint */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-purple-900/30 p-6 rounded-2xl border border-purple-500/30">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">📖 Story</h2>
              <p className="text-gray-300 italic">{currentChallenge.story}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-purple-500/30">
              <h2 className="text-xl font-bold text-white mb-4">🎯 Challenge: {currentChallenge.title}</h2>
              <p className="text-gray-300">{currentChallenge.description}</p>
            </div>
            <div className="bg-yellow-900/30 p-6 rounded-2xl border border-yellow-500/30">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-yellow-400">💡 Need a Hint?</h3>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="bg-yellow-500/20 hover:bg-yellow-500/30 px-3 py-1 rounded-lg"
                >
                  {showHint ? 'Hide' : 'Show'} Hint
                </button>
              </div>
              {showHint && <p className="text-yellow-200">{currentChallenge.hint}</p>}
            </div>
          </div>

          {/* Editor + Output */}
          <div className="space-y-4">
            <div className="bg-slate-900 rounded-2xl border border-purple-500/30">
              <div className="flex justify-between items-center p-4 border-b border-purple-500/30">
                <span className="text-gray-400 text-sm">
                  main.{selectedLanguage === 'java' ? 'java' : selectedLanguage === 'python' ? 'py' : 'js'}
                </span>
                <button
                  onClick={resetCode}
                  className="text-gray-400 hover:text-white flex items-center space-x-1"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Reset</span>
                </button>
              </div>
              <textarea
                ref={textareaRef}
                value={code}
                onChange={handleTextAreaChange}
                onKeyDown={insertTab}
                className="w-full h-80 bg-slate-800 text-white font-mono text-sm p-4 resize-none focus:outline-none"
                placeholder="Write your code here..."
                spellCheck={false}
              />
              <div className="flex justify-between items-center p-4 border-t border-purple-500/30">
                <span className="text-sm text-gray-400">Press Tab to indent • Ctrl+Enter to run</span>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="bg-gradient-to-r from-green-500 to-cyan-500 px-4 py-2 rounded-lg font-semibold"
                >
                  <Play className="h-4 w-4" />
                  <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-purple-500/30">
              <div className="flex justify-between items-center p-4 border-b border-purple-500/30">
                <h3 className="text-lg font-semibold text-white">Output</h3>
              </div>
              <div className="p-4">
                <pre className={`font-mono text-sm whitespace-pre-wrap ${
                  output.includes('Error') ? 'text-red-400' : 'text-green-400'
                }`}>
                  {output || 'Click "Run Code" to see the output...'}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Completion Modal */}
        {isCompleted && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-slate-800 p-8 rounded-2xl border border-cyan-500 max-w-md text-center">
              <CheckCircle className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Level Complete!</h3>
              <p className="text-gray-300 mb-4">You've mastered {currentChallenge.title}. Ready for more?</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsCompleted(false)}
                  className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg font-semibold"
                >
                  Review Code
                </button>
                <button
                  onClick={() => {
                    if (currentLevel < 20) {
                      setCurrentLevel(prev => prev + 1);
                    }
                    setIsCompleted(false);
                  }}
                  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold"
                >
                  {currentLevel < 20 ? 'Next Level' : 'Complete!'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;

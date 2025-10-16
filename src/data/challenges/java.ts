import { ChallengeSet } from './types';

export const javaChallenges: ChallengeSet = [
  // TUTORIAL LEVELS (1-5)
  {
    title: 'Hello Java - Your First Program',
    description: 'Write your very first Java program! Just print "Hello, CodeRealm!" to the console.',
    starterCode: '// Welcome to the Java Kingdom! This is your first Java adventure.\n// Just write a simple program to say hello to the console.\n\n// Your first Java code goes here:\n\n',
    solution: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, CodeRealm!");\n  }\n}',
    hint: 'Write: public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, CodeRealm!"); } } - This is the basic Java structure!',
    story: 'Welcome, brave knight! You\'ve entered the Java Kingdom where code is structured and powerful. Your journey begins with a simple greeting...',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'Variables & Data Types',
    description: 'Create a String variable for your hero name and print a welcome message.',
    starterCode: 'public class Hero {\n  public static void main(String[] args) {\n    // Step 1: Create a String variable called heroName and give it your name\n    // Step 2: Use System.out.println() to display a welcome message\n    \n    // Your code goes here:\n    \n  }\n}',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    String heroName = "Knight";\n    System.out.println("Welcome to CodeRealm, " + heroName + "!");\n  }\n}',
    hint: 'Step 1: Write "String heroName = "YourName";" to create a variable. Step 2: Write "System.out.println("Welcome to CodeRealm, " + heroName + "!");" to display the message.',
    story: 'In the ancient fortress of Java Kingdom, knights must prove their worth by mastering the sacred syntax...',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'Methods & Classes',
    description: 'Create a method that says hello and call it from main.',
    starterCode: 'public class Hero {\n  public static void main(String[] args) {\n    // Step 1: Call the greet method and print the result\n    \n    // Your code goes here:\n    \n  }\n  \n  // Step 2: Create a method called greet that returns a hello message\n  \n}',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    System.out.println(greet("Knight"));\n  }\n  \n  static String greet(String name){\n    return "Welcome to CodeRealm, " + name + "!";\n  }\n}',
    hint: 'Step 1: Write "System.out.println(greet("Knight"));" in main. Step 2: Add "static String greet(String name) { return "Welcome to CodeRealm, " + name + "!"; }" method.',
    story: 'You inscribe a reusable greeting into your grimoire.',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'OOP Fundamentals',
    description: 'Create a Hero class with a name field and a greet method.',
    starterCode: '// implement class Hero and main\n',
    solution: 'class Hero {\n  String name;\n  Hero(String name){ this.name = name; }\n  String greet(){ return "Welcome to CodeRealm, " + name + "!"; }\n}\npublic class Main {\n  public static void main(String[] args){\n    Hero h = new Hero("Knight");\n    System.out.println(h.greet());\n  }\n}',
    hint: 'Use constructor, field, and instance method.',
    story: 'You forge an identity and voice for your hero.',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'Exception Handling',
    description: 'Parse integer from text using try/catch and print a fallback message.',
    starterCode: 'public class Main {\n  public static void main(String[] args){\n    String text = "not-number";\n    // ...\n  }\n}\n',
    solution: 'public class Main {\n  public static void main(String[] args){\n    String text = "not-number";\n    try {\n      Integer.parseInt(text);\n      System.out.println("Welcome to CodeRealm, parser!");\n    } catch (Exception e){\n      System.out.println("Welcome to CodeRealm, but parsing failed");\n    }\n  }\n}',
    hint: 'Use try/catch (Exception e).',
    story: 'A malfunctioning artifact requires careful handling.',
    type: 'tutorial',
    difficulty: 'beginner'
  },

  // CODE PUZZLES (6-10) - Simplified for Beginners!
  {
    title: 'Puzzle: Add Two Numbers',
    description: 'Create a method that takes two numbers and returns their sum. Very simple!',
    starterCode: '// Complete the method below to add two numbers together\n// Example: addNumbers(5, 3) should return 8\n\npublic class Main {\n    public static int addNumbers(int a, int b) {\n        // Write your code here - just add a and b!\n        \n    }\n    \n    public static void main(String[] args) {\n        System.out.println(addNumbers(5, 3));    // Should show: 8\n        System.out.println(addNumbers(10, 20));  // Should show: 30\n    }\n}',
    solution: 'public class Main {\n    public static int addNumbers(int a, int b) {\n        return a + b;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(addNumbers(5, 3));\n        System.out.println(addNumbers(10, 20));\n    }\n}',
    hint: 'Just return a + b inside the method. That\'s it! Use the return keyword followed by a + b',
    story: 'The merchant needs help adding up the gold coins. Can you help by creating a simple addition method?',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['8', '30'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'public class Main {\n  public static int addNumbers(int a, int b) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    System.out.println(addNumbers(5, 3));\n    System.out.println(addNumbers(10, 20));\n  }\n}',
      blanks: [
        {
          id: 'BLANK1',
          prompt: 'Add the two parameters and return the result',
          choices: ['a + b', 'a - b', 'a * b', 'a / b'],
          solution: 'a + b',
          hintSteps: ['Combine a and b', 'Use addition operator', 'Type a + b']
        }
      ]
    }
  },
  {
    title: 'Puzzle: Check if Number is Even',
    description: 'Create a method that checks if a number is even. Return true if even, false if odd.',
    starterCode: '// A number is even if dividing by 2 gives no remainder\n// Use the % (modulo) operator: number % 2\n// If number % 2 equals 0, it\'s even!\n\npublic class Main {\n    public static boolean isEven(int number) {\n        // Your code here\n        \n    }\n    \n    public static void main(String[] args) {\n        System.out.println(isEven(4));  // Should show: true\n        System.out.println(isEven(7));  // Should show: false\n    }\n}',
    solution: 'public class Main {\n    public static boolean isEven(int number) {\n        return number % 2 == 0;\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(isEven(4));\n        System.out.println(isEven(7));\n    }\n}',
    hint: 'Return the result of: number % 2 == 0 (This checks if the remainder is 0)',
    story: 'The kingdom needs to pair up knights for patrol. Help determine which knight numbers are even for pairing!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['true', 'false'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'public class Main {\n  public static boolean isEven(int number) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    System.out.println(isEven(4));\n    System.out.println(isEven(7));\n  }\n}',
      blanks: [
        { id: 'BLANK1', prompt: 'Check if divisible by 2', choices: ['number % 2 == 0', 'number / 2 == 0', 'number % 3 == 0'], solution: 'number % 2 == 0', hintSteps: ['Use modulo', 'Compare remainder to 0', 'Type number % 2 == 0'] }
      ]
    }
  },
  {
    title: 'Puzzle: Get First Item from Array',
    description: 'Write a method that returns the first item from an array.',
    starterCode: '// Arrays are like lists that start counting from 0\n// The first item is at position [0]\n\npublic class Main {\n    public static String getFirst(String[] array) {\n        // Return the first item (hint: use array[0])\n        \n    }\n    \n    public static void main(String[] args) {\n        String[] fruits = {"apple", "banana", "orange"};\n        System.out.println(getFirst(fruits));  // Should show: "apple"\n    }\n}',
    solution: 'public class Main {\n    public static String getFirst(String[] array) {\n        return array[0];\n    }\n    \n    public static void main(String[] args) {\n        String[] fruits = {"apple", "banana", "orange"};\n        System.out.println(getFirst(fruits));\n    }\n}',
    hint: 'Simply return array[0] - that\'s the first element!',
    story: 'The treasure chest has many items. Which one is on top? Get the first item to find out!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['apple'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'public class Main {\n  public static String getFirst(String[] array) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    String[] fruits = {"apple", "banana", "orange"};\n    System.out.println(getFirst(fruits));\n  }\n}',
      blanks: [
        { id: 'BLANK1', prompt: 'Access the first element', choices: ['array[0]', 'array[1]', 'array[-1]'], solution: 'array[0]', hintSteps: ['Arrays are zero-indexed', 'First element is index 0', 'Use array[0]'] }
      ]
    }
  },
  {
    title: 'Puzzle: Count Array Length',
    description: 'Create a method that counts how many items are in an array.',
    starterCode: '// Every array has a .length property that tells you how many items it has\n\npublic class Main {\n    public static int countItems(String[] array) {\n        // Return the length of the array\n        \n    }\n    \n    public static void main(String[] args) {\n        String[] colors = {"red", "blue", "green"};\n        System.out.println(countItems(colors));  // Should show: 3\n    }\n}',
    solution: 'public class Main {\n    public static int countItems(String[] array) {\n        return array.length;\n    }\n    \n    public static void main(String[] args) {\n        String[] colors = {"red", "blue", "green"};\n        System.out.println(countItems(colors));\n    }\n}',
    hint: 'Use array.length to get the number of items. Just return that!',
    story: 'The wizard needs to count how many spell ingredients are in the potion list. Help by counting the array!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['3'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'public class Main {\n  public static int countItems(String[] array) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    String[] colors = {"red", "blue", "green"};\n    System.out.println(countItems(colors));\n  }\n}',
      blanks: [
        { id: 'BLANK1', prompt: 'Return number of elements', choices: ['array.length', 'array.size()', 'length(array)'], solution: 'array.length', hintSteps: ['Use .length property', 'Not a function in Java', 'Type array.length'] }
      ]
    }
  },
  {
    title: 'Puzzle: Greet by Name',
    description: 'Make a method that takes a name and returns a greeting message.',
    starterCode: '// Create a friendly greeting message\n// Use + to combine strings: "Hello " + name + "!"\n\npublic class Main {\n    public static String greet(String name) {\n        // Return a greeting like "Hello Hero!"\n        \n    }\n    \n    public static void main(String[] args) {\n        System.out.println(greet("Hero"));   // Should show: "Hello Hero!"\n        System.out.println(greet("Alice"));  // Should show: "Hello Alice!"\n    }\n}',
    solution: 'public class Main {\n    public static String greet(String name) {\n        return "Hello " + name + "!";\n    }\n    \n    public static void main(String[] args) {\n        System.out.println(greet("Hero"));\n        System.out.println(greet("Alice"));\n    }\n}',
    hint: 'Combine strings with +: return "Hello " + name + "!" (The + joins the strings together)',
    story: 'The friendly innkeeper wants to greet every adventurer by name. Create a greeting method to help!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['Hello Hero!', 'Hello Alice!'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'public class Main {\n  public static String greet(String name) {\n    return __BLANK1__;\n  }\n  public static void main(String[] args) {\n    System.out.println(greet("Hero"));\n    System.out.println(greet("Alice"));\n  }\n}',
      blanks: [
        { id: 'BLANK1', prompt: 'Return a greeting using name', choices: ['"Hello " + name + "!"', '`Hello ${name}!`', 'String.format("Hello %s!", name)'], solution: '"Hello " + name + "!"', hintSteps: ['Use string concatenation', 'Combine literals with +', 'Type "Hello " + name + "!"'] }
      ]
    }
  },

  // INTERMEDIATE & ADVANCED CHALLENGES (11-20) - Keeping original structure
  {
    title: 'Collections Framework',
    description: 'Create an ArrayList of items and iterate to print a special message for "potion".',
    starterCode: 'import java.util.*;\n\n',
    solution: 'import java.util.*;\npublic class Main {\n  public static void main(String[] args){\n    List<String> items = Arrays.asList("sword","shield","potion");\n    for (String it : items){\n      if ("potion".equals(it)) System.out.println("Welcome to CodeRealm, potion master!");\n    }\n  }\n}',
    hint: 'Use java.util.List and enhanced for-loop.',
    story: 'You catalog your armory using lists.',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  {
    title: 'Generics',
    description: 'Create a generic class that can store any type of data.',
    starterCode: '// Create a generic TreasureBox class\n\n',
    solution: 'class TreasureBox<T> {\n  private T treasure;\n  \n  public void setTreasure(T treasure) {\n    this.treasure = treasure;\n  }\n  \n  public T getTreasure() {\n    return treasure;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    TreasureBox<String> box = new TreasureBox<>();\n    box.setTreasure("Golden Sword");\n    System.out.println("Welcome to CodeRealm, treasure: " + box.getTreasure());\n  }\n}',
    hint: 'Use <T> for generic type parameter.',
    story: 'You create a magical box that can hold any treasure.',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  {
    title: 'File I/O',
    description: 'Simulate file operations with string manipulation.',
    starterCode: '// Simulate reading and writing quest data\n\n',
    solution: 'import java.util.*;\n\npublic class Main {\n  public static void main(String[] args) {\n    String questData = "Quest: Defeat Dragon\\nReward: 1000 gold\\nDifficulty: Hard";\n    \n    String[] lines = questData.split("\\\\n");\n    for (String line : lines) {\n      System.out.println("Welcome to CodeRealm, " + line);\n    }\n  }\n}',
    hint: 'Use split() to break text into lines.',
    story: 'You read ancient scrolls containing quest information.',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  {
    title: 'Multithreading',
    description: 'Create a simple thread that prints messages.',
    starterCode: '// Create a thread that runs in background\n\n',
    solution: 'public class Main {\n  public static void main(String[] args) {\n    Thread questThread = new Thread(() -> {\n      for (int i = 1; i <= 3; i++) {\n        System.out.println("Welcome to CodeRealm, quest " + i + " in progress...");\n        try { Thread.sleep(100); } catch (Exception e) {}\n      }\n    });\n    \n    questThread.start();\n    System.out.println("Welcome to CodeRealm, main thread continues!");\n  }\n}',
    hint: 'Use Thread with lambda expression.',
    story: 'You learn to perform multiple tasks simultaneously.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Lambda Expressions',
    description: 'Use lambda expressions with collections.',
    starterCode: 'import java.util.*;\n\n',
    solution: 'import java.util.*;\n\npublic class Main {\n  public static void main(String[] args) {\n    List<String> quests = Arrays.asList("Dragon", "Goblin", "Wizard");\n    \n    quests.stream()\n      .filter(q -> q.length() > 4)\n      .forEach(q -> System.out.println("Welcome to CodeRealm, " + q + " quest!"));\n  }\n}',
    hint: 'Use stream(), filter(), and forEach() with lambda.',
    story: 'You master the art of functional programming.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Stream API',
    description: 'Use streams to process collections of data.',
    starterCode: 'import java.util.*;\n\n',
    solution: 'import java.util.*;\n\npublic class Main {\n  public static void main(String[] args) {\n    List<Integer> scores = Arrays.asList(85, 92, 78, 96, 88);\n    \n    double average = scores.stream()\n      .mapToInt(Integer::intValue)\n      .average()\n      .orElse(0.0);\n    \n    System.out.println("Welcome to CodeRealm, average score: " + average);\n  }\n}',
    hint: 'Use stream(), mapToInt(), and average().',
    story: 'You calculate statistics from your adventure scores.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Design Patterns',
    description: 'Implement the Singleton pattern.',
    starterCode: '// Create a singleton GameManager class\n\n',
    solution: 'class GameManager {\n  private static GameManager instance;\n  private String playerName;\n  \n  private GameManager() {}\n  \n  public static GameManager getInstance() {\n    if (instance == null) {\n      instance = new GameManager();\n    }\n    return instance;\n  }\n  \n  public void setPlayerName(String name) {\n    this.playerName = name;\n  }\n  \n  public String getPlayerName() {\n    return playerName;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    GameManager gm = GameManager.getInstance();\n    gm.setPlayerName("Hero");\n    System.out.println("Welcome to CodeRealm, " + gm.getPlayerName() + "!");\n  }\n}',
    hint: 'Use private constructor and static getInstance() method.',
    story: 'You create a unique game manager that controls the realm.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Database Connectivity',
    description: 'Simulate database operations with mock data.',
    starterCode: '// Simulate database queries\n\n',
    solution: 'import java.util.*;\n\nclass MockDatabase {\n  private Map<String, String> players = new HashMap<>();\n  \n  public void savePlayer(String id, String name) {\n    players.put(id, name);\n  }\n  \n  public String getPlayer(String id) {\n    return players.get(id);\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    MockDatabase db = new MockDatabase();\n    db.savePlayer("001", "Knight");\n    String player = db.getPlayer("001");\n    System.out.println("Welcome to CodeRealm, " + player + "!");\n  }\n}',
    hint: 'Use HashMap to simulate database storage.',
    story: 'You connect to the ancient player database.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Spring Framework',
    description: 'Simulate dependency injection with simple classes.',
    starterCode: '// Create a simple dependency injection example\n\n',
    solution: 'interface Weapon {\n  String attack();\n}\n\nclass Sword implements Weapon {\n  public String attack() {\n    return "Sword slash!";\n  }\n}\n\nclass Hero {\n  private Weapon weapon;\n  \n  public Hero(Weapon weapon) {\n    this.weapon = weapon;\n  }\n  \n  public String fight() {\n    return "Welcome to CodeRealm, " + weapon.attack();\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Hero hero = new Hero(new Sword());\n    System.out.println(hero.fight());\n  }\n}',
    hint: 'Use interface and constructor injection.',
    story: 'You learn the art of dependency injection.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Testing with JUnit',
    description: 'Create a simple test method.',
    starterCode: '// Create a method to test\n\n',
    solution: 'public class Calculator {\n  public static int add(int a, int b) {\n    return a + b;\n  }\n  \n  public static int multiply(int a, int b) {\n    return a * b;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    // Simple test\n    int result1 = Calculator.add(5, 3);\n    int result2 = Calculator.multiply(4, 6);\n    \n    if (result1 == 8 && result2 == 24) {\n      System.out.println("Welcome to CodeRealm, all tests passed!");\n    } else {\n      System.out.println("Welcome to CodeRealm, tests failed!");\n    }\n  }\n}',
    hint: 'Create methods and test them with assertions.',
    story: 'You verify your magical calculations are correct.',
    type: 'tutorial',
    difficulty: 'advanced'
  }
];


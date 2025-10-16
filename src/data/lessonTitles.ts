// Story-driven lesson titles and narratives for CodeRealm
// 50 Lessons × 3 Levels each = 150 total levels per language

export interface LessonInfo {
  lesson: number;
  title: string;
  story: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const getLessonInfo = (lessonNum: number): LessonInfo => {
  const difficulty: 'beginner' | 'intermediate' | 'advanced' = 
    lessonNum <= 20 ? 'beginner' : lessonNum <= 40 ? 'intermediate' : 'advanced';
  
  const lessons: Record<number, {title: string; story: string}> = {
    // BEGINNER LESSONS (1-20) - The Journey Begins
    1: { title: 'The Awakening', story: 'You awaken in the mystical CodeRealm, a land where magic flows through lines of code. Your first task is to greet the ancient Console Oracle who guards the gates.' },
    2: { title: 'Name of Power', story: 'The Oracle speaks: "To wield code magic, you must claim your identity." Learn to store your name in a variable - your first artifact of power.' },
    3: { title: 'Spells of Logic', story: 'A wise sage teaches you about functions - reusable spells that can be cast again and again. Create your first magical incantation!' },
    4: { title: 'The Inventory', story: 'Before venturing forth, you must organize your belongings. Arrays are like magical bags that hold multiple treasures at once.' },
    5: { title: 'Fork in the Road', story: 'You encounter a crossroads. Learning if-statements lets you make wise decisions based on the path ahead.' },
    6: { title: 'The Counter', story: 'A mysterious merchant needs help counting gold coins. Master loops to automate repetitive tasks.' },
    7: { title: 'Texts of the Ancients', story: 'Ancient scrolls contain secrets. Learn string manipulation to decode hidden messages and combine words of power.' },
    8: { title: 'The Calculator Stone', story: 'Find a mystical stone that performs mathematical operations. Master arithmetic to unlock its true potential.' },
    9: { title: 'The Comparator', story: 'Two warriors challenge you to judge who is stronger. Use comparison operators to determine truth from falsehood.' },
    10: { title: 'The Great Merger', story: 'Two villages need to unite their resources. Learn to concatenate strings and merge data together.' },
    11: { title: 'Array Quest', story: 'The Council of Arrays tasks you with mastering their secrets: accessing elements, finding length, and iterating through collections.' },
    12: { title: 'The Nested Chambers', story: 'Descend into a dungeon with rooms within rooms. Learn nested loops to navigate complex structures.' },
    13: { title: 'The Switch Tower', story: 'Climb a tower with many doors. Master switch statements to choose the correct path efficiently.' },
    14: { title: 'Broken Spells', story: 'A wizard\'s spell book has errors! Learn debugging and error handling to fix magical mishaps.' },
    15: { title: 'The Accumulator', story: 'Collect magical essence from multiple sources. Use accumulator patterns to sum values and build totals.' },
    16: { title: 'String Sorcery', story: 'Advanced string magic awaits: splitting, joining, trimming, and transforming text into new forms.' },
    17: { title: 'The Filter Stone', story: 'A sacred stone can separate pure from impure. Learn filtering techniques to extract what you need.' },
    18: { title: 'Mapping the Realm', story: 'Transform an entire landscape with a single spell. Master map operations to change every element at once.' },
    19: { title: 'The Validator', story: 'Guard the city gates by validating travelers. Use boolean logic and compound conditions to make complex decisions.' },
    20: { title: 'Templates of Power', story: 'Discover template literals - a modern way to weave variables into strings with elegance and precision.' },
    
    // INTERMEDIATE LESSONS (21-40) - The Deepening Path
    21: { title: 'Objects of Reality', story: 'Reality itself is made of objects with properties. Learn to create and manipulate these fundamental building blocks.' },
    22: { title: 'The Method Master', story: 'Objects have hidden powers called methods. Unlock their potential by invoking built-in functions.' },
    23: { title: 'Destructuring the Veil', story: 'A powerful technique to extract values from objects and arrays. Unpack data with a single gesture.' },
    24: { title: 'The Spread Spell', story: 'Copy and merge data effortlessly. The spread operator (...) is a fundamental modern enchantment.' },
    25: { title: 'Arrow of Light', story: 'Discover arrow functions - a concise way to write functions with elegant syntax and special powers.' },
    26: { title: 'Higher Order Mysteries', story: 'Functions that accept other functions as arguments. Unlock the power of callbacks and higher-order thinking.' },
    27: { title: 'The Reducer', story: 'Collapse an entire array into a single value. Master reduce() to perform powerful transformations.' },
    28: { title: 'Every and Some', story: 'Test entire collections with a single condition. Learn these powerful array methods for validation.' },
    29: { title: 'Finding What\'s Lost', story: 'Search through vast collections efficiently. Master find() and findIndex() to locate treasures.' },
    30: { title: 'Sorting the Chaos', story: 'Bring order to disorder. Learn sorting algorithms to arrange data in meaningful ways.' },
    31: { title: 'JSON Chronicles', story: 'Transform data between formats. JSON is the universal language for storing and transmitting information.' },
    32: { title: 'Date and Time', story: 'Time itself bends to your will. Learn to work with dates, timestamps, and temporal calculations.' },
    33: { title: 'Regular Expressions', story: 'The most powerful pattern matching magic. Regex can find anything hidden in text.' },
    34: { title: 'Try and Catch', story: 'Not all spells succeed. Learn proper error handling to gracefully manage failures and prevent crashes.' },
    35: { title: 'The This Keyword', story: 'Context is everything. Understanding "this" unlocks the true nature of objects and their methods.' },
    36: { title: 'Prototypes Unveiled', story: 'Every object inherits from its ancestors. Explore the prototype chain that connects all things.' },
    37: { title: 'Class Construct', story: 'Build blueprints for creating multiple similar objects. Classes are the foundation of organized code.' },
    38: { title: 'Inheritance Path', story: 'Child classes inherit powers from parents. Master the art of extending and overriding behaviors.' },
    39: { title: 'Static Powers', story: 'Some methods belong to the class itself, not instances. Discover static methods and properties.' },
    40: { title: 'Getters and Setters', story: 'Control access to object properties with special methods. Add validation and computed values.' },
    
    // ADVANCED LESSONS (41-50) - The Master\'s Journey
    41: { title: 'Async Awakening', story: 'Time flows differently in CodeRealm. Learn asynchronous programming to handle operations that take time.' },
    42: { title: 'Promise of Tomorrow', story: 'Promises represent future values. Master this pattern to write clean asynchronous code.' },
    43: { title: 'Async/Await Mastery', story: 'The most elegant way to work with promises. Write asynchronous code that reads like synchronous.' },
    44: { title: 'Fetch the Data', story: 'Communicate with distant realms. Learn to fetch data from APIs and external sources.' },
    45: { title: 'Modules and Imports', story: 'Organize your spellbook into chapters. Module systems keep code maintainable and reusable.' },
    46: { title: 'Closure Secrets', story: 'Functions that remember their birthplace. Closures create private state and powerful patterns.' },
    47: { title: 'Recursion Abyss', story: 'A function that calls itself. Dive into recursion to solve problems that repeat with variation.' },
    48: { title: 'Generators Unveiled', story: 'Functions that can pause and resume. Generators create iterators and control flow in new ways.' },
    49: { title: 'Event Loop Mastery', story: 'Understanding how JavaScript handles time. The event loop is the heart of asynchronous execution.' },
    50: { title: 'The Final Trial', story: 'Combine everything you\'ve learned. Build a complete application that showcases your mastery of CodeRealm.' }
  };

  return {
    lesson: lessonNum,
    title: lessons[lessonNum]?.title || `Lesson ${lessonNum}`,
    story: lessons[lessonNum]?.story || 'Continue your journey through CodeRealm...',
    difficulty
  };
};

// Get level-specific narrative within a lesson (3 levels per lesson)
export const getLevelNarrative = (lessonNum: number, levelStage: 1 | 2 | 3, lang: 'javascript' | 'java' | 'python'): {title: string; description: string; story: string; task: string} => {
  const lessonInfo = getLessonInfo(lessonNum);
  const stageNames = ['Introduction', 'Practice', 'Mastery'];
  
  // Language-specific tasks for each lesson stage
  const getTask = (): string => {
    const js = lang === 'javascript';
    const py = lang === 'python';
    const jv = lang === 'java';
    
    // Beginner lessons (1-20)
    if (lessonNum === 1) {
      if (levelStage === 1) return js ? 'Write console.log("Hello, CodeRealm!") to greet the Oracle' : py ? 'Write print("Hello, CodeRealm!") to greet the Oracle' : 'Write System.out.println("Hello, CodeRealm!") to greet the Oracle';
      if (levelStage === 2) return js ? 'Create a function greet() that returns "Welcome to CodeRealm!"' : py ? 'Create a function greet() that returns "Welcome to CodeRealm!"' : 'Create a method greet() that returns "Welcome to CodeRealm!"';
      return js ? 'Write a program that logs "CodeRealm" three times using a loop' : py ? 'Write a program that prints "CodeRealm" three times using a loop' : 'Write a program that prints "CodeRealm" three times using a loop';
    }
    if (lessonNum === 2) {
      if (levelStage === 1) return js ? 'Create a variable heroName and assign it your name' : py ? 'Create a variable hero_name and assign it your name' : 'Create a String variable heroName and assign it your name';
      if (levelStage === 2) return js ? 'Store your age in a const variable and log "I am X years old"' : py ? 'Store your age in a variable and print "I am X years old"' : 'Store your age in an int variable and print "I am X years old"';
      return js ? 'Create variables for name, age, and quest. Combine them in one message' : py ? 'Create variables for name, age, and quest. Combine them in one message' : 'Create variables for name, age, and quest. Combine them in one message';
    }
    if (lessonNum === 3) {
      if (levelStage === 1) return js ? 'Define a function add(a, b) that returns the sum of two numbers' : py ? 'Define a function add(a, b) that returns the sum of two numbers' : 'Define a method add(int a, int b) that returns the sum';
      if (levelStage === 2) return js ? 'Create a function isEven(n) that checks if a number is even' : py ? 'Create a function is_even(n) that checks if a number is even' : 'Create a method isEven(int n) that checks if a number is even';
      return js ? 'Write a multiply(x, y, z) function that multiplies three numbers' : py ? 'Write a multiply(x, y, z) function that multiplies three numbers' : 'Write a multiply method that multiplies three numbers';
    }
    if (lessonNum === 4) {
      if (levelStage === 1) return js ? 'Create an array weapons with ["sword", "bow", "staff"]' : py ? 'Create a list weapons with ["sword", "bow", "staff"]' : 'Create a String array weapons with {"sword", "bow", "staff"}';
      if (levelStage === 2) return js ? 'Access and log the first and last elements of an array' : py ? 'Access and print the first and last elements of a list' : 'Access and print the first and last elements of an array';
      return js ? 'Add a new item to your array and display the updated length' : py ? 'Add a new item to your list and display the updated length' : 'Create a new array with an additional item and display the length';
    }
    if (lessonNum === 5) {
      if (levelStage === 1) return js ? 'Write an if statement that checks if health > 50' : py ? 'Write an if statement that checks if health > 50' : 'Write an if statement that checks if health > 50';
      if (levelStage === 2) return js ? 'Use if-else to check if a score is passing (>= 60) or failing' : py ? 'Use if-else to check if a score is passing (>= 60) or failing' : 'Use if-else to check if a score is passing (>= 60) or failing';
      return js ? 'Create a grade checker using if-else if-else (A/B/C/D/F)' : py ? 'Create a grade checker using if-elif-else (A/B/C/D/F)' : 'Create a grade checker using if-else if-else (A/B/C/D/F)';
    }
    if (lessonNum === 6) {
      if (levelStage === 1) return js ? 'Use a for loop to count from 1 to 10' : py ? 'Use a for loop to count from 1 to 10' : 'Use a for loop to count from 1 to 10';
      if (levelStage === 2) return js ? 'Loop through an array and log each item' : py ? 'Loop through a list and print each item' : 'Loop through an array and print each item';
      return js ? 'Use a while loop to double a number until it exceeds 100' : py ? 'Use a while loop to double a number until it exceeds 100' : 'Use a while loop to double a number until it exceeds 100';
    }
    if (lessonNum === 7) {
      if (levelStage === 1) return js ? 'Combine two strings using the + operator' : py ? 'Combine two strings using the + operator' : 'Combine two strings using the + operator';
      if (levelStage === 2) return js ? 'Use .toUpperCase() and .toLowerCase() on a string' : py ? 'Use .upper() and .lower() on a string' : 'Use .toUpperCase() and .toLowerCase() on a string';
      return js ? 'Split a sentence into words and count them' : py ? 'Split a sentence into words and count them' : 'Split a sentence into words and count them';
    }
    if (lessonNum === 8) {
      if (levelStage === 1) return js ? 'Perform basic arithmetic: +, -, *, /' : py ? 'Perform basic arithmetic: +, -, *, /' : 'Perform basic arithmetic: +, -, *, /';
      if (levelStage === 2) return js ? 'Use Math.pow() to calculate 2 to the power of 8' : py ? 'Use ** operator to calculate 2 to the power of 8' : 'Use Math.pow() to calculate 2 to the power of 8';
      return js ? 'Calculate the area of a circle given radius (π × r²)' : py ? 'Calculate the area of a circle given radius (π × r²)' : 'Calculate the area of a circle given radius (π × r²)';
    }
    
    // Intermediate lessons (21-40)
    if (lessonNum === 21) {
      if (levelStage === 1) return js ? 'Create an object hero with properties: name, level, health' : py ? 'Create a dictionary hero with keys: name, level, health' : 'Create a class Hero with fields: name, level, health';
      if (levelStage === 2) return js ? 'Access and modify object properties' : py ? 'Access and modify dictionary values' : 'Create getter and setter methods for Hero';
      return js ? 'Add a method greet() to your hero object' : py ? 'Create a Hero class with a greet() method' : 'Add a greet() method to the Hero class';
    }
    if (lessonNum === 25) {
      if (levelStage === 1) return js ? 'Convert a regular function to an arrow function' : py ? 'Create a lambda function that doubles a number' : 'Create a functional interface and lambda expression';
      if (levelStage === 2) return js ? 'Use arrow function with .map() on an array' : py ? 'Use lambda with map() on a list' : 'Use lambda expression with Stream.map()';
      return js ? 'Create arrow functions with implicit return' : py ? 'Chain multiple lambda operations' : 'Use method references instead of lambdas';
    }
    
    // Advanced lessons (41-50)
    if (lessonNum === 41) {
      if (levelStage === 1) return js ? 'Create a function that uses setTimeout to delay execution' : py ? 'Use asyncio.sleep() to create a delay' : 'Use Thread.sleep() to create a delay';
      if (levelStage === 2) return js ? 'Chain multiple setTimeout calls' : py ? 'Create an async function with await' : 'Create a CompletableFuture with delayed execution';
      return js ? 'Handle multiple asynchronous operations in sequence' : py ? 'Use asyncio.gather() for concurrent operations' : 'Use CompletableFuture.allOf() for multiple tasks';
    }
    if (lessonNum === 50) {
      if (levelStage === 1) return js ? 'Combine classes, async, and modules in a mini-project' : py ? 'Build a complete program using OOP and async' : 'Create a full application with all concepts learned';
      if (levelStage === 2) return js ? 'Add error handling and validation to your project' : py ? 'Add exception handling and type hints' : 'Add exception handling and proper design patterns';
      return js ? 'Optimize and refactor your code for production' : py ? 'Write unit tests and documentation' : 'Write unit tests and add proper logging';
    }
    
    // Default tasks for other lessons
    return `${stageNames[levelStage - 1]}: Complete the coding challenge for this lesson`;
  };
  
  return {
    title: `${lessonInfo.title} - ${stageNames[levelStage - 1]}`,
    description: getTask(),
    story: `${lessonInfo.story}\n\n${
      levelStage === 1 ? '📖 Let me teach you the fundamentals...' :
      levelStage === 2 ? '⚔️ Now put your knowledge to the test!' :
      '🏆 Time to prove your mastery!'
    }`,
    task: getTask()
  };
};


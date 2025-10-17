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
    1: { title: 'The Awakening', story: 'You awaken in the mystical CodeRealm, a land where magic flows through lines of code.\n\nThe ancient Console Oracle speaks: "To begin your journey, you must learn the sacred art of output."\n\nThese are your first spells - simple incantations that make your thoughts visible to the world.' },
    2: { title: 'Name of Power', story: 'The Oracle speaks: "To wield code magic, you must claim your identity."\n\n**Your Quest:**\n• JavaScript: Create a variable with const heroName = "YourName"\n• Python: Create a variable with hero_name = "YourName"\n• Java: Create a String variable with String heroName = "YourName"\n\n**The Power of Variables:**\nVariables are like magical containers that hold your data. They let you store information and use it later in your code.\n\nThis is your first artifact of power - the ability to remember and reuse information.' },
    3: { title: 'Spells of Logic', story: 'A wise sage approaches: "Functions are reusable spells that can be cast again and again!"\n\n**Master the Art of Functions:**\n• JavaScript: function spellName() { return "magic"; }\n• Python: def spell_name(): return "magic"\n• Java: public static String spellName() { return "magic"; }\n\n**Why Functions Matter:**\nFunctions let you write code once and use it many times. They\'re like magical recipes that you can follow whenever you need the same result.\n\nCreate your first magical incantation and unlock the power of reusable code!' },
    4: { title: 'The Inventory', story: 'Before venturing forth, you must organize your belongings. Arrays are like magical bags that hold multiple treasures at once.\n\n**Master the Art of Arrays:**\n• JavaScript: const items = ["sword", "shield", "potion"]\n• Python: items = ["sword", "shield", "potion"]\n• Java: String[] items = {"sword", "shield", "potion"}\n\n**Array Powers:**\n• Access items: items[0] (first item)\n• Get length: items.length (JavaScript/Java) or len(items) (Python)\n• Add items: items.push("newItem") (JavaScript) or items.append("newItem") (Python)\n\nOrganize your magical arsenal and prepare for the adventures ahead!' },
    5: { title: 'Fork in the Road', story: 'You encounter a crossroads. Two paths stretch before you - one leads to safety, the other to adventure.\n\n**Master Decision Making:**\n• JavaScript: if (condition) { /* do this */ }\n• Python: if condition: # do this\n• Java: if (condition) { /* do this */ }\n\n**Conditional Powers:**\n• if-else: Choose between two options\n• if-else if-else: Multiple choices\n• Comparison operators: >, <, ==, !=\n\nLearning if-statements lets you make wise decisions based on the path ahead.' },
    6: { title: 'The Counter', story: 'A mysterious merchant approaches: "I need help counting gold coins! Can you automate this repetitive task?"\n\n**Master the Art of Loops:**\n• For Loop: for (let i = 0; i < 10; i++) { }\n• While Loop: while (condition) { }\n• For...of: for (const item of array) { }\n\n**Loop Powers:**\n• Repeat code multiple times\n• Process arrays and collections\n• Automate repetitive tasks\n• Control program flow\n\n**Common Patterns:**\n• Counting: for (let i = 1; i <= 10; i++)\n• Array iteration: for (const item of items)\n• Conditional repetition: while (condition)\n\nMaster loops to automate repetitive tasks and unlock the power of iteration!' },
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
    21: { title: 'Objects of Reality', story: '🏰 **Welcome to the Java Kingdom!**\n\nReality itself is made of objects with properties. The ancient Oracle teaches you:\n\n> *"Every object has a blueprint called a class."*\n\n**🏗️ Master Object-Oriented Programming:**\n• **Class Declaration**: `public class ClassName { }`\n• **Object Creation**: `ClassName objectName = new ClassName();`\n• **Fields**: Properties that store data\n• **Methods**: Functions that define behavior\n\n**💎 The Foundation:**\nClasses are blueprints, objects are instances. This is the art of modeling real-world concepts as code.\n\n*Unlock the power of structured programming and organized code!*' },
    22: { title: 'The Method Master', story: '⚔️ **The Method Master approaches:**\n\n> *"Methods are functions that belong to objects!"*\n\n**🔮 Master Object Methods:**\n• **Declaration**: `public ReturnType methodName(Parameters) { }`\n• **Field Access**: Use `this.fieldName` inside methods\n• **Method Call**: `objectName.methodName(parameters)`\n\n**💪 The Power of Methods:**\nMethods define what an object can DO, not just what it contains. They give objects their behavior and functionality.\n\n**🎯 Key Concepts:**\n• Methods belong to objects\n• They can access object\'s fields\n• They define object behavior\n\n*Unlock the secrets of object behavior and make your objects truly powerful!*' },
    23: { title: 'Destructuring the Veil', story: 'A powerful technique to extract values from objects and arrays. Unpack data with a single gesture.' },
    24: { title: 'The Spread Spell', story: 'Copy and merge data effortlessly. The spread operator (...) is a fundamental modern enchantment.' },
    25: { title: 'Arrow of Light', story: '🏹 **The Arrow Master appears:**\n\n> *"Arrow functions are the modern way to write functions!"*\n\n**⚡ Master Arrow Functions:**\n• **Basic**: `() => { }` instead of `function() { }`\n• **Single Expression**: `x => x * 2` (no braces needed)\n• **With Parameters**: `(a, b) => a + b`\n\n**🌟 Special Powers:**\n• Concise syntax\n• Implicit return for single expressions\n• Special `this` binding (inherits from context)\n\n**🎯 Perfect for Array Methods:**\n• `arr.map(x => x * 2)`\n• `arr.filter(x => x > 5)`\n• `arr.reduce((sum, x) => sum + x)`\n\n*Master the art of modern JavaScript and write cleaner, more elegant code!*' },
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
  
  // Language-specific stories and tasks
  const getLanguageSpecificContent = () => {
    const js = lang === 'javascript';
    const py = lang === 'python';
    
    // Beginner lessons (1-20)
    if (lessonNum === 1) {
      if (levelStage === 1) {
        return {
          story: js ?
            `Welcome to the JavaScript Realm! 🚀

You awaken in the mystical JavaScript Realm, where dynamic magic flows through lines of code.

The Console Oracle Speaks:
"To begin your journey, you must learn the sacred art of console output."

What You'll Learn:
- console.log() is how JavaScript displays messages
- Text must be wrapped in quotes: "Hello, World!"
- Every statement ends with a semicolon ;

How to Use console.log():
1. Type console.log
2. Add parentheses ()
3. Put your message inside quotes "like this"
4. End with a semicolon ;

Now you're ready to greet the Oracle!` :
            py ?
            `Welcome to the Python Sanctum! 🐍

You awaken in the elegant Python Sanctum, where clean and readable magic flows through indented code.

The Print Sage Speaks:
"To begin your journey, you must learn the sacred art of output."

What You'll Learn:
- print() is how Python displays messages
- Text must be wrapped in quotes: "Hello, World!"
- Python uses indentation instead of semicolons

How to Use print():
1. Type print
2. Add parentheses ()
3. Put your message inside quotes "like this"
4. No semicolon needed!

Now you're ready to greet the Sage!` :
            `Welcome to the Java Kingdom! ☕

You awaken in the structured Java Kingdom, where powerful and organized magic flows through class-based code.

The System Oracle Speaks:
"To begin your journey, you must learn the sacred art of output."

What You'll Learn:
- System.out.println() is how Java displays messages
- Text must be wrapped in quotes: "Hello, World!"
- Java requires a class structure and main method

How to Use System.out.println():
1. Create a public class with a name
2. Add public static void main(String[] args) method
3. Inside main, type System.out.println
4. Add parentheses () and put your message in quotes
5. End with a semicolon ;

Now you're ready to greet the Oracle!`,
          task: js ? 'Write console.log("Hello, CodeRealm!") to greet the Oracle' : py ? 'Write print("Hello, CodeRealm!") to greet the Sage' : 'Write System.out.println("Hello, CodeRealm!") to greet the Oracle'
        };
      }
      if (levelStage === 2) {
        return {
          story: js ?
            `The Oracle's Next Challenge 🔮

The Oracle is pleased with your greeting! "Now learn to create reusable spells," it says.

What You'll Learn:
- Functions are reusable blocks of code
- Use function functionName() { } to create functions
- Use return to send back a value
- Call functions with functionName()

How to Create Functions:
1. Type function followed by a name (like greet)
2. Add parentheses () for parameters
3. Add curly braces { } for the function body
4. Use return to send back a value
5. Call the function with functionName()` :
            py ?
            `The Sage's Next Challenge 🔮

The Sage is pleased with your greeting! "Now learn to create reusable spells," it says.

What You'll Learn:
- Functions are reusable blocks of code
- Use def function_name(): to create functions
- Use return to send back a value
- Call functions with function_name()

How to Create Functions:
1. Type def followed by a name (like greet)
2. Add parentheses () for parameters
3. Add a colon : to start the function body
4. Indent the next line (use 4 spaces)
5. Use return to send back a value
6. Call the function with function_name()` :
            `The Oracle's Next Challenge 🔮

The Oracle is pleased with your greeting! "Now learn to create reusable methods," it says.

What You'll Learn:
- Methods are reusable blocks of code in Java
- Use public static returnType methodName() { } to create methods
- Use return to send back a value
- Call methods with methodName()

How to Create Methods:
1. Type public static String methodName()
2. Add parentheses () for parameters
3. Add curly braces { } for the method body
4. Use return to send back a value
5. Call the method with methodName()`,
          task: js ? 'Create a function greet() that returns "Welcome to CodeRealm!"' : py ? 'Create a function greet() that returns "Welcome to CodeRealm!"' : 'Create a method greet() that returns "Welcome to CodeRealm!"'
        };
      }
      return {
        story: js ?
          'The Oracle nods approvingly. "Master the art of repetition to truly wield JavaScript\'s power."\n\nYour Challenge:\nWrite a program that logs "CodeRealm" three times using a loop to show your mastery of iteration.' :
          py ?
          'The Sage nods approvingly. "Master the art of repetition to truly wield Python\'s power."\n\nYour Challenge:\nWrite a program that prints "CodeRealm" three times using a loop to show your mastery of iteration.' :
          'The Oracle nods approvingly. "Master the art of repetition to truly wield Java\'s power."\n\nYour Challenge:\nWrite a program that prints "CodeRealm" three times using a loop to show your mastery of iteration.',
        task: js ? 'Write a program that logs "CodeRealm" three times using a loop' : py ? 'Write a program that prints "CodeRealm" three times using a loop' : 'Write a program that prints "CodeRealm" three times using a loop'
      };
    }
    
    if (lessonNum === 2) {
      if (levelStage === 1) {
        return {
          story: js ?
            `The Oracle speaks: "To wield JavaScript magic, you must claim your identity with const."

What You'll Learn:
- Variables store data that can be used later
- const creates variables that cannot be changed
- Variable names should be descriptive

How to Create Variables:
1. Type const followed by a variable name
2. Add an equals sign =
3. Put your value in quotes "like this"
4. End with a semicolon ;

Now you're ready to create your first variable!` :
            py ?
            `The Sage speaks: "To wield Python magic, you must claim your identity with simple assignment."

What You'll Learn:
- Variables store data that can be used later
- Python uses simple assignment with =
- Variable names use snake_case (underscores)

How to Create Variables:
1. Type a variable name (use underscores for spaces)
2. Add an equals sign =
3. Put your value in quotes "like this"
4. No semicolon needed!

Now you're ready to create your first variable!` :
            `The Oracle speaks: "To wield Java magic, you must claim your identity with proper typing."

What You'll Learn:
- Variables store data that can be used later
- Java requires you to specify the data type
- String is used for text data

How to Create Variables:
1. Type String followed by a variable name
2. Add an equals sign =
3. Put your value in quotes "like this"
4. End with a semicolon ;

Now you're ready to create your first variable!`,
          task: js ? 'Create a variable heroName and assign it your name' : py ? 'Create a variable hero_name and assign it your name' : 'Create a String variable heroName and assign it your name'
        };
      }
      if (levelStage === 2) {
        return {
          story: js ?
            `The Oracle continues: "Now store your age in a const variable and display it."

What You'll Learn:
- Numbers don't need quotes (they're not text)
- You can combine text and variables
- Template literals use backticks and \${}

How to Combine Text and Variables:
1. Create a const variable with your age (no quotes)
2. Use console.log with template literals
3. Use backticks \` instead of quotes
4. Put \${variableName} where you want the variable

Now you're ready to work with numbers and formatted output!` :
            py ?
            `The Sage continues: "Now store your age in a variable and display it."

What You'll Learn:
- Numbers don't need quotes (they're not text)
- You can combine text and variables
- f-strings use f"text {variable}"

How to Combine Text and Variables:
1. Create a variable with your age (no quotes)
2. Use print with f-strings
3. Put f before the quotes
4. Put {variableName} where you want the variable

Now you're ready to work with numbers and formatted output!` :
            `The Oracle continues: "Now store your age in an int variable and display it."

What You'll Learn:
- Numbers don't need quotes (they're not text)
- int is used for whole numbers
- You can combine text and variables with +

How to Combine Text and Variables:
1. Create an int variable with your age (no quotes)
2. Use System.out.println with string concatenation
3. Use + to combine text and variables
4. Put "text " + variableName

Now you're ready to work with numbers and formatted output!`,
          task: js ? 'Store your age in a const variable and log "I am X years old"' : py ? 'Store your age in a variable and print "I am X years old"' : 'Store your age in an int variable and print "I am X years old"'
        };
      }
      return {
        story: js ?
          'The Oracle smiles: "Combine your knowledge to create a complete hero profile."\n\nNow you\'re ready to combine multiple variables in one message!' :
          py ?
          'The Sage smiles: "Combine your knowledge to create a complete hero profile."\n\nNow you\'re ready to combine multiple variables in one message!' :
          'The Oracle smiles: "Combine your knowledge to create a complete hero profile."\n\nNow you\'re ready to combine multiple variables in one message!',
        task: js ? 'Create variables for name, age, and quest. Combine them in one message' : py ? 'Create variables for name, age, and quest. Combine them in one message' : 'Create variables for name, age, and quest. Combine them in one message'
      };
    }
    
    // Intermediate lessons (21-40)
    if (lessonNum === 21) {
      if (levelStage === 1) {
        return {
          story: js ?
            `You enter the JavaScript Object Realm, where everything is an object with properties and methods.

The Object Master speaks: "Learn to create objects that represent real-world concepts."

What You'll Learn:
- Objects are like containers that hold related information
- Think of an object like a character profile in a game
- Each piece of information has a name (property) and a value

How Objects Work:
Imagine you're creating a character for a game:
- The character has a name: "Hero"
- The character has a level: 5
- The character has health: 100

In JavaScript, you group this information together in an object:
const hero = {
    name: "Hero",
    level: 5,
    health: 100
};

Step-by-Step Guide:
1. Start with const hero = {
2. Add name: "Hero", (note the comma)
3. Add level: 5, (note the comma)
4. Add health: 100 (no comma on last item)
5. Close with };` :
            py ?
            `You enter the Python Dictionary Sanctum, where data is stored in key-value pairs.

The Dictionary Sage speaks: "Learn to create dictionaries that represent real-world concepts."

What You'll Learn:
- Dictionaries are like containers that hold related information
- Think of a dictionary like a character profile in a game
- Each piece of information has a key (name) and a value

How Dictionaries Work:
Imagine you're creating a character for a game:
- The character has a name: "Hero"
- The character has a level: 5
- The character has health: 100

In Python, you group this information together in a dictionary:
hero = {
    "name": "Hero",
    "level": 5,
    "health": 100
}

Step-by-Step Guide:
1. Start with hero = {
2. Add "name": "Hero", (note the comma)
3. Add "level": 5, (note the comma)
4. Add "health": 100 (no comma on last item)
5. Close with }` :
            `You enter the Java Class Kingdom, where everything is organized into classes and objects.

The Class Oracle speaks: "Learn to create classes that represent real-world concepts."

What You'll Learn:
- Classes are blueprints for creating objects
- Think of a class like a template for a character
- Each character created from the class has the same structure

How Classes Work:
Imagine you're creating a character template for a game:
- Every character has a name, level, and health
- You create a blueprint (class) that defines this structure
- Then you can create many characters from this blueprint

In Java, you create a class like this:
public class Hero {
    private String name;
    private int level;
    private int health;
    
    public Hero(String name, int level, int health) {
        this.name = name;
        this.level = level;
        this.health = health;
    }
}

Step-by-Step Guide:
1. Start with public class Hero {
2. Add private fields for name, level, health
3. Add a constructor to initialize the fields
4. Close with }`,
          task: js ? 'Create an object hero with properties: name, level, health' : py ? 'Create a dictionary hero with keys: name, level, health' : 'Create a class Hero with fields: name, level, health'
        };
      }
      if (levelStage === 2) {
        return {
          story: js ?
            'The Object Master continues: "Now learn to access and modify object properties."\n\nNow you\'re ready to work with object properties!' :
            py ?
            'The Dictionary Sage continues: "Now learn to access and modify dictionary values."\n\nNow you\'re ready to work with dictionary values!' :
            'The Class Oracle continues: "Now learn to create getter and setter methods."\n\nNow you\'re ready to work with class methods!',
          task: js ? 'Access and modify object properties' : py ? 'Access and modify dictionary values' : 'Create getter and setter methods for Hero'
        };
      }
      return {
        story: js ?
          'The Object Master smiles: "Add behavior to your objects with methods."\n\nNow you\'re ready to add methods to objects!' :
          py ?
          'The Dictionary Sage smiles: "Create a Hero class with methods for behavior."\n\nNow you\'re ready to create classes with methods!' :
          'The Class Oracle smiles: "Add methods to your class for behavior."\n\nNow you\'re ready to add methods to classes!',
        task: js ? 'Add a method greet() to your hero object' : py ? 'Create a Hero class with a greet() method' : 'Add a greet() method to the Hero class'
      };
    }
    
    if (lessonNum === 25) {
      if (levelStage === 1) {
        return {
          story: js ?
            'The Arrow Function Master appears: "Learn the modern way to write functions in JavaScript!"\n\nNow you\'re ready to use arrow functions!' :
            py ?
            'The Lambda Sage appears: "Learn to create anonymous functions in Python!"\n\nNow you\'re ready to use lambda functions!' :
            'The Functional Interface Oracle appears: "Learn to use functional programming in Java!"\n\nNow you\'re ready to use functional programming!',
          task: js ? 'Convert a regular function to an arrow function' : py ? 'Create a lambda function that doubles a number' : 'Create a functional interface and lambda expression'
        };
      }
      if (levelStage === 2) {
        return {
          story: js ?
            'The Arrow Master continues: "Use arrow functions with array methods for powerful transformations."\n\nNow you\'re ready to use arrow functions with arrays!' :
            py ?
            'The Lambda Sage continues: "Use lambda functions with built-in functions for powerful operations."\n\nNow you\'re ready to use lambda functions with built-ins!' :
            'The Functional Oracle continues: "Use lambda expressions with Stream API for powerful operations."\n\nNow you\'re ready to use lambda expressions with streams!',
          task: js ? 'Use arrow function with .map() on an array' : py ? 'Use lambda with map() on a list' : 'Use lambda expression with Stream.map()'
        };
      }
      return {
        story: js ?
          'The Arrow Master nods: "Master implicit return and concise syntax."\n\nNow you\'re ready to master concise arrow function syntax!' :
          py ?
          'The Lambda Sage nods: "Chain multiple lambda operations for complex transformations."\n\nNow you\'re ready to chain lambda operations!' :
          'The Functional Oracle nods: "Use method references for even cleaner code."\n\nNow you\'re ready to use method references!',
        task: js ? 'Create arrow functions with implicit return' : py ? 'Chain multiple lambda operations' : 'Use method references instead of lambdas'
      };
    }
    
    // Advanced lessons (41-50)
    if (lessonNum === 41) {
      if (levelStage === 1) {
        return {
          story: js ?
            'You enter the Asynchronous JavaScript Realm, where time flows differently.\n\nThe Async Master speaks: "Learn to handle operations that take time without blocking your code."\n\nNow you\'re ready to work with asynchronous operations!' :
            py ?
            'You enter the Asynchronous Python Sanctum, where concurrency is handled elegantly.\n\nThe Async Sage speaks: "Learn to handle operations that take time without blocking your code."\n\nNow you\'re ready to work with asynchronous operations!' :
            'You enter the Asynchronous Java Kingdom, where multithreading is powerful.\n\nThe Async Oracle speaks: "Learn to handle operations that take time without blocking your code."\n\nNow you\'re ready to work with asynchronous operations!',
          task: js ? 'Create a function that uses setTimeout to delay execution' : py ? 'Use asyncio.sleep() to create a delay' : 'Use Thread.sleep() to create a delay'
        };
      }
      if (levelStage === 2) {
        return {
          story: js ?
            'The Async Master continues: "Chain multiple asynchronous operations for complex workflows."\n\nNow you\'re ready to chain async operations!' :
            py ?
            'The Async Sage continues: "Create async functions with await for clean asynchronous code."\n\nNow you\'re ready to use async/await!' :
            'The Async Oracle continues: "Use CompletableFuture for modern asynchronous programming."\n\nNow you\'re ready to use CompletableFuture!',
          task: js ? 'Chain multiple setTimeout calls' : py ? 'Create an async function with await' : 'Create a CompletableFuture with delayed execution'
        };
      }
      return {
        story: js ?
          'The Async Master smiles: "Handle multiple asynchronous operations efficiently."\n\nNow you\'re ready to handle multiple async operations!' :
          py ?
          'The Async Sage smiles: "Use asyncio.gather() for concurrent operations."\n\nNow you\'re ready to use concurrent operations!' :
          'The Async Oracle smiles: "Use CompletableFuture.allOf() for multiple concurrent tasks."\n\nNow you\'re ready to handle multiple concurrent tasks!',
        task: js ? 'Handle multiple asynchronous operations in sequence' : py ? 'Use asyncio.gather() for concurrent operations' : 'Use CompletableFuture.allOf() for multiple tasks'
      };
    }
    
    if (lessonNum === 50) {
      if (levelStage === 1) {
        return {
          story: js ?
            'You reach the Final JavaScript Challenge! The Grand Master speaks: "Combine all your knowledge into a complete application."\n\nNow you\'re ready to build complete applications!' :
            py ?
            'You reach the Final Python Challenge! The Grand Sage speaks: "Combine all your knowledge into a complete application."\n\nNow you\'re ready to build complete applications!' :
            'You reach the Final Java Challenge! The Grand Oracle speaks: "Combine all your knowledge into a complete application."\n\nNow you\'re ready to build complete applications!',
          task: js ? 'Combine classes, async, and modules in a mini-project' : py ? 'Build a complete program using OOP and async' : 'Create a full application with all concepts learned'
        };
      }
      if (levelStage === 2) {
        return {
          story: js ?
            'The Grand Master continues: "Add error handling and validation to make your application robust."\n\nNow you\'re ready to add error handling!' :
            py ?
            'The Grand Sage continues: "Add exception handling and type hints for robust code."\n\nNow you\'re ready to add exception handling!' :
            'The Grand Oracle continues: "Add exception handling and proper design patterns."\n\nNow you\'re ready to add exception handling!',
          task: js ? 'Add error handling and validation to your project' : py ? 'Add exception handling and type hints' : 'Add exception handling and proper design patterns'
        };
      }
      return {
        story: js ?
          'The Grand Master nods: "Optimize and refactor for production deployment."\n\nNow you\'re ready to optimize for production!' :
          py ?
          'The Grand Sage nods: "Write unit tests and documentation for professional code."\n\nNow you\'re ready to write professional code!' :
          'The Grand Oracle nods: "Write unit tests and add proper logging for enterprise applications."\n\nNow you\'re ready to write enterprise code!',
        task: js ? 'Optimize and refactor your code for production' : py ? 'Write unit tests and documentation' : 'Write unit tests and add proper logging'
      };
    }
    
    // Add more intermediate lessons (22-24, 26-30)
    if (lessonNum === 22) {
      return {
        story: js ?
          'The Method Master approaches: "Learn to add behavior to your objects with methods."\n\nNow you\'re ready to add methods to objects!' :
          py ?
          'The Method Sage approaches: "Learn to add behavior to your classes with methods."\n\nNow you\'re ready to add methods to classes!' :
          'The Method Oracle approaches: "Learn to add behavior to your classes with methods."\n\nNow you\'re ready to add methods to classes!',
        task: js ? 'Add methods to your objects' : py ? 'Add methods to your classes' : 'Add methods to your classes'
      };
    }
    
    if (lessonNum === 30) {
      return {
        story: js ?
          'The Sorting Master appears: "Learn to bring order to chaos with sorting algorithms."\n\nNow you\'re ready to sort arrays!' :
          py ?
          'The Sorting Sage appears: "Learn to bring order to chaos with sorting algorithms."\n\nNow you\'re ready to sort lists!' :
          'The Sorting Oracle appears: "Learn to bring order to chaos with sorting algorithms."\n\nNow you\'re ready to sort arrays!',
        task: js ? 'Sort arrays using built-in methods' : py ? 'Sort lists using built-in methods' : 'Sort arrays using built-in methods'
      };
    }
    
    // Add more advanced lessons (42-49)
    if (lessonNum === 42) {
      return {
        story: js ?
          'The Promise Master speaks: "Learn to handle future values with Promises."\n\nNow you\'re ready to work with Promises!' :
          py ?
          'The Future Sage speaks: "Learn to handle future values with asyncio."\n\nNow you\'re ready to work with Futures!' :
          'The CompletableFuture Oracle speaks: "Learn to handle future values with CompletableFuture."\n\nNow you\'re ready to work with CompletableFutures!',
        task: js ? 'Create and handle Promises' : py ? 'Create and handle Futures' : 'Create and handle CompletableFutures'
      };
    }
    
    if (lessonNum === 45) {
      return {
        story: js ?
          'The Module Master appears: "Learn to organize your code into reusable modules."\n\nNow you\'re ready to organize your code!' :
          py ?
          'The Module Sage appears: "Learn to organize your code into reusable modules."\n\nNow you\'re ready to organize your code!' :
          'The Package Oracle appears: "Learn to organize your code into reusable packages."\n\nNow you\'re ready to organize your code!',
        task: js ? 'Create modules and use import/export' : py ? 'Create modules and use import statements' : 'Create packages and use import statements'
      };
    }
    
    // Default for other lessons
    return {
      story: lessonInfo.story,
      task: `${stageNames[levelStage - 1]}: Complete the coding challenge for this lesson.`
    };
  };
  
  const content = getLanguageSpecificContent();
  
  return {
    title: `${lessonInfo.title} - ${stageNames[levelStage - 1]}`,
    description: content.task,
    story: content.story,
    task: content.task
  };
};


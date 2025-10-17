import { ChallengeSet } from './types';

export const javascriptChallenges: ChallengeSet = [
  // EASY LEVEL (Lessons 1-20) - True Beginner Concepts
  
  // Lesson 1: Hello World
  {
    title: 'Hello World - Your First Spell',
    description: 'Print "Hello, CodeRealm!" to greet the JavaScript Oracle.',
    starterCode: '',
    solution: 'console.log("Hello, CodeRealm!");',
    hint: 'Use the console.log() function with quotes around your message: console.log("Hello, CodeRealm!");',
    story: '🏰 **Welcome to the JavaScript Realm!**\n\nYou stand before the ancient JavaScript Oracle, ready to learn your first spell.\n\n**📚 What You\'ll Learn:**\n• JavaScript uses `console.log()` to display messages\n• Text must be wrapped in quotes: `"Hello, World!"`\n• JavaScript is case-sensitive and uses semicolons\n\n**🔮 Your First Spell:**\nThe Oracle teaches you the sacred `console.log()` function - the foundation of all JavaScript magic.\n\n**✨ Syntax Rules:**\n1. Always use parentheses: `console.log()`\n2. Wrap text in quotes: `"your message"`\n3. End with a semicolon: `;`\n\n*Cast your first spell and greet the CodeRealm!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 2: Variables
  {
    title: 'Variables - Storing Magical Energy',
    description: 'Create a variable to store your hero\'s name and display a welcome message.',
    starterCode: '',
    solution: 'const heroName = "Sage";\nconsole.log(`Welcome to CodeRealm, ${heroName}!`);',
    hint: 'Step 1: Create a variable with const heroName = "YourName";. Step 2: Use template literals: console.log(`Welcome to CodeRealm, ${heroName}!`);',
    story: '🔮 **The Variable Crystal Chamber**\n\nDeep in the JavaScript Realm, you discover crystals that can store magical energy - variables!\n\n**📚 What You\'ll Learn:**\n• Variables store data for later use\n• JavaScript uses `const`, `let`, or `var` to declare variables\n• Template literals allow variable insertion: `Hello ${name}`\n\n**💎 Variable Rules:**\n1. Use `const` for constants: `const heroName` ✅\n2. Use `let` for changeable values: `let playerLevel` ✅\n3. Use descriptive names: `playerLevel` ✅\n4. No spaces: `hero name` ❌\n\n**🔮 Data Types:**\n• Strings: `"text"` (wrapped in quotes)\n• Numbers: `42` (no quotes)\n• Booleans: `true` or `false`\n\n**✨ Template Literal Magic:**\nUse backticks and `${variable}` to insert variables into strings!\n\n*Store your hero\'s identity and announce your arrival!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 3: Simple Functions
  {
    title: 'Simple Functions - Your First Spell',
    description: 'Create a simple function that says hello and use it.',
    starterCode: '',
    solution: 'function sayHello() {\n  return "Hello from CodeRealm!";\n}\n\nconsole.log(sayHello());',
    hint: 'Step 1: Define function with function sayHello() {. Step 2: Return a message. Step 3: Call the function with console.log(sayHello());',
    story: '🧙‍♂️ **The Function Grimoire**\n\nA wise sage approaches: "Functions are reusable spells that can be cast again and again!"\n\n**📚 What You\'ll Learn:**\n• Functions are reusable code blocks\n• `function` keyword starts function definition\n• `return` sends data back to caller\n• Functions can be called multiple times\n\n**🔮 Function Anatomy:**\n```javascript\nfunction functionName() {\n  // Function body\n  return result;\n}\n```\n\n**✨ Function Rules:**\n1. Use `function` to define: `function myFunction() {}`\n2. Use curly braces `{}` for function body\n3. Use `return` to send back data\n4. Call with parentheses: `myFunction()`\n\n**🎯 Why Functions Matter:**\n• Write once, use many times\n• Organize code into logical pieces\n• Make code easier to read and debug\n\n*Create your first magical function and unlock the power of reusable code!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 4: Simple Arrays
  {
    title: 'Simple Arrays - Magical Containers',
    description: 'Create a simple array of items and display it.',
    starterCode: '',
    solution: 'const items = ["sword", "shield", "potion"];\nconsole.log("My items:", items);',
    hint: 'Step 1: Create an array with square brackets: ["item1", "item2"]. Step 2: Display it with console.log().',
    story: '🎒 **The Inventory Vault**\n\nBefore venturing forth, you must organize your belongings. Arrays are magical containers that hold multiple treasures!\n\n**📚 What You\'ll Learn:**\n• Arrays store multiple items in order\n• Use square brackets `[]` to create arrays\n• Items are separated by commas\n• Arrays can hold different data types\n\n**🔮 Array Creation:**\n```javascript\n// String array\nconst items = ["sword", "shield", "potion"];\n\n// Number array\nconst numbers = [1, 2, 3, 4, 5];\n\n// Mixed array\nconst mixed = ["text", 42, true];\n```\n\n**✨ Array Operations:**\n• Access items: `items[0]` (first item)\n• Get length: `items.length`\n• Add items: `items.push("new_item")`\n• Remove items: `items.pop()`\n\n**🎯 Array Indexing:**\n• First item: `items[0]`\n• Last item: `items[items.length - 1]`\n• Range: `items.slice(1, 3)` (items 1 and 2)\n\n*Organize your magical arsenal and prepare for adventure!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 5: Simple Conditionals
  {
    title: 'Simple Conditionals - The Path of Decisions',
    description: 'Use a simple if statement to check if a number is big.',
    starterCode: '',
    solution: 'const number = 10;\nif (number > 5) {\n  console.log("That\'s a big number!");\n}',
    hint: 'Step 1: Create a variable with a number. Step 2: Use if (number > 5) { to check. Step 3: Print a message inside the if block.',
    story: '🛤️ **The Crossroads of Fate**\n\nYou encounter a crossroads. Two paths stretch before you - one leads to safety, the other to adventure. Your code must make wise decisions!\n\n**📚 What You\'ll Learn:**\n• `if` statements make decisions based on conditions\n• Conditions use comparison operators\n• Code inside `if` blocks runs only when condition is true\n\n**🔮 Simple Conditional Structure:**\n```javascript\nif (condition) {\n  // Do this if condition is true\n}\n```\n\n**✨ Comparison Operators:**\n• `===` - equal to (strict)\n• `!==` - not equal to (strict)\n• `>` - greater than\n• `<` - less than\n• `>=` - greater than or equal\n• `<=` - less than or equal\n\n**🎯 Boolean Values:**\n• `true` - condition is met\n• `false` - condition is not met\n• Conditions evaluate to true or false\n\n*Master the art of decision-making and choose your path wisely!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },

  // Lesson 6: Simple Loops
  {
    title: 'Simple Loops - The Cycle of Repetition',
    description: 'Use a simple for loop to print numbers 1 to 5.',
    starterCode: '',
    solution: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}',
    hint: 'Use for (let i = 1; i <= 5; i++) { to loop from 1 to 5. Print i inside the loop.',
    story: '🔄 **The Circle of Repetition**\n\nA mysterious merchant approaches: "I need help counting gold coins! Can you automate this repetitive task?"\n\n**📚 What You\'ll Learn:**\n• `for` loops repeat code a specific number of times\n• Loop has three parts: initialization, condition, increment\n• Loops automate repetitive tasks\n\n**🔮 Simple For Loop:**\n```javascript\n// Basic for loop\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\n// Count from 1 to 5\nfor (let i = 1; i <= 5; i++) {\n  console.log(i);\n}\n```\n\n**🔍 Loop Structure:**\n• `let i = 1` - initialize counter\n• `i <= 5` - condition to check\n• `i++` - increment counter\n\n**💡 Common Patterns:**\n• Count iterations: `for (let i = 0; i < n; i++)`\n• Count from 1: `for (let i = 1; i <= n; i++)`\n• Count backwards: `for (let i = n; i >= 1; i--)`\n\n*Master the art of repetition and automate repetitive tasks!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 7: String Basics
  {
    title: 'String Basics - Text Magic',
    description: 'Create a string and use basic string methods.',
    starterCode: '',
    solution: 'const name = "CodeRealm Hero";\nconsole.log("Original:", name);\nconsole.log("Uppercase:", name.toUpperCase());\nconsole.log("Lowercase:", name.toLowerCase());',
    hint: 'Step 1: Create a string variable. Step 2: Use .toUpperCase() and .toLowerCase() methods. Step 3: Print the results.',
    story: '📜 **The Text Scroll Chamber**\n\nAncient scrolls contain secrets. Learn string manipulation to decode hidden messages!\n\n**📚 What You\'ll Learn:**\n• Strings are sequences of characters\n• String methods modify and analyze text\n• Basic string operations are essential\n\n**🔮 String Creation:**\n```javascript\n// Single quotes\nconst name = \'Hero\';\n\n// Double quotes\nconst message = "Welcome!";\n\n// Template literals\nconst story = `\nThis is a\nmulti-line string\n`;\n```\n\n**✨ Basic String Methods:**\n• `.toUpperCase()` - convert to uppercase\n• `.toLowerCase()` - convert to lowercase\n• `.trim()` - remove whitespace\n• `.length` - string length\n\n**🎯 String Indexing:**\n• `text[0]` - first character\n• `text[text.length - 1]` - last character\n• `text.substring(1, 4)` - characters 1, 2, 3\n\n*Master the art of text manipulation and decode ancient secrets!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 8: Basic Math
  {
    title: 'Basic Math - The Calculator Stone',
    description: 'Perform basic arithmetic operations with numbers.',
    starterCode: '',
    solution: 'console.log("Addition:", 10 + 5);\nconsole.log("Subtraction:", 10 - 5);\nconsole.log("Multiplication:", 10 * 5);\nconsole.log("Division:", 10 / 5);',
    hint: 'Use basic operators +, -, *, / with numbers. Print the results.',
    story: '🧮 **The Calculator Stone Chamber**\n\nYou find a mystical stone that performs mathematical operations. Master arithmetic to unlock its true potential!\n\n**📚 What You\'ll Learn:**\n• JavaScript supports integers and floating-point numbers\n• Basic arithmetic operators perform calculations\n• Variables can store numeric results\n\n**🔮 Number Types:**\n• Integers: `42`, `-10`, `0`\n• Floats: `3.14`, `-2.5`, `0.0`\n• Special: `Infinity`, `NaN`\n\n**✨ Arithmetic Operators:**\n• `+` - addition\n• `-` - subtraction\n• `*` - multiplication\n• `/` - division\n• `%` - modulus (remainder)\n• `**` - exponentiation (power)\n\n**🎯 Order of Operations:**\n1. Parentheses: `()`\n2. Exponentiation: `**`\n3. Multiplication/Division: `*`, `/`, `%`\n4. Addition/Subtraction: `+`, `-`\n\n*Master the art of calculation and unlock mathematical mysteries!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 9: Simple Comparisons
  {
    title: 'Simple Comparisons - The Comparator',
    description: 'Use comparison operators to compare two numbers.',
    starterCode: '',
    solution: 'const a = 10;\nconst b = 5;\nconsole.log(`${a} > ${b}:`, a > b);\nconsole.log(`${a} === ${b}:`, a === b);\nconsole.log(`${a} !== ${b}:`, a !== b);',
    hint: 'Step 1: Create two number variables. Step 2: Use comparison operators >, ===, !==. Step 3: Print the results.',
    story: '⚖️ **The Comparator\'s Scale**\n\nTwo warriors challenge you to judge who is stronger. Use comparison operators to determine truth from falsehood!\n\n**📚 What You\'ll Learn:**\n• Comparison operators return true or false\n• Use comparisons in if statements\n• Compare different data types\n\n**🔮 Comparison Operators:**\n• `===` - equal to (strict)\n• `!==` - not equal to (strict)\n• `>` - greater than\n• `<` - less than\n• `>=` - greater than or equal\n• `<=` - less than or equal\n\n**✨ Comparison Examples:**\n```javascript\n// Numbers\n5 === 5        // true\n10 > 5         // true\n3 !== 7        // true\n\n// Variables\nconst level = 15;\nlevel >= 10     // true\nlevel === 20    // false\n```\n\n**🔍 Comparison Rules:**\n• Numbers compare by value\n• Strings compare alphabetically\n• Use `===` instead of `==` for strict comparison\n\n*Master the art of comparison and make wise judgments!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 10: String Concatenation
  {
    title: 'String Concatenation - The Great Merger',
    description: 'Combine two strings using the + operator.',
    starterCode: '',
    solution: 'const firstName = "Code";\nconst lastName = "Realm";\nconst fullName = firstName + " " + lastName;\nconsole.log("Full name:", fullName);',
    hint: 'Step 1: Create two string variables. Step 2: Use + to combine them. Step 3: Add a space between them.',
    story: '🔗 **The Great Merger Portal**\n\nTwo villages need to unite their resources. Learn to concatenate strings and merge data together!\n\n**📚 What You\'ll Learn:**\n• String concatenation combines multiple strings\n• Use `+` operator to join strings\n• Add spaces between words\n\n**🔮 Concatenation Methods:**\n\n**1. Plus Operator (+):**\n```javascript\nconst first = "Hello";\nconst last = "World";\nconst result = first + " " + last;  // "Hello World"\n```\n\n**2. Template Literals (Recommended):**\n```javascript\nconst name = "Alice";\nconst age = 25;\nconst message = `Hello ${name}, you are ${age} years old!`;\n```\n\n**✨ Basic Concatenation:**\n• Simple joining: `"Hello" + " " + "World"`\n• With variables: `name + " is " + age`\n• Add spaces: `first + " " + last`\n\n**🎯 When to Use Each Method:**\n• `+` - simple concatenation\n• Template literals - variable insertion (preferred)\n\n*Master the art of string merging and unite the villages!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Continue with lessons 11-20 for easy level
  // Then lessons 21-40 for intermediate level
  // Then lessons 41-50 for advanced level
  
  // INTERMEDIATE LEVEL (Lessons 21-40) - Building on Basics
  
  // Lesson 21: Functions with Parameters
  {
    title: 'Functions with Parameters - Advanced Spells',
    description: 'Create a function that accepts parameters and returns a result.',
    starterCode: '',
    solution: 'function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("Sage"));\nconsole.log(greet("Knight"));',
    hint: 'Step 1: Define function with parameter: function greet(name) {. Step 2: Use the parameter inside the function. Step 3: Call with different values.',
    story: '🧙‍♂️ **The Advanced Grimoire**\n\nYou\'ve mastered basic functions! Now learn to create spells that accept different ingredients (parameters)!\n\n**📚 What You\'ll Learn:**\n• Functions can accept parameters (inputs)\n• Parameters make functions more flexible\n• Same function can work with different data\n\n**🔮 Function with Parameters:**\n```javascript\nfunction functionName(parameter) {\n  // Use parameter inside function\n  return result;\n}\n\n// Call with different values\nfunctionName("value1");\nfunctionName("value2");\n```\n\n**✨ Parameter Rules:**\n1. Define parameters in parentheses: `function greet(name)`\n2. Use parameters inside function body\n3. Call with actual values: `greet("Alice")`\n4. Parameters are local to the function\n\n**🎯 Why Parameters Matter:**\n• Make functions reusable with different data\n• Reduce code duplication\n• Create flexible, powerful functions\n\n*Master the art of parameterized spells and create flexible magic!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 22: Arrays with Methods
  {
    title: 'Arrays with Methods - Advanced Containers',
    description: 'Use array methods to add, remove, and manipulate items.',
    starterCode: '',
    solution: 'const inventory = ["sword"];\ninventory.push("shield");\ninventory.push("potion");\nconsole.log("Inventory:", inventory);\nconsole.log("First item:", inventory[0]);\ninventory.pop();\nconsole.log("After removing last item:", inventory);',
    hint: 'Step 1: Create an array. Step 2: Use .push() to add items. Step 3: Use .pop() to remove items. Step 4: Access items with [index].',
    story: '🎒 **The Advanced Inventory Vault**\n\nYour inventory grows! Learn to manipulate arrays with powerful methods.\n\n**📚 What You\'ll Learn:**\n• Array methods modify arrays in place\n• Add and remove items dynamically\n• Access items by index\n\n**🔮 Array Methods:**\n```javascript\nconst items = [];\nitems.push("sword");        // Add to end\nitems.unshift("shield");    // Add to beginning\nitems.pop();                // Remove from end\nitems.shift();              // Remove from beginning\n```\n\n**✨ Common Array Methods:**\n• `push(item)` - add to end\n• `pop()` - remove from end\n• `unshift(item)` - add to beginning\n• `shift()` - remove from beginning\n• `length` - get length\n\n**🎯 Array Indexing:**\n• `items[0]` - first item\n• `items[items.length - 1]` - last item\n• `items.slice(1, 3)` - items 1 and 2\n\n*Master the art of dynamic inventory management!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 23: If-Else Statements
  {
    title: 'If-Else Statements - Complete Decisions',
    description: 'Use if-else statements to handle both true and false conditions.',
    starterCode: '',
    solution: 'const playerLevel = 15;\nif (playerLevel >= 10) {\n  console.log("You are ready for advanced quests!");\n} else {\n  console.log("Keep training, young adventurer!");\n}',
    hint: 'Step 1: Create a variable with a value. Step 2: Use if (condition) { for true case. Step 3: Use else { for false case.',
    story: '🛤️ **The Complete Crossroads**\n\nYou\'ve learned basic decisions! Now master complete decision-making with if-else statements.\n\n**📚 What You\'ll Learn:**\n• `if-else` statements handle both true and false cases\n• Always provide an alternative action\n• Make complete decision trees\n\n**🔮 If-Else Structure:**\n```javascript\nif (condition) {\n  // Do this if condition is true\n} else {\n  // Do this if condition is false\n}\n```\n\n**✨ If-Else Examples:**\n```javascript\nconst age = 18;\nif (age >= 18) {\n  console.log("You can vote!");\n} else {\n  console.log("You cannot vote yet.");\n}\n\nconst score = 85;\nif (score >= 90) {\n  console.log("Grade: A");\n} else {\n  console.log("Grade: B or lower");\n}\n```\n\n**🎯 When to Use If-Else:**\n• When you need to handle both cases\n• When you want a default action\n• When creating complete decision logic\n\n*Master the art of complete decision-making!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 24: For Loops with Arrays
  {
    title: 'For Loops with Arrays - Processing Collections',
    description: 'Use for loops to process each item in an array.',
    starterCode: '',
    solution: 'const inventory = ["sword", "shield", "potion"];\nconsole.log("Checking inventory:");\nfor (let i = 0; i < inventory.length; i++) {\n  console.log(`- ${inventory[i]}`);\n}\n\nconsole.log("\\nTotal items:", inventory.length);',
    hint: 'Step 1: Create an array. Step 2: Use for (let i = 0; i < array.length; i++) to loop through items. Step 3: Process each item inside the loop.',
    story: '🔄 **The Collection Processor**\n\nYou\'ve mastered basic loops! Now learn to process entire collections of data.\n\n**📚 What You\'ll Learn:**\n• `for` loops can iterate through arrays\n• Process each item in a collection\n• Combine loops with other operations\n\n**🔮 For Loop with Arrays:**\n```javascript\n// Loop through an array\nfor (let i = 0; i < myArray.length; i++) {\n  console.log(myArray[i]);\n}\n\n// Enhanced for loop\nfor (const item of myArray) {\n  console.log(item);\n}\n```\n\n**✨ Common Patterns:**\n• Process all items: `for (let i = 0; i < items.length; i++)`\n• Count items: `for (let i = 0; i < items.length; i++) count++`\n• Find items: `for (let i = 0; i < items.length; i++) if (condition)`\n• Transform items: `for (let i = 0; i < items.length; i++) newItem = transform(items[i])`\n\n**🎯 Loop Control:**\n• `break` - exit loop immediately\n• `continue` - skip to next iteration\n\n*Master the art of collection processing!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 25: Objects
  {
    title: 'Objects - Key-Value Storage',
    description: 'Create an object to store hero information and access values.',
    starterCode: '',
    solution: 'const hero = {\n  name: "Sage",\n  level: 15,\n  health: 100,\n  mana: 50\n};\n\nconsole.log("Hero name:", hero.name);\nconsole.log("Hero level:", hero.level);\nconsole.log("Hero health:", hero.health);',
    hint: 'Step 1: Create an object with curly braces and key-value pairs. Step 2: Access values using dot notation with keys.',
    story: '🗝️ **The Key-Value Vault**\n\nYou discover a magical vault that stores information using keys and values - objects!\n\n**📚 What You\'ll Learn:**\n• Objects store key-value pairs\n• Keys are unique identifiers\n• Values can be any data type\n\n**🔮 Object Creation:**\n```javascript\n// Basic object\nconst hero = {\n  name: "Sage",\n  level: 15,\n  health: 100\n};\n\n// Empty object\nconst inventory = {};\n```\n\n**✨ Object Operations:**\n• Access values: `hero.name` or `hero["name"]`\n• Add/update: `hero.mana = 50`\n• Remove: `delete hero.mana`\n• Check key: `"name" in hero`\n\n**🎯 Object Methods:**\n• `Object.keys(obj)` - get all keys\n• `Object.values(obj)` - get all values\n• `Object.entries(obj)` - get key-value pairs\n\n*Master the art of key-value storage!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Continue with remaining intermediate lessons...
  // Then advanced lessons...
  
  // ADVANCED LEVEL (Lessons 41-50) - Complex Topics
  
  // Lesson 41: Classes
  {
    title: 'Classes - Object-Oriented Magic',
    description: 'Create a Hero class with properties and methods.',
    starterCode: '',
    solution: 'class Hero {\n  constructor(name, level) {\n    this.name = name;\n    this.level = level;\n  }\n  \n  greet() {\n    return `Hello, I\'m ${this.name}, level ${this.level}`;\n  }\n}\n\nconst hero = new Hero("Sage", 15);\nconsole.log(hero.greet());',
    hint: 'Step 1: Define class with class Hero {. Step 2: Create constructor method for initialization. Step 3: Create instance methods. Step 4: Create object with new and call methods.',
    story: '🏰 **The Object-Oriented Sanctum**\n\nYou\'ve reached the advanced chambers! Learn to create your own data types with classes.\n\n**📚 What You\'ll Learn:**\n• Classes define new data types\n• Objects are instances of classes\n• Methods are functions inside classes\n• Properties store object data\n\n**🔮 Class Structure:**\n```javascript\nclass ClassName {\n  constructor(parameter) {\n    this.property = parameter;\n  }\n  \n  method() {\n    return this.property;\n  }\n}\n```\n\n**✨ Class Components:**\n• `constructor` - initialization method\n• `this` - reference to the object\n• Properties - object data\n• Methods - object functions\n\n**🎯 Object-Oriented Benefits:**\n• Organize code into logical units\n• Reuse code through inheritance\n• Encapsulate data and behavior\n• Model real-world concepts\n\n*Master the art of object-oriented programming!*',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  
  // Lesson 42: Fetch API
  {
    title: 'Fetch API - The Network Oracle',
    description: 'Use the fetch API to get data from a server.',
    starterCode: '',
    solution: 'fetch("https://jsonplaceholder.typicode.com/posts/1")\n  .then(response => response.json())\n  .then(data => console.log("Post title:", data.title))\n  .catch(error => console.log("Error:", error));',
    hint: 'Step 1: Use fetch(url) to make a request. Step 2: Use .then() to handle the response. Step 3: Use .json() to parse JSON data. Step 4: Use .catch() for error handling.',
    story: '🌐 **The Network Oracle\'s Chamber**\n\nYou discover ancient scrolls that connect to distant servers. Learn to fetch data from the web!\n\n**📚 What You\'ll Learn:**\n• Fetch API makes HTTP requests\n• Handle asynchronous responses\n• Parse JSON data\n• Handle errors gracefully\n\n**🔮 Fetch API Structure:**\n```javascript\nfetch(url)\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.log(error));\n```\n\n**✨ Fetch Methods:**\n• `fetch(url)` - make GET request\n• `fetch(url, options)` - make POST/PUT/DELETE\n• `response.json()` - parse JSON\n• `response.text()` - get text\n\n**🎯 Error Handling:**\n• Use `.catch()` for network errors\n• Check `response.ok` for HTTP errors\n• Handle different response types\n\n*Master the art of web communication!*',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  
  // Continue with remaining advanced lessons...
  
  // This structure provides proper difficulty progression:
  // Easy (1-20): Basic concepts, simple operations
  // Intermediate (21-40): Building on basics, more complex operations
  // Advanced (41-50): Complex topics, real-world applications
];
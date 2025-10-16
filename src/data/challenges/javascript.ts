import { ChallengeSet } from './types';

export const javascriptChallenges: ChallengeSet = [
  // TUTORIAL LEVELS (1-5)
  {
    title: 'Hello World - Your First Code',
    description: 'Write your very first line of code! Just log "Hello, CodeRealm!" to the console.',
    starterCode: '// Welcome to CodeRealm! This is your first coding adventure.\n// Just write one line to say hello to the console.\n\n// Your first code goes here:\n\n',
    solution: 'console.log("Hello, CodeRealm!");',
    hint: 'Simply write: console.log("Hello, CodeRealm!"); - This tells the computer to display a message. Don\'t forget the quotes around the text!',
    story: 'Welcome, brave adventurer! You\'ve entered the magical world of CodeRealm. Your journey begins with a simple greeting to the ancient console...',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'Variables & Basic Syntax',
    description: 'Create a variable called "heroName" and assign it your name. Then log a welcome message to the console.',
    starterCode: '// Welcome to CodeRealm, brave adventurer!\n// A variable is like a box that holds information\n// Step 1: Create a variable called heroName and give it your name\n// Step 2: Use console.log() to display a message\n\n// Your code goes here:\nconst heroName = "YourName";\nconsole.log("Welcome to CodeRealm, " + heroName + "!");',
    solution: 'const heroName = "Hero";\nconsole.log("Welcome to CodeRealm, " + heroName + "!");',
    hint: 'Step 1: Write "const heroName = "YourName";" to create a variable (replace "YourName" with your actual name). Step 2: Write "console.log("Welcome to CodeRealm, " + heroName + "!");" to display the message. The + sign combines text together!',
    story: 'You stand at the entrance of CodeRealm, a mystical land where code is magic. The ancient guardian asks for your name...',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'Simple Functions',
    description: 'Create a simple function that says hello and use it.',
    starterCode: '// A function is like a recipe that you can use over and over\n// Step 1: Create a function called sayHello\n// Step 2: Make it return "Hello from CodeRealm!"\n// Step 3: Call the function and log the result\n\n// Your code goes here:\nfunction sayHello() {\n  return "Hello from CodeRealm!";\n}\nconsole.log(sayHello());',
    solution: 'function sayHello() {\n  return "Hello from CodeRealm!";\n}\nconsole.log(sayHello());',
    hint: 'Step 1: Write "function sayHello() {" to start the function. Step 2: Inside the function, write "return "Hello from CodeRealm!";". Step 3: Close with "}" and then call "console.log(sayHello());" to use the function.',
    story: 'A village elder asks you to create a simple greeting spell that you can use anytime.',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'Simple Arrays',
    description: 'Create a simple list of items and display it.',
    starterCode: '// An array is like a shopping list - it holds multiple items\n// Step 1: Create an array with 3 items\n// Step 2: Log the array to see all items\n\n// Your code goes here:\nconst items = ["sword", "shield", "potion"];\nconsole.log("My items:", items);',
    solution: 'const items = ["sword", "shield", "potion"];\nconsole.log("My items:", items);',
    hint: 'Step 1: Write "const items = ["sword", "shield", "potion"];" to create an array (use square brackets []). Step 2: Write "console.log("My items:", items);" to display the array.',
    story: 'You prepare your inventory before entering the dungeon.',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'Simple If Statements',
    description: 'Check if a number is big and print a message.',
    starterCode: '// An if statement helps you make decisions in code\n// Step 1: Create a number variable (like const number = 10;)\n// Step 2: Check if the number is greater than 5\n// Step 3: If it is, print "That\'s a big number!"\n\n// Your code goes here:\nconst number = 10;\nif (number > 5) {\n  console.log("That\'s a big number!");\n}',
    solution: 'const number = 10;\nif (number > 5) {\n  console.log("That\'s a big number!");\n}',
    hint: 'Step 1: Write "const number = 10;" to create a number. Step 2: Write "if (number > 5) {" to check if the number is greater than 5. Step 3: Inside the if statement, write "console.log("That\'s a big number!");" and close with "}".',
    story: 'You find a magical number and need to decide if it\'s powerful enough.',
    type: 'tutorial',
    difficulty: 'beginner'
  },

  // CODE PUZZLES (6-10) - Simplified for Beginners!
  {
    title: 'Puzzle: Add Two Numbers',
    description: 'Write a function that takes two numbers and returns their sum. Very simple!',
    starterCode: '// Complete the function below to add two numbers together\n// Example: addNumbers(5, 3) should return 8\n\nfunction addNumbers(a, b) {\n  // Write your code here - just add a and b!\n  \n}\n\n// Test your function\nconsole.log(addNumbers(5, 3));   // Should show: 8\nconsole.log(addNumbers(10, 20)); // Should show: 30',
    solution: 'function addNumbers(a, b) {\n  return a + b;\n}\n\nconsole.log(addNumbers(5, 3));\nconsole.log(addNumbers(10, 20));',
    hint: 'Just return a + b inside the function. That\'s it! Use the return keyword followed by a + b',
    story: 'The merchant needs help adding up the gold coins. Can you help by creating a simple addition function?',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['8', '30'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'function addNumbers(a, b) {\n  return __BLANK1__;\n}\n\nconsole.log(addNumbers(5, 3));\nconsole.log(addNumbers(10, 20));',
      blanks: [
        {
          id: 'BLANK1',
          prompt: 'Add the two parameters and return the result',
          choices: ['a + b', 'a - b', 'a * b', 'a / b'],
          solution: 'a + b',
          hintSteps: [
            'You need to combine a and b into one result.',
            'Use the addition operator to combine them.',
            'Type a + b'
          ]
        }
      ],
      globalHintSteps: [
        'Functions can return values using the return keyword.',
        'The test expects 8 and 30 in the output.'
      ]
    }
  },
  {
    title: 'Puzzle: Check if Number is Even',
    description: 'Create a function that checks if a number is even. Return true if even, false if odd.',
    starterCode: '// A number is even if dividing by 2 gives no remainder\n// Use the % (modulo) operator: number % 2\n// If number % 2 equals 0, it\'s even!\n\nfunction isEven(number) {\n  // Your code here\n  \n}\n\n// Test it\nconsole.log(isEven(4));  // Should show: true\nconsole.log(isEven(7));  // Should show: false',
    solution: 'function isEven(number) {\n  return number % 2 === 0;\n}\n\nconsole.log(isEven(4));\nconsole.log(isEven(7));',
    hint: 'Return the result of: number % 2 === 0 (This checks if the remainder is 0)',
    story: 'The kingdom needs to pair up knights for patrol. Help determine which knight numbers are even for pairing!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['true', 'false'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'function isEven(number) {\n  return __BLANK1__;\n}\n\nconsole.log(isEven(4));\nconsole.log(isEven(7));',
      blanks: [
        {
          id: 'BLANK1',
          prompt: 'Check if number has no remainder when divided by 2',
          choices: ['number % 2 === 0', 'number / 2 === 0', 'number % 3 === 0'],
          solution: 'number % 2 === 0',
          hintSteps: [
            'Even numbers are divisible by 2.',
            'Use the modulo operator % to check remainders.',
            'Compare the remainder to 0: number % 2 === 0'
          ]
        }
      ]
    }
  },
  {
    title: 'Puzzle: Get First Item from Array',
    description: 'Write a function that returns the first item from an array.',
    starterCode: '// Arrays are like lists that start counting from 0\n// The first item is at position [0]\n\nfunction getFirst(array) {\n  // Return the first item (hint: use array[0])\n  \n}\n\n// Test with these arrays\nconst fruits = ["apple", "banana", "orange"];\nconst numbers = [10, 20, 30];\n\nconsole.log(getFirst(fruits));   // Should show: "apple"\nconsole.log(getFirst(numbers));  // Should show: 10',
    solution: 'function getFirst(array) {\n  return array[0];\n}\n\nconst fruits = ["apple", "banana", "orange"];\nconst numbers = [10, 20, 30];\n\nconsole.log(getFirst(fruits));\nconsole.log(getFirst(numbers));',
    hint: 'Simply return array[0] - that\'s the first element!',
    story: 'The treasure chest has many items. Which one is on top? Get the first item to find out!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['apple', '10'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'function getFirst(array) {\n  return __BLANK1__;\n}\n\nconst fruits = ["apple", "banana", "orange"];\nconst numbers = [10, 20, 30];\n\nconsole.log(getFirst(fruits));\nconsole.log(getFirst(numbers));',
      blanks: [
        {
          id: 'BLANK1',
          prompt: 'Access the first element in the array',
          choices: ['array[0]', 'array[1]', 'array[-1]'],
          solution: 'array[0]',
          hintSteps: [
            'Arrays are zero-indexed.',
            'The first element is at index 0.',
            'Use array[0]'
          ]
        }
      ]
    }
  },
  {
    title: 'Puzzle: Count Array Length',
    description: 'Create a function that counts how many items are in an array.',
    starterCode: '// Every array has a .length property that tells you how many items it has\n\nfunction countItems(array) {\n  // Return the length of the array\n  \n}\n\n// Test it\nconst colors = ["red", "blue", "green"];\nconst ages = [5, 10, 15, 20, 25];\n\nconsole.log(countItems(colors));  // Should show: 3\nconsole.log(countItems(ages));    // Should show: 5',
    solution: 'function countItems(array) {\n  return array.length;\n}\n\nconst colors = ["red", "blue", "green"];\nconst ages = [5, 10, 15, 20, 25];\n\nconsole.log(countItems(colors));\nconsole.log(countItems(ages));',
    hint: 'Use array.length to get the number of items. Just return that!',
    story: 'The wizard needs to count how many spell ingredients are in the potion list. Help by counting the array!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['3', '5'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'function countItems(array) {\n  return __BLANK1__;\n}\n\nconst colors = ["red", "blue", "green"];\nconst ages = [5, 10, 15, 20, 25];\n\nconsole.log(countItems(colors));\nconsole.log(countItems(ages));',
      blanks: [
        {
          id: 'BLANK1',
          prompt: 'Return how many items are inside the array',
          choices: ['array.length', 'array.size()', 'length(array)'],
          solution: 'array.length',
          hintSteps: [
            'Arrays have a property that tells how many items they contain.',
            'In JavaScript it is a property, not a function.',
            'Use array.length'
          ]
        }
      ]
    }
  },
  {
    title: 'Puzzle: Greet by Name',
    description: 'Make a function that takes a name and returns a greeting message.',
    starterCode: '// Create a friendly greeting message\n// Use template literals with backticks: `Hello ${name}!`\n\nfunction greet(name) {\n  // Return a greeting like "Hello Hero!"\n  \n}\n\n// Test your function\nconsole.log(greet("Hero"));      // Should show: "Hello Hero!"\nconsole.log(greet("Alice"));     // Should show: "Hello Alice!"',
    solution: 'function greet(name) {\n  return `Hello ${name}!`;\n}\n\nconsole.log(greet("Hero"));\nconsole.log(greet("Alice"));',
    hint: 'Use backticks and write: return `Hello ${name}!` (The ${name} puts the name in the message)',
    story: 'The friendly innkeeper wants to greet every adventurer by name. Create a greeting function to help!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['Hello Hero!', 'Hello Alice!'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'function greet(name) {\n  return __BLANK1__;\n}\n\nconsole.log(greet("Hero"));\nconsole.log(greet("Alice"));',
      blanks: [
        {
          id: 'BLANK1',
          prompt: 'Return a greeting using the name parameter',
          choices: ['`Hello ${name}!`', '"Hello ${name}!"', '"Hello " + name + "!"'],
          solution: '`Hello ${name}!`',
          hintSteps: [
            'Use a template literal to inject the name.',
            'Template literals use backticks: ` like this `',
            'Type: `Hello ${name}!`'
          ]
        }
      ]
    }
  },

  // INTERMEDIATE CHALLENGES (11-15)
  {
    title: 'Simple Math Operations',
    description: 'Create two numbers and perform basic math operations (add, subtract, multiply).',
    starterCode: '// Step 1: Create two number variables (like const a = 10; const b = 5;)\n// Step 2: Add them together and log the result\n// Step 3: Subtract b from a and log the result\n// Step 4: Multiply them and log the result\n\n// Your code goes here:\n\n',
    solution: 'const a = 10;\nconst b = 5;\nconsole.log("Addition:", a + b);\nconsole.log("Subtraction:", a - b);\nconsole.log("Multiplication:", a * b);',
    hint: 'Step 1: Write "const a = 10;" and "const b = 5;" to create numbers. Step 2: Use "console.log("Addition:", a + b);" for addition. Step 3: Use "console.log("Subtraction:", a - b);" for subtraction. Step 4: Use "console.log("Multiplication:", a * b);" for multiplication.',
    story: 'You learn the ancient art of mathematical magic from the village calculator.',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  {
    title: 'String Operations',
    description: 'Work with text strings - combine them, find their length, and convert to uppercase.',
    starterCode: '// Step 1: Create two string variables (like const firstName = "Hero"; const lastName = "Adventurer";)\n// Step 2: Combine them into a full name and log it\n// Step 3: Log the length of the full name\n// Step 4: Log the full name in uppercase\n\n// Your code goes here:\n\n',
    solution: 'const firstName = "Hero";\nconst lastName = "Adventurer";\nconst fullName = firstName + " " + lastName;\nconsole.log("Full name:", fullName);\nconsole.log("Name length:", fullName.length);\nconsole.log("Uppercase:", fullName.toUpperCase());',
    hint: 'Step 1: Write "const firstName = "Hero";" and "const lastName = "Adventurer";". Step 2: Combine with "const fullName = firstName + " " + lastName;". Step 3: Use "fullName.length" for length. Step 4: Use "fullName.toUpperCase()" for uppercase.',
    story: 'You learn to manipulate the ancient texts and inscriptions found in the temple.',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  {
    title: 'If Statements & Comparisons',
    description: 'Use if statements to make decisions based on conditions.',
    starterCode: '// Step 1: Create a variable for your level (like const level = 5;)\n// Step 2: Check if level is greater than 3\n// Step 3: If true, log "You are experienced!"\n// Step 4: If false, log "Keep practicing!"\n\n// Your code goes here:\n\n',
    solution: 'const level = 5;\nif (level > 3) {\n  console.log("You are experienced!");\n} else {\n  console.log("Keep practicing!");\n}',
    hint: 'Step 1: Write "const level = 5;". Step 2: Write "if (level > 3) {". Step 3: Inside the if, write "console.log("You are experienced!");". Step 4: Add "} else { console.log("Keep practicing!"); }" to handle the other case.',
    story: 'You learn to make wise decisions based on your experience level in the realm.',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  {
    title: 'Modules & Import',
    description: 'Create a module with an export and import it.',
    starterCode: '// Create a utility function and export it\n\n',
    solution: 'function calculateDamage(attack, defense) {\n  return Math.max(1, attack - defense);\n}\n\nfunction formatMessage(hero, damage) {\n  return `Welcome to CodeRealm, ${hero}! Damage: ${damage}`;\n}\n\nconsole.log(formatMessage("Warrior", calculateDamage(10, 3)));',
    hint: 'Create functions and use them together.',
    story: 'You organize your spells into reusable modules.',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  {
    title: 'Closures & Hoisting',
    description: 'Create a closure that remembers a counter value.',
    starterCode: '// Create a function that returns another function\n\n',
    solution: 'function createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return `Welcome to CodeRealm, attempt ${count}!`;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter());\nconsole.log(counter());',
    hint: 'Return a function from another function to create a closure.',
    story: 'You learn to create persistent memories in your spells.',
    type: 'tutorial',
    difficulty: 'advanced'
  },

  // ADVANCED CHALLENGES (16-20)
  {
    title: 'Prototype & Classes',
    description: 'Create a class with methods and instantiate it.',
    starterCode: '// Create a Hero class with attack and defend methods\n\n',
    solution: 'class Hero {\n  constructor(name, health) {\n    this.name = name;\n    this.health = health;\n  }\n  \n  attack() {\n    return `Welcome to CodeRealm, ${this.name} attacks!`;\n  }\n  \n  defend() {\n    this.health += 10;\n    return `Welcome to CodeRealm, ${this.name} defends! Health: ${this.health}`;\n  }\n}\n\nconst hero = new Hero("Knight", 100);\nconsole.log(hero.attack());\nconsole.log(hero.defend());',
    hint: 'Use class keyword with constructor and methods.',
    story: 'You forge a legendary hero with unique abilities.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Fetch API',
    description: 'Simulate fetching data and handle the response.',
    starterCode: '// Simulate an API call (use setTimeout instead of fetch)\n\n',
    solution: 'function fetchQuestData() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({ quest: "Defeat the Dragon", reward: "Legendary Sword" });\n    }, 500);\n  });\n}\n\nfetchQuestData().then(data => {\n  console.log(`Welcome to CodeRealm, new quest: ${data.quest}`);\n  console.log(`Reward: ${data.reward}`);\n});',
    hint: 'Use Promise with setTimeout to simulate async data fetching.',
    story: 'You contact the quest board for new adventures.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Local Storage',
    description: 'Save and retrieve data from localStorage.',
    starterCode: '// Save progress and retrieve it\n\n',
    solution: 'const progress = { level: 8, score: 850, name: "Hero" };\nlocalStorage.setItem("gameProgress", JSON.stringify(progress));\n\nconst saved = JSON.parse(localStorage.getItem("gameProgress"));\nconsole.log(`Welcome to CodeRealm, ${saved.name}!`);\nconsole.log(`Level: ${saved.level}, Score: ${saved.score}`);',
    hint: 'Use localStorage.setItem() and localStorage.getItem() with JSON.',
    story: 'You save your progress in the ancient archives.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Form Validation',
    description: 'Validate user input and provide feedback.',
    starterCode: 'const userInput = "test@email.com";\nconst password = "password123";\n\n',
    solution: 'const userInput = "test@email.com";\nconst password = "password123";\n\nfunction validateEmail(email) {\n  return email.includes("@") && email.includes(".");\n}\n\nfunction validatePassword(pass) {\n  return pass.length >= 8;\n}\n\nif (validateEmail(userInput) && validatePassword(password)) {\n  console.log("Welcome to CodeRealm, valid user!");\n} else {\n  console.log("Welcome to CodeRealm, but validation failed!");\n}',
    hint: 'Create validation functions and check both email and password.',
    story: 'You guard the entrance with validation spells.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Regular Expressions',
    description: 'Use regex to validate and extract data from strings.',
    starterCode: 'const text = "Contact: hero@coderealm.com or call 555-1234";\n\n',
    solution: 'const text = "Contact: hero@coderealm.com or call 555-1234";\n\nconst emailRegex = /[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}/;\nconst phoneRegex = /\\d{3}-\\d{4}/;\n\nconst email = text.match(emailRegex);\nconst phone = text.match(phoneRegex);\n\nconsole.log("Welcome to CodeRealm, data extracted!");\nconsole.log(`Email: ${email[0]}, Phone: ${phone[0]}`);',
    hint: 'Use .match() with regex patterns to find email and phone.',
    story: 'You decipher ancient texts using pattern recognition.',
    type: 'tutorial',
    difficulty: 'advanced'
  }
];


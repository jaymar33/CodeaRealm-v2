import { ChallengeSet } from './types';

export const pythonChallenges: ChallengeSet = [
  // EASY LEVEL (Lessons 1-20) - True Beginner Concepts
  
  // Lesson 1: Hello World
  {
    title: 'Hello World - Your First Spell',
    description: 'Print "Hello, CodeRealm!" to greet the Python Oracle.',
    starterCode: '',
    solution: 'print("Hello, CodeRealm!")',
    hint: 'Use the print() function with quotes around your message: print("Hello, CodeRealm!")',
    story: '🏰 **Welcome to the Python Sanctum!**\n\nYou stand before the ancient Python Oracle, ready to learn your first spell.\n\n**📚 What You\'ll Learn:**\n• Python uses `print()` to display messages\n• Text must be wrapped in quotes: `"Hello, World!"`\n• Python is case-sensitive and uses indentation\n\n**🔮 Your First Spell:**\nThe Oracle teaches you the sacred `print()` function - the foundation of all Python magic.\n\n**✨ Syntax Rules:**\n1. Always use parentheses: `print()`\n2. Wrap text in quotes: `"your message"`\n3. End with a new line (automatic)\n\n*Cast your first spell and greet the CodeRealm!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 2: Variables
  {
    title: 'Variables - Storing Magical Energy',
    description: 'Create a variable to store your hero\'s name and print a welcome message.',
    starterCode: '',
    solution: 'hero_name = "Sage"\nprint(f"Welcome to CodeRealm, {hero_name}!")',
    hint: 'Step 1: Create a variable with hero_name = "YourName". Step 2: Use f-string formatting: print(f"Welcome to CodeRealm, {hero_name}!")',
    story: '🔮 **The Variable Crystal Chamber**\n\nDeep in the Python Sanctum, you discover crystals that can store magical energy - variables!\n\n**📚 What You\'ll Learn:**\n• Variables store data for later use\n• Python uses `=` to assign values\n• f-strings allow variable insertion: `f"Hello {name}"`\n\n**💎 Variable Rules:**\n1. Start with letter or underscore: `hero_name` ✅\n2. Use descriptive names: `player_level` ✅\n3. No spaces: `hero name` ❌\n\n**🔮 Data Types:**\n• Strings: `"text"` (wrapped in quotes)\n• Numbers: `42` (no quotes)\n• Booleans: `True` or `False`\n\n**✨ f-String Magic:**\nUse `f"text {variable}"` to insert variables into strings!\n\n*Store your hero\'s identity and announce your arrival!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 3: Simple Functions
  {
    title: 'Simple Functions - Your First Spell',
    description: 'Create a simple function that says hello and use it.',
    starterCode: '',
    solution: 'def say_hello():\n    return "Hello from CodeRealm!"\n\nprint(say_hello())',
    hint: 'Step 1: Define function with def say_hello():. Step 2: Return a message. Step 3: Call the function with print(say_hello()).',
    story: '🧙‍♂️ **The Function Grimoire**\n\nA wise sage approaches: "Functions are reusable spells that can be cast again and again!"\n\n**📚 What You\'ll Learn:**\n• Functions are reusable code blocks\n• `def` keyword starts function definition\n• `return` sends data back to caller\n• Functions can be called multiple times\n\n**🔮 Function Anatomy:**\n```python\ndef function_name():\n    # Function body (indented)\n    return result\n```\n\n**✨ Function Rules:**\n1. Use `def` to define: `def my_function():`\n2. Indent function body (4 spaces)\n3. Use `return` to send back data\n4. Call with parentheses: `my_function()`\n\n**🎯 Why Functions Matter:**\n• Write once, use many times\n• Organize code into logical pieces\n• Make code easier to read and debug\n\n*Create your first magical function and unlock the power of reusable code!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 4: Simple Lists
  {
    title: 'Simple Lists - Magical Containers',
    description: 'Create a simple list of items and display it.',
    starterCode: '',
    solution: 'items = ["sword", "shield", "potion"]\nprint("My items:", items)',
    hint: 'Step 1: Create a list with square brackets: ["item1", "item2"]. Step 2: Display it with print().',
    story: '🎒 **The Inventory Vault**\n\nBefore venturing forth, you must organize your belongings. Lists are magical containers that hold multiple treasures!\n\n**📚 What You\'ll Learn:**\n• Lists store multiple items in order\n• Use square brackets `[]` to create lists\n• Items are separated by commas\n• Lists can hold different data types\n\n**🔮 List Creation:**\n```python\n# String list\nitems = ["sword", "shield", "potion"]\n\n# Number list\nnumbers = [1, 2, 3, 4, 5]\n\n# Mixed list\nmixed = ["text", 42, True]\n```\n\n**✨ List Operations:**\n• Access items: `items[0]` (first item)\n• Get length: `len(items)`\n• Add items: `items.append("new_item")`\n• Remove items: `items.remove("item")`\n\n**🎯 List Indexing:**\n• First item: `items[0]`\n• Last item: `items[-1]`\n• Range: `items[1:3]` (items 1 and 2)\n\n*Organize your magical arsenal and prepare for adventure!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 5: Simple Conditionals
  {
    title: 'Simple Conditionals - The Path of Decisions',
    description: 'Use a simple if statement to check if a number is big.',
    starterCode: '',
    solution: 'number = 10\nif number > 5:\n    print("That\'s a big number!")',
    hint: 'Step 1: Create a variable with a number. Step 2: Use if number > 5: to check. Step 3: Print a message inside the if block.',
    story: '🛤️ **The Crossroads of Fate**\n\nYou encounter a crossroads. Two paths stretch before you - one leads to safety, the other to adventure. Your code must make wise decisions!\n\n**📚 What You\'ll Learn:**\n• `if` statements make decisions based on conditions\n• Conditions use comparison operators\n• Code inside `if` blocks runs only when condition is true\n\n**🔮 Simple Conditional Structure:**\n```python\nif condition:\n    # Do this if condition is True\n```\n\n**✨ Comparison Operators:**\n• `==` - equal to\n• `!=` - not equal to\n• `>` - greater than\n• `<` - less than\n• `>=` - greater than or equal\n• `<=` - less than or equal\n\n**🎯 Boolean Values:**\n• `True` - condition is met\n• `False` - condition is not met\n• Conditions evaluate to True or False\n\n*Master the art of decision-making and choose your path wisely!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },

  // Lesson 6: Simple Loops
  {
    title: 'Simple Loops - The Cycle of Repetition',
    description: 'Use a simple for loop to print numbers 1 to 5.',
    starterCode: '',
    solution: 'for i in range(1, 6):\n    print(i)',
    hint: 'Use for i in range(1, 6): to loop from 1 to 5. Print i inside the loop.',
    story: '🔄 **The Circle of Repetition**\n\nA mysterious merchant approaches: "I need help counting gold coins! Can you automate this repetitive task?"\n\n**📚 What You\'ll Learn:**\n• `for` loops repeat code for each item in a sequence\n• `range()` creates sequences of numbers\n• Loops automate repetitive tasks\n\n**🔮 Simple For Loop:**\n```python\n# Loop with range\nfor i in range(5):  # 0, 1, 2, 3, 4\n    print(i)\n\n# Loop with specific range\nfor i in range(1, 6):  # 1, 2, 3, 4, 5\n    print(i)\n```\n\n**🔍 Range Function:**\n• `range(5)` - 0, 1, 2, 3, 4\n• `range(1, 6)` - 1, 2, 3, 4, 5\n• `range(0, 10, 2)` - 0, 2, 4, 6, 8\n\n**💡 Common Patterns:**\n• Count iterations: `for i in range(n):`\n• Process sequences: `for item in sequence:`\n\n*Master the art of repetition and automate repetitive tasks!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 7: String Basics
  {
    title: 'String Basics - Text Magic',
    description: 'Create a string and use basic string methods.',
    starterCode: '',
    solution: 'name = "CodeRealm Hero"\nprint("Original:", name)\nprint("Uppercase:", name.upper())\nprint("Lowercase:", name.lower())',
    hint: 'Step 1: Create a string variable. Step 2: Use .upper() and .lower() methods. Step 3: Print the results.',
    story: '📜 **The Text Scroll Chamber**\n\nAncient scrolls contain secrets. Learn string manipulation to decode hidden messages!\n\n**📚 What You\'ll Learn:**\n• Strings are sequences of characters\n• String methods modify and analyze text\n• Basic string operations are essential\n\n**🔮 String Creation:**\n```python\n# Single quotes\nname = \'Hero\'\n\n# Double quotes\nmessage = "Welcome!"\n\n# Triple quotes for multi-line\nstory = """\nThis is a\nmulti-line string\n"""\n```\n\n**✨ Basic String Methods:**\n• `.upper()` - convert to uppercase\n• `.lower()` - convert to lowercase\n• `.strip()` - remove whitespace\n• `len(text)` - string length\n\n**🎯 String Indexing:**\n• `text[0]` - first character\n• `text[-1]` - last character\n• `text[1:4]` - characters 1, 2, 3\n\n*Master the art of text manipulation and decode ancient secrets!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 8: Basic Math
  {
    title: 'Basic Math - The Calculator Stone',
    description: 'Perform basic arithmetic operations with numbers.',
    starterCode: '',
    solution: 'print("Addition:", 10 + 5)\nprint("Subtraction:", 10 - 5)\nprint("Multiplication:", 10 * 5)\nprint("Division:", 10 / 5)',
    hint: 'Use basic operators +, -, *, / with numbers. Print the results.',
    story: '🧮 **The Calculator Stone Chamber**\n\nYou find a mystical stone that performs mathematical operations. Master arithmetic to unlock its true potential!\n\n**📚 What You\'ll Learn:**\n• Python supports integers and floating-point numbers\n• Basic arithmetic operators perform calculations\n• Variables can store numeric results\n\n**🔮 Number Types:**\n• Integers: `42`, `-10`, `0`\n• Floats: `3.14`, `-2.5`, `0.0`\n\n**✨ Arithmetic Operators:**\n• `+` - addition\n• `-` - subtraction\n• `*` - multiplication\n• `/` - division (returns float)\n• `//` - floor division (returns integer)\n• `%` - modulus (remainder)\n• `**` - exponentiation (power)\n\n**🎯 Order of Operations:**\n1. Parentheses: `()`\n2. Exponentiation: `**`\n3. Multiplication/Division: `*`, `/`, `//`, `%`\n4. Addition/Subtraction: `+`, `-`\n\n*Master the art of calculation and unlock mathematical mysteries!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 9: Simple Comparisons
  {
    title: 'Simple Comparisons - The Comparator',
    description: 'Use comparison operators to compare two numbers.',
    starterCode: '',
    solution: 'a = 10\nb = 5\nprint(f"{a} > {b}:", a > b)\nprint(f"{a} == {b}:", a == b)\nprint(f"{a} != {b}:", a != b)',
    hint: 'Step 1: Create two number variables. Step 2: Use comparison operators >, ==, !=. Step 3: Print the results.',
    story: '⚖️ **The Comparator\'s Scale**\n\nTwo warriors challenge you to judge who is stronger. Use comparison operators to determine truth from falsehood!\n\n**📚 What You\'ll Learn:**\n• Comparison operators return True or False\n• Use comparisons in if statements\n• Compare different data types\n\n**🔮 Comparison Operators:**\n• `==` - equal to\n• `!=` - not equal to\n• `>` - greater than\n• `<` - less than\n• `>=` - greater than or equal\n• `<=` - less than or equal\n\n**✨ Comparison Examples:**\n```python\n# Numbers\n5 == 5        # True\n10 > 5        # True\n3 != 7        # True\n\n# Variables\nlevel = 15\nlevel >= 10   # True\nlevel == 20   # False\n```\n\n**🔍 Comparison Rules:**\n• Numbers compare by value\n• Strings compare alphabetically\n• Different types cannot be compared\n\n*Master the art of comparison and make wise judgments!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 10: String Concatenation
  {
    title: 'String Concatenation - The Great Merger',
    description: 'Combine two strings using the + operator.',
    starterCode: '',
    solution: 'first_name = "Code"\nlast_name = "Realm"\nfull_name = first_name + " " + last_name\nprint("Full name:", full_name)',
    hint: 'Step 1: Create two string variables. Step 2: Use + to combine them. Step 3: Add a space between them.',
    story: '🔗 **The Great Merger Portal**\n\nTwo villages need to unite their resources. Learn to concatenate strings and merge data together!\n\n**📚 What You\'ll Learn:**\n• String concatenation combines multiple strings\n• Use `+` operator to join strings\n• Add spaces between words\n\n**🔮 Concatenation Methods:**\n\n**1. Plus Operator (+):**\n```python\nfirst = "Hello"\nlast = "World"\nresult = first + " " + last  # "Hello World"\n```\n\n**2. f-Strings (Recommended):**\n```python\nname = "Alice"\nage = 25\nmessage = f"Hello {name}, you are {age} years old!"\n```\n\n**✨ Basic Concatenation:**\n• Simple joining: `"Hello" + " " + "World"`\n• With variables: `name + " is " + str(age)`\n• Add spaces: `first + " " + last`\n\n**🎯 When to Use Each Method:**\n• `+` - simple concatenation\n• f-strings - variable insertion (preferred)\n\n*Master the art of string merging and unite the villages!*',
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
    solution: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Sage"))\nprint(greet("Knight"))',
    hint: 'Step 1: Define function with parameter: def greet(name):. Step 2: Use the parameter inside the function. Step 3: Call with different values.',
    story: '🧙‍♂️ **The Advanced Grimoire**\n\nYou\'ve mastered basic functions! Now learn to create spells that accept different ingredients (parameters)!\n\n**📚 What You\'ll Learn:**\n• Functions can accept parameters (inputs)\n• Parameters make functions more flexible\n• Same function can work with different data\n\n**🔮 Function with Parameters:**\n```python\ndef function_name(parameter):\n    # Use parameter inside function\n    return result\n\n# Call with different values\nfunction_name("value1")\nfunction_name("value2")\n```\n\n**✨ Parameter Rules:**\n1. Define parameters in parentheses: `def greet(name):`\n2. Use parameters inside function body\n3. Call with actual values: `greet("Alice")`\n4. Parameters are local to the function\n\n**🎯 Why Parameters Matter:**\n• Make functions reusable with different data\n• Reduce code duplication\n• Create flexible, powerful functions\n\n*Master the art of parameterized spells and create flexible magic!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 22: Lists with Methods
  {
    title: 'Lists with Methods - Advanced Containers',
    description: 'Use list methods to add, remove, and manipulate items.',
    starterCode: '',
    solution: 'inventory = ["sword"]\ninventory.append("shield")\ninventory.append("potion")\nprint("Inventory:", inventory)\nprint("First item:", inventory[0])\ninventory.remove("sword")\nprint("After removing sword:", inventory)',
    hint: 'Step 1: Create a list. Step 2: Use .append() to add items. Step 3: Use .remove() to remove items. Step 4: Access items with [index].',
    story: '🎒 **The Advanced Inventory Vault**\n\nYour inventory grows! Learn to manipulate lists with powerful methods.\n\n**📚 What You\'ll Learn:**\n• List methods modify lists in place\n• Add and remove items dynamically\n• Access items by index\n\n**🔮 List Methods:**\n```python\nitems = []\nitems.append("sword")     # Add to end\nitems.insert(0, "shield")  # Insert at position\nitems.remove("sword")      # Remove first occurrence\nitems.pop()               # Remove and return last item\n```\n\n**✨ Common List Methods:**\n• `append(item)` - add to end\n• `insert(index, item)` - insert at position\n• `remove(item)` - remove first occurrence\n• `pop()` - remove and return last item\n• `len(list)` - get length\n\n**🎯 List Indexing:**\n• `items[0]` - first item\n• `items[-1]` - last item\n• `items[1:3]` - items 1 and 2\n\n*Master the art of dynamic inventory management!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 23: If-Else Statements
  {
    title: 'If-Else Statements - Complete Decisions',
    description: 'Use if-else statements to handle both true and false conditions.',
    starterCode: '',
    solution: 'player_level = 15\nif player_level >= 10:\n    print("You are ready for advanced quests!")\nelse:\n    print("Keep training, young adventurer!")',
    hint: 'Step 1: Create a variable with a value. Step 2: Use if condition: for true case. Step 3: Use else: for false case.',
    story: '🛤️ **The Complete Crossroads**\n\nYou\'ve learned basic decisions! Now master complete decision-making with if-else statements.\n\n**📚 What You\'ll Learn:**\n• `if-else` statements handle both true and false cases\n• Always provide an alternative action\n• Make complete decision trees\n\n**🔮 If-Else Structure:**\n```python\nif condition:\n    # Do this if condition is True\nelse:\n    # Do this if condition is False\n```\n\n**✨ If-Else Examples:**\n```python\nage = 18\nif age >= 18:\n    print("You can vote!")\nelse:\n    print("You cannot vote yet.")\n\nscore = 85\nif score >= 90:\n    print("Grade: A")\nelse:\n    print("Grade: B or lower")\n```\n\n**🎯 When to Use If-Else:**\n• When you need to handle both cases\n• When you want a default action\n• When creating complete decision logic\n\n*Master the art of complete decision-making!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 24: For Loops with Lists
  {
    title: 'For Loops with Lists - Processing Collections',
    description: 'Use for loops to process each item in a list.',
    starterCode: '',
    solution: 'inventory = ["sword", "shield", "potion"]\nprint("Checking inventory:")\nfor item in inventory:\n    print(f"- {item}")\n\nprint("\\nTotal items:", len(inventory))',
    hint: 'Step 1: Create a list. Step 2: Use for item in list: to loop through items. Step 3: Process each item inside the loop.',
    story: '🔄 **The Collection Processor**\n\nYou\'ve mastered basic loops! Now learn to process entire collections of data.\n\n**📚 What You\'ll Learn:**\n• `for` loops can iterate through lists\n• Process each item in a collection\n• Combine loops with other operations\n\n**🔮 For Loop with Lists:**\n```python\n# Loop through a list\nfor item in my_list:\n    print(item)\n\n# Loop with index\nfor i, item in enumerate(my_list):\n    print(f"{i}: {item}")\n```\n\n**✨ Common Patterns:**\n• Process all items: `for item in items:`\n• Count items: `for item in items: count += 1`\n• Find items: `for item in items: if condition:`\n• Transform items: `for item in items: new_item = transform(item)`\n\n**🎯 Loop Control:**\n• `break` - exit loop immediately\n• `continue` - skip to next iteration\n• `else` - runs when loop completes normally\n\n*Master the art of collection processing!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 25: Dictionaries
  {
    title: 'Dictionaries - Key-Value Storage',
    description: 'Create a dictionary to store hero information and access values.',
    starterCode: '',
    solution: 'hero = {\n    "name": "Sage",\n    "level": 15,\n    "health": 100,\n    "mana": 50\n}\n\nprint("Hero name:", hero["name"])\nprint("Hero level:", hero["level"])\nprint("Hero health:", hero["health"])',
    hint: 'Step 1: Create a dictionary with curly braces and key-value pairs. Step 2: Access values using square brackets with keys.',
    story: '🗝️ **The Key-Value Vault**\n\nYou discover a magical vault that stores information using keys and values - dictionaries!\n\n**📚 What You\'ll Learn:**\n• Dictionaries store key-value pairs\n• Keys are unique identifiers\n• Values can be any data type\n\n**🔮 Dictionary Creation:**\n```python\n# Basic dictionary\nhero = {\n    "name": "Sage",\n    "level": 15,\n    "health": 100\n}\n\n# Empty dictionary\ninventory = {}\n```\n\n**✨ Dictionary Operations:**\n• Access values: `hero["name"]`\n• Add/update: `hero["mana"] = 50`\n• Remove: `del hero["mana"]`\n• Check key: `"name" in hero`\n\n**🎯 Dictionary Methods:**\n• `keys()` - get all keys\n• `values()` - get all values\n• `items()` - get key-value pairs\n• `get(key, default)` - safe access\n\n*Master the art of key-value storage!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Continue with remaining intermediate lessons...
  // Then advanced lessons...
  
  // ADVANCED LEVEL (Lessons 41-50) - Complex Topics
  
  // Lesson 41: Classes and Objects
  {
    title: 'Classes and Objects - Object-Oriented Magic',
    description: 'Create a Hero class with properties and methods.',
    starterCode: '',
    solution: 'class Hero:\n    def __init__(self, name, level):\n        self.name = name\n        self.level = level\n    \n    def greet(self):\n        return f"Hello, I\'m {self.name}, level {self.level}"\n\nhero = Hero("Sage", 15)\nprint(hero.greet())',
    hint: 'Step 1: Define class with class Hero:. Step 2: Create __init__ method for constructor. Step 3: Create instance methods. Step 4: Create object and call methods.',
    story: '🏰 **The Object-Oriented Sanctum**\n\nYou\'ve reached the advanced chambers! Learn to create your own data types with classes and objects.\n\n**📚 What You\'ll Learn:**\n• Classes define new data types\n• Objects are instances of classes\n• Methods are functions inside classes\n• Properties store object data\n\n**🔮 Class Structure:**\n```python\nclass ClassName:\n    def __init__(self, parameter):\n        self.property = parameter\n    \n    def method(self):\n        return self.property\n```\n\n**✨ Class Components:**\n• `__init__` - constructor method\n• `self` - reference to the object\n• Properties - object data\n• Methods - object functions\n\n**🎯 Object-Oriented Benefits:**\n• Organize code into logical units\n• Reuse code through inheritance\n• Encapsulate data and behavior\n• Model real-world concepts\n\n*Master the art of object-oriented programming!*',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  
  // Lesson 42: File Handling
  {
    title: 'File Handling - The Scroll Keeper',
    description: 'Read from and write to files using Python.',
    starterCode: '',
    solution: '# Write to file\nwith open("quest_log.txt", "w") as file:\n    file.write("Quest 1: Defeat the dragon\\n")\n    file.write("Quest 2: Find the treasure\\n")\n\n# Read from file\nwith open("quest_log.txt", "r") as file:\n    content = file.read()\n    print(content)',
    hint: 'Step 1: Use with open(filename, "w") to write. Step 2: Use file.write() to write content. Step 3: Use with open(filename, "r") to read. Step 4: Use file.read() to get content.',
    story: '📜 **The Scroll Keeper\'s Chamber**\n\nYou discover ancient scrolls that contain quest information. Learn to read and write data to files!\n\n**📚 What You\'ll Learn:**\n• Files store data persistently\n• Read data from files\n• Write data to files\n• Handle file operations safely\n\n**🔮 File Operations:**\n```python\n# Write to file\nwith open("filename.txt", "w") as file:\n    file.write("content")\n\n# Read from file\nwith open("filename.txt", "r") as file:\n    content = file.read()\n```\n\n**✨ File Modes:**\n• `"r"` - read mode\n• `"w"` - write mode (overwrites)\n• `"a"` - append mode\n• `"r+"` - read and write\n\n**🎯 File Methods:**\n• `read()` - read entire file\n• `readline()` - read one line\n• `readlines()` - read all lines\n• `write()` - write content\n• `writelines()` - write multiple lines\n\n*Master the art of file manipulation!*',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  
  // Continue with remaining advanced lessons...
  
  // This structure provides proper difficulty progression:
  // Easy (1-20): Basic concepts, simple operations
  // Intermediate (21-40): Building on basics, more complex operations
  // Advanced (41-50): Complex topics, real-world applications
];
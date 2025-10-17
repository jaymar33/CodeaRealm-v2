import { ChallengeSet } from './types';

export const javaChallenges: ChallengeSet = [
  // EASY LEVEL (Lessons 1-20) - True Beginner Concepts
  
  // Lesson 1: Hello World
  {
    title: 'Hello World - Your First Spell',
    description: 'Print "Hello, CodeRealm!" to greet the Java Oracle.',
    starterCode: '',
    solution: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, CodeRealm!");\n  }\n}',
    hint: 'Use System.out.println() with quotes around your message: System.out.println("Hello, CodeRealm!");',
    story: '🏰 **Welcome to the Java Kingdom!**\n\nYou stand before the ancient Java Oracle, ready to learn your first spell.\n\n**📚 What You\'ll Learn:**\n• Java uses `System.out.println()` to display messages\n• Text must be wrapped in quotes: `"Hello, World!"`\n• Java requires a class and main method\n\n**🔮 Your First Spell:**\nThe Oracle teaches you the sacred `System.out.println()` function - the foundation of all Java magic.\n\n**✨ Syntax Rules:**\n1. Always use parentheses: `System.out.println()`\n2. Wrap text in quotes: `"your message"`\n3. End with a semicolon: `;`\n4. Must be inside a class and main method\n\n*Cast your first spell and greet the CodeRealm!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 2: Variables
  {
    title: 'Variables - Storing Magical Energy',
    description: 'Create a variable to store your hero\'s name and display a welcome message.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    String heroName = "Sage";\n    System.out.println("Welcome to CodeRealm, " + heroName + "!");\n  }\n}',
    hint: 'Step 1: Declare a variable with String heroName = "YourName";. Step 2: Use + to concatenate strings: System.out.println("Welcome to CodeRealm, " + heroName + "!");',
    story: '🔮 **The Variable Crystal Chamber**\n\nDeep in the Java Kingdom, you discover crystals that can store magical energy - variables!\n\n**📚 What You\'ll Learn:**\n• Variables store data for later use\n• Java requires explicit type declaration\n• String concatenation uses + operator\n\n**💎 Variable Rules:**\n1. Declare type first: `String heroName` ✅\n2. Use descriptive names: `playerLevel` ✅\n3. Initialize with value: `String name = "Hero"` ✅\n4. No spaces: `hero name` ❌\n\n**🔮 Data Types:**\n• Strings: `"text"` (wrapped in quotes)\n• Numbers: `int`, `double`, `float`\n• Booleans: `boolean` (true/false)\n\n**✨ String Concatenation:**\nUse `+` operator to join strings: `"Hello " + name + "!"`\n\n*Store your hero\'s identity and announce your arrival!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 3: Simple Methods
  {
    title: 'Simple Methods - Your First Spell',
    description: 'Create a simple method that says hello and use it.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    System.out.println(sayHello());\n  }\n  \n  public static String sayHello() {\n    return "Hello from CodeRealm!";\n  }\n}',
    hint: 'Step 1: Define method with public static String sayHello() {. Step 2: Return a message. Step 3: Call the method with System.out.println(sayHello());',
    story: '🧙‍♂️ **The Method Grimoire**\n\nA wise sage approaches: "Methods are reusable spells that can be cast again and again!"\n\n**📚 What You\'ll Learn:**\n• Methods are reusable code blocks\n• `public static` keywords define methods\n• `return` sends data back to caller\n• Methods can be called multiple times\n\n**🔮 Method Anatomy:**\n```java\npublic static ReturnType methodName() {\n  // Method body\n  return result;\n}\n```\n\n**✨ Method Rules:**\n1. Use `public static` for main methods\n2. Specify return type: `String`, `int`, `void`\n3. Use `return` to send back data\n4. Call with parentheses: `methodName()`\n\n**🎯 Why Methods Matter:**\n• Write once, use many times\n• Organize code into logical pieces\n• Make code easier to read and debug\n\n*Create your first magical method and unlock the power of reusable code!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 4: Simple Arrays
  {
    title: 'Simple Arrays - Magical Containers',
    description: 'Create a simple array of items and display it.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    String[] items = {"sword", "shield", "potion"};\n    System.out.println("My items: " + java.util.Arrays.toString(items));\n  }\n}',
    hint: 'Step 1: Create an array with String[] items = {"item1", "item2"};. Step 2: Display it with System.out.println() and Arrays.toString().',
    story: '🎒 **The Inventory Vault**\n\nBefore venturing forth, you must organize your belongings. Arrays are magical containers that hold multiple treasures!\n\n**📚 What You\'ll Learn:**\n• Arrays store multiple items in order\n• Use square brackets `[]` to create arrays\n• Items are separated by commas\n• Arrays can hold same data type\n\n**🔮 Array Creation:**\n```java\n// String array\nString[] items = {"sword", "shield", "potion"};\n\n// Number array\nint[] numbers = {1, 2, 3, 4, 5};\n\n// Empty array\nString[] inventory = new String[3];\n```\n\n**✨ Array Operations:**\n• Access items: `items[0]` (first item)\n• Get length: `items.length`\n• Assign values: `items[0] = "new_item"`\n• Display: `Arrays.toString(items)`\n\n**🎯 Array Indexing:**\n• First item: `items[0]`\n• Last item: `items[items.length - 1]`\n• Valid range: `0` to `length - 1`\n\n*Organize your magical arsenal and prepare for adventure!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 5: Simple Conditionals
  {
    title: 'Simple Conditionals - The Path of Decisions',
    description: 'Use a simple if statement to check if a number is big.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    int number = 10;\n    if (number > 5) {\n      System.out.println("That\'s a big number!");\n    }\n  }\n}',
    hint: 'Step 1: Create a variable with a number. Step 2: Use if (number > 5) { to check. Step 3: Print a message inside the if block.',
    story: '🛤️ **The Crossroads of Fate**\n\nYou encounter a crossroads. Two paths stretch before you - one leads to safety, the other to adventure. Your code must make wise decisions!\n\n**📚 What You\'ll Learn:**\n• `if` statements make decisions based on conditions\n• Conditions use comparison operators\n• Code inside `if` blocks runs only when condition is true\n\n**🔮 Simple Conditional Structure:**\n```java\nif (condition) {\n  // Do this if condition is true\n}\n```\n\n**✨ Comparison Operators:**\n• `==` - equal to\n• `!=` - not equal to\n• `>` - greater than\n• `<` - less than\n• `>=` - greater than or equal\n• `<=` - less than or equal\n\n**🎯 Boolean Values:**\n• `true` - condition is met\n• `false` - condition is not met\n• Conditions evaluate to true or false\n\n*Master the art of decision-making and choose your path wisely!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 6: Simple Loops
  {
    title: 'Simple Loops - The Cycle of Repetition',
    description: 'Use a simple for loop to print numbers 1 to 5.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 5; i++) {\n      System.out.println(i);\n    }\n  }\n}',
    hint: 'Use for (int i = 1; i <= 5; i++) { to loop from 1 to 5. Print i inside the loop.',
    story: '🔄 **The Circle of Repetition**\n\nA mysterious merchant approaches: "I need help counting gold coins! Can you automate this repetitive task?"\n\n**📚 What You\'ll Learn:**\n• `for` loops repeat code a specific number of times\n• Loop has three parts: initialization, condition, increment\n• Loops automate repetitive tasks\n\n**🔮 Simple For Loop:**\n```java\n// Basic for loop\nfor (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}\n\n// Count from 1 to 5\nfor (int i = 1; i <= 5; i++) {\n  System.out.println(i);\n}\n```\n\n**🔍 Loop Structure:**\n• `int i = 1` - initialize counter\n• `i <= 5` - condition to check\n• `i++` - increment counter\n\n**💡 Common Patterns:**\n• Count iterations: `for (int i = 0; i < n; i++)`\n• Count from 1: `for (int i = 1; i <= n; i++)`\n• Count backwards: `for (int i = n; i >= 1; i--)`\n\n*Master the art of repetition and automate repetitive tasks!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 7: String Basics
  {
    title: 'String Basics - Text Magic',
    description: 'Create a string and use basic string methods.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    String name = "CodeRealm Hero";\n    System.out.println("Original: " + name);\n    System.out.println("Uppercase: " + name.toUpperCase());\n    System.out.println("Lowercase: " + name.toLowerCase());\n  }\n}',
    hint: 'Step 1: Create a string variable. Step 2: Use .toUpperCase() and .toLowerCase() methods. Step 3: Print the results.',
    story: '📜 **The Text Scroll Chamber**\n\nAncient scrolls contain secrets. Learn string manipulation to decode hidden messages!\n\n**📚 What You\'ll Learn:**\n• Strings are sequences of characters\n• String methods modify and analyze text\n• Basic string operations are essential\n\n**🔮 String Creation:**\n```java\n// String literal\nString name = "Hero";\n\n// String object\nString message = new String("Welcome!");\n\n// Concatenation\nString story = "This is a " + "multi-part string";\n```\n\n**✨ Basic String Methods:**\n• `.toUpperCase()` - convert to uppercase\n• `.toLowerCase()` - convert to lowercase\n• `.trim()` - remove whitespace\n• `.length()` - string length\n\n**🎯 String Indexing:**\n• `text.charAt(0)` - first character\n• `text.charAt(text.length() - 1)` - last character\n• `text.substring(1, 4)` - characters 1, 2, 3\n\n*Master the art of text manipulation and decode ancient secrets!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 8: Basic Math
  {
    title: 'Basic Math - The Calculator Stone',
    description: 'Perform basic arithmetic operations with numbers.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    System.out.println("Addition: " + (10 + 5));\n    System.out.println("Subtraction: " + (10 - 5));\n    System.out.println("Multiplication: " + (10 * 5));\n    System.out.println("Division: " + (10 / 5));\n  }\n}',
    hint: 'Use basic operators +, -, *, / with numbers. Print the results.',
    story: '🧮 **The Calculator Stone Chamber**\n\nYou find a mystical stone that performs mathematical operations. Master arithmetic to unlock its true potential!\n\n**📚 What You\'ll Learn:**\n• Java supports integers and floating-point numbers\n• Basic arithmetic operators perform calculations\n• Variables can store numeric results\n\n**🔮 Number Types:**\n• Integers: `int`, `long`\n• Floats: `float`, `double`\n• Special: `Double.POSITIVE_INFINITY`, `Double.NaN`\n\n**✨ Arithmetic Operators:**\n• `+` - addition\n• `-` - subtraction\n• `*` - multiplication\n• `/` - division\n• `%` - modulus (remainder)\n• `Math.pow(base, exp)` - exponentiation\n\n**🎯 Order of Operations:**\n1. Parentheses: `()`\n2. Multiplication/Division: `*`, `/`, `%`\n3. Addition/Subtraction: `+`, `-`\n\n*Master the art of calculation and unlock mathematical mysteries!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 9: Simple Comparisons
  {
    title: 'Simple Comparisons - The Comparator',
    description: 'Use comparison operators to compare two numbers.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    int a = 10;\n    int b = 5;\n    System.out.println(a + " > " + b + ": " + (a > b));\n    System.out.println(a + " == " + b + ": " + (a == b));\n    System.out.println(a + " != " + b + ": " + (a != b));\n  }\n}',
    hint: 'Step 1: Create two number variables. Step 2: Use comparison operators >, ==, !=. Step 3: Print the results.',
    story: '⚖️ **The Comparator\'s Scale**\n\nTwo warriors challenge you to judge who is stronger. Use comparison operators to determine truth from falsehood!\n\n**📚 What You\'ll Learn:**\n• Comparison operators return true or false\n• Use comparisons in if statements\n• Compare different data types\n\n**🔮 Comparison Operators:**\n• `==` - equal to\n• `!=` - not equal to\n• `>` - greater than\n• `<` - less than\n• `>=` - greater than or equal\n• `<=` - less than or equal\n\n**✨ Comparison Examples:**\n```java\n// Numbers\n5 == 5        // true\n10 > 5        // true\n3 != 7        // true\n\n// Variables\nint level = 15;\nlevel >= 10   // true\nlevel == 20   // false\n```\n\n**🔍 Comparison Rules:**\n• Numbers compare by value\n• Strings compare alphabetically\n• Different types cannot be compared\n\n*Master the art of comparison and make wise judgments!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Lesson 10: String Concatenation
  {
    title: 'String Concatenation - The Great Merger',
    description: 'Combine two strings using the + operator.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    String firstName = "Code";\n    String lastName = "Realm";\n    String fullName = firstName + " " + lastName;\n    System.out.println("Full name: " + fullName);\n  }\n}',
    hint: 'Step 1: Create two string variables. Step 2: Use + to combine them. Step 3: Add a space between them.',
    story: '🔗 **The Great Merger Portal**\n\nTwo villages need to unite their resources. Learn to concatenate strings and merge data together!\n\n**📚 What You\'ll Learn:**\n• String concatenation combines multiple strings\n• Use `+` operator to join strings\n• Add spaces between words\n\n**🔮 Concatenation Methods:**\n\n**1. Plus Operator (+):**\n```java\nString first = "Hello";\nString last = "World";\nString result = first + " " + last;  // "Hello World"\n```\n\n**2. StringBuilder (Efficient):**\n```java\nStringBuilder sb = new StringBuilder();\nsb.append("Hello").append(" ").append("World");\nString result = sb.toString();\n```\n\n**✨ Basic Concatenation:**\n• Simple joining: `"Hello" + " " + "World"`\n• With variables: `name + " is " + age`\n• Add spaces: `first + " " + last`\n\n**🎯 When to Use Each Method:**\n• `+` - simple concatenation\n• StringBuilder - many concatenations (efficient)\n\n*Master the art of string merging and unite the villages!*',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  
  // Continue with lessons 11-20 for easy level
  // Then lessons 21-40 for intermediate level
  // Then lessons 41-50 for advanced level
  
  // INTERMEDIATE LEVEL (Lessons 21-40) - Building on Basics
  
  // Lesson 21: Methods with Parameters
  {
    title: 'Methods with Parameters - Advanced Spells',
    description: 'Create a method that accepts parameters and returns a result.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    System.out.println(greet("Sage"));\n    System.out.println(greet("Knight"));\n  }\n  \n  public static String greet(String name) {\n    return "Hello, " + name + "!";\n  }\n}',
    hint: 'Step 1: Define method with parameter: public static String greet(String name) {. Step 2: Use the parameter inside the method. Step 3: Call with different values.',
    story: '🧙‍♂️ **The Advanced Grimoire**\n\nYou\'ve mastered basic methods! Now learn to create spells that accept different ingredients (parameters)!\n\n**📚 What You\'ll Learn:**\n• Methods can accept parameters (inputs)\n• Parameters make methods more flexible\n• Same method can work with different data\n\n**🔮 Method with Parameters:**\n```java\npublic static ReturnType methodName(ParameterType parameter) {\n  // Use parameter inside method\n  return result;\n}\n\n// Call with different values\nmethodName("value1");\nmethodName("value2");\n```\n\n**✨ Parameter Rules:**\n1. Define parameters in parentheses: `public static String greet(String name)`\n2. Use parameters inside method body\n3. Call with actual values: `greet("Alice")`\n4. Parameters are local to the method\n\n**🎯 Why Parameters Matter:**\n• Make methods reusable with different data\n• Reduce code duplication\n• Create flexible, powerful methods\n\n*Master the art of parameterized spells and create flexible magic!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 22: Arrays with Methods
  {
    title: 'Arrays with Methods - Advanced Containers',
    description: 'Use array methods to manipulate items.',
    starterCode: '',
    solution: 'import java.util.Arrays;\n\npublic class Hero {\n  public static void main(String[] args) {\n    String[] inventory = {"sword"};\n    inventory = Arrays.copyOf(inventory, inventory.length + 1);\n    inventory[1] = "shield";\n    inventory = Arrays.copyOf(inventory, inventory.length + 1);\n    inventory[2] = "potion";\n    \n    System.out.println("Inventory: " + Arrays.toString(inventory));\n    System.out.println("First item: " + inventory[0]);\n  }\n}',
    hint: 'Step 1: Create an array. Step 2: Use Arrays.copyOf() to expand array. Step 3: Assign new values. Step 4: Access items with [index].',
    story: '🎒 **The Advanced Inventory Vault**\n\nYour inventory grows! Learn to manipulate arrays with powerful methods.\n\n**📚 What You\'ll Learn:**\n• Arrays have fixed size but can be copied\n• Use Arrays utility methods\n• Access items by index\n\n**🔮 Array Methods:**\n```java\nimport java.util.Arrays;\n\nString[] items = {"sword"};\nitems = Arrays.copyOf(items, items.length + 1);  // Expand\nitems[1] = "shield";                             // Add item\nArrays.sort(items);                              // Sort\nArrays.fill(items, "empty");                    // Fill\n```\n\n**✨ Common Array Methods:**\n• `Arrays.toString(array)` - convert to string\n• `Arrays.copyOf(array, newSize)` - copy and resize\n• `Arrays.sort(array)` - sort array\n• `Arrays.fill(array, value)` - fill with value\n• `array.length` - get length\n\n**🎯 Array Indexing:**\n• `items[0]` - first item\n• `items[items.length - 1]` - last item\n• Valid range: `0` to `length - 1`\n\n*Master the art of dynamic inventory management!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 23: If-Else Statements
  {
    title: 'If-Else Statements - Complete Decisions',
    description: 'Use if-else statements to handle both true and false conditions.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    int playerLevel = 15;\n    if (playerLevel >= 10) {\n      System.out.println("You are ready for advanced quests!");\n    } else {\n      System.out.println("Keep training, young adventurer!");\n    }\n  }\n}',
    hint: 'Step 1: Create a variable with a value. Step 2: Use if (condition) { for true case. Step 3: Use else { for false case.',
    story: '🛤️ **The Complete Crossroads**\n\nYou\'ve learned basic decisions! Now master complete decision-making with if-else statements.\n\n**📚 What You\'ll Learn:**\n• `if-else` statements handle both true and false cases\n• Always provide an alternative action\n• Make complete decision trees\n\n**🔮 If-Else Structure:**\n```java\nif (condition) {\n  // Do this if condition is true\n} else {\n  // Do this if condition is false\n}\n```\n\n**✨ If-Else Examples:**\n```java\nint age = 18;\nif (age >= 18) {\n  System.out.println("You can vote!");\n} else {\n  System.out.println("You cannot vote yet.");\n}\n\nint score = 85;\nif (score >= 90) {\n  System.out.println("Grade: A");\n} else {\n  System.out.println("Grade: B or lower");\n}\n```\n\n**🎯 When to Use If-Else:**\n• When you need to handle both cases\n• When you want a default action\n• When creating complete decision logic\n\n*Master the art of complete decision-making!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 24: For Loops with Arrays
  {
    title: 'For Loops with Arrays - Processing Collections',
    description: 'Use for loops to process each item in an array.',
    starterCode: '',
    solution: 'public class Hero {\n  public static void main(String[] args) {\n    String[] inventory = {"sword", "shield", "potion"};\n    System.out.println("Checking inventory:");\n    for (int i = 0; i < inventory.length; i++) {\n      System.out.println("- " + inventory[i]);\n    }\n    System.out.println("\\nTotal items: " + inventory.length);\n  }\n}',
    hint: 'Step 1: Create an array. Step 2: Use for (int i = 0; i < array.length; i++) to loop through items. Step 3: Process each item inside the loop.',
    story: '🔄 **The Collection Processor**\n\nYou\'ve mastered basic loops! Now learn to process entire collections of data.\n\n**📚 What You\'ll Learn:**\n• `for` loops can iterate through arrays\n• Process each item in a collection\n• Combine loops with other operations\n\n**🔮 For Loop with Arrays:**\n```java\n// Loop through an array\nfor (int i = 0; i < myArray.length; i++) {\n  System.out.println(myArray[i]);\n}\n\n// Enhanced for loop\nfor (String item : myArray) {\n  System.out.println(item);\n}\n```\n\n**✨ Common Patterns:**\n• Process all items: `for (int i = 0; i < items.length; i++)`\n• Count items: `for (int i = 0; i < items.length; i++) count++`\n• Find items: `for (int i = 0; i < items.length; i++) if (condition)`\n• Transform items: `for (int i = 0; i < items.length; i++) newItem = transform(items[i])`\n\n**🎯 Loop Control:**\n• `break` - exit loop immediately\n• `continue` - skip to next iteration\n\n*Master the art of collection processing!*',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  
  // Lesson 25: Collections (ArrayList)
  {
    title: 'Collections - Dynamic Storage',
    description: 'Use ArrayList to store and manipulate items dynamically.',
    starterCode: '',
    solution: 'import java.util.ArrayList;\n\npublic class Hero {\n  public static void main(String[] args) {\n    ArrayList<String> inventory = new ArrayList<>();\n    inventory.add("sword");\n    inventory.add("shield");\n    inventory.add("potion");\n    \n    System.out.println("Inventory: " + inventory);\n    System.out.println("First item: " + inventory.get(0));\n    inventory.remove("sword");\n    System.out.println("After removing sword: " + inventory);\n  }\n}',
    hint: 'Step 1: Create ArrayList with ArrayList<String> list = new ArrayList<>();. Step 2: Use .add() to add items. Step 3: Use .get() to access items. Step 4: Use .remove() to remove items.',
    story: '🗝️ **The Dynamic Vault**\n\nYou discover a magical vault that can grow and shrink - ArrayList!\n\n**📚 What You\'ll Learn:**\n• ArrayList stores items dynamically\n• Add and remove items easily\n• Access items by index\n\n**🔮 ArrayList Creation:**\n```java\nimport java.util.ArrayList;\n\n// Create ArrayList\nArrayList<String> items = new ArrayList<>();\n\n// Add items\nitems.add("sword");\nitems.add("shield");\n\n// Access items\nString first = items.get(0);\n```\n\n**✨ ArrayList Methods:**\n• `add(item)` - add to end\n• `add(index, item)` - add at position\n• `get(index)` - get item\n• `remove(item)` - remove first occurrence\n• `remove(index)` - remove at position\n• `size()` - get size\n\n**🎯 ArrayList Benefits:**\n• Dynamic size (grows/shrinks)\n• Easy to add/remove items\n• Better than fixed arrays for changing data\n\n*Master the art of dynamic storage!*',
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
    solution: 'public class Hero {\n  private String name;\n  private int level;\n  \n  public Hero(String name, int level) {\n    this.name = name;\n    this.level = level;\n  }\n  \n  public String greet() {\n    return "Hello, I\'m " + name + ", level " + level;\n  }\n  \n  public static void main(String[] args) {\n    Hero hero = new Hero("Sage", 15);\n    System.out.println(hero.greet());\n  }\n}',
    hint: 'Step 1: Define class with public class Hero {. Step 2: Create constructor for initialization. Step 3: Create instance methods. Step 4: Create object with new and call methods.',
    story: '🏰 **The Object-Oriented Sanctum**\n\nYou\'ve reached the advanced chambers! Learn to create your own data types with classes.\n\n**📚 What You\'ll Learn:**\n• Classes define new data types\n• Objects are instances of classes\n• Methods are functions inside classes\n• Properties store object data\n\n**🔮 Class Structure:**\n```java\npublic class ClassName {\n  private DataType property;\n  \n  public ClassName(DataType parameter) {\n    this.property = parameter;\n  }\n  \n  public ReturnType method() {\n    return this.property;\n  }\n}\n```\n\n**✨ Class Components:**\n• `private` - data encapsulation\n• `public` - accessible from outside\n• Constructor - initialization method\n• `this` - reference to the object\n• Methods - object functions\n\n**🎯 Object-Oriented Benefits:**\n• Organize code into logical units\n• Reuse code through inheritance\n• Encapsulate data and behavior\n• Model real-world concepts\n\n*Master the art of object-oriented programming!*',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  
  // Lesson 42: File Handling
  {
    title: 'File Handling - The Scroll Keeper',
    description: 'Read from and write to files using Java.',
    starterCode: '',
    solution: 'import java.io.*;\nimport java.nio.file.*;\n\npublic class Hero {\n  public static void main(String[] args) {\n    try {\n      // Write to file\n      Files.write(Paths.get("quest_log.txt"), \n        "Quest 1: Defeat the dragon\\nQuest 2: Find the treasure\\n".getBytes());\n      \n      // Read from file\n      String content = new String(Files.readAllBytes(Paths.get("quest_log.txt")));\n      System.out.println(content);\n    } catch (IOException e) {\n      System.out.println("Error: " + e.getMessage());\n    }\n  }\n}',
    hint: 'Step 1: Use Files.write() to write content. Step 2: Use Files.readAllBytes() to read content. Step 3: Use try-catch for error handling.',
    story: '📜 **The Scroll Keeper\'s Chamber**\n\nYou discover ancient scrolls that contain quest information. Learn to read and write data to files!\n\n**📚 What You\'ll Learn:**\n• Files store data persistently\n• Read data from files\n• Write data to files\n• Handle file operations safely\n\n**🔮 File Operations:**\n```java\nimport java.io.*;\nimport java.nio.file.*;\n\n// Write to file\nFiles.write(Paths.get("filename.txt"), content.getBytes());\n\n// Read from file\nString content = new String(Files.readAllBytes(Paths.get("filename.txt")));\n```\n\n**✨ File Methods:**\n• `Files.write()` - write content\n• `Files.readAllBytes()` - read all bytes\n• `Files.exists()` - check if file exists\n• `Files.delete()` - delete file\n\n**🎯 Error Handling:**\n• Use `try-catch` for IOException\n• Handle file not found errors\n• Handle permission errors\n\n*Master the art of file manipulation!*',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  
  // Continue with remaining advanced lessons...
  
  // This structure provides proper difficulty progression:
  // Easy (1-20): Basic concepts, simple operations
  // Intermediate (21-40): Building on basics, more complex operations
  // Advanced (41-50): Complex topics, real-world applications
];
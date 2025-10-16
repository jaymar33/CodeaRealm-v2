import { ChallengeSet } from './types';

export const pythonChallenges: ChallengeSet = [
  // TUTORIAL LEVELS (1-5)
  {
    title: 'Hello Python - Your First Code',
    description: 'Write your very first Python program! Just print "Hello, CodeRealm!" to the screen.',
    starterCode: '# Welcome to the Python Sanctum! This is your first Python adventure.\n# Just write one line to say hello to the console.\n\n# Your first Python code goes here:\n\n',
    solution: 'print("Hello, CodeRealm!")',
    hint: 'Simply write: print("Hello, CodeRealm!") - This tells Python to display a message. Don\'t forget the quotes around the text!',
    story: 'Welcome, young sage! You\'ve entered the Python Sanctum where elegant code flows like poetry. Your journey begins with a simple greeting...',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'Variables & Syntax',
    description: 'Create a variable for your hero name and print a welcome message using Python syntax.',
    starterCode: '# Welcome to the Data Sage\'s Quest!\n# Step 1: Create a variable called hero_name and give it your name\n# Step 2: Use print() to display a welcome message\n\n# Your code goes here:\n\n',
    solution: 'hero_name = "Sage"\nprint(f"Welcome to CodeRealm, {hero_name}!")',
    hint: 'Step 1: Write "hero_name = "YourName"" to create a variable. Step 2: Write "print(f"Welcome to CodeRealm, {hero_name}!")" to display the message. Python uses f-strings for easy formatting!',
    story: 'Deep in the Python Sanctum, ancient wisdom flows through elegant code. The sage asks for your identity...',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'Functions & Modules',
    description: 'Define greet(name) returning the welcome string and print it.',
    starterCode: 'hero_name = "Sage"\n\n# Step 1: Create a function called greet that takes a name parameter\n# Step 2: Make it return a welcome message with the name\n# Step 3: Call the function with hero_name and print the result\n\n# Your code goes here:\n\n',
    solution: 'hero_name = "Sage"\n\ndef greet(name):\n  return f"Welcome to CodeRealm, {name}!"\n\nprint(greet(hero_name))',
    hint: 'Step 1: Write "def greet(name):" to start the function. Step 2: Inside the function, write "return f"Welcome to CodeRealm, {name}!"" (use f-strings for easy formatting). Step 3: Call "print(greet(hero_name))" to use the function.',
    story: 'You bottle a greeting spell for reuse.',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'Data Structures',
    description: 'Create a list and dict, then print lengths and a welcome.',
    starterCode: '# Step 1: Create a list with 3 items (like ["sword", "shield", "potion"])\n# Step 2: Create a dictionary with a name key (like {"name": "Sage"})\n# Step 3: Print both the list and dictionary\n\n# Your code goes here:\n\n',
    solution: 'inventory = ["sword","shield","potion"]\nhero = {"name": "Sage"}\nprint(f"Welcome to CodeRealm, {hero[\"name\"]}!")\nprint(len(inventory))',
    hint: 'Step 1: Write "inventory = ["sword", "shield", "potion"]" to create a list. Step 2: Write "hero = {"name": "Sage"}" to create a dictionary. Step 3: Use "print(inventory)" and "print(hero)" to display them.',
    story: 'You organize your supplies.',
    type: 'tutorial',
    difficulty: 'beginner'
  },
  {
    title: 'Conditionals & Loops',
    description: 'Loop through items and print a special message for "potion".',
    starterCode: 'inventory = ["sword","shield","potion"]\n\n# Step 1: Use a for loop to go through each item in inventory\n# Step 2: Check if the item equals "potion"\n# Step 3: If it is, print a special message\n\n# Your code goes here:\n\n',
    solution: 'inventory = ["sword","shield","potion"]\nfor item in inventory:\n  if item == "potion":\n    print("Welcome to CodeRealm, potion master!")',
    hint: 'Step 1: Write "for item in inventory:" to loop through items. Step 2: Inside the loop, write "if item == "potion":" to check for potion. Step 3: Inside the if, write "print("Welcome to CodeRealm, potion master!")".',
    story: 'You search your bag for helpful items.',
    type: 'tutorial',
    difficulty: 'beginner'
  },

  // CODE PUZZLES (6-10) - Simplified for Beginners!
  {
    title: 'Puzzle: Add Two Numbers',
    description: 'Write a function that takes two numbers and returns their sum. Very simple!',
    starterCode: '# Complete the function below to add two numbers together\n# Example: add_numbers(5, 3) should return 8\n\ndef add_numbers(a, b):\n    # Write your code here - just add a and b!\n    pass\n\n# Test your function\nprint(add_numbers(5, 3))    # Should show: 8\nprint(add_numbers(10, 20))  # Should show: 30',
    solution: 'def add_numbers(a, b):\n    return a + b\n\nprint(add_numbers(5, 3))\nprint(add_numbers(10, 20))',
    hint: 'Just return a + b inside the function. That\'s it! Replace "pass" with return a + b',
    story: 'The merchant needs help adding up the gold coins. Can you help by creating a simple addition function?',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['8', '30'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'def add_numbers(a, b):\n    return __BLANK1__\n\nprint(add_numbers(5, 3))\nprint(add_numbers(10, 20))',
      blanks: [
        { id: 'BLANK1', prompt: 'Add the two parameters and return', choices: ['a + b', 'a - b', 'a * b', 'a / b'], solution: 'a + b', hintSteps: ['Combine a and b', 'Use the + operator', 'Type a + b'] }
      ]
    }
  },
  {
    title: 'Puzzle: Check if Number is Even',
    description: 'Create a function that checks if a number is even. Return True if even, False if odd.',
    starterCode: '# A number is even if dividing by 2 gives no remainder\n# Use the % (modulo) operator: number % 2\n# If number % 2 equals 0, it\'s even!\n\ndef is_even(number):\n    # Your code here\n    pass\n\n# Test it\nprint(is_even(4))  # Should show: True\nprint(is_even(7))  # Should show: False',
    solution: 'def is_even(number):\n    return number % 2 == 0\n\nprint(is_even(4))\nprint(is_even(7))',
    hint: 'Return the result of: number % 2 == 0 (This checks if the remainder is 0)',
    story: 'The kingdom needs to pair up knights for patrol. Help determine which knight numbers are even for pairing!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['True', 'False'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'def is_even(number):\n    return __BLANK1__\n\nprint(is_even(4))\nprint(is_even(7))',
      blanks: [
        { id: 'BLANK1', prompt: 'Check if divisible by 2', choices: ['number % 2 == 0', 'number / 2 == 0', 'number % 3 == 0'], solution: 'number % 2 == 0', hintSteps: ['Use modulo %', 'Compare remainder to 0', 'Type number % 2 == 0'] }
      ]
    }
  },
  {
    title: 'Puzzle: Get First Item from List',
    description: 'Write a function that returns the first item from a list.',
    starterCode: '# Lists are like arrays that start counting from 0\n# The first item is at position [0]\n\ndef get_first(my_list):\n    # Return the first item (hint: use my_list[0])\n    pass\n\n# Test with these lists\nfruits = ["apple", "banana", "orange"]\nnumbers = [10, 20, 30]\n\nprint(get_first(fruits))   # Should show: "apple"\nprint(get_first(numbers))  # Should show: 10',
    solution: 'def get_first(my_list):\n    return my_list[0]\n\nfruits = ["apple", "banana", "orange"]\nnumbers = [10, 20, 30]\n\nprint(get_first(fruits))\nprint(get_first(numbers))',
    hint: 'Simply return my_list[0] - that\'s the first element!',
    story: 'The treasure chest has many items. Which one is on top? Get the first item to find out!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['apple', '10'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'def get_first(my_list):\n    return __BLANK1__\n\nfruits = ["apple", "banana", "orange"]\nnumbers = [10, 20, 30]\n\nprint(get_first(fruits))\nprint(get_first(numbers))',
      blanks: [
        { id: 'BLANK1', prompt: 'Access first element', choices: ['my_list[0]', 'my_list[1]', 'my_list[-1]'], solution: 'my_list[0]', hintSteps: ['Lists are zero-indexed', 'First element is index 0', 'Use my_list[0]'] }
      ]
    }
  },
  {
    title: 'Puzzle: Count List Length',
    description: 'Create a function that counts how many items are in a list.',
    starterCode: '# Every list has a len() function that tells you how many items it has\n\ndef count_items(my_list):\n    # Return the length of the list\n    pass\n\n# Test it\ncolors = ["red", "blue", "green"]\nages = [5, 10, 15, 20, 25]\n\nprint(count_items(colors))  # Should show: 3\nprint(count_items(ages))    # Should show: 5',
    solution: 'def count_items(my_list):\n    return len(my_list)\n\ncolors = ["red", "blue", "green"]\nages = [5, 10, 15, 20, 25]\n\nprint(count_items(colors))\nprint(count_items(ages))',
    hint: 'Use len(my_list) to get the number of items. Just return that!',
    story: 'The wizard needs to count how many spell ingredients are in the potion list. Help by counting the list!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['3', '5'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'def count_items(my_list):\n    return __BLANK1__\n\ncolors = ["red", "blue", "green"]\nages = [5, 10, 15, 20, 25]\n\nprint(count_items(colors))\nprint(count_items(ages))',
      blanks: [
        { id: 'BLANK1', prompt: 'Return number of items', choices: ['len(my_list)', 'my_list.length', 'size(my_list)'], solution: 'len(my_list)', hintSteps: ['Use len()', 'len() returns count', 'Type len(my_list)'] }
      ]
    }
  },
  {
    title: 'Puzzle: Greet by Name',
    description: 'Make a function that takes a name and returns a greeting message.',
    starterCode: '# Create a friendly greeting message\n# Use f-strings: f"Hello {name}!"\n\ndef greet(name):\n    # Return a greeting like "Hello Hero!"\n    pass\n\n# Test your function\nprint(greet("Hero"))   # Should show: "Hello Hero!"\nprint(greet("Alice"))  # Should show: "Hello Alice!"',
    solution: 'def greet(name):\n    return f"Hello {name}!"\n\nprint(greet("Hero"))\nprint(greet("Alice"))',
    hint: 'Use an f-string: return f"Hello {name}!" (The f before the quotes makes it an f-string)',
    story: 'The friendly innkeeper wants to greet every adventurer by name. Create a greeting function to help!',
    type: 'puzzle',
    difficulty: 'beginner',
    expectedIncludes: ['Hello Hero!', 'Hello Alice!'],
    puzzleMeta: {
      mode: 'fill-in',
      template: 'def greet(name):\n    return __BLANK1__\n\nprint(greet("Hero"))\nprint(greet("Alice"))',
      blanks: [
        { id: 'BLANK1', prompt: 'Return greeting using name', choices: ['f"Hello {name}!"', '"Hello {name}!"', '"Hello " + name + "!"'], solution: 'f"Hello {name}!"', hintSteps: ['Use an f-string', 'f-strings format values inside {}', 'Type f"Hello {name}!"'] }
      ]
    }
  },

  // INTERMEDIATE & ADVANCED CHALLENGES (11-20) - Keeping some original
  {
    title: 'Simple Math Operations',
    description: 'Create two numbers and perform basic math operations (add, subtract, multiply).',
    starterCode: '# Step 1: Create two number variables (like a = 10, b = 5)\n# Step 2: Add them together and print the result\n# Step 3: Subtract b from a and print the result\n# Step 4: Multiply them and print the result\n\n# Your code goes here:\n\n',
    solution: 'a = 10\nb = 5\nprint("Addition:", a + b)\nprint("Subtraction:", a - b)\nprint("Multiplication:", a * b)',
    hint: 'Step 1: Write "a = 10" and "b = 5" to create numbers. Step 2: Use "print("Addition:", a + b)" for addition. Step 3: Use "print("Subtraction:", a - b)" for subtraction. Step 4: Use "print("Multiplication:", a * b)" for multiplication.',
    story: 'You learn the ancient art of mathematical magic from the village calculator.',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  {
    title: 'String Operations',
    description: 'Work with text strings - combine them, find their length, and convert to uppercase.',
    starterCode: '# Step 1: Create two string variables (like first_name = "Hero", last_name = "Adventurer")\n# Step 2: Combine them into a full name and print it\n# Step 3: Print the length of the full name\n# Step 4: Print the full name in uppercase\n\n# Your code goes here:\n\n',
    solution: 'first_name = "Hero"\nlast_name = "Adventurer"\nfull_name = first_name + " " + last_name\nprint("Full name:", full_name)\nprint("Name length:", len(full_name))\nprint("Uppercase:", full_name.upper())',
    hint: 'Step 1: Write "first_name = "Hero"" and "last_name = "Adventurer"". Step 2: Combine with "full_name = first_name + " " + last_name". Step 3: Use "len(full_name)" for length. Step 4: Use "full_name.upper()" for uppercase.',
    story: 'You learn to manipulate the ancient texts and inscriptions found in the temple.',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  {
    title: 'Web Scraping',
    description: 'Simulate web scraping with string manipulation.',
    starterCode: 'html_content = \'<div class="quest">Dragon Hunt</div><div class="reward">1000 gold</div>\'\n\n',
    solution: 'html_content = \'<div class="quest">Dragon Hunt</div><div class="reward">1000 gold</div>\'\n\n# Simple extraction (simulate BeautifulSoup)\nquest_start = html_content.find(\'>\') + 1\nquest_end = html_content.find(\'<\', quest_start)\nquest = html_content[quest_start:quest_end]\n\nreward_start = html_content.find(\'>\', quest_end) + 1\nreward_end = html_content.find(\'<\', reward_start)\nreward = html_content[reward_start:reward_end]\n\nprint(f"Welcome to CodeRealm, quest: {quest}")\nprint(f"Reward: {reward}")',
    hint: 'Use string methods like find() to extract data.',
    story: 'You extract information from ancient web scrolls.',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  {
    title: 'Data Analysis',
    description: 'Analyze a list of numbers with basic statistics.',
    starterCode: 'scores = [85, 92, 78, 96, 88, 91, 87, 94]\n\n',
    solution: 'scores = [85, 92, 78, 96, 88, 91, 87, 94]\n\nmax_score = max(scores)\nmin_score = min(scores)\naverage = sum(scores) / len(scores)\n\nprint(f"Welcome to CodeRealm, max score: {max_score}")\nprint(f"Min score: {min_score}")\nprint(f"Average: {average:.1f}")',
    hint: 'Use max(), min(), sum(), and len() functions.',
    story: 'You analyze your adventure statistics.',
    type: 'tutorial',
    difficulty: 'intermediate'
  },
  {
    title: 'NumPy & Pandas',
    description: 'Simulate array operations with lists.',
    starterCode: 'import math\n\n# Simulate NumPy operations\n',
    solution: 'import math\n\n# Simulate NumPy operations\narray1 = [1, 2, 3, 4, 5]\narray2 = [2, 4, 6, 8, 10]\n\n# Element-wise addition\nresult = [a + b for a, b in zip(array1, array2)]\nprint(f"Welcome to CodeRealm, array sum: {result}")\n\n# Calculate mean\nmean = sum(array1) / len(array1)\nprint(f"Mean: {mean}")',
    hint: 'Use list comprehensions and zip() for array operations.',
    story: 'You perform mathematical operations on data arrays.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Matplotlib Visualization',
    description: 'Simulate plotting with text-based charts.',
    starterCode: 'data = [5, 3, 8, 2, 7, 4, 6, 9]\n\n',
    solution: 'data = [5, 3, 8, 2, 7, 4, 6, 9]\n\nprint("Welcome to CodeRealm, simple bar chart:")\nfor i, value in enumerate(data):\n  bar = "█" * value\n  print(f"Bar {i+1}: {bar} ({value})")',
    hint: 'Use string multiplication to create simple bars.',
    story: 'You create visual representations of your data.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Django Basics',
    description: 'Create a simple class-based view simulation.',
    starterCode: 'class QuestView:\n  def __init__(self, quest_name):\n    self.quest_name = quest_name\n  \n  def get(self):\n    # TODO: implement GET method\n    pass\n\n',
    solution: 'class QuestView:\n  def __init__(self, quest_name):\n    self.quest_name = quest_name\n  \n  def get(self):\n    return f"Welcome to CodeRealm, quest: {self.quest_name}"\n  \n  def post(self, data):\n    return f"Welcome to CodeRealm, quest updated: {data}"\n\nview = QuestView("Dragon Hunt")\nprint(view.get())\nprint(view.post("New Dragon Hunt"))',
    hint: 'Implement get() and post() methods in the class.',
    story: 'You create web views to handle quest requests.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Flask Web Apps',
    description: 'Simulate Flask routes with function calls.',
    starterCode: 'class Flask:\n  def __init__(self):\n    self.routes = {}\n  \n  def route(self, path):\n    def decorator(func):\n      self.routes[path] = func\n      return func\n    return decorator\n  \n  def run_route(self, path):\n    if path in self.routes:\n      return self.routes[path]()\n    return "404 Not Found"\n\n',
    solution: 'class Flask:\n  def __init__(self):\n    self.routes = {}\n  \n  def route(self, path):\n    def decorator(func):\n      self.routes[path] = func\n      return func\n    return decorator\n  \n  def run_route(self, path):\n    if path in self.routes:\n      return self.routes[path]()\n    return "404 Not Found"\n\napp = Flask()\n\n@app.route("/quest")\ndef get_quest():\n  return "Welcome to CodeRealm, quest endpoint!"\n\nprint(app.run_route("/quest"))',
    hint: 'Use decorators to register routes.',
    story: 'You build a web application to serve quests.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'API Development',
    description: 'Create a simple API with JSON-like responses.',
    starterCode: 'import json\n\nclass QuestAPI:\n  def __init__(self):\n    self.quests = {}\n  \n  def create_quest(self, quest_id, name):\n    # TODO: implement\n    pass\n  \n  def get_quest(self, quest_id):\n    # TODO: implement\n    pass\n\n',
    solution: 'import json\n\nclass QuestAPI:\n  def __init__(self):\n    self.quests = {}\n  \n  def create_quest(self, quest_id, name):\n    self.quests[quest_id] = {"name": name, "status": "active"}\n    return {"message": f"Welcome to CodeRealm, quest {name} created!"}\n  \n  def get_quest(self, quest_id):\n    if quest_id in self.quests:\n      return {"quest": self.quests[quest_id]}\n    return {"error": "Quest not found"}\n\napi = QuestAPI()\nprint(api.create_quest("001", "Dragon Hunt"))\nprint(api.get_quest("001"))',
    hint: 'Return dictionaries that simulate JSON responses.',
    story: 'You build an API to manage quest data.',
    type: 'tutorial',
    difficulty: 'advanced'
  },
  {
    title: 'Machine Learning Intro',
    description: 'Implement a simple linear regression simulation.',
    starterCode: 'def simple_linear_regression(x_values, y_values):\n  # TODO: implement simple linear regression\n  pass\n\n',
    solution: 'def simple_linear_regression(x_values, y_values):\n  n = len(x_values)\n  sum_x = sum(x_values)\n  sum_y = sum(y_values)\n  sum_xy = sum(x * y for x, y in zip(x_values, y_values))\n  sum_x2 = sum(x * x for x in x_values)\n  \n  slope = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x * sum_x)\n  intercept = (sum_y - slope * sum_x) / n\n  \n  return slope, intercept\n\n# Sample data: level vs experience\nlevels = [1, 2, 3, 4, 5]\nexperience = [100, 250, 450, 700, 1000]\n\nslope, intercept = simple_linear_regression(levels, experience)\nprint(f"Welcome to CodeRealm, ML model trained!")\nprint(f"Slope: {slope:.2f}, Intercept: {intercept:.2f}")\nprint(f"Predicted exp for level 6: {slope * 6 + intercept:.0f}")',
    hint: 'Calculate slope and intercept using the linear regression formula.',
    story: 'You train a machine learning model to predict experience gains.',
    type: 'tutorial',
    difficulty: 'advanced'
  }
];


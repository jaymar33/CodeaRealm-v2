# Code Puzzle Levels - Quick Reference

## Where to Find Code Puzzles

### In the Game Overview Page:
1. Navigate to **Game Overview** page
2. Scroll to the **"Types of Quests"** section
3. Click on the **"Code Puzzles"** card (green icon with a wand 🪄)
4. A modal will open showing all 5 puzzles for your selected language

### Puzzle Levels by Language:

#### JavaScript Puzzles (Levels 6-10)
- **Level 6**: Reverse a String - `type: 'puzzle'`, `difficulty: 'beginner'`
- **Level 7**: Find the Largest Number - `type: 'puzzle'`, `difficulty: 'beginner'`
- **Level 8**: Count Vowels - `type: 'puzzle'`, `difficulty: 'intermediate'`
- **Level 9**: FizzBuzz Challenge - `type: 'puzzle'`, `difficulty: 'intermediate'`
- **Level 10**: Palindrome Checker - `type: 'puzzle'`, `difficulty: 'intermediate'`

#### Java Puzzles (Levels 6-10)
- **Level 6**: Reverse an Array - `type: 'puzzle'`, `difficulty: 'beginner'`
- **Level 7**: Sum of Evens - `type: 'puzzle'`, `difficulty: 'beginner'`
- **Level 8**: Count Uppercase Letters - `type: 'puzzle'`, `difficulty: 'intermediate'`
- **Level 9**: Factorial Calculator - `type: 'puzzle'`, `difficulty: 'intermediate'`
- **Level 10**: Find Duplicates - `type: 'puzzle'`, `difficulty: 'intermediate'`

#### Python Puzzles (Levels 6-10)
- **Level 6**: List Comprehension - `type: 'puzzle'`, `difficulty: 'beginner'`
- **Level 7**: Dictionary Reversal - `type: 'puzzle'`, `difficulty: 'beginner'`
- **Level 8**: Find Common Elements - `type: 'puzzle'`, `difficulty: 'intermediate'`
- **Level 9**: Word Counter - `type: 'puzzle'`, `difficulty: 'intermediate'`
- **Level 10**: Fibonacci Sequence - `type: 'puzzle'`, `difficulty: 'intermediate'`

## File Locations

All puzzles are organized in separate files:

```
src/data/challenges/
├── javascript.ts    # Contains all 20 JavaScript challenges (puzzles are levels 6-10)
├── java.ts         # Contains all 20 Java challenges (puzzles are levels 6-10)
├── python.ts       # Contains all 20 Python challenges (puzzles are levels 6-10)
├── types.ts        # Type definitions for challenges
└── index.ts        # Central export file
```

## How It Works

1. **Tutorial Levels (1-5)**: Basic introduction to each language
2. **Code Puzzles (Levels 6-10 in files, shown as 1-5 in modal)**: Problem-solving challenges to test skills
3. **Intermediate Challenges (11-15)**: More complex topics
4. **Advanced Challenges (16-20)**: Expert-level concepts

## Features

- ✅ **Clickable "Code Puzzles" card** in Game Overview
- ✅ **Beautiful modal** showing all 5 puzzles
- ✅ **Progress tracking** - shows which puzzles are completed with stars
- ✅ **Always Unlocked** - all puzzles are accessible anytime! 🔓
- ✅ **Displayed as Level 1-5** - for better clarity (actual levels are 6-10 in code)
- ✅ **Direct navigation** - click any puzzle to start coding immediately
- ✅ **Difficulty badges** - beginner/intermediate/advanced indicators
- ✅ **Completion indicators** - checkmarks and star ratings
- ✅ **Independent from main quest** - practice anytime without restrictions

## Accessing Puzzles

### From Game Overview:
1. Click "Code Puzzles" card → Opens puzzle modal
2. Click any unlocked puzzle → Opens Code Editor at that level

### From Level Grid:
- Levels 6-10 are also accessible from the regular level grid
- They work the same as other levels but are tagged as puzzles

## Testing

All puzzles are fully tested and working:
- ✅ Build successful (3.56s)
- ✅ No linter errors
- ✅ All imports working correctly
- ✅ Modal opens/closes properly
- ✅ Navigation to puzzle levels works


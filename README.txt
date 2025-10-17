# README.txt

**Note:** This version includes Firebase integration for authentication and user management, as well as Judge0 API for secure code execution.

---

## Tech Stack
- React 18
- TypeScript 5
- Vite 5
- TailwindCSS 3, PostCSS, Autoprefixer
- ESLint
- lucide-react (icon library)
- Firebase (Authentication + Firestore)
- Judge0 API (Code Execution)
- RapidAPI (Judge0 Integration)

---

## Folder Structure
- `index.html` – Root HTML file
- `src/main.tsx` – Application entry point, mounts the root component
- `src/App.tsx` – Central container, manages page switching and language state
- `src/components/Navbar.tsx` – Top navigation bar with user authentication and progress tracking
- `src/components/ParticleBackground.tsx` – Animated particle background implemented using `<canvas>`
- `src/components/AuthModal.tsx` – User authentication modal (sign in/sign up)
- `src/components/ArcaneCodeEditorPanel.tsx` – Advanced code editor with syntax highlighting
- `src/components/ArcaneMentorPanel.tsx` – AI mentor system for adaptive learning
- `src/pages/Home.tsx` – Landing section with call-to-action elements
- `src/pages/About.tsx` – Description of the project purpose and learning goals
- `src/pages/Features.tsx` – Feature grid and navigation options
- `src/pages/GameOverview.tsx` – Language selection and difficulty-based level progression
- `src/pages/CodeEditor.tsx` – Full-featured code editor with validation and progression system
- `src/pages/ArcaneMentor.tsx` – AI-powered learning assistant
- `src/pages/ArcaneShowcase.tsx` – Feature showcase and demonstrations
- `src/pages/DragDrop.tsx` – Drag-and-drop coding challenges
- `src/pages/Stats.tsx` – User statistics and progress tracking
- `src/pages/AIGuide.tsx` – AI learning guide and tips
- `src/data/challenges/` – Challenge definitions for Python, JavaScript, and Java
- `src/utils/` – Utility functions for authentication, Firestore, code execution, and AI
- `src/firebaseConfig.ts` – Firebase configuration

---

## Code Explanations

### App.tsx
- Maintains state for current page and selected programming language
- Manages user authentication state and navigation
- Renders appropriate page components based on current state
- Handles Firebase authentication state changes

### Navbar.tsx
- Provides navigation between different sections
- Displays user authentication status and progress
- Shows user profile information and achievements
- Responsive design with mobile-friendly navigation

### CodeEditor.tsx (Core Game Engine)
- **State Management**: Manages code input, output, level progression, stars, hints, and completion status
- **Code Execution**: Uses Judge0 API for secure code execution across Python, JavaScript, and Java
- **Validation System**: Lesson-specific validation patterns for 50 lessons per language (150 levels total)
- **Star Calculation**: 3-star system based on hint usage and completion speed
- **Level Progression**: Automatic unlocking of next lesson (3 levels) upon completion
- **Game Modes**: Main game (full editor) and Puzzle mode (fill-in-the-blank)
- **Data Persistence**: Saves progress to localStorage and Firestore

### GameOverview.tsx
- **Difficulty Selection**: Easy (Lessons 1-20), Intermediate (Lessons 21-40), Advanced (Lessons 41-50)
- **Language Support**: Python, JavaScript, and Java with language-specific content
- **Progress Tracking**: Shows completed levels, stars earned, and unlocked content
- **Level Generation**: Creates lesson cards with proper difficulty progression

### Firebase Integration
- **Authentication**: User sign-in/sign-up with email and password
- **Firestore**: Stores user progress, completed levels, stars, and achievements
- **Real-time Sync**: Progress syncs across devices for authenticated users
- **Guest Mode**: LocalStorage fallback for non-authenticated users

### Judge0 API Integration
- **Secure Execution**: Code runs on remote servers, not in browser
- **Multi-language Support**: Python (71), JavaScript (63), Java (62)
- **Error Handling**: Compilation errors, runtime errors, and execution failures
- **Output Capture**: Captures stdout, stderr, and execution status

---

## Requirements
- Node.js version 18 or newer
- npm (Node package manager)
- Firebase project with Authentication and Firestore enabled
- RapidAPI account with Judge0 API access

---

## Installation Steps
1. Clone or download the project files
2. Open a terminal and navigate to the project root directory
3. Install dependencies: `npm install`
4. Configure Firebase:
   - Create a Firebase project
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Copy config to `src/firebaseConfig.ts`
5. Configure Judge0 API:
   - Get RapidAPI key from RapidAPI Judge0 endpoint
   - Update API key in `src/utils/runCode.ts`
6. Start the development server: `npm run dev`
7. Open the displayed local URL in a browser

---

## Game Features

### Educational Content
- **50 Lessons per Language**: Comprehensive curriculum covering beginner to advanced topics
- **W3Schools Aligned**: Content follows established learning paths
- **Story-Driven**: Immersive CodeRealm theme with educational narratives
- **Progressive Difficulty**: Easy → Intermediate → Advanced progression

### Technical Features
- **Multi-Language Support**: Python, JavaScript, Java with language-specific validation
- **Real Code Execution**: Secure execution via Judge0 API
- **Star System**: 3-star rating based on performance
- **Hint System**: Progressive hint
- **Progress Tracking**: Detailed statistics and achievement system
- **Responsive Design**: Works on desktop, tablet, and mobile

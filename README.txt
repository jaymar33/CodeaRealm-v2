README.txt

**Note:** This version does not yet include Firebase/XAMPP.  
**To add in future iterations:** Firebase for authentication and user management, as well as a backend for persistent data handling.

---

## Tech Stack
- React 18
- TypeScript 5
- Vite 5
- TailwindCSS 3, PostCSS, Autoprefixer
- ESLint
- lucide-react (icon library)
- Firebase
- XAMPP

---

## Folder Structure
- `index.html` – Root HTML file
- `src/main.tsx` – Application entry point, mounts the root component
- `src/App.tsx` – Central container, manages page switching and language state
- `src/components/Navbar.tsx` – Top navigation bar for switching between sections
- `src/components/ParticleBackground.tsx` – Animated particle background implemented using `<canvas>`
- `src/pages/Home.tsx` – Landing section with call-to-action elements
- `src/pages/About.tsx` – Description of the project purpose and learning goals
- `src/pages/Features.tsx` – Feature grid and navigation options
- `src/pages/GameOverview.tsx` – Language selection and introductory information with a start button
- `src/pages/CodeEditor.tsx` – Simple in-browser code editor and level progression

---

## Code Explanations

### App.tsx
- Maintains two pieces of state:
  - `currentPage`: Determines which page is currently displayed. Possible values are `'home' | 'about' | 'game-overview' | 'features' | 'code-editor'`.
  - `selectedLanguage`: Tracks the programming language chosen by the user (`'javascript' | 'java' | 'python'`).
- Renders the `Navbar` component and passes the navigation function to child components.
- Renders one of the page components (`Home`, `About`, `GameOverview`, `Features`, or `CodeEditor`) based on the current state.

### Navbar.tsx
- Provides navigation buttons for switching between pages.
- Uses icon buttons and responsive design to adjust for different screen sizes.
- Invokes the `onNavigate` function to update the current page when an option is selected.

### ParticleBackground.tsx
- Implements a canvas animation of moving particles connected by lines when close to each other.
- Resizes dynamically with the window to maintain coverage of the screen.
- Adds a visual background effect for improved user experience.

### Home.tsx
- Displays the landing section with a title, hero text, and call-to-action buttons.
- Uses icons and styled sections to introduce the platform to users.

### About.tsx
- Provides a detailed explanation of the platform, its mission, and target audience.
- Includes comparison tables and highlights the benefits of using the platform.

### Features.tsx
- Lists the main features such as the professional code editor, quest-based learning, adaptive difficulty, progress tracking, and interactive challenges.
- Includes navigation buttons leading to other sections.

### GameOverview.tsx
- Allows users to choose between JavaScript, Java, or Python as their learning path.
- Generates and displays sample levels with progressive difficulty.
- Displays different types of quests, including story quests, drag-and-drop challenges, and code puzzles.
- Provides a start button that navigates to the Code Editor.

### CodeEditor.tsx
- Defines state variables including `code`, `output`, `isRunning`, `currentLevel`, `showHint`, and `isCompleted`.
- On execution, creates a mock `console` object to capture log output.
- Uses `new Function('console', code)` to run user code with the mocked console.
- Displays captured logs or success messages in the output panel. Errors are caught and shown to the user.
- Includes a placeholder completion rule: the code must contain the keywords “welcome” and “coderealm” to mark a level as complete.
- Provides functionality to reset the editor and increment the level number. Currently, up to 20 levels are available, though no detailed content is defined.
- At present, only JavaScript execution is supported. Options for Java and Python are placeholders.

**Security Note:** Running arbitrary code in the browser with `new Function` is not secure for production. Future implementations should use sandboxing strategies such as Web Workers with strict CSP, or offload execution to a secure backend service.

---

## Requirements
- Node.js version 18 or newer
- npm (Node package manager)

---

## Installation Steps
1. Unzip the project files.
2. Open a terminal and navigate to the project root directory containing `package.json`.  
   Example: `cd project`
3. Install dependencies:  
   `npm install`
4. Start the development server:  
   `npm run dev`  
   Open the displayed local URL in a browser.
5. Build the production bundle:  
   `npm run build`  
   Output will be created in the `dist/` directory.
6. Preview the production build:  
   `npm run preview`

---

## Usage Instructions
1. Launch the application and use the Navbar to navigate between sections.
2. Open the Game Overview page and select a language. Only JavaScript is functional in this version.
3. Click the Start button to proceed to the Code Editor.
4. Enter JavaScript code in the text area and click “Run Code”.
5. Review the output panel for logs or error messages.
6. Complete the simple placeholder rule to mark the level as completed.

---

## Future Enhancements
**This version does not yet include Firebase.**  
**To be added:**
- Firebase for authentication, user profiles, and data persistence
- Backend service for secure code execution, progress tracking, and storage

Additional improvements planned:
- Replace manual state navigation with React Router
- Implement real content and validators for levels
- Provide proper support for Java and Python execution
- Save progress to a database
- Introduce testing frameworks such as Vitest or Jest
- Add end-to-end testing with Playwright or Cypress
- Improve accessibility features and TypeScript strictness
- Prepare CI/CD pipeline for deployment on services such as Vercel or Netlify

---

## Notes on Firebase Integration
- Firebase Authentication will provide secure user sign-in and session management.
- Firestore will be used to store user progress, code submissions, and profile information.
- Firebase Cloud Functions can be used for secure validations and code execution where necessary.

This project has been structured to allow straightforward integration of Firebase and backend services in later iterations.

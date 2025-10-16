// Challenge types for CodeRealm

export interface Challenge {
  title: string;
  description: string;
  starterCode: string;
  solution: string;
  hint: string;
  story: string;
  type?: 'tutorial' | 'puzzle' | 'project';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  // For puzzle challenges, we can validate by checking that stdout includes these tokens
  expectedIncludes?: string[];
  // Optional richer puzzle mode metadata: render a fill-in-the-blanks UI
  puzzleMeta?: {
    mode: 'fill-in' | 'type-in';
    // A template where blanks are represented by tokens like __BLANK1__, __BLANK2__
    template: string;
    // Ordered list of blanks the learner must fill
    blanks: Array<{
      id: string; // e.g., BLANK1
      prompt: string; // short instruction for this blank
      choices?: string[]; // optional multiple-choice options
      placeholder?: string; // placeholder text for free entry
      solution: string; // correct value to validate
      hintSteps?: string[]; // progressive, specific hints for this blank
    }>;
    // Optional general hint steps beyond per-blank hints
    globalHintSteps?: string[];
  };
}

export type ChallengeSet = Challenge[];


// Game mode-specific EXP and star logic

export type GameMode = 'main' | 'puzzle' | 'dragdrop';

export interface ModeConfig {
  name: string;
  baseExpPerStar: number; // Base EXP for each star
  completionBonus: number; // Bonus EXP for completing
  timeBonus: number; // Bonus EXP for speed (under threshold)
  noHintBonus: number; // Bonus EXP for not using hints
  attemptPenalty: number; // EXP reduction per attempt (after first)
  starRules: {
    description: string;
    star1: string; // How to get 1 star
    star2: string; // How to get 2 stars
    star3: string; // How to get 3 stars
  };
}

export const MODE_CONFIGS: Record<GameMode, ModeConfig> = {
  main: {
    name: 'Story Levels',
    baseExpPerStar: 15, // Higher EXP for story mode (most challenging)
    completionBonus: 10,
    timeBonus: 15, // Bonus if under 60s
    noHintBonus: 5,
    attemptPenalty: 2, // Lose 2 EXP per extra attempt
    starRules: {
      description: 'Story levels are the core curriculum with complex challenges',
      star1: 'Complete the level (pass all tests)',
      star2: '+1 star for not using hints',
      star3: '+1 star for completing in under 60 seconds'
    }
  },
  puzzle: {
    name: 'Code Puzzles',
    baseExpPerStar: 10, // Medium EXP for puzzles (moderate difficulty)
    completionBonus: 5,
    timeBonus: 10, // Bonus if under 60s
    noHintBonus: 3,
    attemptPenalty: 1,
    starRules: {
      description: 'Quick coding challenges to practice specific concepts',
      star1: 'Complete the puzzle (fill in blanks correctly)',
      star2: '+1 star for not viewing hints',
      star3: '+1 star for completing in under 60 seconds'
    }
  },
  dragdrop: {
    name: 'Drag & Drop',
    baseExpPerStar: 8, // Lower EXP for drag-drop (easiest mode)
    completionBonus: 3,
    timeBonus: 7, // Bonus if under 60s
    noHintBonus: 2,
    attemptPenalty: 1,
    starRules: {
      description: 'Learn syntax by arranging code blocks in correct order',
      star1: 'Arrange blocks in correct order',
      star2: '+1 star for first try (no mistakes)',
      star3: '+1 star for completing in under 60 seconds'
    }
  }
};

export interface ExpCalculationParams {
  mode: GameMode;
  stars: number;
  attempts: number;
  timeTakenSeconds: number;
  usedHint: boolean;
}

/**
 * Calculate EXP gained for completing a level in any game mode
 * Different modes give different amounts of EXP based on their difficulty
 */
export function calculateModeExp(params: ExpCalculationParams): number {
  const config = MODE_CONFIGS[params.mode];
  let exp = 0;
  
  // Base EXP from stars
  exp += params.stars * config.baseExpPerStar;
  
  // Completion bonus
  exp += config.completionBonus;
  
  // Time bonus (if under 60 seconds)
  if (params.timeTakenSeconds <= 60) {
    exp += config.timeBonus;
  }
  
  // No hint bonus
  if (!params.usedHint) {
    exp += config.noHintBonus;
  }
  
  // Attempt penalty (max 10 attempts counted)
  const extraAttempts = Math.max(0, Math.min(params.attempts - 1, 10));
  exp -= extraAttempts * config.attemptPenalty;
  
  // Minimum 1 EXP
  return Math.max(1, exp);
}

/**
 * Get the total EXP needed to reach a specific level
 */
export function getExpForLevel(level: number): number {
  // Progressive exponential growth: levels get significantly harder
  // Level 1-10: 250 EXP each
  // Level 11-20: 400 EXP each
  // Level 21-30: 600 EXP each
  // Level 31-40: 850 EXP each
  // etc.
  const tier = Math.floor((level - 1) / 10);
  return 250 + (tier * 150) + (tier * tier * 50);
}

/**
 * Calculate level from total EXP
 */
export function getLevelFromExp(totalExp: number): { level: number; currentLevelExp: number; expToNextLevel: number } {
  let level = 1;
  let expConsumed = 0;
  
  while (true) {
    const expNeeded = getExpForLevel(level);
    if (expConsumed + expNeeded > totalExp) {
      break;
    }
    expConsumed += expNeeded;
    level++;
  }
  
  const currentLevelExp = totalExp - expConsumed;
  const expToNextLevel = getExpForLevel(level);
  
  return { level, currentLevelExp, expToNextLevel };
}


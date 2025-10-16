// Achievements and Titles System

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: (stats: PlayerStats) => boolean;
  unlockableTitle?: string;
  category: 'progress' | 'mastery' | 'speed' | 'special';
}

export interface PlayerStats {
  totalStars: number;
  totalExp: number;
  level: number;
  languageStats: Record<string, {
    stars: number;
    mainCompleted: number;
    puzzlesCompleted: number;
    dragDropCompleted: number;
  }>;
  threeStarCount: number;
}

export const ACHIEVEMENTS: Achievement[] = [
  // Progress Achievements
  {
    id: 'first_steps',
    title: 'First Steps',
    description: 'Complete your first level',
    icon: '👣',
    requirement: (stats) => stats.totalStars >= 1,
    unlockableTitle: 'Novice',
    category: 'progress'
  },
  {
    id: 'rising_star',
    title: 'Rising Star',
    description: 'Earn 10 stars',
    icon: '⭐',
    requirement: (stats) => stats.totalStars >= 10,
    unlockableTitle: 'Apprentice',
    category: 'progress'
  },
  {
    id: 'star_collector',
    title: 'Star Collector',
    description: 'Earn 50 stars',
    icon: '✨',
    requirement: (stats) => stats.totalStars >= 50,
    unlockableTitle: 'Star Seeker',
    category: 'progress'
  },
  {
    id: 'stellar_master',
    title: 'Stellar Master',
    description: 'Earn 100 stars',
    icon: '🌟',
    requirement: (stats) => stats.totalStars >= 100,
    unlockableTitle: 'Code Master',
    category: 'progress'
  },
  {
    id: 'constellation',
    title: 'Constellation',
    description: 'Earn 200 stars',
    icon: '💫',
    requirement: (stats) => stats.totalStars >= 200,
    unlockableTitle: 'Legendary Coder',
    category: 'progress'
  },
  
  // Mastery Achievements
  {
    id: 'web_wizard',
    title: 'Web Wizard',
    description: 'Earn 50 stars in JavaScript',
    icon: '🧙‍♂️',
    requirement: (stats) => (stats.languageStats.javascript?.stars || 0) >= 50,
    unlockableTitle: 'JavaScript Wizard',
    category: 'mastery'
  },
  {
    id: 'code_knight',
    title: 'Code Knight',
    description: 'Earn 50 stars in Java',
    icon: '⚔️',
    requirement: (stats) => (stats.languageStats.java?.stars || 0) >= 50,
    unlockableTitle: 'Java Knight',
    category: 'mastery'
  },
  {
    id: 'data_sage',
    title: 'Data Sage',
    description: 'Earn 50 stars in Python',
    icon: '🐍',
    requirement: (stats) => (stats.languageStats.python?.stars || 0) >= 50,
    unlockableTitle: 'Python Sage',
    category: 'mastery'
  },
  {
    id: 'polyglot',
    title: 'Polyglot',
    description: 'Earn at least 20 stars in all three languages',
    icon: '🌐',
    requirement: (stats) => 
      (stats.languageStats.javascript?.stars || 0) >= 20 &&
      (stats.languageStats.java?.stars || 0) >= 20 &&
      (stats.languageStats.python?.stars || 0) >= 20,
    unlockableTitle: 'Code Polyglot',
    category: 'mastery'
  },
  {
    id: 'trilingual_master',
    title: 'Trilingual Master',
    description: 'Earn 100 stars in each language',
    icon: '👑',
    requirement: (stats) => 
      (stats.languageStats.javascript?.stars || 0) >= 100 &&
      (stats.languageStats.java?.stars || 0) >= 100 &&
      (stats.languageStats.python?.stars || 0) >= 100,
    unlockableTitle: 'Supreme Architect',
    category: 'mastery'
  },

  // Speed Achievements
  {
    id: 'perfectionist',
    title: 'Perfectionist',
    description: 'Get 10 perfect 3-star ratings',
    icon: '💎',
    requirement: (stats) => stats.threeStarCount >= 10,
    unlockableTitle: 'Perfectionist',
    category: 'speed'
  },
  {
    id: 'speed_demon',
    title: 'Speed Demon',
    description: 'Get 50 perfect 3-star ratings',
    icon: '⚡',
    requirement: (stats) => stats.threeStarCount >= 50,
    unlockableTitle: 'Speed Demon',
    category: 'speed'
  },

  // Special Achievements
  {
    id: 'level_10',
    title: 'Decennial',
    description: 'Reach level 10',
    icon: '🎯',
    requirement: (stats) => stats.level >= 10,
    unlockableTitle: 'Veteran Coder',
    category: 'special'
  },
  {
    id: 'level_25',
    title: 'Quarter Century',
    description: 'Reach level 25',
    icon: '🏆',
    requirement: (stats) => stats.level >= 25,
    unlockableTitle: 'Elite Programmer',
    category: 'special'
  },
  {
    id: 'level_50',
    title: 'Half Century',
    description: 'Reach level 50',
    icon: '👑',
    requirement: (stats) => stats.level >= 50,
    unlockableTitle: 'Grand Master',
    category: 'special'
  },
  {
    id: 'puzzle_solver',
    title: 'Puzzle Solver',
    description: 'Complete 20 puzzles across all languages',
    icon: '🧩',
    requirement: (stats) => 
      (stats.languageStats.javascript?.puzzlesCompleted || 0) +
      (stats.languageStats.java?.puzzlesCompleted || 0) +
      (stats.languageStats.python?.puzzlesCompleted || 0) >= 20,
    unlockableTitle: 'Puzzle Master',
    category: 'special'
  },
  {
    id: 'drag_master',
    title: 'Drag & Drop Master',
    description: 'Complete 30 drag & drop challenges',
    icon: '🎪',
    requirement: (stats) => 
      (stats.languageStats.javascript?.dragDropCompleted || 0) +
      (stats.languageStats.java?.dragDropCompleted || 0) +
      (stats.languageStats.python?.dragDropCompleted || 0) >= 30,
    unlockableTitle: 'Syntax Guru',
    category: 'special'
  }
];

export function getUnlockedAchievements(stats: PlayerStats): Achievement[] {
  return ACHIEVEMENTS.filter(achievement => achievement.requirement(stats));
}

export function getUnlockedTitles(stats: PlayerStats): string[] {
  const unlockedAchievements = getUnlockedAchievements(stats);
  return unlockedAchievements
    .filter(a => a.unlockableTitle)
    .map(a => a.unlockableTitle!);
}

export function calculateMastery(stars: number, totalPossible: number = 450): string {
  // More rewarding mastery calculation based on actual achievement
  // With 62 stars at level 11, user should see meaningful progress
  const percentage = (stars / totalPossible) * 100;
  
  if (percentage === 0) return 'Beginner';
  if (percentage < 5) return 'Novice';         // 0-22 stars
  if (percentage < 15) return 'Apprentice';    // 23-67 stars - USER IS HERE
  if (percentage < 30) return 'Intermediate';  // 68-134 stars
  if (percentage < 50) return 'Advanced';      // 135-224 stars
  if (percentage < 70) return 'Expert';        // 225-314 stars
  if (percentage < 85) return 'Master';        // 315-382 stars
  if (percentage < 100) return 'Grand Master'; // 383-449 stars
  return 'Legendary';                          // 450 stars (perfect)
}

export function getMasteryColor(mastery: string): string {
  switch (mastery) {
    case 'Beginner': return 'text-gray-400';
    case 'Novice': return 'text-gray-300';
    case 'Apprentice': return 'text-blue-400';
    case 'Intermediate': return 'text-cyan-400';
    case 'Advanced': return 'text-green-400';
    case 'Expert': return 'text-yellow-400';
    case 'Master': return 'text-orange-400';
    case 'Grand Master': return 'text-purple-400';
    case 'Legendary': return 'text-pink-400';
    default: return 'text-gray-400';
  }
}


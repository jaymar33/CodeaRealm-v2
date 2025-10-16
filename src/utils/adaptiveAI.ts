export type Language = 'javascript' | 'java' | 'python';

export type SessionMetrics = {
  language: Language;
  level: number;
  attempts: number;
  timeTakenSeconds: number;
  usedHint: boolean;
  hadErrors: boolean;
  stars: number;
};

export type SkillProfile = {
  language: Language;
  rollingAccuracy: number; // 0..1
  avgAttempts: number;
  avgTimeSeconds: number;
  hintRate: number; // 0..1
  confidence: number; // 0..1
  lastUpdated: number;
};

const HISTORY_KEY = (userId: string, language: Language) => `${userId}_${language}_ai_history`;
const PROFILE_KEY = (userId: string, language: Language) => `${userId}_${language}_ai_profile`;

// Keep only the last N sessions per language to remain reactive
const MAX_HISTORY = 15;

export function recordSession(userId: string, metrics: SessionMetrics) {
  const historyKey = HISTORY_KEY(userId, metrics.language);
  const prev = JSON.parse(localStorage.getItem(historyKey) || '[]') as SessionMetrics[];
  const next = [...prev, metrics].slice(-MAX_HISTORY);
  localStorage.setItem(historyKey, JSON.stringify(next));
  const profile = computeProfile(next);
  localStorage.setItem(PROFILE_KEY(userId, metrics.language), JSON.stringify(profile));
  return profile;
}

export function getProfile(userId: string, language: Language): SkillProfile | null {
  const raw = localStorage.getItem(PROFILE_KEY(userId, language));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SkillProfile;
  } catch {
    return null;
  }
}

function computeProfile(history: SessionMetrics[]): SkillProfile {
  const language = (history[0]?.language || 'javascript') as Language;
  const total = history.length || 1;
  const successes = history.filter(h => h.stars > 0 && !h.hadErrors).length;
  const rollingAccuracy = successes / total;
  const avgAttempts = history.reduce((s, h) => s + h.attempts, 0) / total;
  const avgTimeSeconds = history.reduce((s, h) => s + h.timeTakenSeconds, 0) / total;
  const hintRate = history.filter(h => h.usedHint).length / total;
  // Confidence increases with more samples and consistency
  const consistency = 1 - Math.min(1, standardDeviation(history.map(h => h.stars)) / 2);
  const sampleFactor = Math.min(1, total / 10);
  const confidence = Math.max(0.2, 0.4 * consistency + 0.6 * sampleFactor);
  return { language, rollingAccuracy, avgAttempts, avgTimeSeconds, hintRate, confidence, lastUpdated: Date.now() };
}

function standardDeviation(values: number[]): number {
  if (values.length <= 1) return 0;
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / (values.length - 1);
  return Math.sqrt(variance);
}

export type NextLevelDecision = {
  advanceByLessons: number; // 0 = repeat lesson, 1 = next lesson, 2-3 = unlock multiple lessons
  hintIntensity: 'none' | 'gentle' | 'strong';
  message: string;
};

export function decideNextLevel(_currentLevel: number, metrics: SessionMetrics, profile?: SkillProfile | null): NextLevelDecision {
  const p = profile || computeProfile([metrics]);
  // Heuristics
  const fast = metrics.timeTakenSeconds <= 30;
  const clean = !metrics.hadErrors && metrics.attempts <= 2;
  const highStars = metrics.stars >= 3;
  const struggling = metrics.attempts >= 5 || metrics.timeTakenSeconds > 120 || metrics.usedHint;

  if (highStars && fast && clean) {
    if (p.rollingAccuracy > 0.85) {
      return {
        advanceByLessons: 3,
        hintIntensity: 'none',
        message: 'Legendary performance! Unlocking 3 new lessons (9 levels) — you\'re mastering this!'
      };
    }
    if (p.rollingAccuracy > 0.7) {
      return {
        advanceByLessons: 2,
        hintIntensity: 'none',
        message: 'Great job! You solved that quickly and cleanly. Unlocking 2 new lessons (6 levels) ahead!'
      };
    }
  }

  if (struggling || p.rollingAccuracy < 0.4) {
    return {
      advanceByLessons: 0,
      hintIntensity: 'strong',
      message: 'Let\'s reinforce the concept. I suggest repeating this lesson with additional guidance.'
    };
  }

  return {
    advanceByLessons: 1,
    hintIntensity: p.hintRate > 0.3 ? 'gentle' : 'none',
    message: 'Solid progress. Continue to the next lesson. I\'ll offer targeted hints if needed.'
  };
}

export function getSuggestionBanner(userId: string, language: Language): { title: string; body: string } | null {
  const profile = getProfile(userId, language);
  if (!profile) return null;
  const levelAdvice = profile.rollingAccuracy > 0.75 ? 'You can safely push into Intermediate levels.'
                    : profile.rollingAccuracy < 0.4 ? 'Focus on Easy levels for now and repeat fundamentals.'
                    : 'Stay in Easy → Intermediate transition and build consistency.';
  const hintAdvice = profile.hintRate > 0.4 ? 'Try fewer hints next time to boost retention.' : 'Awesome independence! Keep it up.';
  return {
    title: 'AI Mentor: Personalized Guidance',
    body: `${levelAdvice} Avg attempts ${profile.avgAttempts.toFixed(1)}, avg time ${Math.round(profile.avgTimeSeconds)}s. ${hintAdvice}`
  };
}

export function getFunPrompt(metrics: SessionMetrics, successful: boolean): string {
  const cheers = [
    '✨ Wizard-level moves!',
    '🛡️ Knightly precision!',
    '🐍 Pythonic grace!',
    '⚡ Speedrun energy!'
  ];
  const encourage = [
    'You got this — let’s break it into tiny steps.',
    'Try writing the plan as comments first, then fill in code.',
    'Add a quick log/print to see what’s happening at each step.',
    'Small wins stack up. One line at a time!'
  ];
  if (successful && metrics.stars === 3) {
    return `${cheers[Math.floor(Math.random()*cheers.length)]} Three stars! Want to try a tougher quest?`;
  }
  if (!successful) {
    if (metrics.attempts >= 3 || metrics.hadErrors) {
      return `It’s okay to stumble — ${encourage[Math.floor(Math.random()*encourage.length)]}`;
    }
  }
  return 'Nice progress! Keep going — I’m here if you need a nudge.';
}

// Helper function to unlock lessons based on AI recommendation
// Each lesson = 3 levels (e.g., lesson 1 = levels 1-3, lesson 2 = levels 4-6, etc.)
export function unlockLessonsBasedOnPerformance(
  userId: string,
  language: Language,
  currentLevel: number,
  metrics: SessionMetrics
): number[] {
  const profile = getProfile(userId, language);
  const decision = decideNextLevel(currentLevel, metrics, profile);
  
  // Calculate current lesson number (each lesson has 3 levels)
  const currentLesson = Math.ceil(currentLevel / 3);
  
  // Calculate which lessons to unlock based on AI decision
  const lessonsToUnlock: number[] = [];
  
  if (decision.advanceByLessons === 0) {
    // Repeat current lesson - just unlock the next level in current lesson if not completed
    const nextInLesson = currentLevel + 1;
    const lessonEnd = currentLesson * 3;
    if (nextInLesson <= lessonEnd) {
      lessonsToUnlock.push(nextInLesson);
    }
  } else {
    // Unlock multiple lessons (1-3 lessons = 3-9 levels)
    for (let i = 1; i <= decision.advanceByLessons; i++) {
      const targetLesson = currentLesson + i;
      const lessonStart = (targetLesson - 1) * 3 + 1;
      const lessonEnd = targetLesson * 3;
      
      // Add all 3 levels of each lesson
      for (let level = lessonStart; level <= lessonEnd && level <= 150; level++) {
        lessonsToUnlock.push(level);
      }
    }
  }
  
  return lessonsToUnlock;
}

export function getLiveHint(partial: {
  language: Language;
  attempts: number;
  timeTakenSeconds: number;
  usedHint: boolean;
  hadErrors: boolean;
}): string {
  // Beginner-friendly, clear guidance based on current behavior
  if (partial.hadErrors) {
    return '🔍 I see an error! Look at the red error message - it tells you exactly what went wrong. Try reading it carefully and fixing just that one thing.';
  }
  if (partial.attempts >= 3 && !partial.usedHint) {
    return '💡 You\'ve tried 3 times - that\'s brave! Try clicking the hint button now. It\'s not cheating, it\'s learning! Then make one small change and try again.';
  }
  if (partial.timeTakenSeconds > 75) {
    return '⏰ Take a breath! Let\'s break this down: 1) Write comments explaining what you want to do, 2) Write one line of code, 3) Test it. Small steps work!';
  }
  if (partial.usedHint) {
    return '✨ Great job using the hint! Now try to write the solution in your own words. Understanding is better than copying - you\'re learning!';
  }
  if (partial.attempts === 1) {
    return '🚀 Good start! Remember: write a little, test a little. If something doesn\'t work, add a print statement to see what\'s happening.';
  }
  return '💪 Keep going! If you get stuck, try adding console.log() to see what your variables contain. Debugging is a superpower!';
}



import { db } from '../firebaseConfig';
import { doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore';

export const savePlayerProgress = async (
  userId: string,
  data: Record<string, any>
) => {
  try {
    const payload: Record<string, any> = {};
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        payload[key] = arrayUnion(...value);
      } else {
        payload[key] = value;
      }
    });

    await setDoc(doc(db, 'players', userId), {
      ...payload,
      lastUpdated: new Date().toISOString()
    }, { merge: true });
    console.log("✅ Progress saved!");
  } catch (error) {
    console.error("❌ Error saving progress:", error);
  }
};

export const loadPlayerProgress = async (userId: string) => {
  try {
    const docRef = doc(db, 'players', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return docSnap.data();
    return null;
  } catch (error) {
    console.error("❌ Error loading progress:", error);
    return null;
  }
};

// Save aggregated player stats (separate collection, merge to avoid overwriting)
export const saveUserStats = async (
  userId: string,
  stats: {
    totalSeconds: number;
    attemptsByLanguage: Record<string, number>;
    starsByLevel: Record<string, any>;
    standing?: string;
    modesUnlocked: string[];
    lastUpdated?: string;
  }
) => {
  try {
    await setDoc(doc(db, 'playerStats', userId), {
      ...stats,
      lastUpdated: new Date().toISOString()
    }, { merge: true });
    console.log('✅ Stats saved!');
  } catch (error) {
    console.error('❌ Error saving stats:', error);
  }
};

// Save stars for any game mode (main, puzzle, dragdrop)
export const saveStars = async (
  userId: string,
  language: string,
  mode: 'main' | 'puzzle' | 'dragdrop',
  level: number,
  stars: number
) => {
  if (userId === 'guest') return; // Don't save to Firestore for guests
  
  try {
    const key = `${language}_${mode}_${level}_stars`;
    console.log(`💾 Saving stars to Firestore: ${key} = ${stars} for user ${userId}`);
    await setDoc(doc(db, 'playerStats', userId), {
      [key]: stars,
      lastUpdated: new Date().toISOString()
    }, { merge: true });
    console.log(`✅ Stars saved successfully: ${key} = ${stars}`);
  } catch (error) {
    console.error('❌ Error saving stars:', error);
  }
};

// Load all stars for a user
export const loadAllStars = async (userId: string): Promise<Record<string, number>> => {
  if (userId === 'guest') return {};
  
  try {
    console.log(`📥 Loading stars from Firestore for user: ${userId}`);
    const docRef = doc(db, 'playerStats', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const stars: Record<string, number> = {};
      Object.keys(data).forEach(key => {
        if (key.includes('_stars')) {
          stars[key] = data[key];
          console.log(`⭐ Loaded star: ${key} = ${data[key]}`);
        }
      });
      console.log(`✅ Loaded ${Object.keys(stars).length} star entries from Firestore`);
      return stars;
    }
    console.log('⚠️ No stars document found in Firestore');
    return {};
  } catch (error) {
    console.error('❌ Error loading stars:', error);
    return {};
  }
};

// Save user profile data (username, active title, level, achievements)
export const saveUserProfile = async (
  userId: string,
  data: {
    username?: string;
    activeTitle?: string;
    level?: number;
    totalExp?: number;
    unlockedAchievements?: string[];
    unlockedTitles?: string[];
  }
) => {
  if (userId === 'guest') return;
  
  try {
    await setDoc(doc(db, 'userProfiles', userId), {
      ...data,
      lastUpdated: new Date().toISOString()
    }, { merge: true });
    console.log('✅ User profile saved!');
  } catch (error) {
    console.error('❌ Error saving user profile:', error);
  }
};

// Load user profile data
export const loadUserProfile = async (userId: string): Promise<{ 
  username?: string; 
  activeTitle?: string; 
  level?: number;
  totalExp?: number;
  unlockedAchievements?: string[];
  unlockedTitles?: string[];
}> => {
  if (userId === 'guest') return {};
  
  try {
    const docRef = doc(db, 'userProfiles', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as { 
        username?: string; 
        activeTitle?: string; 
        level?: number;
        totalExp?: number;
        unlockedAchievements?: string[];
        unlockedTitles?: string[];
      };
    }
    return {};
  } catch (error) {
    console.error('❌ Error loading user profile:', error);
    return {};
  }
};

// Comprehensive sync function - saves all user data to Firestore
export const syncAllUserData = async (
  userId: string,
  data: {
    username?: string;
    activeTitle?: string;
    level?: number;
    totalExp?: number;
    unlockedAchievements?: string[];
    unlockedTitles?: string[];
    stars?: Record<string, number>;
    totalSeconds?: number;
    attemptsByLanguage?: Record<string, number>;
  }
) => {
  if (userId === 'guest') return;
  
  try {
    // Save profile data
    await saveUserProfile(userId, {
      username: data.username,
      activeTitle: data.activeTitle,
      level: data.level,
      totalExp: data.totalExp,
      unlockedAchievements: data.unlockedAchievements,
      unlockedTitles: data.unlockedTitles
    });
    
    // Save stars
    if (data.stars) {
      Object.entries(data.stars).forEach(([key, value]) => {
        // Parse star keys like: javascript-L1, java-P5, python-D3
        const match = key.match(/(javascript|java|python)-(L|P|D)(\d+)/);
        if (match) {
          const [, language, modePrefix, levelStr] = match;
          const mode = modePrefix === 'L' ? 'main' : modePrefix === 'P' ? 'puzzle' : 'dragdrop';
          const level = parseInt(levelStr);
          saveStars(userId, language, mode, level, value);
        }
      });
    }
    
    // Save stats
    if (data.totalSeconds !== undefined || data.attemptsByLanguage) {
      await saveUserStats(userId, {
        totalSeconds: data.totalSeconds || 0,
        attemptsByLanguage: data.attemptsByLanguage || {},
        starsByLevel: data.stars || {},
        modesUnlocked: [],
        lastUpdated: new Date().toISOString()
      });
    }
    
    console.log('✅ All user data synced successfully!');
  } catch (error) {
    console.error('❌ Error syncing user data:', error);
  }
};

// Load all user data from Firestore
export const loadAllUserData = async (userId: string) => {
  if (userId === 'guest') return null;
  
  try {
    const [profile, stars] = await Promise.all([
      loadUserProfile(userId),
      loadAllStars(userId)
    ]);
    
    return {
      profile,
      stars
    };
  } catch (error) {
    console.error('❌ Error loading all user data:', error);
    return null;
  }
};

// Test function to verify Firestore rules and permissions
export const testFirestoreRules = async (userId: string): Promise<boolean> => {
  if (userId === 'guest') return false;
  
  try {
    console.log(`🧪 Testing Firestore rules for user: ${userId}`);
    
    // Test playerStats collection
    const testStarsRef = doc(db, 'playerStats', userId);
    await setDoc(testStarsRef, { 
      test_stars: 1,
      lastUpdated: new Date().toISOString()
    }, { merge: true });
    
    await getDoc(testStarsRef);
    console.log('✅ playerStats write/read test passed');
    
    // Test userProfiles collection
    const testProfileRef = doc(db, 'userProfiles', userId);
    await setDoc(testProfileRef, { 
      test_profile: true,
      lastUpdated: new Date().toISOString()
    }, { merge: true });
    
    await getDoc(testProfileRef);
    console.log('✅ userProfiles write/read test passed');
    
    // Clean up test data
    await setDoc(testStarsRef, { test_stars: null }, { merge: true });
    await setDoc(testProfileRef, { test_profile: null }, { merge: true });
    
    console.log('✅ All Firestore rules tests passed!');
    return true;
  } catch (error: any) {
    console.error('❌ Firestore rules test failed:', error);
    console.error('Error details:', {
      name: error?.name,
      message: error?.message,
      code: error?.code
    });
    return false;
  }
};

export const pingFirestore = async (): Promise<boolean> => {
  try {
    console.log('🔄 Testing Firebase connection...');
    console.log('📋 Firebase config:', {
      projectId: 'coderealm-37f3c',
      authDomain: 'coderealm-37f3c.firebaseapp.com'
    });
    
    const testRef = doc(db, 'healthcheck', 'ping');
    console.log('📝 Writing test document...');
    await setDoc(testRef, { ts: Date.now() }, { merge: true });
    
    console.log('📖 Reading test document...');
    const snap = await getDoc(testRef);
    const ok = snap.exists();
    
    if (ok) {
      console.log('✅ Firestore reachable - test successful!');
    } else {
      console.log('⚠️ Firestore ping doc missing after write');
    }
    return ok;
  } catch (e: any) {
    console.error('❌ Firestore ping failed with error:', e);
    console.error('Error details:', {
      name: e?.name,
      message: e?.message,
      code: e?.code
    });
    return false;
  }
};
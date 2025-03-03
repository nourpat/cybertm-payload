import { db } from '../lib/firebase';
import { collection, addDoc, query, where, orderBy, limit, getDocs, serverTimestamp, enableIndexedDbPersistence } from 'firebase/firestore';

export const ActivityTypes = {
  DOCUMENT: 'document',
  PROFILE: 'profile',
  SECURITY: 'security',
  LOGIN: 'login',
  SYSTEM: 'system'
};

// Initialize Firestore persistence
try {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      console.warn('The current browser does not support persistence.');
    }
  });
} catch (err) {
  console.warn('Error enabling persistence:', err);
}

export async function logActivity(userId, type, message, metadata = {}) {
  if (!userId) {
    console.warn('No user ID provided for activity logging');
    return;
  }

  try {
    const activityRef = collection(db, 'activities');
    await addDoc(activityRef, {
      userId,
      type,
      message,
      metadata,
      timestamp: serverTimestamp()
    });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'activité:', error);
    // Don't throw the error to prevent UI disruption
  }
}

export async function getRecentActivities(userId, limitCount = 10) {
  if (!userId) {
    console.warn('No user ID provided for activity retrieval');
    return [];
  }

  try {
    const activitiesRef = collection(db, 'activities');
    const q = query(
      activitiesRef,
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return [];
    }

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Handle cases where timestamp might be null
      timestamp: doc.data().timestamp?.toDate().toISOString() || new Date().toISOString()
    }));
  } catch (error) {
    console.error('Erreur lors de la récupération des activités:', error);
    // Return empty array instead of throwing to prevent UI disruption
    return [];
  }
}
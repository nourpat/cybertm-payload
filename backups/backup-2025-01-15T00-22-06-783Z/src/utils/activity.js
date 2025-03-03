import { db } from '../lib/firebase';
import { collection, addDoc, query, where, orderBy, limit, getDocs, serverTimestamp } from 'firebase/firestore';

export const ActivityTypes = {
  DOCUMENT: 'document',
  PROFILE: 'profile',
  SECURITY: 'security',
  LOGIN: 'login',
  SYSTEM: 'system'
};

export async function logActivity(userId, type, message, metadata = {}) {
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
  }
}

export async function getRecentActivities(userId, limitCount = 10) {
  try {
    const activitiesRef = collection(db, 'activities');
    const q = query(
      activitiesRef,
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Conversion du timestamp Firestore en Date
      timestamp: doc.data().timestamp?.toDate().toISOString()
    }));
  } catch (error) {
    console.error('Erreur lors de la récupération des activités:', error);
    return [];
  }
}
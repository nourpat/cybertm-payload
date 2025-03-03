import { db } from '../lib/firebase';
import { collection, doc, setDoc, writeBatch } from 'firebase/firestore';

// Initialisation des collections Firebase
export async function initializeFirebaseCollections() {
  try {
    const batch = writeBatch(db);
    
    // Collection activities
    const activitiesRef = collection(db, 'activities');
    const activityDoc = doc(activitiesRef, 'schema');
    batch.set(activityDoc, {
      fields: {
        userId: 'string',
        type: 'string',
        message: 'string',
        metadata: 'map',
        timestamp: 'timestamp'
      },
      indexes: [
        'userId_timestamp_desc'
      ]
    }, { merge: true });

    // Collection users
    const usersRef = collection(db, 'users');
    const userDoc = doc(usersRef, 'schema');
    batch.set(userDoc, {
      fields: {
        nomComplet: 'string',
        email: 'string',
        telephone: 'string',
        societe: 'string',
        fonction: 'string',
        photoURL: 'string',
        documents: 'array',
        createdAt: 'timestamp',
        lastLoginAt: 'timestamp',
        disabled: 'boolean'
      }
    }, { merge: true });

    await batch.commit();
    console.log('Collections Firebase initialisées avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation des collections:', error);
  }
}
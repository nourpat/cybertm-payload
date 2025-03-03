import { db } from '../lib/firebase';
import { collection, doc, setDoc, writeBatch, getDocs } from 'firebase/firestore';

// Initialisation des collections Firebase
export async function initializeFirebaseCollections() {
  try {
    // Vérifier si les collections sont déjà initialisées
    const collections = ['activities', 'users', 'roiCalculations', 'backups', 'backupFiles'];
    const batch = writeBatch(db);
    
    for (const collectionName of collections) {
      // Créer un document d'initialisation pour chaque collection
      const collectionRef = collection(db, collectionName);
      const initDoc = doc(collectionRef, 'init');
      
      // Vérifier si le document d'initialisation existe déjà
      const docSnap = await getDocs(collection(db, collectionName));
      if (docSnap.empty) {
        batch.set(initDoc, {
          initialized: true,
          timestamp: new Date().toISOString(),
          version: '1.2.0'
        }, { merge: true });
      }
    }

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

    // Collection roiCalculations
    const roiCalculationsRef = collection(db, 'roiCalculations');
    const roiCalculationDoc = doc(roiCalculationsRef, 'schema');
    batch.set(roiCalculationDoc, {
      fields: {
        userId: 'string',
        input: 'map',
        results: 'map',
        timestamp: 'timestamp',
        version: 'string'
      },
      indexes: [
        'userId_timestamp_desc'
      ]
    }, { merge: true });

    // Collection backups
    const backupsRef = collection(db, 'backups');
    const backupDoc = doc(backupsRef, 'schema');
    batch.set(backupDoc, {
      fields: {
        userId: 'string',
        version: 'string',
        timestamp: 'timestamp',
        collections: 'map',
        metadata: 'map'
      },
      indexes: [
        'userId_timestamp_desc'
      ]
    }, { merge: true });

    // Collection backupFiles
    const backupFilesRef = collection(db, 'backupFiles');
    const backupFileDoc = doc(backupFilesRef, 'schema');
    batch.set(backupFileDoc, {
      fields: {
        userId: 'string',
        backupId: 'string',
        fileName: 'string',
        downloadUrl: 'string',
        timestamp: 'timestamp',
        version: 'string'
      },
      indexes: [
        'userId_timestamp_desc',
        'backupId'
      ]
    }, { merge: true });

    await batch.commit();
    console.log('Collections Firebase initialisées avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation des collections:', error);
    // Ne pas propager l'erreur pour éviter de bloquer le chargement de l'application
  }
}
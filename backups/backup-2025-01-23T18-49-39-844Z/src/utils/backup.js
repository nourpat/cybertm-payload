import { collection, getDocs, query, where, orderBy, limit, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { logActivity, ActivityTypes } from './activity';

// Structure des versions pour le suivi
export const BACKUP_VERSIONS = {
  '1.3.0': {
    date: '2025-01-17',
    features: [
      'Firebase Integration',
      'ROI Calculator',
      'Version Control System',
      'User Authentication',
      'Activity Logging',
      'Offline Support',
      'Data Persistence',
      'New Service Pages',
      'Connection Monitoring',
      'AI Services Integration'
    ],
    collections: ['users', 'activities', 'roiCalculations', 'backups', 'backupFiles']
  },
  '1.4.0': {
    date: '2025-01-18',
    features: [
      'Système de backup amélioré',
      'Gestion avancée des fichiers',
      'Nouveau système de versioning',
      'Restauration des onglets du profil',
      'Intégration OpenAI optimisée',
      'Amélioration des performances',
      'Correction des bugs',
      'Nouveau design des interfaces'
    ],
    collections: [
      'users',
      'activities',
      'roiCalculations',
      'backups',
      'backupFiles',
      'userDocuments',
      'userSettings'
    ]
  }
};

export async function createBackup(userId) {
  if (!userId) {
    throw new Error('ID utilisateur requis pour la sauvegarde');
  }

  try {
    const collections = BACKUP_VERSIONS[Object.keys(BACKUP_VERSIONS).pop()].collections;
    const backupData = {};
    const collectionsBackedUp = [];

    // Sauvegarder chaque collection
    for (const collectionName of collections) {
      const collectionRef = collection(db, collectionName);
      const q = query(
        collectionRef,
        where('userId', '==', userId),
        orderBy('timestamp', 'desc'),
        limit(100)
      );

      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        backupData[collectionName] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        collectionsBackedUp.push(collectionName);
      }
    }

    // Créer un document de backup
    const backupRef = collection(db, 'backups');
    const backupDoc = await getDoc(doc(backupRef, 'latest_' + userId));
    
    if (backupDoc.exists()) {
      // Archiver l'ancien backup
      const archiveRef = collection(db, 'backupArchives');
      await setDoc(doc(archiveRef, backupDoc.id), {
        ...backupDoc.data(),
        archivedAt: new Date().toISOString()
      });
    }

    // Sauvegarder le nouveau backup
    await setDoc(doc(backupRef, 'latest_' + userId), {
      userId,
      data: backupData,
      timestamp: new Date().toISOString(),
      version: Object.keys(BACKUP_VERSIONS).pop(),
      collectionsBackedUp
    });

    // Enregistrer l'activité
    await logActivity(userId, ActivityTypes.SYSTEM, 'Backup créé', {
      collectionsBackedUp,
      timestamp: new Date().toISOString()
    });

    return {
      success: true,
      collectionsBackedUp,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Erreur lors de la création du backup:', error);
    throw new Error('Erreur lors de la création du backup: ' + error.message);
  }
}
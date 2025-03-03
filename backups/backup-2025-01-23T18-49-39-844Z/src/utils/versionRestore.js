import { collection, query, where, getDocs, addDoc, serverTimestamp, writeBatch } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { logActivity, ActivityTypes } from './activity';

export const VERSIONS = {
  '1.0.0': {
    features: ['Version initiale'],
    date: '2025-01-15',
    hash: 'i9j0k1l2'
  },
  '1.1.0': {
    features: ['Calculateur ROI', 'Système de sauvegarde', 'Corrections'],
    date: '2025-01-15',
    hash: 'e5f6g7h8'
  },
  '1.2.0': {
    features: ['Firebase Integration', 'ROI Optimizations', 'UI Improvements'],
    date: '2025-01-16',
    hash: 'a1b2c3d4'
  },
  '1.3.0': {
    features: [
      'Nouvelles pages de services détaillées',
      'Système de monitoring de connexion',
      'Mode hors ligne amélioré',
      'Nouveaux services IA',
      'Interface utilisateur enrichie',
      'Optimisation des performances'
    ],
    date: '2025-01-17',
    hash: 'm7n8p9q0'
  },
  '1.4.0': {
    features: [
      'Restauration complète des onglets du profil',
      'Amélioration de la gestion des photos de profil',
      'Optimisation de la gestion des documents',
      'Intégration OpenAI améliorée',
      'Nouveau design des formulaires',
      'Amélioration des retours utilisateur',
      'Correction des bugs de navigation',
      'Optimisation des performances globales'
    ],
    date: '2025-01-18',
    hash: 'r5s6t7u8'
  }
};

export async function restoreToVersion(version, userId) {
  if (!VERSIONS[version]) {
    throw new Error('Version invalide');
  }

  if (!userId) {
    throw new Error('ID utilisateur requis');
  }

  try {
    // Sauvegarder l'état actuel avant la restauration
    const backupRef = await addDoc(collection(db, 'backups'), {
      userId,
      version: version,
      timestamp: serverTimestamp(),
      type: 'pre_restore',
      metadata: {
        reason: 'Restauration vers version ' + version
      }
    });

    // Récupérer les calculs ROI existants
    const roiRef = collection(db, 'roiCalculations');
    const q = query(roiRef, where('userId', '==', userId));
    const snapshot = await getDocs(q);

    // Créer un batch pour les opérations de restauration
    const batch = writeBatch(db);

    // Mettre à jour les calculs avec la nouvelle version
    let restoredCalculations = 0;
    snapshot.forEach((doc) => {
      const data = doc.data();
      batch.update(doc.ref, {
        version: version,
        updatedAt: serverTimestamp(),
        metadata: {
          ...data.metadata,
          restoredFrom: data.version,
          restoredAt: new Date().toISOString()
        }
      });
      restoredCalculations++;
    });

    // Enregistrer l'activité de restauration
    await logActivity(userId, ActivityTypes.SYSTEM, `Restauration vers la version ${version}`, {
      version,
      restoredCalculations,
      backupId: backupRef.id
    });

    // Exécuter toutes les opérations
    await batch.commit();

    return {
      success: true,
      version,
      restoredCalculations,
      backupId: backupRef.id
    };
  } catch (error) {
    console.error('Erreur lors de la restauration:', error);
    throw new Error('Erreur lors de la restauration: ' + error.message);
  }
}
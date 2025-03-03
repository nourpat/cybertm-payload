import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { 
  getFirestore, 
  enableIndexedDbPersistence,
  initializeFirestore,
  persistentLocalCache,
  persistentSingleTabManager,
  CACHE_SIZE_UNLIMITED,
  disableNetwork,
  enableNetwork,
  collection,
  getDocs
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBg5oJij5yV7Kr3jrvnRtBrMnufm6WW74I",
  authDomain: "website-cyber-987ae.firebaseapp.com",
  projectId: "website-cyber-987ae",
  storageBucket: "website-cyber-987ae.firebasestorage.app",
  messagingSenderId: "72601101616",
  appId: "1:72601101616:web:ee3924f39aa3022d31d4f5",
  measurementId: "G-R0JBTBNRTJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Initialiser Firestore avec une configuration optimisée pour le mode hors ligne
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentSingleTabManager(),
    cacheSizeBytes: CACHE_SIZE_UNLIMITED
  })
});

// État de la connexion
let isOnline = navigator.onLine;
let hasConnectivityIssues = false;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 3;
const RECONNECT_INTERVAL = 5000; // 5 secondes
const CONNECTION_TIMEOUT = 10000; // 10 secondes

// Liste des abonnés aux changements d'état
const subscribers = new Set();

// Fonction pour s'abonner aux changements d'état
export const subscribeToConnectionStatus = (callback) => {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
};

// Fonction pour notifier tous les abonnés
const notifySubscribers = () => {
  const status = getConnectionStatus();
  subscribers.forEach(callback => callback(status));
};

// Fonction pour vérifier la connexion au backend Firestore avec timeout
export const checkFirestoreConnection = async () => {
  try {
    const testPromise = new Promise(async (resolve, reject) => {
      try {
        // Tenter une opération simple pour vérifier la connexion
        const testRef = collection(db, 'connectionTest');
        await getDocs(testRef);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });

    // Ajouter un timeout
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Connection timeout')), CONNECTION_TIMEOUT);
    });

    // Attendre la première promesse qui se résout
    await Promise.race([testPromise, timeoutPromise]);
    
    // Si on arrive ici, la connexion est réussie
    hasConnectivityIssues = false;
    reconnectAttempts = 0;
    notifySubscribers();
    
    return true;
  } catch (error) {
    console.warn('Problème de connexion à Firestore:', error.message);
    hasConnectivityIssues = true;
    notifySubscribers();
    return false;
  }
};

// Fonction pour gérer la reconnexion
const handleReconnect = async () => {
  if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
    console.warn('Nombre maximum de tentatives de reconnexion atteint');
    hasConnectivityIssues = true;
    notifySubscribers();
    return;
  }

  try {
    await enableNetwork(db);
    const isConnected = await checkFirestoreConnection();
    
    if (isConnected) {
      console.log('Reconnexion à Firestore réussie');
      hasConnectivityIssues = false;
      reconnectAttempts = 0;
    } else {
      reconnectAttempts++;
      setTimeout(handleReconnect, RECONNECT_INTERVAL);
    }
    notifySubscribers();
  } catch (error) {
    console.error('Erreur lors de la tentative de reconnexion:', error);
    reconnectAttempts++;
    setTimeout(handleReconnect, RECONNECT_INTERVAL);
    notifySubscribers();
  }
};

// Gestionnaire d'événements pour la connexion
window.addEventListener('online', async () => {
  isOnline = true;
  console.log('Connexion Internet rétablie - Tentative de reconnexion à Firestore');
  await handleReconnect();
  notifySubscribers();
});

window.addEventListener('offline', async () => {
  isOnline = false;
  console.warn('Connexion Internet perdue - Passage en mode hors ligne');
  try {
    await disableNetwork(db);
  } catch (error) {
    console.error('Erreur lors du passage en mode hors ligne:', error);
  }
  notifySubscribers();
});

// Fonction pour vérifier l'état de la connexion
export const getConnectionStatus = () => ({
  isOnline,
  hasConnectivityIssues,
  reconnectAttempts,
  maxReconnectAttempts: MAX_RECONNECT_ATTEMPTS
});

// Initialiser la vérification de connexion
checkFirestoreConnection().catch(console.error);
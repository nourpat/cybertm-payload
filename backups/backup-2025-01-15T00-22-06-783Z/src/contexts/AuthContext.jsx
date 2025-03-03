import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
  updatePassword as firebaseUpdatePassword
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '../lib/firebase';
import { logActivity, ActivityTypes } from '../utils/activity';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!user.emailVerified) {
          await firebaseSignOut(auth);
          setUser(null);
        } else {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const userData = docSnap.data();
            
            // Mise à jour de la dernière connexion
            await updateDoc(docRef, {
              lastLoginAt: serverTimestamp()
            });

            // Log de l'activité de connexion
            await logActivity(user.uid, ActivityTypes.LOGIN, 'Connexion au compte');

            if (userData.photoURL && user.photoURL !== userData.photoURL) {
              await updateProfile(user, { photoURL: userData.photoURL });
            }
            
            setUser({ ...user, ...userData });
          } else {
            setUser(user);
          }
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const updateUserProfile = async (userData) => {
    if (!user) throw new Error('Aucun utilisateur connecté');

    const updates = {};
    const authUpdates = {};

    // Mise à jour des champs autorisés
    if (userData.nomComplet) {
      updates.nomComplet = userData.nomComplet;
      authUpdates.displayName = userData.nomComplet;
    }
    if (userData.photoURL) {
      updates.photoURL = userData.photoURL;
      authUpdates.photoURL = userData.photoURL;
    }
    if (userData.telephone) updates.telephone = userData.telephone;
    if (userData.societe) updates.societe = userData.societe;
    if (userData.fonction) updates.fonction = userData.fonction;

    try {
      // Mise à jour du profil Firebase Auth si nécessaire
      if (Object.keys(authUpdates).length > 0) {
        await updateProfile(auth.currentUser, authUpdates);
      }

      // Mise à jour des données Firestore
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        ...updates,
        updatedAt: serverTimestamp()
      });

      // Log de l'activité
      await logActivity(user.uid, ActivityTypes.PROFILE, 'Mise à jour du profil');

      // Mise à jour du state local
      setUser(prevUser => ({
        ...prevUser,
        ...updates
      }));

      return true;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
      throw error;
    }
  };

  const signUp = async ({ email, password, nomComplet, telephone, societe, fonction = '' }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      await updateProfile(user, {
        displayName: nomComplet
      });
      
      await sendEmailVerification(user);
      
      await setDoc(doc(db, 'users', user.uid), {
        nomComplet,
        telephone,
        societe,
        fonction,
        email,
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
        disabled: false,
        documents: []
      });

      await logActivity(user.uid, ActivityTypes.SYSTEM, 'Création du compte');
      
      await firebaseSignOut(auth);
      
      return user;
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('Cette adresse email est déjà utilisée');
      }
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      
      if (!user.emailVerified) {
        await firebaseSignOut(auth);
        throw new Error('email-not-verified');
      }
      
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const userData = docSnap.data();
        
        // Mise à jour de la dernière connexion
        await updateDoc(docRef, {
          lastLoginAt: serverTimestamp()
        });

        await logActivity(user.uid, ActivityTypes.LOGIN, 'Connexion au compte');
        
        return { ...user, ...userData };
      }
      
      return user;
    } catch (error) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        throw new Error('Email ou mot de passe incorrect');
      }
      throw error;
    }
  };

  const signOut = async () => {
    if (user) {
      await logActivity(user.uid, ActivityTypes.SECURITY, 'Déconnexion du compte');
    }
    return firebaseSignOut(auth);
  };

  const value = {
    user,
    signUp,
    signIn,
    signOut,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
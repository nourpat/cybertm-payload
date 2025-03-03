import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudArrowUpIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import { createBackup, BACKUP_VERSIONS } from '../../utils/backup';

export default function BackupControl() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const handleCreateBackup = async () => {
    if (!user) {
      setMessage({
        type: 'error',
        content: 'Vous devez être connecté pour créer un backup'
      });
      return;
    }

    if (!navigator.onLine) {
      setMessage({
        type: 'error',
        content: 'Connexion Internet requise pour créer un backup'
      });
      return;
    }

    try {
      setLoading(true);
      setMessage({
        type: 'info',
        content: 'Création du backup en cours...'
      });

      const result = await createBackup(user.uid);

      setMessage({
        type: 'success',
        content: `Backup créé avec succès. ${result.collectionsBackedUp.length} collections sauvegardées.`
      });

      // Reset du compteur de tentatives en cas de succès
      setRetryCount(0);

      // Effacer le message après 3 secondes
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } catch (error) {
      console.error('Erreur lors de la création du backup:', error);
      
      // Incrémenter le compteur de tentatives
      setRetryCount(prev => prev + 1);

      // Message d'erreur personnalisé selon le type d'erreur
      let errorMessage = error.message;
      if (retryCount >= 2) {
        errorMessage += ' Essayez de recharger la page ou de vous reconnecter.';
      }

      setMessage({
        type: 'error',
        content: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-900">Système de Backup</h3>
            <span className="text-xs text-gray-500">v{Object.keys(BACKUP_VERSIONS).reverse()[0]}</span>
          </div>

          <button
            onClick={handleCreateBackup}
            disabled={loading || !navigator.onLine}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Création en cours...
              </>
            ) : !navigator.onLine ? (
              <>
                <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                Hors ligne
              </>
            ) : (
              <>
                <CloudArrowUpIcon className="h-5 w-5 mr-2" />
                Télécharger un backup
              </>
            )}
          </button>

          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-4 p-3 rounded-md text-sm ${
                  message.type === 'error' ? 'bg-red-50 text-red-700 border-l-4 border-red-500' :
                  message.type === 'success' ? 'bg-green-50 text-green-700 border-l-4 border-green-500' :
                  'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                }`}
              >
                {message.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
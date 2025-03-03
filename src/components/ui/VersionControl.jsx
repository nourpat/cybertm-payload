import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InformationCircleIcon, ChevronDownIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { restoreToVersion, VERSIONS } from '../../utils/versionRestore';
import { useAuth } from '../../contexts/AuthContext';

export default function VersionControl() {
  const [isOpen, setIsOpen] = useState(false);
  const [restoreInProgress, setRestoreInProgress] = useState(false);
  const [restoreMessage, setRestoreMessage] = useState(null);
  const { user } = useAuth();

  const handleRestore = async (version) => {
    if (!user) {
      setRestoreMessage({
        type: 'error',
        content: 'Vous devez être connecté pour effectuer une restauration'
      });
      return;
    }

    try {
      setRestoreInProgress(true);
      setRestoreMessage({
        type: 'info',
        content: 'Restauration en cours...'
      });
      
      const result = await restoreToVersion(version, user.uid);
      
      setRestoreMessage({
        type: 'success',
        content: `Restauration vers la version ${version} effectuée avec succès. ${result.restoredCalculations} calculs restaurés.`
      });

      // Recharger la page après 2 secondes
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Erreur de restauration:', error);
      setRestoreMessage({
        type: 'error',
        content: error.message
      });
    } finally {
      setRestoreInProgress(false);
    }
  };

  const formatDate = (date) => {
    const options = { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(date).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between px-4 py-3 w-full hover:bg-gray-50 rounded-lg transition-colors"
        >
          <div className="flex items-center space-x-2">
            <InformationCircleIcon className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-900">
              Version {Object.keys(VERSIONS).reverse()[0]}
            </span>
          </div>
          <ChevronDownIcon 
            className={`h-4 w-4 text-gray-400 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-gray-100 max-h-96 overflow-y-auto"
            >
              {Object.entries(VERSIONS).reverse().map(([version, details], index) => (
                <motion.div
                  key={version}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 ${
                    index !== Object.keys(VERSIONS).length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">
                        Version {version}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(details.date)}
                      </span>
                    </div>
                    {version !== Object.keys(VERSIONS).reverse()[0] && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleRestore(version)}
                        disabled={restoreInProgress}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          restoreInProgress
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                        }`}
                      >
                        <ArrowUturnLeftIcon className="h-4 w-4" />
                        <span>
                          {restoreInProgress ? 'Restauration...' : 'Restaurer'}
                        </span>
                      </motion.button>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Hash: {details.hash}
                  </div>
                  <div className="space-y-2">
                    {details.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="text-sm text-gray-600 flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {restoreMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className={`p-4 text-sm ${
                restoreMessage.type === 'error' ? 'bg-red-50 text-red-600' :
                restoreMessage.type === 'success' ? 'bg-green-50 text-green-600' :
                'bg-blue-50 text-blue-600'
              }`}
            >
              {restoreMessage.content}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { WifiIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function ConnectionStatus({ isOnline, hasError }) {
  if (isOnline && !hasError) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className={`rounded-lg shadow-lg px-4 py-3 flex items-center space-x-3 ${
        isOnline ? 'bg-yellow-50' : 'bg-red-50'
      }`}>
        {isOnline ? (
          <WifiIcon className="h-5 w-5 text-yellow-500" />
        ) : (
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
        )}
        
        <span className={`text-sm font-medium ${
          isOnline ? 'text-yellow-800' : 'text-red-800'
        }`}>
          {isOnline
            ? 'Problème de connexion au serveur - Mode hors ligne actif'
            : 'Connexion Internet perdue - Mode hors ligne actif'}
        </span>
      </div>
    </motion.div>
  );
}
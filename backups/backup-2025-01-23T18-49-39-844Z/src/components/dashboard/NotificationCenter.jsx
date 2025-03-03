import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BellIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const mockNotifications = [
  {
    id: 1,
    type: 'success',
    title: 'Nouveau lead qualifié',
    message: 'TechSecure Solutions a été qualifié comme prospect à fort potentiel',
    date: '2024-01-15T10:30:00',
    read: false
  },
  {
    id: 2,
    type: 'warning',
    title: 'Rappel de suivi',
    message: 'Suivi à effectuer pour CyberGuard Industries avant le 18/01',
    date: '2024-01-15T09:15:00',
    read: false
  },
  {
    id: 3,
    type: 'info',
    title: 'Mise à jour du statut',
    message: 'Le statut du lead DataProtect a été mis à jour',
    date: '2024-01-14T16:45:00',
    read: false
  }
];

const notificationIcons = {
  success: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
  warning: <ExclamationCircleIcon className="h-6 w-6 text-yellow-500" />,
  info: <InformationCircleIcon className="h-6 w-6 text-blue-500" />,
  error: <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
};

export default function NotificationCenter({ onClose, onMarkAllRead }) {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState('all');

  const handleMarkAsRead = (notificationId) => {
    setNotifications(notifications.map(notif =>
      notif.id === notificationId ? { ...notif, read: true } : notif
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
    onMarkAllRead();
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.read;
    if (filter === 'read') return notif.read;
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BellIcon className="h-6 w-6 text-gray-500" />
            <h3 className="ml-2 text-lg font-medium text-gray-900">
              Notifications
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        {/* Filtres */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'all'
                  ? 'bg-blue-100 text-blue-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Toutes
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'unread'
                  ? 'bg-blue-100 text-blue-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Non lues
            </button>
          </div>
          <button
            onClick={handleMarkAllAsRead}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Tout marquer comme lu
          </button>
        </div>
      </div>

      {/* Liste des notifications */}
      <div className="max-h-96 overflow-y-auto">
        {filteredNotifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            Aucune notification
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer ${
                !notification.read ? 'bg-blue-50' : ''
              }`}
              onClick={() => handleMarkAsRead(notification.id)}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {notificationIcons[notification.type]}
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {notification.message}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {new Date(notification.date).toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => {/* Naviguer vers la page des notifications */}}
          className="w-full text-center text-sm text-blue-600 hover:text-blue-800"
        >
          Voir toutes les notifications
        </button>
      </div>
    </motion.div>
  );
}
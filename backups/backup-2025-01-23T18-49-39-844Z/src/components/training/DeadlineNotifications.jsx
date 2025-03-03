import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BellIcon, 
  CalendarIcon,
  ClockIcon,
  ExclamationCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const mockDeadlines = [
  {
    id: 1,
    title: "Remise du projet IA",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // Dans 2 jours
    course: "Introduction à l'IA",
    priority: "high"
  },
  {
    id: 2,
    title: "Quiz de mi-parcours",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5), // Dans 5 jours
    course: "Cybersécurité Avancée",
    priority: "medium"
  },
  {
    id: 3,
    title: "Évaluation finale",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 10), // Dans 10 jours
    course: "Machine Learning",
    priority: "low"
  }
];

export default function DeadlineNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [showPanel, setShowPanel] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Simuler la récupération des deadlines
    setNotifications(mockDeadlines.map(deadline => ({
      ...deadline,
      read: false
    })));
  }, []);

  useEffect(() => {
    setUnreadCount(notifications.filter(n => !n.read).length);
  }, [notifications]);

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getTimeRemaining = (dueDate) => {
    const now = new Date();
    const diff = dueDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 0) {
      return `${days} jour${days > 1 ? 's' : ''}`;
    }
    if (hours > 0) {
      return `${hours} heure${hours > 1 ? 's' : ''}`;
    }
    return 'Moins d\'une heure';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="relative p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
      >
        <BellIcon className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50"
          >
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Deadlines à venir
                </h3>
                <button
                  onClick={() => setShowPanel(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  Tout marquer comme lu
                </button>
              )}
            </div>

            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  Aucune deadline à venir
                </div>
              ) : (
                notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <CalendarIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            getPriorityColor(notification.priority)
                          }`}>
                            {notification.priority === 'high' ? 'Urgent' :
                             notification.priority === 'medium' ? 'Important' : 'Normal'}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">
                          {notification.course}
                        </p>
                        <div className="mt-1 flex items-center text-xs text-gray-500">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          Reste {getTimeRemaining(notification.dueDate)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => {/* Navigation vers la page des deadlines */}}
                className="w-full text-center text-sm text-blue-600 hover:text-blue-800"
              >
                Voir toutes les deadlines
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
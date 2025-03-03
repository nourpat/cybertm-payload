import React from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon,
  UserCircleIcon,
  KeyIcon,
  ClockIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const getActivityIcon = (type) => {
  switch (type) {
    case 'document':
      return <DocumentTextIcon className="h-5 w-5 text-blue-500" />;
    case 'profile':
      return <UserCircleIcon className="h-5 w-5 text-green-500" />;
    case 'security':
      return <KeyIcon className="h-5 w-5 text-orange-500" />;
    case 'login':
      return <ClockIcon className="h-5 w-5 text-purple-500" />;
    default:
      return <ExclamationCircleIcon className="h-5 w-5 text-gray-500" />;
  }
};

export default function ActivityFeed({ activities = [] }) {
  if (!activities.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        Aucune activité récente
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex-shrink-0">
            {getActivityIcon(activity.type)}
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm text-gray-900">{activity.message}</p>
            <p className="text-xs text-gray-500">
              {new Date(activity.timestamp).toLocaleString()}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
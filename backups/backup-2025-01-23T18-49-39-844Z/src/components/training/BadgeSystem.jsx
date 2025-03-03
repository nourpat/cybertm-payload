import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrophyIcon,
  StarIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

export default function BadgeSystem({ userBadges = [] }) {
  const badges = [
    {
      id: 'beginner',
      name: 'Débutant',
      icon: LightBulbIcon,
      description: 'Premiers pas dans la formation',
      color: 'blue'
    },
    {
      id: 'intermediate',
      name: 'Intermédiaire',
      icon: RocketLaunchIcon,
      description: 'Progression constante',
      color: 'green'
    },
    {
      id: 'advanced',
      name: 'Avancé',
      icon: StarIcon,
      description: 'Maîtrise approfondie',
      color: 'purple',
      locked: true
    },
    {
      id: 'expert',
      name: 'Expert',
      icon: TrophyIcon,
      description: 'Excellence reconnue',
      color: 'yellow',
      locked: true
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Badges et Récompenses
        </h3>
        <TrophyIcon className="h-6 w-6 text-yellow-500" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`relative p-4 rounded-lg ${
              badge.locked
                ? 'bg-gray-100'
                : `bg-${badge.color}-50 hover:bg-${badge.color}-100`
            } transition-colors`}
          >
            {badge.locked && (
              <div className="absolute inset-0 bg-gray-100/80 rounded-lg flex items-center justify-center">
                <LockClosedIcon className="h-6 w-6 text-gray-400" />
              </div>
            )}
            <div className="flex flex-col items-center text-center">
              <badge.icon className={`h-12 w-12 ${
                badge.locked
                  ? 'text-gray-400'
                  : `text-${badge.color}-500`
              } mb-2`} />
              <h4 className="font-medium text-gray-900">{badge.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{badge.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
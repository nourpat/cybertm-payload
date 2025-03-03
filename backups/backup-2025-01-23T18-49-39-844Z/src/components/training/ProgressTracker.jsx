import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  AcademicCapIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const mockProgress = {
  completion: 75,
  modules: [
    {
      id: 1,
      title: "Introduction à l'IA",
      status: "completed",
      score: 95,
      timeSpent: "2h 30min"
    },
    {
      id: 2,
      title: "Concepts fondamentaux",
      status: "completed",
      score: 88,
      timeSpent: "3h 15min"
    },
    {
      id: 3,
      title: "Applications pratiques",
      status: "in_progress",
      progress: 60,
      timeSpent: "1h 45min"
    },
    {
      id: 4,
      title: "Projet final",
      status: "not_started"
    }
  ],
  achievements: [
    {
      id: 1,
      title: "Premier pas",
      description: "Compléter le premier module",
      unlocked: true
    },
    {
      id: 2,
      title: "Expert en devenir",
      description: "Obtenir une note > 90%",
      unlocked: true
    },
    {
      id: 3,
      title: "Marathon d'apprentissage",
      description: "Étudier plus de 10h",
      unlocked: false
    }
  ]
};

export default function ProgressTracker() {
  return (
    <div className="space-y-8">
      {/* Progression globale */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Progression globale
          </h3>
          <span className="text-2xl font-bold text-blue-600">
            {mockProgress.completion}%
          </span>
        </div>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
            <div
              style={{ width: `${mockProgress.completion}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Progression par module
        </h3>
        <div className="space-y-6">
          {mockProgress.modules.map((module) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                {module.status === 'completed' ? (
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                ) : module.status === 'in_progress' ? (
                  <ClockIcon className="h-6 w-6 text-blue-500" />
                ) : (
                  <div className="h-6 w-6 rounded-full border-2 border-gray-300" />
                )}
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">{module.title}</h4>
                  {module.timeSpent && (
                    <p className="text-sm text-gray-500">
                      Temps passé: {module.timeSpent}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                {module.score && (
                  <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                    {module.score}%
                  </span>
                )}
                {module.progress && (
                  <span className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                    {module.progress}%
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Réalisations */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Réalisations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockProgress.achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-4 rounded-lg border-2 ${
                achievement.unlocked
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-2">
                <TrophyIcon className={`h-6 w-6 ${
                  achievement.unlocked ? 'text-green-500' : 'text-gray-400'
                }`} />
                <h4 className="ml-2 font-medium text-gray-900">
                  {achievement.title}
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
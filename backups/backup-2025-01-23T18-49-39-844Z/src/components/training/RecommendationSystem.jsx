import React from 'react';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon,
  ArrowTrendingUpIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function RecommendationSystem() {
  const recommendations = [
    {
      id: 'cyber-advanced',
      title: "Cybersécurité Avancée",
      type: "course",
      level: "Intermédiaire",
      duration: "4h",
      match: 95,
      description: "Approfondissez vos connaissances en sécurité réseau",
      path: "/training/cyber-advanced"
    },
    {
      id: 'threat-analysis',
      title: "Analyse des Menaces",
      type: "workshop",
      level: "Avancé",
      duration: "2h",
      match: 88,
      description: "Techniques d'analyse des cybermenaces modernes",
      path: "/training/threat-analysis"
    },
    {
      id: 'cloud-security',
      title: "Sécurité Cloud",
      type: "course",
      level: "Intermédiaire",
      duration: "3h",
      match: 82,
      description: "Protection des environnements cloud",
      path: "/training/cloud-security"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Recommandations Personnalisées
        </h3>
        <LightBulbIcon className="h-6 w-6 text-yellow-500" />
      </div>

      <div className="space-y-4">
        {recommendations.map((recommendation, index) => (
          <motion.div
            key={recommendation.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center">
                  <h4 className="text-lg font-medium text-gray-900">
                    {recommendation.title}
                  </h4>
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {recommendation.match}% match
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  {recommendation.description}
                </p>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <AcademicCapIcon className="h-4 w-4 mr-1" />
                    {recommendation.level}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {recommendation.duration}
                  </span>
                  <span className="flex items-center">
                    <BookOpenIcon className="h-4 w-4 mr-1" />
                    {recommendation.type}
                  </span>
                </div>
              </div>
              <Link
                to={recommendation.path}
                className="ml-4 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span className="mr-1">Commencer</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { 
  CloudIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function CloudSecurity() {
  const sections = [
    {
      title: "Sécurité Cloud Native",
      duration: "1h",
      topics: [
        "Architecture cloud sécurisée",
        "Identity & Access Management",
        "Encryption et gestion des clés",
        "Network security groups"
      ]
    },
    {
      title: "Protection des Données",
      duration: "1h",
      topics: [
        "Data classification",
        "Data Loss Prevention",
        "Backup et restauration",
        "Conformité et régulation"
      ]
    },
    {
      title: "Monitoring et Réponse",
      duration: "1h",
      topics: [
        "Cloud monitoring",
        "Log analysis",
        "Incident response",
        "Automatisation de la sécurité"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CloudIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Sécurité Cloud
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protection des environnements cloud et des données
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Durée: {section.duration}
                  </p>
                  <ul className="space-y-2">
                    {section.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
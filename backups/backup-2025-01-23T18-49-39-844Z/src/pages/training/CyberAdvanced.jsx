import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  ServerIcon,
  LockClosedIcon,
  DocumentTextIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function CyberAdvanced() {
  const modules = [
    {
      title: "Sécurité Réseau Avancée",
      duration: "1h30",
      topics: [
        "Architecture réseau sécurisée",
        "Segmentation et isolation",
        "Détection d'intrusion",
        "VPN et tunneling"
      ]
    },
    {
      title: "Gestion des Vulnérabilités",
      duration: "1h",
      topics: [
        "Scan de vulnérabilités",
        "Analyse des risques",
        "Priorisation des correctifs",
        "Suivi et documentation"
      ]
    },
    {
      title: "Réponse aux Incidents",
      duration: "1h30",
      topics: [
        "Détection des menaces",
        "Investigation numérique",
        "Containment et éradication",
        "Retour d'expérience"
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
            <ShieldCheckIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Cybersécurité Avancée
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Approfondissez vos connaissances en sécurité réseau et maîtrisez les techniques avancées de protection
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Durée: {module.duration}
                  </p>
                  <ul className="space-y-2">
                    {module.topics.map((topic, idx) => (
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
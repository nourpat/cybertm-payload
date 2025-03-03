import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function ThreatAnalysis() {
  const sections = [
    {
      title: "Analyse des Menaces",
      duration: "45min",
      topics: [
        "Identification des menaces",
        "Classification des attaques",
        "Évaluation des impacts",
        "Modélisation des menaces"
      ]
    },
    {
      title: "Techniques d'Investigation",
      duration: "45min",
      topics: [
        "Analyse des logs",
        "Forensics numérique",
        "Reverse engineering",
        "Analyse comportementale"
      ]
    },
    {
      title: "Atelier Pratique",
      duration: "30min",
      topics: [
        "Cas d'étude réels",
        "Exercices pratiques",
        "Mise en situation",
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
            <ExclamationTriangleIcon className="h-16 w-16 text-orange-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Analyse des Menaces
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maîtrisez les techniques d'analyse des cybermenaces modernes
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
                        <ArrowRightIcon className="h-4 w-4 text-orange-600 mr-2" />
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
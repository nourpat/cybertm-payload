import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function WhyUs() {
  const benefits = [
    {
      title: "Expertise Reconnue",
      description: "Plus de 10 ans d'expérience en cybersécurité et télémarketing B2B."
    },
    {
      title: "Approche Sur Mesure",
      description: "Solutions personnalisées adaptées à vos objectifs spécifiques."
    },
    {
      title: "ROI Garanti",
      description: "Résultats mesurables et retour sur investissement optimisé."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">Pourquoi Nous Choisir</h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez ce qui fait notre différence
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold">Prêt à commencer ?</h3>
          <p className="mt-4">
            Contactez-nous dès aujourd'hui pour une consultation gratuite
          </p>
        </motion.div>
      </div>
    </div>
  );
}
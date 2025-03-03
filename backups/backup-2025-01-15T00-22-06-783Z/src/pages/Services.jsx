import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    {
      title: "Télémarketing B2B Spécialisé",
      description: "Prospection ciblée auprès des décideurs IT et RSSI. Qualification précise des besoins en cybersécurité.",
      icon: UserGroupIcon,
    },
    {
      title: "Génération de Leads Qualifiés",
      description: "Identification et qualification des opportunités commerciales dans le secteur de la cybersécurité.",
      icon: ChartBarIcon,
    },
    {
      title: "Conseil en Cybersécurité",
      description: "Accompagnement personnalisé pour définir et mettre en œuvre votre stratégie de sécurité.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des solutions sur mesure pour votre sécurité informatique
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="text-blue-600">
                <service.icon className="h-12 w-12" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Approche Marketing Intégrée</h3>
            <p className="mt-4">
              Notre stratégie combine télémarketing traditionnel et marketing digital 
              pour maximiser votre visibilité et vos conversions dans le secteur de la cybersécurité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
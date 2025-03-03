import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  SparklesIcon,
  ChatBubbleBottomCenterTextIcon,
  PresentationChartLineIcon,
  ArrowPathIcon,
  AcademicCapIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: ShieldExclamationIcon,
      title: "Scan de Vulnérabilités Gratuit",
      description: "Évaluez la sécurité de votre infrastructure en quelques minutes.",
      path: "vulnerability-scan",
      highlight: true
    },
    {
      icon: UserGroupIcon,
      title: "Télémarketing B2B Spécialisé",
      description: "Prospection ciblée auprès des décideurs IT et RSSI.",
      path: "telemarketing-b2b"
    },
    {
      icon: ChartBarIcon,
      title: "Génération de Leads Qualifiés",
      description: "Identification et qualification des opportunités commerciales.",
      path: "lead-generation"
    },
    {
      icon: ShieldCheckIcon,
      title: "Conseil en Cybersécurité",
      description: "Accompagnement personnalisé pour votre stratégie de sécurité.",
      path: "cyber-consulting"
    },
    {
      icon: SparklesIcon,
      title: "Calcul de ROI par IA",
      description: "Analyse prédictive de vos investissements en cybersécurité.",
      path: "roi-calculator"
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: "Générateur de Scripts IA",
      description: "Scripts d'appel optimisés par l'intelligence artificielle.",
      path: "ai-script-generator"
    },
    {
      icon: PresentationChartLineIcon,
      title: "Dashboard IA",
      description: "Tableaux de bord intelligents et automatisés.",
      path: "ai-dashboard"
    },
    {
      icon: ArrowPathIcon,
      title: "Automatisation des Process",
      description: "Optimisation et automatisation de vos processus métiers.",
      path: "business-process-automation"
    },
    {
      icon: AcademicCapIcon,
      title: "Formation IA",
      description: "Programmes de formation IA adaptés à chaque métier.",
      path: "ai-training"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
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
            Des solutions innovantes propulsées par l'IA pour votre sécurité et votre croissance
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 ${
                service.highlight ? 'ring-2 ring-blue-500 ring-offset-2' : ''
              }`}
            >
              <div className="flex items-center justify-center">
                <service.icon className={`h-12 w-12 ${
                  service.highlight ? 'text-blue-600 animate-pulse' : 'text-blue-600'
                }`} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                {service.description}
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  to={`/services/${service.path}`}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md ${
                    service.highlight
                      ? 'text-white bg-blue-600 hover:bg-blue-700'
                      : 'text-white bg-blue-600 hover:bg-blue-700'
                  } transition-colors`}
                >
                  Découvrir
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
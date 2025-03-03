import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  DocumentMagnifyingGlassIcon, 
  WrenchScrewdriverIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function CyberConsulting() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: LockClosedIcon,
      title: "Audit de Sécurité",
      description: "Évaluation complète de votre infrastructure et de vos pratiques de sécurité.",
      details: [
        "Analyse des vulnérabilités",
        "Tests de pénétration",
        "Revue de configuration",
        "Évaluation de la conformité"
      ],
      color: "blue"
    },
    {
      icon: DocumentMagnifyingGlassIcon,
      title: "Analyse des Risques",
      description: "Identification et évaluation des menaces potentielles pour votre entreprise.",
      details: [
        "Cartographie des risques",
        "Évaluation des impacts",
        "Analyse des scénarios",
        "Recommandations prioritaires"
      ],
      color: "green"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Plan d'Action",
      description: "Recommandations concrètes et accompagnement dans leur mise en œuvre.",
      details: [
        "Roadmap sécurité",
        "Priorisation des actions",
        "Support à l'implémentation",
        "Suivi des progrès"
      ],
      color: "purple"
    }
  ];

  const expertises = [
    {
      title: "Gouvernance & Conformité",
      icon: ClipboardDocumentCheckIcon,
      items: [
        "Politique de sécurité",
        "Conformité RGPD",
        "Normes ISO 27001",
        "Gestion des risques"
      ],
      color: "blue"
    },
    {
      title: "Sécurité Technique",
      icon: ShieldCheckIcon,
      items: [
        "Architecture sécurisée",
        "Sécurité réseau",
        "Protection des données",
        "Gestion des accès"
      ],
      color: "green"
    },
    {
      title: "Gestion des Incidents",
      icon: SparklesIcon,
      items: [
        "Plan de réponse",
        "Gestion de crise",
        "Investigation",
        "Reprise d'activité"
      ],
      color: "orange"
    },
    {
      title: "Formation & Sensibilisation",
      icon: UserGroupIcon,
      items: [
        "Programme de formation",
        "Exercices pratiques",
        "Phishing simulé",
        "Bonnes pratiques"
      ],
      color: "purple"
    }
  ];

  const metrics = [
    {
      icon: ChartBarIcon,
      value: "-60%",
      label: "Réduction des incidents",
      detail: "de sécurité en moyenne après 6 mois",
      color: "blue"
    },
    {
      icon: ClipboardDocumentCheckIcon,
      value: "98%",
      label: "Taux de conformité",
      detail: "aux standards de sécurité",
      color: "green"
    },
    {
      icon: UserGroupIcon,
      value: "+85%",
      label: "Sensibilisation",
      detail: "des employés aux bonnes pratiques",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <ShieldCheckIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Conseil en Cybersécurité
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise et accompagnement personnalisé pour sécuriser votre entreprise face aux cybermenaces
          </p>
        </motion.div>

        {/* Services Section avec cartes interactives */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className={`bg-white rounded-xl shadow-lg p-8 border-t-4 border-${service.color}-500 transform transition-all duration-300`}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="flex items-center justify-center">
                <service.icon className={`h-12 w-12 text-${service.color}-600`} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                {service.description}
              </p>
              <motion.ul 
                className="mt-6 space-y-3"
                animate={{ opacity: activeService === index ? 1 : 0.7 }}
              >
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ArrowRightIcon className={`h-4 w-4 text-${service.color}-600 mr-2 flex-shrink-0`} />
                    <span>{detail}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Grid avec animation au survol */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Notre Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertises.map((expertise) => (
              <motion.div
                key={expertise.title}
                whileHover={{ scale: 1.05 }}
                className={`bg-${expertise.color}-50 rounded-lg p-6 transform transition-all duration-300`}
              >
                <expertise.icon className={`h-8 w-8 text-${expertise.color}-600 mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {expertise.title}
                </h3>
                <ul className="space-y-3">
                  {expertise.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRightIcon className={`h-4 w-4 text-${expertise.color}-600 mr-2`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics Section avec animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`bg-${metric.color}-600 rounded-lg p-8 text-white text-center transform hover:shadow-xl transition-all duration-300`}
            >
              <metric.icon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="font-medium mb-2">{metric.label}</div>
              <div className={`text-${metric.color}-100 text-sm`}>{metric.detail}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section avec effet de parallaxe */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12 overflow-hidden"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("/images/cyber-security-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              Prêt à sécuriser votre entreprise ?
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Demander une consultation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
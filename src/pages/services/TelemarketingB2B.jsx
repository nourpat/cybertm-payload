import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserGroupIcon, 
  PhoneIcon, 
  DocumentCheckIcon, 
  PresentationChartLineIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowRightIcon,
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

export default function TelemarketingB2B() {
  const [activeStep, setActiveStep] = useState(0);

  const features = [
    {
      icon: PhoneIcon,
      title: "Prospection Qualifiée",
      description: "Identification et qualification des décideurs IT et RSSI dans votre secteur cible.",
      details: [
        "Base de données qualifiée et mise à jour",
        "Ciblage précis des décideurs",
        "Qualification BANT (Budget, Autorité, Besoin, Timing)"
      ]
    },
    {
      icon: DocumentCheckIcon,
      title: "Scripts Personnalisés",
      description: "Élaboration de scripts d'appel adaptés à votre offre de cybersécurité.",
      details: [
        "Adaptation au contexte métier",
        "Approche consultative",
        "Gestion des objections spécifiques"
      ]
    },
    {
      icon: PresentationChartLineIcon,
      title: "Reporting Détaillé",
      description: "Suivi précis des performances et des retours du marché.",
      details: [
        "Tableaux de bord en temps réel",
        "Analyse des KPIs",
        "Insights marché"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Analyse Préliminaire",
      description: "Étude approfondie de votre marché et de vos objectifs commerciaux",
      subSteps: [
        "Analyse de votre positionnement",
        "Identification des cibles prioritaires",
        "Définition des objectifs quantitatifs"
      ],
      icon: ChartBarIcon,
      color: "blue"
    },
    {
      title: "Préparation Campagne",
      description: "Mise en place des outils et ressources nécessaires",
      subSteps: [
        "Création des scripts d'appel",
        "Formation des téléopérateurs",
        "Configuration des outils de suivi"
      ],
      icon: DocumentCheckIcon,
      color: "green"
    },
    {
      title: "Exécution",
      description: "Déploiement de la campagne avec monitoring continu",
      subSteps: [
        "Appels qualifiés",
        "Suivi en temps réel",
        "Ajustements quotidiens"
      ],
      icon: PhoneIcon,
      color: "purple"
    },
    {
      title: "Optimisation",
      description: "Amélioration continue basée sur les retours et résultats",
      subSteps: [
        "Analyse des performances",
        "Optimisation des scripts",
        "Affinage du ciblage"
      ],
      icon: SparklesIcon,
      color: "orange"
    }
  ];

  const metrics = [
    {
      icon: ShieldCheckIcon,
      value: "98%",
      label: "Taux de qualification",
      color: "green"
    },
    {
      icon: ChartBarIcon,
      value: "45%",
      label: "Taux de transformation",
      color: "blue"
    },
    {
      icon: ClockIcon,
      value: "< 48h",
      label: "Délai de transmission",
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
          <UserGroupIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Télémarketing B2B Spécialisé Cybersécurité
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Générez des leads qualifiés auprès des décideurs IT et RSSI avec une approche sur mesure
          </p>
        </motion.div>

        {/* Features Section avec cartes interactives */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center justify-center">
                <feature.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                {feature.description}
              </p>
              <ul className="mt-6 space-y-3">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section avec timeline interactive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Notre Processus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${index < processSteps.length - 1 ? 'process-step' : ''}`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`bg-${step.color}-50 rounded-lg p-6 h-full transform transition-transform duration-300 hover:scale-105`}>
                  <div className={`text-${step.color}-600 text-xl font-bold mb-4 flex items-center`}>
                    <step.icon className="h-6 w-6 mr-2" />
                    <span>{`0${index + 1}`}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.subSteps.map((subStep, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ArrowRightIcon className={`h-4 w-4 text-${step.color}-600 mr-2`} />
                        <span>{subStep}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRightIcon className={`h-8 w-8 text-${step.color}-600`} />
                  </div>
                )}
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
              <div className={`text-${metric.color}-100`}>{metric.label}</div>
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
              Prêt à générer plus de leads qualifiés ?
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Demander un devis
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
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  MagnifyingGlassIcon, 
  ClipboardDocumentCheckIcon, 
  ArrowTrendingUpIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
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

export default function LeadGeneration() {
  const [activeStep, setActiveStep] = useState(0);

  const benefits = [
    {
      icon: MagnifyingGlassIcon,
      title: "Ciblage Précis",
      description: "Identification des entreprises ayant un réel besoin en cybersécurité.",
      details: [
        "Analyse du marché cible",
        "Segmentation avancée",
        "Profiling des décideurs"
      ],
      color: "blue"
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Qualification Approfondie",
      description: "Évaluation détaillée des besoins et du potentiel de chaque lead.",
      details: [
        "Critères BANT",
        "Scoring prédictif",
        "Validation multi-niveaux"
      ],
      color: "green"
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "Conversion Optimisée",
      description: "Stratégies éprouvées pour maximiser le taux de conversion.",
      details: [
        "Nurturing personnalisé",
        "Suivi proactif",
        "Optimisation continue"
      ],
      color: "purple"
    }
  ];

  const methodologies = [
    {
      title: "Analyse Préliminaire",
      steps: [
        "Étude de marché approfondie",
        "Définition des ICP (Ideal Customer Profile)",
        "Cartographie des décideurs",
        "Analyse de la concurrence"
      ],
      icon: ChartBarIcon,
      color: "blue"
    },
    {
      title: "Stratégie Multi-canal",
      steps: [
        "Télémarketing ciblé",
        "Marketing digital",
        "Social Selling",
        "Events & Webinars"
      ],
      icon: SparklesIcon,
      color: "purple"
    },
    {
      title: "Qualification & Scoring",
      steps: [
        "Critères de qualification",
        "Système de scoring",
        "Validation des décideurs",
        "Évaluation du potentiel"
      ],
      icon: ClipboardDocumentCheckIcon,
      color: "green"
    },
    {
      title: "Nurturing & Conversion",
      steps: [
        "Parcours personnalisés",
        "Content marketing",
        "Suivi commercial",
        "Mesure des résultats"
      ],
      icon: RocketLaunchIcon,
      color: "orange"
    }
  ];

  const metrics = [
    {
      icon: UserGroupIcon,
      value: "85%",
      label: "Taux de qualification",
      detail: "Des leads correspondent parfaitement à vos critères",
      color: "blue"
    },
    {
      icon: ShieldCheckIcon,
      value: "92%",
      label: "Précision du ciblage",
      detail: "Des entreprises ciblées ont un besoin en cybersécurité",
      color: "green"
    },
    {
      icon: RocketLaunchIcon,
      value: "3x",
      label: "ROI moyen",
      detail: "Retour sur investissement constaté après 6 mois",
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
          <ChartBarIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Génération de Leads Qualifiés en Cybersécurité
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développez votre pipeline commercial avec des leads hautement qualifiés et prêts à investir dans leur sécurité
          </p>
        </motion.div>

        {/* Benefits Section avec cartes interactives */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className={`bg-white rounded-xl shadow-lg p-8 border-t-4 border-${benefit.color}-500`}
            >
              <div className="flex items-center justify-center">
                <benefit.icon className={`h-12 w-12 text-${benefit.color}-600`} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                {benefit.title}
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                {benefit.description}
              </p>
              <ul className="mt-6 space-y-3">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ArrowRightIcon className={`h-4 w-4 text-${benefit.color}-600 mr-2 flex-shrink-0`} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Methodology Section avec timeline interactive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Notre Méthodologie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${index < methodologies.length - 1 ? 'methodology-step' : ''}`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`bg-${method.color}-50 rounded-lg p-6 h-full transform transition-transform duration-300 hover:scale-105`}>
                  <div className={`text-${method.color}-600 text-xl font-bold mb-4 flex items-center`}>
                    <method.icon className="h-6 w-6 mr-2" />
                    <span>{`0${index + 1}`}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <ul className="space-y-2">
                    {method.steps.map((step, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ArrowRightIcon className={`h-4 w-4 text-${method.color}-600 mr-2`} />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < methodologies.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRightIcon className={`h-8 w-8 text-${method.color}-600`} />
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
              Prêt à générer des leads qualifiés ?
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Démarrer votre campagne
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
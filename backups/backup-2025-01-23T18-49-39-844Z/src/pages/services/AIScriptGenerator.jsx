import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChatBubbleBottomCenterTextIcon, 
  DocumentTextIcon, 
  AcademicCapIcon, 
  RocketLaunchIcon,
  SparklesIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowRightIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ScriptGenerator from '../../components/ai/ScriptGenerator';

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

export default function AIScriptGenerator() {
  const features = [
    {
      icon: SparklesIcon,
      title: "IA Avancée",
      description: "Génération de scripts optimisés par l'intelligence artificielle.",
      details: [
        "Modèles de langage avancés",
        "Apprentissage continu",
        "Adaptation contextuelle",
        "Personnalisation poussée"
      ],
      color: "blue"
    },
    {
      icon: DocumentTextIcon,
      title: "Scripts Personnalisés",
      description: "Création de scripts adaptés à votre cible et votre offre.",
      details: [
        "Ton et style adaptés",
        "Arguments ciblés",
        "Gestion des objections",
        "Scénarios multiples"
      ],
      color: "green"
    },
    {
      icon: LightBulbIcon,
      title: "Apprentissage Continu",
      description: "Amélioration constante basée sur les retours et les performances.",
      details: [
        "Analyse des résultats",
        "Optimisation continue",
        "Adaptation au marché",
        "Feedback intégré"
      ],
      color: "purple"
    }
  ];

  const benefits = [
    {
      title: "Efficacité Accrue",
      items: [
        "Réduction du temps de préparation",
        "Arguments plus percutants",
        "Meilleure conversion",
        "Productivité optimisée"
      ],
      color: "blue"
    },
    {
      title: "Personnalisation Avancée",
      items: [
        "Adaptation au secteur",
        "Profils clients ciblés",
        "Messages sur mesure",
        "Contexte spécifique"
      ],
      color: "green"
    },
    {
      title: "Amélioration Continue",
      items: [
        "Analyse des performances",
        "Optimisation automatique",
        "Tests A/B intégrés",
        "Recommandations IA"
      ],
      color: "purple"
    },
    {
      title: "Support Intelligent",
      items: [
        "Suggestions en temps réel",
        "Aide à la décision",
        "Ressources contextuelles",
        "Formation continue"
      ],
      color: "orange"
    }
  ];

  const metrics = [
    {
      icon: ChartBarIcon,
      value: "+45%",
      label: "Taux de conversion",
      detail: "par rapport aux scripts traditionnels",
      color: "blue"
    },
    {
      icon: ClockIcon,
      value: "-60%",
      label: "Temps de préparation",
      detail: "pour vos campagnes d'appels",
      color: "green"
    },
    {
      icon: ShieldCheckIcon,
      value: "93%",
      label: "Satisfaction client",
      detail: "sur les scripts générés",
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
          <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Générateur de Scripts IA
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Créez des scripts d'appel performants et personnalisés grâce à l'intelligence artificielle
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
              className={`bg-white rounded-xl shadow-lg p-8 border-t-4 border-${feature.color}-500 transform transition-all duration-300`}
            >
              <div className="flex items-center justify-center">
                <feature.icon className={`h-12 w-12 text-${feature.color}-600`} />
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
                    <ArrowRightIcon className={`h-4 w-4 text-${feature.color}-600 mr-2 flex-shrink-0`} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Generator Section avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Générez votre script personnalisé
          </h2>
          <ScriptGenerator />
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

        {/* Benefits Grid avec animation au survol */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Avantages de notre Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                whileHover={{ scale: 1.05 }}
                className={`bg-${benefit.color}-50 rounded-lg p-6 transform transition-all duration-300`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRightIcon className={`h-4 w-4 text-${benefit.color}-600 mr-2`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section avec effet de parallaxe */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
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
              Prêt à optimiser vos scripts d'appel ?
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Essayer gratuitement
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
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  CalculatorIcon, 
  PresentationChartBarIcon, 
  CurrencyEuroIcon,
  ArrowRightIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ROICalculator from '../../components/calculators/ROICalculator';

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

export default function ROICalculatorPage() {
  const features = [
    {
      icon: CalculatorIcon,
      title: "Calcul Prédictif",
      description: "Analyse détaillée du retour sur investissement de vos projets de cybersécurité.",
      details: [
        "Modèles IA avancés",
        "Données sectorielles",
        "Benchmarks précis",
        "Scénarios personnalisés"
      ],
      color: "blue"
    },
    {
      icon: PresentationChartBarIcon,
      title: "Visualisation Intelligente",
      description: "Tableaux de bord dynamiques pour une compréhension immédiate des résultats.",
      details: [
        "Graphiques interactifs",
        "KPIs en temps réel",
        "Comparaisons sectorielles",
        "Tendances prédictives"
      ],
      color: "green"
    },
    {
      icon: LightBulbIcon,
      title: "Recommandations IA",
      description: "Suggestions optimisées pour maximiser votre ROI.",
      details: [
        "Analyse prédictive",
        "Optimisation continue",
        "Conseils personnalisés",
        "Meilleures pratiques"
      ],
      color: "purple"
    }
  ];

  const metrics = [
    {
      icon: ChartBarIcon,
      value: "97%",
      label: "Précision des prévisions",
      detail: "grâce à nos modèles IA",
      color: "blue"
    },
    {
      icon: ShieldCheckIcon,
      value: "3.5x",
      label: "ROI moyen constaté",
      detail: "sur 12 mois",
      color: "green"
    },
    {
      icon: ClockIcon,
      value: "-40%",
      label: "Temps de décision",
      detail: "pour les investissements",
      color: "purple"
    }
  ];

  const benefits = [
    {
      title: "Prise de Décision Éclairée",
      items: [
        "Données objectives et quantifiées",
        "Scénarios comparatifs",
        "Analyses de sensibilité",
        "Recommandations contextuelles"
      ],
      color: "blue"
    },
    {
      title: "Optimisation Continue",
      items: [
        "Ajustements en temps réel",
        "Apprentissage automatique",
        "Benchmarks sectoriels",
        "Alertes prédictives"
      ],
      color: "green"
    },
    {
      title: "Reporting Avancé",
      items: [
        "Tableaux de bord personnalisés",
        "Exports automatisés",
        "Visualisations interactives",
        "Partage sécurisé"
      ],
      color: "purple"
    },
    {
      title: "Support Expert",
      items: [
        "Accompagnement dédié",
        "Formation utilisateur",
        "Assistance technique",
        "Mises à jour régulières"
      ],
      color: "orange"
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
          <SparklesIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Calcul de ROI par Intelligence Artificielle
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Optimisez vos investissements en cybersécurité grâce à notre calculateur intelligent alimenté par l'IA
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

        {/* Calculator Section avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Calculez votre ROI en Cybersécurité
          </h2>
          <ROICalculator />
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
              Prêt à optimiser vos investissements en cybersécurité ?
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Obtenir une analyse personnalisée
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
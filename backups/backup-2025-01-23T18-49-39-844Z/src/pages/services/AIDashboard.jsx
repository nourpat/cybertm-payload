import React from 'react';
import { motion } from 'framer-motion';
import { 
  PresentationChartLineIcon, 
  ChartBarIcon, 
  ArrowsPointingOutIcon, 
  CogIcon,
  SparklesIcon,
  ClockIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CloudArrowUpIcon,
  CommandLineIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon
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

export default function AIDashboard() {
  const features = [
    {
      icon: ChartBarIcon,
      title: "Visualisation Intelligente",
      description: "Tableaux de bord dynamiques qui s'adaptent à vos besoins.",
      details: [
        "Graphiques interactifs",
        "KPIs personnalisables",
        "Visualisations avancées",
        "Temps réel"
      ],
      color: "blue"
    },
    {
      icon: ArrowsPointingOutIcon,
      title: "Analyse Prédictive",
      description: "Anticipation des tendances et des opportunités.",
      details: [
        "Modèles IA avancés",
        "Prévisions précises",
        "Détection d'anomalies",
        "Alertes proactives"
      ],
      color: "green"
    },
    {
      icon: CogIcon,
      title: "Automatisation",
      description: "Mise à jour automatique des données et des indicateurs.",
      details: [
        "Intégration continue",
        "Synchronisation temps réel",
        "Workflows automatisés",
        "Rapports programmés"
      ],
      color: "purple"
    }
  ];

  const capabilities = [
    {
      title: "Sécurité",
      icon: ShieldCheckIcon,
      items: [
        "Monitoring des incidents",
        "Analyse des vulnérabilités",
        "Suivi des correctifs",
        "Alertes de sécurité"
      ],
      color: "blue"
    },
    {
      title: "Performance",
      icon: ChartBarIcon,
      items: [
        "Métriques temps réel",
        "Analyse des tendances",
        "Benchmarking",
        "Optimisation continue"
      ],
      color: "green"
    },
    {
      title: "Conformité",
      icon: ClipboardDocumentCheckIcon,
      items: [
        "Suivi réglementaire",
        "Audits automatisés",
        "Rapports de conformité",
        "Gestion des risques"
      ],
      color: "orange"
    },
    {
      title: "Collaboration",
      icon: UserGroupIcon,
      items: [
        "Partage sécurisé",
        "Annotations collaboratives",
        "Workflows d'équipe",
        "Notifications intelligentes"
      ],
      color: "purple"
    }
  ];

  const metrics = [
    {
      icon: SparklesIcon,
      value: "98%",
      label: "Précision des analyses",
      detail: "grâce à l'IA avancée",
      color: "blue"
    },
    {
      icon: ClockIcon,
      value: "-75%",
      label: "Temps de reporting",
      detail: "avec l'automatisation",
      color: "green"
    },
    {
      icon: ShieldCheckIcon,
      value: "+60%",
      label: "Détection précoce",
      detail: "des incidents de sécurité",
      color: "purple"
    }
  ];

  const technicalFeatures = [
    {
      icon: CpuChipIcon,
      title: "Moteur d'Analyse",
      items: [
        "Traitement parallèle",
        "Scalabilité automatique",
        "Haute disponibilité",
        "Monitoring temps réel"
      ],
      color: "blue"
    },
    {
      icon: CloudArrowUpIcon,
      title: "Architecture Cloud",
      items: [
        "Multi-cloud support",
        "Microservices",
        "Conteneurisation",
        "Load balancing"
      ],
      color: "green"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Outils de Développement",
      items: [
        "API RESTful",
        "SDK complet",
        "Webhooks",
        "Documentation interactive"
      ],
      color: "purple"
    },
    {
      icon: ShieldCheckIcon,
      title: "Sécurité & Conformité",
      items: [
        "Chiffrement E2E",
        "Conformité RGPD",
        "Audit logs",
        "Contrôle d'accès RBAC"
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
          <PresentationChartLineIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Dashboard IA
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilotez votre sécurité avec des tableaux de bord intelligents et automatisés
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

        {/* Capabilities Grid avec animation au survol */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Fonctionnalités Clés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability) => (
              <motion.div
                key={capability.title}
                whileHover={{ scale: 1.05 }}
                className={`bg-${capability.color}-50 rounded-lg p-6 transform transition-all duration-300`}
              >
                <capability.icon className={`h-8 w-8 text-${capability.color}-600 mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {capability.title}
                </h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRightIcon className={`h-4 w-4 text-${capability.color}-600 mr-2`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Features avec effet de carte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Caractéristiques Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.05 }}
                className={`bg-${feature.color}-50 rounded-lg p-6 transform transition-all duration-300`}
              >
                <feature.icon className={`h-8 w-8 text-${feature.color}-600 mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRightIcon className={`h-4 w-4 text-${feature.color}-600 mr-2`} />
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
              Prêt à optimiser votre pilotage sécurité ?
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Découvrir la démo
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
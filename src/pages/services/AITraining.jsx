import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  CurrencyEuroIcon,
  ClockIcon,
  CheckCircleIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import TrainingCalendar from '../../components/training/TrainingCalendar';
import BadgeSystem from '../../components/training/BadgeSystem';
import RecommendationSystem from '../../components/training/RecommendationSystem';

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

export default function AITraining() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const trainingTracks = [
    {
      id: 'marketing',
      title: "Marketing & Vente",
      icon: ChartBarIcon,
      color: "blue",
      modules: [
        "IA pour l'analyse de marché",
        "Prédiction des comportements clients",
        "Optimisation des campagnes",
        "Automatisation du lead scoring"
      ],
      duration: "12h",
      level: "Intermédiaire",
      price: "999€"
    },
    {
      id: 'cybersecurity',
      title: "Cybersécurité",
      icon: ShieldCheckIcon,
      color: "red",
      modules: [
        "Détection des menaces par IA",
        "Analyse prédictive des risques",
        "Automatisation de la réponse",
        "Protection intelligente des données"
      ],
      duration: "16h",
      level: "Avancé",
      price: "1299€"
    },
    {
      id: 'support',
      title: "Service Client & Support",
      icon: UserGroupIcon,
      color: "green",
      modules: [
        "Chatbots intelligents",
        "Analyse des sentiments",
        "Automatisation du support",
        "Personnalisation des interactions"
      ],
      duration: "10h",
      level: "Débutant",
      price: "799€"
    },
    {
      id: 'finance',
      title: "Finance & RH",
      icon: CurrencyEuroIcon,
      color: "purple",
      modules: [
        "Analyse prédictive financière",
        "Détection des fraudes",
        "Recrutement intelligent",
        "Gestion des talents par IA"
      ],
      duration: "14h",
      level: "Intermédiaire",
      price: "1099€"
    }
  ];

  const features = [
    {
      icon: SparklesIcon,
      title: "IA de Pointe",
      description: "Accès aux dernières technologies et modèles d'IA",
      color: "blue"
    },
    {
      icon: AcademicCapIcon,
      title: "Formateurs Experts",
      description: "Professionnels expérimentés en IA et métier",
      color: "green"
    },
    {
      icon: BriefcaseIcon,
      title: "Projets Pratiques",
      description: "Applications concrètes sur vos cas d'usage",
      color: "purple"
    }
  ];

  const benefits = [
    {
      title: "Formation Personnalisée",
      description: "Programmes adaptés à votre secteur et vos besoins spécifiques",
      metrics: "95% de satisfaction client",
      icon: LightBulbIcon,
      color: "blue"
    },
    {
      title: "Expertise Pratique",
      description: "Cas concrets et applications directes dans votre entreprise",
      metrics: "+40% de productivité",
      icon: RocketLaunchIcon,
      color: "green"
    },
    {
      title: "Support Continu",
      description: "Accompagnement et suivi post-formation",
      metrics: "Support 24/7",
      icon: UserGroupIcon,
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <AcademicCapIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Formation IA
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formez vos équipes aux technologies d'intelligence artificielle avec des programmes adaptés à chaque métier
          </p>
        </motion.div>

        {/* Parcours de Formation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {trainingTracks.map((track) => (
            <motion.div
              key={track.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-xl shadow-lg p-8 cursor-pointer transform transition-all duration-300 ${
                selectedTrack === track.id ? `ring-2 ring-${track.color}-500 ring-offset-2` : ''
              }`}
              onClick={() => setSelectedTrack(track.id)}
            >
              <div className="flex items-center mb-6">
                <track.icon className={`h-8 w-8 text-${track.color}-600`} />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  {track.title}
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {track.duration}
                  </span>
                  <span className="flex items-center">
                    <AcademicCapIcon className="h-4 w-4 mr-1" />
                    {track.level}
                  </span>
                  <span className="flex items-center">
                    <CurrencyEuroIcon className="h-4 w-4 mr-1" />
                    {track.price}
                  </span>
                </div>
                <ul className="space-y-2">
                  {track.modules.map((module, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircleIcon className={`h-5 w-5 text-${track.color}-500 mr-2`} />
                      {module}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link
                    to={`/training/${track.id}`}
                    className={`inline-flex items-center px-4 py-2 bg-${track.color}-600 text-white rounded-md hover:bg-${track.color}-700 transition-colors`}
                  >
                    En savoir plus
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Caractéristiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature) => (
            <div key={feature.title} className={`bg-${feature.color}-600 rounded-lg p-8 text-white`}>
              <feature.icon className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className={`text-${feature.color}-100`}>{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Système de Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Système de Progression
          </h2>
          <BadgeSystem />
        </motion.div>

        {/* Recommandations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Parcours Recommandés
          </h2>
          <RecommendationSystem />
        </motion.div>

        {/* Calendrier des Formations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Calendrier des Formations
          </h2>
          <TrainingCalendar />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Prêt à former vos équipes à l'IA ?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all"
          >
            Demander un programme personnalisé
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
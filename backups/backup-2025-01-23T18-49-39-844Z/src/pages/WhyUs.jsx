import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyEuroIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function WhyUs() {
  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: "Expertise Reconnue",
      description: "Plus de 10 ans d'expérience en cybersécurité et télémarketing B2B.",
      details: [
        "Équipe certifiée (CISSP, CEH, CISM)",
        "Veille technologique continue",
        "Méthodologie éprouvée",
        "Cas clients référents"
      ]
    },
    {
      icon: UserGroupIcon,
      title: "Approche Sur Mesure",
      description: "Solutions personnalisées adaptées à vos objectifs spécifiques.",
      details: [
        "Analyse approfondie de vos besoins",
        "Stratégie personnalisée",
        "Adaptation continue",
        "Accompagnement dédié"
      ]
    },
    {
      icon: ChartBarIcon,
      title: "ROI Garanti",
      description: "Résultats mesurables et retour sur investissement optimisé.",
      details: [
        "Métriques précises",
        "Reporting détaillé",
        "Optimisation continue",
        "Garantie de résultats"
      ]
    }
  ];

  const additionalBenefits = [
    {
      icon: AcademicCapIcon,
      title: "Formation Continue",
      description: "Programme de formation et de sensibilisation pour vos équipes",
      metrics: "95% de satisfaction"
    },
    {
      icon: ClockIcon,
      title: "Réactivité",
      description: "Support technique disponible 24/7",
      metrics: "Temps de réponse < 1h"
    },
    {
      icon: CurrencyEuroIcon,
      title: "Tarification Transparente",
      description: "Pas de coûts cachés, facturation basée sur les résultats",
      metrics: "ROI moyen de 150%"
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
            Une expertise unique combinant cybersécurité et télémarketing B2B
          </p>
        </motion.div>

        {/* Avantages principaux */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-4">
                <benefit.icon className="h-8 w-8 text-blue-600" />
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {benefit.description}
              </p>
              <ul className="space-y-3">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Métriques et résultats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {additionalBenefits.map((item, index) => (
            <div key={item.title} className="bg-blue-600 rounded-lg p-6 text-white">
              <item.icon className="h-8 w-8 mb-4" />
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-blue-100 mb-4">{item.description}</p>
              <div className="text-2xl font-bold">{item.metrics}</div>
            </div>
          ))}
        </motion.div>

        {/* Témoignages clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ce que nos clients disent
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="text-gray-600 italic mb-4">
                "L'expertise de l'équipe en cybersécurité nous a permis d'optimiser significativement notre stratégie de protection."
              </p>
              <p className="font-semibold">DSI, Grande entreprise du CAC 40</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="text-gray-600 italic mb-4">
                "Un ROI exceptionnel et une approche véritablement sur mesure qui a dépassé nos attentes."
              </p>
              <p className="font-semibold">RSSI, PME innovante</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Prêt à sécuriser votre entreprise ?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all"
          >
            Demander une consultation gratuite
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ShieldCheckIcon, ChartBarIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/90 z-10" />
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/cyber-security-bg.jpg"
            style={{ filter: 'brightness(0.8)' }}
          >
            <source src="/videos/cyber-security.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white max-w-3xl"
            >
              Sécuriser votre entreprise avec des solutions IA génératives de projets cybersécurité
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-100 max-w-2xl"
            >
              Expertise en télémarketing B2B spécialisée dans la cybersécurité. 
              Générez des leads qualifiés et développez votre activité en toute sécurité.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all"
              >
                Consultation gratuite
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#nos-services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all"
              >
                Découvrir nos services
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600">80%</div>
              <div className="mt-2 text-gray-600">des entreprises réduisent leur risque cyber</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600">95%</div>
              <div className="mt-2 text-gray-600">de satisfaction client</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600">+150%</div>
              <div className="mt-2 text-gray-600">de ROI moyen</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="nos-services" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Nos Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Des solutions sur mesure pour votre sécurité et votre croissance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: UserGroupIcon,
                title: "Télémarketing B2B Spécialisé",
                description: "Prospection ciblée auprès des décideurs IT et RSSI. Qualification précise des besoins en cybersécurité."
              },
              {
                icon: ChartBarIcon,
                title: "Génération de Leads Qualifiés",
                description: "Identification et qualification des opportunités commerciales dans le secteur de la cybersécurité."
              },
              {
                icon: ShieldCheckIcon,
                title: "Conseil en Cybersécurité",
                description: "Accompagnement personnalisé pour définir et mettre en œuvre votre stratégie de sécurité."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <service.icon className="h-12 w-12 text-blue-600" />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Pourquoi Nous Choisir</h2>
            <p className="mt-4 text-xl text-gray-600">
              Notre expertise fait la différence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Approche</h3>
              <ul className="space-y-4">
                {[
                  "Expertise dédiée en cybersécurité",
                  "Équipe commerciale spécialisée",
                  "Méthodologie éprouvée",
                  "Suivi personnalisé",
                  "Résultats mesurables"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-blue-600 rounded-lg p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Vos Avantages</h3>
              <ul className="space-y-4">
                {[
                  "Pipeline de leads qualifiés constant",
                  "Réduction du cycle de vente",
                  "Optimisation du ROI",
                  "Visibilité accrue sur le marché",
                  "Croissance maîtrisée"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-white mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Prêt à sécuriser votre avenir numérique ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Discutons de vos besoins en cybersécurité et développons ensemble une stratégie sur mesure.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transform hover:scale-105 transition-all"
            >
              Parlons de votre projet
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
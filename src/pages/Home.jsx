import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  CheckCircleIcon,
  SparklesIcon,
  ChatBubbleBottomCenterTextIcon,
  PresentationChartLineIcon,
  ShieldExclamationIcon
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

export default function Home() {
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
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section avec effet parallaxe */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/90 z-10" />
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
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
          </motion.div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white max-w-3xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-300"
              >
                Sécuriser votre entreprise
              </motion.span>{" "}
              avec des solutions IA Cybersécurité
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
                className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Consultation gratuite
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.span>
              </Link>
              <a
                href="#nos-services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
              >
                Découvrir nos services
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Statistics Section avec animation au scroll */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                80%
              </div>
              <div className="mt-2 text-gray-600">des entreprises réduisent leur risque cyber</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                95%
              </div>
              <div className="mt-2 text-gray-600">de satisfaction client</div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                +150%
              </div>
              <div className="mt-2 text-gray-600">de ROI moyen</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services Section avec effet de carte */}
      <div id="nos-services" className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900"
            >
              Nos Services
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-xl text-gray-600"
            >
              Des solutions innovantes propulsées par l'IA pour votre sécurité et votre croissance
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className={`bg-white rounded-xl shadow-lg p-8 ${
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
                    className={`inline-flex items-center px-4 py-2 rounded-md ${
                      service.highlight
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800'
                    } transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    Découvrir
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section avec effet de parallaxe */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-16 overflow-hidden"
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-8"
            >
              Prêt à sécuriser votre avenir numérique ?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
            >
              Discutons de vos besoins en cybersécurité et développons ensemble une stratégie sur mesure.
            </motion.p>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Parlons de votre projet
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 'best-practices-2024',
    title: 'Les meilleures pratiques en cybersécurité pour 2024',
    description: 'Découvrez les dernières tendances et recommandations pour protéger votre entreprise.',
    date: '2024-01-15'
  },
  {
    id: 'social-engineering-threats',
    title: 'L\'ingénierie sociale : La menace invisible',
    description: 'Comment se protéger contre les techniques de manipulation en cybersécurité.',
    date: '2024-01-20'
  },
  {
    id: 'ai-cybersecurity',
    title: 'L\'IA dans la cybersécurité : Opportunités et Risques',
    description: 'Comment l\'intelligence artificielle transforme la sécurité informatique et crée de nouveaux défis.',
    date: '2024-01-25'
  },
  {
    id: 'zero-trust-security',
    title: 'Sécurité Zero Trust : Le Nouveau Standard',
    description: 'Pourquoi adopter une approche "Ne faire confiance à personne" est crucial en 2024.',
    date: '2024-01-28'
  },
  {
    id: 'gdpr-compliance',
    title: 'RGPD et Télémarketing B2B',
    description: 'Guide pratique pour respecter le RGPD dans vos campagnes de télémarketing.',
    date: '2024-02-01'
  },
  {
    id: 'cloud-security',
    title: 'Sécurité Cloud : Enjeux et Solutions',
    description: 'Protégez vos données dans le cloud avec les meilleures pratiques de sécurité.',
    date: '2024-02-05'
  },
  {
    id: 'ransomware-protection',
    title: 'Protection contre les Ransomwares en 2024',
    description: 'Stratégies avancées pour prévenir et gérer les attaques par rançongiciel.',
    date: '2024-02-08'
  },
  {
    id: 'remote-work-security',
    title: 'Sécurité du Travail à Distance',
    description: 'Comment sécuriser efficacement le travail à distance de vos équipes.',
    date: '2024-02-10'
  },
  {
    id: 'quantum-computing-threats',
    title: 'L\'Informatique Quantique : Menace pour la Cybersécurité',
    description: 'Impact de l\'informatique quantique sur la sécurité des données et solutions.',
    date: '2024-02-12'
  },
  {
    id: 'email-security',
    title: 'Sécurité des Emails en Entreprise',
    description: 'Guide complet pour sécuriser vos communications par email et prévenir les attaques.',
    date: '2024-02-15'
  },
  {
    id: 'siem-technology',
    title: 'SIEM : L\'Intelligence de la Sécurité',
    description: 'Comprendre et exploiter les systèmes de gestion des informations et événements de sécurité.',
    date: '2024-02-18'
  },
  {
    id: 'mssp-services',
    title: 'MSSP : Externaliser sa Sécurité',
    description: 'Avantages et considérations pour le choix d\'un fournisseur de services de sécurité managés.',
    date: '2024-02-20'
  }
];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Obtenir les articles pour la page courante
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">Notre Blog</h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez nos derniers articles sur la cybersécurité et le télémarketing B2B
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map(article => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {article.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {article.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                  <Link
                    to={`/blog/${article.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Lire la suite →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                ←
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    currentPage === index + 1
                      ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === totalPages
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                →
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
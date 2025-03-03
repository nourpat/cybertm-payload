import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  DocumentIcon,
  FolderIcon,
  LockClosedIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ArrowUpTrayIcon
} from '@heroicons/react/24/outline';

const categories = ['Tous', 'Contrats', 'Rapports', 'Présentations', 'Documents techniques', 'Autres'];

const mockDocuments = [
  {
    id: 1,
    name: 'Rapport_Securite_Q4_2023.pdf',
    category: 'Rapports',
    size: '2.4 MB',
    date: '2024-01-15',
    secure: true
  },
  {
    id: 2,
    name: 'Presentation_Solution.pptx',
    category: 'Présentations',
    size: '5.1 MB',
    date: '2024-01-14',
    secure: true
  },
  {
    id: 3,
    name: 'Contrat_Service_Template.docx',
    category: 'Contrats',
    size: '1.2 MB',
    date: '2024-01-13',
    secure: true
  },
  {
    id: 4,
    name: 'Documentation_Technique_v2.pdf',
    category: 'Documents techniques',
    size: '3.7 MB',
    date: '2024-01-12',
    secure: true
  }
];

export default function DocumentManager() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const fileInputRef = useRef(null);

  const filteredDocuments = mockDocuments
    .filter(doc => 
      (selectedCategory === 'Tous' || doc.category === selectedCategory) &&
      (doc.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'size') return parseFloat(b.size) - parseFloat(a.size);
      return 0;
    });

  const handleUpload = (files) => {
    if (!files || files.length === 0) return;
    
    // Logique d'upload sécurisé
    console.log('Files to upload:', files);
    
    // Afficher les fichiers sélectionnés
    Array.from(files).forEach(file => {
      console.log('File:', file.name, 'Size:', file.size, 'Type:', file.type);
    });
    
    setShowUploadModal(false);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    handleUpload(files);
  };

  return (
    <div className="space-y-4">
      {/* En-tête et actions */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un document..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DocumentIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="date">Date</option>
            <option value="name">Nom</option>
            <option value="size">Taille</option>
          </select>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <ArrowUpTrayIcon className="h-5 w-5 mr-2" />
          Ajouter un document
        </button>
      </div>

      {/* Catégories */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Liste des documents */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y divide-gray-200">
          {filteredDocuments.map((doc) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <FolderIcon className="h-10 w-10 text-blue-500" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-sm font-medium text-gray-900">
                        {doc.name}
                      </h3>
                      {doc.secure && (
                        <LockClosedIcon className="h-4 w-4 ml-2 text-green-500" />
                      )}
                    </div>
                    <div className="mt-1 flex items-center space-x-2 text-xs text-gray-500">
                      <span>{doc.category}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>{new Date(doc.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    title="Voir"
                    className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <EyeIcon className="h-5 w-5" />
                  </button>
                  <button
                    title="Modifier"
                    className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    title="Supprimer"
                    className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-100 transition-colors"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal d'upload */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Ajouter un document
            </h3>
            <div className="space-y-4">
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <ArrowUpTrayIcon className="h-12 w-12 mx-auto text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Glissez-déposez vos fichiers ici ou
                </p>
                <button 
                  type="button"
                  onClick={handleBrowseClick}
                  className="mt-2 text-blue-600 hover:text-blue-700"
                >
                  parcourez vos fichiers
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  multiple
                  onChange={(e) => handleUpload(e.target.files)}
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-md"
                >
                  Annuler
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Sélectionner des fichiers
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
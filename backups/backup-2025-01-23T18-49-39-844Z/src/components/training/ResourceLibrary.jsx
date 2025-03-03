import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderIcon,
  DocumentIcon,
  VideoCameraIcon,
  BookOpenIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const mockResources = [
  {
    id: 1,
    title: "Introduction à l'IA",
    type: "video",
    format: "MP4",
    duration: "45 min",
    size: "250 MB"
  },
  {
    id: 2,
    title: "Guide des bonnes pratiques",
    type: "document",
    format: "PDF",
    pages: 25,
    size: "2.5 MB"
  },
  {
    id: 3,
    title: "Exercices pratiques",
    type: "workbook",
    format: "PDF",
    pages: 15,
    size: "1.8 MB"
  }
];

export default function ResourceLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getResourceIcon = (type) => {
    switch (type) {
      case 'video':
        return <VideoCameraIcon className="h-6 w-6 text-blue-600" />;
      case 'document':
        return <DocumentIcon className="h-6 w-6 text-green-600" />;
      case 'workbook':
        return <BookOpenIcon className="h-6 w-6 text-purple-600" />;
      default:
        return <FolderIcon className="h-6 w-6 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Ressources pédagogiques
        </h3>
      </div>

      {/* Filtres et recherche */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une ressource..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-4 py-2 rounded-md ${
              selectedType === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setSelectedType('video')}
            className={`px-4 py-2 rounded-md ${
              selectedType === 'video'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Vidéos
          </button>
          <button
            onClick={() => setSelectedType('document')}
            className={`px-4 py-2 rounded-md ${
              selectedType === 'document'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Documents
          </button>
        </div>
      </div>

      {/* Liste des ressources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                {getResourceIcon(resource.type)}
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {resource.format} • {resource.size}
                    {resource.duration && ` • ${resource.duration}`}
                    {resource.pages && ` • ${resource.pages} pages`}
                  </p>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-blue-100">
                <ArrowDownTrayIcon className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
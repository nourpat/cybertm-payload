import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChatBubbleLeftIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';
import ResourceLibrary from './ResourceLibrary';
import InvoiceGenerator from './InvoiceGenerator';
import ProgressTracker from './ProgressTracker';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const mockSessions = [
  {
    id: 1,
    title: "IA pour le Support Client",
    date: "2024-02-15",
    participants: 15,
    status: "upcoming",
    price: 1200
  },
  {
    id: 2,
    title: "IA pour le Marketing B2B",
    date: "2024-02-20",
    participants: 12,
    status: "upcoming",
    price: 1500
  },
  {
    id: 3,
    title: "IA pour la Cybersécurité",
    date: "2024-01-10",
    participants: 18,
    status: "completed",
    rating: 4.8,
    price: 1800
  }
];

const mockStats = {
  totalStudents: 45,
  averageRating: 4.7,
  completedSessions: 12,
  upcomingSessions: 3
};

export default function InstructorDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedSession, setSelectedSession] = useState(null);

  const tabs = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: ChartBarIcon },
    { id: 'resources', name: 'Ressources', icon: BookOpenIcon },
    { id: 'progress', name: 'Suivi', icon: ClipboardDocumentListIcon },
    { id: 'invoices', name: 'Factures', icon: DocumentTextIcon }
  ];

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AcademicCapIcon className="h-12 w-12 text-blue-600" />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Espace Formateur
              </h2>
              <p className="text-gray-600">
                Bienvenue dans votre espace de gestion des formations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={classNames(
                  selectedTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm'
                )}
              >
                <tab.icon
                  className={classNames(
                    selectedTab === tab.id
                      ? 'text-blue-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                    '-ml-0.5 mr-2 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Contenu */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {selectedTab === 'overview' && (
          <div className="space-y-6">
            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow p-6"
              >
                <div className="flex items-center">
                  <UserGroupIcon className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">
                      Total Participants
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {mockStats.totalStudents}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ... autres statistiques ... */}
            </div>

            {/* Sessions */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Vos Sessions
              </h3>
              <div className="space-y-4">
                {mockSessions.map((session) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    {/* ... contenu de la session ... */}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'resources' && <ResourceLibrary />}
        {selectedTab === 'progress' && <ProgressTracker />}
        {selectedTab === 'invoices' && (
          <div className="space-y-6">
            {mockSessions.map((session) => (
              <InvoiceGenerator
                key={session.id}
                session={session}
                participant={{
                  name: "Jean Dupont",
                  email: "jean.dupont@example.com"
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
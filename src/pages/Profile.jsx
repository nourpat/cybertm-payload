import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { 
  ChartBarIcon, 
  AcademicCapIcon, 
  KeyIcon, 
  DocumentIcon,
  UserIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';
import UserProfile from '../components/profile/UserProfile';
import SecuritySettings from '../components/profile/SecuritySettings';
import UserSettings from '../components/profile/UserSettings';
import DocumentManager from '../components/dashboard/DocumentManager';
import MarketingDashboard from '../components/dashboard/MarketingDashboard';
import DetailedProgress from '../components/training/DetailedProgress';
import BadgeSystem from '../components/training/BadgeSystem';
import RecommendationSystem from '../components/training/RecommendationSystem';
import TrainingCalendar from '../components/training/TrainingCalendar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const tabs = [
  { id: 'profile', name: 'Mon Profil', icon: UserIcon },
  { id: 'overview', name: 'Vue d\'ensemble', icon: ChartBarIcon },
  { id: 'training', name: 'Formation', icon: AcademicCapIcon },
  { id: 'security', name: 'Sécurité', icon: KeyIcon },
  { id: 'documents', name: 'Documents', icon: DocumentIcon }
];

export default function Profile() {
  const [selectedTab, setSelectedTab] = useState('profile');
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white p-8 rounded-2xl shadow-xl"
        >
          <SparklesIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Accès non autorisé</h2>
          <p className="text-gray-600">Veuillez vous connecter pour accéder à votre profil.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Mon Espace</h1>
            <p className="text-lg text-gray-600">Gérez votre profil et vos préférences</p>
          </motion.div>

          <Tab.Group selectedIndex={tabs.findIndex(tab => tab.id === selectedTab)} onChange={index => setSelectedTab(tabs[index].id)}>
            <Tab.List className="flex space-x-2 rounded-xl bg-white p-2 shadow-lg mb-8">
              {tabs.map((tab) => (
                <Tab
                  key={tab.id}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                      selected
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                    )
                  }
                >
                  <motion.div 
                    className="flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <tab.icon className="w-5 h-5 mr-2" />
                    {tab.name}
                  </motion.div>
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className="mt-6">
              <Tab.Panel>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <UserProfile />
                </motion.div>
              </Tab.Panel>

              <Tab.Panel>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MarketingDashboard />
                </motion.div>
              </Tab.Panel>

              <Tab.Panel>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <DetailedProgress />
                  <BadgeSystem userBadges={['beginner', 'intermediate']} />
                  <RecommendationSystem />
                  <TrainingCalendar />
                </motion.div>
              </Tab.Panel>

              <Tab.Panel>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <SecuritySettings />
                </motion.div>
              </Tab.Panel>

              <Tab.Panel>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <DocumentManager />
                </motion.div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
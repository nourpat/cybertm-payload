import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';
import { 
  BellIcon,
  DocumentIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  CurrencyEuroIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import LeadTracker from './LeadTracker';
import NotificationCenter from './NotificationCenter';
import DocumentManager from './DocumentManager';
import CampaignSelector from './CampaignSelector';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

export default function MarketingDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  // Définition des statistiques rapides
  const quickStats = [
    {
      icon: UserGroupIcon,
      label: "Leads Qualifiés",
      value: "45",
      change: "+12%",
      positive: true
    },
    {
      icon: CurrencyEuroIcon,
      label: "Valeur Pipeline",
      value: "750K€",
      change: "+25%",
      positive: true
    },
    {
      icon: ArrowTrendingUpIcon,
      label: "Taux Conversion",
      value: "35%",
      change: "+5%",
      positive: true
    },
    {
      icon: ClockIcon,
      label: "Temps Moyen",
      value: "12j",
      change: "-2j",
      positive: true
    }
  ];

  const handleCampaignSelect = (campaign) => {
    setSelectedCampaign(campaign);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Header avec sélecteur de campagne et notifications */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex-1 max-w-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Mes Campagnes Marketing
          </h2>
          <CampaignSelector onCampaignSelect={handleCampaignSelect} />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <BellIcon className="h-6 w-6" />
            {unreadNotifications > 0 && (
              <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <DocumentIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Message si aucune campagne n'est sélectionnée */}
      {!selectedCampaign && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700">
          Veuillez sélectionner une campagne pour voir les détails
        </div>
      )}

      {/* Le reste du contenu du dashboard ne s'affiche que si une campagne est sélectionnée */}
      {selectedCampaign && (
        <>
          {/* Notifications Panel */}
          {showNotifications && (
            <NotificationCenter 
              onClose={() => setShowNotifications(false)}
              onMarkAllRead={() => setUnreadNotifications(0)}
            />
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-medium ${
                    stat.positive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', name: 'Vue d\'ensemble' },
                { id: 'leads', name: 'Suivi des leads' },
                { id: 'documents', name: 'Documents' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Graphique 1: Valeur des leads */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Valeur des leads
                  </h3>
                  <div className="h-64">
                    <Bar
                      data={staticData.monthlyLeadValue}
                      options={barOptions}
                    />
                  </div>
                </div>

                {/* Graphique 2: Statut des leads */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Statut des leads
                  </h3>
                  <div className="h-64">
                    <Pie
                      data={staticData.leadStatus}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'right'
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Graphique 3: Canaux marketing */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Canaux marketing
                  </h3>
                  <div className="h-64">
                    <Pie
                      data={staticData.marketingChannels}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'right'
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Graphique 4: Nombre de leads */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Nombre de leads
                  </h3>
                  <div className="h-64">
                    <Line
                      data={staticData.leadsCount}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: false
                          }
                        },
                        scales: {
                          y: {
                            beginAtZero: true,
                            ticks: {
                              stepSize: 1
                            }
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'leads' && (
              <LeadTracker />
            )}

            {activeTab === 'documents' && (
              <DocumentManager />
            )}
          </div>
        </>
      )}
    </motion.div>
  );
}

// Données statiques pour les graphiques
const staticData = {
  monthlyLeadValue: {
    labels: ['Août 22', 'Sept 22', 'Oct 22', 'Nov 22', 'Déc 22', 'Jan 23'],
    datasets: [{
      label: 'Valeur des leads (€)',
      data: [300000, 150000, 75000, 700000, 245000, 750000],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 1,
    }]
  },
  leadsCount: {
    labels: ['Août 22', 'Sept 22', 'Oct 22', 'Nov 22', 'Déc 22', 'Jan 23'],
    datasets: [{
      label: 'Nombre de leads',
      data: [4, 7, 3, 6, 5, 9],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }]
  },
  leadStatus: {
    labels: ['Gagné', 'Perdu', 'En cours'],
    datasets: [{
      data: [18, 70, 12],
      backgroundColor: [
        'rgb(16, 185, 129)',
        'rgb(239, 68, 68)',
        'rgb(59, 130, 246)',
      ],
    }]
  },
  marketingChannels: {
    labels: [
      'Social Media marketing',
      'Email marketing',
      'Paid advertisement',
      'Mobile marketing',
      'Others'
    ],
    datasets: [{
      data: [30, 17, 20, 25, 8],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 158, 11)',
        'rgb(139, 92, 246)',
        'rgb(107, 114, 128)',
      ],
    }]
  }
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
};
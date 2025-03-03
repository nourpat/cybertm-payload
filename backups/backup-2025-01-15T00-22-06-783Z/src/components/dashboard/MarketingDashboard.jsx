import React from 'react';
import { motion } from 'framer-motion';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Données statiques pour le développement
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
      backgroundColor: 'rgba(16, 185, 129, 0.8)',
      borderColor: 'rgb(16, 185, 129)',
      borderWidth: 1,
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

export default function MarketingDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Tableau de bord marketing de génération de leads
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Histogramme de valeur mensuelle des leads */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Valeur mensuelle des leads
          </h3>
          <div className="h-64">
            <Bar
              data={staticData.monthlyLeadValue}
              options={{
                ...barOptions,
                scales: {
                  ...barOptions.scales,
                  y: {
                    ...barOptions.scales.y,
                    ticks: {
                      callback: (value) => `${value.toLocaleString()}€`
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Histogramme du nombre de leads par mois */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Nombre de leads par mois
          </h3>
          <div className="h-64">
            <Bar
              data={staticData.leadsCount}
              options={{
                ...barOptions,
                scales: {
                  ...barOptions.scales,
                  y: {
                    ...barOptions.scales.y,
                    ticks: {
                      stepSize: 1
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Graphique de statut des leads */}
        <div className="bg-white rounded-lg shadow p-4">
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

        {/* Graphique des canaux marketing */}
        <div className="bg-white rounded-lg shadow p-4">
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
      </div>
    </motion.div>
  );
}
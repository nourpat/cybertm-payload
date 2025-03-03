import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  ClockIcon,
  AcademicCapIcon,
  TrophyIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

const mockData = {
  completionRate: 75,
  timeSpent: 45, // heures
  averageScore: 85,
  certificatesEarned: 3,
  progressHistory: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [{
      label: 'Progression (%)',
      data: [10, 25, 45, 60, 70, 75],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4
    }]
  },
  scoreDistribution: {
    labels: ['< 60%', '60-70%', '70-80%', '80-90%', '> 90%'],
    datasets: [{
      data: [5, 10, 25, 40, 20],
      backgroundColor: [
        'rgb(239, 68, 68)',
        'rgb(245, 158, 11)',
        'rgb(16, 185, 129)',
        'rgb(59, 130, 246)',
        'rgb(139, 92, 246)'
      ]
    }]
  },
  timeDistribution: {
    labels: ['Cours', 'Exercices', 'Quiz', 'Projets'],
    datasets: [{
      data: [40, 25, 15, 20],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 158, 11)',
        'rgb(139, 92, 246)'
      ]
    }]
  }
};

export default function ProgressStats() {
  return (
    <div className="space-y-8">
      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center">
            <ChartBarIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Taux de complétion
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {mockData.completionRate}%
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center">
            <ClockIcon className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Temps total
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {mockData.timeSpent}h
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center">
            <AcademicCapIcon className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Score moyen
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {mockData.averageScore}%
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center">
            <TrophyIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">
                Certifications
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {mockData.certificatesEarned}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Progression dans le temps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Progression dans le temps
          </h4>
          <div className="h-64">
            <Line
              data={mockData.progressHistory}
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
                    max: 100
                  }
                }
              }}
            />
          </div>
        </motion.div>

        {/* Distribution des scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Distribution des scores
          </h4>
          <div className="h-64">
            <Bar
              data={{
                labels: mockData.scoreDistribution.labels,
                datasets: [{
                  ...mockData.scoreDistribution.datasets[0],
                  label: 'Nombre d\'évaluations'
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </div>
        </motion.div>

        {/* Répartition du temps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Répartition du temps
          </h4>
          <div className="h-64">
            <Doughnut
              data={mockData.timeDistribution}
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
        </motion.div>

        {/* Tendances et prédictions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-semibold text-gray-900">
              Tendances et prédictions
            </h4>
            <ArrowTrendingUpIcon className="h-6 w-6 text-green-600" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Temps estimé pour terminer
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  15 heures
                </p>
              </div>
              <ClockIcon className="h-6 w-6 text-blue-600" />
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Score prévu
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  88%
                </p>
              </div>
              <AcademicCapIcon className="h-6 w-6 text-green-600" />
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Prochaine certification
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Dans 2 semaines
                </p>
              </div>
              <TrophyIcon className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
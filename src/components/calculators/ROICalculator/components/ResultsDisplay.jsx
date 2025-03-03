import React from 'react';
import { motion } from 'framer-motion';
import { 
  CurrencyEuroIcon,
  ClockIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function ResultsDisplay({ results }) {
  const metrics = [
    {
      icon: CurrencyEuroIcon,
      title: 'ROI sur 3 ans',
      value: `${Math.round(results.threeYearROI)}%`,
      color: 'blue'
    },
    {
      icon: ClockIcon,
      title: 'Période de remboursement',
      value: `${Math.round(results.paybackPeriod * 12)} mois`,
      color: 'green'
    },
    {
      icon: ChartBarIcon,
      title: 'Économies annuelles',
      value: `${Math.round(results.annualCostSavings).toLocaleString()}€`,
      color: 'purple'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Coût évité de violation',
      value: `${Math.round(results.potentialBreachCost).toLocaleString()}€`,
      color: 'red'
    }
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Résultats de l'analyse
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-lg p-6 shadow-md border-l-4 border-${metric.color}-500`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full bg-${metric.color}-100`}>
                <metric.icon className={`h-6 w-6 text-${metric.color}-600`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {metric.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {metric.value}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
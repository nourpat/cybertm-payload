import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Visualizations({ results }) {
  const data = {
    labels: ['Année 1', 'Année 2', 'Année 3'],
    datasets: [
      {
        label: 'Coûts',
        data: [
          results.servicesCost,
          results.servicesCost * 0.8,
          results.servicesCost * 0.6
        ],
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 1
      },
      {
        label: 'Économies',
        data: [
          results.estimatedSavings,
          results.estimatedSavings * 1.1,
          results.estimatedSavings * 1.2
        ],
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Projection sur 3 ans'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value.toLocaleString()}€`
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Analyse graphique
      </h3>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
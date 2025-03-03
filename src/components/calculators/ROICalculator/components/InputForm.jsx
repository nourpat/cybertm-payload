import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'audit',
    name: 'Audit de Sécurité',
    cost: 5000,
    description: 'Évaluation complète de votre infrastructure'
  },
  {
    id: 'monitoring',
    name: 'Surveillance Continue',
    cost: 1500,
    description: 'Monitoring 24/7 de votre réseau'
  },
  {
    id: 'training',
    name: 'Formation des Employés',
    cost: 3000,
    description: 'Programmes de sensibilisation à la sécurité'
  },
  {
    id: 'incident',
    name: 'Gestion des Incidents',
    cost: 8000,
    description: 'Réponse rapide aux incidents de sécurité'
  }
];

export default function InputForm({ formData, setFormData, onSubmit, loading }) {
  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s.id !== service.id)
        : [...prev.selectedServices, service]
    }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Chiffre d'affaires annuel (€)
        </label>
        <input
          type="number"
          value={formData.annualRevenue}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            annualRevenue: e.target.value
          }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre d'employés
        </label>
        <input
          type="number"
          value={formData.employeeCount}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            employeeCount: e.target.value
          }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Budget actuel en sécurité (€)
        </label>
        <input
          type="number"
          value={formData.currentSecurityBudget}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            currentSecurityBudget: e.target.value
          }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Niveau de risque de violation de données
        </label>
        <select
          value={formData.dataBreachRisk}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            dataBreachRisk: e.target.value
          }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="low">Faible</option>
          <option value="medium">Moyen</option>
          <option value="high">Élevé</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Services de sécurité souhaités
        </label>
        <div className="grid grid-cols-1 gap-4">
          {services.map(service => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-lg border cursor-pointer ${
                formData.selectedServices.includes(service)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => handleServiceToggle(service)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{service.name}</h4>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {service.cost.toLocaleString()}€
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
        >
          {loading ? 'Calcul en cours...' : 'Calculer le ROI'}
        </motion.button>
      </div>
    </form>
  );
}
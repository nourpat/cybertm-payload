import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRightIcon,
  ChevronDownIcon,
  ChatBubbleLeftIcon,
  CalendarIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const mockLeads = [
  {
    id: 1,
    company: "TechSecure Solutions",
    contact: "Jean Dupont",
    position: "RSSI",
    status: "En cours",
    value: "75000€",
    lastContact: "2024-01-14",
    nextAction: "Appel de suivi",
    nextActionDate: "2024-01-17",
    probability: 75,
    notes: [
      { date: "2024-01-14", content: "Intéressé par la solution EDR" },
      { date: "2024-01-10", content: "Premier contact positif" }
    ],
    activities: [
      { type: "call", date: "2024-01-14", content: "Appel de qualification" },
      { type: "email", date: "2024-01-12", content: "Envoi documentation" }
    ]
  },
  {
    id: 2,
    company: "CyberGuard Industries",
    contact: "Marie Martin",
    position: "DSI",
    status: "Qualifié",
    value: "120000€",
    lastContact: "2024-01-15",
    nextAction: "Démo produit",
    nextActionDate: "2024-01-18",
    probability: 60,
    notes: [
      { date: "2024-01-15", content: "Besoin de sécurisation cloud" }
    ],
    activities: [
      { type: "meeting", date: "2024-01-15", content: "Réunion découverte" }
    ]
  }
];

const statusColors = {
  'En cours': 'bg-blue-100 text-blue-800',
  'Qualifié': 'bg-green-100 text-green-800',
  'En attente': 'bg-yellow-100 text-yellow-800',
  'Perdu': 'bg-red-100 text-red-800',
  'Gagné': 'bg-emerald-100 text-emerald-800'
};

export default function LeadTracker() {
  const [expandedLead, setExpandedLead] = useState(null);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('date');

  const handleExpandLead = (leadId) => {
    setExpandedLead(expandedLead === leadId ? null : leadId);
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'call':
        return <PhoneIcon className="h-4 w-4" />;
      case 'email':
        return <EnvelopeIcon className="h-4 w-4" />;
      case 'meeting':
        return <CalendarIcon className="h-4 w-4" />;
      default:
        return <ChatBubbleLeftIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Filtres et tri */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
        <div className="flex space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">Tous les statuts</option>
            <option value="En cours">En cours</option>
            <option value="Qualifié">Qualifié</option>
            <option value="En attente">En attente</option>
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="date">Date</option>
            <option value="value">Valeur</option>
            <option value="probability">Probabilité</option>
          </select>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Nouveau lead
        </button>
      </div>

      {/* Liste des leads */}
      <div className="space-y-4">
        {mockLeads.map((lead) => (
          <motion.div
            key={lead.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            {/* En-tête du lead */}
            <div
              className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => handleExpandLead(lead.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {expandedLead === lead.id ? (
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                  )}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {lead.company}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {lead.contact} - {lead.position}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${statusColors[lead.status]}`}>
                    {lead.status}
                  </span>
                  <span className="text-lg font-semibold text-gray-900">
                    {lead.value}
                  </span>
                </div>
              </div>
            </div>

            {/* Détails du lead */}
            {expandedLead === lead.id && (
              <div className="border-t border-gray-200 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Informations principales */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Dernière interaction
                      </h4>
                      <p className="mt-1">{new Date(lead.lastContact).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Prochaine action
                      </h4>
                      <p className="mt-1">
                        {lead.nextAction} - {new Date(lead.nextActionDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Probabilité de conversion
                      </h4>
                      <div className="mt-1 relative pt-1">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                          <div
                            style={{ width: `${lead.probability}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {lead.probability}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Notes et activités */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        Notes
                      </h4>
                      <div className="space-y-2">
                        {lead.notes.map((note, index) => (
                          <div key={index} className="text-sm">
                            <span className="text-gray-500">
                              {new Date(note.date).toLocaleDateString()}:
                            </span>{' '}
                            {note.content}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        Activités récentes
                      </h4>
                      <div className="space-y-2">
                        {lead.activities.map((activity, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            {getActivityIcon(activity.type)}
                            <span className="text-gray-500">
                              {new Date(activity.date).toLocaleDateString()}:
                            </span>{' '}
                            {activity.content}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex space-x-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Modifier
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    Ajouter une note
                  </button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                    Planifier une action
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
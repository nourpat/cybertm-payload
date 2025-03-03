import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, FolderIcon } from '@heroicons/react/24/outline';

const mockCampaigns = [
  {
    id: 1,
    name: "Campagne EDR Q1 2024",
    status: "active",
    startDate: "2024-01-01",
    endDate: "2024-03-31",
    type: "cybersecurity"
  },
  {
    id: 2,
    name: "SIEM Enterprise 2024",
    status: "planned",
    startDate: "2024-02-01",
    endDate: "2024-04-30",
    type: "cybersecurity"
  },
  {
    id: 3,
    name: "Cloud Security Program",
    status: "active",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    type: "cloud"
  }
];

export default function CampaignSelector({ onCampaignSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleCampaignSelect = (campaign) => {
    setSelectedCampaign(campaign);
    onCampaignSelect(campaign);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center">
          <FolderIcon className="h-5 w-5 text-gray-400 mr-2" />
          <span className="text-gray-700">
            {selectedCampaign ? selectedCampaign.name : "Sélectionner une campagne"}
          </span>
        </div>
        <ChevronDownIcon className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
        >
          <div className="py-1">
            {mockCampaigns.map((campaign) => (
              <button
                key={campaign.id}
                onClick={() => handleCampaignSelect(campaign)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <FolderIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {campaign.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  campaign.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {campaign.status === 'active' ? 'Active' : 'Planifiée'}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
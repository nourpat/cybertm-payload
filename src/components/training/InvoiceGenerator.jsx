import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon,
  PrinterIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function InvoiceGenerator({ session, participant }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const generateInvoice = async () => {
    setLoading(true);
    try {
      // Simulation de la génération de facture
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
    } catch (error) {
      console.error('Erreur lors de la génération de la facture:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <DocumentTextIcon className="h-8 w-8 text-blue-600" />
          <h3 className="ml-3 text-lg font-semibold text-gray-900">
            Facture
          </h3>
        </div>
        {success && (
          <span className="flex items-center text-green-600">
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            Facture générée
          </span>
        )}
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Formation</p>
            <p className="text-gray-900">{session.title}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Date</p>
            <p className="text-gray-900">{new Date(session.date).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Participant</p>
            <p className="text-gray-900">{participant.name}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Montant</p>
            <p className="text-gray-900">{session.price}€</p>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={generateInvoice}
            disabled={loading}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Génération...
              </>
            ) : (
              <>
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Télécharger
              </>
            )}
          </button>
          <button
            disabled={!success}
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
          >
            <PrinterIcon className="h-5 w-5 mr-2" />
            Imprimer
          </button>
        </div>
      </div>
    </div>
  );
}
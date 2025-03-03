import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCardIcon,
  LockClosedIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

export default function PaymentSystem({ amount, onSuccess, onCancel }) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulation du traitement du paiement
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simuler un succès
      onSuccess({
        transactionId: 'TR' + Math.random().toString(36).substr(2, 9),
        amount,
        date: new Date().toISOString()
      });
    } catch (err) {
      setError('Une erreur est survenue lors du paiement. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Paiement sécurisé
          </h3>
          <LockClosedIcon className="h-5 w-5 text-green-500" />
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md flex items-center">
            <ExclamationCircleIcon className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}

        <div className="mb-6">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Montant à payer</span>
            <span className="text-xl font-bold text-gray-900">{amount}€</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setPaymentMethod('card')}
              className={`flex-1 p-4 rounded-lg border-2 flex items-center justify-center ${
                paymentMethod === 'card'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <CreditCardIcon className="h-6 w-6 mr-2" />
              <span>Carte bancaire</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Numéro de carte
            </label>
            <input
              type="text"
              required
              placeholder="1234 5678 9012 3456"
              value={cardData.number}
              onChange={(e) => setCardData(prev => ({
                ...prev,
                number: e.target.value
              }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date d'expiration
              </label>
              <input
                type="text"
                required
                placeholder="MM/AA"
                value={cardData.expiry}
                onChange={(e) => setCardData(prev => ({
                  ...prev,
                  expiry: e.target.value
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <input
                type="text"
                required
                placeholder="123"
                value={cardData.cvc}
                onChange={(e) => setCardData(prev => ({
                  ...prev,
                  cvc: e.target.value
                }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom sur la carte
            </label>
            <input
              type="text"
              required
              placeholder="JEAN DUPONT"
              value={cardData.name}
              onChange={(e) => setCardData(prev => ({
                ...prev,
                name: e.target.value
              }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Traitement en cours...
                </>
              ) : (
                'Payer maintenant'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
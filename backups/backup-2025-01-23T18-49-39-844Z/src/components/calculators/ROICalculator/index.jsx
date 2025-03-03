import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc, query, where, orderBy, limit, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useAuth } from '../../../contexts/AuthContext';
import { logActivity, ActivityTypes } from '../../../utils/activity';
import InputForm from './components/InputForm';
import ResultsDisplay from './components/ResultsDisplay';
import Visualizations from './components/Visualizations';

export default function ROICalculator() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    annualRevenue: '',
    employeeCount: '',
    currentSecurityBudget: '',
    dataBreachRisk: 'medium',
    selectedServices: []
  });

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadLastCalculation = async () => {
    if (!user) return;

    try {
      // Vérifier si la collection existe avant de faire la requête
      const calculationsRef = collection(db, 'roiCalculations');
      const initQuery = query(calculationsRef, where('initialized', '==', true), limit(1));
      const initSnapshot = await getDocs(initQuery);

      // Si la collection n'est pas initialisée, ne pas charger les calculs
      if (initSnapshot.empty) {
        return;
      }

      const q = query(
        calculationsRef,
        where('userId', '==', user.uid),
        orderBy('timestamp', 'desc'),
        limit(1)
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const lastCalc = querySnapshot.docs[0].data();
        setFormData(lastCalc.input || formData);
        setResults(lastCalc.results || null);
      }
    } catch (error) {
      // Ne pas afficher l'erreur à l'utilisateur car ce n'est pas critique
      console.warn('Impossible de charger les calculs précédents:', error);
    }
  };

  useEffect(() => {
    if (user) {
      loadLastCalculation();
    }
  }, [user]);

  const calculateROI = () => {
    const {
      annualRevenue,
      employeeCount,
      currentSecurityBudget,
      dataBreachRisk,
      selectedServices
    } = formData;

    // Coûts moyens par incident de sécurité selon le niveau de risque
    const riskFactors = {
      low: 0.02,
      medium: 0.05,
      high: 0.1
    };

    // Coût potentiel d'une violation de données
    const potentialBreachCost = annualRevenue * riskFactors[dataBreachRisk];

    // Coût total des services sélectionnés
    const servicesCost = selectedServices.reduce((total, service) => total + service.cost, 0);

    // Économies estimées grâce aux mesures de sécurité
    const estimatedSavings = potentialBreachCost * 0.8;

    // ROI sur 3 ans
    const threeYearROI = ((estimatedSavings * 3) - servicesCost) / servicesCost * 100;

    return {
      potentialBreachCost,
      servicesCost,
      estimatedSavings,
      threeYearROI,
      paybackPeriod: servicesCost / estimatedSavings,
      annualCostSavings: estimatedSavings - servicesCost
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const results = calculateROI();
      setResults(results);

      if (user) {
        // Sauvegarder les résultats dans Firebase
        const calculationRef = await addDoc(collection(db, 'roiCalculations'), {
          userId: user.uid,
          input: formData,
          results,
          timestamp: serverTimestamp(),
          version: '1.2.0'
        });

        await logActivity(user.uid, ActivityTypes.SYSTEM, 'Calcul ROI effectué', {
          calculationId: calculationRef.id
        });
      }
    } catch (error) {
      console.error('Erreur lors du calcul:', error);
      setError('Une erreur est survenue lors du calcul. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InputForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
          />

          {results && (
            <div className="space-y-8">
              <ResultsDisplay results={results} />
              <Visualizations results={results} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
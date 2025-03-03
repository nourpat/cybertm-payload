import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OpenAI from 'openai';

export default function ScriptGenerator() {
  const [formData, setFormData] = useState({
    industry: '',
    target: '',
    productDescription: '',
    keyBenefits: '',
    objections: ''
  });
  const [generatedScript, setGeneratedScript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
      });

      const prompt = `Générer un script d'appel B2B pour un commercial en cybersécurité avec les informations suivantes:
        Secteur d'activité: ${formData.industry}
        Cible: ${formData.target}
        Description du produit: ${formData.productDescription}
        Bénéfices clés: ${formData.keyBenefits}
        Objections courantes: ${formData.objections}
      `;

      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      setGeneratedScript(completion.choices[0].message.content);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Secteur d'activité
          </label>
          <input
            type="text"
            value={formData.industry}
            onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cible (ex: DSI, RSSI)
          </label>
          <input
            type="text"
            value={formData.target}
            onChange={(e) => setFormData(prev => ({ ...prev, target: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description du produit/service
          </label>
          <textarea
            value={formData.productDescription}
            onChange={(e) => setFormData(prev => ({ ...prev, productDescription: e.target.value }))}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Bénéfices clés
          </label>
          <textarea
            value={formData.keyBenefits}
            onChange={(e) => setFormData(prev => ({ ...prev, keyBenefits: e.target.value }))}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Objections courantes
          </label>
          <textarea
            value={formData.objections}
            onChange={(e) => setFormData(prev => ({ ...prev, objections: e.target.value }))}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? 'Génération en cours...' : 'Générer le script'}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          {error}
        </div>
      )}

      {generatedScript && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <h3 className="text-lg font-medium text-gray-900 mb-4">Script généré :</h3>
          <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap">
            {generatedScript}
          </div>
        </motion.div>
      )}
    </div>
  );
}
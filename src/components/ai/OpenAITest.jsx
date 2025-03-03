import React, { useState } from 'react';
import { testOpenAIKey } from '../../utils/openai-test';

export default function OpenAITest() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleTest = async () => {
    setStatus('testing');
    setError(null);
    
    try {
      await testOpenAIKey();
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Test de la connexion OpenAI</h2>
      
      <button
        onClick={handleTest}
        disabled={status === 'testing'}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {status === 'testing' ? 'Test en cours...' : 'Tester la connexion'}
      </button>

      {status === 'success' && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 rounded">
          Connexion réussie ! La clé API OpenAI est valide.
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded">
          Erreur : {error}
        </div>
      )}
    </div>
  );
}
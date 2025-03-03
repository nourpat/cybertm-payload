import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const user = await signIn(email, password);
      
      if (!user.emailVerified) {
        // Envoyer un nouvel email de vérification
        await sendEmailVerification(user);
        setVerificationEmailSent(true);
        setError('Veuillez vérifier votre email avant de vous connecter. Un nouvel email de vérification vient d\'être envoyé.');
        return;
      }

      navigate('/profile');
    } catch (err) {
      if (err.message === 'email-not-verified') {
        setError('Veuillez vérifier votre email avant de vous connecter.');
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      {location.state?.message && (
        <div className="mb-4 p-4 bg-green-50 text-green-800 rounded-md">
          {location.state.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
            {verificationEmailSent && (
              <p className="mt-2 text-sm">
                Si vous n'avez pas reçu l'email, vérifiez vos spams ou{' '}
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const user = await signIn(email, password);
                      await sendEmailVerification(user);
                      setVerificationEmailSent(true);
                      setError('Un nouvel email de vérification a été envoyé.');
                    } catch (err) {
                      setError('Erreur lors de l\'envoi de l\'email de vérification.');
                    }
                  }}
                  className="text-red-800 underline hover:text-red-900"
                >
                  cliquez ici pour renvoyer l'email
                </button>
              </p>
            )}
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? 'Connexion...' : 'Se connecter'}
        </button>

        <div className="text-center">
          <a
            href="/signup"
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Pas de compte ? Créer un compte
          </a>
        </div>
      </form>
    </div>
  );
}
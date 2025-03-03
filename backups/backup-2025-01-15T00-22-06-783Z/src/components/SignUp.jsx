import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validatePassword } from '../utils/passwordValidation';
import { useAuth } from '../contexts/AuthContext';

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    nomComplet: '',
    fonction: '',
    telephone: '',
    societe: '',
    email: '',
    password: '',
    gdprConsent: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Validation du nom complet
    if (!formData.nomComplet.trim()) {
      newErrors.nomComplet = 'Le nom complet est requis';
    }
    
    // Validation du téléphone (format international)
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneRegex.test(formData.telephone)) {
      newErrors.telephone = 'Format international requis (ex: +33612345678)';
    }
    
    // Validation de la société
    if (!formData.societe.trim()) {
      newErrors.societe = 'La société est requise';
    }
    
    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    // Validation du mot de passe
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.errors;
    }
    
    // Validation du consentement RGPD
    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'Vous devez accepter le traitement de vos données';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    try {
      await signUp(formData);
      navigate('/login', { 
        state: { 
          message: 'Compte créé avec succès. Veuillez vérifier votre email pour activer votre compte.' 
        } 
      });
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: error.message
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Créer un compte
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Nom Complet */}
            <div>
              <label htmlFor="nomComplet" className="block text-sm font-medium text-gray-700">
                Nom complet
              </label>
              <div className="mt-1">
                <input
                  id="nomComplet"
                  name="nomComplet"
                  type="text"
                  required
                  value={formData.nomComplet}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.nomComplet && (
                  <p className="mt-2 text-sm text-red-600">{errors.nomComplet}</p>
                )}
              </div>
            </div>

            {/* Fonction (optionnel) */}
            <div>
              <label htmlFor="fonction" className="block text-sm font-medium text-gray-700">
                Fonction <span className="text-gray-500">(optionnel)</span>
              </label>
              <div className="mt-1">
                <input
                  id="fonction"
                  name="fonction"
                  type="text"
                  value={formData.fonction}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <div className="mt-1">
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  placeholder="+33612345678"
                  required
                  value={formData.telephone}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.telephone && (
                  <p className="mt-2 text-sm text-red-600">{errors.telephone}</p>
                )}
              </div>
            </div>

            {/* Société */}
            <div>
              <label htmlFor="societe" className="block text-sm font-medium text-gray-700">
                Société
              </label>
              <div className="mt-1">
                <input
                  id="societe"
                  name="societe"
                  type="text"
                  required
                  value={formData.societe}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.societe && (
                  <p className="mt-2 text-sm text-red-600">{errors.societe}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.password && Array.isArray(errors.password) && (
                  <ul className="mt-2 text-sm text-red-600 list-disc list-inside">
                    {errors.password.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Consentement RGPD */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="gdprConsent"
                  name="gdprConsent"
                  type="checkbox"
                  checked={formData.gdprConsent}
                  onChange={handleChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="gdprConsent" className="font-medium text-gray-700">
                  J'accepte le traitement de mes données personnelles
                </label>
                {errors.gdprConsent && (
                  <p className="mt-2 text-sm text-red-600">{errors.gdprConsent}</p>
                )}
              </div>
            </div>

            {errors.submit && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      {errors.submit}
                    </h3>
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Création en cours...' : 'Créer mon compte'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [error, setError] = useState('');
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setError('Veuillez valider le reCAPTCHA');
      return;
    }

    setError('');
    // Add your form submission logic here
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">Contactez-nous</h2>
          <p className="mt-4 text-xl text-gray-600">
            Notre équipe d'experts est à votre écoute
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LfY-L8qAAAAAKeWchEop1_jPBk29sJ20_GUqRKn"
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="space-y-8">
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-600">
                  123 Avenue de la Cybersécurité, 75001 Paris
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-600">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-600">contact@cybertm.fr</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900">FAQ</h3>
              <div className="mt-4 space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer">
                    <span className="text-gray-700">Quelle est votre expertise en cybersécurité ?</span>
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Notre équipe combine une expertise pointue en cybersécurité et en télémarketing B2B,
                    permettant une approche ciblée et pertinente.
                  </p>
                </details>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
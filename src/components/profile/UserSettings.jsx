import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BellIcon, 
  GlobeAltIcon, 
  SunIcon, 
  MoonIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';

export default function UserSettings() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      marketing: false
    },
    theme: 'light',
    language: 'fr'
  });

  const handleNotificationChange = (type) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };

  const handleThemeChange = (theme) => {
    setSettings(prev => ({ ...prev, theme }));
    // Implémenter le changement de thème
  };

  const handleLanguageChange = (e) => {
    setSettings(prev => ({ ...prev, language: e.target.value }));
    // Implémenter le changement de langue
  };

  return (
    <div className="space-y-8">
      {/* Notifications */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <BellIcon className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Préférences de notification
          </h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Notifications par email</p>
              <p className="text-sm text-gray-500">
                Recevoir des mises à jour par email
              </p>
            </div>
            <button
              onClick={() => handleNotificationChange('email')}
              className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                settings.notifications.email ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">Activer les notifications email</span>
              <span
                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                  settings.notifications.email ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Notifications push</p>
              <p className="text-sm text-gray-500">
                Recevoir des notifications dans le navigateur
              </p>
            </div>
            <button
              onClick={() => handleNotificationChange('push')}
              className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                settings.notifications.push ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">Activer les notifications push</span>
              <span
                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                  settings.notifications.push ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Communications marketing</p>
              <p className="text-sm text-gray-500">
                Recevoir des informations sur nos produits
              </p>
            </div>
            <button
              onClick={() => handleNotificationChange('marketing')}
              className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                settings.notifications.marketing ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">Activer les communications marketing</span>
              <span
                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                  settings.notifications.marketing ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Thème */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <GlobeAltIcon className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Apparence
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleThemeChange('light')}
            className={`p-4 rounded-lg border-2 flex items-center justify-center ${
              settings.theme === 'light'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <SunIcon className="h-6 w-6 mr-2 text-blue-600" />
            <span className="font-medium">Clair</span>
          </button>

          <button
            onClick={() => handleThemeChange('dark')}
            className={`p-4 rounded-lg border-2 flex items-center justify-center ${
              settings.theme === 'dark'
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <MoonIcon className="h-6 w-6 mr-2 text-blue-600" />
            <span className="font-medium">Sombre</span>
          </button>
        </div>
      </div>

      {/* Langue */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <LanguageIcon className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Langue
          </h3>
        </div>

        <select
          value={settings.language}
          onChange={handleLanguageChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    </div>
  );
}
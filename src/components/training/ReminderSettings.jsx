import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BellIcon,
  ClockIcon,
  CalendarIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

export default function ReminderSettings() {
  const [settings, setSettings] = useState({
    email: true,
    push: true,
    sms: false,
    reminders: [
      {
        id: 1,
        type: 'before',
        time: 24,
        unit: 'hours'
      },
      {
        id: 2,
        type: 'before',
        time: 15,
        unit: 'minutes'
      }
    ]
  });

  const addReminder = () => {
    const newReminder = {
      id: Date.now(),
      type: 'before',
      time: 30,
      unit: 'minutes'
    };
    setSettings(prev => ({
      ...prev,
      reminders: [...prev.reminders, newReminder]
    }));
  };

  const removeReminder = (id) => {
    setSettings(prev => ({
      ...prev,
      reminders: prev.reminders.filter(r => r.id !== id)
    }));
  };

  const updateReminder = (id, field, value) => {
    setSettings(prev => ({
      ...prev,
      reminders: prev.reminders.map(r => 
        r.id === id ? { ...r, [field]: value } : r
      )
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Paramètres des rappels
        </h3>
        <BellIcon className="h-6 w-6 text-blue-600" />
      </div>

      {/* Canaux de notification */}
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-900">
          Canaux de notification
        </h4>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-gray-700">Email</span>
            </div>
            <button
              onClick={() => setSettings(prev => ({ ...prev, email: !prev.email }))}
              className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                settings.email ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">Activer les notifications par email</span>
              <span
                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                  settings.email ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-gray-700">Notifications push</span>
            </div>
            <button
              onClick={() => setSettings(prev => ({ ...prev, push: !prev.push }))}
              className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                settings.push ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">Activer les notifications push</span>
              <span
                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                  settings.push ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <DevicePhoneMobileIcon className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-gray-700">SMS</span>
            </div>
            <button
              onClick={() => setSettings(prev => ({ ...prev, sms: !prev.sms }))}
              className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                settings.sms ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">Activer les notifications SMS</span>
              <span
                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                  settings.sms ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Rappels */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-md font-medium text-gray-900">
            Rappels
          </h4>
          <button
            onClick={addReminder}
            className="flex items-center text-sm text-blue-600 hover:text-blue-700"
          >
            <PlusIcon className="h-4 w-4 mr-1" />
            Ajouter un rappel
          </button>
        </div>

        <div className="space-y-4">
          {settings.reminders.map((reminder) => (
            <motion.div
              key={reminder.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow"
            >
              <ClockIcon className="h-5 w-5 text-gray-400" />
              <select
                value={reminder.time}
                onChange={(e) => updateReminder(reminder.id, 'time', parseInt(e.target.value))}
                className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {[5, 10, 15, 30, 60, 120, 1440].map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <select
                value={reminder.unit}
                onChange={(e) => updateReminder(reminder.id, 'unit', e.target.value)}
                className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="minutes">minutes</option>
                <option value="hours">heures</option>
                <option value="days">jours</option>
              </select>
              <span className="text-gray-700">avant</span>
              <button
                onClick={() => removeReminder(reminder.id)}
                className="p-1 text-red-600 hover:text-red-700 rounded-full hover:bg-red-100"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserGroupIcon,
  AcademicCapIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import TrainingRegistration from './TrainingRegistration';

const mockSessions = [
  {
    id: 1,
    title: "Introduction à l'IA",
    date: "2024-02-15",
    time: "14:00",
    duration: "2h",
    instructor: "Dr. Sarah Martin",
    spots: 15,
    spotsLeft: 8
  },
  {
    id: 2,
    title: "Cybersécurité Avancée",
    date: "2024-02-20",
    time: "10:00",
    duration: "3h",
    instructor: "Prof. Jean Dupont",
    spots: 12,
    spotsLeft: 5
  }
];

export default function TrainingCalendar() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegister = (session) => {
    setSelectedSession(session);
    setShowRegistration(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Calendrier des formations
        </h3>
        <CalendarIcon className="h-6 w-6 text-blue-600" />
      </div>

      <div className="grid gap-6">
        {mockSessions.map((session) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-medium text-gray-900">
                  {session.title}
                </h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    <span>{new Date(session.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span>{session.time} ({session.duration})</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <AcademicCapIcon className="h-5 w-5 mr-2" />
                    <span>{session.instructor}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <UserGroupIcon className="h-5 w-5 mr-2" />
                    <span>{session.spotsLeft} places disponibles</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRegister(session)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                S'inscrire
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {showRegistration && selectedSession && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Inscription à la formation
              </h3>
              <button
                onClick={() => setShowRegistration(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <TrainingRegistration
              session={selectedSession}
              onClose={() => setShowRegistration(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
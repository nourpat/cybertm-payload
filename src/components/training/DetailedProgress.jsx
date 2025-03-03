import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  ClockIcon,
  AcademicCapIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import ProgressStats from './ProgressStats';

export default function DetailedProgress() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Progression détaillée
        </h3>
        <ChartBarIcon className="h-6 w-6 text-blue-600" />
      </div>

      <ProgressStats />
    </div>
  );
}
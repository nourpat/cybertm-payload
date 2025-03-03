import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ icon: Icon, title, value, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-${color}-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="flex items-center">
        <Icon className={`h-8 w-8 text-${color}-600`} />
        <div className="ml-3">
          <p className={`text-sm font-medium text-${color}-900`}>{title}</p>
          <p className={`text-2xl font-semibold text-${color}-600`}>{value}</p>
        </div>
      </div>
    </motion.div>
  );
}
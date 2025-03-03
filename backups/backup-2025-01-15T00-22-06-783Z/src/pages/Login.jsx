import React from 'react'
import Auth from '../components/Auth'
import { motion } from 'framer-motion'

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-gray-900">Connexion</h2>
        <p className="mt-4 text-xl text-gray-600">
          Accédez à votre espace client
        </p>
      </motion.div>
      <Auth />
    </div>
  )
}
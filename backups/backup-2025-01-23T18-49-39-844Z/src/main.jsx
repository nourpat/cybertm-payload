import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeFirebaseCollections } from './utils/firebase-init'

// Gestion des erreurs globales
const handleError = (error) => {
  console.error('Une erreur est survenue:', error);
};

window.addEventListener('unhandledrejection', (event) => {
  handleError(event.reason);
});

window.addEventListener('error', (event) => {
  handleError(event.error);
});

// Initialisation des collections Firebase avec gestion d'erreur
initializeFirebaseCollections().catch(handleError);

// Rendu de l'application avec gestion d'erreur
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
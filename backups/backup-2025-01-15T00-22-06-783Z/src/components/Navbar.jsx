import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Disclosure, Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, CalendarIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';
import Logo from './Logo';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pourquoi Nous', href: '/why-us' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

// URL de l'agenda Google pour la prise de RDV
const CALENDAR_URL = "https://calendar.app.google/aWm3jnUJTJ9FCsFHA";

export default function Navbar() {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  const [backupInProgress, setBackupInProgress] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const backupUserData = async () => {
    if (!user) return null;
    
    try {
      setBackupInProgress(true);
      // Récupération des données utilisateur
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) return null;
      
      // Création d'une copie des données
      const userData = userDoc.data();
      const backup = {
        ...userData,
        backupDate: new Date().toISOString(),
        userId: user.uid
      };
      
      // Stockage du backup dans le localStorage
      localStorage.setItem(`userBackup_${user.uid}`, JSON.stringify(backup));
      
      return backup;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      return null;
    } finally {
      setBackupInProgress(false);
    }
  };

  const handleLogoutConfirm = async () => {
    try {
      // Effectuer la sauvegarde avant la déconnexion
      await backupUserData();
      
      await signOut();
      setShowLogoutConfirm(false);
      setShowLogoutMessage(true);
      setTimeout(() => {
        setShowLogoutMessage(false);
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error.message);
    }
  };

  return (
    <>
      <Disclosure as="nav" className="bg-white shadow-lg">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                      <Logo />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                          location.pathname === item.href
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-700 hover:text-blue-600 hover:border-blue-300'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                  {user && (
                    <span className="inline-flex items-center text-xs bg-gray-50 px-2.5 py-0.5 rounded-full border border-gray-200 whitespace-nowrap">
                      <UserCircleIcon className="h-3 w-3 mr-1 text-gray-500" />
                      <span className="text-gray-600 font-medium truncate max-w-[150px]">
                        {user.nomComplet}
                      </span>
                    </span>
                  )}
                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
                  >
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    Prendre RDV
                  </a>
                  {user ? (
                    <>
                      <Link
                        to="/profile"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                      >
                        Mon espace
                      </Link>
                      <button
                        onClick={handleLogoutClick}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Déconnexion
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Connexion
                    </Link>
                  )}
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {user && (
                  <div className="mx-3 px-2.5 py-0.5 text-xs bg-gray-50 rounded-full border border-gray-200 flex items-center whitespace-nowrap">
                    <UserCircleIcon className="h-3 w-3 mr-1 text-gray-500" />
                    <span className="text-gray-600 font-medium truncate">
                      {user.nomComplet}
                    </span>
                  </div>
                )}
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block pl-3 pr-4 py-2 text-base font-medium ${
                      location.pathname === item.href
                        ? 'bg-blue-50 border-l-4 border-blue-600 text-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    Prendre RDV
                  </div>
                </a>
                {user ? (
                  <>
                    <Link
                      to="/profile"
                      className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    >
                      Mon espace
                    </Link>
                    <button
                      onClick={handleLogoutClick}
                      className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    >
                      Déconnexion
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Connexion
                  </Link>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Modal de confirmation de déconnexion */}
      <Transition show={showLogoutConfirm} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={() => setShowLogoutConfirm(false)}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <div className="relative bg-white rounded-lg max-w-md w-full mx-4 p-6">
              <Dialog.Title className="text-lg font-medium text-gray-900">
                Confirmation de déconnexion
              </Dialog.Title>
              <div className="mt-2 text-gray-600">
                {backupInProgress ? (
                  <div className="flex items-center">
                    <svg className="animate-spin h-5 w-5 mr-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sauvegarde des données en cours...
                  </div>
                ) : (
                  "Êtes-vous sûr de vouloir vous déconnecter ?"
                )}
              </div>

              <div className="mt-4 flex justify-end space-x-3">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  disabled={backupInProgress}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-md disabled:opacity-50"
                >
                  Annuler
                </button>
                <button
                  onClick={handleLogoutConfirm}
                  disabled={backupInProgress}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md disabled:opacity-50"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Message de déconnexion */}
      {showLogoutMessage && (
        <div className="fixed bottom-4 right-4 bg-green-50 text-green-800 px-4 py-3 rounded-md shadow-lg">
          Vous êtes déconnecté
        </div>
      )}
    </>
  );
}
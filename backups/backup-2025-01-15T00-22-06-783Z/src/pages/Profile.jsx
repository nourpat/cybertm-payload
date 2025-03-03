import React, { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../lib/firebase';
import { validatePassword } from '../utils/passwordValidation';
import { updatePassword } from 'firebase/auth';
import { Tab } from '@headlessui/react';
import { UserIcon, KeyIcon, DocumentIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { logActivity, ActivityTypes } from '../utils/activity';
import MarketingDashboard from '../components/dashboard/MarketingDashboard';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 Mo
const ALLOWED_FILE_TYPES = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'application/pdf': ['.pdf'],
  'application/msword': ['.doc'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
  'application/vnd.ms-excel': ['.xls'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
  'application/vnd.ms-powerpoint': ['.ppt'],
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx']
};

const MAX_PHOTO_SIZE = 1 * 1024 * 1024; // 1 Mo
const ALLOWED_PHOTO_TYPES = {
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png']
};

export default function Profile() {
  const { user, updateUserProfile } = useAuth();
  const [selectedTab, setSelectedTab] = useState(0);
  const [message, setMessage] = useState({ type: '', content: '' });
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const photoInputRef = useRef(null);

  // États pour les informations personnelles
  const [personalInfo, setPersonalInfo] = useState({
    nomComplet: user?.nomComplet || '',
    fonction: user?.fonction || '',
    telephoneFixe: user?.telephoneFixe || '',
    telephonePortable: user?.telephonePortable || '',
    email: user?.email || '',
    societe: user?.societe || '',
    biographie: user?.biographie || '',
    todo: user?.todo || ''
  });

  // État pour le changement de mot de passe
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Fonction pour obtenir le titre en fonction de l'onglet sélectionné
  const getTabTitle = () => {
    switch (selectedTab) {
      case 0:
        return "Informations personnelles";
      case 1:
        return "Sécurité";
      case 2:
        return "Documents";
      case 3:
        return "Dashboard";
      default:
        return "Mon espace";
    }
  };

  // Gestion du changement de photo de profil
  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > MAX_PHOTO_SIZE) {
      setMessage({
        type: 'error',
        content: 'La taille de l\'image ne doit pas dépasser 1 Mo'
      });
      return;
    }

    if (!ALLOWED_PHOTO_TYPES[file.type]) {
      setMessage({
        type: 'error',
        content: 'Format d\'image non supporté. Utilisez JPG, JPEG ou PNG'
      });
      return;
    }

    try {
      setLoading(true);
      const storageRef = ref(storage, `profile-photos/${user.uid}`);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);
      await updateUserProfile({ photoURL });
      
      setMessage({
        type: 'success',
        content: 'Photo de profil mise à jour avec succès'
      });
    } catch (error) {
      setMessage({
        type: 'error',
        content: 'Erreur lors de la mise à jour de la photo'
      });
    } finally {
      setLoading(false);
    }
  };

  // Gestion de la mise à jour des informations personnelles
  const handlePersonalInfoSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUserProfile(personalInfo);
      setMessage({
        type: 'success',
        content: 'Informations mises à jour avec succès'
      });
    } catch (error) {
      setMessage({
        type: 'error',
        content: 'Erreur lors de la mise à jour des informations'
      });
    } finally {
      setLoading(false);
    }
  };

  // Gestion du changement de mot de passe
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({
        type: 'error',
        content: 'Les mots de passe ne correspondent pas'
      });
      return;
    }

    const validation = validatePassword(passwordData.newPassword);
    if (!validation.isValid) {
      setMessage({
        type: 'error',
        content: validation.errors.join(', ')
      });
      return;
    }

    try {
      setLoading(true);
      await updatePassword(user, passwordData.newPassword);
      setMessage({
        type: 'success',
        content: 'Mot de passe mis à jour avec succès'
      });
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      setMessage({
        type: 'error',
        content: 'Erreur lors du changement de mot de passe'
      });
    } finally {
      setLoading(false);
    }
  };

  // Gestion de l'upload de documents
  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        setMessage({
          type: 'error',
          content: `Le fichier ${file.name} dépasse la taille maximale de 10 Mo`
        });
        continue;
      }

      if (!Object.keys(ALLOWED_FILE_TYPES).includes(file.type)) {
        setMessage({
          type: 'error',
          content: `Format non supporté pour ${file.name}`
        });
        continue;
      }

      try {
        const storageRef = ref(storage, `documents/${user.uid}/${file.name}`);
        await uploadBytes(storageRef, file);
        await logActivity(user.uid, ActivityTypes.DOCUMENT, `Document uploadé: ${file.name}`);
        
        setMessage({
          type: 'success',
          content: 'Document uploadé avec succès'
        });
      } catch (error) {
        setMessage({
          type: 'error',
          content: `Erreur lors de l'upload de ${file.name}`
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{getTabTitle()}</h1>

          {message.content && (
            <div className={`rounded-md p-4 mb-6 ${
              message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              {message.content}
            </div>
          )}

          <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow text-blue-700'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                <div className="flex items-center justify-center">
                  <UserIcon className="w-5 h-5 mr-2" />
                  Informations personnelles
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow text-blue-700'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                <div className="flex items-center justify-center">
                  <KeyIcon className="w-5 h-5 mr-2" />
                  Sécurité
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow text-blue-700'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                <div className="flex items-center justify-center">
                  <DocumentIcon className="w-5 h-5 mr-2" />
                  Documents
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow text-blue-700'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                <div className="flex items-center justify-center">
                  <ChartBarIcon className="w-5 h-5 mr-2" />
                  Dashboard
                </div>
              </Tab>
            </Tab.List>

            <Tab.Panels className="mt-6">
              {/* Onglet Informations personnelles */}
              <Tab.Panel>
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                        {user?.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <UserIcon className="h-12 w-12 text-gray-300" />
                        )}
                      </div>
                      <button
                        onClick={() => photoInputRef.current?.click()}
                        className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white hover:bg-blue-700"
                      >
                        <UserIcon className="h-4 w-4" />
                      </button>
                      <input
                        ref={photoInputRef}
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        className="hidden"
                        onChange={handlePhotoChange}
                      />
                    </div>
                  </div>

                  <form onSubmit={handlePersonalInfoSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          name="nomComplet"
                          value={personalInfo.nomComplet}
                          onChange={(e) => setPersonalInfo(prev => ({
                            ...prev,
                            nomComplet: e.target.value
                          }))}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Fonction
                        </label>
                        <input
                          type="text"
                          name="fonction"
                          value={personalInfo.fonction}
                          onChange={(e) => setPersonalInfo(prev => ({
                            ...prev,
                            fonction: e.target.value
                          }))}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Téléphone fixe
                        </label>
                        <input
                          type="tel"
                          name="telephoneFixe"
                          value={personalInfo.telephoneFixe}
                          onChange={(e) => setPersonalInfo(prev => ({
                            ...prev,
                            telephoneFixe: e.target.value
                          }))}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Téléphone portable
                        </label>
                        <input
                          type="tel"
                          name="telephonePortable"
                          value={personalInfo.telephonePortable}
                          onChange={(e) => setPersonalInfo(prev => ({
                            ...prev,
                            telephonePortable: e.target.value
                          }))}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={personalInfo.email}
                          onChange={(e) => setPersonalInfo(prev => ({
                            ...prev,
                            email: e.target.value
                          }))}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Société
                        </label>
                        <input
                          type="text"
                          name="societe"
                          value={personalInfo.societe}
                          onChange={(e) => setPersonalInfo(prev => ({
                            ...prev,
                            societe: e.target.value
                          }))}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Biographie
                      </label>
                      <textarea
                        name="biographie"
                        rows={4}
                        value={personalInfo.biographie}
                        onChange={(e) => setPersonalInfo(prev => ({
                          ...prev,
                          biographie: e.target.value
                        }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        ToDo
                      </label>
                      <textarea
                        name="todo"
                        rows={4}
                        value={personalInfo.todo}
                        onChange={(e) => setPersonalInfo(prev => ({
                          ...prev,
                          todo: e.target.value
                        }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {loading ? 'Enregistrement...' : 'Enregistrer'}
                      </button>
                    </div>
                  </form>
                </div>
              </Tab.Panel>

              {/* Onglet Sécurité */}
              <Tab.Panel>
                <div className="bg-white shadow rounded-lg p-6">
                  <form onSubmit={handlePasswordChange} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Mot de passe actuel
                      </label>
                      <input
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData(prev => ({
                          ...prev,
                          currentPassword: e.target.value
                        }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nouveau mot de passe
                      </label>
                      <input
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData(prev => ({
                          ...prev,
                          newPassword: e.target.value
                        }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Confirmer le nouveau mot de passe
                      </label>
                      <input
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData(prev => ({
                          ...prev,
                          confirmPassword: e.target.value
                        }))}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {loading ? 'Modification...' : 'Modifier le mot de passe'}
                      </button>
                    </div>
                  </form>
                </div>
              </Tab.Panel>

              {/* Onglet Documents */}
              <Tab.Panel>
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Upload de documents
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <DocumentIcon className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                            >
                              <span>Upload un fichier</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                multiple
                                onChange={handleFileUpload}
                                ref={fileInputRef}
                                accept=".jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf"
                              />
                            </label>
                            <p className="pl-1">ou glisser-déposer</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, PDF, DOC, XLS jusqu'à 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>

              {/* Onglet Dashboard */}
              <Tab.Panel>
                <div className="bg-white shadow rounded-lg p-6">
                  <MarketingDashboard />
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
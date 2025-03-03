import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold">CyberTM</h3>
            <p className="mt-4 text-gray-400">
              Solutions innovantes de télémarketing pour la cybersécurité
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link 
                  to="/services" 
                  className={`text-gray-400 hover:text-white ${location.pathname === '/services' ? 'text-white' : ''}`}
                >
                  Télémarketing B2B
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`text-gray-400 hover:text-white ${location.pathname === '/services' ? 'text-white' : ''}`}
                >
                  Génération de leads
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`text-gray-400 hover:text-white ${location.pathname === '/services' ? 'text-white' : ''}`}
                >
                  Conseil en cybersécurité
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Ressources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link 
                  to="/blog" 
                  className={`text-gray-400 hover:text-white ${location.pathname === '/blog' ? 'text-white' : ''}`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/why-us" 
                  className={`text-gray-400 hover:text-white ${location.pathname === '/why-us' ? 'text-white' : ''}`}
                >
                  Études de cas
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`text-gray-400 hover:text-white ${location.pathname === '/contact' ? 'text-white' : ''}`}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">
                123 Avenue de la Cybersécurité
              </li>
              <li className="text-gray-400">
                75001 Paris
              </li>
              <li className="text-gray-400">
                +33 1 23 45 67 89
              </li>
              <li className="text-gray-400">
                contact@cybertm.fr
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} CyberTM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
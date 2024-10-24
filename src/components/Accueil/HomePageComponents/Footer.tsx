import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-800 py-8 font-poppins border-t border-gray-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-bold mb-2">À Propos de H20</h3>
            <p className="text-gray-800">
              H20 est une entreprise dédiée à la création de solutions web modernes pour les entrepreneurs.
            </p>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p>Email : hamdane.khiari@gmail.com</p>
            <p>Téléphone : 07 68 02 77 74</p>
          </div>

          {/* Legal information */}
          <div>
            <h3 className="text-lg font-bold mb-2">Informations légales</h3>
            <ul className="text-gray-800 space-y-2">
              <li><a href="/legal" className="hover:text-gray-500 transition duration-300">Mentions légales</a></li>
              <li><a href="/privacy" className="hover:text-gray-500 transition duration-300">Politique de confidentialité</a></li>
              <li><a href="/terms" className="hover:text-gray-500 transition duration-300">Conditions générales</a></li>
            </ul>
          </div>

          {/* Social media links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Réseaux sociaux</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://facebook.com" className="text-gray-800 hover:text-blue-500" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="https://twitter.com" className="text-gray-800 hover:text-blue-400" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com" className="text-gray-800 hover:text-pink-500" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://linkedin.com" className="text-gray-800 hover:text-blue-700" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://youtube.com" className="text-gray-800 hover:text-red-600" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="text-center mt-8">
          <p className="text-gray-800">© 2024 H20. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

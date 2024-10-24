import React from 'react';
import Button from '../../atoms/Button.tsx';

const CallToActionBanner: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-6"> {/* Réduction du padding de py-12 à py-6 */}
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3">Besoin d'un accompagnement personnalisé ?</h2> {/* Taille de texte réduite */}
        <p className="text-md mb-4">Contactez-nous dès aujourd'hui pour une consultation gratuite.</p> {/* Taille de texte réduite */}
        <Button label="Contactez-nous" href="/contact" />
      </div>
    </section>
  );
};

export default CallToActionBanner;

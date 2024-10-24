import React from 'react';

const ServiceIntroSection: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-6"> {/* Réduction du padding de py-12 à py-6 */}
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">Nos Services</h1> {/* Réduction de la taille de texte */}
        <p className="text-md">Du SEO à l'ERP, des solutions sur mesure pour transformer votre activité.</p> {/* Réduction de la taille de texte */}
      </div>
    </section>
  );
};

export default ServiceIntroSection;

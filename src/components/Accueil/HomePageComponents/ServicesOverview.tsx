import React from 'react';
import Button from '../../atoms/Button.tsx';

const ServicesOverview: React.FC = () => {
  const services = [
    { title: 'Création de sites web', description: 'Des sites vitrines élégants et performants.', color: 'from-blue-500 to-blue-400' },
    { title: 'SEO', description: 'Optimisation pour moteurs de recherche.', color: 'from-green-500 to-green-400' },
    { title: 'Publicité en ligne', description: 'Gestion de campagnes publicitaires efficaces.', color: 'from-red-500 to-red-400' },
    { title: 'Consulting digital', description: 'Conseils en développement web et marketing.', color: 'from-purple-500 to-purple-400' },
    { title: 'Formation en ligne', description: 'Formations et coaching sur mesure.', color: 'from-yellow-500 to-yellow-400' },
    { title: 'Applications sur mesure', description: 'Développement d’applications web et mobiles.', color: 'from-pink-500 to-pink-400' },
    { title: 'Automation des processus', description: 'Automatisation des tâches et des processus.', color: 'from-indigo-500 to-indigo-400' },
    { title: 'Gestion des réseaux sociaux', description: 'Création de contenu et gestion des réseaux sociaux.', color: 'from-teal-500 to-teal-400' },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 p-8 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Nos Services Principaux</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className={`bg-gradient-to-r ${service.color} text-white p-6 shadow-md rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300`}>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Button label="En savoir plus sur nos services" href="/services" />
      </div>
    </section>
  );
};

export default ServicesOverview;

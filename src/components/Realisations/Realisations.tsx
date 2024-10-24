import React from 'react';
import Header from '../Accueil/HomePageComponents/Header.tsx';
import Footer from '../Accueil/HomePageComponents/Footer.tsx';

const projects = [
  {
    title: 'Cyber Code Academy',
    description: 'Une plateforme de formation en ligne pour les développeurs, avec des cours sur la création d’applications web et mobiles.',
    image: '/cybercode.jpg',
    link: '/realisations/cyber-code-academy'
  },
  {
    title: 'ERP SupplyFlow',
    description: 'Un ERP complet pour la gestion de la production et des stocks, adapté aux besoins des entreprises pour optimiser leurs processus.',
    image: '/supply.jpg',
    link: '/realisations/erp-supplyflow'
  },
  {
    title: "Joud: application d'anglais",
    description: "Une application interactive pour l'apprentissage de l'anglais, avec des fonctionnalités modernes pour les jeunes apprenants.",
    image: '/joud.jpg',
    link: '/realisations/joud-application'
  }
];

const Realisations: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          {/* Titre intégré dans la section */}
          <h1 className="text-4xl font-bold mb-6 text-white bg-blue-600 py-4 rounded">Nos Réalisations</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md rounded-lg overflow-hidden border-t-4 border-blue-500 hover:border-blue-700 transition-colors duration-300"
              >
                {/* Animation de l'image */}
                <div className="relative group">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-75 transition duration-300" />
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.link} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                      Découvrir le projet
                    </a>
                  </div>
                </div>
                {/* Détails du projet */}
                <div className="p-6 bg-gradient-to-r from-blue-50 to-gray-50">
                  <h3 className="text-2xl font-bold mb-2 text-blue-700">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Realisations;

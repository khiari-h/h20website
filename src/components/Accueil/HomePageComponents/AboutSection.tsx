import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        
        {/* Texte à gauche */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left p-6">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">À propos de H20</h2>
          <p className="text-lg mb-4 text-gray-700">
            Chez <strong>H20</strong>, nous accompagnons les entrepreneurs et petites entreprises à réaliser leurs projets digitaux. 
            Notre mission est de concevoir des solutions web personnalisées, adaptées aux besoins spécifiques de nos clients.
          </p>
          <p className="text-lg text-gray-700">
            Nous mettons en place des solutions pour vous concentrer sur l'essentiel : la croissance de votre activité.
          </p>
        </div>
        
        {/* Image à droite avec une taille réduite */}
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src="/open.jpg" 
            alt="Illustration Open Space" 
            className="w-2/3 h-auto max-w-xs object-cover rounded-md shadow-md" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

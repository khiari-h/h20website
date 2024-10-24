import React from 'react';
import Button from '../../atoms/Button.tsx';

const Hero: React.FC = () => {
  return (
    <div className="bg-cover bg-center h-96 flex flex-col justify-center items-center" style={{ backgroundImage: `url('/hero.jpg')` }}>
      <h1 className="text-4xl font-bold text-white mb-4">H20 – Services web pour entrepreneurs modernes</h1>
      <p className="text-xl text-white mb-6">Création de sites web, SEO et publicité en ligne pour booster votre activité.</p>
      
      {/* Reusing the Button component */}
      <Button label="Découvrez nos services" href="/services" />
    </div>
  );
};

export default Hero;

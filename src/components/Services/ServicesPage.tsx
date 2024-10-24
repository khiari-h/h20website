import React from 'react';
import Header from '../Accueil/HomePageComponents/Header.tsx';
import Footer from '../Accueil/HomePageComponents/Footer.tsx';
import ServiceIntroSection from './ServicesComponents/ServiceIntroSection.tsx';
import ServiceCarousel from './ServicesComponents/ServicesCarousel.tsx'; // Remplacement du ServiceGrid par ServiceCarousel
import CallToActionBanner from './ServicesComponents/CallToActionBanner.tsx';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-100"> {/* Appliquer le fond gris sur toute la page */}
      {/* Header */}
      <Header />

      {/* Section d'intro */}
      <ServiceIntroSection />

      {/* Carousel des services */}
      <section className="py-8"> {/* Reduce padding from py-16 to py-8 */}
  <div className="container mx-auto">
    <ServiceCarousel />
  </div>
</section>


      {/* Bannière CTA */}
      <CallToActionBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;

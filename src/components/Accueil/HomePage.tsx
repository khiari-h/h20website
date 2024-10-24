import React from 'react';
import Header from './HomePageComponents/Header.tsx';
import Hero from './HomePageComponents/Hero.tsx';
import AboutSection from './HomePageComponents/AboutSection.tsx';
import ServicesOverview from './HomePageComponents/ServicesOverview.tsx';
import Footer from './HomePageComponents/Footer.tsx';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesOverview />
     <Footer />
    </div>
  );
};

export default HomePage;

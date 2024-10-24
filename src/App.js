import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import HomePage from './components/Accueil/HomePage.tsx';
import ServicesPage from './components/Services/ServicesPage.tsx'; 
import Realisations from './components/Realisations/Realisations.tsx';
import ContactPage from './components/Contact/ContactPage.tsx';

function App() {
  console.log("Render App");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}


export default App;

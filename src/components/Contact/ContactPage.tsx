import React from 'react';
import Header from '../Accueil/HomePageComponents/Header.tsx';
import Footer from '../Accueil/HomePageComponents/Footer.tsx';
import Button from '../atoms/Button.tsx';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Contactez-nous</h2>
          <p className="text-md text-gray-700 mb-8">Nous sommes à votre disposition pour répondre à toutes vos questions.</p>

          {/* Contact Form */}
          <form className="bg-white shadow-md rounded-lg px-6 py-8 max-w-lg mx-auto space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nom et Prénom</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Votre nom complet" required />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Votre adresse email" required />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Votre message" required />
            </div>

            <Button label="Envoyer le message" className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg" />
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;

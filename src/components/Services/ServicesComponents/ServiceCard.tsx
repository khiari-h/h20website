import React from 'react';

interface Service {
  title: string;
  description: string;
  details: string;
  color?: string;
}

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  // Vérifie si service.color existe, sinon applique une couleur par défaut
  const serviceColor = service.color || 'from-gray-500 to-gray-400';

  return (
    <div 
      className={`bg-gradient-to-r ${serviceColor} text-white p-6 shadow-md rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-500 ease-in-out`}
      style={{ 
        minHeight: '300px', 
        maxWidth: '400px',  
        margin: '0 auto',  
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center' 
      }}
    >
      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-lg mb-4">{service.description}</p>
      <p className="text-base">{service.details}</p>
    </div>
  );
};

export default ServiceCard;

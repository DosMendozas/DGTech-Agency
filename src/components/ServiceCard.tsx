import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-2">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
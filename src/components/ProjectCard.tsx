import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  image: string;
  demoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, image, demoUrl }) => {
  return (
    <a 
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-xl block transform transition-all duration-300 hover:-translate-y-2"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 p-6 flex flex-col justify-end transform transition-transform duration-300">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <ExternalLink className="w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-gray-300 mb-2">{description}</p>
        <p className="text-orange-500 font-mono text-sm">{tech}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
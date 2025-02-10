import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, position, text }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
      <Quote className="w-10 h-10 text-orange-500 mb-4" />
      <p className="text-gray-300 mb-6 italic">{text}</p>
      <div>
        <h4 className="font-semibold text-white">{name}</h4>
        <p className="text-gray-400">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
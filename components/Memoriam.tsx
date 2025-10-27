
import React from 'react';
import { Link } from '../types';
import { IconLink } from './Icons';

interface MemoriamProps {
  physicistName: string;
  biography: string;
  links: Link[];
}

const Memoriam: React.FC<MemoriamProps> = ({ physicistName, biography, links }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 h-full shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <img 
            src={`https://picsum.photos/seed/${physicistName.replace(/\s/g, '')}/80`}
            alt={`Portrait of ${physicistName}`} 
            className="w-20 h-20 rounded-full border-2 border-slate-600 object-cover"
        />
        <div>
            <h3 className="text-xl font-bold text-white">In Memoriam</h3>
            <h4 className="text-2xl font-semibold text-cyan-400">{physicistName}</h4>
        </div>
      </div>
      
      <p className="text-slate-300 mb-6 leading-relaxed">{biography}</p>

      <div>
        <h4 className="text-lg font-semibold text-slate-200 mb-3">Further Reading</h4>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-200"
              >
                <IconLink className="w-4 h-4 flex-shrink-0" />
                <span>{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Memoriam;

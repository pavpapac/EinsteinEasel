
import React from 'react';
import { Example } from '../types';
import { IconLink } from './Icons';

interface ExamplesProps {
  examples: Example[];
}

const Examples: React.FC<ExamplesProps> = ({ examples }) => {
  if (!examples || examples.length === 0) {
    return null;
  }

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-800 pb-2">
        Real-World Applications & Anecdotes
      </h3>
      <div className="space-y-6">
        {examples.map((example, index) => (
          <div key={index} className="bg-slate-900 p-4 rounded-md border border-slate-700">
            <h4 className="font-bold text-lg text-slate-100 mb-1">{example.title}</h4>
            <p className="text-slate-400 mb-3">{example.description}</p>
            <a
              href={example.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-200 text-sm"
            >
              <IconLink className="w-4 h-4 flex-shrink-0" />
              <span>{example.link.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examples;

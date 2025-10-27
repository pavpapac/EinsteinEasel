
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-16">
      <div className="w-12 h-12 border-4 border-slate-600 border-t-cyan-400 rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-semibold text-slate-300">Consulting the laws of physics...</p>
      <p className="text-slate-400">Please wait while the AI analyzes the universe.</p>
    </div>
  );
};

export default LoadingSpinner;

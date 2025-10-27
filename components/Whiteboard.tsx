import React from 'react';

interface WhiteboardProps {
  title: string;
  content: string;
}

const Whiteboard: React.FC<WhiteboardProps> = ({ title, content }) => {
  return (
    <div className="bg-gray-800 border-4 border-gray-700 rounded-lg p-6 h-full shadow-2xl relative animate-zoom-in">
        <div className="absolute top-2 right-2 w-4 h-4 bg-gray-600 rounded-full"></div>
        <div className="absolute top-2 left-2 w-4 h-4 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-gray-600 rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 bg-gray-600 rounded-full"></div>

      <h3 className="text-2xl font-bold text-cyan-300 mb-4 border-b-2 border-cyan-800 pb-2">{title}</h3>
      <div className="font-handwriting text-2xl text-slate-100 whitespace-pre-wrap leading-relaxed">
        {content}
      </div>
    </div>
  );
};

export default Whiteboard;
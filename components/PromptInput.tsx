
import React, { useState } from 'react';
import { IconSparkles } from './Icons';

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ onSubmit, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g., a cup standing on a table..."
          className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg py-3 px-4 pr-32 text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none transition duration-200 resize-none"
          rows={2}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center gap-2 bg-cyan-600 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <IconSparkles className="w-5 h-5" />
          Analyze
        </button>
      </div>
    </form>
  );
};

export default PromptInput;

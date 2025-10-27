
import React, { useState, useCallback } from 'react';
import { PhysicsData } from './types';
import { fetchPhysicsData } from './services/geminiService';
import PromptInput from './components/PromptInput';
import ResultDisplay from './components/ResultDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { IconLightbulb } from './components/Icons';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [result, setResult] = useState<PhysicsData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePromptSubmit = useCallback(async (submittedPrompt: string) => {
    if (!submittedPrompt) {
      setError('Please enter a scene description.');
      return;
    }
    setPrompt(submittedPrompt);
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const data = await fetchPhysicsData(submittedPrompt);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError('Failed to analyze the scene. The AI might be busy, or an error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center p-4 sm:p-6 md:p-8">
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">Einstein's Easel</h1>
        <p className="text-slate-400 text-lg">Describe a scene or an invention, and watch history unfold.</p>
      </header>
      
      <main className="w-full max-w-4xl flex-grow flex flex-col items-center">
        <div className="w-full sticky top-4 z-10 bg-slate-900/80 backdrop-blur-sm p-2 rounded-xl">
          <PromptInput onSubmit={handlePromptSubmit} isLoading={isLoading} />
        </div>

        <div className="w-full mt-8 flex-grow">
          {isLoading && <LoadingSpinner />}
          {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}
          {result && !isLoading && <ResultDisplay data={result} />}
          {!isLoading && !result && !error && (
             <div className="text-center text-slate-500 pt-16 flex flex-col items-center">
                <IconLightbulb className="w-16 h-16 mb-4 text-slate-600"/>
                <h2 className="text-2xl font-semibold text-slate-400 mb-2">Ready for a new discovery?</h2>
                <p>Try examples like:</p>
                <ul className="mt-2 list-none">
                  <li>"An apple falling from a tree"</li>
                  <li>"A rainbow after the rain"</li>
                  <li>"Radio"</li>
                </ul>
            </div>
          )}
        </div>
      </main>

      <footer className="w-full max-w-4xl text-center mt-auto pt-8 text-slate-500 text-sm">
        <p>Powered by Google Gemini. For educational purposes only.</p>
      </footer>
    </div>
  );
};

export default App;

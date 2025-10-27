
import React from 'react';
import { PhysicsData } from '../types';
import Whiteboard from './Whiteboard';
import Memoriam from './Memoriam';
import Examples from './Examples';

interface ResultDisplayProps {
  data: PhysicsData;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ data }) => {
  const isInvention = data.contentType === 'invention';

  return (
    <div className="animate-fade-in space-y-8">
      <header className="text-center border-b-2 border-slate-700 pb-4">
        <p className="text-lg text-slate-400">{data.phenomenon}</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
          {isInvention ? 'Invented by' : 'Explained by'} <span className="text-cyan-400">{data.physicistName}</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
            <Whiteboard title={isInvention ? 'Key Patent' : 'The Mathematics'} content={data.mathematics} />
        </div>
        <div className="lg:col-span-3">
            <Memoriam
                physicistName={data.physicistName}
                biography={data.biography}
                links={data.furtherLinks}
            />
        </div>
      </div>

      <section>
        <Examples examples={data.realWorldExamples} />
      </section>
    </div>
  );
};

export default ResultDisplay;

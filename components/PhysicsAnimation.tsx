import React, { useState, useEffect } from 'react';

interface PhysicsAnimationProps {
  imageQuery: string;
}

const PhysicsAnimation: React.FC<PhysicsAnimationProps> = ({ imageQuery }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // Generate a consistent image based on the query to represent the phenomenon
  const imageUrl = `https://picsum.photos/seed/${imageQuery.replace(/\s/g, '-')}/800/400`;

  useEffect(() => {
    // Reset loaded state when image query changes to handle new submissions
    setIsLoaded(false);
  }, [imageUrl]);

  return (
    <div className="h-64 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center overflow-hidden relative shadow-inner">
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="w-full h-full bg-slate-700 animate-pulse"></div>
      )}
      <img
        src={imageUrl}
        alt={`Visual representation of: ${imageQuery}`}
        className={`object-cover w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default PhysicsAnimation;

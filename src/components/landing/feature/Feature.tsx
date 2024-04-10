import React from 'react';

type FeatureProps = {
  title: string;
  icon: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ title, icon, description }) => {
  return (
    <div className="flex size-full flex-col items-center justify-center rounded-md border-2 border-stone-200 bg-stone-100 p-6 text-center transition-all duration-200 hover:bg-stone-300">
      <div>{icon}</div>
      <div className="font-bold">{title}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
};

export { Feature };

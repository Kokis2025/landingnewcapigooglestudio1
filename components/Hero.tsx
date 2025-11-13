import React from 'react';
import { HeroSectionData } from '../types';

const DecorativeIcons: React.FC<{ icons: string[] }> = ({ icons }) => (
    <div className="flex items-center gap-3 text-2xl mb-2 text-emerald-500">
        {icons.map((icon, index) => <span key={index}>{icon}</span>)}
    </div>
);

const WaveDivider: React.FC = () => (
    <div className="wave-divider" aria-hidden="true">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
    </div>
);


export const Hero: React.FC<HeroSectionData> = ({ title, subtitle, imageUrl, ctaPrimary, ctaSecondary, decorativeIcons }) => {
  return (
    <section 
      id="hero"
      className="relative container mx-auto px-6 pt-16 pb-32 md:pt-24 md:pb-40"
      aria-labelledby="hero-title"
    >
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <DecorativeIcons icons={decorativeIcons} />
          </div>
          <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-emerald-700 leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={ctaPrimary.href} 
              className="btn-primary text-lg px-8 py-3 rounded-full transition-transform transform hover:scale-105 shadow-lg"
            >
              {ctaPrimary.text}
            </a>
            <a 
              href={ctaSecondary.href} 
              className="btn-secondary text-lg px-8 py-3 rounded-full transition-transform transform hover:scale-105"
            >
              {ctaSecondary.text}
            </a>
          </div>
        </div>

        <div className="md:w-full mt-10 md:mt-0 flex justify-center">
          <div className="p-2 bg-white rounded-2xl shadow-xl">
            <img 
              src={imageUrl} 
              alt="Capi y Hely en el bosque encantado"
              className="w-full max-w-lg mx-auto rounded-2xl floating"
            />
          </div>
        </div>
      </div>
      <WaveDivider />
    </section>
  );
};
import React, { useRef } from 'react';
import { PdfItem, PdfsSectionData } from '../types';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

const PdfCard: React.FC<{ pdf: PdfItem }> = ({ pdf }) => (
  <div className="bg-white rounded-2xl overflow-hidden card-shadow flex flex-col h-full">
    <img src={pdf.coverImageUrl} alt={pdf.title} className="w-full h-auto object-cover aspect-[3/4]" />
    
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-emerald-800 mb-2">{pdf.title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{pdf.description}</p>
      <a
        href={pdf.url}
        target="_blank"
        rel="noopener noreferrer"
        className='btn-pdf text-center font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 mt-auto text-sm'
      >
        <DownloadIcon className="w-5 h-5" />
        {pdf.buttonText}
      </a>
    </div>
  </div>
);


export const PdfsSection: React.FC<PdfsSectionData> = ({ title, subtitle, kdpNotice, pdfs }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.offsetWidth * 0.8; 
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="pdfs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold">{title}</h2>
            <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
            {kdpNotice && (
                <div className="inline-flex items-center gap-2 mt-4 text-violet-600 font-semibold bg-violet-100 px-4 py-2 rounded-full">
                    <DownloadIcon className="w-5 h-5" />
                    <span>{kdpNotice}</span>
                </div>
            )}
        </div>
        <div className="relative max-w-7xl mx-auto">
            <button 
                onClick={() => scroll('left')} 
                className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition z-10"
                aria-label="Desplazar a la izquierda"
            >
                <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
            </button>
            <div ref={scrollContainerRef} className="carousel-container flex overflow-x-auto gap-8 pb-4 scroll-snap-x-mandatory">
                {pdfs.map(pdf => (
                <div key={pdf.id} className="flex-shrink-0 w-4/5 sm:w-1/3 lg:w-1/5 scroll-snap-start">
                    <PdfCard pdf={pdf} />
                </div>
                ))}
            </div>
            <button 
                onClick={() => scroll('right')} 
                className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition z-10"
                aria-label="Desplazar a la derecha"
            >
                <ChevronRightIcon className="w-6 h-6 text-gray-700" />
            </button>
        </div>
      </div>
    </section>
  );
};
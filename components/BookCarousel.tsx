import React, { useRef } from 'react';
import { Book, BooksSectionData } from '../types';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.838-5.513a1.125 1.125 0 0 0-1.087-1.415H6.443c-.51 0-.962.343-1.087.835L3.75 12.25m0 0a3 3 0 1 0-3 3h3a3 3 0 0 0 0-3Z" />
    </svg>
);


const BookCard: React.FC<{ book: Book }> = ({ book }) => (
  <div className="bg-white rounded-2xl overflow-hidden card-shadow flex flex-col h-full">
    <img src={book.coverImageUrl} alt={book.title} className="w-full h-auto object-cover aspect-[3/4]" />
    
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-emerald-800 mb-2">{book.title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{book.description}</p>
      <a
        href={book.url}
        target="_blank"
        rel="noopener noreferrer"
        className='btn-amazon text-center font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 mt-auto text-sm'
      >
        <CartIcon className="w-5 h-5" />
        {book.buttonText}
      </a>
    </div>
  </div>
);


export const BooksSection: React.FC<BooksSectionData> = ({ title, subtitle, kdpNotice, books }) => {
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
    <section id="libros" className="py-20 bg-emerald-500/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold">{title}</h2>
            <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
            {kdpNotice && (
                <div className="inline-flex items-center gap-2 mt-4 text-orange-600 font-semibold bg-orange-100 px-4 py-2 rounded-full">
                    <CartIcon className="w-5 h-5" />
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
                {books.map(book => (
                <div key={book.id} className="flex-shrink-0 w-4/5 sm:w-1/3 lg:w-1/5 scroll-snap-start">
                    <BookCard book={book} />
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
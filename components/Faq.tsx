import React, { useState } from 'react';
import { FaqItem, FaqSectionData } from '../types';

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);


const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                className="w-full flex justify-between items-center text-left py-5 px-6"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h4 className={`text-lg font-bold ${isOpen ? 'text-emerald-600' : 'text-emerald-800'}`}>{item.question}</h4>
                <ChevronDownIcon className={`h-5 w-5 text-emerald-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid grid-rows-[0fr] transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : ''}`}>
                <div className="overflow-hidden">
                    <p className="text-gray-600 leading-relaxed pb-5 px-6">{item.answer}</p>
                </div>
            </div>
        </div>
    );
}

export const Faq: React.FC<FaqSectionData> = ({ icon, title, subtitle, items }) => {
    return (
        <section id="faq" className="py-20 bg-emerald-500/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-emerald-100 text-3xl">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-emerald-600"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold">{title}</h2>
                    <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
                </div>
                <div className="max-w-3xl mx-auto bg-white rounded-2xl card-shadow overflow-hidden">
                    {items.map((item) => (
                        <FaqItemComponent key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
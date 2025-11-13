import React from 'react';
import { CtaSectionData } from '../types';

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


export const Cta: React.FC<CtaSectionData> = ({ leftPanel, rightPanel }) => {
    return (
        <section id="bono" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    {/* Left Panel */}
                    <div className="md:w-1/2 p-8 md:p-12 text-white" style={{ background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)' }}>
                        <div className="text-6xl mb-4">{leftPanel.icon}</div>
                        <h2 className="text-4xl font-extrabold mb-3 text-white" style={{fontFamily: "'Baloo 2', cursive"}}>{leftPanel.title}</h2>
                        <p className="text-purple-200 mb-6">{leftPanel.description}</p>
                        <ul className="space-y-3">
                            {leftPanel.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckIcon className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Right Panel */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gray-50/50">
                        <h3 className="text-2xl font-bold text-emerald-800 mb-4">{rightPanel.title}</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-sm font-semibold text-gray-600">Tu nombre</label>
                                <input type="text" id="name" placeholder={rightPanel.namePlaceholder} className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm font-semibold text-gray-600">Tu email</label>
                                <input type="email" id="email" placeholder={rightPanel.emailPlaceholder} className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
                            </div>
                            <button type="submit" className="btn-cta w-full py-3 rounded-lg text-lg">
                                {rightPanel.buttonText}
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 mt-4 text-center">
                            {rightPanel.finePrint}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
import React from 'react';
import { AuthorSectionData, AuthorFeature } from '../types';

const icons = {
    heart: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>,
    book: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>,
    family: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.742-.544l7.123 4.948a1.125 1.125 0 0 1-1.45 1.054l-7.123-4.948a9.094 9.094 0 0 0-3.742.544m-7.484 0a9.094 9.094 0 0 1 3.742-.544l7.123 4.948a1.125 1.125 0 0 0 1.45-1.054l-7.123-4.948a9.094 9.094 0 0 1-3.742.544m0 0a9.094 9.094 0 0 1-3.742-.544l-7.123 4.948a1.125 1.125 0 0 1-1.45-1.054l7.123-4.948a9.094 9.094 0 0 1 3.742.544" /></svg>
}

const iconColors = {
    heart: 'bg-pink-100 text-pink-600',
    book: 'bg-blue-100 text-blue-600',
    family: 'bg-amber-100 text-amber-600',
}

const FeatureItem: React.FC<{ feature: AuthorFeature }> = ({ feature }) => (
    <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${iconColors[feature.icon]}`}>
            {icons[feature.icon]}
        </div>
        <div>
            <h3 className="text-lg font-bold text-emerald-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
        </div>
    </div>
);

export const Author: React.FC<AuthorSectionData> = ({ title, authorName, features }) => {
    return (
        <section id="autor" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold">{title}</h2>
                </div>
                <div className="max-w-4xl mx-auto bg-white rounded-2xl card-shadow overflow-hidden flex flex-col md:flex-row">
                    {/* Left Side */}
                    <div className="md:w-1/3 bg-gray-50 flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-40 h-40 bg-violet-200 rounded-full flex items-center justify-center shadow-inner mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-emerald-800">{authorName}</h3>
                    </div>
                    {/* Right Side */}
                    <div className="md:w-2/3 p-8 md:p-10">
                        <div className="space-y-8">
                            {features.map(feature => (
                                <FeatureItem key={feature.id} feature={feature} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
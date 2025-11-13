import React from 'react';
import { FeaturedProductData } from '../types';

const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);


export const FeaturedProduct: React.FC<FeaturedProductData> = ({ title, product }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <div className="inline-flex items-center gap-3 text-3xl md:text-4xl font-extrabold text-emerald-700">
                        <DownloadIcon className="w-8 h-8" />
                        <h2>{title}</h2>
                    </div>
                </div>
                <div className="max-w-sm mx-auto bg-white rounded-2xl overflow-hidden card-shadow text-center">
                    <img src={product.imageUrl} alt={product.title} className="w-full h-auto object-cover" />
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-emerald-800 mb-2">{product.title}</h3>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        <a 
                            href={product.buttonUrl}
                            className="btn-pdf inline-flex items-center justify-center gap-2 font-bold py-3 px-8 rounded-lg w-full"
                        >
                            <DownloadIcon className="w-5 h-5" />
                            {product.buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
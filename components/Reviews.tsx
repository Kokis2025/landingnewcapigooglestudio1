import React from 'react';
import { ReviewsSectionData, Review } from '../types';
import { Rating } from './Rating';

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
    const avatarLetter = review.author.charAt(0).toUpperCase();
    const colors = ['bg-pink-100 text-pink-700', 'bg-sky-100 text-sky-700', 'bg-violet-100 text-violet-700', 'bg-amber-100 text-amber-700', 'bg-emerald-100 text-emerald-700'];
    const colorClass = colors[Math.abs(review.id.charCodeAt(0)) % colors.length];

    return (
        <div className="bg-slate-50/50 p-6 rounded-2xl relative h-full flex flex-col card-shadow" style={{border: 'none'}}>
            <div className="absolute top-2 right-3 text-gray-200 text-8xl font-serif z-0 select-none">
                “
            </div>
            <div className="relative z-10 flex flex-col h-full">
                <Rating rating={review.rating} />
                <p className="text-gray-600 my-4 flex-grow italic">"{review.text}"</p>
                <div className="flex items-center mt-auto pt-4 border-t border-slate-200">
                    <div className={`w-11 h-11 rounded-full ${colorClass} flex items-center justify-center font-bold text-lg mr-4`}>
                        {avatarLetter}
                    </div>
                    <div>
                        <p className="font-bold text-emerald-800">{review.author}</p>
                        <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Reviews: React.FC<ReviewsSectionData> = ({ title, subtitle, reviews }) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold">{title}</h2>
                    <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};
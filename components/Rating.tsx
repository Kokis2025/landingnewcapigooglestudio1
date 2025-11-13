
import React from 'react';
import { StarIcon } from './icons/StarIcon';

export const Rating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`h-6 w-6 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} />
        ))}
    </div>
);
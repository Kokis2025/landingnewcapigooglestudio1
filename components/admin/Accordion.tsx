import React, { useState } from 'react';

export const Accordion: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return <div className="space-y-2">{children}</div>;
};

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
            <button
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-700 hover:bg-gray-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    &#9660;
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <div className="p-4 border-t border-gray-200">
                    {children}
                </div>
            </div>
        </div>
    );
};

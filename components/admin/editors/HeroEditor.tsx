import React from 'react';
import { HeroSectionData, PageContent } from '../../../types';

interface HeroEditorProps {
    data: HeroSectionData;
    sectionId: string;
    setContent: React.Dispatch<React.SetStateAction<PageContent>>;
}

export const HeroEditor: React.FC<HeroEditorProps> = ({ data, sectionId, setContent }) => {

    type CtaKey = 'ctaPrimary' | 'ctaSecondary';
    type CtaField = 'text' | 'href';
    type CtaPath = `${CtaKey}.${CtaField}`;

    const handleChange = (field: keyof HeroSectionData | CtaPath | 'decorativeIcons', value: any) => {
        setContent(prevContent => {
            const newSections = prevContent.sections.map(section => {
                if (section.id === sectionId) {
                    const newData: HeroSectionData = { ...section.data };
                    
                    if (field === 'decorativeIcons') {
                         newData.decorativeIcons = value.split(',').map((s: string) => s.trim());
                    } else if (typeof field === 'string' && (field.startsWith('ctaPrimary.') || field.startsWith('ctaSecondary.'))) {
                        const [ctaKey, ctaField] = field.split('.') as [CtaKey, CtaField];
                        newData[ctaKey] = { ...newData[ctaKey], [ctaField]: value };
                    } else {
                        const key = field as keyof HeroSectionData;
                        if (key in newData) {
                            (newData as any)[key] = value;
                        }
                    }
                    return { ...section, data: newData };
                }
                return section;
            });
            return { ...prevContent, sections: newSections };
        });
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-600">Título</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-600">Subtítulo</label>
                <textarea
                    value={data.subtitle}
                    onChange={(e) => handleChange('subtitle', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                    rows={3}
                />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-600">URL de Imagen</label>
                <input
                    type="text"
                    value={data.imageUrl}
                    onChange={(e) => handleChange('imageUrl', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-600">Íconos Decorativos (separados por comas)</label>
                <input
                    type="text"
                    value={data.decorativeIcons?.join(', ')}
                    onChange={(e) => handleChange('decorativeIcons', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <fieldset className="border p-4 rounded-md">
                <legend className="text-sm font-medium text-gray-600 px-2">Botón Primario (CTA)</legend>
                 <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">Texto del Botón</label>
                    <input
                        type="text"
                        value={data.ctaPrimary.text}
                        onChange={(e) => handleChange('ctaPrimary.text', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                 <div className="mt-4 space-y-2">
                    <label className="block text-sm font-medium text-gray-600">Enlace (Href)</label>
                    <input
                        type="text"
                        value={data.ctaPrimary.href}
                        onChange={(e) => handleChange('ctaPrimary.href', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
            </fieldset>
            <fieldset className="border p-4 rounded-md">
                <legend className="text-sm font-medium text-gray-600 px-2">Botón Secundario (CTA)</legend>
                 <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">Texto del Botón</label>
                    <input
                        type="text"
                        value={data.ctaSecondary.text}
                        onChange={(e) => handleChange('ctaSecondary.text', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                 <div className="mt-4 space-y-2">
                    <label className="block text-sm font-medium text-gray-600">Enlace (Href)</label>
                    <input
                        type="text"
                        value={data.ctaSecondary.href}
                        onChange={(e) => handleChange('ctaSecondary.href', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
            </fieldset>
        </div>
    );
};
import React from 'react';
import { GlobalSettings, PageContent } from '../../../types';

interface GlobalSettingsEditorProps {
    globalSettings: GlobalSettings;
    setContent: React.Dispatch<React.SetStateAction<PageContent>>;
}

export const GlobalSettingsEditor: React.FC<GlobalSettingsEditorProps> = ({ globalSettings, setContent }) => {

    const handleChange = (field: keyof GlobalSettings, value: string) => {
        setContent(prevContent => ({
            ...prevContent,
            globalSettings: {
                ...prevContent.globalSettings,
                [field]: value,
            },
        }));
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-600">Título del Sitio</label>
                <input
                    type="text"
                    value={globalSettings.siteTitle}
                    onChange={(e) => handleChange('siteTitle', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-600">Logo (Código SVG)</label>
                <textarea
                    value={globalSettings.logoSvg}
                    onChange={(e) => handleChange('logoSvg', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm font-mono text-xs"
                    rows={8}
                    placeholder='<svg xmlns="http://www.w3.org/2000/svg" ...>'
                />
            </div>
        </div>
    );
};
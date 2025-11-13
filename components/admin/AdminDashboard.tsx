import React from 'react';
import { PageContent } from '../../types';
import { Accordion, AccordionItem } from './Accordion';
import { HeroEditor } from './editors/HeroEditor';
import { GlobalSettingsEditor } from './editors/GlobalSettingsEditor';
import { supabase } from '../../supabaseClient';

interface AdminDashboardProps {
    content: PageContent;
    setContent: React.Dispatch<React.SetStateAction<PageContent>>;
    session: any;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ content, setContent, session }) => {

    const handleLogout = async () => {
        if (supabase) {
            await supabase.auth.signOut();
        }
    };

    const renderSectionEditor = (section: any) => {
        switch(section.type) {
            case 'hero':
                return <HeroEditor data={section.data} sectionId={section.id} setContent={setContent} />;
            // TODO: Add editors for other sections here
            default:
                return <p className="text-sm text-gray-500">Editor para la sección '{section.type}' no implementado todavía.</p>;
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-gray-600">
                        Conectado como: <span className="font-semibold text-gray-800">{session.user.email}</span>
                    </p>
                </div>
                <button
                    onClick={handleLogout}
                    className="text-sm font-semibold text-red-600 hover:text-red-800"
                >
                    Cerrar Sesión
                </button>
            </div>
            
            <Accordion>
                 <AccordionItem title="Editar Ajustes Globales">
                    <GlobalSettingsEditor 
                        globalSettings={content.globalSettings}
                        setContent={setContent}
                    />
                </AccordionItem>
                {content.sections.map(section => (
                    <AccordionItem key={section.id} title={`Editar Sección: ${section.type.charAt(0).toUpperCase() + section.type.slice(1)}`}>
                        {renderSectionEditor(section)}
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};
import React, { useState } from 'react';
import { AdminLogin } from './AdminLogin';
import { AdminDashboard } from './AdminDashboard';
import { PageContent } from '../../types';
import { supabase } from '../../supabaseClient';

interface AdminPanelProps {
    onClose: () => void;
    content: PageContent;
    setContent: React.Dispatch<React.SetStateAction<PageContent>>;
    session: any | null;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onClose, content, setContent, session }) => {
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
    const [saveError, setSaveError] = useState<string | null>(null);

    const handleSave = async () => {
        if (!supabase) return;
        setSaveStatus('saving');
        setSaveError(null);
        try {
            const { error } = await supabase
                .from('pages')
                .update({ content })
                .eq('id', 1);

            if (error) throw error;
            
            setSaveStatus('success');
            setTimeout(() => setSaveStatus('idle'), 2000); // Reset after 2s
        } catch (err: any) {
            setSaveStatus('error');
            setSaveError('Error al guardar. Revise los permisos de escritura (RLS) para usuarios autenticados.');
            console.error(err);
        }
    };
    
    const getSaveButtonText = () => {
        switch(saveStatus) {
            case 'saving': return 'Guardando...';
            case 'success': return '¡Guardado!';
            case 'error': return 'Reintentar Guardado';
            default: return 'Guardar Cambios';
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100] p-4">
            <div className="bg-gray-100 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b bg-white rounded-t-lg flex-shrink-0">
                    <h2 className="text-2xl font-bold text-[#2C3E50]">Panel de Administración</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-500 hover:text-red-600 text-3xl font-bold leading-none"
                        aria-label="Cerrar panel"
                    >
                        &times;
                    </button>
                </div>
                
                <div className="overflow-y-auto p-6 flex-grow">
                    {!session ? (
                        <AdminLogin />
                    ) : (
                        <AdminDashboard content={content} setContent={setContent} session={session} />
                    )}
                </div>

                {session && (
                    <div className="p-4 bg-white border-t rounded-b-lg flex flex-col items-end flex-shrink-0">
                        <button
                            onClick={handleSave}
                            className="btn-primary font-bold py-2 px-6 rounded-md disabled:opacity-50"
                            disabled={saveStatus === 'saving'}
                        >
                            {getSaveButtonText()}
                        </button>
                        {saveError && <p className="text-sm text-red-600 mt-2">{saveError}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};
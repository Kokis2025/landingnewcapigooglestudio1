import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BooksSection } from './components/BookCarousel';
import { PdfsSection } from './components/PdfsSection';
import { FeaturedProduct } from './components/Benefits';
import { Cta } from './components/WhyChooseUs';
import { Faq } from './components/Faq';
import { Author } from './components/Author';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/admin/AdminPanel';
import { PageContent, Section } from './types';
import { INITIAL_PAGE_CONTENT } from './initialContent';
import { supabase } from './supabaseClient';

const App: React.FC = () => {
    const [isAdminPanelVisible, setIsAdminPanelVisible] = useState(false);
    const [pageContent, setPageContent] = useState<PageContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [session, setSession] = useState<any | null>(null);

    useEffect(() => {
        if (supabase) {
            supabase.auth.getSession().then(({ data: { session } }) => {
                setSession(session);
            });

            const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
                setSession(session);
            });

            return () => subscription.unsubscribe();
        }
    }, []);

    const fetchContent = async () => {
        if (!supabase) return;
        setLoading(true);
        setError(null);
        try {
            const { data, error } = await supabase
                .from('pages')
                .select('content')
                .eq('id', 1)
                .single();

            if (error && error.code !== 'PGRST116') { // PGRST116 = 'Bad Request' (e.g., no rows found)
                throw new Error(error.message);
            }
            if (data) {
                setPageContent(data.content as PageContent);
            } else {
                setPageContent(null); // No content found
            }
        } catch (err: any) {
            setError('No se pudo cargar el contenido. Por favor, asegúrese de que la tabla "pages" existe y tiene RLS habilitado para lectura.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (supabase) {
            fetchContent();
        } else {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (pageContent) {
            document.title = pageContent.globalSettings.siteTitle;
        }
    }, [pageContent?.globalSettings.siteTitle]);

    const initializeDatabase = async () => {
        if (!supabase) return;
        setLoading(true);
        setError(null);
        try {
            const { error } = await supabase
                .from('pages')
                .insert({ id: 1, content: INITIAL_PAGE_CONTENT });

            if (error) throw error;
            
            await fetchContent(); // Refetch content after initializing
        } catch (err: any) {
             setError('Error al inicializar la base de datos. Verifique los permisos de escritura (RLS) para usuarios anónimos o autenticados.');
            console.error(err);
            setLoading(false);
        }
    };

    if (!supabase) {
        return (
            <div className="flex items-center justify-center h-screen bg-red-50 text-red-800">
                <div className="text-center p-8">
                    <h1 className="text-2xl font-bold mb-4">Configuración de Supabase Requerida</h1>
                    <p>Por favor, asegúrate de que las variables de entorno <code className="bg-red-200 p-1 rounded">SUPABASE_URL</code> y <code className="bg-red-200 p-1 rounded">SUPABASE_ANON_KEY</code> están configuradas correctamente.</p>
                </div>
            </div>
        );
    }

    if (loading) {
        return <div className="flex items-center justify-center h-screen">Cargando...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center h-screen text-red-600">{error}</div>;
    }
    
    if (!pageContent) {
        return (
             <div className="flex flex-col items-center justify-center h-screen">
                <p className="mb-4">No se encontró contenido en la base de datos.</p>
                <button
                    onClick={initializeDatabase}
                    className="btn-primary px-6 py-3 rounded-lg"
                >
                    Inicializar Base de Datos con Contenido de Muestra
                </button>
            </div>
        );
    }


    const renderSection = (section: Section<any>) => {
        if (!section.visible) return null;

        switch (section.type) {
            case 'hero': return <Hero key={section.id} {...section.data} />;
            case 'books': return <BooksSection key={section.id} {...section.data} />;
            case 'pdfs': return <PdfsSection key={section.id} {...section.data} />;
            case 'featuredProduct': return <FeaturedProduct key={section.id} {...section.data} />;
            case 'author': return <Author key={section.id} {...section.data} />;
            case 'reviews': return <Reviews key={section.id} {...section.data} />;
            case 'faq': return <Faq key={section.id} {...section.data} />;
            case 'cta': return <Cta key={section.id} {...section.data} />;
            case 'footer': return null;
            default: return null;
        }
    };
    
    const allSections = pageContent.sections.map(renderSection);
    const footerSection = pageContent.sections.find(s => s.type === 'footer' && s.visible);

    return (
        <div className="text-gray-700">
            <Header 
                siteTitle={pageContent.globalSettings.siteTitle} 
                logoSvg={pageContent.globalSettings.logoSvg}
            />
            <main>
                {allSections}
            </main>
            {footerSection && <Footer key={footerSection.id} {...footerSection.data} />}
            
            <button
                onClick={() => setIsAdminPanelVisible(true)}
                className="fixed bottom-4 right-4 bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105 z-50"
            >
                Administrador
            </button>

            {isAdminPanelVisible && <AdminPanel 
                onClose={() => setIsAdminPanelVisible(false)}
                content={pageContent}
                setContent={setPageContent}
                session={session}
            />}
        </div>
    );
};

export default App;
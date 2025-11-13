import React from 'react';
import { FooterSectionData, SocialLink, FooterLink } from '../types';

const SocialIcon: React.FC<{ link: SocialLink }> = ({ link }) => {
    const icons = {
        facebook: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>,
        instagram: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.161 1.953c-1.049-.047-1.353-.058-3.72-.058s-2.67.011-3.72.058c-1.1.049-1.8.224-2.4.477a2.91 2.91 0 00-1.04 1.04c-.253.6-.428 1.3-.477 2.4c-.047 1.049-.058 1.353-.058 3.72s.011 2.67.058 3.72c.049 1.1.224 1.8.477 2.4a2.91 2.91 0 001.04 1.04c.6.253 1.3.428 2.4.477 1.049.047 1.353.058 3.72.058s2.67-.011 3.72-.058c1.1-.049 1.8-.224 2.4-.477a2.91 2.91 0 001.04-1.04c.253-.6.428-1.3.477-2.4c.047-1.049-.058-1.353-.058-3.72s-.011-2.67-.058-3.72c-.049-1.1-.224-1.8-.477-2.4a2.91 2.91 0 00-1.04-1.04c-.6-.253-1.3-.428-2.4-.477c-1.049-.047-1.353-.058-3.72-.058z" clipRule="evenodd"></path><path d="M12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666z"></path><path d="M16.949 7.152a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0z"></path></svg>,
        twitter: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>,
        dribbble: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.335 0 .664-.017.987-.05-1.258-1.21-2.23-2.73-2.77-4.39a9.952 9.952 0 01-1.217-4.56c0-2.021.6-3.89 1.63-5.41a9.952 9.952 0 014.56-3.59A10.007 10.007 0 0012 2zm8.5 7.1a.5.5 0 00-1 0c-1.34 3.12-4.14 5.4-7.5 5.4s-6.16-2.28-7.5-5.4a.5.5 0 00-1 0c1.43 3.4 4.54 5.9 8 5.9s6.57-2.5 8-5.9z" clipRule="evenodd" /></svg>,
        tiktok: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.18 1.58-2.95 2.34-4.85 2.34-1.29 0-2.58-.31-3.74-1.02-1.34-.82-2.31-2.04-2.83-3.48-.19-.52-.3-.98-.42-1.51-.21-1.11-.36-2.22-.36-3.33 0-1.92.42-3.83 1.19-5.59.79-1.8 1.95-3.32 3.46-4.52 1.51-1.2 3.32-1.87 5.25-1.99.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>,
    };
    return (
        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <span className="sr-only">{link.platform}</span>
            {icons[link.platform]}
        </a>
    );
};

export const Footer: React.FC<FooterSectionData> = ({ main, links, socials, copyright }) => {
    return (
        <footer className="footer-gradient text-white pt-20 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-8 mb-12">
                    <div className="md:col-span-5">
                        <h3 className="text-2xl font-bold mb-2">{main.title}</h3>
                        <p className="text-gray-300 pr-4">{main.description}</p>
                    </div>
                    
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-lg mb-3 tracking-wide"> {links.title}</h4>
                        <ul className="space-y-2">
                            {links.items.map(link => (
                                <li key={link.id}>
                                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="font-bold text-lg mb-3 tracking-wide">{socials.title}</h4>
                        <div className="flex space-x-4 mb-4">
                            {socials.items.map(link => <SocialIcon key={link.id} link={link} />)}
                        </div>
                        <a href={`mailto:${socials.email}`} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                            {socials.email}
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-200/10 pt-6 mt-6 text-sm text-center text-gray-400">
                    <p>{copyright}</p>
                </div>
            </div>
        </footer>
    );
};
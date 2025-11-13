import React from 'react';

const Logo: React.FC<{ siteTitle: string; logoSvg: string }> = ({ siteTitle, logoSvg }) => (
    <div className="flex items-center space-x-2">
        <div className="w-10 h-10" dangerouslySetInnerHTML={{ __html: logoSvg }} />
        <span className="text-xl md:text-2xl font-extrabold text-[#047857]">{siteTitle}</span>
    </div>
);

interface HeaderProps {
    siteTitle: string;
    logoSvg: string;
}

export const Header: React.FC<HeaderProps> = ({ siteTitle, logoSvg }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Logo siteTitle={siteTitle} logoSvg={logoSvg} />
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#libros" className="text-gray-600 hover:text-[#10b981] transition-colors duration-300 font-semibold">Libros</a>
          <a href="#autor" className="text-gray-600 hover:text-[#10b981] transition-colors duration-300 font-semibold">Autor</a>
          <a href="#faq" className="text-gray-600 hover:text-[#10b981] transition-colors duration-300 font-semibold">FAQ</a>
        </nav>
        <a href="#bono" className="btn-primary rounded-full px-6 py-2 hidden md:block">
            Bono Gratuito
        </a>
      </div>
    </header>
  );
};
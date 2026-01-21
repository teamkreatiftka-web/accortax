import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); 
    };
    window.addEventListener('scroll', handleScroll);
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Kontak', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  
  // UPDATED: Cleaner Navbar styles without heavy containers
  const navContainerClass = scrolled
    ? 'bg-white/85 backdrop-blur-md py-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border-b border-gray-100' 
    : 'bg-transparent py-4 md:py-6 border-b border-transparent';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${navContainerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO - Removed the white box wrapper */}
          <Link to="/" className="flex items-center gap-3 relative z-50 flex-shrink-0 hover:opacity-80 transition-opacity">
            <img 
              src="https://res.cloudinary.com/dv4utwvtn/image/upload/v1768658397/Group_1000008476_rx0ofn.png" 
              alt="ACCORTAX Logo" 
              className="h-7 md:h-9 w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Menu - CLEAN & MINIMALIST (No Container) */}
          <div className="hidden md:flex items-center gap-10">
            {/* Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-200 relative group ${
                    isActive(link.path) 
                      ? 'text-brand-red font-bold' 
                      : 'text-gray-500 hover:text-brand-red'
                  }`}
                >
                  {link.name}
                  {/* Subtle hover dot */}
                  <span className={`absolute -bottom-2 left-1/2 w-1 h-1 rounded-full bg-brand-red transform -translate-x-1/2 transition-all duration-300 ${isActive(link.path) ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}`}></span>
                </Link>
              ))}
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200"></div>

            {/* Actions */}
            <div className="flex items-center gap-5">
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleTheme}
                className="text-gray-400 hover:text-brand-red transition-colors p-1"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-brand-red text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-[0_4px_12px_rgba(219,38,23,0.25)] hover:shadow-[0_6px_16px_rgba(219,38,23,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                Konsultasi
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none"></div>
        <div className="flex flex-col h-full pt-28 px-6 pb-8 relative z-10 overflow-y-auto">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-3xl font-bold tracking-tight transition-colors py-2 border-b border-gray-100 ${
                  isActive(link.path)
                    ? 'text-brand-red'
                    : 'text-gray-400 hover:text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto space-y-4">
             <div className="flex items-center justify-between py-4 border-t border-gray-100">
                <span className="text-gray-500 font-medium">Tema Tampilan</span>
                <button 
                  onClick={toggleTheme}
                  className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
             </div>
             <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-red text-white px-6 py-4 rounded-xl text-lg font-bold shadow-glow-red hover:bg-red-700 transition-colors"
              >
                Jadwalkan Konsultasi
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
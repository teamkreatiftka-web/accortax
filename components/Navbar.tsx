import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); 
    };
    window.addEventListener('scroll', handleScroll);
    
    // Ensure dark mode is disabled
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup menu saat rute berubah
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Kontak', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  
  // Logic Background Navbar:
  const navContainerClass = isOpen 
    ? 'bg-transparent border-transparent' 
    : scrolled
      ? 'bg-white/80 backdrop-blur-md py-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border-b border-gray-100' 
      : 'bg-transparent py-4 md:py-6 border-b border-transparent';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${navContainerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 relative z-50 flex-shrink-0 hover:opacity-80 transition-opacity" onClick={() => setIsOpen(false)}>
            <img 
              src="https://res.cloudinary.com/dv4utwvtn/image/upload/v1768658397/Group_1000008476_rx0ofn.png" 
              alt="ACCORTAX Logo" 
              className="h-7 md:h-9 w-auto object-contain transition-all"
            />
          </Link>
          
          {/* Desktop Menu */}
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
                  <span className={`absolute -bottom-2 left-1/2 w-1 h-1 rounded-full bg-brand-red transform -translate-x-1/2 transition-all duration-300 ${isActive(link.path) ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}`}></span>
                </Link>
              ))}
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200"></div>

            {/* Actions */}
            <div className="flex items-center gap-5">
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
              className="p-2 rounded-full text-gray-800 hover:bg-black/5 transition-colors"
              aria-label={isOpen ? "Tutup Menu" : "Buka Menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full Glassmorphism */}
      <div className={`fixed inset-0 z-40 transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Layer 1: Strong Blur Backdrop */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl"></div>
        
        {/* Layer 2: Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/10"></div>
        
        {/* Layer 3: Texture Pattern (Optional visual interest) */}
        <div className="absolute inset-0 bg-grid-light opacity-20 pointer-events-none"></div>

        {/* Content Container */}
        <div className="flex flex-col h-full pt-28 px-6 pb-8 relative z-10 overflow-y-auto">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-3xl font-bold tracking-tight transition-colors py-3 border-b border-gray-200/50 ${
                  isActive(link.path)
                    ? 'text-brand-red'
                    : 'text-gray-800 hover:text-brand-red'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto space-y-6">
             <Link
                to="/contact"
                className="block w-full text-center bg-brand-red text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-brand-red/30 hover:bg-red-700 active:scale-95 transition-all"
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

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-red hover:scale-110 transition-all duration-300 border border-white/5">
    {icon}
  </a>
);

const FooterLink = ({ to, children }: { to: string, children?: React.ReactNode }) => (
  <Link to={to} className="hover:text-brand-red transition-colors block font-medium">
    {children}
  </Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark dark:bg-black text-white pt-24 pb-12 rounded-t-[3rem] -mt-10 relative z-20 shadow-ios-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-8">
               <div className="bg-white p-2 px-3 rounded-xl shadow-lg inline-block">
                 <img 
                  src="https://res.cloudinary.com/dv4utwvtn/image/upload/v1768658397/Group_1000008476_rx0ofn.png" 
                  alt="ACCORTAX Logo" 
                  className="h-10 w-auto object-contain"
                />
               </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm text-lg">
              Mitra profesional terpercaya dalam pengelolaan akuntansi dan perpajakan yang patuh, transparan, dan berkelanjutan.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Facebook size={20} />} />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-2/3">
             <div>
                <h4 className="font-bold font-heading text-xl mb-6 text-white tracking-tight">Perusahaan</h4>
                <ul className="space-y-4 text-gray-400">
                  <li><FooterLink to="/about">Tentang Kami</FooterLink></li>
                  <li><FooterLink to="/services">Layanan</FooterLink></li>
                  <li><FooterLink to="/contact">Kontak</FooterLink></li>
                </ul>
             </div>
             
             <div>
                <h4 className="font-bold font-heading text-xl mb-6 text-white tracking-tight">Layanan</h4>
                <ul className="space-y-4 text-gray-400">
                  <li><FooterLink to="/services">Akuntansi</FooterLink></li>
                  <li><FooterLink to="/services">Perpajakan</FooterLink></li>
                  <li><FooterLink to="/services">Kepatuhan</FooterLink></li>
                  <li><FooterLink to="/services">Konsultasi</FooterLink></li>
                </ul>
             </div>

             <div className="col-span-2 md:col-span-1">
                <h4 className="font-bold font-heading text-xl mb-6 text-white tracking-tight">Hubungi Kami</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-brand-red flex-shrink-0 mt-1" />
                    <span>Jakarta Selatan, Indonesia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-brand-red flex-shrink-0" />
                    <span>contact@accortax.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-brand-red flex-shrink-0" />
                    <span>+62 812 3456 7890</span>
                  </li>
                </ul>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} ACCORTAX. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

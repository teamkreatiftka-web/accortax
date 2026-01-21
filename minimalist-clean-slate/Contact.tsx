import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah kami terima (Simulasi).");
  };

  return (
    <div className="bg-white dark:bg-[#050505] min-h-screen relative overflow-hidden font-sans selection:bg-brand-red selection:text-white transition-colors duration-500">
      
      {/* Reduced py-32 to py-24 for mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center mb-12 md:mb-16">
           <span className="text-brand-red font-bold font-heading tracking-widest uppercase text-xs md:text-sm mb-4 block">Get In Touch</span>
          {/* Changed text to brand-dark (black) */}
          <h1 className="text-4xl md:text-7xl font-bold font-heading text-brand-dark dark:text-white mb-6 tracking-tighter">Hubungi Kami</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Mulailah langkah pertama menuju keuangan bisnis yang lebih tertib.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Info (Left Side) - Updated for Light Theme */}
          <div className="lg:col-span-5 space-y-8">
             <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-[2rem] p-6 md:p-8 shadow-xl">
                <h2 className="text-2xl font-bold font-heading mb-8 tracking-tight text-brand-dark dark:text-white">Informasi Kontak</h2>
                <div className="space-y-8">
                  <ContactItem 
                    icon={<MapPin />}
                    title="Alamat Kantor"
                    content="Gedung Perkantoran ABC, Lt. 3, Jl. Jend. Sudirman No. Kav 12, Jakarta Selatan 12345"
                  />
                  <ContactItem 
                    icon={<Mail />}
                    title="Email"
                    content="contact@accortax.com"
                  />
                  <ContactItem 
                    icon={<Phone />}
                    title="Telepon / WhatsApp"
                    content="+62 812 3456 7890"
                  />
                  <ContactItem 
                    icon={<Clock />}
                    title="Jam Operasional"
                    content="Senin - Jumat: 09.00 - 17.00 WIB"
                  />
                </div>
             </div>

             <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden h-64 relative group cursor-pointer shadow-md">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-500">
                   <div className="text-center group-hover:scale-105 transition-transform duration-500">
                     <MapPin size={48} className="mx-auto mb-2 text-brand-red" />
                     <p className="font-medium text-brand-dark dark:text-white">Google Maps Preview</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#121212] p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-white/10">
              <div className="mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-dark dark:text-white mb-3 tracking-tight">Diskusikan Kebutuhan Anda</h2>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Isi formulir di bawah ini, tim kami akan segera menghubungi Anda.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Nama Lengkap</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all text-brand-dark dark:text-white placeholder-gray-400 font-medium"
                      placeholder="Nama Anda"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Perusahaan</label>
                    <input 
                      type="text" 
                      id="company"
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all text-brand-dark dark:text-white placeholder-gray-400 font-medium"
                      placeholder="PT / CV"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all text-brand-dark dark:text-white placeholder-gray-400 font-medium"
                    placeholder="email@anda.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Layanan</label>
                  <div className="relative">
                    <select 
                      id="service"
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all text-brand-dark dark:text-white appearance-none cursor-pointer font-medium"
                    >
                      <option>Jasa Akuntansi / Pembukuan</option>
                      <option>Jasa Perpajakan</option>
                      <option>Konsultasi Bisnis</option>
                      <option>Lainnya</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <ArrowRight size={20} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Pesan</label>
                  <textarea 
                    id="message"
                    rows={4}
                    required
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all text-brand-dark dark:text-white placeholder-gray-400 resize-none font-medium"
                    placeholder="Ceritakan sedikit tentang kebutuhan bisnis Anda..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-red text-white font-bold py-5 rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/30 hover:shadow-red-500/40 active:scale-[0.98] transform duration-200 text-lg tracking-wide"
                >
                  <Send size={20} />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => (
  <div className="flex items-start gap-5 group">
    <div className="bg-brand-red/10 text-brand-red p-3.5 rounded-2xl flex-shrink-0 border border-brand-red/10 group-hover:bg-brand-red group-hover:text-white transition-colors">
      {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
    </div>
    <div>
      {/* Updated text colors for light theme */}
      <h3 className="font-bold font-heading text-brand-dark dark:text-white text-lg tracking-tight">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-1 leading-relaxed font-medium">{content}</p>
    </div>
  </div>
);

export default Contact;
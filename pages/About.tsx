import React from 'react';
import { ShieldCheck, Target, Eye, Award, Lock, BookOpen, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#0A0A0A] min-h-screen transition-colors duration-500">
      <div className="bg-white dark:bg-black pt-28 md:pt-40 pb-16 md:pb-20 rounded-b-[2.5rem] relative overflow-hidden border-b border-gray-100 dark:border-white/5">
        <div className="absolute inset-0 bg-texture-noise opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-brand-red font-bold font-heading tracking-widest uppercase text-xs md:text-sm mb-4 block animate-pulse">Siapa Kami</span>
          <h1 className="text-4xl md:text-7xl font-bold font-heading text-brand-dark dark:text-white mb-6 tracking-tighter">Tentang ACCORTAX</h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal px-2">
            Mengenal lebih dekat mitra akuntansi dan perpajakan Anda. Kami membangun kepercayaan melalui transparansi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-20">
        <section className="glass-panel rounded-[2rem] p-6 md:p-12 mb-12 shadow-xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/40 dark:bg-black/40 z-0"></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-10">
            <div className="flex-1 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-red/10 text-brand-red text-xs font-bold mb-6 border border-brand-red/10">
                <BookOpen size={14} /> PROFIL
              </div>
              <h2 className="text-2xl md:text-4xl font-bold font-heading text-brand-dark dark:text-white mb-6 tracking-tight">Fondasi Bisnis yang Sehat</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                <p>
                  <span className="font-bold text-brand-dark dark:text-white">ACCORTAX</span> adalah firma jasa profesional yang bergerak di bidang akuntansi dan perpajakan, melayani individu dan badan usaha di berbagai sektor.
                </p>
                <p>
                  Kami percaya bahwa pembukuan yang rapi dan kepatuhan pajak yang benar bukan beban, tapi <span className="text-brand-dark dark:text-white font-bold italic">aset strategis</span>. Kami hadir untuk menghilangkan kerumitan administratif agar Anda dapat fokus mengembangkan bisnis.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full order-1 md:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Office Environment" 
                  className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#1a1a1a] dark:bg-black text-white p-8 md:p-10 rounded-[2rem] shadow-xl flex flex-col justify-center relative overflow-hidden md:col-span-1 border border-white/5 group hover:border-brand-red/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 blur-[60px] rounded-full group-hover:bg-brand-red/30 transition-colors"></div>
            <div className="absolute inset-0 bg-texture-noise opacity-5 mix-blend-overlay"></div>
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/5 relative z-10">
              <Eye size={28} className="text-brand-red" />
            </div>
            <h2 className="text-2xl font-bold font-heading mb-4 tracking-tight relative z-10">Visi Kami</h2>
            <p className="text-gray-400 leading-relaxed font-medium relative z-10">
              Menjadi mitra profesional terpercaya dalam pengelolaan akuntansi dan perpajakan yang patuh, transparan, dan berkelanjutan.
            </p>
          </div>

          <div className="bg-white dark:bg-white/5 p-8 md:p-10 rounded-[2rem] shadow-glass md:col-span-2 border border-gray-100 dark:border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-texture-noise opacity-30"></div>
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 bg-gray-50 dark:bg-white/10 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-white/5">
                <Target size={28} className="text-brand-dark dark:text-white" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-brand-dark dark:text-white tracking-tight">Misi Kami</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
              <MissionItem text="Memberikan layanan akuntansi dan pajak sesuai standar." />
              <MissionItem text="Membantu klien memahami kondisi keuangan bisnis." />
              <MissionItem text="Meningkatkan kepatuhan pajak secara strategis." />
              <MissionItem text="Menyediakan solusi yang relevan dengan kebutuhan." />
            </div>
          </div>
        </section>

        <section className="mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-gray-100 to-transparent blur-3xl opacity-50 -z-10 rounded-full"></div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark dark:text-white tracking-tighter">Nilai Perusahaan</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <ValueCard 
              title="Integritas" 
              desc="Etika profesi yang dijunjung tinggi."
              icon={<ShieldCheck size={28} />} 
              color="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
            />
            <ValueCard 
              title="Akurasi" 
              desc="Data yang dapat dipertanggungjawabkan."
              icon={<Target size={28} />} 
              color="text-brand-red dark:text-red-400 bg-red-50 dark:bg-red-900/20"
            />
            <ValueCard 
              title="Profesional" 
              desc="Komunikasi dan proses yang jelas."
              icon={<Award size={28} />} 
              color="text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20"
            />
            <ValueCard 
              title="Kerahasiaan" 
              desc="Menjaga data klien secara ketat."
              icon={<Lock size={28} />} 
              color="text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
            />
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#0a0a0a] to-[#000000] rounded-[2rem] p-8 md:p-20 text-white text-center shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-brand-red/10 rounded-full flex items-center justify-center mb-6 md:mb-8 border border-brand-red/20">
                <Lock className="w-6 h-6 md:w-8 md:h-8 text-brand-red" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-heading mb-4 md:mb-6 tracking-tight">Komitmen Kerahasiaan</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal">
              ACCORTAX menjaga kerahasiaan seluruh data dan informasi klien sesuai etika profesi dan peraturan yang berlaku. Data Anda adalah amanah bagi kami.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

const MissionItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-4 p-4 md:p-5 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl transition-all border border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/10">
    <div className="mt-0.5 text-brand-red flex-shrink-0">
      <CheckCircle2 size={20} />
    </div>
    <span className="text-gray-600 dark:text-gray-300 font-medium text-sm leading-relaxed">{text}</span>
  </div>
);

const ValueCard = ({ title, desc, icon, color }: { title: string, desc: string, icon: React.ReactNode, color: string }) => (
  <div className="glass-panel p-6 md:p-8 rounded-3xl hover:border-brand-red/20 transition-all text-center group hover:-translate-y-1">
    <div className={`w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-transform group-hover:scale-110 ${color}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
    </div>
    <h3 className="text-base md:text-lg font-bold font-heading text-brand-dark dark:text-white mb-2 tracking-tight">{title}</h3>
    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default About;
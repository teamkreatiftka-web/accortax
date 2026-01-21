import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Calculator, Scale, FileText, PieChart, Landmark, Search, MessageSquare, Shield, Check } from 'lucide-react';

const Services: React.FC = () => {
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState('accounting');

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(id);
      }
    }
  }, [hash]);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Adequate space for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white dark:bg-[#050505] min-h-screen font-sans transition-colors duration-500 selection:bg-brand-red selection:text-white">
       {/* Hero - CHANGED TO WHITE THEME WITH TEXTURE */}
       {/* Reduced PT for mobile: pt-28 */}
       <div className="bg-white pt-28 md:pt-40 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-noise opacity-40 pointer-events-none"></div>
        {/* Abstract shape decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold font-heading text-brand-dark dark:text-white mb-6 tracking-tighter">Katalog Layanan</h1>
          {/* Changed text color to brand-dark for consistency */}
          <p className="text-lg md:text-xl text-brand-dark dark:text-gray-400 max-w-2xl mx-auto font-normal px-2">
            Spesifikasi teknis solusi akuntansi dan perpajakan kami.
          </p>
        </div>
      </div>

      {/* Sticky Tab Nav - Enhanced Glassmorphism */}
      <div className="sticky top-20 z-40 py-4 bg-white/70 backdrop-blur-xl border-b border-white/20 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-full w-full md:w-fit mx-auto border border-white/50">
            <TabButton 
                active={activeTab === 'accounting'} 
                onClick={() => scrollToSection('accounting')} 
                label="Accounting" 
            />
            <TabButton 
                active={activeTab === 'tax'} 
                onClick={() => scrollToSection('tax')} 
                label="Taxation" 
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 md:space-y-32 relative">
        <div className="absolute inset-0 bg-texture-noise opacity-30 pointer-events-none -z-10"></div>
        
        {/* Accounting Section */}
        <div id="accounting" className="scroll-mt-32">
          <SectionHeader 
            icon={<Calculator size={32} />}
            title="Accounting Services"
            desc="Standar Akuntansi Keuangan (SAK) Compliant."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ServiceDetailCard 
              title="Pembukuan (Bookkeeping)"
              items={[
                "Pencatatan transaksi harian (Jurnal)",
                "Rekonsiliasi Bank & Kartu Kredit",
                "Pemeliharaan Buku Besar (General Ledger)",
                "Manajemen Arsip Digital"
              ]}
              icon={<FileText size={24} />}
            />
            <ServiceDetailCard 
              title="Financial Reporting"
              items={[
                "Laporan Laba Rugi (Profit & Loss)",
                "Neraca (Balance Sheet)",
                "Laporan Arus Kas (Cash Flow)",
                "Catatan Atas Laporan Keuangan"
              ]}
              icon={<PieChart size={24} />}
              highlight
            />
            <ServiceDetailCard 
              title="Review & Audit Support"
              items={[
                "Pra-audit internal review",
                "Kompilasi laporan keuangan",
                "Identifikasi anomali transaksi"
              ]}
              icon={<Search size={24} />}
            />
            <ServiceDetailCard 
              title="Management Accounting"
              items={[
                "Analisis rasio profitabilitas",
                "Budgeting & Forecasting",
                "Cost Center Analysis",
                "Monitoring KPI Keuangan"
              ]}
              icon={<Landmark size={24} />}
            />
          </div>
        </div>

        {/* Tax Section */}
        <div id="tax" className="scroll-mt-32">
          <SectionHeader 
            icon={<Scale size={32} />}
            title="Tax Services"
            desc="Mitigasi risiko dan kepatuhan regulasi."
            colorClass="text-brand-red"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ServiceDetailCard 
              title="Tax Compliance"
              items={[
                "Perhitungan PPh 21/26, 23, 4(2)",
                "Pelaporan SPT Masa PPN",
                "SPT Tahunan Badan & Orang Pribadi",
                "E-Faktur & E-Bupot Management"
              ]}
              icon={<Shield size={24} />}
              highlight
            />
             <ServiceDetailCard 
              title="Tax Advisory"
              items={[
                "Analisis dampak pajak kontrak bisnis",
                "Tax Health Check (Diagnostic)",
                "Transfer Pricing Documentation",
                "Perencanaan Pajak Efisien"
              ]}
              icon={<MessageSquare size={24} />}
            />
             <ServiceDetailCard 
              title="Audit Assistance"
              items={[
                "Pendampingan SP2DK",
                "Persiapan data Pemeriksaan Pajak",
                "Komunikasi dengan Account Representative"
              ]}
              icon={<Search size={24} />}
            />
             <ServiceDetailCard 
              title="Dispute Resolution"
              items={[
                "Pendampingan Keberatan",
                "Pendampingan Banding",
                "Analisis Sengketa Pajak"
              ]}
              icon={<Scale size={24} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// UI Components

const TabButton = ({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) => (
    <button 
        onClick={onClick}
        className={`flex-1 md:flex-none px-6 md:px-8 py-3 rounded-full text-sm font-bold font-heading transition-all duration-300 ${
            active 
            ? 'bg-brand-dark text-white shadow-md transform scale-105' 
            : 'bg-transparent text-gray-500 hover:text-brand-dark'
        }`}
    >
        {label}
    </button>
);

const SectionHeader = ({ icon, title, desc, colorClass = "text-white" }: { icon: React.ReactNode, title: string, desc: string, colorClass?: string }) => (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 md:mb-12 pb-6 border-b border-gray-100 dark:border-white/10">
        <div className={`bg-brand-dark dark:bg-white/5 text-white p-4 rounded-2xl border border-white/10 shadow-lg`}>
            {icon}
        </div>
        <div>
            <h2 className="text-2xl md:text-4xl font-bold font-heading text-brand-dark dark:text-white tracking-tight">{title}</h2>
            {/* Changed desc text color to brand-dark */}
            <p className="text-brand-dark dark:text-gray-400 mt-2 font-medium">{desc}</p>
        </div>
    </div>
);

const ServiceDetailCard = ({ title, items, icon, highlight }: { title: string, items: string[], icon: React.ReactNode, highlight?: boolean }) => (
  <div className={`p-6 md:p-8 rounded-[2rem] h-full flex flex-col transition-all duration-300 group hover:-translate-y-1 ${
      highlight 
      ? 'bg-brand-dark text-white shadow-2xl ring-1 ring-white/10 relative overflow-hidden' 
      : 'glass-panel hover:border-brand-red/30'
  }`}>
    {highlight && <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-[80px] rounded-full pointer-events-none"></div>}
    
    <div className="flex items-center gap-4 mb-6 md:mb-8 relative z-10">
      <div className={`p-3 rounded-xl transition-colors ${highlight ? 'bg-brand-red text-white' : 'bg-white text-brand-dark shadow-sm group-hover:bg-brand-dark group-hover:text-white'}`}>
          {icon}
      </div>
      <h3 className={`text-lg md:text-xl font-bold font-heading leading-tight tracking-tight ${highlight ? 'text-white' : 'text-brand-dark'}`}>{title}</h3>
    </div>
    
    <ul className="space-y-4 flex-grow relative z-10">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 group/item">
          <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${highlight ? 'bg-brand-red' : 'bg-brand-dark group-hover:bg-brand-red transition-colors'}`}></div>
          {/* Changed item text color to brand-dark */}
          <span className={`text-sm leading-relaxed font-medium ${highlight ? 'text-gray-300' : 'text-brand-dark group-hover:text-brand-dark transition-colors'}`}>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Services;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calculator, 
  Scale, 
  SearchCheck,
  Activity,
  EyeOff,
  TrendingUp,
  AlertTriangle,
  PieChart as PieChartIcon,
  MoreHorizontal,
  Sparkles,
  ShieldCheck,
  FileText,
  Clock
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col font-sans bg-texture-noise selection:bg-saas-primary selection:text-white transition-colors duration-500 min-h-screen overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-12 lg:pt-40 lg:pb-32 overflow-hidden">
        
        {/* BACKGROUND LAYERS */}
        <div className="absolute inset-0 bg-texture-noise opacity-60 z-0 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="blob-bg w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-red-100 top-[-50px] right-[-50px] mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="blob-bg w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-blue-50 bottom-[-50px] left-[-50px] mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start z-20">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-panel text-saas-primary font-bold text-[10px] md:text-sm mb-6 animate-fade-in-up hover:scale-105 transition-transform cursor-default border border-red-100/50">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="font-heading tracking-wide">Solusi Akuntansi Modern</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-heading text-saas-dark leading-[1.1] tracking-tight mb-6 drop-shadow-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                Kelola Keuangan Bisnis <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-primary to-saas-secondary relative inline-block pb-1">
                  Lebih Mudah & Akurat
                  <svg className="absolute w-full h-2 md:h-3 bottom-0 left-0 text-red-200 -z-10 opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 64.9195 -1.0229 198.006 2.02251" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-sm md:text-lg text-gray-600 mb-8 max-w-2xl lg:max-w-xl leading-relaxed animate-fade-in-up font-medium px-2 lg:px-0" style={{animationDelay: '0.2s'}}>
                ACCORTAX menangani pembukuan, kepatuhan pajak, dan strategi keuangan agar Anda fokus pada pertumbuhan.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start animate-fade-in-up w-full lg:w-auto" style={{animationDelay: '0.3s'}}>
                <Link 
                  to="/contact" 
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand-red text-white rounded-full font-bold font-heading text-base md:text-lg transition-all hover:shadow-glow-red hover:-translate-y-1 active:scale-95 shadow-xl"
                >
                  Mulai Konsultasi Gratis
                  <div className="bg-white/20 rounded-full p-1 ml-3 group-hover:bg-white/30 transition-colors">
                     <ArrowRight size={18} className="md:w-5 md:h-5" />
                  </div>
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Visual (3-Card Fan) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0 z-10">
                 
                 {/* Visual Container */}
                 <div className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[420px] h-[320px] sm:h-[450px] lg:h-[500px] perspective-1000 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                    
                     {/* LEFT CARD: Hemat Waktu */}
                     <div 
                       className="absolute top-12 lg:top-16 left-0 sm:-left-4 lg:-left-8 w-[130px] sm:w-[180px] lg:w-[200px] aspect-[3/4.5] bg-white rounded-[2rem] shadow-2xl transform -rotate-[12deg] hover:-rotate-[15deg] transition-transform duration-500 z-10 overflow-hidden border border-white/20 origin-bottom-right group isolate transform-gpu [backface-visibility:hidden] [-webkit-tap-highlight-color:transparent]"
                       style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                     >
                        <img 
                          src="https://res.cloudinary.com/dv4utwvtn/image/upload/v1768678221/ultra_realistic_3d_render_symbolizing_freedom_from_tax_vqd585.jpg" 
                          alt="Hemat Waktu" 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-900/10 to-transparent opacity-90"></div>
                        <div className="absolute inset-0 p-4 flex flex-col justify-between">
                           <div className="self-start bg-white/90 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                              <span className="text-[8px] sm:text-[10px] font-bold text-gray-800 uppercase tracking-wide">Efisien</span>
                           </div>
                           <div className="text-left">
                              <h3 className="text-white font-heading font-bold text-sm sm:text-lg leading-tight mb-1 drop-shadow-md">Hemat<br/>Waktu</h3>
                              <div className="h-1 w-6 sm:w-8 bg-red-500 rounded-full"></div>
                           </div>
                        </div>
                     </div>

                     {/* RIGHT CARD: Data Aman */}
                     <div 
                       className="absolute top-12 lg:top-16 right-0 sm:-right-4 lg:-right-8 w-[130px] sm:w-[180px] lg:w-[200px] aspect-[3/4.5] bg-white rounded-[2rem] shadow-2xl transform rotate-[12deg] hover:rotate-[15deg] transition-transform duration-500 z-10 overflow-hidden border border-white/20 origin-bottom-left group isolate transform-gpu [backface-visibility:hidden] [-webkit-tap-highlight-color:transparent]"
                       style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                     >
                        <img 
                          src="https://res.cloudinary.com/dv4utwvtn/image/upload/v1768678220/ultra_detailed_3d_render_of_a_financial_report_1_xiwnpe.jpg" 
                          alt="Data Aman" 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/10 to-transparent opacity-90"></div>
                        <div className="absolute inset-0 p-4 flex flex-col justify-between">
                           <div className="self-end bg-white/90 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                              <span className="text-[8px] sm:text-[10px] font-bold text-gray-800 uppercase tracking-wide">Secure</span>
                           </div>
                           <div className="text-right flex flex-col items-end">
                              <h3 className="text-white font-heading font-bold text-sm sm:text-lg leading-tight mb-1 drop-shadow-md">Data<br/>Aman</h3>
                              <div className="h-1 w-6 sm:w-8 bg-blue-500 rounded-full"></div>
                           </div>
                        </div>
                     </div>

                     {/* CENTER CARD: MAIN (Prioritas) */}
                     <div 
                       className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] sm:w-[240px] lg:w-[260px] aspect-[9/14] bg-white rounded-[2.5rem] shadow-[0_30px_60px_-10px_rgba(219,38,23,0.3)] z-20 overflow-hidden border-[3px] border-white/40 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group isolate transform-gpu [backface-visibility:hidden] [-webkit-tap-highlight-color:transparent]"
                       style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                     >
                        <img 
                          src="https://res.cloudinary.com/dv4utwvtn/image/upload/v1768678221/high_quality_3d_render_illustrating_absolute_priority_and_v5fhvf.jpg"
                          alt="Prioritas Utama"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                        <div className="absolute inset-0 p-5 flex flex-col justify-between">
                           <div className="self-center bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white">
                              <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
                              <span className="text-[9px] sm:text-[10px] font-bold text-gray-900 font-heading tracking-wide">ACCORTAX PREMIUM</span>
                           </div>
                           <div className="mt-auto mb-4 text-center">
                              <h2 className="text-white font-heading font-bold text-2xl sm:text-3xl leading-none mb-1 drop-shadow-lg">
                                Bebas<br/><span className="italic font-serif font-normal">Pajak</span>
                              </h2>
                              <p className="text-gray-200 text-[9px] sm:text-[10px] leading-tight px-2 drop-shadow-md">
                                Solusi terdepan untuk kepatuhan bisnis Anda.
                              </p>
                           </div>
                           <div className="w-full">
                              <button className="w-full bg-gradient-to-b from-[#ff5e5e] to-[#DB2617] border-t border-white/30 text-white font-bold font-heading text-xs sm:text-sm py-3 rounded-2xl shadow-[0_5px_15px_rgba(219,38,23,0.4)] active:scale-95 transition-transform hover:brightness-110 flex items-center justify-center gap-2">
                                 Lihat Layanan
                              </button>
                           </div>
                        </div>
                     </div>

                 </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MARQUEE - Seamless Loop */}
      <div className="bg-saas-dark py-12 md:py-20 border-y border-white/5 overflow-hidden relative z-20">
        <div className="flex overflow-hidden">
           <MarqueeContent />
           <MarqueeContent />
        </div>
      </div>

      {/* 3. PAIN POINTS - FLOATING / OVERLAPPING CARD UI */}
      {/* Changed background to dark (bg-[#050505]) to remove white canvas bleeding */}
      <section className="py-10 md:py-20 bg-[#050505] rounded-t-[2.5rem] -mt-8 relative z-30 overflow-visible border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-20">
            
            {/* Left Content (Visual Storytelling: Floating Elements) */}
            <div className="lg:w-1/2 order-2 lg:order-1 relative min-h-[300px] flex items-center justify-center">
              
              {/* Floating Container - Reduced Width on Mobile */}
              <div className="lg:sticky lg:top-32 w-full max-w-[340px] sm:max-w-[420px] mx-auto h-[280px] md:h-[340px] relative perspective-[1000px] flex flex-col justify-center items-center">
                  
                  {/* Abstract Glow Background - Darker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-brand-red/20 to-transparent blur-3xl opacity-30 rounded-full -z-10 pointer-events-none"></div>
                  
                  {/* CARD 1: PEMBUKUAN (Floating Top-Left) - Adjusted width for mobile */}
                  <div className="absolute top-2 md:-top-2 left-2 md:-left-4 w-[90%] z-10 transform -rotate-[6deg] opacity-70 scale-95 hover:opacity-100 hover:z-30 hover:scale-105 hover:rotate-0 transition-all duration-500 ease-out hover:shadow-2xl blur-[1px] hover:blur-0 cursor-pointer">
                     <div className="relative bg-[#0F0F0F] border border-white/10 rounded-[1.5rem] p-5 shadow-2xl flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shrink-0">
                           <PieChartIcon className="text-gray-400 w-6 h-6" />
                        </div>
                        <div className="flex-grow">
                           <h3 className="text-white font-bold font-heading text-base leading-tight">Bukti Transaksi Hilang</h3>
                           <p className="text-gray-500 text-[10px] mt-1 leading-snug line-clamp-2">Arsip berantakan, data tidak konsisten.</p>
                        </div>
                        <div className="w-12 h-12 relative flex items-center justify-center shrink-0">
                           <svg className="w-full h-full transform -rotate-90">
                              <circle cx="24" cy="24" r="10" stroke="#333" strokeWidth="4" fill="none" />
                              <circle cx="24" cy="24" r="10" stroke="#DB2617" strokeWidth="4" fill="none" strokeDasharray="62" strokeDashoffset="40" strokeLinecap="round" />
                           </svg>
                           <span className="absolute text-[9px] font-bold text-gray-400">!!</span>
                        </div>
                     </div>
                  </div>

                  {/* CARD 3: BLIND SPOT (Floating Bottom-Right) - Adjusted width for mobile */}
                  <div className="absolute bottom-2 md:-bottom-2 right-2 md:-right-4 w-[90%] z-10 transform rotate-[6deg] opacity-70 scale-95 hover:opacity-100 hover:z-30 hover:scale-105 hover:rotate-0 transition-all duration-500 ease-out hover:shadow-2xl blur-[1px] hover:blur-0 cursor-pointer">
                     <div className="relative bg-[#121212] border border-white/10 rounded-[1.5rem] p-5 shadow-2xl flex items-center justify-between">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-white/5">
                              <EyeOff className="text-gray-400 w-5 h-5" />
                           </div>
                           <div>
                              <p className="text-white font-bold text-sm">Blind Spot Arus Kas</p>
                              <div className="h-4 w-32 bg-white/10 rounded animate-pulse mt-1 blur-sm"></div>
                              <p className="text-gray-500 text-[10px] mt-1">Keputusan hanya asumsi.</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* CARD 2: PAJAK (Center, Dominant) - Foreground Element */}
                  <div className="relative w-full z-20 transform scale-100 hover:scale-105 transition-all duration-500 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] group">
                     {/* Glow Effect behind */}
                     <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                     
                     <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[1.75rem] p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                 <AlertTriangle className="text-red-500 w-5 h-5" />
                              </div>
                              <div>
                                 <h3 className="text-white font-bold font-heading text-lg">Risiko Sanksi Pajak</h3>
                                 <span className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded-full uppercase tracking-wider">Waspada</span>
                              </div>
                           </div>
                           <MoreHorizontal className="text-gray-600 w-5 h-5" />
                        </div>

                        {/* Main Value */}
                        <div className="mb-4">
                           <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-1">Potensi Denda</p>
                           <div className="flex items-end gap-3">
                              <span className="text-2xl font-bold text-white font-heading tracking-tight">Administratif</span>
                              <div className="flex items-center text-red-500 font-bold text-sm mb-1 bg-red-500/10 px-1.5 py-0.5 rounded">
                                 <TrendingUp size={14} className="mr-1" />
                                 High
                              </div>
                           </div>
                           <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                               Keterlambatan atau kesalahan lapor memicu surat teguran.
                           </p>
                        </div>

                        {/* Chart Graphic */}
                        <div className="relative h-12 w-full">
                           <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent"></div>
                           <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                              <path d="M0,40 C20,35 40,45 60,20 C80,5 100,30 120,15 C140,5 160,35 180,10 C200,0 220,20 240,5" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                           </svg>
                        </div>
                     </div>
                  </div>
                  
              </div>
            </div>

            {/* Right Content - Updated Text Colors for Dark Mode */}
            <div className="lg:w-1/2 order-1 lg:order-2 lg:pt-10">
              <span className="text-saas-primary font-bold font-heading tracking-widest uppercase text-xs mb-4 md:mb-6 block">Solusi ACCORTAX</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 md:mb-8 leading-[1.1] tracking-tighter">
                Keuangan Bisnis <br/> Bukan Tempat untuk <span className="text-gray-500">Tebak-tebakan.</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 leading-relaxed">
                Banyak pengusaha hebat dalam penjualan, namun "terpeleset" karena administrasi yang buruk. ACCORTAX menutup celah risiko tersebut.
              </p>

              <div className="grid grid-cols-1 gap-8 md:gap-10 border-l-2 border-white/10 pl-6 md:pl-8">
                 <div className="space-y-2 md:space-y-3">
                    <h4 className="text-lg md:text-xl font-bold font-heading text-white">Kepatuhan Total</h4>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">Kami memastikan setiap digit sesuai dengan regulasi perpajakan terbaru di Indonesia.</p>
                 </div>
                 <div className="space-y-2 md:space-y-3">
                    <h4 className="text-lg md:text-xl font-bold font-heading text-white">Fokus Pertumbuhan</h4>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">Anda urus omzet, kami urus aset dan kewajiban. Pembagian peran yang efisien.</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES - SUBTLE ROTATION / ANGLED CARDS */}
      <section className="py-16 md:py-32 bg-[#050505] relative overflow-hidden">
        {/* Background Effects for Dark Theme */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Content - Sticky on Desktop */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
              <span className="text-saas-primary font-bold font-heading tracking-widest uppercase text-xs mb-4 block">Layanan Profesional</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tighter leading-[1.1]">
                Ekosistem <br/> Keuangan <span className="text-gray-600">Terpadu.</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Kami menyediakan layanan end-to-end untuk memastikan setiap fase bisnis Anda terkelola dengan baik, dari pencatatan harian hingga strategi pajak kompleks.
              </p>
              
               <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold font-heading hover:bg-saas-primary hover:border-saas-primary transition-all text-sm hover:shadow-lg group">
                Lihat Katalog Lengkap <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
               </Link>
            </div>

            {/* Right Content - Staggered 'Floating' Grid with Subtle Rotation */}
            <div className="lg:w-2/3 w-full relative">
               
               {/* Decorative background for grid */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-red/5 blur-[100px] rounded-full pointer-events-none"></div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                 
                 {/* Column 1 */}
                 <div className="flex flex-col gap-6">
                    <ServiceCard 
                      index={1}
                      title="Akuntansi & Pembukuan" 
                      icon={<Calculator size={20} />}
                      description="General Ledger, Laporan Laba Rugi, Neraca, & Arus Kas."
                      link="/services#accounting"
                      rotateClass="md:-rotate-2" // TILT LEFT
                    />
                    <ServiceCard 
                      index={3}
                      title="Pendampingan Audit" 
                      icon={<SearchCheck size={20} />}
                      description="Review internal pra-audit & pendampingan pemeriksaan."
                      link="/services"
                      rotateClass="md:rotate-1" // SLIGHT TILT RIGHT
                    />
                 </div>

                 {/* Column 2 - Offset/Staggered to look 'Stacked/Floating' */}
                 <div className="flex flex-col gap-6 md:mt-24">
                    <ServiceCard 
                      index={2}
                      title="Perpajakan" 
                      icon={<Scale size={20} />}
                      description="SPT Masa, SPT Tahunan, PPN, & Perencanaan Pajak."
                      link="/services#tax"
                      rotateClass="md:rotate-2" // TILT RIGHT
                    />
                    <ServiceCard 
                      index={4}
                      title="Konsultasi Bisnis" 
                      icon={<TrendingUp size={20} />}
                      description="Analisis rasio keuangan & strategi penganggaran."
                      link="/services"
                      rotateClass="md:-rotate-1" // SLIGHT TILT LEFT
                    />
                 </div>

               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 md:py-40 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-grid-dark opacity-40"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-saas-primary to-transparent blur-[120px] rounded-full pointer-events-none opacity-40"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white mb-6 md:mb-8 tracking-tighter">
            Siap untuk <br/> <span className="text-saas-primary">Level Up?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto font-normal leading-relaxed px-4">
            Jangan biarkan administrasi menghambat potensi bisnis Anda. Jadwalkan sesi konsultasi strategis hari ini.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-saas-primary text-white font-bold font-heading py-4 px-10 md:py-5 md:px-16 rounded-full shadow-[0_0_40px_rgba(219,38,23,0.4)] hover:shadow-[0_0_60px_rgba(219,38,23,0.6)] hover:-translate-y-1 transition-all duration-300 text-base md:text-lg tracking-wide border border-white/10 active:scale-95 w-full sm:w-auto"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const MarqueeContent = () => (
   <div className="flex shrink-0 animate-marquee items-center justify-around gap-16 md:gap-32 min-w-full pr-16 md:pr-32">
       {[
         { text: "PEMBUKUAN TERINTEGRASI" },
         { text: "KEPATUHAN PAJAK" },
         { text: "LAPORAN KEUANGAN" }
       ].map((item, i) => (
         <div key={i} className="flex items-center gap-16 md:gap-32">
            <div className="flex items-center gap-16 md:gap-32 text-white/30 font-bold font-heading text-lg md:text-3xl tracking-tighter hover:text-white transition-all duration-500 cursor-default select-none">
               <span className="flex items-center gap-4">{item.text}</span>
               <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-saas-primary shadow-[0_0_15px_#DB2617]"></span>
            </div>
         </div>
       ))}
   </div>
);

// REPLACED ServiceCard with specific 'Dark Floating Card' Design with ROTATION SUPPORT
const ServiceCard = ({ 
  index, 
  title, 
  description, 
  icon, 
  link, 
  rotateClass = "" 
}: { 
  index: number, 
  title: string, 
  description: string, 
  icon: React.ReactNode, 
  link: string,
  rotateClass?: string
}) => (
  <Link 
    to={link} 
    className={`block group relative w-full h-full transition-all duration-500 ${rotateClass} hover:rotate-0 hover:scale-[1.02] hover:z-20 transform-gpu`}
  >
    
    {/* Card Body - Dark Gray rounded pill */}
    <div className="relative bg-[#0A0A0A] rounded-[2.5rem] p-6 sm:p-7 flex items-center gap-6 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-[#121212] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] h-full">
      
      {/* 1. Number Badge (Circle) */}
      <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold font-heading text-xl text-white/20 border-2 border-white/5 group-hover:text-white group-hover:border-white/10 transition-all duration-500 bg-white/5">
        {index}
      </div>

      {/* 2. Content */}
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-3 mb-1">
            <div className="text-white">
                {icon}
            </div>
            <h3 className="text-white font-bold font-heading text-xl tracking-tight">{title}</h3>
        </div>
        <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-[90%] group-hover:text-gray-400 transition-colors">{description}</p>
      </div>

      {/* 3. Right Action Arrow (Floating) */}
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:bg-white/10 group-hover:text-white transition-all flex-shrink-0">
         <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
      </div>

      {/* Sparkle Decoration for Item 1 */}
      {index === 1 && (
        <div className="absolute top-4 right-16 text-yellow-500/40 group-hover:text-yellow-400 animate-pulse">
           <Sparkles size={16} />
        </div>
      )}

    </div>
  </Link>
);

export default Home;
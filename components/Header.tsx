
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Sync initial state with the presence of 'dark' class on <html>
    setIsDark(document.documentElement.classList.contains('dark'));

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 dark:from-[#020617] dark:via-[#0f172a] dark:to-black text-white shadow-2xl border-b-8 border-red-600 overflow-hidden transition-colors duration-500">
      
      
      {/* Decorative background elements with Parallax */}
      <div 
        className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translate(-30%, -30%) translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-emerald-600/10 dark:bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translate(30%, 30%) translateY(${-scrollY * 0.1}px)` }}
      ></div>
      
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6 z-30">
        <button 
          onClick={toggleTheme}
          className="flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-1.5 w-16 h-9 transition-all duration-300 hover:bg-white/20 active:scale-90 shadow-lg"
          aria-label="Toggle Dark Mode"
        >
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transform transition-all duration-500 shadow-md ${isDark ? 'translate-x-7 bg-slate-700' : 'translate-x-0 bg-yellow-400'}`}>
            <i className={`fa-solid ${isDark ? 'fa-moon text-[11px]' : 'fa-sun text-[11px] text-yellow-900'}`}></i>
          </div>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 text-center relative z-10">
        <div className="space-y-10">
          {/* Logo Row */}
          <div className="flex flex-col items-center justify-center space-y-5 animate-in fade-in zoom-in duration-700">
            <div className="flex items-center justify-center space-x-8 md:space-x-14">
              {/* Bangladesh Police Logo */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition duration-500"></div>
                <img 
                  src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/492010095_1113009900865489_8806598934180709620_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GZiby1-tOnsQ7kNvwFLtO4M&_nc_oc=AdlR4JyN-mI1fMBAkP2XOq1pPlv9rfOlNjbZAty8W0mvSqKXrAndIistSS9PFI6Ka6E&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=B4rXI_6AitspJ7bnJYRJQw&oh=00_AfpjqEvJgdvTXUu3PJgCL8z1nqEQOQrr6fdRe-VfJ2dOFA&oe=697E8F96" 
                  alt="Bangladesh Police" 
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white/30 shadow-2xl object-cover bg-white"
                />
              </div>
              
              {/* Government Seal */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/30 transition duration-500"></div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/84/Government_Seal_of_Bangladesh.svg" 
                  alt="Government Seal" 
                  className="relative w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                />
              </div>
            </div>
            
            <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase opacity-90 drop-shadow-sm">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
          </div>

          {/* Main Title and Info */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] bg-clip-text text-transparent bg-gradient-to-b from-white to-emerald-200">
              ত্রয়োদশ জাতীয় সংসদ নির্বাচন ২০২৬
            </h1>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-black/40 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <p className="relative text-base md:text-lg text-emerald-50/90 leading-relaxed bg-black/30 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-white/10 shadow-2xl text-center">
                একটি অবাধ, সুষ্ঠ ও নিরপেক্ষ নির্বাচন আয়োজনের জন্য বাংলাদেশ পুলিশ দৃঢ়প্রতিজ্ঞ। এই দেশ আমার, আপনার আমাদের সকলের। আসুন, আমরা সবাই মিলে একটি সুন্দর ও শান্তিপূর্ণ নির্বাচনের মাধ্যমে দেশকে নতুন সম্ভাবনার পথে এগিয়ে নেই।
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center pt-4">
            <p className="text-xl md:text-3xl font-bold text-emerald-100 drop-shadow-md">
              চাঁপাইনবাবগঞ্জ সদর থানা এলাকা সমূহের ভোট কেন্দ্রভিত্তিক ডিজিটাল ম্যাপ
            </p>
            <div className="mt-8 flex items-center justify-center space-x-2">
              <div className="w-16 h-1 bg-red-600 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-white/20 rounded-full border border-white/40"></div>
              <div className="w-16 h-1 bg-red-600 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Implementation Info Cards Area */}
          <div className="mt-12 space-y-6 max-w-4xl mx-auto pt-10 border-t border-white/10">
            {/* Overall Guidance (Superintendent of Police) */}
            <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-emerald-400/30 transition-all duration-300 hover:bg-white/15 hover:translate-y-[-4px] hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.3)] group relative overflow-hidden">
               <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-all"></div>
               <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start md:space-x-8 space-y-4 md:space-y-0 text-center md:text-left">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-3xl flex items-center justify-center group-hover:bg-emerald-500 transition-all shadow-xl border border-white/10">
                    <i className="fa-solid fa-user-tie text-3xl text-emerald-400 group-hover:text-white"></i>
                  </div>
                  <div className="space-y-1 flex flex-col items-center md:items-start">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 font-black opacity-90">সার্বিক দিকনির্দেশনায়</p>
                    <h2 className="text-3xl md:text-4xl font-black text-white group-hover:text-emerald-100 transition-colors">গৌতম কুমার বিশ্বাস</h2>
                    <p className="text-lg md:text-xl font-medium text-emerald-100/80">পুলিশ সুপার, চাঁপাইনবাবগঞ্জ</p>
                    <a href="tel:+8801320125500" className="inline-flex items-center space-x-3 mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-emerald-500/20 font-bold group/btn">
                      <i className="fa-solid fa-phone-volume group-hover/btn:animate-bounce"></i>
                      <span>+৮৮০১৩২০-১২৫৫০০</span>
                    </a>
                  </div>
               </div>
            </div>

            {/* Implementation Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:translate-y-[-4px] group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <i className="fa-solid fa-map-location-dot text-xl text-emerald-400 group-hover:text-white"></i>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-300 mb-0.5 font-bold">মানচিত্র বাস্তবায়ন</p>
                    <p className="text-xl font-black">মোঃ নূরে আলম</p>
                    <p className="text-xs font-medium opacity-70 leading-tight">অফিসার ইনচার্জ, সদর মডেল থানা, চাঁপাইনবাবগঞ্জ</p>
                    <a href="tel:+8801320125569" className="inline-flex items-center space-x-2 mt-3 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl border border-white/20 transition-all active:scale-95 text-sm font-bold w-full justify-center md:justify-start">
                      <i className="fa-solid fa-phone"></i>
                      <span>+৮৮০১৩২০১২৫৫৬৯</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:translate-y-[-4px] group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <i className="fa-solid fa-user-shield text-xl text-emerald-400 group-hover:text-white"></i>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-300 mb-0.5 font-bold">তথ্য সংগ্রহ ও সমন্বয়</p>
                    <p className="text-xl font-black">মোঃ শাকিল হোসেন</p>
                    <p className="text-xs font-medium opacity-70 leading-tight">বিপি-৯৪২৩২৪৬৭৩৫, এসআই (নিঃ), সদর থানা</p>
                    <a href="tel:+8801765112560" className="inline-flex items-center space-x-2 mt-3 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl border border-white/20 transition-all active:scale-95 text-sm font-bold w-full justify-center md:justify-start">
                      <i className="fa-solid fa-phone"></i>
                      <span>+৮৮০১৭৬৫১১২৫৬০</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

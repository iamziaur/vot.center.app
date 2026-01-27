
import React, { useState } from 'react';
import Header from './components/Header';
import MapCard from './components/MapCard';
import ChatAssistant from './components/ChatAssistant';
import ContactsGrid from './components/ContactsGrid';
import { MAP_LINKS, COMBINED_LINKS } from './constants';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLinks = MAP_LINKS.filter(link => 
    link.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
        {/* Navigation / Search Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">ভোট কেন্দ্রভিত্তিক এলাকা সমূহ</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">আপনার কাঙ্ক্ষিত ইউনিয়ন বা এলাকা খুঁজে বের করুন</p>
          </div>
          <div className="relative w-full md:w-96 group">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors"></i>
            <input 
              type="text" 
              placeholder="ইউনিয়নের নাম দিয়ে সার্চ করুন..."
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl py-3 pl-12 pr-4 outline-none focus:ring-4 focus:ring-emerald-500/10 dark:focus:ring-emerald-400/10 focus:border-emerald-500 dark:focus:border-emerald-400 transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Links Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLinks.length > 0 ? (
            filteredLinks.map(link => (
              <MapCard key={link.id} link={link} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-400 mb-4">
                <i className="fa-solid fa-folder-open text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">কিছু পাওয়া যায়নি</h3>
              <p className="text-slate-500 dark:text-slate-400">অন্য কোনো নাম দিয়ে সার্চ করে দেখুন</p>
            </div>
          )}
        </section>

        {/* Combined Views Section */}
        <section className="mt-20">
          <div className="flex flex-col items-center mb-10">
            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-3">সবগুলো একসাথে</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 text-center">সমন্বিত ভোট কেন্দ্র মানচিত্র</h2>
            <div className="mt-4 w-20 h-1 bg-red-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMBINED_LINKS.map(link => (
              <MapCard key={link.id} link={link} />
            ))}
          </div>
        </section>

        {/* Emergency Contacts Section */}
        <section className="mt-24 bg-emerald-50/50 dark:bg-slate-900/20 py-16 px-6 rounded-[3rem] border border-emerald-100 dark:border-slate-800/50">
          <div className="flex flex-col items-center mb-12">
            <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-3">হেল্পলাইন</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 text-center">নির্বাচনকালীন জরুরি যোগাযোগ</h2>
            <div className="mt-4 w-24 h-1 bg-red-600 rounded-full"></div>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-center max-w-2xl">
              যেকোনো জরুরি প্রয়োজনে অথবা নির্বাচনী তথ্য ও সহায়তার জন্য নিচের নম্বরগুলোতে যোগাযোগ করুন।
            </p>
          </div>
          <ContactsGrid />
        </section>

        {/* Guidance / Info Section */}
        <section className="mt-24 bg-slate-900 dark:bg-slate-900/50 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative border border-slate-800/50">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <i className="fa-solid fa-circle-check text-[15rem]"></i>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">ভোট কেন্দ্রের তথ্য কেন গুরুত্বপূর্ণ?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                <div className="mb-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-xl">১</div>
                <p className="text-lg text-slate-300">ভোটের দিন দ্রুত এবং সঠিক পথ চিনে কেন্দ্রে পৌঁছানোর জন্য এই ডিজিটাল ম্যাপ অত্যন্ত সহায়ক।</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                <div className="mb-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-xl">২</div>
                <p className="text-lg text-slate-300">আইনশৃঙ্খলা বাহিনী ও পর্যবেক্ষকগণ এই ম্যাপ ব্যবহার করে দ্রুত যেকোনো কেন্দ্রে সমন্বয় করতে পারবেন।</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                <div className="mb-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-xl">৩</div>
                <p className="text-lg text-slate-300">সাধারণ ভোটাররা আগে থেকেই তাদের কেন্দ্রের ভৌগোলিক অবস্থান সম্পর্কে স্বচ্ছ ধারণা পাবেন।</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 dark:bg-slate-950 text-white border-t-8 border-red-600 mt-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12">
            <div className="space-y-4">
              <h4 className="text-xl font-bold border-b border-white/10 pb-3 inline-block">লক্ষ্য ও উদ্দেশ্য</h4>
              <p className="text-emerald-100/70 dark:text-slate-400 text-sm leading-relaxed">
                এই উদ্যোগটি নির্বাচন সংশ্লিষ্ট কর্মকর্তাদের কার্যক্রমে গতিশীলতা আনা এবং সাধারণ মানুষের জন্য ডিজিটাল সেবা নিশ্চিত করার একটি ক্ষুদ্র প্রচেষ্টা।
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold border-b border-white/10 pb-3 inline-block">গুরুত্বপূর্ণ লিংক</h4>
              <ul className="text-sm text-emerald-100/70 dark:text-slate-400 space-y-2">
                <li><a href="https://www.ecs.gov.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">নির্বাচন কমিশন বাংলাদেশ</a></li>
                <li><a href="https://www.police.gov.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">বাংলাদেশ পুলিশ পোর্টাল</a></li>
                <li><a href="https://www.chapainawabganj.gov.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">চাঁপাইনবাবগঞ্জ জেলা ওয়েবসাইট</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold border-b border-white/10 pb-3 inline-block">জরুরি যোগাযোগ</h4>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-sm">
                <i className="fa-solid fa-phone text-emerald-500"></i>
                <span>৯৯৯ (জাতীয় জরুরি সেবা)</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-sm">
                <i className="fa-solid fa-envelope text-emerald-500"></i>
                <span>ocnaw.naw@police.gov.bd</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-emerald-200 dark:text-emerald-400 font-bold mb-2">© ২০২৬ | চাঁপাইনবাবগঞ্জ সদর মডেল থানা</p>
            <p className="text-xs text-emerald-100/40 dark:text-slate-500 uppercase tracking-widest">সকল তথ্য অফিসিয়াল ও জনস্বার্থে ব্যবহারের জন্য সংরক্ষিত</p>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default App;

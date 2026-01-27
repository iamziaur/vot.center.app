import React from 'react';
import { MapLink } from '../types';

interface MapCardProps {
  link: MapLink;
}

const MapCard: React.FC<MapCardProps> = ({ link }) => {
  return (
    <a 
      href={link.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${
            link.type === 'municipality' 
            ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white' 
            : link.type === 'combined'
            ? 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 group-hover:bg-sky-600 group-hover:text-white'
            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 group-hover:bg-red-600 group-hover:text-white'
          }`}>
            {link.type === 'municipality' ? (
              <i className="fa-solid fa-city"></i>
            ) : link.type === 'combined' ? (
              <i className="fa-solid fa-layer-group"></i>
            ) : (
              <span className="font-bold text-xl">{link.number || '0'}</span>
            )}
          </div>
          
          <div className="text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 transition-colors">
            <i className="fa-solid fa-up-right-from-square text-lg"></i>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 leading-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
          {link.name}
        </h3>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium flex items-center">
          <span>ডিজিটাল ম্যাপ দেখতে ক্লিক করুন</span>
          <i className="fa-solid fa-arrow-right ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i>
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-slate-400">
        <span>{link.type === 'municipality' ? 'পৌরসভা' : link.type === 'combined' ? 'সমন্বিত ম্যাপ' : 'ইউনিয়ন পরিষদ'}</span>
        <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 group-hover:text-emerald-600 transition-colors">ACTIVE</span>
      </div>
    </a>
  );
};

export default MapCard;
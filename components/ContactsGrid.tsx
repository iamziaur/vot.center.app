
import React from 'react';

interface ContactLink {
  name: string;
  designation?: string;
  phone?: string;
  icon: string;
  iconColor: string;
}

interface ContactCardProps {
  contact: ContactLink;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4">
      <div className="flex items-start space-x-4">
        {/* Dynamic Icon/Logo based on contact type */}
        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${contact.iconColor} group-hover:scale-110 shadow-inner`}>
          <i className={contact.icon}></i>
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg group-hover:text-emerald-600 transition-colors truncate">
            {contact.name}
          </h4>
          {contact.designation && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 uppercase tracking-wider font-bold opacity-80 leading-tight">
              {contact.designation}
            </p>
          )}
        </div>
      </div>
      
      {contact.phone && (
        <div className="flex gap-3 pt-2">
          <a
            href={`tel:${contact.phone}`}
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 active:scale-95 transition-all text-sm font-bold shadow-lg shadow-emerald-500/10"
          >
            <i className="fa-solid fa-phone"></i>
            <span>কল করুন</span>
          </a>
          <a
            href={`https://wa.me/${contact.phone.replace(/[^\d+]/g, '').replace(/^0/, '+880')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 active:scale-95 transition-all text-sm font-bold shadow-lg shadow-green-500/10"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>হোয়াটসঅ্যাপ</span>
          </a>
        </div>
      )}
    </div>
  );
};

const contacts: ContactLink[] = [
  { 
    name: 'পুলিশ সুপার চাঁপাইনবাবগঞ্জ', 
    designation: '', 
    phone: '+8801320125500',
    icon: 'fa-solid fa-award',
    iconColor: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
  },
  { 
    name: 'মোঃ নূরে আলম', 
    designation: 'অফিসার ইনচার্জ, সদর মডেল থানা', 
    phone: '+8801320125569',
    icon: 'fa-solid fa-user-shield',
    iconColor: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
  },
  { 
    name: 'কন্ট্রোল রুম, পুলিশ সুপার কার্যালয়', 
    designation: 'চাঁপাইনবাবগঞ্জ', 
    phone: '+8801320126498',
    icon: 'fa-solid fa-tower-broadcast',
    iconColor: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
  },
  { 
    name: 'ডিউটি অফিসার', 
    designation: 'সদর মডেল থানা', 
    phone: '+8801320125574',
    icon: 'fa-solid fa-shield-halved',
    iconColor: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
  },
  { 
    name: 'চাঁপাইনবাবগঞ্জ ফায়ার সার্ভিস', 
    designation: 'জরুরি সেবা', 
    phone: '+8801901022309',
    icon: 'fa-solid fa-fire-extinguisher',
    iconColor: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
  },
];

const ContactsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {contacts.map((c, i) => (
        <ContactCard key={i} contact={c} />
      ))}
    </div>
  );
};

export default ContactsGrid;

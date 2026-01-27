
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: 'আসসালামু আলাইকুম! সকল ধর্মের প্রতি সম্মান ও বিনম্র শ্রদ্ধা জানিয়ে আমি আপনাকে স্বাগত জানাচ্ছি। আমি আপনার নির্বাচনী ডিজিটাল সহকারী। আপনাকে কীভাবে সাহায্য করতে পারি?\n\nআমাকে তৈরি করেছেন মোঃ জিয়াউর রহমান। প্রয়োজনে তাঁর সাথে সরাসরি যোগাযোগ করতে নিচের বাটনগুলো ব্যবহার করুন:\n\n📞 [সরাসরি কল করুন](tel:+8801792219012)\n💬 [হোয়াটসঅ্যাপে কথা বলুন](https://wa.me/8801792219012)' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are an AI assistant for the 'Bangladesh National Election 2026 Polling Center Map' application. Your role is to help citizens find their polling centers in Chapainawabganj Sadar. Your name is 'Election Digital Assistant'. You were created by Md. Ziaur Rahman (Contact: 01792219012). Be polite, formal, and inclusive of all religions. Always respond in Bengali. Focus on election-related safety, location finding, and civic duty.",
        },
      });

      const aiResponse = response.text || 'দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না। অনুগ্রহ করে আবার চেষ্টা করুন।';
      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (error) {
      console.error('Gemini error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'সংযোগ বিচ্ছিন্ন হয়েছে। অনুগ্রহ করে ইন্টারনেট চেক করুন।' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Simple helper to render text with markdown-style links [text](url)
  const renderText = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <a
            key={index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline font-bold bg-white/20 px-2 py-1 rounded inline-block my-1 hover:bg-white/30 transition-colors"
          >
            {match[1]}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-red-600 rotate-90' : 'bg-emerald-600 dark:bg-emerald-700 shadow-emerald-200 dark:shadow-emerald-900/20 shadow-lg'} w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95`}
      >
        {isOpen ? <i className="fa-solid fa-xmark text-2xl"></i> : <i className="fa-solid fa-comment-dots text-2xl"></i>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-emerald-700 dark:bg-slate-800 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-robot text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold">নির্বাচন সহকারী (AI)</h3>
                <p className="text-xs text-emerald-200 dark:text-emerald-400">আপনাকে সাহায্য করতে প্রস্তুত</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] px-4 py-3 rounded-2xl ${msg.role === 'user' ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-emerald-700 dark:bg-slate-800 text-white dark:text-slate-100 border border-emerald-600 dark:border-slate-700 shadow-sm rounded-tl-none'}`}>
                  <div className="text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.role === 'model' ? renderText(msg.text) : msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 pr-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="কিছু জিজ্ঞাসা করুন..."
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none text-slate-900 dark:text-slate-100"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center hover:bg-emerald-700 transition-colors disabled:opacity-50"
              >
                <i className="fa-solid fa-paper-plane text-sm"></i>
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2 uppercase tracking-tighter">AI can make mistakes. Verify critical info.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;

import React, { useState, useRef,  } from 'react';
import Layout from '../components/Layout';
import { Send, Sparkles , Banknote, Clock, ChevronRight, Zap, Info } from 'lucide-react';
import { chatWithAI } from '../services/api';
import type { ChatResponse } from '../services/api';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  data?: ChatResponse;
}

const AIPlannerPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Chào bạn! Tôi là trợ lý ảo Trip4Hanoi. Hãy cho tôi biết mong muốn của bạn, tôi sẽ thiết kế một hành trình hoàn hảo cho riêng bạn. (Ví dụ: "Lên lịch trình 2 ngày 5 triệu cho 2 người, tập trung vào ẩm thực phố cổ")',
      sender: 'ai'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Removed auto-scroll useEffect

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatWithAI(input);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.introduction,
        sender: 'ai',
        data: response
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Rất tiếc, hệ thống đang bận xử lý. Bạn vui lòng thử lại sau giây lát nhé!',
        sender: 'ai'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <main className="flex flex-col min-h-screen bg-slate-50/50 pb-12">
        <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col h-full max-w-6xl">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-4 bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-hanoi-red to-hanoi-red-dark rounded-xl flex items-center justify-center text-white shadow-lg shadow-hanoi-red/20">
                <Sparkles size={20} />
              </div>
              <div className="text-left">
                <h1 className="text-lg font-black text-slate-900 font-cabinet tracking-tight">AI Concierge</h1>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Always Online</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-soft-beige rounded-lg border border-hanoi-yellow/20">
              <Info size={12} className="text-hanoi-yellow" />
              <span className="text-[9px] font-bold text-slate-600 uppercase tracking-tighter">Powered by Gemini AI</span>
            </div>
          </div>

          {/* Main Chat Frame */}
          <div className="bg-white/60 backdrop-blur-md border border-slate-100 rounded-[2.5rem] p-4 md:p-6 mb-4 flex flex-col shadow-inner relative overflow-hidden h-[75vh] min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
            
            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto space-y-6 pr-2 md:pr-4 scrollbar-hide relative z-10 mb-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`${
                    msg.sender === 'user' 
                    ? 'max-w-[70%] bg-hanoi-red text-white rounded-2xl rounded-tr-none p-3 shadow-md' 
                    : 'w-full max-w-5xl bg-white/80 border border-slate-100 text-slate-800 rounded-3xl rounded-tl-none p-5 md:p-6 shadow-sm text-left'
                  }`}>
                    <p className={`font-medium leading-relaxed ${msg.sender === 'user' ? 'text-sm' : 'text-xs md:text-sm text-slate-600'}`}>
                      {msg.text}
                    </p>
                    
                    {msg.data && (
                      <div className="mt-6 space-y-8">
                        {/* Timeline Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {msg.data.timeline.map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-hanoi-red/20 transition-all duration-300 flex flex-col h-full">
                              <div className="flex items-center justify-between gap-2 mb-3">
                                <div className="flex items-center gap-2">
                                  <div className="p-1.5 bg-soft-beige rounded-lg text-hanoi-red">
                                    <Clock size={12} />
                                  </div>
                                  <span className="text-[9px] font-black text-hanoi-red uppercase tracking-widest">{item.time}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-400 bg-slate-50/50 px-2 py-0.5 rounded-full">
                                  <Banknote size={10} className="text-hanoi-green" />
                                  <span className="text-[8px] font-black uppercase tracking-tighter">{item.estimatedCost?.toLocaleString()} VND</span>
                                </div>
                              </div>
                              
                              <h4 className="text-sm font-bold text-slate-900 mb-2 font-cabinet tracking-tight">{item.activity}</h4>
                              <div className="mt-auto flex items-start gap-1.5 text-slate-500 italic text-[10px] bg-slate-50/30 p-2 rounded-xl border border-dashed border-slate-200">
                                <Sparkles size={10} className="shrink-0 text-hanoi-yellow mt-0.5" />
                                <p>{item.note}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* AI Expert Summary & Actions */}
                        <div className="flex flex-col lg:flex-row gap-4">
                          <div className="flex-grow bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                              <Zap size={40} />
                            </div>
                            <div className="relative z-10">
                              <span className="bg-hanoi-yellow text-slate-900 px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-[0.2em] mb-2 inline-block">Expert Summary</span>
                              <p className="text-xs md:text-sm font-medium text-slate-200 leading-relaxed italic font-satoshi">
                                "{msg.data.summary}"
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex lg:flex-col justify-center gap-2 shrink-0">
                            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-hanoi-red text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-hanoi-red-dark transition-all hover:scale-105 active:scale-95 shadow-lg shadow-hanoi-red/20">
                              Finalize <ChevronRight size={12} />
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:border-hanoi-red hover:text-hanoi-red transition-all">
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-hanoi-red rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-1 h-1 bg-hanoi-red rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-1 h-1 bg-hanoi-red rounded-full animate-bounce"></div>
                      </div>
                      <span className="font-bold text-[9px] text-slate-400 uppercase tracking-widest">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Integrated inside the frame */}
            <div className="relative z-10 mt-auto pt-2 border-t border-slate-100/50">
              <form onSubmit={handleSend} className="relative group max-w-3xl mx-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-hanoi-red/20 to-hanoi-yellow/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Hỏi AI bất cứ điều gì..."
                    className="w-full bg-white/80 border border-slate-200 rounded-xl px-5 py-3 pr-14 focus:border-hanoi-red/50 outline-none transition-all shadow-sm font-medium text-sm text-slate-700"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-hanoi-red text-white rounded-lg flex items-center justify-center hover:bg-hanoi-red-dark transition-all disabled:opacity-50 shadow-sm active:scale-90"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </form>
              <p className="mt-2 text-[9px] text-slate-400 font-bold uppercase tracking-[0.15em] text-center">
                AI can make mistakes. Please verify info.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIPlannerPage;

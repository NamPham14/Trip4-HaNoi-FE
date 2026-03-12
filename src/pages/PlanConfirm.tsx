import React from 'react';
import Layout from '../components/Layout';
import { Calendar, Users, MapPin, Edit3, Coffee, Landmark, Sparkles, TicketPercent, Utensils, BusFront, Zap, Share2, Bookmark, Lightbulb } from 'lucide-react';

const PlanConfirm: React.FC = () => {
  return (
    <Layout>
      <main className="pb-32 text-left">
        <div className="container mx-auto px-6 md:px-16">
          
          {/* HEADER SUMMARY */}
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-slate-100 mb-16 mt-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-hanoi-red/10 text-hanoi-red px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em]">Confirmed Choice / Lựa chọn của bạn</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-tight italic md:not-italic font-cabinet">Secure Your Perfect <br />Hanoi Adventure</h1>
                <div className="flex flex-wrap gap-8 text-slate-500 font-satoshi">
                  <div className="flex items-center gap-3">
                    <Calendar size={24} className="text-hanoi-red" />
                    <span className="font-bold uppercase tracking-wider text-sm">3 Days / 2 Nights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={24} className="text-hanoi-green" />
                    <span className="font-bold uppercase tracking-wider text-sm">2 Explorers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={24} className="text-hanoi-yellow" />
                    <span className="font-bold uppercase tracking-wider text-sm">12 Locations Visited</span>
                  </div>
                </div>
              </div>
              <div className="text-left lg:text-right">
                <p className="text-slate-400 text-xs font-black uppercase tracking-[0.25em] mb-2">Projected Budget</p>
                <div className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter font-cabinet">2,450,000 <span className="text-xl text-slate-500 uppercase font-black">VND</span></div>
                <p className="text-xs text-slate-400 mt-2 italic font-satoshi">*Total for meals, activities & transport</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* LEFT: ITINERARY BREAKDOWN */}
            <div className="lg:col-span-8 space-y-12">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight font-cabinet">Your Handcrafted Journey</h2>
                <a href="#" className="text-hanoi-red font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform font-satoshi">
                  <Edit3 size={18} /> Refine Details
                </a>
              </div>

              <div className="space-y-10">
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute left-4 top-14 bottom-0 w-0.5 border-l-2 border-dashed border-slate-300"></div>
                  <div className="flex gap-8 relative">
                    <div className="w-10 h-10 rounded-full bg-hanoi-red text-white flex items-center justify-center font-black shrink-0 z-10 shadow-lg font-cabinet">
                      1
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover-card">
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-left">
                          <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-cabinet">Ancient Soul Discovery</h3>
                          <p className="text-hanoi-red font-bold text-sm font-satoshi">Hoan Kiem & Old Quarter Discovery</p>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-50 px-3 py-1 rounded-lg">04 Stops</span>
                      </div>
                      <ul className="space-y-5 font-satoshi text-left">
                        {[
                          { icon: Coffee, text: '09:00 — Iconic Phở Breakfast at Bát Đàn' },
                          { icon: Landmark, text: "11:00 — St. Joseph's Cathedral & Art Galleries" },
                          { icon: Sparkles, text: '14:00 — Thăng Long Water Puppet Masterclass' },
                          { icon: MapPin, text: '18:30 — Street Food Safari: Beer Street to Bún Chả', highlight: true },
                        ].map((item, i) => (
                          <li key={i} className={`flex items-center gap-4 ${item.highlight ? 'font-bold text-hanoi-red' : 'text-slate-700'}`}>
                            <item.icon size={20} className={`${item.highlight ? 'text-hanoi-red' : 'text-hanoi-yellow'}`} />
                            <span className="font-medium">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="relative">
                  <div className="flex gap-8 relative">
                    <div className="w-10 h-10 rounded-full bg-hanoi-green text-white flex items-center justify-center font-black shrink-0 z-10 shadow-lg font-cabinet">
                      2
                    </div>
                    <div className="flex-1 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover-card">
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-left">
                          <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-cabinet">Imperial Heritage Route</h3>
                          <p className="text-hanoi-green font-bold text-sm font-satoshi">Dynasty Echoes & Colonial Landmarks</p>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-50 px-3 py-1 rounded-lg">05 Stops</span>
                      </div>
                      <ul className="space-y-5 font-satoshi text-left text-slate-700">
                        <li className="flex items-center gap-4">
                          <Landmark size={20} className="text-hanoi-yellow" />
                          <span className="font-medium">08:30 — Ho Chi Minh Mausoleum Complex</span>
                        </li>
                        <li className="flex items-center gap-4">
                          <Sparkles size={20} className="text-hanoi-yellow" />
                          <span className="font-medium">13:30 — Temple of Literature (Văn Miếu)</span>
                        </li>
                        <li className="flex items-center gap-4">
                          <BusFront size={20} className="text-hanoi-yellow" />
                          <span className="font-medium">16:00 — Train Street Cinematic Experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: COST BREAKDOWN & ACTIONS */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                
                {/* Cost Breakdown Card */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 text-left">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight font-cabinet">Smart Budgeting</h3>
                  
                  <div className="space-y-4 mb-10 font-satoshi">
                    {[
                      { icon: TicketPercent, label: 'Activities', cost: '850,000 VND' },
                      { icon: Utensils, label: 'Dining', cost: '1,100,000 VND' },
                      { icon: BusFront, label: 'Transport', cost: '500,000 VND' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-gradient-to-r from-hanoi-red/5 to-hanoi-yellow/5 text-slate-700">
                        <div className="flex items-center gap-3">
                          <item.icon size={20} />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <span className="font-black">{item.cost}</span>
                      </div>
                    ))}
                    <div className="pt-8 mt-4 border-t-2 border-slate-50 flex flex-col gap-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Total Estimated Cost</span>
                      <span className="text-4xl font-black text-hanoi-red tracking-tighter font-cabinet">2,450,000 VND</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <button className="w-full bg-hanoi-red text-white py-6 rounded-3xl font-black text-xl hover:bg-hanoi-red-dark transition-all shadow-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 animate-pulse-slow font-cabinet">
                      Finalize Itinerary
                      <Zap size={24} />
                    </button>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <button className="flex items-center justify-center gap-3 py-4 border-2 border-slate-100 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-600 hover:border-hanoi-red hover:text-hanoi-red transition-all font-satoshi">
                        <Share2 size={18} /> Share
                      </button>
                      <button className="flex items-center justify-center gap-3 py-4 border-2 border-slate-100 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-600 hover:border-hanoi-green hover:text-hanoi-green transition-all font-satoshi">
                        <Bookmark size={18} /> Save
                      </button>
                    </div>
                  </div>

                  <p className="mt-8 text-[11px] text-slate-400 leading-relaxed text-center font-medium font-satoshi">
                    By confirming, your AI route will be saved and accessible across all devices. Real-time adjustments enabled.
                  </p>
                </div>

                {/* Quick Tip Card */}
                <div className="bg-hanoi-yellow/10 rounded-[2.5rem] p-8 border border-hanoi-yellow/20 flex gap-5 items-start text-left">
                  <div className="w-12 h-12 bg-hanoi-yellow rounded-[1.25rem] flex items-center justify-center text-slate-900 shrink-0 shadow-lg shadow-hanoi-yellow/20">
                    <Lightbulb size={24} />
                  </div>
                  <div className="font-satoshi">
                    <h4 className="font-black text-slate-900 mb-1 uppercase tracking-wider text-xs">Insider Tip</h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">Street food vendors in the Old Quarter are almost exclusively cash-only. Our AI suggests keeping at least 500k VND in small notes.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PlanConfirm;

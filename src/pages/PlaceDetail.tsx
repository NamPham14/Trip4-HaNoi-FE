import React from 'react';
import Layout from '../components/Layout';
import { ChevronRight, Clock, Timer, Ticket, MapPin, MapPinned, Navigation } from 'lucide-react';

const PlaceDetail: React.FC = () => {
  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden -mt-[72px]">
        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover" alt="Hoan Kiem Lake Hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-12 md:px-12 text-left">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Discover</a>
              <ChevronRight size={12} className="text-white/40" />
              <span className="text-white font-medium text-sm">Iconic Sites</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight font-cabinet">Hoan Kiem Lake</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light font-satoshi">Hồ Hoàn Kiếm — The legendary "Sword Lake" at the heart of Hanoi's spiritual and social life.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10 text-left">
          {[
            { icon: Clock, label: 'Hours / Giờ', value: 'Open 24/7', color: 'text-hanoi-red', bg: 'bg-hanoi-red/10' },
            { icon: Timer, label: 'Duration / Thời lượng', value: '1 - 2 Hours', color: 'text-hanoi-yellow', bg: 'bg-hanoi-yellow/10' },
            { icon: Ticket, label: 'Entry / Vé', value: 'Free Entrance', color: 'text-hanoi-green', bg: 'bg-hanoi-green/10' },
            { icon: MapPin, label: 'Area / Khu vực', value: 'Old Quarter', color: 'text-hanoi-red', bg: 'bg-hanoi-red/10' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-xl flex items-center gap-4 border border-white/50">
              <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center text-2xl ${item.color}`}>
                <item.icon size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{item.label}</p>
                <p className="text-slate-900 font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mt-16 text-left">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-cabinet">About This Place</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-satoshi space-y-4">
                <p>Located in the heart of Hanoi, Hoan Kiem Lake (Lake of the Restored Sword) is more than just a body of water; it's a living repository of Vietnamese legend and a focal point for daily life in the capital. The lake surrounds the Ngoc Son Temple, reachable by the iconic red Huc Bridge.</p>
                <p>Every morning at dawn, the lake's banks come alive with locals practicing Tai Chi, yoga, and aerobics. At night, particularly on weekends, the surrounding streets are closed to traffic, transforming the area into a vibrant pedestrian zone filled with street performances, traditional games, and local families.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <img src="https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-64 w-full object-cover" alt="Detail 1" />
              <img src="https://images.unsplash.com/photo-1563212726-0e54462cc269?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-64 w-full object-cover" alt="Detail 2" />
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-cabinet">Location & Info</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-hanoi-red">
                    <MapPinned size={24} />
                  </div>
                  <p className="text-slate-600 text-sm">Hang Trong, Hoan Kiem District, Hanoi, Vietnam</p>
                </div>
                <div className="h-48 bg-slate-100 rounded-3xl overflow-hidden grayscale opacity-50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Map Preview</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-hanoi-red text-white rounded-2xl font-bold shadow-lg hover:bg-hanoi-red-dark transition-all flex items-center justify-center gap-2">
                  <Navigation size={18} /> Open in Google Maps
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default PlaceDetail;

import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight, Banknote, Map, Share2, Sparkles, Star } from 'lucide-react';


const GeneratedView: React.FC = () => {
  const itinerary = [
    {
      day: 1,
      title: 'History & Architecture',
      subtitle: 'From Colonial to Classic',
      stops: [
        {
          time: '08:30 AM - 10:30 AM',
          name: 'Long Bien Bridge',
          description: 'The historic cantilever bridge across the Red River, designed by Gustave Eiffel and a symbol of Hanoi resilience.',
          image: 'https://www.hanoilocaltour.com/wp-content/uploads/Long-Bien-Bridge.jpg',
          tags: ['Historic', 'Architecture'],
          rating: '4.6'
        },
        {
          time: '03:00 PM - 04:30 PM',
          name: "St. Joseph's Cathedral",
          description: 'A late 19th-century Gothic Revival church, serving as the cathedral of the Roman Catholic Archdiocese of Hanoi.',
          image: 'https://vietnamsensetravel.com/view/at_hanoi-church-prepares-for-christmas-celebration_200c8b71a1244fe285f8230c7b9a44c4.jpg',
          tags: ['Gothic', 'Religious'],
          rating: '4.8'
        }
      ]
    },
    {
      day: 2,
      title: 'Grandeur & Tradition',
      subtitle: 'Art and Sacred Sites',
      stops: [
        {
          time: '09:00 AM - 11:00 AM',
          name: 'Hanoi Opera House',
          description: 'An iconic yellow colonial building inspired by the Palais Garnier, the heart of classical music and arts.',
          image: 'https://silkpathhotel.com/wp-content/uploads/2023/12/silkpath-hanoi-things-to-do-hanoi_opera_house.jpg',
          tags: ['Arts', 'French Colonial'],
          rating: '4.7'
        },
        {
          time: '02:00 PM - 03:30 PM',
          name: 'One Pillar Pagoda',
          description: 'A historic Buddhist temple in Hanoi, the capital of Vietnam. It is regarded alongside the Perfume Temple, as one of Vietnam\'s two most iconic temples.',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/61/62/de/chua-m-t-c-t-one-pillar.jpg?w=1000&h=-1&s=1',
          tags: ['Spiritual', 'Iconic'],
          rating: '4.6'
        }
      ]
    },
    {
      day: 3,
      title: 'Markets & Reflections',
      subtitle: 'Local Life and Lake Views',
      stops: [
        {
          time: '09:00 AM - 11:30 AM',
          name: 'Dong Xuan Market',
          description: "Hanoi's largest indoor market, offering everything from fresh produce to clothing and local souvenirs.",
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/4c/e3/99/caption.jpg?w=700&h=-1&s=1',
          tags: ['Market', 'Shopping'],
          rating: '4.5'
        },
        {
          time: '04:30 PM - 06:00 PM',
          name: 'Tran Quoc Pagoda',
          description: 'The oldest Buddhist temple in Hanoi, located on a small island near the southeastern shore of West Lake.',
          image: 'https://file3.qdnd.vn/data/images/3/2019/03/29/huuduong_ta/01%207.jpg?dpi=150&quality=100&w=500',
          tags: ['Oldest', 'Pagoda'],
          rating: '4.8'
        }
      ]
    }
  ];

  return (
    <Layout>
      <main className="container mx-auto px-6 md:px-12 py-12 text-left">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-cabinet">Your Hanoi Discovery Plan</h1>
            <p className="text-lg text-slate-600 font-satoshi">An AI-crafted 3-day journey blending imperial history with the vibrant soul of modern street life. / Lịch trình 3 ngày tại Hà Nội.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-all">
              <Share2 size={18} /> Share Plan
            </button>
            <a href="/confirm" className="flex items-center gap-2 px-8 py-3 bg-hanoi-red text-white rounded-2xl font-bold shadow-lg hover:bg-hanoi-red-dark transition-all">
              Confirm & Save <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6 text-left">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 font-cabinet">Trip Summary</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-soft-beige rounded-2xl">
                    <div className="w-12 h-12 bg-hanoi-yellow rounded-xl flex items-center justify-center text-slate-900 text-2xl">
                      <Map size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Total Distance</p>
                      <p className="text-lg font-bold text-slate-900">18.4 km</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-soft-beige rounded-2xl">
                    <div className="w-12 h-12 bg-hanoi-green rounded-xl flex items-center justify-center text-white text-2xl">
                      <Banknote size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Estimated Cost</p>
                      <p className="text-lg font-bold text-slate-900">1.2M - 2M VND</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-[2rem] text-white overflow-hidden relative">
                <div className="relative z-10 text-left">
                  <h3 className="text-xl font-bold mb-2 font-cabinet">AI Insight</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">"We've optimized your route to avoid the 5PM rush hour traffic around the Old Quarter. Best to stay near West Lake for the sunset."</p>
                  <div className="flex items-center gap-2 text-hanoi-yellow font-bold text-sm">
                    <Sparkles size={16} /> Optimized by Trip4Hanoi
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-12">
            {itinerary.map((dayPlan) => (
              <div key={dayPlan.day} className="relative text-left">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-hanoi-red text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-hanoi-red/20">
                    {dayPlan.day}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 font-cabinet">Day {dayPlan.day}: {dayPlan.title}</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{dayPlan.subtitle}</p>
                  </div>
                </div>

                <div className="ml-7 border-l-2 border-dashed border-hanoi-red/30 pl-10 space-y-10">
                  {dayPlan.stops.map((stop, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[51px] top-0 w-5 h-5 bg-white border-4 border-hanoi-red rounded-full z-10"></div>
                      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover-card transition-all">
                        <div className="flex flex-col md:flex-row gap-6">
                          <img src={stop.image} className="w-full md:w-40 h-40 object-cover rounded-2xl" alt={stop.name} />
                          <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-xs font-bold text-hanoi-green bg-hanoi-green/10 px-3 py-1 rounded-full uppercase tracking-tighter">{stop.time}</span>
                              <div className="flex gap-1 text-hanoi-yellow items-center">
                                <Star size={14} fill="currentColor" />
                                <span className="text-slate-900 text-xs font-bold">{stop.rating}</span>
                              </div>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2 font-cabinet">{stop.name}</h4>
                            <p className="text-slate-500 text-sm mb-4 line-clamp-2">{stop.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {stop.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md uppercase">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default GeneratedView;

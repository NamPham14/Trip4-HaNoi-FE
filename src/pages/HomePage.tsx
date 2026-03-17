import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { 
  Sparkles, Compass, Heart, Map, ArrowRight, 
  BrainCircuit, CheckCircle, Calendar, Star, 
  ChevronLeft, ChevronRight, MapPin
} from 'lucide-react';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Simple reveal on scroll observer
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-full object-cover scale-105"
               alt="Hanoi Hoan Kiem Lake" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-white text-left">
          <div className="max-w-3xl">
            <span className="inline-block bg-hanoi-yellow text-slate-900 px-4 py-1 rounded-full font-bold text-sm mb-6 tracking-wide animate-bounce">
              NEW: AI ROUTE OPTIMIZATION
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-cabinet">
              Plan Your Hanoi Trip <br/>
              <span className="text-hanoi-yellow">with AI Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-10 leading-relaxed font-light font-satoshi">
              Discover hidden street food, ancient temples, and local secrets. <br className="hidden md:block"/>
              Lên kế hoạch du lịch Hà Nội tinh tế hơn với trí tuệ nhân tạo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/planner" className="bg-hanoi-red hover:bg-hanoi-red-dark text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2 group shadow-xl font-satoshi">
                Generate My Plan
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a href="#how-it-works" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-xl font-satoshi">
                Explore Places
                <Compass size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* FLOAT BADGE */}
        <div className="absolute bottom-10 right-10 hidden lg:flex bg-white p-4 rounded-3xl shadow-2xl items-center gap-4 border border-slate-100">
          <div className="flex -space-x-3">
            <img src="https://i.pravatar.cc/150?u=1" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
            <img src="https://i.pravatar.cc/150?u=2" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
            <img src="https://i.pravatar.cc/150?u=3" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
          </div>
          <div className="text-left font-satoshi">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Join 10k+ explorers</p>
            <p className="text-sm text-slate-900 font-bold">5,000+ plans generated today</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cabinet">How It Works</h2>
            <p className="text-gray-500 font-satoshi text-lg">Your dream Hanoi trip in 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-hanoi-red/5 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-hanoi-red transition-colors">
                <Heart className="text-hanoi-red group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-cabinet uppercase text-left md:text-center">Tell us your interests</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-satoshi text-left md:text-center">Food, culture, coffee, or history? We tailor every suggestion to your unique travel style.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-hanoi-yellow/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-hanoi-yellow transition-colors">
                <BrainCircuit className="text-hanoi-yellow group-hover:text-black transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-cabinet uppercase text-left md:text-center">AI builds your itinerary</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-satoshi text-left md:text-center">Our smart engine calculates routes and schedules to optimize your limited time in the city.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-hanoi-green/5 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-hanoi-green transition-colors">
                <Compass className="text-hanoi-green group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-cabinet uppercase text-left md:text-center">Explore like a local</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-satoshi text-left md:text-center">Access real-time navigation and exclusive local insights as you wander through Hanoi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVER HANOI GRID */}
      <section id="discover" className="py-24 px-6 md:px-12 lg:px-24 bg-soft-beige">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
            <div>
              <h2 className="text-4xl font-bold mb-4 font-cabinet uppercase">Discover Hanoi</h2>
              <p className="text-gray-500 font-satoshi text-lg">Handpicked experiences across the capital</p>
            </div>
            <a href="#" className="text-hanoi-red font-bold flex items-center gap-2 hover:translate-x-1 transition-transform font-satoshi uppercase tracking-wider">
              Explore all categories <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Street Food", img: "https://vietnamtravelers.com/wp-content/uploads/hanoi-old-quarter-food-scene.jpg", rating: "4.9", desc: "From Bun Cha to Banh Mi, explore the soul of Hanoi." },
              { title: "Hidden Cafes", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600", rating: "4.8", desc: "Discover secret rooftops and heritage egg coffee spots." },
              { title: "Historical Sites", img: "https://vietnam.travel/sites/default/files/inline-images/shutterstock_589742027_0.jpg", rating: "4.7", desc: "Walk through a millennium of history and resilient culture." },
              { title: "Local Markets", img: "https://statics.vinpearl.com/Quang-ba-flower-market-05_1671734196.jpg", rating: "4.6", desc: "Dive into the chaos of Dong Xuan and Quang Ba flower market." },
              { title: "Nightlife", img: "https://hanoioldquarterguide.com/wp-content/uploads/2025/10/hanoi-beer-street-hanoioldquarterguide-1-768x432.jpg", rating: "4.9", desc: "Craft beer, live jazz, and the energy of Ta Hien street." },
              { title: "Cultural Experiences", img: "https://www.hanoilocaltour.com/wp-content/uploads/Thang-Long-Water-Puppet-Theatre-Hanoi-local-tours.jpg", rating: "5.0", desc: "Workshops, water puppets, and authentic tea ceremonies." },
            ].map((item, i) => (
              <a key={i} href="#" className="group block cursor-pointer text-left">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 shadow-md">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Star size={14} className="text-hanoi-yellow" fill="currentColor" /> {item.rating}
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-hanoi-red transition-colors font-cabinet uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 font-satoshi">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY PREVIEW SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-6 font-cabinet uppercase tracking-tight">Your Itinerary, <br/><span className="text-hanoi-red">Perfectly Orchestrated</span></h2>
              <p className="text-gray-600 mb-8 leading-relaxed font-satoshi text-lg">
                Don't stress about the map. Our smart planner creates logical routes that save you hours of travel time. From early morning Pho to sunset over West Lake, we've got you covered.
              </p>
              <div className="space-y-6 mb-10 text-left">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-hanoi-green/10 rounded-xl flex items-center justify-center text-hanoi-green shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold font-cabinet text-lg uppercase">Optimized Logistics</h4>
                    <p className="text-sm text-gray-500 font-satoshi">We calculate travel times between locations using local traffic data.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-hanoi-yellow/10 rounded-xl flex items-center justify-center text-hanoi-yellow shrink-0">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold font-cabinet text-lg uppercase">Seasonal Adjustments</h4>
                    <p className="text-sm text-gray-500 font-satoshi">Itineraries change based on current weather and local holiday schedules.</p>
                  </div>
                </div>
              </div>
              <a href="/planner" className="inline-flex bg-black text-white px-10 py-4 rounded-full font-bold shadow-xl items-center gap-3 hover:bg-gray-800 transition-all font-satoshi hover:scale-105 uppercase tracking-widest text-sm">
                Try the AI Planner <Sparkles size={20} />
              </a>
            </div>

            {/* ITINERARY UI PREVIEW */}
            <div className="bg-[#F8F6F3] p-8 rounded-[2.5rem] shadow-inner border border-gray-100 text-left">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold font-cabinet uppercase">My Hanoi Adventure</h3>
                <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold border border-gray-200 uppercase tracking-widest">3 DAYS • 2 ADULTS</span>
              </div>
              
              <div className="space-y-12 font-satoshi max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                {/* DAY 1 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-hanoi-red text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
                    <span className="font-bold font-cabinet text-lg uppercase">Day 1: Old Quarter Soul</span>
                  </div>
                  <div className="pl-4 space-y-8 relative border-l-2 border-dashed border-gray-200 ml-4">
                    <div className="relative flex gap-4">
                      <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-white border-4 border-hanoi-green z-10"></div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 font-bold uppercase mb-1">08:30 AM</p>
                        <h5 className="font-bold text-sm uppercase">Walk around Hoan Kiem Lake</h5>
                        <p className="text-xs text-gray-500">Start with local morning Tai Chi watchers.</p>
                      </div>
                    </div>
                    <div className="relative flex gap-4">
                      <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-white border-4 border-hanoi-yellow z-10"></div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 font-bold uppercase mb-1">11:30 AM</p>
                        <h5 className="font-bold text-sm uppercase">Old Quarter Food Tour</h5>
                        <p className="text-xs text-gray-500">Hidden Bun Cha & Egg Coffee workshop.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DAY 2 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-hanoi-red text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
                    <span className="font-bold font-cabinet text-lg uppercase">Day 2: Heritage & Sunset</span>
                  </div>
                  <div className="pl-4 space-y-8 relative border-l-2 border-dashed border-gray-200 ml-4">
                    <div className="relative flex gap-4">
                      <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-white border-4 border-hanoi-green z-10"></div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 font-bold uppercase mb-1">09:00 AM</p>
                        <h5 className="font-bold text-sm uppercase">Temple of Literature</h5>
                        <p className="text-xs text-gray-500">Hanoi's first university and historic stonework.</p>
                      </div>
                    </div>
                    <div className="relative flex gap-4">
                      <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-white border-4 border-hanoi-red z-10"></div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 font-bold uppercase mb-1">05:30 PM</p>
                        <h5 className="font-bold text-sm uppercase">Sunset at West Lake</h5>
                        <p className="text-xs text-gray-500">Tran Quoc Pagoda and lakeside stroll.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DAY 3 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-hanoi-red text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
                    <span className="font-bold font-cabinet text-lg uppercase">Day 3: Local Life & Art</span>
                  </div>
                  <div className="pl-4 space-y-8 relative border-l-2 border-dashed border-gray-200 ml-4">
                    <div className="relative flex gap-4">
                      <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-white border-4 border-hanoi-yellow z-10"></div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 font-bold uppercase mb-1">09:00 AM</p>
                        <h5 className="font-bold text-sm uppercase">Long Bien Bridge</h5>
                        <p className="text-xs text-gray-500">Walk across the historic Eiffel-designed bridge.</p>
                      </div>
                    </div>
                    <div className="relative flex gap-4">
                      <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-white border-4 border-hanoi-green z-10"></div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 font-bold uppercase mb-1">02:00 PM</p>
                        <h5 className="font-bold text-sm uppercase">Ethnology Museum</h5>
                        <p className="text-xs text-gray-500">Interactive tour of Vietnam's 54 ethnic groups.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HAPPENING IN HANOI (Events) */}
      <section id="events" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 text-left">
            <h2 className="text-3xl font-bold font-cabinet uppercase tracking-tight">Happening in Hanoi</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { name: "Old Quarter Night Market", date: "Every Weekend", loc: "Hang Dao St.", tag: "LIVE", tagBg: "bg-hanoi-red", img: "https://vietnamtravelers.com/wp-content/uploads/hanoi-night-market-overview.jpg" },
              { name: "Hanoi Art Biennale", date: "Oct 12 - Nov 05", loc: "VCCA Vincom Royal", tag: "CULTURE", tagBg: "bg-hanoi-green", img: "https://binhminh-artgallery.vn/uploads/source/trien-lam/bao/xuan-binh-minh-2/z6242565447523-7206ddc0833222e9c49b826cfeb63d68.jpg" },
              { name: "Jazz Nights at Binh Minh", date: "Tonight", loc: "Trang Tien St.", tag: "", tagBg: "bg-hanoi-red", img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=600" },
              { name: "Quang Ba Flower Market", date: "Daily (Morning)", loc: "Au Co Road", tag: "LOCAL", tagBg: "bg-hanoi-yellow", img: "https://statics.vinpearl.com/Quang-ba-flower-market-01_1671734231.jpg" },
            ].map((event, i) => (
              <a key={i} href="#" className="block group bg-white p-4 rounded-3xl shadow-sm border border-gray-50 hover:shadow-xl transition-all cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img src={event.img} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" alt={event.name} />
                  {event.tag && (
                    <div className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-full ${event.tagBg}`}>
                      {event.tag}
                    </div>
                  )}
                </div>
                <p className="text-xs text-hanoi-red font-bold mb-1 font-satoshi uppercase tracking-widest">{event.date}</p>
                <h4 className="font-bold text-sm mb-2 group-hover:text-hanoi-red transition-colors font-cabinet uppercase">{event.name}</h4>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-satoshi uppercase font-bold tracking-wider">
                  <MapPin size={12} /> {event.loc}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL STORIES */}
      <section id="blog" className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cabinet uppercase tracking-tight">Local Stories</h2>
            <p className="text-gray-500 font-satoshi text-lg">Deep dive into Hanoi's vibrant culture</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 text-left">
            <a href="#" className="group relative h-96 rounded-[2.5rem] overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Egg Coffee" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-hanoi-yellow text-black text-[10px] font-bold px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-widest font-satoshi">Culture Guide</span>
                <h3 className="text-2xl font-bold text-white mb-2 font-cabinet uppercase">The Ritual of Vietnamese Egg Coffee</h3>
                <p className="text-white/70 text-sm font-satoshi">Why this decadent drink defines Hanoi's heritage.</p>
              </div>
            </a>
            <div className="grid gap-8">
              <a href="#" className="group flex gap-6 bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                  <img src="https://www.vietvisiontravel.com/wp-content/uploads/2017/06/Hanoi-Old-Quarter-1.jpg" className="w-full h-full object-cover" alt="Old Quarter" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-lg mb-2 font-cabinet uppercase">History of Hanoi Old Quarter</h4>
                  <p className="text-gray-500 text-sm font-satoshi">Tracing the 36 craft streets through history.</p>
                </div>
              </a>
              <a href="#" className="group flex gap-6 bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                  <img src="https://saigonstreeteats.com/wp-content/uploads/2019/09/street-food-101.jpg" className="w-full h-full object-cover" alt="Street Food" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-lg mb-2 font-cabinet uppercase">Street Food Culture 101</h4>
                  <p className="text-gray-500 text-sm font-satoshi">How to navigate the sidewalk plastic stools like a pro.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOVED BY TRAVELERS & PARTNERS (COMBINED SECTION) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-soft-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-cabinet uppercase tracking-tight">Loved by Travelers</h2>
            <p className="text-gray-500 font-satoshi mt-4 text-lg">Real stories from our global community of explorers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {/* Sarah J. */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between hover-card text-left">
              <div>
                <div className="flex gap-1 mb-6 text-hanoi-yellow">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="italic text-gray-600 mb-8 font-satoshi leading-relaxed text-lg">"Trip4Hanoi helped me explore the city without wasting time. The AI itinerary was spot on for my food cravings!"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?u=sarah" className="w-14 h-14 rounded-full bg-gray-200 border-2 border-hanoi-red/10" alt="Sarah J." />
                <div>
                  <p className="text-lg font-bold font-cabinet">Sarah J.</p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest font-satoshi">Digital Nomad</p>
                </div>
              </div>
            </div>

            {/* Michael Chen */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between hover-card text-left">
              <div>
                <div className="flex gap-1 mb-6 text-hanoi-yellow">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="italic text-gray-600 mb-8 font-satoshi leading-relaxed text-lg">"Perfect for first-time visitors. The cultural insights helped me understand the history of the temples I visited."</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?u=michael" className="w-14 h-14 rounded-full bg-gray-200 border-2 border-hanoi-red/10" alt="Michael Chen" />
                <div>
                  <p className="text-lg font-bold font-cabinet">Michael Chen</p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest font-satoshi">Solo Traveler</p>
                </div>
              </div>
            </div>

            {/* Alex Rivera */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between hover-card text-left">
              <div>
                <div className="flex gap-1 mb-6 text-hanoi-yellow">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="italic text-gray-600 mb-8 font-satoshi leading-relaxed text-lg">"The real-time events calendar is a game changer. I found a local art exhibition that wasn't on Google!"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?u=alex" className="w-14 h-14 rounded-full bg-gray-200 border-2 border-hanoi-red/10" alt="Alex Rivera" />
                <div>
                  <p className="text-lg font-bold font-cabinet">Alex Rivera</p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest font-satoshi">Explorer</p>
                </div>
              </div>
            </div>
          </div>

          {/* PARTNERS */}
          <div className="border-t border-gray-200 pt-16 text-center">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-10 font-satoshi">Trusted by local gems</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-30">
              <Sparkles size={40} />
              <Compass size={40} />
              <Map size={40} />
              <Heart size={40} />
              <Star size={40} />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-hanoi-red rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-hanoi-yellow/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-hanoi-green/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative z-10 font-cabinet uppercase tracking-tight">Start your Hanoi adventure today</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto relative z-10 font-satoshi">Join over 5,000 travelers who explored Hanoi the smart way this year.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 font-satoshi">
            <a href="/planner" className="bg-white text-hanoi-red px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform uppercase tracking-widest text-sm">
              Create Your Trip
            </a>
            <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors uppercase tracking-widest text-sm">
              Talk to a Local
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

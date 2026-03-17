import React from 'react';
import Layout from '../components/Layout';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const EventsPage: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Hanoi Opera Night',
      location: 'Hanoi Opera House',
      date: 'Oct 25, 2023',
      time: '19:30 - 21:30',
      category: 'Culture',
      image: 'https://www.shoreexcursions.asia/wp-content/uploads/2017/09/Hanoi-Opera-House-1.jpg',

      description: 'A grand performance featuring traditional Vietnamese music and international classics.'
    },
    {
      id: 2,
      title: 'Old Quarter Night Market',
      location: 'Hang Dao Street',
      date: 'Every Fri - Sun',
      time: '18:00 - 23:00',
      category: 'Shopping',
      image: 'http://vietnamtravelers.com/wp-content/uploads/hanoi-night-market-food.jpg',
      description: 'Experience the bustling night life, street food, and local handicrafts in the heart of Hanoi.'
    },
    {
      id: 3,
      title: 'Hoan Kiem Walking Street',
      location: 'Around Hoan Kiem Lake',
      date: 'Every Sat - Sun',
      time: 'All Day',
      category: 'Local Life',
      image: 'https://lasinfoniavietnam.com/wp-content/uploads/2023/04/pho-di-bo-13.gif',
      description: 'The streets around the lake are closed to vehicles, becoming a hub for games, music, and art.'
    }
  ];

  return (
    <Layout>
      <main className="flex-grow container mx-auto px-6 py-12 max-w-6xl text-left">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Happening in Hanoi</h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            Stay updated with the latest cultural shows, festivals, and local events around the city.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group hover-card">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-hanoi-red uppercase tracking-widest shadow-sm">
                  {event.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-hanoi-red transition-colors">{event.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-500">
                    <MapPin size={18} className="text-hanoi-red" />
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <Calendar size={18} className="text-hanoi-red" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <Clock size={18} className="text-hanoi-red" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm mb-8 line-clamp-2">
                  {event.description}
                </p>
                <button className="flex items-center gap-2 text-hanoi-red font-bold hover:gap-3 transition-all">
                  Event Details <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default EventsPage;

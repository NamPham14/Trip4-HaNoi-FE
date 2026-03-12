import React from 'react';
import { MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center md:px-12">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
        <div className="w-10 h-10 bg-hanoi-red rounded-xl flex items-center justify-center text-white">
          <MapPin size={24} />
        </div>
        <span className="text-2xl font-bold tracking-tight text-slate-900 font-cabinet text-left">
          Trip4<span className="text-hanoi-red">Hanoi</span>
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#how-it-works" className="font-medium text-slate-600 hover:text-hanoi-red transition-colors">How it works</a>
        <a href="#discover" className="font-medium text-slate-600 hover:text-hanoi-red transition-colors">Discover</a>
        <a href="#pricing" className="font-medium text-slate-600 hover:text-hanoi-red transition-colors">Pricing</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm font-bold text-slate-900 uppercase tracking-wider hidden sm:block">EN | VI</button>
        <a href="/planner" className="bg-hanoi-red text-white px-6 py-2.5 rounded-full font-bold hover:bg-hanoi-red-dark transition-all shadow-md">
          Generate My Plan
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

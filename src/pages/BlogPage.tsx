import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight, User, Calendar } from 'lucide-react';


const BlogPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'The Secret Coffee Shops of the Old Quarter',
      author: 'Nguyen Minh',
      date: 'Oct 20, 2023',
      image: 'https://evivatour.com/wp-content/uploads/2024/07/12-Hanoi-Vintage-Cafes-Ancient-House-Classic-Decor-900x565.jpg',

      description: 'Hidden behind narrow alleyways and old buildings are some of Hanois most charming coffee spots.',
      tags: ['Culture', 'Cafe']
    },
    {
      id: 2,
      title: 'A Deep Dive into the Temple of Literature',
      author: 'Le Thu',
      date: 'Oct 15, 2023',

      image: 'https://cdn.prod.website-files.com/66fab24d6dde4d79b3b50865/686f86dcba8f339e5c73e692_Temple%20of%20Literature%20(1).webp',

      description: 'Exploring the rich history of Vietnams first national university and its beautiful architecture.',
      tags: ['History', 'Education']
    },
    {
      id: 3,
      title: 'Hanoi Street Food Guide for First-Timers',
      author: 'Alex Wilson',
      date: 'Oct 10, 2023',
      image: 'https://www.pelago.com/img/products/VN-Vietnam/best-price-hanoi-walking-street-food-tour-3-hours-small-group/2f4c1c40-a4ee-48a2-b683-8e739d8f006d_best-price-hanoi-walking-street-food-tour-3-hours-small-group.jpg',
      description: 'From Bun Cha to Banh Mi, here are the must-try dishes and the best places to find them.',
      tags: ['Food', 'Guide']
    }
  ];

  return (
    <Layout>
      <main className="flex-grow container mx-auto px-6 py-12 max-w-6xl text-left">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Hanoi Insights</h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            In-depth guides, historical deep-dives, and local recommendations to help you navigate the city.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-[2.5rem] mb-6 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs font-bold text-hanoi-red uppercase tracking-widest mb-3">
                <div className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-hanoi-red transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                {post.description}
              </p>
              
              <div className="flex items-center gap-2 text-slate-900 font-bold group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={18} className="text-hanoi-red" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-white rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="text-left">
            <h4 className="text-3xl font-black text-slate-900 mb-2">Want more local tips?</h4>
            <p className="text-slate-500">Subscribe to our newsletter for the latest Hanoi hidden gems.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow md:w-80 px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-hanoi-red outline-none transition-all"
            />
            <button className="bg-hanoi-red text-white p-4 rounded-2xl hover:bg-hanoi-red-dark transition-all">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BlogPage;

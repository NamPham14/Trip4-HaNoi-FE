import React from 'react';
import Layout from '../components/Layout';
import { Check, Zap, Crown, Rocket, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for a quick look around the city.',
      features: ['3 AI Itineraries per month', 'Basic point-of-interest details', 'Standard route mapping', 'Community support'],
      buttonText: 'Current Plan',
      premium: false,
      icon: Rocket
    },
    {
      name: 'Explorer',
      price: '$9.99',
      period: '/month',
      description: 'Best for tourists wanting a seamless experience.',
      features: ['Unlimited AI Generation', 'Hidden Gems suggestions', 'Smart route optimization', 'Offline itinerary access', 'Priority AI processing'],
      buttonText: 'Upgrade to Pro',
      premium: true,
      icon: Zap
    },
    {
      name: 'Local Guide',
      price: '$19.99',
      period: '/year',
      description: 'For those who love Hanoi and want more.',
      features: ['Everything in Explorer', 'Exclusive partner discounts', '24/7 Local AI Assistant', 'Early access to new features', 'No ads'],
      buttonText: 'Go Elite',
      premium: false,
      icon: Crown
    }
  ];

  return (
    <Layout>
      <main className="flex-grow container mx-auto px-6 py-16 max-w-6xl text-center">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Choose Your Journey</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Unlock the full potential of AI-driven travel planning and discover Hanoi like a local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-white rounded-[2.5rem] p-8 shadow-sm border transition-all duration-300 hover:-translate-y-2 ${plan.premium ? 'border-hanoi-red ring-4 ring-hanoi-red/5 scale-105 z-10' : 'border-slate-100'}`}
            >
              {plan.premium && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-hanoi-red text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto ${plan.premium ? 'bg-hanoi-red text-white' : 'bg-slate-100 text-slate-400'}`}>
                <plan.icon size={30} />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-end justify-center gap-1 mb-4">
                <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                {plan.period && <span className="text-slate-400 font-bold mb-1">{plan.period}</span>}
              </div>
              <p className="text-slate-500 text-sm mb-8 h-10">{plan.description}</p>

              <div className="space-y-4 mb-10 text-left">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.premium ? 'bg-hanoi-red/10 text-hanoi-red' : 'bg-slate-100 text-slate-400'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${plan.premium ? 'bg-hanoi-red text-white hover:bg-hanoi-red-dark shadow-lg shadow-hanoi-red/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {plan.buttonText} <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-hanoi-red/5 rounded-[3rem] border border-hanoi-red/10 max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-hanoi-red mb-2">Need a custom plan for a large group?</h4>
          <p className="text-slate-600 mb-6">We offer special rates for tour agencies and corporate retreats.</p>
          <button className="text-hanoi-red font-black border-b-2 border-hanoi-red hover:text-hanoi-red-dark hover:border-hanoi-red-dark transition-all">
            Contact Sales Support
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default PricingPage;

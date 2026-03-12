/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Check, Banknote, Wallet, Gem, Calendar, Heart, ArrowRight, Sparkles } from 'lucide-react';

const PlannerPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [formData, setFormData] = useState({
    duration: '4h',
    interests: [] as string[],
    budget: 'Moderate'
  });

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const updateFormData = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <Layout>
      <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl text-left">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Step {currentStep} of {totalSteps}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-hanoi-red">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-hanoi-red transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {currentStep === 1 && (
              <div className="step-content">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Select Trip Duration</h2>
                  <p className="text-slate-500">How long do you plan to explore the city? <br className="hidden md:block" /> Thời gian bạn dự định khám phá thành phố là bao lâu?</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['4h', '1d', '2d', '3d', '5d', '7d'].map((dur) => (
                    <div key={dur} className="relative">
                      <input 
                        type="radio" 
                        id={`dur-${dur}`} 
                        name="duration" 
                        className="hidden" 
                        checked={formData.duration === dur}
                        onChange={() => updateFormData('duration', dur)}
                      />
                      <label 
                        htmlFor={`dur-${dur}`} 
                        className={`flex flex-col items-center justify-center p-6 border-2 rounded-3xl cursor-pointer transition-all ${formData.duration === dur ? 'border-hanoi-red bg-hanoi-red/5 text-hanoi-red' : 'border-slate-100 hover:border-hanoi-red/30'}`}
                      >
                        <span className="text-xl font-bold mb-1">{dur === '4h' ? '4 Hours' : dur.replace('d', ' Day') + (dur === '1d' ? '' : 's')}</span>
                        <span className="text-xs text-slate-400 uppercase tracking-tighter">{dur === '4h' ? 'Quick stop' : 'Full experience'}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="step-content">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">What Interests You?</h2>
                  <p className="text-slate-500">Select all that apply to personalize your itinerary. <br className="hidden md:block" /> Chọn các chủ đề bạn quan tâm.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['Street Food', 'History', 'Coffee Culture', 'Art & Design', 'Local Life', 'Nightlife'].map((interest) => (
                    <div key={interest} className="relative">
                      <input 
                        type="checkbox" 
                        id={`int-${interest}`} 
                        className="hidden" 
                        checked={formData.interests.includes(interest)}
                        onChange={() => toggleInterest(interest)}
                      />
                      <label 
                        htmlFor={`int-${interest}`} 
                        className={`flex items-center gap-4 p-5 border-2 rounded-2xl cursor-pointer transition-all ${formData.interests.includes(interest) ? 'border-hanoi-red bg-hanoi-red/5 text-hanoi-red' : 'border-slate-100 hover:border-hanoi-red/30'}`}
                      >
                        <div className={`w-6 h-6 rounded-md border flex items-center justify-center ${formData.interests.includes(interest) ? 'bg-hanoi-red border-hanoi-red text-white' : 'border-slate-300'}`}>
                          {formData.interests.includes(interest) && <Check size={14} />}
                        </div>
                        <span className="font-bold text-slate-700">{interest}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="step-content">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Select Your Budget</h2>
                  <p className="text-slate-500">How much are you planning to spend? <br className="hidden md:block" /> Ngân sách dự kiến của bạn.</p>
                </div>
                <div className="space-y-4">
                  {[
                    { val: 'Budget', icon: Banknote },
                    { val: 'Moderate', icon: Wallet },
                    { val: 'Luxury', icon: Gem }
                  ].map((b) => (
                    <div key={b.val} className="relative">
                      <input 
                        type="radio" 
                        id={`bud-${b.val}`} 
                        name="budget" 
                        className="hidden" 
                        checked={formData.budget === b.val}
                        onChange={() => updateFormData('budget', b.val)}
                      />
                      <label 
                        htmlFor={`bud-${b.val}`} 
                        className={`flex items-center justify-between p-6 border-2 rounded-3xl cursor-pointer transition-all ${formData.budget === b.val ? 'border-hanoi-red bg-hanoi-red/5 text-hanoi-red' : 'border-slate-100 hover:border-hanoi-red/30'}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${formData.budget === b.val ? 'bg-hanoi-red text-white' : 'bg-slate-100 text-slate-400'}`}>
                            <b.icon size={24} />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-lg">{b.val}</h4>
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">{b.val === 'Budget' ? 'Street food & local stays' : b.val === 'Moderate' ? 'Boutique & fine dining' : 'High-end experiences'}</p>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.budget === b.val ? 'border-hanoi-red' : 'border-slate-300'}`}>
                          {formData.budget === b.val && <div className="w-3 h-3 bg-hanoi-red rounded-full"></div>}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="step-content">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Review & Generate</h2>
                  <p className="text-slate-500">Almost ready! Check your preferences before we generate the magic. <br className="hidden md:block" /> Kiểm tra lại thông tin.</p>
                </div>
                <div className="bg-soft-beige rounded-[2rem] p-8 space-y-6">
                  <div className="flex justify-between items-center pb-6 border-b border-slate-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-hanoi-red shadow-sm">
                        <Calendar size={20} />
                      </div>
                      <span className="font-bold text-slate-600">Duration</span>
                    </div>
                    <span className="font-black text-slate-900 text-lg">{formData.duration === '4h' ? '4 Hours' : formData.duration.replace('d', ' Day') + (formData.duration === '1d' ? '' : 's')}</span>
                  </div>
                  <div className="flex justify-between items-start pb-6 border-b border-slate-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-hanoi-red shadow-sm">
                        <Heart size={20} />
                      </div>
                      <span className="font-bold text-slate-600">Interests</span>
                    </div>
                    <span className="font-black text-slate-900 text-lg text-right max-w-[200px]">{formData.interests.length > 0 ? formData.interests.join(', ') : 'General Sightseeing'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-hanoi-red shadow-sm">
                        <Banknote size={20} />
                      </div>
                      <span className="font-bold text-slate-600">Budget</span>
                    </div>
                    <span className="font-black text-slate-900 text-lg">{formData.budget}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-12 flex items-center justify-between gap-4">
              <button 
                onClick={handlePrev}
                className={`px-8 py-4 rounded-2xl font-bold border-2 border-slate-100 text-slate-500 hover:border-hanoi-red hover:text-hanoi-red transition-all ${currentStep === 1 ? 'invisible' : ''}`}
              >
                Back
              </button>
              
              {currentStep < totalSteps ? (
                <button 
                  onClick={handleNext}
                  className="px-10 py-4 bg-hanoi-red text-white rounded-2xl font-bold hover:bg-hanoi-red-dark transition-all shadow-lg flex items-center gap-2"
                >
                  Continue <ArrowRight size={20} />
                </button>
              ) : (
                <a 
                  href="/generated"
                  className="px-10 py-4 bg-hanoi-red text-white rounded-2xl font-bold hover:bg-hanoi-red-dark transition-all shadow-xl flex items-center gap-2"
                >
                  Generate Plan <Sparkles size={20} />
                </a>
              )}
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default PlannerPage;

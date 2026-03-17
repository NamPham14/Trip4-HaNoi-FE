/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Check, Banknote, Wallet, Gem, Calendar, Heart, ArrowRight, Sparkles, User, Users, Home, Plus, Minus, Loader2 } from 'lucide-react';
import { createItinerary, getAllCategories } from '../services/api';
import type { ItineraryResponse, CategoryResponse } from '../services/api';

interface PlannerPageProps {
  onPlanGenerated: (data: ItineraryResponse) => void;
}

const PlannerPage: React.FC<PlannerPageProps> = ({ onPlanGenerated }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryResponse[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const totalSteps = 5;
  const [formData, setFormData] = useState({
    duration: '1d',
    interests: [] as string[],
    budget: 'Moderate',
    peopleCount: 1,
    travelType: 'Solo'
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setIsCategoriesLoading(false);
      }
    };
    fetchCategories();
  }, []);

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

  const adjustPeople = (amount: number) => {
    setFormData(prev => ({ ...prev, peopleCount: Math.max(1, prev.peopleCount + amount) }));
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      // Map duration to number of days
      const days = formData.duration === '4h' ? 1 : parseInt(formData.duration.replace('d', ''));
      
      // Map budget labels to numbers
      const budgetMap: Record<string, number> = {
        'Budget': 500000,
        'Moderate': 1500000,
        'Luxury': 5000000
      };

      const requestData = {
        title: `Trip to Hanoi for ${formData.peopleCount} ${formData.peopleCount > 1 ? 'people' : 'person'}`,
        budget: budgetMap[formData.budget],
        days: days,
        numberOfPeople: formData.peopleCount,
        categoryNames: formData.interests
      };

      const result = await createItinerary(requestData);
      onPlanGenerated(result);
    } catch (error) {
      console.error('Failed to generate plan:', error);
      alert('Có lỗi xảy ra khi tạo lịch trình. Vui lòng thử lại sau!');
    } finally {
      setIsLoading(false);
    }
  };

  const travelTypes = [
    { id: 'Solo', label: 'Solo', icon: User, defaultCount: 1 },
    { id: 'Couple', label: 'Couple', icon: Heart, defaultCount: 2 },
    { id: 'Family', label: 'Family', icon: Home, defaultCount: 3 },
    { id: 'Group', label: 'Group', icon: Users, defaultCount: 4 },
  ];

  const progress = (currentStep / totalSteps) * 100;

  return (
    <Layout>
      <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl text-left">
        {/* AI Suggestion Banner */}
        <div className="mb-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-hanoi-red/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl group-hover:bg-hanoi-red/20 transition-all duration-700"></div>
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-hanoi-yellow animate-pulse-slow">
              <Sparkles size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-cabinet">Want a Custom AI Itinerary?</h3>
              <p className="text-slate-400 text-sm font-medium">Chat with our AI to build your dream Hanoi trip in seconds.</p>
            </div>
          </div>
          <a href="/ai-planner" className="relative z-10 px-8 py-3 bg-hanoi-red text-white rounded-xl font-bold hover:bg-hanoi-red-dark transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            Try AI Chat <ArrowRight size={18} />
          </a>
        </div>

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
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Who's Traveling?</h2>
                  <p className="text-slate-500">Select your travel group type and number of people. <br className="hidden md:block" /> Chọn loại hình nhóm du lịch và số lượng người.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {travelTypes.map((type) => (
                    <div key={type.id} className="relative">
                      <button 
                        onClick={() => {
                          updateFormData('travelType', type.id);
                          updateFormData('peopleCount', type.defaultCount);
                        }}
                        className={`w-full flex flex-col items-center justify-center p-4 border-2 rounded-2xl cursor-pointer transition-all ${formData.travelType === type.id ? 'border-hanoi-red bg-hanoi-red/5 text-hanoi-red' : 'border-slate-100 hover:border-hanoi-red/30'}`}
                      >
                        <type.icon size={24} className="mb-2" />
                        <span className="font-bold text-sm">{type.label}</span>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="bg-soft-beige rounded-[2rem] p-8 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Total People</h4>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Số lượng thành viên</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button onClick={() => adjustPeople(-1)} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:border-hanoi-red"><Minus size={18} /></button>
                    <span className="text-2xl font-black w-8 text-center">{formData.peopleCount}</span>
                    <button onClick={() => adjustPeople(1)} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:border-hanoi-red"><Plus size={18} /></button>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="step-content">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">What Interests You?</h2>
                  <p className="text-slate-500">Select all that apply to personalize your itinerary. <br className="hidden md:block" /> Chọn các chủ đề bạn quan tâm.</p>
                </div>
                {isCategoriesLoading ? (
                  <div className="flex justify-center items-center py-10">
                    <Loader2 size={40} className="animate-spin text-hanoi-red" />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((cat) => (
                      <div key={cat.id} className="relative">
                        <input 
                          type="checkbox" 
                          id={`int-${cat.id}`} 
                          className="hidden" 
                          checked={formData.interests.includes(cat.name)}
                          onChange={() => toggleInterest(cat.name)}
                        />
                        <label 
                          htmlFor={`int-${cat.id}`} 
                          className={`flex items-center gap-4 p-5 border-2 rounded-2xl cursor-pointer transition-all ${formData.interests.includes(cat.name) ? 'border-hanoi-red bg-hanoi-red/5 text-hanoi-red' : 'border-slate-100 hover:border-hanoi-red/30'}`}
                        >
                          <div className={`w-6 h-6 rounded-md border flex items-center justify-center ${formData.interests.includes(cat.name) ? 'bg-hanoi-red border-hanoi-red text-white' : 'border-slate-300'}`}>
                            {formData.interests.includes(cat.name) && <Check size={14} />}
                          </div>
                          <span className="font-bold text-slate-700">{cat.name}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentStep === 4 && (
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

            {currentStep === 5 && (
              <div className="step-content">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Review & Generate</h2>
                  <p className="text-slate-500">Almost ready! Check your preferences before we generate the magic. <br className="hidden md:block" /> Kiểm tra lại thông tin.</p>
                </div>
                <div className="bg-soft-beige rounded-[2rem] p-8 space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-hanoi-red shadow-sm">
                        <Calendar size={20} />
                      </div>
                      <span className="font-bold text-slate-600 text-sm">Duration</span>
                    </div>
                    <span className="font-black text-slate-900">{formData.duration === '4h' ? '4 Hours' : formData.duration.replace('d', ' Day') + (formData.duration === '1d' ? '' : 's')}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-hanoi-red shadow-sm">
                        <Users size={20} />
                      </div>
                      <span className="font-bold text-slate-600 text-sm">Travelers</span>
                    </div>
                    <span className="font-black text-slate-900">{formData.peopleCount} {formData.peopleCount > 1 ? 'People' : 'Person'} ({formData.travelType})</span>
                  </div>
                  <div className="flex justify-between items-start pb-4 border-b border-slate-200/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-hanoi-red shadow-sm">
                        <Heart size={20} />
                      </div>
                      <span className="font-bold text-slate-600 text-sm">Interests</span>
                    </div>
                    <span className="font-black text-slate-900 text-right max-w-[200px]">{formData.interests.length > 0 ? formData.interests.join(', ') : 'General'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-hanoi-red shadow-sm">
                        <Banknote size={20} />
                      </div>
                      <span className="font-bold text-slate-600 text-sm">Budget</span>
                    </div>
                    <span className="font-black text-slate-900">{formData.budget}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-12 flex items-center justify-between gap-4">
              <button 
                onClick={handlePrev}
                disabled={isLoading}
                className={`px-8 py-4 rounded-2xl font-bold border-2 border-slate-100 text-slate-500 hover:border-hanoi-red hover:text-hanoi-red transition-all ${currentStep === 1 ? 'invisible' : ''} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                <button 
                  onClick={handleGenerate}
                  disabled={isLoading}
                  className="px-10 py-4 bg-hanoi-red text-white rounded-2xl font-bold hover:bg-hanoi-red-dark transition-all shadow-xl flex items-center gap-2 disabled:bg-slate-400"
                >
                  {isLoading ? (
                    <>Processing... <Loader2 size={20} className="animate-spin" /></>
                  ) : (
                    <>Generate Plan <Sparkles size={20} /></>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default PlannerPage;

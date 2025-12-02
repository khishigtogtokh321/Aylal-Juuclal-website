import React from 'react';
import { ViewState } from '../types';
import { Filter, MapPin, Wifi, Star, SlidersHorizontal, Coffee, Car } from 'lucide-react';
import { Button, Card, Input, Rating, Badge } from '../components/UI';

interface AccommodationListProps {
  navigateTo: (view: ViewState) => void;
  setSelectedHotelId: (id: string) => void;
}

export const AccommodationList: React.FC<AccommodationListProps> = ({ navigateTo, setSelectedHotelId }) => {
  const hotels = [
    { 
      id: 'h1', 
      name: 'Khuvsgul Lake Hotel', 
      type: 'Luxury Hotel', 
      location: 'Хөвсгөл, Хатгал', 
      rating: 4.9, 
      reviews: 324,
      price: 280000, 
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
      amenities: ['Wifi', 'Breakfast', 'Spa']
    },
    { 
      id: 'h2', 
      name: 'Terelj Lodge Resort', 
      type: 'Ger Camp', 
      location: 'Төв аймаг, Тэрэлж', 
      rating: 4.7, 
      reviews: 180,
      price: 150000, 
      img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
      amenities: ['Horse Riding', 'Hiking', 'Meals']
    },
    { 
      id: 'h3', 
      name: 'Three Camels Lodge', 
      type: 'Luxury Ger', 
      location: 'Өмнөговь, Даланзадгад', 
      rating: 5.0, 
      reviews: 540,
      price: 850000, 
      img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800',
      amenities: ['Desert Tour', 'Luxury', 'Dining']
    },
    { 
      id: 'h4', 
      name: 'Shangri-La Ulaanbaatar', 
      type: 'City Hotel', 
      location: 'Улаанбаатар, СБД', 
      rating: 4.8, 
      reviews: 1200,
      price: 650000, 
      img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800',
      amenities: ['Pool', 'Gym', 'Bar']
    },
    { 
      id: 'h5', 
      name: 'Altai Peaks Camp', 
      type: 'Adventure Camp', 
      location: 'Баян-Өлгий, Таван богд', 
      rating: 4.6, 
      reviews: 85,
      price: 120000, 
      img: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800',
      amenities: ['Guide', 'Transport', 'Tent']
    },
    { 
      id: 'h6', 
      name: 'Karakorum Base', 
      type: 'Tourist Camp', 
      location: 'Өвөрхангай, Хархорин', 
      rating: 4.5, 
      reviews: 150,
      price: 90000, 
      img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800',
      amenities: ['Museum', 'History', 'Meals']
    },
  ];

  const handleSelect = (id: string) => {
    setSelectedHotelId(id);
    navigateTo(ViewState.ACCOMMODATION_DETAIL);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
             <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
               <h3 className="font-bold text-lg text-slate-900">Шүүлтүүр</h3>
               <SlidersHorizontal className="w-4 h-4 text-slate-400" />
             </div>
             
             <div className="space-y-6">
               <div>
                 <Input label="Нэрээр хайх" placeholder="Буудлын нэр..." className="bg-slate-50" />
               </div>

               <div>
                 <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-3">Төрөл ангилал</label>
                 <div className="space-y-2.5">
                   {[
                     { l: 'Зочид буудал (Hotel)', c: 12 }, 
                     { l: 'Жуулчны бааз (Ger Camp)', c: 45 }, 
                     { l: 'Гэр буудал (Guest House)', c: 23 }, 
                     { l: 'Ресорт (Resort)', c: 8 }
                   ].map((t, i) => (
                     <label key={i} className="flex items-center justify-between group cursor-pointer">
                       <div className="flex items-center space-x-3">
                         <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500 transition-colors" />
                         <span className="text-sm text-slate-600 group-hover:text-slate-900">{t.l}</span>
                       </div>
                       <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{t.c}</span>
                     </label>
                   ))}
                 </div>
               </div>

               <div>
                 <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-3">Үнийн дүн (₮)</label>
                 <div className="flex items-center space-x-3 mb-2">
                    <input type="number" placeholder="Min" className="w-1/2 p-2 text-sm border border-slate-200 rounded-lg bg-slate-50" />
                    <span className="text-slate-400">-</span>
                    <input type="number" placeholder="Max" className="w-1/2 p-2 text-sm border border-slate-200 rounded-lg bg-slate-50" />
                 </div>
                 <input type="range" className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600" />
               </div>

               <div>
                 <label className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-3">Зэрэглэл</label>
                 <div className="flex gap-2">
                   {[5,4,3,2].map(s => (
                     <button key={s} className="flex-1 py-1.5 border border-slate-200 rounded-lg text-sm font-medium hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all flex justify-center items-center">
                       {s} <Star className="w-3 h-3 ml-1 fill-current" />
                     </button>
                   ))}
                 </div>
               </div>
             </div>
             
             <div className="mt-8 pt-4 border-t border-slate-100">
               <Button fullWidth>Шүүх</Button>
             </div>
           </div>
        </aside>

        {/* List */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-bold text-slate-900">Бүх илэрц <span className="text-slate-400 text-lg font-normal">({hotels.length})</span></h2>
             <div className="flex items-center gap-2">
               <span className="text-sm text-slate-500">Эрэмбэлэх:</span>
               <select className="border-none bg-white text-sm font-semibold text-slate-900 focus:ring-0 cursor-pointer py-1 px-2 rounded-lg hover:bg-slate-100">
                 <option>Санал болгох</option>
                 <option>Үнэ: Багаас их рүү</option>
                 <option>Үнэ: Ихээс бага руу</option>
                 <option>Үнэлгээгээр</option>
               </select>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((h) => (
              <Card key={h.id} hoverEffect className="flex flex-col h-full group border-0 shadow-md">
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img src={h.img} alt={h.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm border border-slate-100">
                      {h.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex gap-1">
                     {h.amenities.slice(0, 2).map((a, i) => (
                       <span key={i} className="bg-black/50 backdrop-blur text-white px-2 py-0.5 rounded text-[10px] font-medium border border-white/20">
                         {a}
                       </span>
                     ))}
                  </div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-primary-700 transition-colors">{h.name}</h3>
                  </div>
                  
                  <div className="flex items-center text-xs text-slate-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-primary-500" /> 
                    {h.location}
                  </div>
                  
                  <div className="mb-4 flex items-center gap-2">
                    <Rating stars={h.rating} count={h.reviews} />
                  </div>

                  <div className="mt-auto flex items-end justify-between pt-4 border-t border-slate-50">
                    <div>
                       <span className="text-xs text-slate-400 block mb-0.5">Эхлэх үнэ</span>
                       <span className="block text-xl font-bold text-primary-700">{h.price.toLocaleString()}₮</span>
                       <span className="text-[10px] text-slate-400">1 шөнө / 1 өрөө</span>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => handleSelect(h.id)} className="hover:bg-primary-50 border-primary-100 text-primary-700">
                      Дэлгэрэнгүй
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
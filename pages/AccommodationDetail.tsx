import React from 'react';
import { ViewState } from '../types';
import { ArrowLeft, MapPin, Wifi, Coffee, Car, Shield, Star, Utensils, Mountain, Info } from 'lucide-react';
import { Button, Card, Rating } from '../components/UI';

interface AccommodationDetailProps {
  id: string | null;
  navigateTo: (view: ViewState) => void;
  onBack: () => void;
}

export const AccommodationDetail: React.FC<AccommodationDetailProps> = ({ id, navigateTo, onBack }) => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb / Back */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="flex items-center text-slate-500 hover:text-slate-900 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Буцах
          </button>
          <div className="flex gap-2">
            <button className="text-slate-400 hover:text-red-500"><span className="sr-only">Like</span>♥</button>
            <button className="text-slate-400 hover:text-primary-600"><span className="sr-only">Share</span>Share</button>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Khuvsgul Lake Resort & Spa</h1>
            <div className="flex items-center text-slate-600 gap-4">
              <span className="flex items-center text-sm font-medium"><MapPin className="w-4 h-4 mr-1 text-primary-500" /> Хатгал тосгон, Хөвсгөл аймаг</span>
              <Rating stars={4.9} count={342} />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-3xl font-bold text-primary-700">280,000₮</span>
            <span className="text-sm text-slate-500">нэг шөнийн / өрөө</span>
          </div>
        </div>

        {/* Gallery - Masonry style */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[500px] mb-12 rounded-3xl overflow-hidden shadow-sm">
          <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
             <img src="https://images.unsplash.com/photo-1544983088-72413726532d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Main View" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden">
             <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Room Interior" />
          </div>
          <div className="relative group cursor-pointer overflow-hidden">
             <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Amenities" />
          </div>
          <div className="relative group cursor-pointer overflow-hidden">
             <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Activity" />
          </div>
          <div className="relative group cursor-pointer overflow-hidden">
             <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center z-10">
               <span className="text-white font-bold border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-slate-900 transition-colors">+12 Photos</span>
             </div>
             <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="More" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
             
             {/* Description */}
             <div className="prose prose-slate max-w-none">
               <h3 className="text-xl font-bold text-slate-900 mb-4">Танилцуулга</h3>
               <p className="text-slate-600 leading-relaxed">
                 Хөвсгөл нуурын эрэг дээр байрлах манай ресорт нь байгалийн үзэсгэлэн болон орчин үеийн тав тухыг хослуулсан тансаг зэрэглэлийн амралтын газар юм. 
                 Та энд Монгол гэрийн уламжлалт хэв маягийг орчин үеийн шийдэлтэй хослуулсан өрөөнүүдэд тухлан, нуурын мандал дээрх нар жаргахыг харах боломжтой.
               </p>
               <p className="text-slate-600 leading-relaxed mt-4">
                 Манай ресторан орон нутгийн органик хүнсээр бэлтгэсэн европ болон монгол үндэсний хоолоор үйлчилнэ.
               </p>
             </div>

             {/* Amenities */}
             <div>
               <h3 className="text-xl font-bold text-slate-900 mb-6">Үйлчилгээ & Боломжууд</h3>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                  {[
                    {icon: Wifi, l: 'Өндөр хурдны интернэт'},
                    {icon: Coffee, l: 'Өглөөний цай үнэгүй'},
                    {icon: Car, l: 'Үнэгүй зогсоол'},
                    {icon: Shield, l: '24/7 Харуул хамгаалалт'},
                    {icon: Utensils, l: 'Ресторан & Бар'},
                    {icon: Mountain, l: 'Аялалын хөтөч'},
                  ].map((f, i) => (
                    <div key={i} className="flex items-center text-slate-700">
                      <f.icon className="w-5 h-5 text-primary-500 mr-3" />
                      <span className="text-sm font-medium">{f.l}</span>
                    </div>
                  ))}
               </div>
             </div>

             {/* Rooms Table */}
             <div>
               <h3 className="text-xl font-bold text-slate-900 mb-6">Өрөө сонгох</h3>
               <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  {/* Desktop Table Header */}
                  <div className="hidden md:grid grid-cols-12 bg-slate-50 border-b border-slate-200 p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <div className="col-span-5">Өрөөний төрөл</div>
                    <div className="col-span-2">Зочид</div>
                    <div className="col-span-3 text-right">Үнэ (1 шөнө)</div>
                    <div className="col-span-2"></div>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-slate-100">
                    {[
                      { name: 'Standard Ger', desc: 'Уламжлалт гэр, 2 ортой', max: 2, price: 150000, feat: ['24m²', 'Garden View'] },
                      { name: 'Deluxe Wooden House', desc: 'Модон байшин, террастай', max: 2, price: 280000, feat: ['35m²', 'Lake View', 'Balcony'] },
                      { name: 'Family Suite', desc: 'Гэр бүлийн том өрөө', max: 4, price: 450000, feat: ['50m²', 'Mountain View', 'Kitchen'] },
                    ].map((r, i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-12 p-6 items-center hover:bg-slate-50 transition-colors gap-4 md:gap-0">
                        <div className="md:col-span-5">
                          <h4 className="font-bold text-slate-900 text-lg">{r.name}</h4>
                          <p className="text-sm text-slate-500 mb-2">{r.desc}</p>
                          <div className="flex gap-2">
                            {r.feat.map((f, idx) => (
                              <span key={idx} className="text-[10px] bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-slate-600">{f}</span>
                            ))}
                          </div>
                        </div>
                        <div className="md:col-span-2 flex items-center text-slate-600 text-sm">
                          <span className="md:hidden mr-2 font-medium">Зочид:</span> {r.max} хүн
                        </div>
                        <div className="md:col-span-3 md:text-right">
                          <span className="md:hidden mr-2 font-medium text-sm">Үнэ:</span>
                          <span className="font-bold text-primary-700 text-lg">{r.price.toLocaleString()}₮</span>
                        </div>
                        <div className="md:col-span-2 text-right">
                          <Button size="sm" variant="secondary" onClick={() => navigateTo(ViewState.CHECKOUT)}>Сонгох</Button>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
             </div>
          </div>

          {/* Sticky Sidebar Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="p-6 border-slate-200 shadow-xl shadow-slate-200/50">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-slate-900">Захиалга хийх</h3>
                  <div className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    Шууд баталгаажна
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 hover:border-primary-400 transition-colors cursor-pointer group">
                       <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block group-hover:text-primary-600">Ирэх</label>
                       <input type="date" className="bg-transparent border-none p-0 w-full text-sm font-semibold text-slate-900 focus:ring-0 cursor-pointer" />
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 hover:border-primary-400 transition-colors cursor-pointer group">
                       <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block group-hover:text-primary-600">Явах</label>
                       <input type="date" className="bg-transparent border-none p-0 w-full text-sm font-semibold text-slate-900 focus:ring-0 cursor-pointer" />
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Зочид</label>
                    <select className="bg-transparent border-none p-0 w-full text-sm font-semibold text-slate-900 focus:ring-0 cursor-pointer">
                      <option>2 том хүн</option>
                      <option>2 том хүн, 1 хүүхэд</option>
                      <option>1 том хүн</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>150,000₮ x 2 шөнө</span>
                    <span>300,000₮</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Үйлчилгээний хураамж</span>
                    <span>15,000₮</span>
                  </div>
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Хямдрал (5%)</span>
                    <span>-15,750₮</span>
                  </div>
                  <div className="border-t border-dashed border-slate-300 pt-3 flex justify-between items-end">
                    <span className="font-bold text-slate-900">Нийт дүн</span>
                    <span className="text-2xl font-bold text-primary-700">299,250₮</span>
                  </div>
                </div>

                <Button fullWidth size="lg" className="shadow-lg shadow-primary-500/30 mb-3" onClick={() => navigateTo(ViewState.CHECKOUT)}>
                  Захиалах
                </Button>
                
                <p className="text-xs text-center text-slate-400 flex items-center justify-center">
                  <Info className="w-3 h-3 mr-1" /> Төлбөрийг буцаах боломжгүй
                </p>
              </Card>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
                 <div className="bg-white p-2 rounded-full h-fit shadow-sm text-blue-600">
                   <Shield className="w-4 h-4" />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-blue-900">Найдвартай захиалга</h4>
                   <p className="text-xs text-blue-700 mt-1">
                     Бид таны захиалгыг шууд баталгаажуулж, очих үед бэлэн байдлыг хангана.
                   </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
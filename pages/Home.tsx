import React, { useState } from 'react';
import { ViewState } from '../types';
import { Search, MapPin, Calendar, Users, ArrowRight, Compass, Mountain, Tent, Palmtree } from 'lucide-react';
import { Button, Card, Rating, Select, Input } from '../components/UI';

interface HomeProps {
  navigateTo: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const [activeTab, setActiveTab] = useState<'transport' | 'hotel' | 'tours'>('transport');

  // Data inspired by Discover Mongolia
  const topDestinations = [
    { 
      id: 1, 
      title: 'Говийн гайхамшиг', 
      desc: 'Элсэн манхан, Ёлын ам, Баянзаг', 
      img: 'https://images.unsplash.com/photo-1547029528-98e3b3c373a0?auto=format&fit=crop&q=80&w=800', 
      rating: 4.9 
    },
    { 
      id: 2, 
      title: 'Хөвсгөл нуур', 
      desc: 'Монголын хөх сувд', 
      img: 'https://images.unsplash.com/photo-1558287534-192a433f48d6?auto=format&fit=crop&q=80&w=800', 
      rating: 5.0 
    },
    { 
      id: 3, 
      title: 'Алтай Таван Богд', 
      desc: 'Мөнх цаст оргилууд', 
      img: 'https://images.unsplash.com/photo-1589809983944-e2004245c61a?auto=format&fit=crop&q=80&w=800', 
      rating: 4.8 
    },
    { 
      id: 4, 
      title: 'Тэрэлж & Цонжин Болдог', 
      desc: 'Байгалийн өвөрмөц тогтоц', 
      img: 'https://images.unsplash.com/photo-1629810848037-4d7644910242?auto=format&fit=crop&q=80&w=800', 
      rating: 4.7 
    },
  ];

  const events = [
    { id: 1, name: 'Үндэсний Их Баяр Наадам', date: '7 сарын 11-13', img: 'https://images.unsplash.com/photo-1563205764-64b5897c9993?auto=format&fit=crop&q=80&w=800' },
    { id: 2, name: 'Бүргэдийн Баяр', date: '10 сарын 05-06', img: 'https://images.unsplash.com/photo-1596707328574-e36214a1a511?auto=format&fit=crop&q=80&w=800' },
    { id: 3, name: 'Мөсний Баяр', date: '3 сарын 02-03', img: 'https://images.unsplash.com/photo-1550993952-4752677102a7?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="w-full bg-slate-50">
      {/* Immersive Hero Section */}
      <div className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549615558-8686e067c295?auto=format&fit=crop&q=80&w=1920" 
            alt="Mongolia Landscape" 
            className="w-full h-full object-cover animate-pan-slow"
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-slate-900/60"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold tracking-widest uppercase mb-4">
              Discover the unexpected
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
              Мөнх хөх тэнгэрийн <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">орон</span>
            </h1>
            <p className="text-xl text-slate-100 max-w-2xl mx-auto font-light leading-relaxed">
              Монгол орны байгалийн үзэсгэлэн, нүүдэлчин ахуй, түүх соёлыг нэг дороос.
            </p>
          </div>

          {/* Pro Search Widget - Glassmorphism */}
          <div className="w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-4 md:p-6 border border-white/50 animate-fade-in-up delay-100">
            {/* Tabs */}
            <div className="flex space-x-2 mb-6 border-b border-slate-200/60 pb-2">
              {[
                { id: 'transport', label: 'Тээвэр захиалах' },
                { id: 'hotel', label: 'Зочид буудал' },
                { id: 'tours', label: 'Аялал & Тур' }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-3 font-semibold text-sm rounded-xl transition-all ${
                    activeTab === tab.id 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Хаанаас / Байршил</label>
                <div className="relative group">
                   <MapPin className="absolute left-3 top-3 text-slate-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors" />
                   <input 
                    type="text" 
                    placeholder="Улаанбаатар" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 font-medium text-slate-900 transition-all" 
                   />
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Хаашаа / Огноо</label>
                <div className="relative group">
                   <Calendar className="absolute left-3 top-3 text-slate-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors" />
                   <input 
                    type="date" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 font-medium text-slate-900 transition-all" 
                   />
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Зорчигчид</label>
                <div className="relative group">
                   <Users className="absolute left-3 top-3 text-slate-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors" />
                   <select className="w-full pl-10 pr-8 py-3 bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 font-medium text-slate-900 appearance-none cursor-pointer">
                     <option>1 аялагч</option>
                     <option>2 аялагч</option>
                     <option>3-5 аялагч</option>
                     <option>Гэр бүл (5+)</option>
                   </select>
                </div>
              </div>
              <div className="md:col-span-3">
                <Button 
                  variant="secondary" 
                  fullWidth 
                  size="lg"
                  className="h-[48px] !text-base !font-bold shadow-lg shadow-accent-500/30"
                  onClick={() => navigateTo(activeTab === 'transport' ? ViewState.TRANSPORT_LIST : ViewState.ACCOMMODATION_LIST)}
                >
                  <Search className="w-5 h-5 mr-2" />
                  Хайх
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories / Features */}
      <section className="bg-white py-12 border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Mountain, label: 'Байгалийн аялал', sub: 'Уулс, нуур, говь' },
                { icon: Tent, label: 'Нүүдэлчин соёл', sub: 'Малчин айл, Гэр' },
                { icon: Compass, label: 'Адал явдал', sub: 'Морин аялал, Треккинг' },
                { icon: Palmtree, label: 'Амралт сувилал', sub: 'Рашаан, Ресорт' },
              ].map((item, i) => (
                <div key={i} className="flex items-center p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-100">
                   <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                     <item.icon className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900 group-hover:text-primary-700">{item.label}</h3>
                     <p className="text-xs text-slate-500">{item.sub}</p>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Top Destinations */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-primary-600 font-bold tracking-wider text-sm uppercase">Destinations</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Алдартай чиглэлүүд</h2>
            <p className="text-slate-500 mt-3 text-lg">Монгол орны хамгийн үзэсгэлэнт газрууд</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Бүгдийг үзэх <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topDestinations.map((place) => (
            <Card key={place.id} hoverEffect className="group h-full flex flex-col">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={place.img} 
                  alt={place.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">{place.title}</h3>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-slate-600 mb-4">{place.desc}</p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <Rating stars={place.rating} minimal />
                  <span className="text-sm font-semibold text-primary-600 group-hover:translate-x-1 transition-transform cursor-pointer">
                    Дэлгэрэнгүй &rarr;
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-slate-900 py-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="flex items-center justify-between mb-12">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Онцлох Эвент, Арга Хэмжээ</h2>
               <p className="text-slate-400">Монголын уламжлалт баяр ёслол, соёлын арга хэмжээнүүд</p>
             </div>
             <Button variant="white">Хөтөлбөр үзэх</Button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {events.map((event) => (
               <div key={event.id} className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                 <img src={event.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="bg-white/20 backdrop-blur-md inline-block px-3 py-1 rounded-lg text-xs font-bold mb-2 border border-white/20">
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-bold leading-tight group-hover:text-primary-400 transition-colors">{event.name}</h3>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Аялалын бизнесээ бидэнтэй холбоорой</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Жуулчны бааз, зочид буудал, тээврийн үйлчилгээгээ нэгдсэн системд бүртгүүлж, 
            дэлхийн өнцөг булан бүрээс ирэх жуулчдад үйлчилгээгээ хүргээрэй.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button size="lg" variant="primary" onClick={() => navigateTo(ViewState.LOGIN)}>Байгууллагаар бүртгүүлэх</Button>
             <Button size="lg" variant="outline" onClick={() => navigateTo(ViewState.LOGIN)}>Дэлгэрэнгүй мэдээлэл</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
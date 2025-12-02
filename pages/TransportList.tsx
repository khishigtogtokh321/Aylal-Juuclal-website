import React from 'react';
import { ViewState } from '../types';
import { Filter, ArrowRight, Clock, Users, Bus, Plane, Train, Car, Luggage } from 'lucide-react';
import { Button, Card, Input, Select, Badge } from '../components/UI';

interface TransportListProps {
  navigateTo: (view: ViewState) => void;
  setSelectedTransportId: (id: string) => void;
}

export const TransportList: React.FC<TransportListProps> = ({ navigateTo, setSelectedTransportId }) => {
  const transports = [
    { id: 't1', from: 'Улаанбаатар', fromCode: 'ULN', to: 'Мөрөн', toCode: 'MXV', type: 'plane', company: 'Hunnu Air', logo: 'HM', time: '07:00 - 08:30', duration: '1ц 30м', price: 350000, seats: 5, date: '2024-06-15' },
    { id: 't2', from: 'Улаанбаатар', fromCode: 'ULN', to: 'Даланзадгад', toCode: 'DLZ', type: 'plane', company: 'Aero Mongolia', logo: 'M0', time: '06:20 - 07:40', duration: '1ц 20м', price: 420000, seats: 3, date: '2024-06-15' },
    { id: 't3', from: 'Улаанбаатар', fromCode: 'DRA', to: 'Сайншанд', toCode: 'SAI', type: 'train', company: 'UBTZ', logo: 'TZ', time: '10:30 - 20:30', duration: '10ц 00м', price: 35000, seats: 40, date: '2024-06-15' },
    { id: 't4', from: 'Улаанбаатар', fromCode: 'DRG', to: 'Хархорин', toCode: 'KHR', type: 'bus', company: 'Kharkhorin Exp', logo: 'BUS', time: '09:00 - 15:00', duration: '6ц 00м', price: 40000, seats: 8, date: '2024-06-15' },
    { id: 't5', from: 'Улаанбаатар', fromCode: 'ULN', to: 'Өлгий', toCode: 'ULG', type: 'plane', company: 'MIAT', logo: 'OM', time: '11:00 - 14:00', duration: '3ц 00м', price: 550000, seats: 12, date: '2024-06-15' },
  ];

  const handleSelect = (id: string) => {
    setSelectedTransportId(id);
    navigateTo(ViewState.TRANSPORT_DETAIL);
  };

  const getIcon = (type: string) => {
    if (type === 'plane') return <Plane className="w-5 h-5" />;
    if (type === 'train') return <Train className="w-5 h-5" />;
    if (type === 'car') return <Car className="w-5 h-5" />;
    return <Bus className="w-5 h-5" />;
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-12">
      {/* Filter Bar */}
      <div className="bg-white border-y border-slate-200 py-6 px-4 shadow-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 items-end">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full">
            <div className="relative">
               <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Хаанаас</label>
               <input className="w-full border-slate-200 rounded-lg p-2.5 font-semibold text-slate-800 bg-slate-50" defaultValue="Улаанбаатар" />
            </div>
            <div className="relative">
               <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Хаашаа</label>
               <input className="w-full border-slate-200 rounded-lg p-2.5 font-semibold text-slate-800 bg-slate-50" placeholder="Хот, аймаг..." />
            </div>
            <div>
               <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Огноо</label>
               <input type="date" className="w-full border-slate-200 rounded-lg p-2.5 font-semibold text-slate-800 bg-slate-50" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Тээврийн хэрэгсэл</label>
              <select className="w-full border-slate-200 rounded-lg p-2.5 font-semibold text-slate-800 bg-slate-50">
                <option>Бүгд</option>
                <option>Онгоц</option>
                <option>Автобус</option>
                <option>Галт тэрэг</option>
              </select>
            </div>
            <Button className="h-[46px] self-end" variant="primary">
              <Filter className="w-4 h-4 mr-2" /> Шүүх
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="flex justify-between items-center mb-6">
           <h2 className="text-xl font-bold text-slate-800">Хайлт: Улаанбаатар → Бүгд</h2>
           <span className="text-sm text-slate-500">{transports.length} үр дүн олдлоо</span>
        </div>

        <div className="space-y-4">
          {transports.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="flex flex-col md:flex-row">
                {/* Left: Main Flight Info */}
                <div className="p-6 flex-grow grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Airline / Type Logo */}
                  <div className="md:col-span-3 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-500 border border-slate-200">
                      {item.logo}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{item.company}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5 capitalize bg-slate-100 px-2 py-0.5 rounded-full w-fit">
                        {getIcon(item.type)} {item.type}
                      </div>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="md:col-span-6 flex items-center justify-between md:justify-center gap-8">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">{item.time.split(' - ')[0]}</div>
                      <div className="text-sm font-semibold text-slate-500">{item.fromCode}</div>
                    </div>
                    
                    <div className="flex flex-col items-center w-full max-w-[120px]">
                      <div className="text-xs text-slate-400 mb-1 flex items-center"><Clock className="w-3 h-3 mr-1" /> {item.duration}</div>
                      <div className="w-full h-[2px] bg-slate-200 relative">
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300"></div>
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-500"></div>
                      </div>
                      <div className="text-[10px] text-green-600 font-medium mt-1">Шууд</div>
                    </div>

                    <div className="text-left">
                      <div className="text-2xl font-bold text-slate-900">{item.time.split(' - ')[1]}</div>
                      <div className="text-sm font-semibold text-slate-500">{item.toCode}</div>
                    </div>
                  </div>

                  {/* Amenities (Hidden on mobile) */}
                  <div className="hidden md:flex md:col-span-3 justify-end gap-3 text-slate-400">
                     <Luggage className="w-5 h-5 hover:text-slate-600 cursor-help" />
                     <div className="h-5 w-[1px] bg-slate-200"></div>
                     <Users className="w-5 h-5 hover:text-slate-600 cursor-help" />
                  </div>
                </div>

                {/* Right: Price & Action */}
                <div className="bg-slate-50 p-6 md:w-48 flex flex-row md:flex-col items-center md:justify-center justify-between border-t md:border-t-0 md:border-l border-slate-100">
                   <div className="text-right md:text-center mb-0 md:mb-3">
                     <span className="block text-xl font-bold text-primary-700">{item.price.toLocaleString()}₮</span>
                     <span className="text-xs text-slate-500">нэг хүний</span>
                   </div>
                   <Button onClick={() => handleSelect(item.id)} className="w-auto md:w-full">
                     Сонгох
                   </Button>
                   <div className="hidden md:block text-xs text-red-500 font-medium mt-2">
                     {item.seats} суудал үлдсэн
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
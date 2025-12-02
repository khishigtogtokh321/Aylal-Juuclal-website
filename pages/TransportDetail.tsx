import React from 'react';
import { ViewState } from '../types';
import { ArrowLeft, MapPin, Wifi, Coffee, CheckCircle, Info } from 'lucide-react';
import { Button, Card, Input } from '../components/UI';

interface TransportDetailProps {
  id: string | null;
  navigateTo: (view: ViewState) => void;
  onBack: () => void;
}

export const TransportDetail: React.FC<TransportDetailProps> = ({ id, navigateTo, onBack }) => {
  // Mock data based on ID (simplified)
  const detail = {
    title: 'Улаанбаатар - Мөрөн (Шууд нислэг)',
    company: 'Hunnu Air',
    price: 350000,
    date: '2024-06-15',
    departure: '07:00',
    arrival: '08:30',
    amenities: ['20кг ачаа', 'Хоол, унд', 'Тохилог суудал', 'Агааржуулагч'],
    stops: ['Чингис хаан ОУНБ', 'Мөрөн нисэх буудал'],
    description: 'Хамгийн хурдан, тухтай аялал. Шинэ онгоц, мэргэжлийн баг хамт олон танд үйлчилнэ.'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button onClick={onBack} className="flex items-center text-slate-500 hover:text-slate-800 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Буцах
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">{detail.title}</h1>
                <p className="text-primary-600 font-medium text-lg">{detail.company}</p>
              </div>
              <img src="https://picsum.photos/seed/airline_logo/60/60" alt="logo" className="rounded-full bg-slate-100" />
            </div>

            <div className="flex items-center justify-between bg-slate-50 p-6 rounded-xl mb-8">
               <div className="text-center">
                 <p className="text-sm text-slate-500 mb-1">Явах</p>
                 <p className="text-xl font-bold">{detail.departure}</p>
                 <p className="text-xs text-slate-400">{detail.stops[0]}</p>
               </div>
               <div className="flex-1 px-8 flex items-center">
                 <div className="h-[2px] bg-slate-300 w-full relative">
                    <div className="absolute -top-1.5 left-0 w-3 h-3 bg-slate-400 rounded-full"></div>
                    <div className="absolute -top-1.5 right-0 w-3 h-3 bg-primary-500 rounded-full"></div>
                 </div>
               </div>
               <div className="text-center">
                 <p className="text-sm text-slate-500 mb-1">Ирэх</p>
                 <p className="text-xl font-bold">{detail.arrival}</p>
                 <p className="text-xs text-slate-400">{detail.stops[1]}</p>
               </div>
            </div>

            <h3 className="font-bold text-lg mb-4">Тав тух & Үйлчилгээ</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {detail.amenities.map((am, i) => (
                <div key={i} className="flex items-center text-slate-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {am}
                </div>
              ))}
            </div>

            <h3 className="font-bold text-lg mb-4">Нэмэлт мэдээлэл</h3>
            <p className="text-slate-600 leading-relaxed">{detail.description}</p>
          </Card>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24">
            <h3 className="font-bold text-xl mb-4 text-slate-900">Захиалга хийх</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Огноо:</span>
                <span className="font-medium">{detail.date}</span>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Зорчигчийн тоо</label>
                <select className="w-full border border-slate-300 rounded-lg p-2">
                  <option>1 хүн</option>
                  <option>2 хүн</option>
                  <option>3 хүн</option>
                </select>
              </div>
            </div>
            
            <div className="border-t border-slate-100 pt-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-600">Нэгж үнэ</span>
                <span className="font-medium">{detail.price.toLocaleString()}₮</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-primary-700">
                <span>Нийт дүн</span>
                <span>{detail.price.toLocaleString()}₮</span>
              </div>
            </div>

            <Button fullWidth variant="secondary" onClick={() => navigateTo(ViewState.CHECKOUT)}>
              Захиалах
            </Button>
            <p className="text-xs text-center text-slate-400 mt-3">
              <Info className="w-3 h-3 inline mr-1" />
              Төлбөр төлөгдсөний дараа суудал баталгаажна.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

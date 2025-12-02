import React, { useState } from 'react';
import { ViewState } from '../types';
import { Check, CreditCard, Smartphone, ShieldCheck, Star, ArrowRight, User, Calendar, MapPin } from 'lucide-react';
import { Button, Card, Input, Rating } from '../components/UI';

interface CheckoutProps {
  step: 1 | 2;
  navigateTo: (view: ViewState) => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ step, navigateTo }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    navigateTo(ViewState.PAYMENT);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Төлбөр амжилттай төлөгдлөө!</h1>
        <p className="text-slate-500 mb-8">
          Таны захиалга баталгаажлаа. Захиалгын мэдээлэл таны и-мэйл хаяг руу илгээгдсэн болно.
        </p>
        
        <Card className="max-w-md mx-auto p-6 mb-8 text-left bg-slate-50 border-slate-200">
          <div className="flex justify-between mb-2">
            <span className="text-slate-500">Захиалгын код:</span>
            <span className="font-mono font-bold text-slate-900">ORD-2409-8821</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-slate-500">Төлсөн дүн:</span>
            <span className="font-bold text-primary-700">350,000₮</span>
          </div>
          <div className="flex justify-between">
             <span className="text-slate-500">Огноо:</span>
             <span>2024.06.15</span>
          </div>
        </Card>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 max-w-xl mx-auto mb-8">
          <h3 className="font-bold text-lg mb-4">Сэтгэл ханамжийн үнэлгээ</h3>
          <div className="flex justify-center mb-4">
             <div className="flex space-x-2 text-slate-300 hover:text-yellow-400 cursor-pointer transition-colors">
               {[1,2,3,4,5].map(s => <Star key={s} className="w-8 h-8 hover:fill-current focus:fill-current" />)}
             </div>
          </div>
          <textarea 
            placeholder="Сэтгэгдэл бичих..." 
            className="w-full border border-slate-300 rounded-lg p-3 mb-4 focus:ring-primary-500 focus:border-primary-500"
            rows={3}
          ></textarea>
          <Button onClick={() => navigateTo(ViewState.HOME)}>Үнэлгээ илгээх</Button>
        </div>

        <div className="flex justify-center space-x-4">
          <Button variant="outline" onClick={() => navigateTo(ViewState.HOME)}>Нүүр хуудас</Button>
          <Button variant="ghost">Захиалгын дэлгэрэнгүй</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Stepper */}
      <div className="mb-10">
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center ${step >= 1 ? 'text-primary-600' : 'text-slate-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2 ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-slate-200'}`}>1</div>
            <span className="font-medium">Захиалга</span>
          </div>
          <div className="w-16 h-[2px] bg-slate-200">
            <div className={`h-full bg-primary-500 transition-all ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
          </div>
          <div className={`flex items-center ${step >= 2 ? 'text-primary-600' : 'text-slate-400'}`}>
             <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2 ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-slate-200'}`}>2</div>
            <span className="font-medium">Төлбөр</span>
          </div>
          <div className="w-16 h-[2px] bg-slate-200"></div>
          <div className="flex items-center text-slate-400">
             <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold mr-2 bg-slate-200">3</div>
            <span className="font-medium">Баталгаажуулалт</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side Form */}
        <div className="lg:col-span-2">
          {step === 1 ? (
            <Card className="p-8">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-primary-600" />
                Зорчигчийн мэдээлэл
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input label="Овог" placeholder="Боржигон" />
                <Input label="Нэр" placeholder="Болд" />
                <Input label="Регистрийн дугаар" placeholder="УБ90010101" />
                <Input label="Паспорт / Үнэмлэх" placeholder="E1234567" />
                <Input label="Утасны дугаар" placeholder="9911-0000" />
                <Input label="И-мэйл хаяг" type="email" placeholder="example@mail.com" />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 text-sm text-blue-800 mb-8">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <p>Таны хувийн мэдээлэл нууцлалын бодлогын дагуу хамгаалагдана.</p>
              </div>

              <div className="flex justify-end">
                <Button size="lg" onClick={handleNext}>
                  Төлбөр төлөх <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ) : (
            <Card className="p-8">
               <h2 className="text-xl font-bold mb-6 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-primary-600" />
                Төлбөрийн мэдээлэл
              </h2>
              
              <div className="space-y-4 mb-8">
                <label className="flex items-center p-4 border border-primary-500 bg-primary-50 rounded-lg cursor-pointer transition-colors">
                  <input type="radio" name="payment" className="w-5 h-5 text-primary-600 focus:ring-primary-500" defaultChecked />
                  <span className="ml-3 font-medium flex-1">Банкны карт (Visa/Master/UnionPay)</span>
                  <CreditCard className="w-6 h-6 text-primary-600" />
                </label>
                <label className="flex items-center p-4 border border-slate-200 hover:border-slate-300 rounded-lg cursor-pointer transition-colors">
                  <input type="radio" name="payment" className="w-5 h-5 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-3 font-medium flex-1">QPay (Банкны апп-аар)</span>
                  <Smartphone className="w-6 h-6 text-slate-400" />
                </label>
                <label className="flex items-center p-4 border border-slate-200 hover:border-slate-300 rounded-lg cursor-pointer transition-colors">
                  <input type="radio" name="payment" className="w-5 h-5 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-3 font-medium flex-1">SocialPay</span>
                  <Smartphone className="w-6 h-6 text-slate-400" />
                </label>
              </div>

              <form onSubmit={handlePayment} className="space-y-4 border-t border-slate-100 pt-6">
                <Input label="Картын дугаар" placeholder="0000 0000 0000 0000" required />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Хүчинтэй хугацаа" placeholder="MM/YY" required />
                  <Input label="CVV код" placeholder="123" maxLength={3} required />
                </div>
                <Input label="Кар эзэмшигчийн нэр" placeholder="BOLD SUKHBAATAR" required />
                
                <div className="pt-4">
                   <Button type="submit" fullWidth size="lg" disabled={isLoading}>
                     {isLoading ? 'Уншиж байна...' : '350,000₮ Төлөх'}
                   </Button>
                </div>
              </form>
            </Card>
          )}
        </div>

        {/* Right Side Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24 bg-slate-50 border-slate-200">
            <h3 className="font-bold text-lg mb-4 text-slate-800">Захиалгын тойм</h3>
            
            {/* Transport Item */}
            <div className="mb-4 pb-4 border-b border-slate-200">
               <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Тээвэр</div>
               <div className="font-bold text-slate-900 mb-1">Улаанбаатар - Мөрөн</div>
               <div className="text-sm text-slate-600 mb-1 flex items-center">
                 <Calendar className="w-3 h-3 mr-1" /> 2024.06.15 • 07:00
               </div>
               <div className="text-sm text-slate-600">Hunnu Air • 1 том хүн</div>
               <div className="mt-2 font-medium text-slate-900">350,000₮</div>
            </div>

            {/* Optional Hotel Item (Mock) */}
            <div className="mb-4 pb-4 border-b border-slate-200">
               <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Зочид буудал</div>
               <div className="text-sm text-slate-500 italic">Сонгогдоогүй байна</div>
            </div>

            {/* Optional Insurance */}
             <div className="mb-6 pb-4 border-b border-slate-200">
               <label className="flex items-start space-x-2">
                 <input type="checkbox" className="mt-1 rounded text-primary-600" />
                 <div>
                   <span className="text-sm font-medium text-slate-800">Аялалын даатгал</span>
                   <p className="text-xs text-slate-500">Гэнэтийн ослын даатгал (5,000₮)</p>
                 </div>
               </label>
            </div>

            <div className="flex justify-between items-center mb-2">
               <span className="text-slate-600">Үндсэн үнэ</span>
               <span className="font-medium">350,000₮</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold text-primary-700 mt-4">
               <span>Нийт төлөх</span>
               <span>350,000₮</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
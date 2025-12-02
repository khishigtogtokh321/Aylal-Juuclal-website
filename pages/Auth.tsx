import React, { useState } from 'react';
import { UserRole, ViewState } from '../types';
import { Button, Input, Select, Card } from '../components/UI';
import { UserCheck, Building2, Briefcase } from 'lucide-react';

interface AuthProps {
  onLogin: (role: UserRole) => void;
  navigateTo: (view: ViewState) => void;
}

export const Auth: React.FC<AuthProps> = ({ onLogin, navigateTo }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.TOURIST);

  // Mock form handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex bg-slate-50">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 bg-primary-800 relative items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/mongolia_ger/900/1200" 
          alt="Login Bg" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="relative z-10 text-center text-white px-12">
          <h2 className="text-4xl font-bold mb-6">Тавтай морилно уу</h2>
          <p className="text-lg text-primary-100 leading-relaxed">
            Монгол орны өнцөг булан бүрт хүрэх аялалын төлөвлөгөөгөө өнөөдөр эхлүүлээрэй.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex bg-slate-200 p-1 rounded-xl mb-8">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${isLogin ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Нэвтрэх
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${!isLogin ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Бүртгүүлэх
            </button>
          </div>

          <Card className="p-8">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                {isLogin ? 'Системд нэвтрэх' : 'Шинэ бүртгэл үүсгэх'}
              </h1>
              <p className="text-slate-500 text-sm">
                {isLogin ? 'Бүртгэлтэй хаягаараа нэвтэрнэ үү.' : 'Мэдээллээ үнэн зөв бөглөнө үү.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { role: UserRole.TOURIST, label: 'Жуулчин', icon: UserCheck },
                    { role: UserRole.ORGANIZATION, label: 'Байгууллага', icon: Building2 },
                    { role: UserRole.GOVERNMENT, label: 'Төрийн', icon: Briefcase },
                  ].map((item) => (
                    <div 
                      key={item.role}
                      onClick={() => setSelectedRole(item.role)}
                      className={`cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center text-center transition-all ${selectedRole === item.role ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                      <item.icon className="w-5 h-5 mb-1" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {!isLogin && <Input label="Нэр" placeholder="Бүтэн нэр" required />}
              <Input label="И-мэйл эсвэл Утас" type="text" placeholder="name@example.com" required />
              <Input label="Нууц үг" type="password" placeholder="••••••••" required />
              {!isLogin && <Input label="Нууц үг баталгаажуулах" type="password" placeholder="••••••••" required />}

              {isLogin && (
                <div className="flex justify-end">
                  <a href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Нууц үг мартсан уу?
                  </a>
                </div>
              )}

              <Button type="submit" fullWidth size="lg">
                {isLogin ? 'Нэвтрэх' : 'Бүртгүүлэх'}
              </Button>
            </form>

            {/* Dev Helper for Role Switching on Login too */}
            {isLogin && (
               <div className="mt-6 pt-6 border-t border-slate-100">
                 <p className="text-xs text-center text-slate-400 mb-3">Хөгжүүлэгчийн горим: Дүрээр нэвтрэх</p>
                 <div className="flex gap-2 justify-center">
                    <button onClick={() => onLogin(UserRole.TOURIST)} className="text-xs bg-slate-100 px-2 py-1 rounded hover:bg-slate-200">Жуулчин</button>
                    <button onClick={() => onLogin(UserRole.ORGANIZATION)} className="text-xs bg-slate-100 px-2 py-1 rounded hover:bg-slate-200">Байгууллага</button>
                    <button onClick={() => onLogin(UserRole.GOVERNMENT)} className="text-xs bg-slate-100 px-2 py-1 rounded hover:bg-slate-200">Төрийн албан</button>
                 </div>
               </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ViewState } from '../types';
import { LayoutDashboard, List, ShoppingBag, Settings, Plus, Edit2, Trash2, TrendingUp, Star, Users } from 'lucide-react';
import { Button, Card, Badge, Rating } from '../components/UI';

interface OrgDashboardProps {
  navigateTo: (view: ViewState) => void;
}

export const OrgDashboard: React.FC<OrgDashboardProps> = ({ navigateTo }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'services'>('dashboard');
  const [showAddModal, setShowAddModal] = useState(false);

  // Mock Data
  const services = [
    { id: 1, name: 'Жуулчны бааз - Deluxe Гэр', type: 'Байр', price: 150000, status: 'active', rating: 4.8 },
    { id: 2, name: 'Хөвсгөл нуурын завины аялал', type: 'Үзвэр', price: 45000, status: 'active', rating: 4.5 },
    { id: 3, name: 'Өглөөний цай багц', type: 'Хоол', price: 25000, status: 'inactive', rating: 4.0 },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:block">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center">
            <ShoppingBag className="w-6 h-6 mr-2 text-primary-600" />
            My Travel Org
          </h2>
          <p className="text-xs text-slate-500 mt-1">Байгууллагын удирдлага</p>
        </div>
        <nav className="px-4 space-y-1">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Хяналтын самбар
          </button>
          <button 
            onClick={() => setActiveTab('services')}
            className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === 'services' ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <List className="w-5 h-5 mr-3" />
            Миний үйлчилгээ
          </button>
          <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
            <ShoppingBag className="w-5 h-5 mr-3" />
            Захиалгууд <span className="ml-auto bg-red-100 text-red-600 py-0.5 px-2 rounded-full text-xs">3</span>
          </button>
          <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            Тохиргоо
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-900">Өдрийн тойм</h1>
              <span className="text-sm text-slate-500">2024 оны 6 сарын 15</span>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 border-l-4 border-primary-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Өнөөдрийн захиалга</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">12</h3>
                  </div>
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center text-sm text-green-600 font-medium">
                   <TrendingUp className="w-4 h-4 mr-1" /> +15% өсөлт
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-accent-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Энэ сарын орлого</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">4.5M₮</h3>
                  </div>
                  <div className="p-2 bg-accent-100 rounded-lg text-accent-600">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center text-sm text-green-600 font-medium">
                   <TrendingUp className="w-4 h-4 mr-1" /> +8% өсөлт
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-yellow-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Дундаж үнэлгээ</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">4.8</h3>
                  </div>
                  <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                </div>
                <div className="text-sm text-slate-400 mt-1">Нийт 156 сэтгэгдэл</div>
              </Card>
            </div>

            {/* Chart Area Mock */}
            <Card className="p-6 min-h-[300px]">
               <h3 className="font-bold text-lg mb-6">Захиалгын статистик (Сүүлийн 7 хоног)</h3>
               <div className="flex items-end justify-between h-48 gap-2 px-4">
                  {[40, 65, 30, 80, 55, 90, 75].map((h, i) => (
                    <div key={i} className="w-full bg-primary-100 rounded-t-lg relative group">
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-primary-500 rounded-t-lg transition-all duration-500 group-hover:bg-primary-600" 
                        style={{ height: `${h}%` }}
                      ></div>
                      <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-slate-500">
                        {['Дав', 'Мяг', 'Лха', 'Пүр', 'Баа', 'Бям', 'Ням'][i]}
                      </div>
                    </div>
                  ))}
               </div>
            </Card>
          </div>
        )}

        {activeTab === 'services' && (
           <div className="space-y-6">
             <div className="flex justify-between items-center">
               <h1 className="text-2xl font-bold text-slate-900">Миний үйлчилгээнүүд</h1>
               <Button onClick={() => setShowAddModal(true)}>
                 <Plus className="w-4 h-4 mr-2" /> Шинэ үйлчилгээ
               </Button>
             </div>

             <Card className="overflow-hidden">
               <table className="w-full text-left border-collapse">
                 <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
                   <tr>
                     <th className="p-4">Үйлчилгээний нэр</th>
                     <th className="p-4">Төрөл</th>
                     <th className="p-4">Үнэ</th>
                     <th className="p-4">Төлөв</th>
                     <th className="p-4">Үнэлгээ</th>
                     <th className="p-4 text-right">Үйлдэл</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                   {services.map((s) => (
                     <tr key={s.id} className="hover:bg-slate-50">
                       <td className="p-4 font-medium text-slate-900">{s.name}</td>
                       <td className="p-4 text-slate-600">{s.type}</td>
                       <td className="p-4 font-medium">{s.price.toLocaleString()}₮</td>
                       <td className="p-4">
                         <Badge type={s.status === 'active' ? 'success' : 'warning'}>
                           {s.status === 'active' ? 'Идэвхтэй' : 'Идэвхгүй'}
                         </Badge>
                       </td>
                       <td className="p-4"><Rating stars={s.rating} /></td>
                       <td className="p-4 text-right">
                         <div className="flex justify-end gap-2">
                           <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 hover:text-primary-600">
                             <Edit2 className="w-4 h-4" />
                           </button>
                           <button className="p-2 hover:bg-red-50 rounded-lg text-slate-500 hover:text-red-600">
                             <Trash2 className="w-4 h-4" />
                           </button>
                         </div>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </Card>
           </div>
        )}
      </main>

      {/* Simple Side Panel Mock for Add Service */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowAddModal(false)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-6">Шинэ үйлчилгээ нэмэх</h2>
            <div className="space-y-4 flex-1">
              <div className="space-y-2">
                <label className="text-sm font-medium">Нэр</label>
                <input type="text" className="w-full border rounded-lg p-2" placeholder="Үйлчилгээний нэр" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Төрөл</label>
                <select className="w-full border rounded-lg p-2 bg-white">
                  <option>Байрлах байр</option>
                  <option>Тээвэр</option>
                  <option>Үзвэр</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Үнэ (₮)</label>
                <input type="number" className="w-full border rounded-lg p-2" placeholder="0" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Тайлбар</label>
                <textarea className="w-full border rounded-lg p-2" rows={4}></textarea>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
               <Button variant="outline" fullWidth onClick={() => setShowAddModal(false)}>Цуцлах</Button>
               <Button fullWidth onClick={() => setShowAddModal(false)}>Хадгалах</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
import React, { useState } from 'react';
import { ViewState } from '../types';
import { BarChart2, Smile, FileText, TrendingUp, Users, Map, MoreHorizontal, CheckCircle, RefreshCcw } from 'lucide-react';
import { Button, Card, Badge } from '../components/UI';

interface GovDashboardProps {
  navigateTo: (view: ViewState) => void;
}

export const GovDashboard: React.FC<GovDashboardProps> = ({ navigateTo }) => {
  const [activeTab, setActiveTab] = useState<'stats' | 'licenses'>('stats');

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 hidden md:block flex-shrink-0">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white flex items-center">
            <Map className="w-6 h-6 mr-2 text-primary-500" />
            Tourism Gov
          </h2>
          <p className="text-xs text-slate-500 mt-1">Төрийн удирдлагын систем</p>
        </div>
        <nav className="px-4 space-y-1">
          <button 
            onClick={() => setActiveTab('stats')}
            className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === 'stats' ? 'bg-primary-600 text-white' : 'hover:bg-slate-800'}`}
          >
            <BarChart2 className="w-5 h-5 mr-3" />
            Статистик
          </button>
          <button className="flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
            <Smile className="w-5 h-5 mr-3" />
            Сэтгэл ханамж
          </button>
          <button 
            onClick={() => setActiveTab('licenses')}
            className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === 'licenses' ? 'bg-primary-600 text-white' : 'hover:bg-slate-800'}`}
          >
            <FileText className="w-5 h-5 mr-3" />
            Лиценз, зөвшөөрөл
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'stats' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
               <h1 className="text-2xl font-bold text-slate-900">Улсын хэмжээний статистик</h1>
               <div className="flex gap-2">
                 <select className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm">
                   <option>2024 он</option>
                   <option>2023 он</option>
                 </select>
                 <Button size="sm" variant="outline"><RefreshCcw className="w-4 h-4 mr-2" /> Шинэчлэх</Button>
               </div>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="text-sm text-slate-500 mb-1">Нийт жуулчид</div>
                <div className="text-3xl font-bold text-slate-900">452,102</div>
                <div className="text-xs text-green-600 mt-2 flex items-center font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" /> +12% өнгөрсөн жилээс
                </div>
              </Card>
              <Card className="p-6">
                <div className="text-sm text-slate-500 mb-1">Өнөөдөр ирсэн</div>
                <div className="text-3xl font-bold text-slate-900">1,240</div>
                <div className="text-xs text-slate-400 mt-2">Буянт-Ухаа & Алтанбулаг</div>
              </Card>
              <Card className="p-6">
                <div className="text-sm text-slate-500 mb-1">Үйлчилгээний орлого</div>
                <div className="text-3xl font-bold text-slate-900">12.5 тэрбум</div>
                <div className="text-xs text-green-600 mt-2 flex items-center font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" /> +5% өсөлттэй
                </div>
              </Card>
              <Card className="p-6">
                <div className="text-sm text-slate-500 mb-1">Дундаж сэтгэл ханамж</div>
                <div className="text-3xl font-bold text-primary-600">4.2/5.0</div>
                <div className="text-xs text-slate-400 mt-2">Нийт 50к санал</div>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-slate-800 mb-4">Жуулчид улс орноор</h3>
                <div className="space-y-4">
                  {[
                    { c: 'БНСУ', p: 35, color: 'bg-blue-500' },
                    { c: 'ОХУ', p: 25, color: 'bg-red-500' },
                    { c: 'БНХАУ', p: 20, color: 'bg-yellow-500' },
                    { c: 'Япон', p: 10, color: 'bg-indigo-500' },
                    { c: 'Бусад', p: 10, color: 'bg-slate-300' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700">{item.c}</span>
                        <span className="text-slate-500">{item.p}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5">
                        <div className={`h-2.5 rounded-full ${item.color}`} style={{ width: `${item.p}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-slate-800 mb-4">Бүс нутгийн ачаалал</h3>
                <div className="flex items-end justify-between h-48 gap-4 px-2">
                   {[
                     { l: 'УБ', h: 90 },
                     { l: 'Хөвсгөл', h: 70 },
                     { l: 'Өмнөговь', h: 60 },
                     { l: 'Төв', h: 50 },
                     { l: 'Архангай', h: 45 },
                     { l: 'Увс', h: 30 },
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col items-center w-full group">
                       <div className="w-full bg-primary-100 rounded-t-md relative h-full flex items-end">
                         <div className="w-full bg-primary-500 rounded-t-md group-hover:bg-primary-600 transition-all" style={{ height: `${item.h}%` }}></div>
                       </div>
                       <span className="text-xs text-slate-500 mt-2 font-medium">{item.l}</span>
                     </div>
                   ))}
                </div>
              </Card>
            </div>

            {/* Top Table */}
            <Card className="overflow-hidden">
               <div className="p-4 border-b border-slate-100">
                 <h3 className="font-bold text-slate-800">ТОП 5 Үзвэр үйлчилгээ</h3>
               </div>
               <table className="w-full text-left">
                 <thead className="bg-slate-50 text-xs text-slate-500 uppercase">
                   <tr>
                     <th className="p-4">#</th>
                     <th className="p-4">Нэр</th>
                     <th className="p-4">Байршил</th>
                     <th className="p-4">Хандалт</th>
                     <th className="p-4">Үнэлгээ</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                   {[
                     { id: 1, name: 'Чингис хааны музей', loc: 'Улаанбаатар', hits: '150k', r: 4.9 },
                     { id: 2, name: 'Тэрэлж байгалийн цогцолбор', loc: 'Төв', hits: '120k', r: 4.7 },
                     { id: 3, name: 'Элсэн тасархай', loc: 'Булган', hits: '98k', r: 4.6 },
                     { id: 4, name: 'Амарбаясгалант хийд', loc: 'Сэлэнгэ', hits: '85k', r: 4.8 },
                     { id: 5, name: 'Ёлын ам', loc: 'Өмнөговь', hits: '80k', r: 4.5 },
                   ].map((row) => (
                     <tr key={row.id}>
                       <td className="p-4 text-slate-500">{row.id}</td>
                       <td className="p-4 font-medium">{row.name}</td>
                       <td className="p-4 text-slate-600">{row.loc}</td>
                       <td className="p-4 font-bold text-primary-700">{row.hits}</td>
                       <td className="p-4 flex items-center"><Smile className="w-4 h-4 text-yellow-500 mr-1"/> {row.r}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </Card>
          </div>
        )}

        {activeTab === 'licenses' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Байгууллагын тусгай зөвшөөрөл</h1>
            <Card>
               <table className="w-full text-left">
                 <thead className="bg-slate-50 text-xs text-slate-500 uppercase">
                   <tr>
                     <th className="p-4">Байгууллага</th>
                     <th className="p-4">Үйл ажиллагааны чиглэл</th>
                     <th className="p-4">Лицензийн №</th>
                     <th className="p-4">Төлөв</th>
                     <th className="p-4">Дуусах огноо</th>
                     <th className="p-4 text-right">Үйлдэл</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                   {[
                     { name: 'Жуулчин Трэйвэл ХХК', type: 'Тур оператор', no: 'TO-2023-051', status: 'active', exp: '2025.05.20' },
                     { name: 'Говийн Домог Бааз', type: 'Жуулчны бааз', no: 'C-2022-112', status: 'warning', exp: '2024.07.01' },
                     { name: 'Нүүдэлчин Транс', type: 'Тээвэр', no: 'TR-2023-005', status: 'expired', exp: '2023.12.31' },
                   ].map((row, i) => (
                     <tr key={i} className="hover:bg-slate-50">
                       <td className="p-4 font-medium">{row.name}</td>
                       <td className="p-4 text-slate-600">{row.type}</td>
                       <td className="p-4 font-mono text-xs">{row.no}</td>
                       <td className="p-4">
                         {row.status === 'active' && <Badge type="success">Хүчинтэй</Badge>}
                         {row.status === 'warning' && <Badge type="warning">Дуусах дөхсөн</Badge>}
                         {row.status === 'expired' && <Badge type="error">Хугацаа дууссан</Badge>}
                       </td>
                       <td className="p-4 text-sm">{row.exp}</td>
                       <td className="p-4 text-right">
                         <Button variant="ghost" size="sm"><MoreHorizontal className="w-4 h-4" /></Button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};
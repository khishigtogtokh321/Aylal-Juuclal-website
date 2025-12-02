import React, { useState, useEffect } from 'react';
import { UserRole, ViewState } from '../types';
import { Menu, X, Globe, User, LogOut, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './UI';

interface NavbarProps {
  userRole: UserRole | null;
  onLogout: () => void;
  navigateTo: (view: ViewState) => void;
  currentView: ViewState;
}

export const Navbar: React.FC<NavbarProps> = ({ userRole, onLogout, navigateTo, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Нүүр', view: ViewState.HOME },
    { label: 'Аялал & Үзвэр', view: ViewState.HOME },
    { label: 'Тээвэр', view: ViewState.TRANSPORT_LIST },
    { label: 'Зочид буудал', view: ViewState.ACCOMMODATION_LIST },
  ];

  const handleNavClick = (view: ViewState) => {
    navigateTo(view);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || currentView !== ViewState.HOME ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={() => navigateTo(ViewState.HOME)}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled || currentView !== ViewState.HOME ? 'bg-primary-600 text-white' : 'bg-white/20 backdrop-blur-sm text-white'}`}>
               <Globe className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight ${scrolled || currentView !== ViewState.HOME ? 'text-slate-900' : 'text-white'}`}>MONGOLIA</span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${scrolled || currentView !== ViewState.HOME ? 'text-primary-600' : 'text-slate-200'}`}>Unified System</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.view)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  scrolled || currentView !== ViewState.HOME 
                    ? 'text-slate-600 hover:text-primary-600 hover:bg-slate-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {userRole ? (
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200/20">
                <span className={`text-sm font-medium ${scrolled || currentView !== ViewState.HOME ? 'text-slate-700' : 'text-white'}`}>
                  {userRole === UserRole.ORGANIZATION ? 'Байгууллага' : 
                   userRole === UserRole.GOVERNMENT ? 'Төрийн ажилтан' : 'Жуулчин'}
                </span>
                <Button 
                  variant={scrolled || currentView !== ViewState.HOME ? 'outline' : 'white'} 
                  size="sm" 
                  onClick={onLogout}
                  className={!scrolled && currentView === ViewState.HOME ? '!bg-white/20 !text-white !border-white/40 hover:!bg-white/30' : ''}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Гарах
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className={!scrolled && currentView === ViewState.HOME ? '!text-white hover:!bg-white/10' : ''}
                  onClick={() => navigateTo(ViewState.LOGIN)}
                >
                  Нэвтрэх
                </Button>
                <Button 
                  variant={scrolled || currentView !== ViewState.HOME ? 'primary' : 'white'} 
                  onClick={() => navigateTo(ViewState.LOGIN)}
                >
                  Бүртгүүлэх
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={scrolled || currentView !== ViewState.HOME ? 'text-slate-900' : 'text-white'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-3 absolute w-full shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.view)}
              className="block w-full text-left py-3 px-4 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
            >
              {link.label}
            </button>
          ))}
          <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
            {!userRole ? (
              <>
                 <Button variant="outline" fullWidth onClick={() => { navigateTo(ViewState.LOGIN); setIsOpen(false); }}>Нэвтрэх</Button>
                 <Button variant="primary" fullWidth onClick={() => { navigateTo(ViewState.LOGIN); setIsOpen(false); }}>Бүртгүүлэх</Button>
              </>
            ) : (
              <Button variant="outline" fullWidth onClick={() => { onLogout(); setIsOpen(false); }}>Гарах</Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-white">
          <Globe className="w-6 h-6 text-primary-500" />
          <span className="font-bold text-lg">MONGOLIA TOURISM</span>
        </div>
        <p className="text-sm leading-relaxed text-slate-400">
          Монгол орны байгалийн үзэсгэлэнт газрууд, соёлын өв, түүхэн дурсгалт газруудаар аялах таны найдвартай хөтөч.
        </p>
        <div className="flex space-x-4 pt-2">
          <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-6">Үндсэн цэс</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-primary-500 transition-colors">Нүүр хуудас</a></li>
          <li><a href="#" className="hover:text-primary-500 transition-colors">Аялалын чиглэлүүд</a></li>
          <li><a href="#" className="hover:text-primary-500 transition-colors">Тээврийн үйлчилгээ</a></li>
          <li><a href="#" className="hover:text-primary-500 transition-colors">Зочид буудал, баазууд</a></li>
          <li><a href="#" className="hover:text-primary-500 transition-colors">Эвент арга хэмжээ</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Тусламж</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-primary-500 transition-colors">Түгээмэл асуултууд</a></li>
          <li><a href="#" className="hover:text-primary-500 transition-colors">Аялалын зөвлөмж</a></li>
          <li><a href="#" className="hover:text-primary-500 transition-colors">Визний мэдээлэл</a></li>
          <li><a href="#" className="hover:text-primary-500 transition-colors">Холбоо барих</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Холбоо барих</h4>
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3">
             <div className="mt-1"><MapPinIcon className="w-4 h-4 text-primary-500" /></div>
             <span>Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Төв шуудан</span>
          </div>
          <div className="flex items-center gap-3">
             <Phone className="w-4 h-4 text-primary-500" />
             <span>+976 7700-0000</span>
          </div>
          <div className="flex items-center gap-3">
             <Mail className="w-4 h-4 text-primary-500" />
             <span>info@tourism.mn</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
      <p>&copy; 2024 Mongolian Tourism Unified System. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

const MapPinIcon = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
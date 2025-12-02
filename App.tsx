import React, { useState } from 'react';
import { UserRole, ViewState } from './types';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { TransportList } from './pages/TransportList';
import { TransportDetail } from './pages/TransportDetail';
import { AccommodationList } from './pages/AccommodationList';
import { AccommodationDetail } from './pages/AccommodationDetail';
import { Checkout } from './pages/Checkout';
import { OrgDashboard } from './pages/OrgDashboard';
import { GovDashboard } from './pages/GovDashboard';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  
  // Simple "router" history to allow going back
  const [viewHistory, setViewHistory] = useState<ViewState[]>([]);

  // Shared state for booking flow
  const [selectedTransportId, setSelectedTransportId] = useState<string | null>(null);
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null);

  const navigateTo = (view: ViewState) => {
    setViewHistory(prev => [...prev, currentView]);
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    if (viewHistory.length > 0) {
      const prev = viewHistory[viewHistory.length - 1];
      setViewHistory(prevHist => prevHist.slice(0, -1));
      setCurrentView(prev);
    } else {
      setCurrentView(ViewState.HOME);
    }
  };

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    if (role === UserRole.ORGANIZATION) {
      navigateTo(ViewState.ORG_DASHBOARD);
    } else if (role === UserRole.GOVERNMENT) {
      navigateTo(ViewState.GOV_DASHBOARD);
    } else {
      navigateTo(ViewState.HOME);
    }
  };

  const handleLogout = () => {
    setUserRole(null);
    navigateTo(ViewState.HOME);
  };

  // Render logic based on current view
  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <Home navigateTo={navigateTo} />;
      case ViewState.LOGIN:
        return <Auth onLogin={handleLogin} navigateTo={navigateTo} />;
      case ViewState.TRANSPORT_LIST:
        return <TransportList navigateTo={navigateTo} setSelectedTransportId={setSelectedTransportId} />;
      case ViewState.TRANSPORT_DETAIL:
        return <TransportDetail id={selectedTransportId} navigateTo={navigateTo} onBack={goBack} />;
      case ViewState.ACCOMMODATION_LIST:
        return <AccommodationList navigateTo={navigateTo} setSelectedHotelId={setSelectedHotelId} />;
      case ViewState.ACCOMMODATION_DETAIL:
        return <AccommodationDetail id={selectedHotelId} navigateTo={navigateTo} onBack={goBack} />;
      case ViewState.CHECKOUT:
        return <Checkout step={1} navigateTo={navigateTo} />;
      case ViewState.PAYMENT:
        return <Checkout step={2} navigateTo={navigateTo} />;
      case ViewState.ORG_DASHBOARD:
        return <OrgDashboard navigateTo={navigateTo} />;
      case ViewState.GOV_DASHBOARD:
        return <GovDashboard navigateTo={navigateTo} />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  // Dashboards typically have their own layout, but for simplicity we keep the main nav 
  // unless strictly separate. Org/Gov dashboards might want a different header, 
  // but we will use the conditional rendering inside Navbar for brevity.
  const isDashboard = currentView === ViewState.ORG_DASHBOARD || currentView === ViewState.GOV_DASHBOARD;

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      <Navbar 
        userRole={userRole} 
        onLogout={handleLogout} 
        navigateTo={navigateTo} 
        currentView={currentView}
      />
      <main className="flex-grow w-full">
        {renderView()}
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

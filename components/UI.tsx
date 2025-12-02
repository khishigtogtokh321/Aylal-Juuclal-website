import React from 'react';
import { Star } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg focus:ring-primary-500 border border-transparent",
    secondary: "bg-accent-500 hover:bg-accent-600 text-white shadow-md hover:shadow-lg focus:ring-accent-500 border border-transparent",
    outline: "border border-slate-200 bg-white text-slate-700 hover:border-primary-600 hover:text-primary-600 focus:ring-slate-400",
    ghost: "text-slate-600 hover:text-primary-600 hover:bg-primary-50",
    danger: "bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-500",
    white: "bg-white text-slate-900 hover:bg-slate-50 shadow-md hover:shadow-lg"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string, error?: string }> = ({ label, error, className = '', ...props }) => (
  <div className="w-full">
    {label && <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">{label}</label>}
    <input 
      className={`block w-full rounded-lg border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all outline-none sm:text-sm ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-100' : ''} ${className}`}
      {...props} 
    />
    {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
  </div>
);

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string }> = ({ label, children, className = '', ...props }) => (
  <div className="w-full">
    {label && <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">{label}</label>}
    <div className="relative">
      <select 
        className={`block w-full appearance-none rounded-lg border-slate-200 bg-white px-4 py-2.5 pr-8 text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all outline-none sm:text-sm ${className}`}
        {...props} 
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
      </div>
    </div>
  </div>
);

export const Card: React.FC<{ children: React.ReactNode, className?: string, onClick?: () => void, hoverEffect?: boolean }> = ({ children, className = '', onClick, hoverEffect = false }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-2xl border border-slate-100 overflow-hidden ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1' : 'shadow-sm'} transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
  >
    {children}
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode, type?: 'success' | 'warning' | 'info' | 'error' | 'purple' }> = ({ children, type = 'info' }) => {
  const styles = {
    success: "bg-emerald-50 text-emerald-700 border-emerald-100",
    warning: "bg-amber-50 text-amber-700 border-amber-100",
    info: "bg-sky-50 text-sky-700 border-sky-100",
    error: "bg-rose-50 text-rose-700 border-rose-100",
    purple: "bg-violet-50 text-violet-700 border-violet-100"
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${styles[type]}`}>
      {children}
    </span>
  );
};

export const Rating: React.FC<{ stars: number, count?: number, minimal?: boolean }> = ({ stars, count, minimal = false }) => (
  <div className="flex items-center space-x-1.5">
    <div className="flex items-center bg-yellow-50 px-1.5 py-0.5 rounded text-yellow-700">
      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 mr-1" />
      <span className="text-sm font-bold">{stars}</span>
    </div>
    {!minimal && count && <span className="text-xs text-slate-500 font-medium">{count} үнэлгээ</span>}
  </div>
);
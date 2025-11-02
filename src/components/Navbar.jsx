import React, { useEffect, useState } from 'react';
import { Rocket, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState('system');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, resolve theme preference
    const stored = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextIsDark = stored === 'dark' || (!stored && systemPrefersDark);
    setTheme(stored || 'system');
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle('dark', nextIsDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setTheme(next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-[#0b1220]/60 border-b border-slate-200/60 dark:border-white/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group inline-flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 ring-1 ring-white/10">
            <Rocket size={18} />
          </span>
          <span className="text-lg">PipelineIQ</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Features</a>
          <a href="#solutions" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Solutions</a>
          <a href="#pricing" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm shadow-blue-600/20 ring-1 ring-white/10 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

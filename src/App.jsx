import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CTAFooter from './components/CTAFooter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b1220] dark:text-slate-100 antialiased">
      {/* Background accent */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-x-0 top-[-10%] mx-auto h-[40rem] max-w-4xl rounded-full bg-gradient-to-b from-blue-500/10 via-indigo-500/10 to-transparent blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTAFooter />
      </main>
    </div>
  );
}

export default App;

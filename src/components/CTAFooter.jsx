import React from 'react';
import { Check, Shield, Rocket } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: false,
    features: ['Up to 500 contacts/mo', 'Basic sequences', 'Community support']
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per user / mo',
    highlight: true,
    features: ['Unlimited contacts', 'AI personalization', 'Warm-ups included', 'Priority support']
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: 'for teams',
    highlight: false,
    features: ['SSO & roles', 'CRM sync', 'Dedicated CSM', 'Usage-based pricing']
  }
];

const Tier = ({ name, price, period, features, highlight }) => (
  <div
    className={
      'relative flex flex-col rounded-2xl border p-6 transition-shadow ' +
      (highlight
        ? 'border-blue-500/40 bg-blue-50/50 dark:border-blue-300/30 dark:bg-blue-500/10 shadow-lg shadow-blue-600/10'
        : 'border-slate-200/70 bg-white/70 dark:border-white/10 dark:bg-white/5')
    }
  >
    {highlight && (
      <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm shadow-blue-600/20">
        Most popular
      </span>
    )}
    <div className="flex items-baseline gap-2">
      <div className="text-lg font-semibold tracking-tight">{name}</div>
    </div>
    <div className="mt-3">
      <span className="text-3xl font-bold tracking-tight">{price}</span>
      <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">{period}</span>
    </div>
    <ul className="mt-4 space-y-2 text-sm">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <Check size={16} className="mt-0.5 text-emerald-600" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a
      href="#"
      className={
        'mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ' +
        (highlight
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-600/20 ring-1 ring-white/10 hover:opacity-95'
          : 'border border-slate-300/70 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-900 dark:text-slate-100 hover:bg-white')
      }
    >
      {highlight ? 'Start free trial' : 'Get started'}
    </a>
  </div>
);

const CTAFooter = () => {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Predictable pipeline, simple pricing</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Start free. Upgrade when you’re seeing results. No contracts, cancel anytime.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Tier key={t.name} {...t} />
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 bg-gradient-to-br from-indigo-600 to-blue-600 p-8 text-white shadow-xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium">
                <Shield size={14} /> Compliant and deliverability-safe
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Ready to turn cold outreach into warm conversations?</h3>
              <p className="mt-1 text-sm text-white/90">Join teams who grow faster with better targeting, AI-crafted messages, and inbox-safe warm-ups.</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <Rocket size={16} /> Book a demo
            </a>
          </div>
        </div>

        <footer id="faq" className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-200/70 dark:border-white/10 pt-8 text-sm md:flex-row">
          <div className="text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} PipelineIQ. All rights reserved.</div>
          <nav className="flex flex-wrap items-center gap-5 text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Security</a>
            <a href="#" className="hover:underline">Status</a>
            <a href="#" className="hover:underline">Docs</a>
          </nav>
        </footer>
      </div>
    </section>
  );
};

export default CTAFooter;

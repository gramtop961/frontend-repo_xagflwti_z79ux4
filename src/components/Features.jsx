import React from 'react';
import { Mail, Target, Zap, Shield, BarChart3, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Target,
    title: 'Lead Generation',
    desc: 'Find qualified prospects with firmographic and technographic filters, enriched automatically.',
    points: ['15+ data sources', 'Deduping & enrichment', 'ICP matching']
  },
  {
    icon: Mail,
    title: 'Cold Outreach',
    desc: 'Multi-channel sequences across email and LinkedIn with AI-personalized first lines.',
    points: ['Smart send windows', 'A/B testing', 'Auto follow-ups']
  },
  {
    icon: Zap,
    title: 'Email Warm-ups',
    desc: 'Keep deliverability high with safe warm-up networks and human-like engagement.',
    points: ['Custom ramps', 'Domain monitoring', 'Gmail & Outlook']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    desc: 'Understand what’s working with full-funnel reporting you can act on instantly.',
    points: ['Reply intent labels', 'Sequence health', 'Team leaderboards']
  },
  {
    icon: Shield,
    title: 'Compliance & Safety',
    desc: 'Built-in safeguards for consent, throttling, and compliance with major regulations.',
    points: ['SPF/DKIM checks', 'Unsubscribe handling', 'Rate limits']
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'Share templates, manage permissions, and coordinate with SDRs and AEs seamlessly.',
    points: ['Roles & SSO', 'Shared libraries', 'Commenting']
  }
];

const FeatureCard = ({ icon: Icon, title, desc, points, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: i * 0.05 }}
    className="group relative rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 transition-all hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-0.5"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-blue-500/0 opacity-0 transition-opacity group-hover:opacity-10" />

    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700 dark:text-blue-300">
      <Icon size={22} />
    </div>
    <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
    <ul className="mt-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2">
          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-500" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Logos = () => (
  <div className="mt-12 overflow-hidden">
    <div className="flex animate-[marquee_22s_linear_infinite] gap-10 whitespace-nowrap text-slate-500 dark:text-slate-400 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {['Stripe','Notion','Zapier','HubSpot','Salesforce','Slack','Intercom','Segment','Amplitude','Airtable'].map((name) => (
        <span key={name} className="text-xs tracking-wide opacity-70">{name}</span>
      ))}
    </div>
    <style>
      {`@keyframes marquee { 0%{ transform: translateX(0); } 100%{ transform: translateX(-50%);} }`}
    </style>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Everything you need to win more deals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-slate-600 dark:text-slate-300"
          >
            A complete workflow for prospecting, outreach, and optimization — without duct tape or deliverability risks.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <FeatureCard key={f.title} {...f} i={idx} />
          ))}
        </div>

        <Logos />
      </div>
    </section>
  );
};

export default Features;

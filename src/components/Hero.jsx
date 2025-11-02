import React from 'react';
import { Mail, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Stat = ({ label, value, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay }}
    className="rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-4 backdrop-blur"
  >
    <div className="text-2xl font-semibold tracking-tight">{value}</div>
    <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">{label}</div>
  </motion.div>
);

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated gradient beams */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 5 }}
          transition={{ duration: 1.2 }}
          className="absolute left-[-10%] top-[-20%] h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-purple-500/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: -8 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute right-[-15%] bottom-[-25%] h-[38rem] w-[38rem] rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl"
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 dark:border-blue-300/20 bg-blue-50/60 dark:bg-blue-500/10 px-3 py-1 text-xs text-blue-700 dark:text-blue-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            New: AI-optimized campaigns now available
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
          >
            Scale your pipeline with AI-powered outreach
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300"
          >
            PipelineIQ helps you find, warm up, and convert leads with automated sequences, inbox-safe warm-ups, and real-time insights. Built for SDRs, founders, and modern revenue teams.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 ring-1 ring-white/10 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Start free trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-slate-300/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-5 py-3 text-sm font-medium text-slate-900 dark:text-slate-100 hover:bg-white dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              See features
            </a>
          </motion.div>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
            <Stat label="Avg. reply boost" value="+42%" delay={0.1} />
            <Stat label="Warm-up success" value="99.1%" delay={0.2} />
            <Stat label="Time saved" value="12h/week" delay={0.3} />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400"
          >
            <div className="inline-flex items-center gap-2"><Mail size={16} /> Inbox-safe warmups</div>
            <div className="inline-flex items-center gap-2"><Target size={16} /> Smart lead targeting</div>
            <div className="inline-flex items-center gap-2"><TrendingUp size={16} /> Analytics you can act on</div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 bg-gradient-to-br from-white to-slate-50 dark:from-white/5 dark:to-white/0 p-4 shadow-2xl shadow-blue-600/5"
          >
            {/* Mock dashboard preview */}
            <div className="h-full w-full rounded-xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-slate-900">
              <div className="flex items-center gap-2 border-b border-slate-200/70 dark:border-white/10 px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div className="ml-4 text-xs font-medium text-slate-500 dark:text-slate-400">Campaigns · Q4</div>
              </div>
              <div className="grid h-[calc(100%-40px)] grid-cols-5 gap-4 p-4">
                <div className="col-span-3 rounded-lg border border-slate-200/70 dark:border-white/10 p-4">
                  <div className="text-sm font-medium">Sequence performance</div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="mt-3 h-32 w-full origin-left rounded-md bg-gradient-to-t from-blue-500/20 to-blue-500/0 dark:from-blue-500/30"
                  />
                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                    {['Sent','Opened','Replied'].map((l,i)=> (
                      <div key={l} className="rounded-md border border-slate-200/70 dark:border-white/10 p-3">
                        <div className="text-slate-500 dark:text-slate-400">{l}</div>
                        <div className="mt-1 text-base font-semibold">{[1200, 742, 196][i]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-2 grid grid-rows-2 gap-4">
                  <div className="rounded-lg border border-slate-200/70 dark:border-white/10 p-4">
                    <div className="text-sm font-medium">Warm-up status</div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-green-500/15 text-green-600 dark:text-green-400 inline-flex items-center justify-center font-semibold">99%</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Healthy inbox reputation</div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-slate-200/70 dark:border-white/10 p-4">
                    <div className="text-sm font-medium">Next actions</div>
                    <ul className="mt-2 space-y-2 text-xs">
                      <li className="flex items-center justify-between">
                        <span>Review new prospects</span>
                        <span className="rounded bg-blue-500/10 px-2 py-0.5 text-blue-600 dark:text-blue-400">24</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Approve AI variants</span>
                        <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-indigo-600 dark:text-indigo-400">8</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Schedule follow-ups</span>
                        <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-600 dark:text-emerald-400">12</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Animated ring accent */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pointer-events-none absolute -inset-8 rounded-[28px] border border-blue-500/10"
            />
          </motion.div>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">A preview of the campaign dashboard you’ll use daily.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

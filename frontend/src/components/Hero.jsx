import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto text-center px-6 pt-24 pb-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight"
      >
        Shrink Your Links.
        <br />
        <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Expand Your Reach.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto mt-8 text-lg text-slate-400"
      >
        Nano-Link helps you create secure, lightning-fast short URLs with
        powerful analytics, QR codes, and click tracking—all in one place.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
      >
        <a
          href="#shortener"
          className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
        >
          Start Shortening
        </a>

        <a
          href="#features"
          className="px-8 py-4 rounded-xl border border-slate-700 hover:border-indigo-500 transition font-semibold"
        >
          Learn More
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
      >
        <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
          <h2 className="text-3xl font-bold text-indigo-400">99.9%</h2>
          <p className="text-slate-400 mt-2">Availability</p>
        </div>

        <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
          <h2 className="text-3xl font-bold text-indigo-400">Fast</h2>
          <p className="text-slate-400 mt-2">URL Redirection</p>
        </div>

        <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
          <h2 className="text-3xl font-bold text-indigo-400">Analytics</h2>
          <p className="text-slate-400 mt-2">Real-Time Insights</p>
        </div>
      </motion.div>
    </section>
  );
}
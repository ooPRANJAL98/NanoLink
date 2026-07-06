import { Link2, Github, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center">

            <Link2 className="w-6 h-6 text-white"/>

          </div>

          <div>

            <h1 className="text-xl font-bold text-white">
              Nano-Link
            </h1>

            <p className="text-xs text-slate-400">
              URL Shortener
            </p>

          </div>

        </div>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          <a
            href="#features"
            className="text-slate-300 hover:text-white transition"
          >
            Features
          </a>

          <a
            href="#analytics"
            className="text-slate-300 hover:text-white transition"
          >
            Analytics
          </a>

          <a
            href="#about"
            className="text-slate-300 hover:text-white transition"
          >
            About
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Github
                className="text-slate-300 hover:text-white"
                size={22}
            />
          </a>

        </div>

        {/* Mobile */}

        <button className="md:hidden">

          <Menu className="text-white"/>

        </button>

      </div>

    </motion.nav>
  );
}
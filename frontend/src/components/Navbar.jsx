import { Link2, Github, Menu, LogIn, LogOut, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar({ username, onLoginClick, onLogout }) {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center">
            <Link2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Nano-Link</h1>
            <p className="text-xs text-slate-400">URL Shortener</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#analytics" className="text-slate-300 hover:text-white transition">Analytics</a>
          <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
          <a href="https://github.com/ooPRANJAL98" target="_blank" rel="noreferrer">
            <Github className="text-slate-300 hover:text-white" size={22} />
          </a>

          {username ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-sm text-white">
                <User size={16} className="text-indigo-400" />
                {username}
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 hover:border-red-500 hover:text-red-400 transition text-sm"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-sm font-semibold"
            >
              <LogIn size={16} />
              Login
            </button>
          )}
        </div>

        <button className="md:hidden">
          <Menu className="text-white" />
        </button>
      </div>
    </motion.nav>
  );
}
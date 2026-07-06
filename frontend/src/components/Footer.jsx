import {
  Github,
  Linkedin,
  Mail,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Nano-Link
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              A modern URL shortening platform built using
              React, Spring Boot, PostgreSQL, Redis and Docker.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="#about"
                className="text-slate-400 hover:text-indigo-400 transition"
              >
                About
              </a>

              <a
                href="#shortener"
                className="text-slate-400 hover:text-indigo-400 transition"
              >
                Shorten URL
              </a>

              <a
                href="#features"
                className="text-slate-400 hover:text-indigo-400 transition"
              >
                Features
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Connect
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 hover:bg-indigo-600 transition"
              >
                <Github size={22} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 hover:bg-blue-600 transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="mailto:example@email.com"
                className="p-3 rounded-xl bg-slate-900 hover:bg-red-500 transition"
              >
                <Mail size={22} />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 mt-14 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-sm">
              © {currentYear} Nano-Link. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-3">

              <span className="px-4 py-2 rounded-full bg-slate-900 text-sm">
                React
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-900 text-sm">
                Spring Boot
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-900 text-sm">
                PostgreSQL
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-900 text-sm">
                Redis
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-900 text-sm">
                Docker
              </span>

            </div>

            <div className="flex items-center gap-2 text-slate-500 text-sm">

              Built with

              <Heart
                size={16}
                className="text-red-500 fill-red-500"
              />

              by You

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
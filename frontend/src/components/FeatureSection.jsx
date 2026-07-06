import {
  Zap,
  BarChart3,
  ShieldCheck,
  QrCode,
  Link2,
  Globe,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Generate short links instantly with ultra-fast redirection powered by Spring Boot and Redis.",
    color: "text-yellow-400",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track clicks, monitor traffic, and gain insights into your shortened URLs.",
    color: "text-indigo-400",
  },
  {
    icon: ShieldCheck,
    title: "Secure Links",
    description:
      "Every URL is validated before shortening to ensure reliability and safety.",
    color: "text-green-400",
  },
  {
    icon: QrCode,
    title: "QR Codes",
    description:
      "Generate QR codes instantly and share links across devices with ease.",
    color: "text-pink-400",
  },
  {
    icon: Link2,
    title: "Custom Aliases",
    description:
      "Create memorable short links like nano-link.io/portfolio instead of random codes.",
    color: "text-cyan-400",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Your links work anywhere in the world with fast and reliable redirects.",
    color: "text-orange-400",
  },
];

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold text-white">
          Powerful Features
        </h2>

        <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-lg">
          Nano-Link isn't just another URL shortener.
          It's a modern platform built with performance,
          security, and analytics in mind.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                y: -6,
              }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg hover:border-indigo-500 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center ${feature.color}`}
              >
                <Icon size={32} />
              </div>

              <h3 className="text-2xl font-semibold mt-7 text-white">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
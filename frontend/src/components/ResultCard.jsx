import { useState } from "react";
import {
  Copy,
  Check,
  ExternalLink,
  Link2,
  CheckCircle,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

import AnalyticsCard from "./AnalyticsCard";

export default function ResultCard({
  result,
  analytics,
  analyticsLoading,
  fetchAnalytics,
}) {
  const [copied, setCopied] = useState(false);

  // Backend endpoint
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(result.shortUrl)}`;
  const copy = () => {
    navigator.clipboard.writeText(result.shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto mt-10 px-6"
    >
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

        {/* Success Header */}
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500" size={30} />

          <div>
            <h2 className="text-2xl font-bold text-white">
              Link Created Successfully
            </h2>

            <p className="text-slate-400 text-sm">
              Your short URL is ready to use.
            </p>
          </div>
        </div>

        {/* Original URL */}
        <div className="mt-8">
          <p className="text-slate-500 text-sm mb-2">
            Original URL
          </p>

          <div className="bg-slate-950 border border-slate-700 rounded-xl p-4 break-all text-slate-300">
            {result.originalUrl}
          </div>
        </div>

        {/* Short URL */}
        <div className="mt-6">
          <p className="text-slate-500 text-sm mb-2">
            Short URL
          </p>

          <div className="flex flex-col md:flex-row gap-4">

            <a
              href={result.shortUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-slate-950 border border-indigo-500 rounded-xl px-5 py-4 text-indigo-400 break-all hover:underline"
            >
              {result.shortUrl}
            </a>

            <button
              onClick={copy}
              className="px-5 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy
                </>
              )}
            </button>

            <a
              href={result.shortUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} />
              Open
            </a>

          </div>
        </div>

        {/* Short Code */}
        <div className="mt-6 flex items-center gap-3">
          <Link2 className="text-indigo-400" />

          <span className="text-slate-400">
            Short Code :
          </span>

          <span className="font-mono text-white">
            {result.shortCode}
          </span>
        </div>

        {/* QR Code */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            QR Code
          </h3>

          <img
            src={qrUrl}
            alt="QR Code"
            className="w-52 h-52 bg-white rounded-xl p-2"
          />
        </div>

        {/* Analytics */}
        <div className="mt-8">

          <button
            onClick={fetchAnalytics}
            disabled={analyticsLoading}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 hover:border-indigo-500 transition"
          >
            <BarChart3 size={18} />

            {analyticsLoading
              ? "Loading Analytics..."
              : "View Analytics"}
          </button>

          {analytics && (
            <div className="mt-6">
              <AnalyticsCard analytics={analytics} />
            </div>
          )}

        </div>

      </div>
    </motion.section>
  );
}

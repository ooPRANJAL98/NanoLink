import { motion } from "framer-motion";
import {
  MousePointerClick,
  Link2,
  TrendingUp,
} from "lucide-react";

export default function AnalyticsCard({ analytics }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Analytics Dashboard
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        {/* Total Clicks */}

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500 transition">

          <MousePointerClick
            className="text-indigo-400 mb-3"
            size={28}
          />

          <p className="text-slate-400 text-sm">
            Total Clicks
          </p>

          <h3 className="text-4xl font-bold mt-2 text-white">
            {analytics.totalClicks}
          </h3>

        </div>

        {/* Short Code */}

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500 transition">

          <Link2
            className="text-indigo-400 mb-3"
            size={28}
          />

          <p className="text-slate-400 text-sm">
            Short Code
          </p>

          <h3 className="text-xl font-mono mt-2 break-all text-white">
            {analytics.shortCode}
          </h3>

        </div>

        {/* Status */}

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-green-500 transition">

          <TrendingUp
            className="text-green-400 mb-3"
            size={28}
          />

          <p className="text-slate-400 text-sm">
            Status
          </p>

          <h3 className="text-xl font-bold mt-2 text-green-400">
            Active
          </h3>

        </div>

      </div>

      {/* Summary */}

      <div className="mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-white mb-3">
          Link Summary
        </h3>

        <div className="space-y-3">

          <div className="flex justify-between">

            <span className="text-slate-400">
              Short Code
            </span>

            <span className="font-mono text-white">
              {analytics.shortCode}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-slate-400">
              Total Clicks
            </span>

            <span className="font-semibold text-indigo-400">
              {analytics.totalClicks}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-slate-400">
              Current Status
            </span>

            <span className="text-green-400 font-semibold">
              Active
            </span>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
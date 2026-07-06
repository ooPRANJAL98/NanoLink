import { motion } from "framer-motion";

export default function StatCard({
  icon: Icon,
  title,
  value,
  color = "text-indigo-400",
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -5,
      }}
      transition={{ duration: 0.2 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-indigo-500"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 ${color}`}>
            {value}
          </h2>

        </div>

        <div className="bg-slate-800 p-4 rounded-xl">

          <Icon className={color} size={28} />

        </div>

      </div>
    </motion.div>
  );
}
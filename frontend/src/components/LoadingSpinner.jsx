import { motion } from "framer-motion";

export default function LoadingSpinner({
  text = "Generating secure link..."
}) {
  return (
    <div className="flex flex-col items-center justify-center py-8">

      {/* Spinner */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent"
      />

      {/* Loading Text */}

      <motion.p
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="mt-5 text-slate-400 text-sm"
      >
        {text}
      </motion.p>
    </div>
  );
}
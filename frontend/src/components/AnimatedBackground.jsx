import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const circles = [
    {
      size: 320,
      top: "5%",
      left: "-8%",
      duration: 18,
      delay: 0,
    },
    {
      size: 250,
      top: "65%",
      right: "-5%",
      duration: 22,
      delay: 1,
    },
    {
      size: 180,
      top: "25%",
      left: "70%",
      duration: 15,
      delay: 2,
    },
    {
      size: 150,
      top: "75%",
      left: "20%",
      duration: 17,
      delay: 3,
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      {/* Background Gradient */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

      {/* Animated Circles */}

      {circles.map((circle, index) => (
        <motion.div
          key={index}
          initial={{
            y: -20,
            opacity: 0.5,
          }}
          animate={{
            y: [0, 35, 0],
            x: [0, 20, 0],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: circle.duration,
            delay: circle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-indigo-600/20 blur-3xl"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            right: circle.right,
          }}
        />
      ))}

      {/* Grid Overlay */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
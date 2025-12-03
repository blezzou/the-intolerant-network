"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// NOTE: You can replace the font by importing a Google Font via next/font later.
// For now I simulate a compact gothic/tech style with heavy shadows.

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black text-white select-none">
      {/* INTENSE HELL BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep gradient base */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-red-950 via-black to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Lava pulses */}
        <motion.div
          className="absolute -inset-40 bg-red-800 blur-[200px] opacity-40 rounded-full"
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        {/* Vertical energetic beams */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-[2px] h-full bg-red-600/20"
            style={{ left: `${15 + i * 15}%` }}
            animate={{ opacity: [0.1, 0.5, 0.1], height: ["60%", "100%", "60%"] }}
            transition={{ duration: 3 + i, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}

        {/* Floating sparks */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400/80 rounded-full shadow-md shadow-red-500"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -20 - Math.random() * 30],
              opacity: [1, 0],
            }}
            transition={{ duration: 1 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6">
        {/* STRAIGHT, COMPACT, HEAVY 3D TITLE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center font-black tracking-tight leading-none text-[3.5rem] sm:text-[5rem]"
          style={{
            fontFamily: "'Black Ops One', sans-serif", // You can swap with an imported gothic font
            color: "#ffdda6",
            textShadow:
              "0px 1px 0px #ffbd6b, 0px 2px 0px #ff9f45, 0px 3px 0px #ff7a1c, 0px 4px 0px #d45100, 0px 5px 15px rgba(255,80,0,0.7), 0px 0px 35px rgba(255,0,0,0.7)",
          }}
        >
          The Intolerant Network
        </motion.h1>

        {/* SMOOTH SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="w-full max-w-xl"
        >
          <div className="relative group">
            <input
              type="text"
              placeholder="Rechercher…"
              className="w-full rounded-2xl border border-red-700/50 bg-black/40 px-5 py-3 text-lg text-neutral-200 shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-700/50 backdrop-blur-md group-hover:border-red-500/80"
            />
            <div className="absolute inset-0 rounded-2xl opacity-10 group-hover:opacity-25 bg-gradient-to-r from-red-600 to-orange-500 blur-xl transition-all duration-300" />
          </div>
        </motion.div>

        {/* NAVIGATION BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex flex-wrap gap-6 pt-4 items-center justify-center"
        >
        </motion.div>
      </div>
    </main>
  );
}
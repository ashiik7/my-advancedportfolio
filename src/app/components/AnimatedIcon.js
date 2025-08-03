"use client";
import { motion } from "framer-motion";

export default function AnimatedIcon() {
  return (
    <section className="py-20 flex justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="w-24 h-24 bg-purple-700 rounded-full flex items-center justify-center shadow-xl"
      >
        <span className="text-4xl">⌛</span>
      </motion.div>
    </section>
  );
}

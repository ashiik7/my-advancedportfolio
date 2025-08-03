"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-8">
      {/* Left Content */}
      <div className="text-left max-w-2xl">
        {/* Hello I am */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold mb-4 leading-relaxed"
        >
          Hello, I am{" "}
          <span className="px-3 py-1 border-2 border-violet-500 rounded-full">
            Ashik Kishor
          </span>
        </motion.h1>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-relaxed text-white"
        >
          A Developer Who Builds <br />
          <span className="text-violet-400">Experiments from Scratch</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-300 leading-relaxed"
        >
          I'm constantly learning and exploring new technologies to stay ahead
          in the ever-evolving world of software development!
          <br />
          <span className="mt-2 block text-gray-300">
            Currently, I'm an Open Source Contributor at{" "}
            <span className="text-blue-500">Github</span>
          </span>
        </motion.p>
      </div>

      {/* Avatar with Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mt-10 md:mt-0 md:ml-16"
      >
        {/* Violet Glow */}
        <div className="absolute inset-0 rounded-full bg-violet-600 opacity-50 blur-2xl sm:blur-3xl scale-110 sm:scale-125"></div>

        {/* Avatar */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-violet-500 shadow-lg">
          <Image
            src="/avatar.png" // Ensure avatar.png is in the public folder
            alt="Ashik Kishor"
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

















"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Import icons for opportunities
import { FaLaptopCode, FaHandshake, FaLightbulb } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";

export default function Opportunities() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Opportunities list
  const opportunities = [
    {
      title: "Freelance Projects",
      description: "Available for creative and impactful freelance collaborations.",
      icon: <FaLaptopCode className="text-blue-400 text-6xl" />,
    },
    {
      title: "Internships",
      description: "Eager to learn and contribute through hands-on internship roles.",
      icon: <MdOutlineWork className="text-yellow-400 text-6xl" />,
    },
    {
      title: "Partnerships",
      description: "Open to partnerships for building innovative solutions together.",
      icon: <FaHandshake className="text-green-400 text-6xl" />,
    },
    {
      title: "Mentorship",
      description: "Looking for guidance from experienced developers and mentors.",
      icon: <GiTeacher className="text-purple-400 text-6xl" />,
    },
    {
      title: "Ideas & Collaboration",
      description: "Excited to brainstorm and bring new ideas to life with like-minded people.",
      icon: <FaLightbulb className="text-pink-400 text-6xl" />,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center text-white p-8 relative overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="text-6xl font-bold mb-12 z-10"
      >
        <span className="text-gray-300">Opportunities</span>
      </motion.h2>

      {/* Opportunity Cards */}
      <motion.div
        className="flex gap-8 flex-wrap justify-center z-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {opportunities.map((opportunity, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            drag
            dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileDrag={{
              rotate: 360,
              transition: { duration: 1, repeat: Infinity, ease: "linear" },
            }}
            className="w-72 h-72 flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl cursor-pointer transform rotate-12 p-6"
          >
            {opportunity.icon}
            <h3 className="mt-4 text-xl font-bold text-black">{opportunity.title}</h3>
            <p className="mt-2 text-center text-gray-700 text-sm">{opportunity.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="mt-12 text-lg text-gray-400 z-10 text-center"
      >
        Open to exciting challenges and collaborations that push my boundaries.
      </motion.p>
    </section>
  );
}


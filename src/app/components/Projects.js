"use client";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaGithub } from "react-icons/fa";
import { SiDjango, SiNextdotjs } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
      icon: <SiNextdotjs className="text-6xl text-gray-200" />
    },
    {
      title: "E-Commerce App",
      description: "Full-stack app with Django backend and React frontend.",
      icon: <SiDjango className="text-6xl text-green-500" />
    },
    {
      title: "Python Automation Scripts",
      description: "Automating tasks using Python and GitHub Actions.",
      icon: <FaPython className="text-6xl text-yellow-400" />
    },
    {
      title: "Open Source Contributions",
      description: "Fixing bugs and adding features to community projects.",
      icon: <FaGithub className="text-6xl text-gray-400" />
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white p-10">
      {/* Heading */}
      <h2 className="text-5xl font-bold mb-12">
        My <span className="text-gray-300">Projects</span>
      </h2>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-72 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {project.icon}
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Follow Button */}
      <a
        href="https://github.com/ashiik7"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
      >
        Follow on GitHub
      </a>
    </section>
  );
}




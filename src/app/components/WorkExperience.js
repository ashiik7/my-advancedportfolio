"use client";
import { motion } from "framer-motion";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Freelance Developer",
      company: "Self-employed",
      duration: "2023 – Present",
      description:
        "Building modern web applications with Next.js, Tailwind CSS, and Django backend. Focused on creating fast, responsive, and visually appealing projects."
    },
    {
      title: "Open Source Contributor",
      company: "GitHub",
      duration: "2022 – 2023",
      description:
        "Contributed to open-source projects, fixed bugs, and added new features to libraries I frequently use."
    },
    {
      title: "Web Development",
      company: "Self-employed",
      duration: "2024 – 2025",
      description:
        "Worked on front-end development, implemented UI components, and collaborated with backend developers to deliver product features."
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white p-6 sm:p-10">
      {/* Header */}
      <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-center">
        Work <span className="text-gray-300">Experience</span>
      </h2>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line (hidden on small screens) */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full"></div>

        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } w-full`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className={`
                bg-white rounded-2xl shadow-xl p-6 text-black
                w-full md:w-[calc(50%-2rem)]
              `}
            >
              <h3 className="text-xl sm:text-2xl font-bold">{exp.title}</h3>
              <p className="text-yellow-500 font-semibold">{exp.company}</p>
              <p className="text-gray-600 text-sm">{exp.duration}</p>
              <p className="mt-3 text-gray-700 text-sm">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}





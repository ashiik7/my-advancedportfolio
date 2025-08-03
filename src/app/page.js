import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Opportunities from "./components/Opportunities";
import AnimatedIcon from "./components/AnimatedIcon";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0118] text-white min-h-screen">
      <Hero />
      <WorkExperience />
      <Opportunities />
      <AnimatedIcon />
      <Projects />
      <Skills />

      {/* Link to Blog */}
      <section className="text-center py-10">
        <a
          href="/blog"
          className="bg-purple-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-600 transition"
        >
          Read My Blog →
        </a>
      </section>

      <Contact />
    </main>
  );
}






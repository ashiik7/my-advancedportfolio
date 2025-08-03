"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaFacebookF, FaMedium } from "react-icons/fa";

export default function Contact() {
  const [time, setTime] = useState("");
  const [temperature, setTemperature] = useState("");

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        hour12: true
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Fetch temperature for Kollam
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=8.8932&longitude=76.6141&current_weather=true")
      .then(res => res.json())
      .then(data => setTemperature(data.current_weather?.temperature || "N/A"))
      .catch(() => setTemperature("N/A"));
  }, []);

  return (
    <>
      {/* CONTACT SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between text-white p-6 sm:p-12 gap-12">
        {/* LEFT: Let's Connect */}
        <div className="flex-1 flex flex-col items-start space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-6xl font-bold leading-tight">Let’s Connect</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Always open to new opportunities and collaborations.
            Reach out through any of the platforms below.
          </p>
          <div className="flex gap-6 sm:gap-10 justify-center md:justify-start mt-6 flex-wrap">
            <a href="https://x.com/kishorashik" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-4xl sm:text-5xl hover:text-blue-400 cursor-pointer transition" />
            </a>
            <a href="https://www.instagram.com/ashiik_7/?igsh=MXZjM2xlbWJoemR2aw%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-4xl sm:text-5xl hover:text-pink-400 cursor-pointer transition" />
            </a>
            <a href="https://github.com/ashiik7" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl sm:text-5xl hover:text-gray-400 cursor-pointer transition" />
            </a>
            <a href="https://www.facebook.com/ashik.kishor.77/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-4xl sm:text-5xl hover:text-blue-600 cursor-pointer transition" />
            </a>
            <a href="https://medium.com/@ashikkishor" target="_blank" rel="noopener noreferrer">
              <FaMedium className="text-4xl sm:text-5xl hover:text-green-400 cursor-pointer transition" />
            </a>
          </div>
        </div>

        {/* RIGHT: Skills, Experience, GitHub */}
        <div className="flex-1 flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
          <div className="w-full sm:w-1/3">
            <h3 className="text-2xl sm:text-3xl font-semibold hover:text-yellow-400 transition">Skills</h3>
            <p className="text-gray-400 max-w-xs mx-auto mt-2 text-sm sm:text-base">
              Frontend, backend, and design tools to build modern applications.
            </p>
          </div>
          <div className="w-full sm:w-1/3">
            <h3 className="text-2xl sm:text-3xl font-semibold hover:text-yellow-400 transition">Experience</h3>
            <p className="text-gray-400 max-w-xs mx-auto mt-2 text-sm sm:text-base">
              Practical learning through projects and full-stack development.
            </p>
          </div>
          <div className="w-full sm:w-1/3">
            <h3 className="text-2xl sm:text-3xl font-semibold hover:text-yellow-400 transition">GitHub</h3>
            <p className="text-gray-400 max-w-xs mx-auto mt-2 text-sm sm:text-base">
              Explore my repositories and see how I experiment and build.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="text-gray-300 text-center py-8 px-4">
        <p className="mt-2">© 2025 Ashik Kishor</p>
        <p className="mt-2">
          Powered by <span className="text-white">Vercel</span>, <span className="text-white">Next.js</span>, and <span className="text-white">GitHub</span>.
        </p>
        <p className="mt-2">
          Kollam, Kerala {time} GMT+5:30 • Current temperature in Kollam: {temperature}°C
        </p>
      </footer>
    </>
  );
}










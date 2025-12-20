import React from "react";
import ProjectCard from "./ProjectCard";

import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log("Dark mode:", darkMode); // Debug ke liye
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */} 
         <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-500 dark:text-cyan-400">Mohammad Akeel</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border border-cyan-500 dark:border-cyan-400 rounded-md text-sm hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-white transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </header>

        {/* Hero Section */}
        <section className="mt-12 text-center">
          <img
            src="public/Akeel-Portfolio.jpg" // Public folder se load karo; agar file nahi hai, to placeholder use karo
            alt="Mohammad Akeel"
            className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-cyan-500 dark:border-cyan-400 shadow-lg"
          />
          <h2 className="text-3xl font-semibold mt-4 text-purple-600 dark:text-purple-400">Data Science Enthusiast</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            React Developer | Data Science | Machine Learning
          </p>
          <a
            href="/Sample_Resume.pdf"
            download
            className="inline-block mt-5 px-6 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded-lg hover:bg-cyan-700 dark:hover:bg-cyan-600 transition"
          >
            📄 Download Resume
          </a>
        </section>

        <div className="flex justify-center gap-6 mt-4">
          {/* <a href="mailto:akeelkhan3499@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">📩 Email</a> */}
          <a href="https://www.linkedin.com/in/akeel-khan-699140306" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">🔗 LinkedIn</a>
          <a href="https://wa.me/917983717510" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline">💬 WhatsApp</a>
        </div>

        {/* About Me */}
        <section className="mt-16 p-6 rounded-lg border bg-gray-50 dark:bg-gray-800 transition-colors">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-400">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Hi, I’m <span className="font-medium text-blue-600 dark:text-blue-400">Akeel</span> — a passionate developer focused on crafting <span className="font-semibold text-purple-500 dark:text-purple-400">clean, efficient, and user-friendly digital products</span>. Skilled in <span className="text-green-600 dark:text-green-400 font-medium">Java, C++, Flutter, React</span>, and <span className="text-yellow-500 dark:text-yellow-400 font-medium">AI technologies</span>, I aim to create <span className="text-pink-500 dark:text-pink-400 font-semibold">smarter, scalable, and aesthetic solutions</span>.
          </p>
        </section>

        {/* Services */}
        <section className="mt-16 p-6 rounded-lg border bg-gray-50 dark:bg-gray-800 transition-colors">
          <h3 className="text-2xl font-semibold mb-6 text-cyan-500 dark:text-cyan-400">Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "🤖 AI Chatbots & Automation", desc: "Intelligent ChatGPT bots and automation systems for businesses to streamline processes and improve efficiency." },
              { title: "🌐 Web & API Integration", desc: "Full-stack website builds and API connections for seamless digital solutions." },
              { title: "🛠️ Code Review & Optimization", desc: "Debugging, performance tuning, and optimization for cleaner, faster, and more efficient code." },
              { title: "📊 Business Automation", desc: "Automating business operations using AI & API systems to save time, reduce errors, and boost productivity." }
            ].map(service => (
              <div key={service.title} className="p-4 border rounded-lg hover:shadow-lg transition hover:border-cyan-400 dark:hover:border-cyan-300 bg-white dark:bg-gray-700">
                <h4 className="font-medium text-lg flex items-center gap-2 text-cyan-600 dark:text-cyan-400">{service.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>
          <br />
        {/* Skills */}
         <section className="mb-4">
  <h3 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-400">Skills</h3>
  <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
    <li className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:scale-105 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-400 hover:ring-2 hover:ring-cyan-400/50 transition-all duration-300 ease-in-out cursor-pointer">
      Java
    </li>
    <li className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:scale-105 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-400 hover:ring-2 hover:ring-cyan-400/50 transition-all duration-300 ease-in-out cursor-pointer">
      C++
    </li>
    <li className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:scale-105 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-400 hover:ring-2 hover:ring-cyan-400/50 transition-all duration-300 ease-in-out cursor-pointer">
      Python
    </li>
    <li className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:scale-105 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-400 hover:ring-2 hover:ring-cyan-400/50 transition-all duration-300 ease-in-out cursor-pointer">
      Science
    </li>
    <li className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:scale-105 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-400 hover:ring-2 hover:ring-cyan-400/50 transition-all duration-300 ease-in-out cursor-pointer">
      CSS
    </li>
    <li className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:scale-105 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-400 hover:ring-2 hover:ring-cyan-400/50 transition-all duration-300 ease-in-out cursor-pointer">
      React.js
    </li>
    <li className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:scale-105 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-400 hover:ring-2 hover:ring-cyan-400/50 transition-all duration-300 ease-in-out cursor-pointer">
      Web Development
    </li>
    <li className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg text-center bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:scale-105 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-400 hover:ring-2 hover:ring-cyan-400/50 transition-all duration-300 ease-in-out cursor-pointer">
      AI(ML)
    </li>
  </ul>
</section>
   

        {/* Projects */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-500 dark:text-cyan-400">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-700 hover:shadow-lg transition">
              <h4 className="font-medium text-purple-600 dark:text-purple-400">Fraud Detection System</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Machine Learning based fraud detection using Python.</p>
            </div>
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-700 hover:shadow-lg transition">
              <h4 className="font-medium text-purple-600 dark:text-purple-400">Portfolio Website</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Personal portfolio built with React, Vite & Tailwind CSS.</p>
            </div>
          </div>
        </section>


        {/* Connect Section */}  
          <section className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">Get in Touch</h3>
  <p className="text-gray-600 dark:text-gray-300 mt-2 text-center max-w-2xl mx-auto">
    Want a quick quote or have a project idea? Send me a message — I usually reply within 24 hours.
  </p>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="p-6 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out relative z-10">
      <h4 className="font-semibold text-lg text-gray-800 dark:text-white flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        Email
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=akeelkhan3499@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200 relative z-50"
          onClick={(e) => e.stopPropagation()}
        >
          akeelkhan3499@gmail.com
        </a>
      </p>
    </div>

    <div className="p-6 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
      <h4 className="font-semibold text-lg text-gray-800 dark:text-white flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
        LinkedIn
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        <a 
          href="https://www.linkedin.com/in/akeel-khan-699140306" 
          target="_blank" 
          rel="noreferrer" 
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
        >
          View profile
        </a>
      </p>
    </div>
  </div>

  <div className="mt-8">
    <form 
      onSubmit={(e) => { 
        e.preventDefault(); 
        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;
        const subject = `Project Inquiry from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        window.location.href = `mailto:akeelkhan3499@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }} 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <input 
        required 
        placeholder="Your Name" 
        className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
      />
      <input 
        required 
        type="email"
        placeholder="Your Email" 
        className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" 
      />
      <textarea 
        required 
        placeholder="Brief about project" 
        className="md:col-span-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none" 
        rows="5" 
      />
      <button 
        type="submit" 
        className="md:col-span-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Let's Work Together
      </button>
    </form>
  </div>
</section>

        
           
           

        {/* Footer */}
        <footer className="mt-20 text-center text-sm opacity-70 text-cyan-500 dark:text-cyan-400">
          © {new Date().getFullYear()} <span className="font-medium">Mohammad Akeel</span> • Built with ❤️ using React & Tailwind
        </footer>
      </main>
    </div>
  );
}

export default App;



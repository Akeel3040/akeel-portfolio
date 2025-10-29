import React from "react";
import ProjectCard from "./ProjectCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">Mohammad Akeel</h1>
          <p className="text-gray-600 mt-2">
            B.Tech Student at Lloyd Institute of Engineering & Technology • Passionate Developer
          </p>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            Hi, I’m Akeel — a dedicated and creative developer skilled in Java, C++, C, Flutter, CSS, JavaScript, and React. 
            I’m passionate about building functional, modern, and user-friendly digital experiences. I also work with SIML-based automation.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <li className="p-4 border rounded-lg text-center">Java</li>
            <li className="p-4 border rounded-lg text-center">C++</li>
            <li className="p-4 border rounded-lg text-center">C</li>
            <li className="p-4 border rounded-lg text-center">Flutter</li>
            <li className="p-4 border rounded-lg text-center">CSS</li>
            <li className="p-4 border rounded-lg text-center">React.js</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Services</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="p-4 border rounded-lg">
              <h4 className="font-medium">AI Chatbots & Automation</h4>
              <p className="text-sm text-gray-600 mt-1">ChatGPT-based chatbots, Telegram bots, automation scripts in Python.</p>
            </li>
            <li className="p-4 border rounded-lg">
              <h4 className="font-medium">Web & API Integration</h4>
              <p className="text-sm text-gray-600 mt-1">Responsive web interfaces, API integration, simple backend setups.</p>
            </li>
            <li className="p-4 border rounded-lg">
              <h4 className="font-medium">Code Review & Support</h4>
              <p className="text-sm text-gray-600 mt-1">Bug fixes, performance improvements and deployment support.</p>
            </li>
          </ul>
        </section>

        <section className="mt-12 bg-white p-6 rounded-lg border">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p className="text-gray-600 mt-2">
            Want a quick quote or have a project idea? Send me a message — I usually reply within 24 hours.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">Email</h4>
              <p className="text-sm text-gray-600 mt-1">
                <a href="mailto:akeelkhan3499@gmail.com" className="text-blue-600">akeelkhan3499@gmail.com</a>
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">LinkedIn</h4>
              <p className="text-sm text-gray-600 mt-1">
                <a href="https://www.linkedin.com/in/akeel-khan-699140306" target="_blank" rel="noreferrer" className="text-blue-600">View profile</a>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:akeelkhan3499@gmail.com'; }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required placeholder="Your Name" className="p-3 border rounded" />
              <input required placeholder="Your Email" className="p-3 border rounded" />
              <textarea required placeholder="Brief about project" className="md:col-span-2 p-3 border rounded" rows="4" />
              <button type="submit" className="md:col-span-2 bg-blue-600 text-white py-2 rounded">Let's Work Together</button>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mohammad Akeel — Built with ❤️ • Available for freelance work
        </footer>
      </main>
    </div>
  );
}

export default App;

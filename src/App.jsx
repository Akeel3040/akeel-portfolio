import useDarkMode from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [darkMode, toggleTheme] = useDarkMode();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-ink-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-600 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Services />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

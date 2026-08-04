import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "akeel-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return false;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Toggles the `dark` class on <html> (Tailwind darkMode: "class"),
 * persists the choice, and follows the OS setting until the user picks one.
 */
export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    root.style.colorScheme = darkMode ? "dark" : "light";
    window.localStorage.setItem(STORAGE_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  // Follow the system theme only while the visitor has no explicit preference.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      if (!window.localStorage.getItem(STORAGE_KEY)) setDarkMode(event.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => setDarkMode((value) => !value), []);

  return [darkMode, toggle];
}

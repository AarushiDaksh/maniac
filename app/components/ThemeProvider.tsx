"use client";
import { useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.body.classList.add("light");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    const nowDark = !document.body.classList.contains("light");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setIsDark(nowDark);
  };

  return (
    <>
      {children}
      <button
        onClick={toggleTheme}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 bg-minecraftGreen text-black hover:bg-green-400 transition px-4 py-3 rounded-l-lg border-2 border-black text-2xl shadow-lg font-minecraft"
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </>
  );
}

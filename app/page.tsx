"use client";

import { Typewriter } from "react-simple-typewriter";
import FloatingStars from "./components/FloatingStars";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center text-center bg-black text-white overflow-hidden">
      {/* ✨ Floating Stars */}
      <FloatingStars />

      <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 z-10">
        Maniac helps you
      </h1>
      <h2 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 mt-2 z-10">
         <Typewriter
          words={["master your schedule", "plan your day", "dominate your time"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={75}
          delaySpeed={3000}
        />
      </h2>

      {/* Subtext */}
      <p className="mt-4 text-lg text-gray-400 z-10">
        Time-block, plan, and dominate — the smart way.
      </p>

      {/* Button */}
      <button className="mt-8 px-6 py-2 text-lg font-medium bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full shadow-lg hover:scale-105 transition z-10">
        Join Waitlist - Coming Soon
      </button>
    </main>
  );
}

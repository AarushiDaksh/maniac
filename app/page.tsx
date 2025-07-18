"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(0); // in seconds
  const [customHours, setCustomHours] = useState(0);
  const [customMinutes, setCustomMinutes] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          audioRef.current?.play();
          alert("⏰ Time's up!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (s: number) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  const handleStart = () => {
    const totalSeconds = customHours * 3600 + customMinutes * 60;
    if (totalSeconds > 0) {
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
  };

  return (
    <main className="min-h-screen font-minecraft text-base bg-[var(--background)] text-[var(--foreground)]">
      <div className="flex justify-center items-center gap-3 mb-6 relative group">
        <span className="relative inline-block text-yellow-400 text-lg font-bold pixel-shadow animate-pulse transition-transform duration-300 group-hover:scale-105">
          🛠️ Currently Building...
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 opacity-30 blur-md rounded-lg animate-ping"></span>
        </span>
        <span className="h-4 w-4 bg-red-500 rounded-full animate-bounce shadow-lg group-hover:scale-125 transition duration-300"></span>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Header */}
        <div className="w-full bg-minecraftGreen border-b-[6px] border-[#83653A] shadow-md py-4 px-4 text-center rounded-b-xl">
          <h1 className="text-2xl md:text-4xl text-white pixel-shadow">
            Spot it before it explodes your build.
          </h1>
          <p className="text-sm text-yellow-200 mt-1 inline-block bg-black/30 px-2 py-1 rounded border border-[#333]">
            Hi, aARuSHi 🐞
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="glass-box">
              <h2 className="text-xl mb-2 font-normal pixel-shadow text-[var(--foreground)]">
                Bug is a creeper
              </h2>
              <p className="text-[var(--foreground)] mb-2">
                This personalized dashboard reflects my tech explorations and daily progress.
                From frontend quests to backend battles, track it all right here.
              </p>
              <p className="text-sm italic text-gray-700 dark:text-gray-300">
                Built with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and a bit of Minecraft Wizardry.
              </p>
            </div>

            {/* Timer */}
            <div className="glass-box text-center flex flex-col items-center">
              <h3 className="text-lg text-green-300 mb-3 pixel-shadow">🕛 Study Timer</h3>

              {/* Time Inputs */}
              <div className="mb-4 flex items-center gap-4 text-sm text-gray-800 dark:text-gray-100">
                <label className="text-red-300">
                  Hours:
                  <input
                    type="number"
                    value={customHours}
                    onChange={(e) => setCustomHours(Number(e.target.value))}
                    className="w-16 ml-1 px-2 py-1 rounded border border-black text-black bg-white"
                    min={0}
                    max={12}
                  />
                </label>
                <label className="text-red-300">
                  Minutes:
                  <input
                    type="number"
                    value={customMinutes}
                    onChange={(e) => setCustomMinutes(Number(e.target.value))}
                    className="w-16 ml-1 px-2 py-1 rounded border border-black text-black bg-white"
                    min={0}
                    max={59}
                  />
                </label>
              </div>

              {/* Timer Display */}
              <div className="text-5xl text-black bg-white px-6 py-3 rounded border-4 border-black shadow-inner">
                {formatTime(timeLeft)}
              </div>

              <p className="text-[#e4c88b] mt-3">Stay focused and defeat procrastination!</p>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={handleStart}
                  className="bg-minecraftGreen px-4 py-1 rounded border border-black hover:bg-green-400 transition"
                >
                  Start
                </button>
                <button
                  onClick={handleReset}
                  className="bg-red-500 text-white px-4 py-1 rounded border border-black hover:bg-red-300 transition"
                >
                  Reset
                </button>
              </div>

              <audio ref={audioRef} src="/alert.mp3" preload="auto" />
            </div>
          </div>

          {/* Calendar */}
          <div className="glass-box">
            <h3 className="text-lg text-minecraftGreen font-bold mb-3 pixel-shadow text-center">🗓️ Calendar</h3>
           <div className="grid grid-cols-7 gap-2 text-center  text-[#83653A] text-sm">

              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <div key={d} className="bg-[#eee3b5] border border-[#a57c48] rounded py-1 font-bold">
                  {d}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => {
                const isToday = i + 1 === new Date().getDate();
                return (
                  <div
                  key={i}
                className={`py-2 rounded font-bold border-2 ${
                    isToday
                      ? "bg-minecraftGreen text-red-300 border-black"
                      : "bg-[var(--highlight-light)] text-[var(--foreground)] dark:bg-[#3a3a3a] dark:text-[#fefefe] border-[var(--border-light)] dark:border-[var(--border-dark)]"
                  }`}

                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

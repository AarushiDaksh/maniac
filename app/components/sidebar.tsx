"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ isOpen = true }: { isOpen?: boolean }) {
  const pathname = usePathname();

  // Utility for active link styling
  const isActive = (path: string) =>
    pathname === path ? "text-minecraftGreen font-bold underline underline-offset-4" : "";

  return (
    <aside
      className={`fixed top-0 left-0 h-screen 
      w-[80%] sm:w-[60%] md:w-[45%] lg:w-[20%] 
      bg-[var(--bg-sidebar)] text-[var(--fg-sidebar)] 
      z-50 p-6 border-r-4 border-[var(--border-sidebar)] shadow-[0_0_20px_rgba(0,0,0,0.4)] backdrop-blur-md
      font-minecraft text-sm transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      lg:translate-x-0`}
    >
      {/* ❌ Mobile Close */}
      <div className="flex justify-end lg:hidden mb-2">
        <button
          onClick={() => window.dispatchEvent(new Event("closeSidebar"))}
          className="text-xl font-bold text-black dark:text-white hover:text-minecraftGreen"
        >
          ❌
        </button>
      </div>

      {/* 🧠 Title */}
      <Link
        href="/"
        className="block mb-8"
        onClick={() => window.dispatchEvent(new Event("closeSidebar"))}
      >
        <h2 className="text-2xl font-bold pixel-shadow hover:text-minecraftGreen transition-all duration-200">
           Learning Sources
        </h2>
      </Link>

     
      <nav className="space-y-4">
        <SidebarLink href="/dsa" icon="📘" label="DSA" active={pathname} />
        <SidebarLink href="/leetcode" icon="💡" label="LeetCode" active={pathname} />
        <SidebarLink href="/github" icon="🐙" label="GitHub" active={pathname} />

        {/* ⚒ Projects */}
        <div className="mt-6 mb-2 font-bold text-base text-yellow-800 dark:text-yellow-300 pixel-shadow">
          ⚒ Projects
        </div>
        <div className="space-y-2 ml-4">
          <SidebarLink href="/projects/frontend" icon="🖥️" label="Frontend" active={pathname} />
          <SidebarLink href="/projects/backend" icon="🛠️" label="Backend" active={pathname} />
          <SidebarLink href="/projects/mern" icon="🌐" label="MERN" active={pathname} />
        </div>

        <div className="mt-6">
          <SidebarLink href="/technologies" icon="⚙️" label="Technologies" active={pathname} />
        </div>
      </nav>
    </aside>
  );
}

function SidebarLink({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: string;
  label: string;
  active: string;
}) {
  const isCurrent = active === href;

  return (
    <Link
      href={href}
      onClick={() => window.dispatchEvent(new Event("closeSidebar"))}
      className={`block transition-all duration-150 hover:text-minecraftGreen ${
        isCurrent ? "text-minecraftGreen font-bold underline underline-offset-2" : ""
      }`}
    >
      {icon} {label}
    </Link>
  );
}

"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";

export default function SidebarWrapper() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  // Listen for custom event from close button or links
  useEffect(() => {
    const handler = () => setIsOpen(false);
    window.addEventListener("closeSidebar", handler);
    return () => window.removeEventListener("closeSidebar", handler);
  }, []);

  if (!isHome) return null;

  return (
    <>
     
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 bg-black text-white border border-white rounded shadow-md lg:hidden"
      >
        ☰
      </button>

      <Sidebar isOpen={isOpen} />
    </>
  );
}

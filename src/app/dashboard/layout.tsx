"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/dashbaord/Sidebar";
import Header from "@/components/dashbaord/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false); // Start with sidebar closed

  // Update sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
      <div className="grid grid-cols-[auto_1fr] h-screen">
        {/* Sidebar - Hidden by default on mobile, visible when isOpen is true */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block sticky top-0 h-screen z-20`}
        >
          <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <div className="sticky top-0 z-10">
            <Header setIsOpen={setIsOpen} />
          </div>
          <main className="flex-1 p-6 overflow-y-auto overflow-x-hidden h-[calc(100vh-3rem)]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

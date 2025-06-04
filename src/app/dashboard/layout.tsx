"use client";

import { useState } from "react";
import Sidebar from "@/components/dashbaord/Sidebar";
import Header from "@/components/dashbaord/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
      <div className="grid grid-cols-[auto_1fr] h-screen">
        <div className="sticky top-0 h-screen">
          <Sidebar isOpen={isOpen} />
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

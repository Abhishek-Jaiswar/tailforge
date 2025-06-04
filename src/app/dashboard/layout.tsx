"use client";

import React, { useState } from "react";
import Sidebar from "../../components/dashbaord/Sidebar";
import Header from "../../components/dashbaord/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-neutral-900 flex overflow-hidden">
      <div
        className={`bg-neutral-800 min-h-screen transition-all duration-300 sticky top-0
              ${isOpen ? "w-64" : "w-14"}
              hidden sm:block
              `}
      >
        <Sidebar isOpen={isOpen} />
      </div>
      <main className="flex-1 flex flex-col min-h-screen bg-neutral-900 min-w-0">
        <Header setIsOpen={setIsOpen} />
        <div className="p-4 flex-1 overflow-hidden">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;

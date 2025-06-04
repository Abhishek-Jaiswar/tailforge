"use client";

import Logo from "../../components/Logo";
import {
  Layers2Icon,
  LayoutDashboard,
  SparkleIcon,
  UserCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface SidebarT {
  isOpen: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarT) => {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        // Only close on mobile (screen width < 768px)
        if (window.innerWidth < 768 && onClose) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const navigations = [
    {
      id: 0,
      path: "/dashboard",
      title: "Home",
      icon: LayoutDashboard,
    },
    {
      id: 1,
      path: "/dashboard/categories",
      title: "Categories",
      icon: Layers2Icon,
    },
    {
      id: 2,
      path: "/dashboard/ai",
      title: "Use Ai",
      icon: SparkleIcon,
    },
    {
      id: 3,
      path: "/dashboard/profile",
      title: "Profile",
      icon: UserCircleIcon,
    },
  ];

  const handleLinkClick = () => {
    // Only close on mobile (screen width < 768px)
    if (window.innerWidth < 768 && onClose) {
      onClose();
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={`h-screen bg-neutral-800/30 border-r border-neutral-700 transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      } md:relative fixed inset-y-0 left-0`}
    >
      <div className="flex items-center justify-center h-12 border-b border-neutral-700">
        {isOpen ? (
          <Logo />
        ) : (
          <h1 className="text-neutral-300 text-lg font-bold font-mono">TF</h1>
        )}
      </div>

      <div className="p-4 space-y-2">
        {navigations.map(({ icon: Icon, id, title, path }) => {
          const isActive =
            path === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(path);

          return (
            <Link
              key={id}
              href={path}
              className="w-full"
              onClick={handleLinkClick}
            >
              <div
                className={`w-full p-3 flex items-center gap-3 rounded-xl transition-colors duration-150 hover:bg-neutral-700/50
                ${isActive ? "bg-neutral-700" : ""}
                ${!isOpen ? "justify-center" : ""}
              `}
              >
                <Icon className="w-5 h-5 text-neutral-100 flex-shrink-0" />
                {isOpen && (
                  <span className="text-neutral-100 whitespace-nowrap overflow-hidden">
                    {title}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

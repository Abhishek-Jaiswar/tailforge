"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownT {
  name: string;
  items: string[];
  className?: string;
}

const Dropdown = ({ name, items, className = "" }: DropdownT) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<string>(name);

  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={handleDropdown}
        className="w-full px-3 py-2 text-sm bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-200 hover:bg-neutral-700/50 transition-colors duration-200 flex items-center justify-between"
      >
        <span>{selectedItem}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedItem(item);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-sm text-left text-neutral-200 hover:bg-neutral-700/50 transition-colors duration-200 ${
                selectedItem === item ? "bg-neutral-700/50" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

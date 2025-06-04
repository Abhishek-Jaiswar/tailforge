import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search challenges..."
        className="w-full px-4 py-2 text-sm bg-neutral-800/50 border border-neutral-700 rounded-lg text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600 transition-all duration-200"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-200 transition-colors duration-200">
        <Search className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SearchBar;

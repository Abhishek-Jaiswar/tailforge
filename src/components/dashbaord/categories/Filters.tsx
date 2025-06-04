import Dropdown from "@/components/Dropdown";
import React from "react";
import SearchBar from "./SearchBar";

const Filters = () => {
  return (
    <div className="bg-neutral-800/50 rounded-lg border border-neutral-700 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">Filters</h2>
          <p className="text-sm text-neutral-400">
            Select your preferences to filter challenges
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <Dropdown
              name="Level"
              items={["All", "Easy", "Medium", "Hard"]}
              className="w-32"
            />
            <Dropdown
              name="Category"
              items={[
                "All",
                "Navigation",
                "Layout",
                "Forms",
                "Modals",
                "Lists",
                "Theming",
                "Interactions",
                "Charts",
              ]}
              className="w-40"
            />
          </div>
          <div className="w-full sm:w-64">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

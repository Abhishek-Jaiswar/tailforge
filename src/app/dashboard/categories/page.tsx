import React from "react";
import SpecialChallenges from "@/components/dashbaord/categories/SpecialChallenges";
import Filters from "@/components/dashbaord/categories/Filters";
import ChallengeList from "@/components/dashbaord/categories/ChallengeList";

const Categories = () => {
  return (
    <div className="space-y-6">
      <div className="w-full">
        <SpecialChallenges />
      </div>

      <div className="w-full">
        <Filters />
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-display font-semibold text-white tracking-tight">
            UI Challenges
          </h2>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span>Total: 8</span>
            <span>•</span>
            <span>Solved: 2</span>
            <span>•</span>
            <span>Attempted: 1</span>
          </div>
        </div>
        <ChallengeList />
      </div>
    </div>
  );
};

export default Categories;

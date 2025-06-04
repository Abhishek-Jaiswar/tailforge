import React from "react";

interface DifficultySelectorProps {
  difficulty: string;
  onSelect: (difficulty: string) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  difficulty,
  onSelect,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-300 mb-2">
        Difficulty Level
      </label>
      <div className="grid grid-cols-3 gap-3">
        {["easy", "medium", "hard"].map((level) => (
          <button
            key={level}
            onClick={() => onSelect(level)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              difficulty === level
                ? "bg-amber-400/10 text-amber-400 border border-amber-400/20"
                : "bg-neutral-700/50 text-neutral-300 border border-neutral-600 hover:bg-neutral-700"
            }`}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;

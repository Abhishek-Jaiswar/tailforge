import React from "react";

interface CategorySelectProps {
  category: string;
  onChange: (category: string) => void;
}

const categories = [
  { value: "all", label: "All Categories" },
  { value: "layout", label: "Layout & Structure" },
  { value: "components", label: "UI Components" },
  { value: "animations", label: "Animations" },
  { value: "responsive", label: "Responsive Design" },
  { value: "accessibility", label: "Accessibility" },
];

const CategorySelect: React.FC<CategorySelectProps> = ({
  category,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-300 mb-2">
        Category
      </label>
      <select
        value={category}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 bg-neutral-700/50 border border-neutral-600 rounded-lg text-neutral-200 focus:outline-none focus:ring-1 focus:ring-amber-400/50 focus:border-amber-400/50"
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;

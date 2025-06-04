import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  label: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-700/30">
      <Icon className="w-4 h-4 text-neutral-400" />
      <span className="text-sm text-neutral-300">{label}</span>
    </div>
  );
};

export default FeatureCard;

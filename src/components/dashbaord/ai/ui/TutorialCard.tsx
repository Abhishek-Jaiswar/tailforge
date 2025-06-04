import React from "react";
import { LucideIcon, ExternalLink } from "lucide-react";

interface TutorialCardProps {
  title: string;
  description: string;
  type: string;
  icon: LucideIcon;
  link: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({
  title,
  description,
  type,
  icon: Icon,
  link,
}) => {
  return (
    <a
      href={link}
      className="block p-4 rounded-lg bg-neutral-700/30 border border-neutral-600 hover:bg-neutral-700/50 transition-all duration-200 group"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors duration-200">
              {title}
            </h3>
            <ExternalLink className="w-3 h-3 text-neutral-400" />
          </div>
          <p className="text-sm text-neutral-400 mt-1">{description}</p>
          <div className="mt-2">
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-neutral-600 text-neutral-300">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default TutorialCard;

import React from "react";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  content,
  role,
  timestamp,
}) => {
  return (
    <div
      className={`flex gap-3 ${
        role === "assistant" ? "items-start" : "items-end"
      }`}
    >
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
          role === "assistant" ? "bg-amber-400/10" : "bg-neutral-700"
        }`}
      >
        {role === "assistant" ? (
          <Bot className="w-4 h-4 text-amber-400" />
        ) : (
          <User className="w-4 h-4 text-neutral-400" />
        )}
      </div>
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          role === "assistant"
            ? "bg-neutral-700/50 text-neutral-200"
            : "bg-amber-400/10 text-amber-400"
        }`}
      >
        <p className="text-sm">{content}</p>
        <span className="text-xs text-neutral-400 mt-1 block">
          {timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;

"use client";

import React, { useState } from "react";
import { Bot, Loader2 } from "lucide-react";
import SectionHeader from "./layout/SectionHeader";
import ChatMessage from "./ui/ChatMessage";
import ChatInput from "./ui/ChatInput";

interface Message {
  id: number;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content:
        "Hi! I'm your AI assistant. I can help you with UI challenges, provide feedback, and guide you through solutions. What would you like to work on?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        content:
          "I understand you're working on a UI challenge. Let me help you break this down into manageable steps. First, let's identify the key components and their relationships...",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-neutral-800/50 rounded-lg border border-neutral-700 h-[calc(100vh-12rem)] flex flex-col">
      <div className="p-4 border-b border-neutral-700">
        <SectionHeader
          icon={Bot}
          title="AI Assistant"
          description="Ask for help or feedback"
        />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            role={message.role}
            timestamp={message.timestamp}
          />
        ))}
        {isLoading && (
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-amber-400" />
            </div>
            <div className="bg-neutral-700/50 rounded-lg p-3">
              <Loader2 className="w-4 h-4 text-neutral-400 animate-spin" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-neutral-700">
        <ChatInput
          value={input}
          onChange={setInput}
          onSend={handleSend}
          disabled={!input.trim() || isLoading}
        />
      </div>
    </div>
  );
};

export default AIChat;

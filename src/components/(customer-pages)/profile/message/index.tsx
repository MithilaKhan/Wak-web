// src/components/(customer-pages)/profile/message/index.tsx
'use client';

import { useState } from "react";
import { Search, Paperclip, Send } from "lucide-react";
import DashboardCard from "@/shared/DashboardCard";

interface ChatContact {
  id: number;
  name: string;
  subtitle: string;
  avatar: string;
}

const contactsData: ChatContact[] = [
  { id: 1, name: "Sarah Chen", subtitle: "I have uploaded the initial wirefra...", avatar: "https://i.pravatar.cc/150?img=68" },
  { id: 2, name: "Alex Rivers", subtitle: "I have uploaded the initial wirefra...", avatar: "https://i.pravatar.cc/150?img=68" },
  { id: 3, name: "Emma Watson", subtitle: "I have uploaded the initial wirefra...", avatar: "https://i.pravatar.cc/150?img=68" },
];

interface ChatMessage {
  id: number;
  sender: "user" | "other";
  text: string;
  time: string;
  avatar: string;
}

const initialMessages: Record<number, ChatMessage[]> = {
  1: [
    {
      id: 101,
      sender: "other",
      text: "Hi there! I've started working on the initial wireframes for the homepage. I'll share them by EOD tomorrow. Does that work for you?",
      time: "10:00 AM",
      avatar: "https://i.pravatar.cc/150?img=68"
    },
    {
      id: 102,
      sender: "user",
      text: "Sounds great, Sarah! Please focus on the mobile responsiveness first as we discussed.",
      time: "10:00 AM",
      avatar: "https://i.pravatar.cc/150?img=68"
    }
  ],
  2: [
    {
      id: 201,
      sender: "other",
      text: "Hey Alex, I'm reviewing the pull request right now. Looking clean!",
      time: "11:15 AM",
      avatar: "https://i.pravatar.cc/150?img=68"
    }
  ],
  3: [
    {
      id: 301,
      sender: "other",
      text: "Hello Emma, the brand assets and color palettes have been finalized.",
      time: "02:30 PM",
      avatar: "https://i.pravatar.cc/150?img=68"
    }
  ],
};

export default function MessagePage() {
  const [selectedContact, setSelectedContact] = useState<number>(1);
  const [messageHistories, setMessageHistories] = useState(initialMessages);
  const [input, setInput] = useState("");

  const currentMessages = messageHistories[selectedContact] || [];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "https://i.pravatar.cc/150?img=68"
    };

    setMessageHistories({
      ...messageHistories,
      [selectedContact]: [...currentMessages, newMsg]
    });
    setInput("");
  };

  return (
    <DashboardCard>
      <div className="flex flex-col lg:flex-row gap-6 h-[700px] text-zinc-800">
        {/* Left Sidebar */}
        <div className="w-full lg:w-80 bg-zinc-50 border border-zinc-200 rounded-2xl p-6 flex flex-col shrink-0 shadow-sm">
          <h1 className="text-xl font-bold text-zinc-900 mb-5 tracking-tight">Message</h1>
 
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full bg-white border border-zinc-200 rounded-lg py-2.5 pl-10 pr-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-primary transition-colors focus:ring-1 focus:ring-primary"
            />
          </div>
 
          {/* Contacts List */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {contactsData.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setSelectedContact(contact.id)}
                className={`flex items-center gap-3.5 p-3 rounded-xl cursor-pointer transition-colors ${selectedContact === contact.id
                    ? "bg-primary/10 border border-primary/20"
                    : "bg-white hover:bg-zinc-100/50 border border-zinc-200/50"
                  }`}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-zinc-200">
                  <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className={`font-semibold text-sm ${selectedContact === contact.id ? "text-primary" : "text-zinc-800"}`}>{contact.name}</h3>
                  <p className="text-xs text-zinc-500 truncate mt-0.5">{contact.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Right Chat Box */}
        <div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm min-w-0 overflow-hidden">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto space-y-6 mb-6">
            {/* Yesterday Badge */}
            <div className="flex justify-center mb-8">
              <span className="px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-150 text-xs text-zinc-500 font-semibold tracking-wide uppercase">
                Yesterday
              </span>
            </div>
 
            {currentMessages.map((m) => {
              const isUser = m.sender === "user";
              return (
                <div key={m.id} className={`flex items-start gap-3.5 ${isUser ? "flex-row-reverse" : ""}`}>
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-zinc-200 -mt-2">
                    <img src={m.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="max-w-md">
                    <div className={`p-4 text-sm leading-relaxed shadow-xs ${isUser
                      ? "bg-primary/15 text-zinc-800 rounded-2xl rounded-tr-none border border-primary/25 font-medium"
                      : "bg-white text-zinc-800 rounded-2xl rounded-tl-none border border-zinc-200 font-normal"
                      }`}>
                      {m.text}
                    </div>
                    <span className={`block text-[10px] font-bold text-zinc-400 mt-1.5 ${isUser ? "text-left" : "text-right"}`}>
                      {m.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
 
          {/* Bottom Input Area */}
          <form onSubmit={handleSend} className="flex items-center gap-4 pt-4 border-t border-zinc-200 shrink-0">
            <button type="button" className="text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer p-1.5 shrink-0" aria-label="Add attachment">
              <Paperclip className="w-5 h-5 -rotate-45" />
            </button>
 
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type here..."
              className="flex-1 bg-white border border-zinc-200 focus:border-primary rounded-xl py-3 px-4 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:ring-1 focus:ring-primary"
            />
 
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-12 h-12 bg-primary hover:bg-orange-500 disabled:opacity-40 text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-md shadow-orange-500/10 font-bold"
              aria-label="Send message"
            >
              <Send className="w-5 h-5 stroke-[2.2]" />
            </button>
          </form>
        </div>
      </div>
    </DashboardCard>
  );
}

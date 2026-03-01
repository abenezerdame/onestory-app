"use client";

import { BookOpen, CalendarDays, BarChart3, Settings } from "lucide-react";

export type Tab = "today" | "plan" | "progress" | "settings";

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string; icon: typeof BookOpen }[] = [
  { id: "today", label: "Today", icon: BookOpen },
  { id: "plan", label: "Plan", icon: CalendarDays },
  { id: "progress", label: "Progress", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto">
      <div className="bg-card border border-border/50 rounded-2xl shadow-md">
        <div className="flex items-center justify-around h-14 px-2">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex-1 flex flex-col items-center justify-center h-full relative"
                aria-label={tab.label}
              >
                <div
                  className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors duration-150 ${
                    active ? "bg-muted" : ""
                  }`}
                >
                  <Icon
                    className={`w-[18px] h-[18px] transition-colors ${
                      active ? "text-foreground" : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={`text-[10px] leading-none transition-colors ${
                      active ? "text-foreground font-semibold" : "text-muted-foreground font-medium"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

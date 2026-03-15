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
    <nav className="fixed bottom-5 left-4 right-4 z-50 max-w-lg mx-auto">
      {/* Outer full-pill container */}
      <div className="bg-card rounded-full shadow-xl shadow-black/10 border border-border/40 px-1.5 py-1.5">
        <div className="flex items-center justify-around">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex-1 flex justify-center"
                aria-label={tab.label}
              >
                {/* Inner pill — only rendered/sized for active */}
                <div
                  className={`flex flex-col items-center gap-1 px-5 py-2.5 rounded-full transition-all duration-200 ${
                    active ? "bg-muted" : ""
                  }`}
                >
                  <Icon
                    className={`w-[22px] h-[22px] transition-colors duration-200 ${
                      active ? "text-foreground" : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={`text-[11px] leading-none transition-colors duration-200 ${
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

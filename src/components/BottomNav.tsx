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
    <nav className="fixed bottom-3 left-3 right-3 z-50 max-w-lg mx-auto">
      <div className="bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/40">
        <div className="flex items-center justify-around h-[60px] px-2">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="relative flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl transition-all duration-200 group"
                aria-label={tab.label}
              >
                {active && (
                  <span className="absolute inset-1 rounded-xl bg-primary/10 dark:bg-primary/15 transition-all duration-200" />
                )}
                <Icon
                  className={`relative w-[19px] h-[19px] transition-all duration-200 ${
                    active
                      ? "text-primary scale-110"
                      : "text-muted-foreground group-hover:text-foreground group-hover:scale-105"
                  }`}
                />
                <span
                  className={`relative text-[10px] font-medium leading-none transition-all duration-200 ${
                    active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

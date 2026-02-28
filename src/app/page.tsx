"use client";

import { useState } from "react";
import { BottomNav, Tab } from "@/components/BottomNav";
import { TodayView } from "@/components/TodayView";
import { PlanView } from "@/components/PlanView";
import { ProgressView } from "@/components/ProgressView";
import { SettingsView } from "@/components/SettingsView";
import { useProgress } from "@/hooks/useProgress";
import { useStartDate } from "@/hooks/useStartDate";
import { useTheme } from "@/hooks/useTheme";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("today");
  const progress = useProgress();
  const dateState = useStartDate();
  const { isDark, toggleTheme } = useTheme();

  if (!progress.loaded || !dateState.loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const commonProps = {
    getCurrentDay: dateState.getCurrentDay,
    getDateForDay: dateState.getDateForDay,
    isChapterRead: progress.isChapterRead,
    isPsalmRead: progress.isPsalmRead,
    isVideoWatched: progress.isVideoWatched,
    isDayComplete: progress.isDayComplete,
    toggleChapter: progress.toggleChapter,
    togglePsalm: progress.togglePsalm,
    toggleVideo: progress.toggleVideo,
    markDayComplete: progress.markDayComplete,
    getDayProgress: progress.getDayProgress,
  };

  return (
    <main className="min-h-screen bg-background">
      {activeTab === "today" && <TodayView {...commonProps} stats={progress.stats} startDate={dateState.startDate} />}
      {activeTab === "plan" && <PlanView {...commonProps} />}
      {activeTab === "progress" && (
        <ProgressView
          stats={progress.stats}
          isDayComplete={progress.isDayComplete}
          startDate={dateState.startDate}
        />
      )}
      {activeTab === "settings" && (
        <SettingsView
          startDate={dateState.startDate}
          setStartDate={dateState.setStartDate}
          exportProgress={progress.exportProgress}
          importProgress={progress.importProgress}
          resetProgress={progress.resetProgress}
          markAllTillDay={progress.markAllTillDay}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
      )}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  );
}

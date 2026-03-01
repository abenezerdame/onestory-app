"use client";

import { useState, useEffect } from "react";
import { readingPlan } from "@/data/readingPlan";
import { DayCard } from "./DayCard";
import { AlertTriangle, TrendingUp } from "lucide-react";

interface TodayViewProps {
  getCurrentDay: () => number;
  getDateForDay: (day: number) => Date;
  isChapterRead: (day: number, chapter: number) => boolean;
  isPsalmRead: (day: number) => boolean;
  isVideoWatched: (day: number, videoIndex: number) => boolean;
  isDayComplete: (day: number) => boolean;
  toggleChapter: (day: number, chapter: number) => void;
  togglePsalm: (day: number) => void;
  toggleVideo: (day: number, videoIndex: number) => void;
  markDayComplete: (day: number) => void;
  getDayProgress: (day: number) => number;
  stats: {
    daysCompleted: number;
    totalDays: number;
    chaptersRead: number;
    psalmsRead: number;
    videosWatched: number;
    totalVideos: number;
    booksCompleted: number;
    totalBooks: number;
    streak: number;
  };
  startDate: string;
}

export function TodayView(props: TodayViewProps) {
  const todayDay = props.getCurrentDay();
  const [viewDay, setViewDay] = useState(todayDay);

  useEffect(() => {
    setViewDay(todayDay);
  }, [todayDay]);

  const reading = readingPlan.find(d => d.day === viewDay);
  if (!reading) return null;

  const date = props.getDateForDay(viewDay);
  const dateLabel = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  const { stats } = props;
  const daysBehind = Math.max(0, (todayDay - 1) - stats.daysCompleted);

  // First day that is not yet complete (used by the behind banner)
  const firstUncompletedDay = daysBehind > 0
    ? (Array.from({ length: todayDay }, (_, i) => i + 1).find(d => !props.isDayComplete(d)) ?? todayDay)
    : null;

  return (
    <div className="px-4 pt-[72px] pb-8 max-w-lg mx-auto">
      {/* Page header */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold tracking-tight">One Story</h1>
        <p className="text-sm text-muted-foreground">That Leads to Jesus</p>
      </div>

      {/* Behind / on-track banner */}
      {daysBehind > 0 ? (
        <button
          onClick={() => firstUncompletedDay && setViewDay(firstUncompletedDay)}
          className="w-full flex items-start gap-3 rounded-2xl bg-amber/10 border border-amber/20 px-4 py-3 mb-4 text-left hover:bg-amber/15 active:bg-amber/20 transition-colors"
        >
          <AlertTriangle className="w-4 h-4 text-amber mt-0.5 shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium leading-snug">
              {daysBehind} {daysBehind === 1 ? "day" : "days"} behind schedule
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {stats.daysCompleted} of {todayDay - 1} expected days done. Tap to catch up →
            </p>
          </div>
        </button>
      ) : todayDay > 1 && stats.daysCompleted >= todayDay - 1 ? (
        <div className="flex items-center gap-3 rounded-2xl bg-success/10 border border-success/20 px-4 py-3 mb-4">
          <TrendingUp className="w-4 h-4 text-success shrink-0" />
          <p className="text-sm font-medium text-success">You&apos;re on track — great work!</p>
        </div>
      ) : null}

      {/* Day readings — card-per-item */}
      <DayCard
        reading={reading}
        dateLabel={dateLabel}
        isToday={viewDay === todayDay}
        showNav={true}
        mode="today"
        onPrev={() => setViewDay(d => Math.max(1, d - 1))}
        onNext={() => setViewDay(d => Math.min(358, d + 1))}
        {...props}
      />

      {viewDay !== todayDay && (
        <button
          onClick={() => setViewDay(todayDay)}
          className="mt-3 w-full text-center text-sm text-primary font-medium hover:underline"
        >
          Back to today (Day {todayDay})
        </button>
      )}
    </div>
  );
}

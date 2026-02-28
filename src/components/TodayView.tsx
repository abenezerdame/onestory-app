"use client";

import { useState, useEffect } from "react";
import { readingPlan } from "@/data/readingPlan";
import { DayCard } from "./DayCard";

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

  return (
    <div className="px-4 pt-4 pb-24 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">One Story</h1>
        <p className="text-sm text-muted-foreground">That Leads to Jesus</p>
      </div>

      <DayCard
        reading={reading}
        dateLabel={dateLabel}
        isToday={viewDay === todayDay}
        showNav={true}
        onPrev={() => setViewDay(d => Math.max(1, d - 1))}
        onNext={() => setViewDay(d => Math.min(358, d + 1))}
        {...props}
      />

      {/* Quick nav buttons */}
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

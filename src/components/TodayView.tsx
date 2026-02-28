"use client";

import { useState, useEffect } from "react";
import { readingPlan } from "@/data/readingPlan";
import { DayCard } from "./DayCard";
import { Flame, BookOpen, Play, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";

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
  const overallPct = Math.round((stats.daysCompleted / stats.totalDays) * 100);
  const daysBehind = Math.max(0, (todayDay - 1) - stats.daysCompleted);

  return (
    <div className="px-4 pt-4 pb-24 max-w-lg mx-auto">
      <div className="mb-5">
        <h1 className="text-2xl font-bold tracking-tight">One Story</h1>
        <p className="text-sm text-muted-foreground">That Leads to Jesus</p>
      </div>

      {/* Behind / On-track banner */}
      {daysBehind > 0 ? (
        <div className="flex items-start gap-3 rounded-2xl bg-amber/10 border border-amber/25 px-4 py-3 mb-4">
          <AlertTriangle className="w-4 h-4 text-amber mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-amber-foreground leading-snug">
              {daysBehind} {daysBehind === 1 ? "day" : "days"} behind schedule
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              You&apos;ve completed {stats.daysCompleted} of {todayDay - 1} expected days.
            </p>
          </div>
        </div>
      ) : todayDay > 1 && stats.daysCompleted >= todayDay - 1 ? (
        <div className="flex items-center gap-3 rounded-2xl bg-success/10 border border-success/25 px-4 py-3 mb-4">
          <TrendingUp className="w-4 h-4 text-success shrink-0" />
          <p className="text-sm font-medium text-success">You&apos;re on track — great work!</p>
        </div>
      ) : null}

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

      {/* Snap Summary */}
      <div className="mt-4 rounded-2xl border bg-card p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Your Journey</span>
          <span className="text-sm font-bold text-primary">{overallPct}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden mb-3">
          <div
            className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
            style={{ width: `${overallPct}%` }}
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="text-center">
            <div className="flex justify-center mb-1">
              <Flame className="w-3.5 h-3.5 text-amber" />
            </div>
            <p className="text-base font-bold leading-none">{stats.streak}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">streak</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-success" />
            </div>
            <p className="text-base font-bold leading-none">{stats.daysCompleted}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">days</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-1">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
            </div>
            <p className="text-base font-bold leading-none">{stats.booksCompleted}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">books</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-1">
              <Play className="w-3.5 h-3.5 text-olive-light" />
            </div>
            <p className="text-base font-bold leading-none">{stats.videosWatched}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">videos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

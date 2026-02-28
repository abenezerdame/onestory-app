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
    <div className="px-4 pt-5 pb-24 max-w-lg mx-auto">
      {/* Page header */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold tracking-tight">One Story</h1>
        <p className="text-sm text-muted-foreground">That Leads to Jesus</p>
      </div>

      {/* Behind / on-track banner */}
      {daysBehind > 0 ? (
        <div className="flex items-start gap-3 rounded-2xl bg-amber/10 border border-amber/20 px-4 py-3 mb-4">
          <AlertTriangle className="w-4 h-4 text-amber mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium leading-snug">
              {daysBehind} {daysBehind === 1 ? "day" : "days"} behind schedule
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {stats.daysCompleted} of {todayDay - 1} expected days done.
            </p>
          </div>
        </div>
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

      {/* Journey summary */}
      <div className="mt-6">
        <p className="text-sm font-bold mb-2 px-0.5">Your Journey</p>
        <div className="bg-card rounded-2xl overflow-hidden">
          {/* Progress bar row */}
          <div className="px-4 py-3.5 flex items-center gap-3">
            <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                style={{ width: `${overallPct}%` }}
              />
            </div>
            <span className="text-sm font-bold text-primary w-10 text-right">{overallPct}%</span>
          </div>
          <div className="h-px bg-border/60 mx-4" />
          {/* Stats rows */}
          {[
            { icon: Flame, label: "Streak", value: `${stats.streak} days`, color: "text-amber" },
            { icon: CheckCircle2, label: "Days done", value: `${stats.daysCompleted} / ${stats.totalDays}`, color: "text-success" },
            { icon: BookOpen, label: "Books", value: `${stats.booksCompleted} / ${stats.totalBooks}`, color: "text-primary" },
            { icon: Play, label: "Videos", value: `${stats.videosWatched} / ${stats.totalVideos}`, color: "text-olive-light" },
          ].map(({ icon: Icon, label, value, color }, i, arr) => (
            <div key={label}>
              <div className="px-4 py-3 flex items-center gap-3">
                <Icon className={`w-4 h-4 shrink-0 ${color}`} />
                <span className="flex-1 text-[15px]">{label}</span>
                <span className="text-sm text-muted-foreground font-medium">{value}</span>
              </div>
              {i < arr.length - 1 && <div className="h-px bg-border/60 mx-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

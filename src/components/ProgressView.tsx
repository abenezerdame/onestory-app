"use client";

import { readingPlan, booksInOrder } from "@/data/readingPlan";
import { BookOpen, Play, Calendar, Trophy } from "lucide-react";

interface ProgressViewProps {
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
  isDayComplete: (day: number) => boolean;
  startDate: string;
}

export function ProgressView({ stats, isDayComplete, startDate }: ProgressViewProps) {
  const overallPct = Math.round((stats.daysCompleted / stats.totalDays) * 100);


  // Book grid data
  const bookDays: Record<string, number[]> = {};
  readingPlan.forEach(d => {
    if (!bookDays[d.book]) bookDays[d.book] = [];
    bookDays[d.book].push(d.day);
  });

  const getBookStatus = (book: string): "complete" | "partial" | "empty" => {
    const days = bookDays[book] || [];
    const completed = days.filter(d => isDayComplete(d)).length;
    if (completed === days.length) return "complete";
    if (completed > 0) return "partial";
    return "empty";
  };

  return (
    <div className="px-4 pt-5 pb-24 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Progress</h1>
        <p className="text-sm text-muted-foreground">Your reading journey</p>
      </div>

      {/* Overall progress */}
      <div className="rounded-2xl bg-card p-5 mb-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium">Overall Progress</span>
          <span className="text-2xl font-bold text-primary">{overallPct}%</span>
        </div>
        <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
            style={{ width: `${overallPct}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {stats.daysCompleted} of {stats.totalDays} days completed
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2.5 mb-3">
        <StatCard icon={BookOpen} label="Chapters" value={`${stats.chaptersRead}`} sub="chapters read" color="text-primary" />
        <StatCard icon={Play} label="Videos" value={`${stats.videosWatched}/${stats.totalVideos}`} sub="watched" color="text-olive-light" />
        <StatCard icon={Trophy} label="Books" value={`${stats.booksCompleted}/${stats.totalBooks}`} sub="completed" color="text-amber" />
        <StatCard icon={Calendar} label="Psalms" value={`${stats.psalmsRead}`} sub="psalms read" color="text-primary" />
      </div>

      {/* Book Grid */}
      <div className="rounded-2xl bg-card p-5">
        <h3 className="text-sm font-medium mb-3">Books of the Bible</h3>
        <div className="grid grid-cols-8 gap-1.5">
          {booksInOrder.map(book => {
            const status = getBookStatus(book);
            return (
              <div
                key={book}
                title={book}
                className={`aspect-square rounded-md text-[6px] flex items-center justify-center font-medium leading-tight text-center p-0.5 transition-colors ${
                  status === "complete"
                    ? "bg-success/20 text-success border border-success/30"
                    : status === "partial"
                    ? "bg-amber/15 text-amber border border-amber/30"
                    : "bg-muted text-muted-foreground/50 border border-transparent"
                }`}
              >
                {book.replace(/^\d\s/, "").slice(0, 3)}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-4 mt-3 text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded bg-success/20 border border-success/30" /> Complete</div>
          <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded bg-amber/15 border border-amber/30" /> In Progress</div>
          <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded bg-muted" /> Not Started</div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color }: {
  icon: typeof BookOpen; label: string; value: string; sub: string; color: string;
}) {
  return (
    <div className="rounded-2xl bg-card p-3.5">
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className={`w-4 h-4 ${color}`} />
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-[10px] text-muted-foreground">{sub}</p>
    </div>
  );
}

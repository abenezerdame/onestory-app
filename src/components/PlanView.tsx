"use client";

import { useState, useRef, useEffect } from "react";
import { readingPlan, booksInOrder, DayReading } from "@/data/readingPlan";
import { parseChapters } from "@/data/bibleBooks";
import { DayCard } from "./DayCard";
import { ChevronDown, Check, Circle, Minus } from "lucide-react";

interface PlanViewProps {
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

type Filter = "all" | "incomplete" | "complete";

export function PlanView(props: PlanViewProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [expandedBook, setExpandedBook] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const todayDay = props.getCurrentDay();
  const todayRef = useRef<HTMLDivElement>(null);

  // Group days by book
  const bookGroups: Record<string, DayReading[]> = {};
  booksInOrder.forEach(book => {
    bookGroups[book] = readingPlan.filter(d => d.book === book);
  });

  // Auto-expand the book containing today's reading
  useEffect(() => {
    const todayReading = readingPlan.find(d => d.day === todayDay);
    if (todayReading) setExpandedBook(todayReading.book);
  }, [todayDay]);

  useEffect(() => {
    if (expandedBook && todayRef.current) {
      setTimeout(() => todayRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
    }
  }, [expandedBook]);

  const filterDays = (days: DayReading[]) => {
    if (filter === "complete") return days.filter(d => props.isDayComplete(d.day));
    if (filter === "incomplete") return days.filter(d => !props.isDayComplete(d.day));
    return days;
  };

  const getBookProgress = (book: string) => {
    const days = bookGroups[book];
    const completed = days.filter(d => props.isDayComplete(d.day)).length;
    return { completed, total: days.length };
  };

  return (
    <div className="px-4 pt-[72px] pb-8 max-w-lg mx-auto">
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight">Reading Plan</h1>
        <p className="text-sm text-muted-foreground">358 days through the Bible</p>
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {(["all", "incomplete", "complete"] as Filter[]).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${
              filter === f
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Book groups */}
      <div className="space-y-2">
        {booksInOrder.map(book => {
          const days = filterDays(bookGroups[book]);
          if (days.length === 0) return null;
          const { completed, total } = getBookProgress(book);
          const isOpen = expandedBook === book;
          const bookComplete = completed === total;

          return (
            <div key={book} className="rounded-2xl bg-card overflow-hidden">
              <button
                onClick={() => setExpandedBook(isOpen ? null : book)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  {bookComplete ? (
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                  ) : completed > 0 ? (
                    <div className="w-5 h-5 rounded-full bg-amber/20 flex items-center justify-center">
                      <Minus className="w-3 h-3 text-amber" />
                    </div>
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground/40" />
                  )}
                  <span className="font-medium text-sm">{book}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{completed}/{total}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </div>
              </button>

              {isOpen && (
                <div className="border-t">
                  {days.map(reading => {
                    const isExpanded = expandedDay === reading.day;
                    const isToday = reading.day === todayDay;
                    const complete = props.isDayComplete(reading.day);
                    const prog = props.getDayProgress(reading.day);

                    return (
                      <div key={reading.day} ref={isToday ? todayRef : undefined}>
                        <button
                          onClick={() => setExpandedDay(isExpanded ? null : reading.day)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-muted/30 transition-colors border-b border-border/50 last:border-b-0 ${
                            isToday ? "bg-primary/5" : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-mono w-8 ${isToday ? "text-primary font-bold" : "text-muted-foreground"}`}>
                              {reading.day}
                            </span>
                            <span className={`text-sm ${complete ? "text-muted-foreground" : ""}`}>
                              Ch. {reading.chapters}
                            </span>
                            {isToday && <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">today</span>}
                          </div>
                          <div className="flex items-center gap-2">
                            {complete ? (
                              <Check className="w-4 h-4 text-success" />
                            ) : prog > 0 ? (
                              <div className="w-6 h-1.5 rounded-full bg-muted overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: `${prog * 100}%` }} />
                              </div>
                            ) : null}
                          </div>
                        </button>
                        {isExpanded && (
                          <div className="px-3 py-3 bg-muted/20 border-b border-border/50">
                            <DayCard
                              reading={reading}
                              dateLabel={props.getDateForDay(reading.day).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                              isToday={isToday}
                              {...props}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { DayReading } from "@/data/readingPlan";
import { getYouVersionUrl, getPsalmUrl, parseChapters } from "@/data/bibleBooks";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, Check, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface DayCardProps {
  reading: DayReading;
  dateLabel: string;
  isToday: boolean;
  isChapterRead: (day: number, chapter: number) => boolean;
  isPsalmRead: (day: number) => boolean;
  isVideoWatched: (day: number, videoIndex: number) => boolean;
  isDayComplete: (day: number) => boolean;
  toggleChapter: (day: number, chapter: number) => void;
  togglePsalm: (day: number) => void;
  toggleVideo: (day: number, videoIndex: number) => void;
  markDayComplete: (day: number) => void;
  getDayProgress: (day: number) => number;
  onPrev?: () => void;
  onNext?: () => void;
  showNav?: boolean;
}

export function DayCard({
  reading, dateLabel, isToday, isChapterRead, isPsalmRead, isVideoWatched,
  isDayComplete: isDayCompleteFn, toggleChapter, togglePsalm, toggleVideo,
  markDayComplete, getDayProgress, onPrev, onNext, showNav = false,
}: DayCardProps) {
  const chapters = parseChapters(reading.chapters);
  const progress = getDayProgress(reading.day);
  const complete = isDayCompleteFn(reading.day);
  const circumference = 2 * Math.PI * 18;
  const offset = circumference - progress * circumference;

  return (
    <div className={`rounded-2xl border bg-card p-5 shadow-sm transition-all ${isToday ? "ring-2 ring-primary/30" : ""} ${complete ? "bg-success/5" : ""}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {showNav && (
            <button onClick={onPrev} className="p-1 rounded-full hover:bg-muted transition-colors" aria-label="Previous day">
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">Day {reading.day}</span>
              {isToday && <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">Today</span>}
              {complete && <Check className="w-4 h-4 text-success" />}
            </div>
            <p className="text-sm text-muted-foreground">{dateLabel}</p>
          </div>
          {showNav && (
            <button onClick={onNext} className="p-1 rounded-full hover:bg-muted transition-colors" aria-label="Next day">
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          )}
        </div>

        {/* Progress ring */}
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 -rotate-90" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" className="text-muted" strokeWidth="2.5" />
            <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor"
              className={complete ? "text-success" : "text-primary"}
              strokeWidth="2.5" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 0.5s ease" }} />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
            {Math.round(progress * 100)}%
          </span>
        </div>
      </div>

      {/* Book & Chapters */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2.5">
          <BookOpen className="w-4 h-4 text-primary" />
          <h3 className="font-medium text-sm text-primary">{reading.book}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {chapters.map(ch => {
            const read = isChapterRead(reading.day, ch);
            return (
              <div key={ch} className="flex items-center gap-1.5">
                <Checkbox
                  checked={read}
                  onCheckedChange={() => toggleChapter(reading.day, ch)}
                  className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <a
                  href={getYouVersionUrl(reading.book, ch)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm hover:underline transition-colors ${read ? "text-muted-foreground line-through" : "text-foreground"}`}
                >
                  Ch. {ch}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Psalm */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2.5">
          <BookOpen className="w-4 h-4 text-amber" />
          <h3 className="font-medium text-sm text-amber">Psalm</h3>
        </div>
        <div className="flex items-center gap-1.5">
          <Checkbox
            checked={isPsalmRead(reading.day)}
            onCheckedChange={() => togglePsalm(reading.day)}
            className="data-[state=checked]:bg-amber data-[state=checked]:border-amber"
          />
          <a
            href={getPsalmUrl(reading.psalm)}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm hover:underline transition-colors ${isPsalmRead(reading.day) ? "text-muted-foreground line-through" : "text-foreground"}`}
          >
            Psalm {reading.psalm}
          </a>
          <ExternalLink className="w-3 h-3 text-muted-foreground" />
        </div>
      </div>

      {/* Videos */}
      {reading.videos.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2.5">
            <Play className="w-4 h-4 text-olive-light" />
            <h3 className="font-medium text-sm text-olive-light">Videos</h3>
          </div>
          <div className="space-y-2">
            {reading.videos.map((video, i) => {
              const watched = isVideoWatched(reading.day, i);
              return (
                <div key={i} className="flex items-center gap-2">
                  <Checkbox
                    checked={watched}
                    onCheckedChange={() => toggleVideo(reading.day, i)}
                    className="data-[state=checked]:bg-olive-light data-[state=checked]:border-olive-light shrink-0"
                  />
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm hover:underline transition-colors flex-1 ${watched ? "text-muted-foreground line-through" : "text-foreground"}`}
                  >
                    {video.title}
                  </a>
                  <ExternalLink className="w-3 h-3 text-muted-foreground shrink-0" />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Mark all complete */}
      {!complete && (
        <Button
          onClick={() => markDayComplete(reading.day)}
          variant="outline"
          className="w-full mt-2 border-primary/20 text-primary hover:bg-primary/5"
          size="sm"
        >
          <Check className="w-4 h-4 mr-1.5" />
          Mark All Complete
        </Button>
      )}
    </div>
  );
}

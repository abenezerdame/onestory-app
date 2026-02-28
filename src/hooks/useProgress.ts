"use client";

import { useState, useCallback, useEffect } from "react";
import { readingPlan, totalVideos } from "@/data/readingPlan";
import { parseChapters } from "@/data/bibleBooks";

interface ProgressState {
  chaptersRead: Record<string, boolean>;
  psalmsRead: Record<string, boolean>;
  videosWatched: Record<string, boolean>;
}

const STORAGE_KEY = "onestory-progress";

function loadProgress(): ProgressState {
  if (typeof window === "undefined") return { chaptersRead: {}, psalmsRead: {}, videosWatched: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { chaptersRead: {}, psalmsRead: {}, videosWatched: {} };
}

function saveProgress(state: ProgressState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>({ chaptersRead: {}, psalmsRead: {}, videosWatched: {} });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setLoaded(true);
  }, []);

  const update = useCallback((newState: ProgressState) => {
    setProgress(newState);
    saveProgress(newState);
  }, []);

  const toggleChapter = useCallback((day: number, chapter: number) => {
    setProgress(prev => {
      const key = `d${day}-ch${chapter}`;
      const next = { ...prev, chaptersRead: { ...prev.chaptersRead, [key]: !prev.chaptersRead[key] } };
      if (!next.chaptersRead[key]) delete next.chaptersRead[key];
      saveProgress(next);
      return next;
    });
  }, []);

  const togglePsalm = useCallback((day: number) => {
    setProgress(prev => {
      const key = `d${day}-psalm`;
      const next = { ...prev, psalmsRead: { ...prev.psalmsRead, [key]: !prev.psalmsRead[key] } };
      if (!next.psalmsRead[key]) delete next.psalmsRead[key];
      saveProgress(next);
      return next;
    });
  }, []);

  const toggleVideo = useCallback((day: number, videoIndex: number) => {
    setProgress(prev => {
      const key = `d${day}-v${videoIndex}`;
      const next = { ...prev, videosWatched: { ...prev.videosWatched, [key]: !prev.videosWatched[key] } };
      if (!next.videosWatched[key]) delete next.videosWatched[key];
      saveProgress(next);
      return next;
    });
  }, []);

  const isChapterRead = useCallback((day: number, chapter: number) => {
    return !!progress.chaptersRead[`d${day}-ch${chapter}`];
  }, [progress]);

  const isPsalmRead = useCallback((day: number) => {
    return !!progress.psalmsRead[`d${day}-psalm`];
  }, [progress]);

  const isVideoWatched = useCallback((day: number, videoIndex: number) => {
    return !!progress.videosWatched[`d${day}-v${videoIndex}`];
  }, [progress]);

  const isDayComplete = useCallback((day: number) => {
    const reading = readingPlan.find(d => d.day === day);
    if (!reading) return false;
    const chapters = parseChapters(reading.chapters);
    const allChaptersRead = chapters.every(ch => progress.chaptersRead[`d${day}-ch${ch}`]);
    const psalmRead = !!progress.psalmsRead[`d${day}-psalm`];
    const allVideosWatched = reading.videos.length === 0 || reading.videos.every((_, i) => progress.videosWatched[`d${day}-v${i}`]);
    return allChaptersRead && psalmRead && allVideosWatched;
  }, [progress]);

  const markDayComplete = useCallback((day: number) => {
    const reading = readingPlan.find(d => d.day === day);
    if (!reading) return;
    setProgress(prev => {
      const next = { ...prev, chaptersRead: { ...prev.chaptersRead }, psalmsRead: { ...prev.psalmsRead }, videosWatched: { ...prev.videosWatched } };
      const chapters = parseChapters(reading.chapters);
      chapters.forEach(ch => { next.chaptersRead[`d${day}-ch${ch}`] = true; });
      next.psalmsRead[`d${day}-psalm`] = true;
      reading.videos.forEach((_, i) => { next.videosWatched[`d${day}-v${i}`] = true; });
      saveProgress(next);
      return next;
    });
  }, []);

  const markAllTillDay = useCallback((tillDay: number) => {
    setProgress(prev => {
      const next = { ...prev, chaptersRead: { ...prev.chaptersRead }, psalmsRead: { ...prev.psalmsRead }, videosWatched: { ...prev.videosWatched } };
      for (let day = 1; day <= tillDay; day++) {
        const reading = readingPlan.find(d => d.day === day);
        if (!reading) continue;
        const chapters = parseChapters(reading.chapters);
        chapters.forEach(ch => { next.chaptersRead[`d${day}-ch${ch}`] = true; });
        next.psalmsRead[`d${day}-psalm`] = true;
        reading.videos.forEach((_, i) => { next.videosWatched[`d${day}-v${i}`] = true; });
      }
      saveProgress(next);
      return next;
    });
  }, []);

  const getDayProgress = useCallback((day: number): number => {
    const reading = readingPlan.find(d => d.day === day);
    if (!reading) return 0;
    const chapters = parseChapters(reading.chapters);
    const totalItems = chapters.length + 1 + reading.videos.length; // chapters + psalm + videos
    let completed = 0;
    chapters.forEach(ch => { if (progress.chaptersRead[`d${day}-ch${ch}`]) completed++; });
    if (progress.psalmsRead[`d${day}-psalm`]) completed++;
    reading.videos.forEach((_, i) => { if (progress.videosWatched[`d${day}-v${i}`]) completed++; });
    return totalItems > 0 ? completed / totalItems : 0;
  }, [progress]);

  // Stats
  const stats = {
    daysCompleted: readingPlan.filter(d => isDayComplete(d.day)).length,
    totalDays: 358,
    chaptersRead: Object.keys(progress.chaptersRead).length,
    psalmsRead: Object.keys(progress.psalmsRead).length,
    videosWatched: Object.keys(progress.videosWatched).length,
    totalVideos,
    booksCompleted: (() => {
      const bookDays: Record<string, number[]> = {};
      readingPlan.forEach(d => {
        if (!bookDays[d.book]) bookDays[d.book] = [];
        bookDays[d.book].push(d.day);
      });
      return Object.entries(bookDays).filter(([, days]) =>
        days.every(day => isDayComplete(day))
      ).length;
    })(),
    totalBooks: [...new Set(readingPlan.map(d => d.book))].length,
    streak: (() => {
      // Calculate current streak from today backwards
      const startDateStr = typeof window !== "undefined" ? localStorage.getItem("onestory-start-date") : null;
      if (!startDateStr) return 0;
      const startDate = new Date(startDateStr);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      startDate.setHours(0, 0, 0, 0);
      const diffDays = Math.floor((today.getTime() - startDate.getTime()) / 86400000);
      const currentDay = Math.min(diffDays + 1, 358);
      let streak = 0;
      for (let d = currentDay; d >= 1; d--) {
        if (isDayComplete(d)) streak++;
        else break;
      }
      return streak;
    })(),
  };

  const exportProgress = useCallback(() => {
    const data = {
      progress: loadProgress(),
      startDate: localStorage.getItem("onestory-start-date"),
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `onestory-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const importProgress = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        if (data.progress) {
          update(data.progress);
        }
        if (data.startDate) {
          localStorage.setItem("onestory-start-date", data.startDate);
        }
      } catch {}
    };
    reader.readAsText(file);
  }, [update]);

  const resetProgress = useCallback(() => {
    const empty: ProgressState = { chaptersRead: {}, psalmsRead: {}, videosWatched: {} };
    update(empty);
  }, [update]);

  return {
    loaded,
    toggleChapter,
    togglePsalm,
    toggleVideo,
    isChapterRead,
    isPsalmRead,
    isVideoWatched,
    isDayComplete,
    markDayComplete,
    markAllTillDay,
    getDayProgress,
    stats,
    exportProgress,
    importProgress,
    resetProgress,
  };
}

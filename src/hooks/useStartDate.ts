"use client";

import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "onestory-start-date";
const DEFAULT_START = "2026-01-01";

export function useStartDate() {
  const [startDate, setStartDateState] = useState<string>(DEFAULT_START);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setStartDateState(stored);
    setLoaded(true);
  }, []);

  const setStartDate = useCallback((date: string) => {
    setStartDateState(date);
    localStorage.setItem(STORAGE_KEY, date);
  }, []);

  const getCurrentDay = useCallback((): number => {
    const start = new Date(startDate);
    const today = new Date();
    start.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const diffDays = Math.floor((today.getTime() - start.getTime()) / 86400000);
    return Math.max(1, Math.min(diffDays + 1, 358));
  }, [startDate]);

  const getDateForDay = useCallback((day: number): Date => {
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    const date = new Date(start);
    date.setDate(date.getDate() + day - 1);
    return date;
  }, [startDate]);

  return { startDate, setStartDate, getCurrentDay, getDateForDay, loaded };
}

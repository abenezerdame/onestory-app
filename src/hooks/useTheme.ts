"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "onestory-theme";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored !== null ? stored === "dark" : prefersDark;
    setIsDark(dark);
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    setLoaded(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      if (next) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      return next;
    });
  }, []);

  return { isDark, toggleTheme, loaded };
}

"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, Upload, Trash2, Calendar, Info, CheckCheck, Sun, Moon } from "lucide-react";

interface SettingsViewProps {
  startDate: string;
  setStartDate: (date: string) => void;
  exportProgress: () => void;
  importProgress: (file: File) => void;
  resetProgress: () => void;
  markAllTillDay: (day: number) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export function SettingsView({ startDate, setStartDate, exportProgress, importProgress, resetProgress, markAllTillDay, isDark, toggleTheme }: SettingsViewProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [resetOpen, setResetOpen] = useState(false);
  const [markTillDay, setMarkTillDay] = useState<number>(1);
  const [markTillOpen, setMarkTillOpen] = useState(false);

  return (
    <div className="px-4 pt-4 pb-24 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">Customize your experience</p>
      </div>

      {/* Appearance */}
      <div className="rounded-2xl border bg-card p-5 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isDark ? <Moon className="w-4 h-4 text-primary" /> : <Sun className="w-4 h-4 text-primary" />}
            <div>
              <h3 className="font-medium text-sm">Appearance</h3>
              <p className="text-xs text-muted-foreground">{isDark ? "Dark mode" : "Light mode"}</p>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
              isDark ? "bg-primary" : "bg-muted"
            }`}
            aria-label="Toggle dark mode"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 flex items-center justify-center ${
                isDark ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {isDark
                ? <Moon className="w-3 h-3 text-primary" />
                : <Sun className="w-3 h-3 text-amber" />
              }
            </span>
          </button>
        </div>
      </div>

      {/* Start Date */}
      <div className="rounded-2xl border bg-card p-5 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-primary" />
          <h3 className="font-medium text-sm">Start Date</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          Set the date you began (or plan to begin) the reading plan. Today&apos;s reading is calculated from this date.
        </p>
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Mark All Till Day */}
      <div className="rounded-2xl border bg-card p-5 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <CheckCheck className="w-4 h-4 text-primary" />
          <h3 className="font-medium text-sm">Mark All Till Day</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          Mark all days from day 1 up to a specific day as fully complete (chapters, psalm, and videos).
        </p>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            min={1}
            max={358}
            value={markTillDay}
            onChange={e => setMarkTillDay(Math.min(358, Math.max(1, parseInt(e.target.value) || 1)))}
            className="w-24 rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <span className="text-xs text-muted-foreground">of 358</span>
          <Dialog open={markTillOpen} onOpenChange={setMarkTillOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="ml-auto">
                <CheckCheck className="w-4 h-4 mr-1.5" />
                Mark Till Day {markTillDay}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Mark All Till Day {markTillDay}</DialogTitle>
                <DialogDescription>
                  This will mark all readings from day 1 through day {markTillDay} as complete. Already-completed days will not be affected.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setMarkTillOpen(false)}>Cancel</Button>
                <Button onClick={() => { markAllTillDay(markTillDay); setMarkTillOpen(false); }}>
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Data Management */}
      <div className="rounded-2xl border bg-card p-5 mb-4">
        <h3 className="font-medium text-sm mb-3">Data Management</h3>
        <div className="space-y-3">
          <Button onClick={exportProgress} variant="outline" className="w-full justify-start" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Progress
          </Button>

          <Button onClick={() => fileRef.current?.click()} variant="outline" className="w-full justify-start" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Import Progress
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept=".json"
            className="hidden"
            onChange={e => {
              const file = e.target.files?.[0];
              if (file) {
                importProgress(file);
                e.target.value = "";
              }
            }}
          />

          <Dialog open={resetOpen} onOpenChange={setResetOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-destructive border-destructive/20 hover:bg-destructive/5" size="sm">
                <Trash2 className="w-4 h-4 mr-2" />
                Reset All Progress
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reset Progress</DialogTitle>
                <DialogDescription>
                  This will permanently delete all your reading progress. This action cannot be undone. Consider exporting your data first.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setResetOpen(false)}>Cancel</Button>
                <Button variant="destructive" onClick={() => { resetProgress(); setResetOpen(false); }}>
                  Reset Everything
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* About */}
      <div className="rounded-2xl border bg-card p-5">
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-4 h-4 text-primary" />
          <h3 className="font-medium text-sm">About</h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2">
          This app tracks your progress through the <strong>One Story That Leads to Jesus</strong> annual
          reading plan by BibleProject. It covers the entire Bible in 358 days with daily Psalm readings
          and 204 companion videos.
        </p>
        <div className="space-y-1.5">
          <a
            href="https://bibleproject.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs text-primary hover:underline"
          >
            Visit BibleProject
          </a>
        </div>
        <p className="text-[10px] text-muted-foreground mt-3">
          All reading plan content and videos are property of BibleProject. Bible links open in YouVersion (NLT).
        </p>
      </div>
    </div>
  );
}

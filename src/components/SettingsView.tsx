"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, Upload, Trash2, Calendar, Info, CheckCheck, Sun, Moon, ChevronRight } from "lucide-react";

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

function Row({ icon: Icon, label, children, color = "text-primary" }: {
  icon: typeof Calendar;
  label: string;
  children?: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      <Icon className={`w-4.5 h-4.5 shrink-0 ${color}`} />
      <span className="flex-1 text-[15px]">{label}</span>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-border/60 mx-4" />;
}

export function SettingsView({ startDate, setStartDate, exportProgress, importProgress, resetProgress, markAllTillDay, isDark, toggleTheme }: SettingsViewProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [resetOpen, setResetOpen] = useState(false);
  const [markTillDay, setMarkTillDay] = useState<number>(1);
  const [markTillOpen, setMarkTillOpen] = useState(false);

  return (
    <div className="px-4 pt-[72px] pb-8 max-w-lg mx-auto">
      <div className="mb-5">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">Customize your experience</p>
      </div>

      {/* Appearance + Start Date */}
      <div className="bg-card rounded-2xl mb-3 overflow-hidden">
        {/* Dark mode toggle */}
        <Row icon={isDark ? Moon : Sun} label={isDark ? "Dark mode" : "Light mode"}>
          <button
            onClick={toggleTheme}
            className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
              isDark ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            aria-label="Toggle dark mode"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 flex items-center justify-center ${
                isDark ? "translate-x-5" : "translate-x-0"
              }`}
            >
              {isDark
                ? <Moon className="w-2.5 h-2.5 text-primary" />
                : <Sun className="w-2.5 h-2.5 text-amber" />
              }
            </span>
          </button>
        </Row>
        <Divider />
        {/* Start date */}
        <div className="px-4 py-3.5">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-4 h-4 shrink-0 text-primary" />
            <span className="flex-1 text-[15px]">Start Date</span>
          </div>
          <p className="text-xs text-muted-foreground mb-2 pl-7">
            The date you began the plan. Today&apos;s reading is calculated from this.
          </p>
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            className="w-full rounded-xl border bg-muted/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Mark All Till Day */}
      <div className="bg-card rounded-2xl mb-3 overflow-hidden">
        <div className="px-4 py-3.5">
          <div className="flex items-center gap-3 mb-2">
            <CheckCheck className="w-4 h-4 shrink-0 text-primary" />
            <span className="flex-1 text-[15px]">Mark All Till Day</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3 pl-7">
            Bulk-mark all days from day 1 through a chosen day as complete.
          </p>
          <div className="flex items-center gap-2 pl-7">
            <input
              type="number"
              min={1}
              max={358}
              value={markTillDay}
              onChange={e => setMarkTillDay(Math.min(358, Math.max(1, parseInt(e.target.value) || 1)))}
              className="w-20 rounded-xl border bg-muted/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <span className="text-xs text-muted-foreground">of 358</span>
            <Dialog open={markTillOpen} onOpenChange={setMarkTillOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto">
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
                  <Button onClick={() => { markAllTillDay(markTillDay); setMarkTillOpen(false); }}>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-card rounded-2xl mb-3 overflow-hidden">
        <button
          onClick={exportProgress}
          className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-muted/40 active:bg-muted/60 transition-colors text-left"
        >
          <Download className="w-4 h-4 shrink-0 text-primary" />
          <span className="flex-1 text-[15px]">Export Progress</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
        </button>
        <Divider />
        <button
          onClick={() => fileRef.current?.click()}
          className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-muted/40 active:bg-muted/60 transition-colors text-left"
        >
          <Upload className="w-4 h-4 shrink-0 text-primary" />
          <span className="flex-1 text-[15px]">Import Progress</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
        </button>
        <input
          ref={fileRef}
          type="file"
          accept=".json"
          className="hidden"
          onChange={e => {
            const file = e.target.files?.[0];
            if (file) { importProgress(file); e.target.value = ""; }
          }}
        />
        <Divider />
        <Dialog open={resetOpen} onOpenChange={setResetOpen}>
          <DialogTrigger asChild>
            <button className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-destructive/5 active:bg-destructive/10 transition-colors text-left">
              <Trash2 className="w-4 h-4 shrink-0 text-destructive" />
              <span className="flex-1 text-[15px] text-destructive">Reset All Progress</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reset Progress</DialogTitle>
              <DialogDescription>
                This will permanently delete all your reading progress. This cannot be undone. Consider exporting your data first.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setResetOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={() => { resetProgress(); setResetOpen(false); }}>Reset Everything</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* About */}
      <div className="bg-card rounded-2xl overflow-hidden">
        <div className="px-4 py-3.5">
          <div className="flex items-center gap-3 mb-2">
            <Info className="w-4 h-4 shrink-0 text-primary" />
            <span className="text-[15px] font-medium">About</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed pl-7 mb-2">
            Tracks your progress through the <strong>One Story That Leads to Jesus</strong> annual
            reading plan by BibleProject — 358 days, daily Psalms, and 204 companion videos.
          </p>
          <a
            href="https://bibleproject.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-7 text-xs text-primary hover:underline block"
          >
            Visit BibleProject
          </a>
          <p className="text-[10px] text-muted-foreground mt-2 pl-7">
            All content is property of BibleProject. Bible links open in YouVersion (NLT).
          </p>
        </div>
      </div>
    </div>
  );
}

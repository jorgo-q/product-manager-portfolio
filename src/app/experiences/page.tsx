"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

// --- Location data (percent of SVG width/height) ---
const HOBBY_LOCATIONS = [
{ country: "Albania", flag: "🇦🇱", activity: "cycled", x: 53.2, y: 49.2 },
{ country: "Greece", flag: "🇬🇷", activity: "travel", x: 54.7, y: 51.0 },
{ country: "Bosnia & Herzegovina", flag: "🇧🇦", activity: "travel", x: 52.0, y: 48.6 },
{ country: "Montenegro", flag: "🇲🇪", activity: "travel", x: 52.6, y: 49.6 },
{ country: "Serbia", flag: "🇷🇸", activity: "travel", x: 52.9, y: 47.9 },
{ country: "Bulgaria", flag: "🇧🇬", activity: "danced", x: 54.0, y: 49.3 },
{ country: "Italy", flag: "🇮🇹", activity: "travel", x: 50.2, y: 48.3 },
{ country: "Germany", flag: "🇩🇪", activity: "cycled", x: 50.5, y: 42.8 },
{ country: "Turkey", flag: "🇹🇷", activity: "travel", x: 56.9, y: 52.0 },
{ country: "Spain", flag: "🇪🇸", activity: "ran", x: 46.6, y: 49.3 },
{ country: "Kosovo", flag: "🇽🇰", activity: "ran", x: 53.2, y: 48.6 },
{ country: "Switzerland", flag: "🇨🇭", activity: "travel", x: 49.7, y: 45.3 },
{ country: "Belgium", flag: "🇧🇪", activity: "ran", x: 49.0, y: 43.7 },
{ country: "Portugal", flag: "🇵🇹", activity: "cycled", x: 44.8, y: 51.8 },

// USA
{ country: "Massachusetts", flag: "🇺🇸", activity: "travel", x: 27.8, y: 41.0 },
{ country: "New York", flag: "🇺🇸", activity: "travel", x: 27.2, y: 41.5 },
{ country: "Pennsylvania", flag: "🇺🇸", activity: "travel", x: 26.8, y: 42.2 },
{ country: "Delaware", flag: "🇺🇸", activity: "travel", x: 27.4, y: 42.8 },
{ country: "Maryland", flag: "🇺🇸", activity: "travel", x: 27.0, y: 43.5 },
{ country: "Texas", flag: "🇺🇸", activity: "travel", x: 23.0, y: 58.0 }];


const WORK_STUDY_LOCATIONS = [
{ country: "Albania", flag: "🇦🇱", details: "Publer, EasyPay", type: "work", x: 53.2, y: 49.2 },
{ country: "Ireland", flag: "🇮🇪", details: "Trainly", type: "work", x: 46.8, y: 41.0 },
{ country: "New York", flag: "🇺🇸", details: "Redocs", type: "work", x: 27.2, y: 41.5 },
{ country: "Houston", flag: "🇺🇸", details: "Rice University", type: "study", x: 23.4, y: 59.0 },
{ country: "Bulgaria", flag: "🇧🇬", details: "AUBG", type: "study", x: 54.0, y: 49.3 }];


interface TooltipData {
  country: string;
  flag: string;
  activity?: string;
  details?: string;
  type?: string;
  x: number; // percent
  y: number; // percent
}

export default function ExperiencesPage() {
  const [hoveredPin, setHoveredPin] = useState<TooltipData | null>(null);
  const [devLogClicks, setDevLogClicks] = useState(false);

  return (
    <div className="min-h-dvh bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Experiences</h1>
            <p className="text-lg text-[var(--color-muted-foreground)] mb-2 !whitespace-pre-line">
              Under construction 🚧
            </p>
            <p className="text-base text-[var(--color-muted-foreground)] max-w-2xl mx-auto !whitespace-pre-line">
              Exploring the world through cycling, running, dancing, and building products.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <svg width="20" height="24" viewBox="0 0 20 30" className="flex-shrink-0">
                <path
                  d="M 10,5 C 5.5,5 2,8.5 2,13 C 2,16.5 10,25 10,30 C 10,25 18,16.5 18,13 C 18,8.5 14.5,5 10,5 Z"
                  fill="#3b82f6"
                  stroke="white"
                  strokeWidth="1" />

                <circle cx="10" cy="13" r="2.5" fill="white" />
              </svg>
              <span className="text-sm" style={{ color: "#3b82f6" }}>
                Hobbies & Travel
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="24" viewBox="0 0 20 30" className="flex-shrink-0">
                <path
                  d="M 10,5 C 5.5,5 2,8.5 2,13 C 2,16.5 10,25 10,30 C 10,25 18,16.5 18,13 C 18,8.5 14.5,5 10,5 Z"
                  fill="#a855f7"
                  stroke="white"
                  strokeWidth="1" />

                <circle cx="10" cy="13" r="2.5" fill="white" />
              </svg>
              <span className="text-sm" style={{ color: "#a855f7" }}>
                Work & Study
              </span>
            </div>

            {/* Dev helper toggle */}
            <button
              onClick={() => setDevLogClicks((v) => !v)}
              className="rounded-md border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted-foreground)] hover:bg-[var(--color-card)]"
              title="Click the map to log percent coords to the console">

              {devLogClicks ? "Disable" : "Enable"} click-to-copy coords
            </button>
          </div>

          {/* World Map Container */}
          <div className="relative w-full max-w-6xl mx-auto bg-[var(--color-card)] rounded-2xl border border-[var(--color-border)] p-8 overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56%" }}>
              {/* World Map SVG */}
              <svg
                viewBox="0 0 1000 560"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(e) => {
                  if (!devLogClicks) return;
                  const svg = e.currentTarget;
                  const rect = svg.getBoundingClientRect();
                  const px = (e.clientX - rect.left) / rect.width * 100;
                  const py = (e.clientY - rect.top) / rect.height * 100;
                  const x = Math.round(px * 10) / 10;
                  const y = Math.round(py * 10) / 10;
                  // Logs a snippet ready to paste into your arrays:
                  console.log(`{ x: ${x}, y: ${y} }`);
                }}>

                <defs>
                  {/* Blue pin (tip centered at x/y) */}
                  <g id="blue-pin">
                    <path
                      d="M 0,-14 C -5,-14 -9,-10 -9,-5 C -9,0 0,7 0,16 C 0,7 9,0 9,-5 C 9,-10 5,-14 0,-14 Z"
                      fill="#3b82f6"
                      stroke="white"
                      strokeWidth="1.5" />

                    <circle cx="0" cy="-5" r="3" fill="white" />
                  </g>

                  {/* Purple pin */}
                  <g id="purple-pin">
                    <path
                      d="M 0,-14 C -5,-14 -9,-10 -9,-5 C -9,0 0,7 0,16 C 0,7 9,0 9,-5 C 9,-10 5,-14 0,-14 Z"
                      fill="#a855f7"
                      stroke="white"
                      strokeWidth="1.5" />

                    <circle cx="0" cy="-5" r="3" fill="white" />
                  </g>
                </defs>

                {/* Background image */}
                <image
                  href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/One-Stroke-WMap-1762375044669.jpg?width=8000&height=8000&resize=contain"
                  x="0"
                  y="0"
                  width="1000"
                  height="560"
                  preserveAspectRatio="xMidYMid meet"
                  opacity="0.6" />


                {/* Hobby Pins (Blue) */}
                {HOBBY_LOCATIONS.map((loc, i) =>
                <use
                  key={`hobby-${i}`}
                  href="#blue-pin"
                  x={`${loc.x}%`}
                  y={`${loc.y}%`}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPin(loc)}
                  onMouseLeave={() => setHoveredPin(null)} />

                )}

                {/* Work/Study Pins (Purple) */}
                {WORK_STUDY_LOCATIONS.map((loc, i) =>
                <use
                  key={`work-${i}`}
                  href="#purple-pin"
                  x={`${loc.x}%`}
                  y={`${loc.y}%`}
                  className="cursor-pointer !w-[NaNpx] !h-[NaNpx]"
                  onMouseEnter={() => setHoveredPin(loc)}
                  onMouseLeave={() => setHoveredPin(null)} />

                )}
              </svg>

              {/* Tooltip */}
              {hoveredPin &&
              <div
                className="absolute z-10 bg-white dark:bg-gray-800 border border-[var(--color-border)] rounded-lg shadow-lg px-4 py-3 pointer-events-none"
                style={{
                  left: `${hoveredPin.x}%`,
                  top: `${hoveredPin.y}%`,
                  transform: "translate(-50%, -120%)"
                }}>

                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <span className="text-2xl">{hoveredPin.flag}</span>
                    <div>
                      <p className="font-semibold text-sm">{hoveredPin.country}</p>
                      {hoveredPin.activity &&
                    <p className="text-xs text-[var(--color-muted-foreground)]">
                          {hoveredPin.activity}
                        </p>
                    }
                      {hoveredPin.details &&
                    <p className="text-xs text-[var(--color-muted-foreground)]">
                          {hoveredPin.details} ({hoveredPin.type})
                        </p>
                    }
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">{HOBBY_LOCATIONS.length}</div>
              <div className="text-sm text-[var(--color-muted-foreground)]">Places Explored</div>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">
                {WORK_STUDY_LOCATIONS.length}
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">Work & Study Locations</div>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {HOBBY_LOCATIONS.filter((l) => l.activity === "cycled").length}
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">Cycling Destinations</div>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {HOBBY_LOCATIONS.filter((l) => l.activity === "ran").length}
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">Running Spots</div>
            </div>
          </div>
        </div>
      </main>
    </div>);

}
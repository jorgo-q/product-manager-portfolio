"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

// Location data with coordinates (approximate percentages for positioning on map)
const HOBBY_LOCATIONS = [
  { country: "Albania", flag: "🇦🇱", activity: "cycled", x: 50, y: 42 },
  { country: "Greece", flag: "🇬🇷", activity: "travel", x: 52, y: 44 },
  { country: "Bosnia & Herzegovina", flag: "🇧🇦", activity: "travel", x: 48, y: 38 },
  { country: "Montenegro", flag: "🇲🇪", activity: "travel", x: 49, y: 40 },
  { country: "Serbia", flag: "🇷🇸", activity: "travel", x: 50, y: 38 },
  { country: "Bulgaria", flag: "🇧🇬", activity: "danced", x: 53, y: 40 },
  { country: "Italy", flag: "🇮🇹", activity: "travel", x: 45, y: 40 },
  { country: "Germany", flag: "🇩🇪", activity: "cycled", x: 45, y: 34 },
  { country: "Turkey", flag: "🇹🇷", activity: "travel", x: 56, y: 44 },
  { country: "Spain", flag: "🇪🇸", activity: "ran", x: 40, y: 42 },
  { country: "Kosovo", flag: "🇽🇰", activity: "ran", x: 50, y: 40 },
  { country: "Switzerland", flag: "🇨🇭", activity: "travel", x: 44, y: 36 },
  { country: "Belgium", flag: "🇧🇪", activity: "ran", x: 43, y: 33 },
  { country: "Portugal", flag: "🇵🇹", activity: "cycled", x: 38, y: 43 },
  { country: "Massachusetts", flag: "🇺🇸", activity: "travel", x: 22, y: 40 },
  { country: "New York", flag: "🇺🇸", activity: "travel", x: 22, y: 41 },
  { country: "Texas", flag: "🇺🇸", activity: "travel", x: 18, y: 48 },
  { country: "Delaware", flag: "🇺🇸", activity: "travel", x: 23, y: 43 },
  { country: "Pennsylvania", flag: "🇺🇸", activity: "travel", x: 23, y: 42 },
  { country: "Maryland", flag: "🇺🇸", activity: "travel", x: 23, y: 43 },
];

const WORK_STUDY_LOCATIONS = [
  { country: "Albania", flag: "🇦🇱", details: "Publer, EasyPay", type: "work", x: 50, y: 42 },
  { country: "Ireland", flag: "🇮🇪", details: "Trainly", type: "work", x: 39, y: 31 },
  { country: "New York", flag: "🇺🇸", details: "Redocs", type: "work", x: 22, y: 41 },
  { country: "Houston", flag: "🇺🇸", details: "Rice University", type: "study", x: 18, y: 48 },
  { country: "Bulgaria", flag: "🇧🇬", details: "AUBG", type: "study", x: 53, y: 40 },
];

interface TooltipData {
  country: string;
  flag: string;
  activity?: string;
  details?: string;
  type?: string;
  x: number;
  y: number;
}

export default function ExperiencesPage() {
  const [hoveredPin, setHoveredPin] = useState<TooltipData | null>(null);

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
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Experiences
            </h1>
            <p className="text-lg text-[var(--color-muted-foreground)] mb-2">
              Work in Progress — Under Design
            </p>
            <p className="text-base text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
              Exploring the world through cycling, running, dancing, and building products across continents
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <span className="text-sm text-[var(--color-muted-foreground)]">Hobbies & Travel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-500"></div>
              <span className="text-sm text-[var(--color-muted-foreground)]">Work & Study</span>
            </div>
          </div>

          {/* World Map Container */}
          <div className="relative w-full max-w-6xl mx-auto bg-[var(--color-card)] rounded-2xl border border-[var(--color-border)] p-8 overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "50%" }}>
              {/* Simple World Map SVG */}
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full"
                style={{ filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.05))" }}
              >
                {/* Simplified world map paths */}
                <g fill="var(--color-muted)" stroke="var(--color-border)" strokeWidth="1">
                  {/* North America */}
                  <path d="M 50 180 Q 80 160 120 170 L 140 160 L 160 180 L 180 200 Q 200 220 190 250 L 170 270 L 150 260 L 130 240 L 100 230 Q 70 210 50 180 Z" />
                  {/* South America */}
                  <path d="M 200 350 Q 220 330 240 340 L 250 380 L 240 420 Q 220 440 210 420 L 200 380 Z" />
                  {/* Europe */}
                  <path d="M 420 160 L 460 150 L 480 170 L 490 190 L 470 200 L 450 190 L 430 180 Z" />
                  {/* Africa */}
                  <path d="M 450 250 L 480 240 L 510 260 L 520 300 L 510 350 L 480 370 L 460 350 L 450 310 Z" />
                  {/* Asia */}
                  <path d="M 550 150 L 650 140 L 720 160 L 750 190 L 740 220 L 700 240 L 650 230 L 600 220 L 570 200 Z" />
                  {/* Australia */}
                  <path d="M 700 380 L 750 370 L 780 390 L 770 420 L 740 425 L 710 410 Z" />
                </g>

                {/* Hobby Pins (Blue) */}
                {HOBBY_LOCATIONS.map((location, index) => (
                  <g key={`hobby-${index}`}>
                    <circle
                      cx={location.x * 10}
                      cy={location.y * 10}
                      r="8"
                      fill="#3b82f6"
                      stroke="white"
                      strokeWidth="2"
                      className="cursor-pointer transition-all hover:r-10 hover:scale-125"
                      onMouseEnter={() => setHoveredPin(location)}
                      onMouseLeave={() => setHoveredPin(null)}
                    />
                  </g>
                ))}

                {/* Work/Study Pins (Purple) */}
                {WORK_STUDY_LOCATIONS.map((location, index) => (
                  <g key={`work-${index}`}>
                    <circle
                      cx={location.x * 10}
                      cy={location.y * 10}
                      r="8"
                      fill="#a855f7"
                      stroke="white"
                      strokeWidth="2"
                      className="cursor-pointer transition-all hover:scale-125"
                      onMouseEnter={() => setHoveredPin(location)}
                      onMouseLeave={() => setHoveredPin(null)}
                    />
                  </g>
                ))}
              </svg>

              {/* Tooltip */}
              {hoveredPin && (
                <div
                  className="absolute z-10 bg-white dark:bg-gray-800 border border-[var(--color-border)] rounded-lg shadow-lg px-4 py-3 pointer-events-none"
                  style={{
                    left: `${hoveredPin.x}%`,
                    top: `${hoveredPin.y}%`,
                    transform: "translate(-50%, -120%)",
                  }}
                >
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <span className="text-2xl">{hoveredPin.flag}</span>
                    <div>
                      <p className="font-semibold text-sm">{hoveredPin.country}</p>
                      {hoveredPin.activity && (
                        <p className="text-xs text-[var(--color-muted-foreground)]">
                          {hoveredPin.activity}
                        </p>
                      )}
                      {hoveredPin.details && (
                        <p className="text-xs text-[var(--color-muted-foreground)]">
                          {hoveredPin.details} ({hoveredPin.type})
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Activities Summary */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {HOBBY_LOCATIONS.length}
              </div>
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
                {HOBBY_LOCATIONS.filter(l => l.activity === "cycled").length}
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">Cycling Destinations</div>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {HOBBY_LOCATIONS.filter(l => l.activity === "ran").length}
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">Running Spots</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

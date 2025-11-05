"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

// Location data with coordinates (percentages based on actual world map geography)
const HOBBY_LOCATIONS = [
  { country: "Albania", flag: "🇦🇱", activity: "cycled", x: 52, y: 43 },
  { country: "Greece", flag: "🇬🇷", activity: "travel", x: 54, y: 45 },
  { country: "Bosnia & Herzegovina", flag: "🇧🇦", activity: "travel", x: 51.5, y: 42 },
  { country: "Montenegro", flag: "🇲🇪", activity: "travel", x: 51.8, y: 43 },
  { country: "Serbia", flag: "🇷🇸", activity: "travel", x: 52.5, y: 42 },
  { country: "Bulgaria", flag: "🇧🇬", activity: "danced", x: 54, y: 43 },
  { country: "Italy", flag: "🇮🇹", activity: "travel", x: 50, y: 43 },
  { country: "Germany", flag: "🇩🇪", activity: "cycled", x: 50, y: 38 },
  { country: "Turkey", flag: "🇹🇷", activity: "travel", x: 57, y: 45 },
  { country: "Spain", flag: "🇪🇸", activity: "ran", x: 47, y: 44 },
  { country: "Kosovo", flag: "🇽🇰", activity: "ran", x: 52.3, y: 43 },
  { country: "Switzerland", flag: "🇨🇭", activity: "travel", x: 49.5, y: 40 },
  { country: "Belgium", flag: "🇧🇪", activity: "ran", x: 48.5, y: 38 },
  { country: "Portugal", flag: "🇵🇹", activity: "cycled", x: 46, y: 45 },
  { country: "Massachusetts", flag: "🇺🇸", activity: "travel", x: 27, y: 38 },
  { country: "New York", flag: "🇺🇸", activity: "travel", x: 26.5, y: 39 },
  { country: "Texas", flag: "🇺🇸", activity: "travel", x: 22, y: 47 },
  { country: "Delaware", flag: "🇺🇸", activity: "travel", x: 27, y: 40 },
  { country: "Pennsylvania", flag: "🇺🇸", activity: "travel", x: 26.8, y: 39.5 },
  { country: "Maryland", flag: "🇺🇸", activity: "travel", x: 27, y: 40 },
];

const WORK_STUDY_LOCATIONS = [
  { country: "Albania", flag: "🇦🇱", details: "Publer, EasyPay", type: "work", x: 52, y: 43 },
  { country: "Ireland", flag: "🇮🇪", details: "Trainly", type: "work", x: 46.5, y: 36 },
  { country: "New York", flag: "🇺🇸", details: "Redocs", type: "work", x: 26.5, y: 39 },
  { country: "Houston", flag: "🇺🇸", details: "Rice University", type: "study", x: 22, y: 47 },
  { country: "Bulgaria", flag: "🇧🇬", details: "AUBG", type: "study", x: 54, y: 43 },
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
              <div className="text-2xl">📍</div>
              <span className="text-sm text-[var(--color-muted-foreground)]" style={{ color: '#3b82f6' }}>Hobbies & Travel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl" style={{ filter: 'hue-rotate(180deg)' }}>📍</div>
              <span className="text-sm text-[var(--color-muted-foreground)]" style={{ color: '#a855f7' }}>Work & Study</span>
            </div>
          </div>

          {/* World Map Container */}
          <div className="relative w-full max-w-6xl mx-auto bg-[var(--color-card)] rounded-2xl border border-[var(--color-border)] p-8 overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56%" }}>
              {/* World Map SVG with accurate outlines */}
              <svg
                viewBox="0 0 1000 560"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Pin marker definition for blue (hobbies) */}
                  <g id="blue-pin">
                    <path
                      d="M 0,-20 C -5.5,-20 -10,-15.5 -10,-10 C -10,-5 0,0 0,10 C 0,0 10,-5 10,-10 C 10,-15.5 5.5,-20 0,-20 Z"
                      fill="#3b82f6"
                      stroke="white"
                      strokeWidth="1.5"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                    />
                    <circle cx="0" cy="-10" r="3" fill="white" />
                  </g>
                  
                  {/* Pin marker definition for purple (work/study) */}
                  <g id="purple-pin">
                    <path
                      d="M 0,-20 C -5.5,-20 -10,-15.5 -10,-10 C -10,-5 0,0 0,10 C 0,0 10,-5 10,-10 C 10,-15.5 5.5,-20 0,-20 Z"
                      fill="#a855f7"
                      stroke="white"
                      strokeWidth="1.5"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                    />
                    <circle cx="0" cy="-10" r="3" fill="white" />
                  </g>
                </defs>

                {/* Accurate world map outline */}
                <g fill="none" stroke="var(--color-muted-foreground)" strokeWidth="1" opacity="0.2">
                  {/* North America */}
                  <path d="M 80,180 L 90,150 L 110,140 L 130,135 L 150,140 L 170,155 L 190,175 L 210,200 L 220,230 L 215,260 L 200,280 L 180,290 L 160,285 L 140,270 L 120,250 L 100,220 Z" />
                  
                  {/* Central America */}
                  <path d="M 160,285 L 170,300 L 175,315 L 172,325 L 165,330 L 158,325 L 155,310 Z" />
                  
                  {/* South America */}
                  <path d="M 175,315 L 190,320 L 210,335 L 225,360 L 235,390 L 240,420 L 235,445 L 220,460 L 200,465 L 185,455 L 175,435 L 170,405 L 168,375 L 170,345 Z" />
                  
                  {/* Europe */}
                  <path d="M 460,180 L 475,170 L 495,165 L 515,170 L 535,185 L 545,205 L 540,225 L 525,235 L 505,235 L 485,225 L 470,210 L 465,190 Z" />
                  
                  {/* Africa */}
                  <path d="M 480,250 L 500,245 L 525,250 L 545,265 L 560,290 L 570,320 L 575,355 L 575,385 L 565,415 L 545,435 L 520,440 L 495,435 L 475,415 L 465,385 L 463,350 L 468,315 L 475,280 Z" />
                  
                  {/* Asia */}
                  <path d="M 550,170 L 580,160 L 620,155 L 660,160 L 700,175 L 735,195 L 760,220 L 770,245 L 765,270 L 745,285 L 715,290 L 680,285 L 645,275 L 610,260 L 580,240 L 560,215 L 550,190 Z" />
                  
                  {/* Middle East */}
                  <path d="M 545,235 L 560,240 L 580,255 L 595,275 L 590,290 L 575,295 L 560,290 L 550,275 L 545,255 Z" />
                  
                  {/* India */}
                  <path d="M 650,275 L 665,270 L 680,275 L 690,295 L 692,320 L 685,340 L 670,350 L 655,345 L 645,325 L 643,300 Z" />
                  
                  {/* Southeast Asia */}
                  <path d="M 700,310 L 715,305 L 730,310 L 740,325 L 735,340 L 720,345 L 705,340 L 698,325 Z" />
                  
                  {/* Australia */}
                  <path d="M 730,385 L 760,380 L 790,385 L 815,400 L 830,420 L 835,445 L 825,465 L 800,475 L 770,475 L 745,465 L 725,445 L 720,420 L 725,400 Z" />
                  
                  {/* Greenland */}
                  <path d="M 380,90 L 410,85 L 440,95 L 455,115 L 450,140 L 430,150 L 405,145 L 385,130 L 380,110 Z" />
                  
                  {/* Antarctica */}
                  <path d="M 100,520 L 900,520 L 900,540 L 100,540 Z" opacity="0.1" />
                </g>

                {/* Hobby Pins (Blue) */}
                {HOBBY_LOCATIONS.map((location, index) => (
                  <use
                    key={`hobby-${index}`}
                    href="#blue-pin"
                    x={location.x * 10}
                    y={location.y * 10}
                    className="cursor-pointer transition-transform hover:scale-125"
                    onMouseEnter={() => setHoveredPin(location)}
                    onMouseLeave={() => setHoveredPin(null)}
                  />
                ))}

                {/* Work/Study Pins (Purple) */}
                {WORK_STUDY_LOCATIONS.map((location, index) => (
                  <use
                    key={`work-${index}`}
                    href="#purple-pin"
                    x={location.x * 10}
                    y={location.y * 10}
                    className="cursor-pointer transition-transform hover:scale-125"
                    onMouseEnter={() => setHoveredPin(location)}
                    onMouseLeave={() => setHoveredPin(null)}
                  />
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
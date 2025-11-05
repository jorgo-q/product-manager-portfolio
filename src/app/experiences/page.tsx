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
            <div className="relative w-full" style={{ paddingBottom: "56%" }}>
              {/* World Map SVG with proper outlines */}
              <svg
                viewBox="0 0 1000 560"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <style>{`
                    .land { 
                      fill: var(--color-muted); 
                      stroke: var(--color-foreground); 
                      stroke-width: 1.5; 
                      opacity: 0.3;
                    }
                  `}</style>
                </defs>

                {/* Improved continent outlines based on actual geography */}
                <g className="land">
                  {/* North America */}
                  <path d="M 50 220 L 60 180 L 80 160 L 100 150 L 120 140 L 140 145 L 160 150 L 180 160 L 200 180 L 210 200 L 220 220 L 230 240 L 235 260 L 230 280 L 220 300 L 210 310 L 190 320 L 170 325 L 150 320 L 130 310 L 110 300 L 95 290 L 85 280 L 75 260 L 65 240 L 55 230 Z M 160 320 L 170 340 L 175 360 L 180 380 L 175 400 L 165 410 L 150 415 L 135 410 L 125 395 L 120 375 L 125 355 L 135 340 L 145 330 Z" />
                  
                  {/* South America */}
                  <path d="M 240 350 L 250 330 L 265 325 L 280 330 L 290 345 L 295 365 L 300 385 L 305 405 L 310 425 L 310 445 L 305 465 L 295 480 L 280 490 L 265 495 L 250 490 L 240 480 L 230 465 L 225 445 L 220 425 L 220 405 L 225 385 L 230 370 Z" />
                  
                  {/* Europe */}
                  <path d="M 460 190 L 475 185 L 490 180 L 505 185 L 520 195 L 530 210 L 535 225 L 530 240 L 520 250 L 505 255 L 490 255 L 475 250 L 465 240 L 460 225 L 458 210 Z M 440 215 L 445 205 L 455 200 L 465 205 L 470 215 L 465 225 L 455 230 L 445 225 Z M 475 175 L 485 170 L 495 175 L 500 185 L 495 195 L 485 200 L 475 195 Z" />
                  
                  {/* Africa */}
                  <path d="M 485 280 L 500 275 L 515 275 L 530 280 L 545 290 L 555 305 L 565 325 L 570 345 L 575 365 L 575 385 L 570 405 L 560 420 L 545 430 L 530 435 L 515 435 L 500 430 L 485 420 L 475 405 L 470 385 L 470 365 L 472 345 L 475 325 L 478 305 L 482 290 Z" />
                  
                  {/* Asia */}
                  <path d="M 545 170 L 565 165 L 585 160 L 605 158 L 625 160 L 645 165 L 665 172 L 685 180 L 705 190 L 720 200 L 735 215 L 745 230 L 750 245 L 748 260 L 740 275 L 725 285 L 710 290 L 695 292 L 680 290 L 665 285 L 650 280 L 635 275 L 620 270 L 605 260 L 590 250 L 575 240 L 565 230 L 555 215 L 548 200 L 545 185 Z M 760 220 L 775 215 L 790 220 L 800 235 L 805 250 L 800 265 L 785 275 L 770 275 L 760 265 L 755 250 L 758 235 Z" />
                  
                  {/* Australia */}
                  <path d="M 755 390 L 770 385 L 790 385 L 810 390 L 825 400 L 835 415 L 840 430 L 835 445 L 820 455 L 800 460 L 780 458 L 765 450 L 755 435 L 750 420 L 752 405 Z" />
                  
                  {/* Antarctica (bottom) */}
                  <path d="M 100 520 L 900 520 L 900 545 L 100 545 Z" opacity="0.2" />
                </g>

                {/* Hobby Pins (Blue) */}
                {HOBBY_LOCATIONS.map((location, index) => (
                  <g key={`hobby-${index}`}>
                    <circle
                      cx={location.x * 10}
                      cy={location.y * 10}
                      r="10"
                      fill="#3b82f6"
                      stroke="white"
                      strokeWidth="2.5"
                      className="cursor-pointer transition-all hover:scale-125"
                      style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
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
                      r="10"
                      fill="#a855f7"
                      stroke="white"
                      strokeWidth="2.5"
                      className="cursor-pointer transition-all hover:scale-125"
                      style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
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
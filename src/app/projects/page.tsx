"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, MapPin } from "lucide-react";

const PROJECTS = [
  {
    id: "rehub",
    title: "ReHub Compliance Automation",
    company: "Redocs",
    period: "Dec 2024 – Present",
    location: "NYC, Remote",
    description: "AI-powered compliance portal for real estate building managers",
    problem: "Real estate building managers struggling with manual compliance tracking.",
    solution: "Built an AI-powered compliance portal using Claude AI, to automate compliance and invoice management.",
    impact: "Cut manual reporting time and improved client satisfaction for 40K+ NYC buildings.",
    tags: ["AI", "Compliance", "Real Estate Tech"],
  },
  {
    id: "openbanking",
    title: "Open Banking Platform",
    company: "EasyPay",
    period: "Mar 2024 – Jul 2025",
    location: "Tirana, Albania",
    description: "Albania's first Open Banking services enabling fintech innovation",
    problem: "Closed banking systems limited fintech innovation and financial accessibility.",
    solution: "Led the development of Albania's first Open Banking services, integrating APIs for real-time account access and direct bank payments.",
    impact: "Enabled new B2B fintech integrations, launched multiple payment features (Pay by Link, loans, donations), and increased CSAT.",
    tags: ["Fintech", "APIs", "Banking"],
  },
  {
    id: "trainly",
    title: "Trainly Wellness App",
    company: "Habit-Building MVP",
    period: "Jan 2024 – Jan 2025",
    location: "Ireland, Remote",
    description: "Habit-forming wellness app with workout tracking and nutrition",
    problem: "Users struggled to maintain consistent workout habits and track workout progress.",
    solution: "Defined and shipped an MVP for a habit-forming wellness app, integrating APIs for workout tracking and nutrition.",
    impact: "Clear and validated MVP scope.",
    tags: ["Mobile", "Health Tech", "MVP"],
  },
  {
    id: "publer",
    title: "Publer",
    company: "Global SaaS Growth & Customer Experience",
    period: "2021 – 2023",
    location: "Tirana, Albania",
    description: "Global SaaS platform empowering 300K+ users to manage their digital presence",
    problem: "Rapidly growing SaaS with 300K+ users globally, needing social media management products.",
    solution: "Built and led the CX team, introduced a customer-first framework, and improved onboarding and feedback loops for key features.",
    impact: "Elevated user experience and increased retention across global markets.",
    tags: ["SaaS", "Customer Experience", "Growth"],
  },
  {
    id: "extern",
    title: "Product Discovery Externship",
    company: "Extern (NYC)",
    period: "Dec 2023 – Jan 2024",
    location: "New York, Remote",
    description: "Structured product validation for early-stage founders",
    problem: "Early-stage founders needed structured validation for new product concepts.",
    solution: "Led product discovery, conducting user interviews, usability tests, and insight synthesis to refine market positioning.",
    impact: "Well researched, tested, and validated product offering.",
    tags: ["Product Discovery", "User Research", "Validation"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-dvh bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Jorgo Qirjaj
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Projects Section */}
      <main className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Projects</h1>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
            A collection of products I've built and shipped across fintech, SaaS, and AI
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
                    {project.company}
                  </p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 mb-4 text-xs text-[var(--color-muted-foreground)]">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={14} />
                  {project.period}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={14} />
                  {project.location}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted-foreground)] mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Problem → Solution → Impact */}
              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-xs font-semibold text-[var(--color-foreground)] uppercase tracking-wider">
                    Problem
                  </span>
                  <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-[var(--color-foreground)] uppercase tracking-wider">
                    Solution
                  </span>
                  <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-[var(--color-foreground)] uppercase tracking-wider">
                    Impact
                  </span>
                  <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-center text-[var(--color-muted-foreground)]">
          <p>© {new Date().getFullYear()} Jorgo Qirjaj</p>
        </div>
      </footer>
    </div>
  );
}

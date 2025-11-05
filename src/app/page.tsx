"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Linkedin, MapPin, Github } from "lucide-react";
import { useState, useEffect } from "react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const ROTATING_TITLES = [
  "Product Manager",
  "Product Strategist",
  "AI Product Creator",
  "Engineering Manager",
];

export default function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-dvh bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            Jorgo Qirjaj
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero - Full Screen */}
      <section id="top" className="relative h-screen flex flex-col items-center justify-center px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_50%,oklch(0.97_0_0),transparent_60%)]" />
        
        {/* Centered Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight">
            Jorgo Qirjaj
          </h1>
          <div className="mt-6 h-12 sm:h-16 flex items-center justify-center">
            <p 
              className={`text-2xl sm:text-3xl md:text-4xl text-[var(--color-muted-foreground)] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              {ROTATING_TITLES[currentTitleIndex]}
            </p>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="pb-12 flex flex-col items-center gap-6 max-w-2xl">
          <p className="text-center text-base text-[var(--color-muted-foreground)] leading-relaxed">
            Hi, I'm Jorgo Qirjaj, a Product Manager passionate about building
            practical and human-centered software. I combine engineering
            thinking with empathy to create products that solve real problems
            and scale globally.
          </p>
          <p className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
            <MapPin size={16} /> Houston, Texas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://www.linkedin.com/in/jorgo-qirjaj-721a44120/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
              <ArrowUpRight size={16} className="opacity-70" />
            </Link>
            <Link
              href="https://github.com/jorgo-q"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors"
            >
              <Github size={16} /> GitHub
              <ArrowUpRight size={16} className="opacity-70" />
            </Link>
            <a
              href="/JQ_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors"
            >
              View CV <ArrowUpRight size={16} className="opacity-70" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 items-start">
          <div>
            <h2 className="text-lg font-medium">About</h2>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              I build products that bridge technology and real human needs. From launching Albania's first Open Banking services at EasyPay to creating AI-powered compliance tools at Redocs, I've led & collaborated with cross-functional teams in several industries.
            </p>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              As a Fulbright Fellow at Rice, I'm deepening my expertise in engineering product management, data, and AI, blending technical curiosity with a people-first mindset.
            </p>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              Whether I'm leading a sprint planning meeting or building a community outside of work, my focus stays the same -- to build systems that inspire action, collaboration, and progress.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
            <img
              alt="Portrait of Jorgo Qirjaj"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/jorgo2-1758071278739.jpg"
              className="object-cover !text-justify !w-[468px] !h-[336px] !max-w-[468px]" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-lg font-medium">Some of my work</h2>
        <div className="mt-6 grid gap-4">
          <div className="rounded-lg border border-[var(--color-border)] p-5 h-full">
            <h3 className="font-medium">ReHub Compliance Automation — Redocs</h3>
            <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">Dec 2024 – Aug 2025 | NYC, Remote</p>
            <ul className="mt-3 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Problem:</span> Real estate building managers struggling with manual compliance tracking.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Solution:</span> Built an AI-powered compliance portal using Claude AI, to automate compliance and invoice management.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Impact:</span> Cut manual reporting time and improved client satisfaction for 40K+ NYC buildings.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-5 h-full">
            <h3 className="font-medium">Open Banking Platform — EasyPay</h3>
            <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">Mar 2024 – Jul 2025 | Tirana, Albania</p>
            <ul className="mt-3 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Problem:</span> Closed banking systems limited fintech innovation and financial accessibility.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Solution:</span> Led the development Albania's first Open Banking services, integrating APIs for real-time account access and direct bank payments.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Impact:</span> Enabled new B2B fintech integrations, launched multiple payment features (Pay by Link, loans, donations), and increased CSAT.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-5 h-full">
            <h3 className="font-medium">Trainly Wellness App — Habit-Building MVP</h3>
            <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">Jan 2024 – Jan 2025 | Ireland, Remote</p>
            <ul className="mt-3 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Problem:</span> Users struggled to maintain consistent workout habits and track workout progress.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Solution:</span> Defined and shipped an MVP for a habit-forming wellness app, integrating APIs for workout tracking and nutrition.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Impact:</span> Clear MVP scope; accelerated learning and pilot traction.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-5 h-full">
            <h3 className="font-medium">Publer — Global SaaS Growth & Customer Experience</h3>
            <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">2021 – 2023 | Tirana, Albania</p>
            <ul className="mt-3 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Problem:</span> Rapidly growing SaaS with 300K+ users globally, needing social media management products.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Solution:</span> Built and led the CX team, introduced a customer-first framework, and improved onboarding and feedback loops for key features.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Impact:</span> Elevated user experience and increased retention across global markets.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-5 h-full">
            <h3 className="font-medium">Product Discovery Externship — Extern (NYC)</h3>
            <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">Dec 2023 – Jan 2024 | New York, Remote</p>
            <ul className="mt-3 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Problem:</span> Early-stage founders needed structured validation for new product concepts.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Solution:</span> Led product discovery, conducting user interviews, usability tests, and insight synthesis to refine market positioning.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Impact:</span> Clear MVP scope; accelerated learning and pilot traction.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-lg font-medium">Education</h2>
        <div className="mt-6 grid gap-4">
          <div className="rounded-lg border border-[var(--color-border)] p-5 h-full">
            <h3 className="font-medium">Master of Engineering Management & Leadership — Rice University</h3>
            <ul className="mt-2 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Focus:</span> Computer & Data Science, AI, Product Management</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Key Projects:</span> AI-powered cooking assistant SaaS, ML model to predict customer churn</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Activities:</span> President of American Society of Eng Managers, Doerr Leadership Coaching, oSTEM Mentor</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-5 h-full">
            <h3 className="font-medium">BA in Computer Science — American University in Bulgaria</h3>
            <ul className="mt-2 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Minors:</span> Mathematics & Information Systems</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Key Projects:</span> Neural Network "Snake Game", Big Data & ML in Smart Cities</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Activities:</span> TEDxAUBG President, Broadway Club Choreographer, Oxford Summer School</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-lg font-medium">Skills & Certifications</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="!w-[358px] !h-full">
            <h3 className="text-sm font-medium text-[var(--color-muted-foreground)]">Certifications</h3>
            <ul className="mt-3 grid gap-2 text-sm !w-[349px] !h-[130px]">
              {["Professional Scrum Product Owner I (PSPO I)", "Reforge Product Management", "Becoming a PM"].map((c) =>
              <li key={c} className="rounded-lg border border-[var(--color-border)] px-3 py-2 !w-full !h-[38px]">
                  <Link href="https://www.linkedin.com/in/jorgo-qirjaj-721a44120/details/certifications/" target="_blank" className="inline-flex items-center gap-2 hover:opacity-80">
                    <span>{c}</span>
                    <ArrowUpRight size={14} className="opacity-70" />
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-muted-foreground)]">Product Skills</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Roadmapping", "Market Fit", "Discovery", "Stakeholder Management", "A/B Testing"].map((s) =>
              <li key={s} className="rounded-full border border-[var(--color-border)] px-3 py-1">{s}</li>
              )}
            </ul>
            <h3 className="mt-6 text-sm font-medium text-[var(--color-muted-foreground)]">Tools & Tech</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Jira", "Miro", "Figma", "Claude AI", "Python", "SQL"].map((t) =>
              <li key={t} className="rounded-full border border-[var(--color-border)] px-3 py-1">{t}</li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-lg font-medium">Contact</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          <a
            href="mailto:qirjaj.jorgo@gmail.com?subject=Hello%20Jorgo"
            className="rounded-lg border border-[var(--color-border)] p-4 flex items-center gap-3 hover:bg-[var(--color-secondary)] transition-colors">

            <Mail size={18} /> <span>qirjaj.jorgo@gmail.com</span>
          </a>
          <Link
            href="https://www.linkedin.com/in/jorgo-qirjaj-721a44120/"
            target="_blank"
            className="rounded-lg border border-[var(--color-border)] p-4 flex items-center gap-3 hover:bg-[var(--color-secondary)] transition-colors">

            <Linkedin size={18} /> <span>LinkedIn</span>
          </Link>
          <div className="rounded-lg border border-[var(--color-border)] p-4 flex items-center gap-3">
            <MapPin size={18} /> <span>Houston, Texas</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jorgo Qirjaj</p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] px-4 py-2 hover:opacity-90 transition-opacity">Let's build something that makes a difference 🚀</a>
            <a href="#top" className="hover:opacity-70">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
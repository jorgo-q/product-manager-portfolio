"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Linkedin, MapPin, Github } from "lucide-react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="min-h-dvh bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">Jorgo Qirjaj</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:opacity-70 transition-opacity">{item.label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_-4rem,oklch(0.97_0_0),transparent_60%)]" />
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-widest text-[var(--color-muted-foreground)]">Product management</p>
            <h1 className="mt-3 text-4xl/tight sm:text-5xl/tight font-semibold tracking-tight sm:text-balance !w-[746px] !h-[62px] !whitespace-pre-line">
              Jorgo Qirjaj
            </h1>
            <p className="mt-3 flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
              <MapPin size={16} /> Houston, Texas
            </p>
            <div className="mt-5 text-base text-[var(--color-muted-foreground)] leading-relaxed space-y-3 text-pretty sm:text-pretty">
              <p>Hi, I'm Jorgo Qirjaj, a Product Manager passionate about building practical and human-centered software. I combine engineering thinking with empathy to create products that solve real problems and scale globally.</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
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
        </div>
      </section>

      {/* (your About, Projects, Education, Skills, Contact, Footer sections remain unchanged) */}
    </div>
  );
}

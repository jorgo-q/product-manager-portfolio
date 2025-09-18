"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Linkedin, MapPin } from "lucide-react";

const NAV = [
{ href: "#experience", label: "Experience" },
{ href: "#education", label: "Education" },
{ href: "#skills", label: "Skills" },
{ href: "#hobbies", label: "Hobbies" },
{ href: "#contact", label: "Contact" }];


export default function Home() {
  return (
    <div className="min-h-dvh bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">Jorgo Qirjaj</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            {NAV.map((item) =>
            <a key={item.href} href={item.href} className="hover:opacity-70 transition-opacity">{item.label}</a>
            )}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_-4rem,oklch(0.97_0_0),transparent_60%)]" />
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="grid gap-8 sm:grid-cols-2 items-start">
            <div className="sm:col-span-2">
              <p className="text-sm uppercase tracking-widest text-[var(--color-muted-foreground)]">Product management</p>
              <h1 className="mt-3 text-4xl/tight sm:text-5xl/tight font-semibold tracking-tight sm:whitespace-nowrap">
                Jorgo Qirjaj — Product Manager
              </h1>
            </div>
            <div>
              <p className="mt-2 flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                <MapPin size={16} /> Houston, Texas
              </p>
              <p className="mt-5 text-base text-[var(--color-muted-foreground)] !w-full !h-[266px] !max-w-full !whitespace-pre-line">Fulbright Fellow @ Rice with a CS background, building global SaaS products with a practical, people-first approach. 

              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="https://www.linkedin.com/in/jorgo-qirjaj-721a44120/"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors">

                  <Linkedin size={16} /> LinkedIn
                  <ArrowUpRight size={16} className="opacity-70" />
                </Link>
                <a
                  href="mailto:qirjaj.jorgo@gmail.com?subject=Hello%20Jorgo"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] px-4 py-2 hover:opacity-90 transition-opacity">

                  <Mail size={16} /> Email me
                </a>
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors">

                  View CV <ArrowUpRight size={16} className="opacity-70" />
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)] mt-6 sm:mt-16">
              <img
                alt="Portrait of Jorgo Qirjaj"
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/jorgo2-1758071278739.jpg"
                className="object-cover !w-[468px] !h-[433px] !max-w-[468px]" />

            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-lg font-medium">Experience</h2>
        <ol className="mt-8 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--color-border)]" />
          {[
          {
            company: "Redocs",
            role: "Technical Product Creator",
            period: "Dec 2024 — Aug 2025 · NYC, Remote",
            impact: [
            "Streamlining real estate compliance for 40K+ buildings in NYC with AI-powered apps"]

          },
          {
            company: "EasyPay",
            role: "Technical Product Manager",
            period: "Mar 2024 — Jul 2025 · Tirana, Albania",
            impact: [
            "Led a team of 20+ engineers building Albania's first Open Banking services"]

          },
          {
            company: "Trainly",
            role: "Product Manager",
            period: "Jan 2024 — Jan 2025 · Ireland, Remote",
            impact: [
            "Defined and shipped an MVP for a habit-forming wellness app"]

          },
          {
            company: "Publer",
            role: "Tech Support → Product Success Manager → Head of Customer Experience",
            period: "Feb 2021 — Dec 2023 · Tirana, Albania",
            impact: [
            "Global SaaS serving 300K+ users; elevated CX and product adoption"]

          }].
          map((job) =>
          <li key={job.company} className="grid grid-cols-[2rem_1fr] gap-4 py-6">
              <div className="relative">
                <div className="mt-1 size-2.5 rounded-full bg-[var(--color-foreground)]" />
              </div>
              <div className="group">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-medium">{job.role} · {job.company}</h3>
                  <span className="text-sm text-[var(--color-muted-foreground)]">{job.period}</span>
                </div>
                <ul className="mt-3 grid gap-2 text-[var(--color-muted-foreground)]">
                  {job.impact.map((line) =>
                <li key={line} className="leading-relaxed">• {line}</li>
                )}
                </ul>
              </div>
            </li>
          )}
        </ol>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-lg font-medium">Education</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-[var(--color-border)] p-5 !w-[464px] !h-full">
            <h3 className="font-medium !whitespace-pre-line">Master of Engineering Management & Leadership Rice University</h3>
            <p className="mt-1 text-sm text-[var(--color-muted-foreground)] !w-[445px] !h-10">Aug 2025 — Dec 2026 · Fulbright Scholar · Focus: CS, Data Science & AI</p>
            <ul className="mt-2 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li>Coursework: Product Management, DS & ML, Python</li>
              <li>Projects: AI cooking assistant SaaS; ML to predict SaaS performance</li>
              <li>Activities: Doerr Leadership, ASEM, Fulbright</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-5 !w-[47%] !h-full">
            <h3 className="font-medium !whitespace-pre-line !text-[15px] !whitespace-pre-line">{`BA in Computer Science\nAmerican University in Bulgaria (AUBG)`}</h3>
            <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">2016 — 2020 · Minors: Mathematics & Information Systems</p>
            <ul className="mt-2 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li>Coursework: Software Eng, Big Data, Data Analytics, Python, Advanced Calculus</li>
              <li>Projects: Adaptive Neural Network "Snake Game"; Big Data & ML in Smart Cities</li>
              <li>Activities: Oxford Summer School, TEDxAUBG President, Broadway Club Choreographer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-lg font-medium">Skills & Certifications</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-muted-foreground)]">Product skills</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Market-fit", "Roadmapping", "Stakeholder management", "Scrum", "Discovery interviews", "A/B testing", "Prioritization"].map((s) =>
              <li key={s} className="rounded-full border border-[var(--color-border)] px-3 py-1">{s}</li>
              )}
            </ul>
            <h3 className="mt-6 text-sm font-medium text-[var(--color-muted-foreground)]">Tools & Tech</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Jira", "Miro", "Linear", "Figma", "Mixpanel", "Notion", "Claude", "Supabase", "Python", "SQL"].map((t) =>
              <li key={t} className="rounded-full border border-[var(--color-border)] px-3 py-1">{t}</li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--color-muted-foreground)]">Certifications</h3>
            <ul className="mt-3 grid gap-2 text-sm">
              {["Professional Scrum Product Owner I (PSPO I)", "Becoming a PM", "Reforge Product Management Courses"].map((c) =>
              <li key={c} className="rounded-lg border border-[var(--color-border)] px-3 py-2">
                  <Link href="https://www.linkedin.com/in/jorgo-qirjaj-721a44120/details/certifications/" target="_blank" className="inline-flex items-center gap-2 hover:opacity-80">
                    <span>{c}</span>
                    <ArrowUpRight size={14} className="opacity-70" />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section id="hobbies" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-lg font-medium">Hobbies</h2>
        <p className="mt-4 text-[var(--color-muted-foreground)]">
          Rhythm cycling coach at SunRide, building culture and community through music and motivation.
        </p>
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
            <Link href="https://www.linkedin.com/in/jorgo-qirjaj-721a44120/" target="_blank" className="hover:opacity-70">LinkedIn</Link>
            <a href="#top" className="hover:opacity-70">Back to top</a>
          </div>
        </div>
      </footer>
    </div>);

}
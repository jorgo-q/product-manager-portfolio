"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Linkedin, MapPin } from "lucide-react";

const NAV = [
{ href: "#experience", label: "Experience" },
{ href: "#projects", label: "Projects" },
{ href: "#education", label: "Education" },
{ href: "#skills", label: "Skills" },
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
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-widest text-[var(--color-muted-foreground)]">Product management</p>
            <h1 className="mt-3 text-4xl/tight sm:text-5xl/tight font-semibold tracking-tight sm:text-balance !w-[744px] !h-[60px]">
              Jorgo Qirjaj — Product Manager
            </h1>
            <p className="mt-3 flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
              <MapPin size={16} /> Houston, Texas
            </p>
            <div className="mt-5 text-base text-[var(--color-muted-foreground)] leading-relaxed space-y-3 text-pretty sm:text-pretty">
              <p>I'm a Fulbright Fellow at Rice University studying Engineering Management & Leadership with a Computer Science background.</p>
              <p>As a Product and Technical PM, I build scalable, user‑centric products across fintech, SaaS, AI, and wellness.</p>
              <p>My style is practical and people‑first—turning real problems into measurable impact.</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/jorgo-qirjaj-721a44120/"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors">
                
                <Linkedin size={16} /> LinkedIn
                <ArrowUpRight size={16} className="opacity-70" />
              </Link>
              <Link
                href="/cv"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors">
                
                View CV <ArrowUpRight size={16} className="opacity-70" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 items-start">
          <div>
            <h2 className="text-lg font-medium">About</h2>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              I build products that work in the real world. I've led Albania's first Open Banking services at EasyPay, shipped compliance automation at Redocs, and defined a wellness app MVP at Trainly—after helping scale Publer to 300K+ users globally.
            </p>
            <p className="mt-4 text-[var(--color-muted-foreground)]">
              My approach is clear goals, tight feedback loops, and simple systems that scale, partnering closely with engineers, designers, and customers to reduce risk early and ship value fast. I'm people‑first and impact‑driven, always aiming for solutions that feel intuitive and move the needle. 
              
              Outside of work, I'm a rhythm cycling coach at SunRide, where I build community through music and movement. When I'm not in product mode, you'll find me running, dancing, writing, or meditating—always bringing positive energy to the teams I work with.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
            <img
              alt="Portrait of Jorgo Qirjaj"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/jorgo2-1758071278739.jpg"
              className="object-cover !text-justify !w-[468px] !h-[401px] !max-w-[468px]" />
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

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-lg font-medium">Projects</h2>
        <div className="mt-6 grid gap-4">
          <div className="rounded-lg border border-[var(--color-border)] p-5 h-full">
            <h3 className="font-medium">Compliance Automation — Redocs</h3>
            <ul className="mt-2 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Problem:</span> Costly, manual NYC compliance for 40K+ buildings.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Solution:</span> Built AI-powered workflows and internal tools.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Impact:</span> Reduced turnaround time; increased accuracy and throughput.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-5 h-full">
            <h3 className="font-medium">Open Banking — EasyPay</h3>
            <ul className="mt-2 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Problem:</span> Banks were closed systems limiting fintech innovation.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Solution:</span> Led 20+ engineers to launch Albania's first Open Banking services.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Impact:</span> Unlocked integrations and new revenue lines; enterprise partnerships.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-5 h-full">
            <h3 className="font-medium">Wellness App MVP — Trainly</h3>
            <ul className="mt-2 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Problem:</span> Low adherence to healthy habits.</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Solution:</span> Defined and shipped a habit-forming MVP with coaching loops.</li>
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
            <h3 className="font-medium">Master of Engineering Management & Leadership — Rice University (Fulbright)</h3>
            <ul className="mt-2 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Focus areas:</span> Computer Science, Data Science & AI</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Key projects:</span> AI cooking assistant SaaS; ML to predict SaaS performance</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Activities:</span> Doerr Leadership, ASEM, Fulbright community</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-5 h-full">
            <h3 className="font-medium">BA in Computer Science — American University in Bulgaria (AUBG)</h3>
            <ul className="mt-2 text-sm text-[var(--color-muted-foreground)] grid gap-1">
              <li><span className="font-medium text-[var(--color-foreground)]">Minors:</span> Mathematics & Information Systems</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Key coursework:</span> Software Eng, Big Data, Data Analytics, Python, Advanced Calculus</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Projects:</span> Adaptive Neural Network "Snake Game"; Big Data & ML in Smart Cities</li>
              <li><span className="font-medium text-[var(--color-foreground)]">Leadership:</span> TEDxAUBG President; Broadway Club Choreographer; Oxford Summer School</li>
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
              {["Market-fit", "Roadmapping", "Stakeholder Management", "Discovery", "A/B testing", "Prioritization"].map((s) =>
              <li key={s} className="rounded-full border border-[var(--color-border)] px-3 py-1">{s}</li>
              )}
            </ul>
            <h3 className="mt-6 text-sm font-medium text-[var(--color-muted-foreground)]">Tools & Tech</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              {["Jira", "Miro", "Figma", "Linear", "Notion", "Mixpanel", "Supabase", "Python", "SQL", "Claude"].map((t) =>
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
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] px-4 py-2 hover:opacity-90 transition-opacity">Let's build something together 🚀</a>
            <a href="#top" className="hover:opacity-70">Back to top</a>
          </div>
        </div>
      </footer>
    </div>);

}
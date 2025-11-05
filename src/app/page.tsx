"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Linkedin, MapPin, Github } from "lucide-react";
import { useState, useEffect } from "react";

const NAV = [
{ href: "#about", label: "About" },
{ href: "/projects", label: "Projects" },
{ href: "#building-community", label: "Building Community" },
{ href: "#contact", label: "Contact" }];


const ROTATING_TITLES = [
"Product Manager",
"Product Strategist",
"AI Product Creator",
"Engineering Manager"];


const COMMUNITY_ITEMS = [
{
  title: "President of ASEM",
  description: "American Society of Eng Managers",
  link: null
},
{
  title: "Doerr Leadership Coaching",
  description: "Leadership development program",
  link: null
},
{
  title: "oSTEM Mentor",
  description: "Mentoring LGBTQ+ students in STEM",
  link: null
},
{
  title: "President of TEDxAUBG",
  description: "Ideas worth spreading in Bulgaria",
  link: "https://www.tedxaubg.com/"
},
{
  title: "Broadway Club Choreographer",
  description: "Musical production and choreography",
  link: null
},
{
  title: "Oxford Summer School",
  description: "Advanced business/econ program",
  link: null
},
{
  title: "Rhythm Cycling Coach @ Sunride",
  description: "Fitness & cycling community",
  link: "https://sunride.al/"
}];


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
            {NAV.map((item) =>
            item.href.startsWith("/") ?
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity">

                  {item.label}
                </Link> :

            <a
              key={item.href}
              href={item.href}
              className="hover:opacity-70 transition-opacity">

                  {item.label}
                </a>

            )}
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
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`
              }>

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
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors">

              <Linkedin size={16} /> LinkedIn
              <ArrowUpRight size={16} className="opacity-70" />
            </Link>
            <Link
              href="https://github.com/jorgo-q"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors">

              <Github size={16} /> GitHub
              <ArrowUpRight size={16} className="opacity-70" />
            </Link>
            <a
              href="/JQ_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 hover:bg-[var(--color-secondary)] transition-colors">

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
            <div className="mt-6">
              <Link
                href="/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] px-6 py-3 hover:opacity-90 transition-opacity font-medium">

                Projects
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--color-border)]">
            <img
              alt="Portrait of Jorgo Qirjaj"
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/jorgo2-1758071278739.jpg"
              className="object-cover !w-[99.6%] !h-[409px] !max-w-[99.6%]" />

          </div>
        </div>
      </section>

      {/* Building Community */}
      <section id="building-community" className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-lg font-medium mb-8">Building Community</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNITY_ITEMS.map((item, index) =>
          <div
            key={index}
            className="group rounded-xl border border-[var(--color-border)] p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-[var(--color-card)]">

              {item.link ?
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block">

                  <h3 className="font-semibold text-base group-hover:text-[var(--color-primary)] transition-colors flex items-center gap-2">
                    {item.title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-muted-foreground)] !whitespace-pre-line">
                    {item.description}
                  </p>
                </a> :

            <>
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted-foreground)] !whitespace-pre-line">
                    {item.description}
                  </p>
                </>
            }
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Get in touch
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] mb-8 leading-relaxed">
            I'm always open to discussing product opportunities, partnerships, or just chatting about technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="mailto:qirjaj.jorgo@gmail.com?subject=Hello%20Jorgo"
              className="inline-flex items-center gap-2 text-lg hover:text-[var(--color-primary)] transition-colors">

              <Mail size={20} />
              qirjaj.jorgo@gmail.com
            </a>
            <span className="hidden sm:inline text-[var(--color-muted-foreground)]">•</span>
            <Link
              href="https://www.linkedin.com/in/jorgo-qirjaj-721a44120/"
              target="_blank"
              className="inline-flex items-center gap-2 text-lg hover:text-[var(--color-primary)] transition-colors">

              <Linkedin size={20} />
              LinkedIn
              <ArrowUpRight size={16} className="opacity-70" />
            </Link>
          </div>
          <p className="flex items-center justify-center gap-2 text-sm text-[var(--color-muted-foreground)]">
            <MapPin size={16} /> Based in Houston, Texas
          </p>
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
    </div>);

}
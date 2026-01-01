"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Star = {
  id: string;
  x: number; // %
  y: number; // %
  delay: number; // ms
  size: number; // px
  rotate: number; // deg
  opacity: number;
};

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => setMounted(true), []);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const burstStars = () => {
    const count = 14; // adjust 10–18 if you want more/less
    const newStars: Star[] = Array.from({ length: count }).map(() => ({
      id: uid(),
      x: 18 + Math.random() * 64,
      y: 18 + Math.random() * 64,
      delay: Math.floor(Math.random() * 120),
      size: 8 + Math.floor(Math.random() * 10),
      rotate: Math.floor(Math.random() * 360),
      opacity: 0.75 + Math.random() * 0.25,
    }));

    setStars((prev) => [...prev, ...newStars]);

    // remove after animation
    setTimeout(() => {
      setStars((prev) => prev.filter((s) => !newStars.some((n) => n.id === s.id)));
    }, 900);
  };

  return (
    <section className="relative overflow-hidden rounded-2xl border border-light2 bg-light1 px-6 py-10 shadow-sm dark:border-dark2 dark:bg-dark1 md:px-10 md:py-14">
      {/* Background: glow + subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent5/12 blur-3xl dark:bg-accent1/16" />
        <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-accent2/12 blur-3xl dark:bg-accent5/16" />
        <div className="hero-orbit absolute left-10 top-10 h-40 w-40 rounded-full bg-accent3/10 blur-2xl dark:bg-accent3/14" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_0)] [background-size:22px_22px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)]" />
      </div>

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-center">
        {/* LEFT */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-light2 bg-light1/80 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-accent5 shadow-sm dark:border-dark2 dark:bg-dark1/60 dark:text-accent1">
            <span className="h-2 w-2 rounded-full bg-accent5 dark:bg-accent1" />
            RESEARCH ANALYST · DATA PROFESSIONAL
          </div>

          {/* Headline + subtext */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-dark2 dark:text-light1 md:text-5xl">
              Hi, I’m Daryll.
            </h1>
            <p className="max-w-xl text-[15px] leading-relaxed text-dark1/85 dark:text-light1/80 md:text-[16px]">
              I build structured insights from messy market data—scraping,
              cleaning, modeling, and presenting results through dashboards and
              stakeholder-ready reports.
            </p>
          </div>

          {/* Proof chips */}
          <div className="flex flex-wrap gap-3 text-[12px] text-dark1/70 dark:text-light1/60">
            <span className="rounded-full border border-light2 bg-light1/70 px-3 py-1 shadow-sm dark:border-dark2 dark:bg-dark1/50">
              Python + SQL pipelines
            </span>
            <span className="rounded-full border border-light2 bg-light1/70 px-3 py-1 shadow-sm dark:border-dark2 dark:bg-dark1/50">
              Power BI dashboards for decisions
            </span>
            <a
              href="https://github.com/DaryllBanal1030"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-light2 bg-light1/70 px-3 py-1 shadow-sm transition hover:bg-light2 dark:border-dark2 dark:bg-dark1/50 dark:hover:bg-dark2"
            >
              Daily GitHub commits ↗
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="button"
              onClick={() => scrollToId("projects")}
              className="group inline-flex items-center justify-center rounded-md bg-accent5 px-5 py-2.5 text-sm font-semibold text-light1 shadow transition hover:bg-accent3"
            >
              View Projects
              <span className="ml-2 transition group-hover:translate-x-0.5">→</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center justify-center rounded-md border border-light2 bg-light1/60 px-5 py-2.5 text-sm font-medium text-dark2 shadow-sm transition hover:bg-light2 dark:border-dark2 dark:bg-dark1/50 dark:text-light1 dark:hover:bg-dark2"
            >
              Contact Me
            </button>
          </div>

          {/* Scroll cue */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => scrollToId("about")}
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-dark1/70 transition hover:text-dark2 dark:text-light1/60 dark:hover:text-light1"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-light2 bg-light1/70 shadow-sm dark:border-dark2 dark:bg-dark1/50">
                ↓
              </span>
              Scroll to learn more
            </button>
          </div>
        </div>

        {/* RIGHT: Photo (click = stars) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <button
              type="button"
              onClick={burstStars}
              className="group relative h-52 w-52 md:h-64 md:w-64"
              aria-label="Burst stars"
            >
              {/* Gradient ring */}
              <div className="pointer-events-none absolute -inset-6 rounded-[2.6rem] bg-gradient-to-br from-accent5/55 via-accent1/35 to-accent3/55 blur-2xl opacity-90 transition group-hover:opacity-100" />

              {/* Glass card */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-light2 bg-light1/70 shadow-xl backdrop-blur-sm transition group-hover:-translate-y-0.5 group-hover:shadow-2xl dark:border-dark2 dark:bg-dark1/40">
                <Image
                  src="/daryll.jpg"
                  alt="Daryll Banal"
                  fill
                  className={`object-cover transition duration-700 ${
                    mounted ? "scale-[1.02]" : "scale-100"
                  }`}
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark2/10 via-transparent to-transparent dark:from-black/20" />

                {/* Stars layer */}
                <div className="pointer-events-none absolute inset-0">
                  {stars.map((s) => (
                    <span
                      key={s.id}
                      className="hero-star"
                      style={{
                        left: `${s.x}%`,
                        top: `${s.y}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        opacity: s.opacity,
                        transform: `translate(-50%, -50%) rotate(${s.rotate}deg)`,
                        animationDelay: `${s.delay}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative micro-elements */}
              <div className="pointer-events-none absolute -left-5 top-5 h-6 w-14 rounded-xl bg-accent1 opacity-60 blur-md" />
              <div className="pointer-events-none absolute -right-6 bottom-6 h-8 w-8 rounded-xl bg-accent2 opacity-70 blur-md" />
              </button>

            <div className="mt-3 text-center text-[11px] font-semibold tracking-[0.18em] text-dark1/60 dark:text-light1/55">
              Click the photo ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

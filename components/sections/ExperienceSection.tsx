"use client";

import { useEffect } from "react";

export default function ExperienceSection() {
  // Reveal-on-scroll animation
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="group relative overflow-hidden rounded-2xl border border-light2 bg-light1 px-6 py-10 shadow-sm
             transition hover:-translate-y-1 hover:border-accent2/60 hover:shadow-md
             dark:border-dark2 dark:bg-dark1 dark:hover:border-accent2/70
             md:px-10 md:py-14">
      {/* Accent glow */}
      <div className="pointer-events-none absolute -top-6 left-8 h-20 w-20 rounded-full bg-accent5 opacity-10 blur-2xl dark:bg-accent1 dark:opacity-15" />

      {/* Section label */}
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent5 dark:text-accent1">
        Experience
      </p>

      {/* Header */}
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-dark2 dark:text-light1">
          Experience & Learning Journey
        </h2>
        <p className="max-w-md text-xs md:text-sm text-dark1/70 dark:text-light1/65">
          How my research work connects to my growth toward analytics and data engineering.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Vertical line */}
        <span className="pointer-events-none absolute left-[11px] top-1 h-full w-px bg-light2 dark:bg-dark2" />

        <div className="space-y-8">
          {/* ==================== ITEM 1 ==================== */}
          <div className="relative reveal">
            <span className="absolute left-[6px] top-7 h-3 w-3 rounded-full border-2 border-accent5 bg-light1 dark:bg-dark1" />

            <article
              className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm
                         transition hover:-translate-y-1 hover:border-accent2/60 hover:shadow-md
                         dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent2/70 md:p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dark1/70 dark:text-light1/70">
                  May 2025 – Present
                </p>
                <span className="rounded-full bg-accent5 px-2.5 py-0.5 text-[11px] font-medium text-light1">
                  Professional
                </span>
              </div>

              <h3 className="mt-2 text-base font-semibold text-dark2 transition-colors group-hover:text-accent2 dark:text-light1">
                Research Analyst — PRIME Philippines
              </h3>

              <p className="mt-2 text-sm md:text-base leading-relaxed text-dark1/85 dark:text-light1/80 text-justify">
                Supporting the Research & Advisory team by monitoring the Philippine real estate
                market, organizing datasets, and turning findings into clear insights for reports
                and client presentations.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-dark1/80 dark:text-light1/75">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent5" />
                  <span>Track sector indicators and summarize trends into narratives.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent5" />
                  <span>Maintain internal property, leasing, and pricing databases.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent5" />
                  <span>Produce charts and tables for executive-ready PPT decks.</span>
                </li>
              </ul>

              {/* Tools */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                {["Excel", "SQL", "Power BI"].map((tool, i) => (
                  <span
                    key={tool}
                    className="reveal rounded-full border border-accent5/30 bg-light1 px-3 py-1 font-semibold text-accent5 dark:bg-dark1"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </div>

          {/* ==================== ITEM 2 ==================== */}
          <div className="relative reveal">
            <span className="absolute left-[6px] top-7 h-3 w-3 rounded-full border-2 border-accent1 bg-light1 dark:bg-dark1" />

            <article
              className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm
                         transition hover:-translate-y-1 hover:border-accent2/60 hover:shadow-md
                         dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent2/70 md:p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dark1/70 dark:text-light1/70">
                  2024 – Ongoing
                </p>
                <span className="rounded-full bg-accent1 px-2.5 py-0.5 text-[11px] font-medium text-dark2">
                  Learning & Projects
                </span>
              </div>

              <h3 className="mt-2 text-base font-semibold text-dark2 transition-colors group-hover:text-accent2 dark:text-light1">
                Self-Directed Data Projects
              </h3>

              <p className="mt-2 text-sm md:text-base leading-relaxed text-dark1/85 dark:text-light1/80 text-justify">
                Building repeatable workflows that mirror real analytics work:
                gather → clean → store → analyze → present.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-dark1/80 dark:text-light1/75">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent1" />
                  <span>Practice Python-based data collection and cleaning.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent1" />
                  <span>Use SQL for reusable analysis instead of one-off spreadsheets.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent1" />
                  <span>Design Power BI dashboards focused on KPIs and trends.</span>
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                {["Python", "SQL", "Power BI"].map((tool, i) => (
                  <span
                    key={tool}
                    className="reveal rounded-full border border-accent1/30 bg-light1 px-3 py-1 font-semibold text-accent1 dark:bg-dark1"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </div>

          {/* ==================== ITEM 3 ==================== */}
          <div className="relative reveal">
            <span className="absolute left-[6px] top-7 h-3 w-3 rounded-full border-2 border-accent3 bg-light1 dark:bg-dark1" />

            <article
              className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm
                         transition hover:-translate-y-1 hover:border-accent2/60 hover:shadow-md
                         dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent2/70 md:p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dark1/70 dark:text-light1/70">
                  2021 – 2025
                </p>
                <span className="rounded-full bg-accent3 px-2.5 py-0.5 text-[11px] font-medium text-light1">
                  Education
                </span>
              </div>

              <h3 className="mt-2 text-base font-semibold text-dark2 transition-colors group-hover:text-accent2 dark:text-light1">
                BS Computer Engineering — Pamantasan ng Lungsod ng Maynila (CUM LAUDE)
              </h3>

              <p className="mt-2 text-sm md:text-base leading-relaxed text-dark1/85 dark:text-light1/80 text-justify">
                Built a strong technical foundation that shaped how I approach structured
                problem-solving and data workflows.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                {["Programming", "Systems", "Problem Solving"].map((tool, i) => (
                  <span
                    key={tool}
                    className="reveal rounded-full border border-accent3/30 bg-light1 px-3 py-1 font-semibold text-accent3 dark:bg-dark1"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

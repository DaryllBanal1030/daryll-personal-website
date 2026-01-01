"use client";

import Image from "next/image";

export default function HeroSection() {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative grid gap-10 py-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center md:py-16">
      {/* Subtle global glow behind entire hero */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent5/10 via-transparent to-transparent blur-3xl" />

      {/* LEFT: Text */}
      <div className="space-y-6">
        {/* Role badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-light2 bg-light1 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-accent5 dark:border-dark2 dark:bg-dark1 dark:text-accent1">
          RESEARCH ANALYST · DATA PROFESSIONAL
        </span>

        {/* Main headline */}
        <h1 className="text-4xl font-bold tracking-tight text-dark2 dark:text-light1 md:text-5xl">
          Hi, I’m Daryll.
        </h1>

        {/* Subtext */}
        <p className="max-w-xl text-[15px] leading-relaxed text-dark1/85 dark:text-light1/80">
          I specialize in transforming raw information into structured insights.
          As a Research Analyst at PRIME Philippines, I work closely with market
          data—building datasets, analyzing trends, and crafting reports that help
          teams make informed decisions. I&apos;m also building my skills in Python,
          SQL, ETL workflows, and modern data engineering.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => scrollToId("projects")}
            className="inline-flex items-center justify-center rounded-md bg-accent5 px-5 py-2.5 text-sm font-semibold text-light1 shadow transition hover:bg-accent3"
          >
            View Projects
          </button>

          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="inline-flex items-center justify-center rounded-md border border-light2 px-5 py-2.5 text-sm font-medium text-dark2 transition hover:bg-light2 dark:border-dark2 dark:text-light1 dark:hover:bg-dark2"
          >
            Contact Me
          </button>
        </div>

        {/* Skill bullets */}
        <div className="flex flex-wrap gap-6 pt-2 text-[12px] text-dark1/70 dark:text-light1/60">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent1" />
            <span>Market Research · Real Estate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent5" />
            <span>Python · SQL · Dashboards</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent2" />
            <span>Data Engineering Foundations</span>
          </div>
        </div>
      </div>

      {/* RIGHT: Photo Card */}
      <div className="flex justify-center md:justify-end">
        <div className="relative h-44 w-44 md:h-60 md:w-60">
          {/* Enhanced Futuristic Glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent5/50 via-accent1/40 to-accent3/60 blur-2xl opacity-90" />

          {/* Main Photo Card */}
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-light2 bg-light1 shadow-xl dark:border-dark2 dark:bg-dark2">
            <Image
              src="/daryll.jpg"
              alt="Daryll Banal"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Decorative micro-elements */}
          <div className="pointer-events-none absolute -left-5 top-5 h-6 w-14 rounded-xl bg-accent1/60 blur-md" />
          <div className="pointer-events-none absolute -right-6 bottom-6 h-8 w-8 rounded-xl bg-accent2/70 blur-md" />
        </div>
      </div>
    </section>
  );
}

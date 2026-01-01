export default function ExperienceSection() {
  return (
    <section
  id="experience"
  className="relative rounded-xl border border-light2 bg-light1 px-6 py-10 shadow-sm dark:border-dark2 dark:bg-dark1 md:px-10 md:py-12"
>
  {/* Soft accent glow */}
  <div className="pointer-events-none absolute -top-6 left-8 h-20 w-20 rounded-full bg-accent5/10 blur-2xl dark:bg-accent1/14" />

  {/* Section label */}
  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent5 dark:text-accent1">
    Experience
  </p>

  {/* Title + intro */}
  <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
    <h2 className="text-2xl md:text-3xl font-semibold text-dark2 dark:text-light1">
      Experience & Learning Journey
    </h2>
    <p className="max-w-md text-xs md:text-sm text-dark1/70 dark:text-light1/65">
      How my background in research, technology, and data has evolved—from real
      estate market analysis to building a strong foundation in data engineering.
    </p>
  </div>

  {/* Vertical timeline */}
  <div className="mt-4 space-y-8">
    {/* Item 1: Current role */}
    <div className="relative pl-8">
      {/* Vertical line */}
      <span className="pointer-events-none absolute left-[11px] top-0 h-full w-px bg-light2 dark:bg-dark2" />
      {/* Timeline dot */}
      <span className="absolute left-[6px] top-2 h-3 w-3 rounded-full border-2 border-accent5 bg-light1 dark:bg-dark1" />

      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dark1/70 dark:text-light1/70">
          May 2025 – Present
        </p>
        <span className="rounded-full bg-accent5/10 px-2.5 py-0.5 text-[11px] font-medium text-accent5">
          Professional
        </span>
      </div>

      <h3 className="mt-2 text-sm md:text-base font-semibold text-dark2 dark:text-light1">
        Research Analyst — PRIME Philippines
      </h3>

      <p className="mt-2 text-sm md:text-base leading-relaxed text-dark1/85 dark:text-light1/80 text-justify">
        I support the Research and Advisory Department by monitoring the
        Philippine real estate market, consolidating datasets, and crafting
        reports that turn scattered information into clear, actionable insights
        for internal teams and clients.
      </p>

      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs md:text-sm text-dark1/80 dark:text-light1/75">
        <li>Conduct market research and analysis for key property sectors.</li>
        <li>Maintain and enhance internal databases for property and leasing data.</li>
        <li>Build charts, tables, and narratives for presentations and reports.</li>
        <li>Coordinate with advisory and brokerage teams on client requirements.</li>
      </ul>
    </div>

    {/* Item 2: Self-directed learning */}
    <div className="relative pl-8">
      {/* Vertical line */}
      <span className="pointer-events-none absolute left-[11px] top-0 h-full w-px bg-light2 dark:bg-dark2" />
      {/* Timeline dot */}
      <span className="absolute left-[6px] top-2 h-3 w-3 rounded-full border-2 border-accent1 bg-light1 dark:bg-dark1" />

      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dark1/70 dark:text-light1/70">
          2024 – Ongoing
        </p>
        <span className="rounded-full bg-accent1/10 px-2.5 py-0.5 text-[11px] font-medium text-accent1">
          Learning & Projects
        </span>
      </div>

      <h3 className="mt-2 text-sm md:text-base font-semibold text-dark2 dark:text-light1">
        Self-Directed Data Projects & Skill Building
      </h3>

      <p className="mt-2 text-sm md:text-base leading-relaxed text-dark1/85 dark:text-light1/80 text-justify">
        Outside of work, I&apos;m focused on strengthening my foundations in
        data analytics and data engineering—using real datasets and practical
        workflows to connect what I learn with how data is used in real teams.
      </p>

      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs md:text-sm text-dark1/80 dark:text-light1/75">
        <li>Build small ETL-style pipelines with Python and SQL.</li>
        <li>Experiment with dashboards using Streamlit and Power BI.</li>
        <li>Explore Airflow, cloud warehouses, and orchestration patterns.</li>
        <li>Create personal projects around sales, stocks, and real estate data.</li>
      </ul>
    </div>

    {/* Item 3: Education */}
    <div className="relative pl-8">
      {/* Vertical line */}
      <span className="pointer-events-none absolute left-[11px] top-0 h-full w-px bg-light2 dark:bg-dark2" />
      {/* Timeline dot */}
      <span className="absolute left-[6px] top-2 h-3 w-3 rounded-full border-2 border-accent3 bg-light1 dark:bg-dark1" />

      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dark1/70 dark:text-light1/70">
          [2021] – [2025]
        </p>
        <span className="rounded-full bg-accent3/10 px-2.5 py-0.5 text-[11px] font-medium text-accent3">
          Education
        </span>
      </div>

      <h3 className="mt-2 text-sm md:text-base font-semibold text-dark2 dark:text-light1">
        BS Computer Engineering — [Pamantasan ng Lungsod ng Maynila]
      </h3>

      <p className="mt-2 text-sm md:text-base leading-relaxed text-dark1/85 dark:text-light1/80 text-justify">
        Built a foundation in programming, computer systems, and basic data
        concepts—giving me both a technical mindset and familiarity with how
        software, hardware, and networks fit together.
      </p>

      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs md:text-sm text-dark1/80 dark:text-light1/75">
        <li>Exposure to programming, data structures, and basic algorithms.</li>
        <li>Understanding of computer architecture and systems concepts.</li>
        <li>Early experience on projects that blend software and hardware.</li>
      </ul>
    </div>
  </div>
</section>
  );
}

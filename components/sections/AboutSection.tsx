import Section from "@/components/section";

const focus = [
  {
    title: "Real estate research → data",
    desc: "Turning market research into data pipelines, dashboards, and decision-ready insights.",
  },
  {
    title: "Lakehouse mindset",
    desc: "Building projects around modern analytics patterns: ingestion → transformation → modeling → reporting.",
  },
  {
    title: "Practical stack",
    desc: "Python, SQL, Git, and cloud fundamentals — shipping small projects consistently.",
  },
  {
    title: "Career target",
    desc: "Data Analyst / Data Engineer track, leaning into cloud & engineering foundations.",
  },
];

export default function AboutSection() {
  return (
    <section
  id="about"
  className="relative rounded-xl border border-light2 bg-light1 px-6 py-10 shadow-sm dark:border-dark2 dark:bg-dark1 md:px-10 md:py-12"
>
  {/* Soft accent glows */}
  <div className="pointer-events-none absolute -top-8 right-10 h-24 w-24 rounded-full bg-accent5/12 blur-3xl dark:bg-accent1/16" />
  <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 rounded-full bg-accent3/10 blur-2xl dark:bg-accent5/20" />

  {/* Section label */}
  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent5 dark:text-accent1">
    About
  </p>

  <div className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] md:items-start">
    {/* LEFT — Narrative */}
    <div className="space-y-5">
      <h2 className="text-2xl md:text-3xl font-semibold text-dark2 dark:text-light1">
        I turn complex information into clear, structured insights.
      </h2>

      <p className="text-base md:text-lg leading-relaxed text-dark1/85 dark:text-light1/80 text-justify">
        I&apos;m a Computer Engineering graduate and currently a{" "}
        <span className="font-medium text-accent5 dark:text-accent1">
          Research Analyst at PRIME Philippines
        </span>
        , where I work at the intersection of market intelligence, data, and
        decision-making. I monitor real estate trends, analyze datasets, and
        translate numbers into concise insights for internal teams and clients.
      </p>

      <p className="text-base md:text-lg leading-relaxed text-dark1/85 dark:text-light1/80 text-justify">
        What I enjoy most is the{" "}
        <span className="font-medium">data workflow behind the research</span>:
        organizing scattered datasets, building reusable structures, improving
        how information flows through the team, and presenting it through
        dashboards and reports that answer specific business questions. That
        curiosity led me deeper into{" "}
        <span className="font-medium">Python, SQL, and modern data tooling</span>.
      </p>

      <p className="text-base md:text-lg leading-relaxed text-dark1/85 dark:text-light1/80 text-justify">
        I&apos;m now expanding these skills further—developing small ETL
        pipelines, experimenting with cloud data platforms, and learning how to
        design clean, maintainable data flows. My long-term direction is toward{" "}
        <span className="font-medium">
          Data Engineering and Applied Analytics
        </span>
        : building systems that move, structure, and surface data so teams can
        make confident, data-backed decisions.
      </p>
    </div>

    {/* RIGHT — Cleaner, more engaging summary */}
    <aside className="space-y-5 md:space-y-6">
      {/* At a Glance card */}
      <article className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent5/60 hover:shadow-md dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent5/70 md:p-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-dark2/75 dark:text-light1/70">
          At a Glance
        </h3>
        <div className="mt-4 space-y-3 text-[13px] text-dark1/85 dark:text-light1/80">
          <div className="flex items-start gap-3">
            <span className="mt-[5px] h-2 w-2 flex-shrink-0 rounded-full bg-accent5" />
            <div>
              <p className="text-xs font-semibold text-dark2 dark:text-light1">
                Current
              </p>
              <p>
                Research Analyst at PRIME Philippines, focusing on real estate
                research and market monitoring.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-[5px] h-2 w-2 flex-shrink-0 rounded-full bg-accent1" />
            <div>
              <p className="text-xs font-semibold text-dark2 dark:text-light1">
                Strengths
              </p>
              <p>
                Turning raw data into clean, structured datasets and clear
                narratives for decision-makers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-[5px] h-2 w-2 flex-shrink-0 rounded-full bg-accent3" />
            <div>
              <p className="text-xs font-semibold text-dark2 dark:text-light1">
                Developing
              </p>
              <p>
                Python, SQL, ETL patterns, and cloud data tools to move toward
                Data Engineering and Analytics roles.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-[5px] h-2 w-2 flex-shrink-0 rounded-full bg-accent2" />
            <div>
              <p className="text-xs font-semibold text-dark2 dark:text-light1">
                Interested In
              </p>
              <p>
                Building data pipelines, analytics dashboards, and tools that
                help teams see the story behind the numbers.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Tools & focus areas card */}
      <article className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent5/60 hover:shadow-md dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent5/70 md:p-6">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent5 dark:text-accent1">
          Tools & Focus Areas
        </p>
        <div className="flex flex-wrap gap-2">
          <span
  className="inline-flex items-center justify-center rounded-full 
             bg-accent5/10 px-4 py-2 font-medium text-accent5 
             text-center min-w-[200px]"
>
  Databricks · PySpark · Delta Lake
</span>

<span
  className="inline-flex items-center justify-center rounded-full 
             bg-accent1/10 px-4 py-2 font-medium text-accent1 
             text-center min-w-[200px]"
>
  Python · Pandas · Data Pipelines
</span>

<span
  className="inline-flex items-center justify-center rounded-full 
             bg-accent3/10 px-4 py-2 font-medium text-accent3 
             text-center min-w-[200px]"
>
  SQL · PostgreSQL · Lakehouse Modeling
</span>

<span
  className="inline-flex items-center justify-center rounded-full 
             bg-accent2/10 px-4 py-2 font-medium text-accent2 
             text-center min-w-[200px]"
>
  Airflow · ETL Orchestration · Scheduling
</span>

<span
  className="inline-flex items-center justify-center rounded-full 
             bg-accent4/10 px-4 py-2 font-medium text-accent4 
             text-center min-w-[200px]"
>
  AWS · APIs · FastAPI · Cloud Compute
</span>

        </div>
      </article>
    </aside>
  </div>
</section>
  );
}

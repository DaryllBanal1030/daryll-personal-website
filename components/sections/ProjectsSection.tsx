export default function ProjectsSection() {
  return (
    <section
  id="projects"
  className="relative rounded-xl border border-light2 bg-light1 px-6 py-10 shadow-sm dark:border-dark2 dark:bg-dark1 md:px-10 md:py-12"
>
  {/* Soft accent glow */}
  <div className="pointer-events-none absolute -top-6 right-10 h-20 w-20 rounded-full bg-accent2/14 blur-2xl dark:bg-accent5/18" />

  {/* Section label */}
  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent5 dark:text-accent1">
    Projects
  </p>

  {/* Title + intro */}
  <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
    <h2 className="text-2xl md:text-3xl font-semibold text-dark2 dark:text-light1">
      Featured projects & experiments
    </h2>
    <p className="max-w-md text-xs md:text-sm text-dark1/70 dark:text-light1/65">
      A growing set of small data projects that explore analytics, pipelines,
      and dashboards. These will evolve into full case studies as I refine and
      publish them.
    </p>
  </div>

  {/* Project cards */}
  <div className="grid gap-4 md:gap-6 md:grid-cols-3">
    {/* Project 1 */}
    <article className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent5/60 hover:shadow-md dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent5/70 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-dark2 dark:text-light1">
          Sales Analytics Pipeline
        </h3>
        <span className="rounded-full bg-accent5/10 px-2.5 py-0.5 text-[11px] font-medium text-accent5">
          In Progress
        </span>
      </div>
      <p className="mt-2 text-xs md:text-sm text-dark1/80 dark:text-light1/80 text-justify">
        A small pipeline that ingests sales data, cleans it with Python, stores
        it in a database, and feeds a simple dashboard for tracking trends and
        performance.
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-dark1/75 dark:text-light1/75">
        <span className="rounded-full bg-accent5/10 px-2 py-0.5">
          Python · Pandas
        </span>
        <span className="rounded-full bg-accent1/10 px-2 py-0.5">
          SQL / PostgreSQL
        </span>
        <span className="rounded-full bg-accent3/10 px-2 py-0.5">
          ETL Concepts
        </span>
      </div>
      <p className="mt-3 text-[11px] text-dark1/60 dark:text-light1/60">
        Planned: publish a full case study with schema design, pipeline flow,
        and dashboard screenshots.
      </p>
    </article>

    {/* Project 2 */}
    <article className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent1/60 hover:shadow-md dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent1/70 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-dark2 dark:text-light1">
          Real Estate Market Insights
        </h3>
        <span className="rounded-full bg-accent1/10 px-2.5 py-0.5 text-[11px] font-medium text-accent1">
          Concept
        </span>
      </div>
      <p className="mt-2 text-xs md:text-sm text-dark1/80 dark:text-light1/80 text-justify">
        A project that brings together property, leasing, and market indicators
        to visualize supply, demand, and pricing trends in the Philippine real
        estate market.
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-dark1/75 dark:text-light1/75">
        <span className="rounded-full bg-accent1/10 px-2 py-0.5">
          Market Research
        </span>
        <span className="rounded-full bg-accent3/10 px-2 py-0.5">
          Dashboards
        </span>
        <span className="rounded-full bg-accent5/10 px-2 py-0.5">
          Streamlit / Power BI
        </span>
      </div>
      <p className="mt-3 text-[11px] text-dark1/60 dark:text-light1/60">
        Planned: structure PRIME data into a reusable model and build
        interactive visualizations.
      </p>
    </article>

    {/* Project 3 */}
    <article className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent2/60 hover:shadow-md dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent2/70 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-dark2 dark:text-light1">
          Data Pipeline Playground
        </h3>
        <span className="rounded-full bg-accent2/10 px-2.5 py-0.5 text-[11px] font-medium text-accent2">
          Learning
        </span>
      </div>
      <p className="mt-2 text-xs md:text-sm text-dark1/80 dark:text-light1/80 text-justify">
        A sandbox environment where I test ideas around scheduling, data
        quality checks, and orchestrating simple pipelines using Airflow and
        Docker.
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-dark1/75 dark:text-light1/75">
        <span className="rounded-full bg-accent2/10 px-2 py-0.5">
          Airflow (Docker)
        </span>
        <span className="rounded-full bg-accent5/10 px-2 py-0.5">
          Python Tasks
        </span>
        <span className="rounded-full bg-accent1/10 px-2 py-0.5">
          Monitoring Ideas
        </span>
      </div>
      <p className="mt-3 text-[11px] text-dark1/60 dark:text-light1/60">
        Planned: document DAGs, patterns, and lessons learned as I move toward
        production-style pipelines.
      </p>
    </article>
  </div>

  {/* Footer note */}
  <div className="mt-6 border-t border-light2 pt-4 text-[12px] text-dark1/70 dark:border-dark2 dark:text-light1/70">
    <p>
      As I finalize these projects, I&apos;ll publish detailed write-ups with
      code, architecture diagrams, and dashboards, and link them here and on my
      GitHub.
    </p>
  </div>
</section>
  );
}

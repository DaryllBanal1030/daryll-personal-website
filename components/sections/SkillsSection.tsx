export default function SkillsSection() {
  return (
    <section
  id="skills"
  className="relative rounded-xl border border-light2 bg-light1 px-6 py-10 shadow-sm dark:border-dark2 dark:bg-dark1 md:px-10 md:py-12"
>
  {/* Soft accent glow */}
  <div className="pointer-events-none absolute -top-6 right-10 h-20 w-20 rounded-full bg-accent1/12 blur-2xl dark:bg-accent5/16" />

  {/* Section label */}
  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent5 dark:text-accent1">
    Skills & Tools
  </p>

  {/* Title + intro */}
  <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
    <h2 className="text-2xl md:text-3xl font-semibold text-dark2 dark:text-light1">
      What I work and build with
    </h2>
    <p className="max-w-md text-xs md:text-sm text-dark1/70 dark:text-light1/65">
      A mix of research, analytics, and early data engineering skills—focused on
      turning real-world data into structured, useful outputs.
    </p>
  </div>

  {/* Skill cards grid */}
  <div className="grid gap-4 md:gap-6 md:grid-cols-2">
    {/* Card 1: Data & Analytics */}
    <article className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent5/60 hover:shadow-md dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent5/70 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-dark2 dark:text-light1">
          Data & Analytics
        </h3>
        <span className="rounded-full bg-accent5/10 px-2.5 py-0.5 text-[11px] font-medium text-accent5">
          Core
        </span>
      </div>
      <p className="mt-2 text-xs md:text-sm text-dark1/75 dark:text-light1/75">
        Working with data to analyze trends, answer questions, and support
        decision-making.
      </p>
      <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-dark1/85 dark:text-light1/80">
        <li>• Python (Pandas, basic data wrangling)</li>
        <li>• SQL (joins, aggregations, filtering)</li>
        <li>• Excel for analysis and reporting</li>
        <li>• Dashboards: Streamlit &amp; Power BI</li>
      </ul>
    </article>

    {/* Card 2: Data Engineering Foundations */}
    <article className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent5/60 hover:shadow-md dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent5/70 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-dark2 dark:text-light1">
          Data Engineering Foundations
        </h3>
        <span className="rounded-full bg-accent1/10 px-2.5 py-0.5 text-[11px] font-medium text-accent1">
          Growing
        </span>
      </div>
      <p className="mt-2 text-xs md:text-sm text-dark1/75 dark:text-light1/75">
        Building the fundamentals for moving, structuring, and managing data
        reliably.
      </p>
      <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-dark1/85 dark:text-light1/80">
        <li>• Databases: PostgreSQL, BigQuery (learning)</li>
        <li>• ETL patterns and basic data pipelines</li>
        <li>• Airflow experiments via Docker</li>
        <li>• API data ingestion and CSV/Excel workflows</li>
      </ul>
    </article>

    {/* Card 3: Research & Domain Knowledge */}
    <article className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent5/60 hover:shadow-md dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent5/70 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-dark2 dark:text-light1">
          Research & Domain Knowledge
        </h3>
        <span className="rounded-full bg-accent3/10 px-2.5 py-0.5 text-[11px] font-medium text-accent3">
          Strength
        </span>
      </div>
      <p className="mt-2 text-xs md:text-sm text-dark1/75 dark:text-light1/75">
        Understanding markets and turning qualitative and quantitative inputs
        into clear stories.
      </p>
      <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-dark1/85 dark:text-light1/80">
        <li>• Real estate market research (Philippines)</li>
        <li>• Market monitoring &amp; trend analysis</li>
        <li>• Report writing and presentations</li>
        <li>• Collaborating with advisory &amp; brokerage teams</li>
      </ul>
    </article>

    {/* Card 4: Developer & Portfolio Tools */}
    <article className="group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent5/60 hover:shadow-md dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent5/70 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-dark2 dark:text-light1">
          Developer & Portfolio Tools
        </h3>
        <span className="rounded-full bg-accent2/10 px-2.5 py-0.5 text-[11px] font-medium text-accent2">
          Toolkit
        </span>
      </div>
      <p className="mt-2 text-xs md:text-sm text-dark1/75 dark:text-light1/75">
        The tools I use to build projects, manage code, and ship portfolio work.
      </p>
      <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-dark1/85 dark:text-light1/80">
        <li>• Git &amp; GitHub</li>
        <li>• VS Code</li>
        <li>• Docker (local environments)</li>
        <li>• Next.js &amp; Tailwind CSS (this portfolio)</li>
      </ul>
    </article>
  </div>

  {/* Current focus chips */}
  <div className="mt-6 border-t border-light2 pt-4 text-[12px] text-dark1/75 dark:border-dark2 dark:text-light1/75">
    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent5 dark:text-accent1">
      Currently focusing on
    </p>
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full bg-accent5/10 px-3 py-1 font-medium text-accent5">
        Python for analytics &amp; ETL
      </span>
      <span className="rounded-full bg-accent1/10 px-3 py-1 font-medium text-accent1">
        SQL &amp; database design
      </span>
      <span className="rounded-full bg-accent3/10 px-3 py-1 font-medium text-accent3">
        Airflow &amp; orchestration basics
      </span>
      <span className="rounded-full bg-accent2/10 px-3 py-1 font-medium text-accent2">
        Streamlit dashboards &amp; portfolio
      </span>
    </div>
  </div>
</section>
  );
}

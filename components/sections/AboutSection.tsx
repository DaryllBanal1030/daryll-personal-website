"use client";

import { useState } from "react";

type ToolKey = "python" | "sql" | "powerbi";

const TOOL: Record<
  ToolKey,
  { label: string; tagClass: string; desc: string; bullets: string[] }
> = {
  python: {
    label: "Python",
    tagClass: "bg-accent5/15 text-accent5 dark:bg-accent1/15 dark:text-accent1",
    desc: "Automation + cleaning for repeatable research workflows.",
    bullets: [
      "Scraping/collection scripts",
      "Data cleaning (Pandas)",
      "Export to Excel / DB-ready outputs",
    ],
  },
  sql: {
    label: "SQL",
    tagClass: "bg-accent3/15 text-accent3 dark:bg-accent5/15 dark:text-accent5",
    desc: "Structure datasets so insights are queryable and reusable.",
    bullets: ["Joins & aggregations", "Validation checks", "Analysis-ready tables for reporting"],
  },
  powerbi: {
    label: "Power BI",
    tagClass: "bg-accent2/15 text-accent2 dark:bg-accent2/15 dark:text-accent2",
    desc: "Dashboards that summarize market signals for decision-making.",
    bullets: ["KPI + trend views", "Segment breakdowns", "Stakeholder-ready visuals"],
  },
};

const WORKFLOW = [
  { step: "01", title: "Gather", desc: "Scrape / collect raw market data", dot: "bg-accent5" },
  { step: "02", title: "Store", desc: "Excel or SQL (depending on size)", dot: "bg-accent1" },
  { step: "03", title: "Analyze", desc: "Clean, validate, summarize", dot: "bg-accent3" },
  { step: "04", title: "Present", desc: "Power BI or PPT storytelling", dot: "bg-accent2" },
] as const;

const HOVER_CARD =
  "group rounded-xl border border-light2 bg-light1/95 p-5 shadow-sm " +
  "transition hover:-translate-y-1 hover:border-accent2/60 hover:shadow-md " +
  "dark:border-dark2 dark:bg-dark1/95 dark:hover:border-accent2/70 md:p-6";

export default function AboutSection() {
  const [active, setActive] = useState<ToolKey>("python");

  const tabBase =
    "rounded-full px-3.5 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent5/40 dark:focus-visible:ring-accent1/40";

  const tabInactive =
    "border border-light2 bg-light1/70 text-dark2 hover:bg-light2 dark:border-dark2 dark:bg-dark1/60 dark:text-light1 dark:hover:bg-dark2";

  const tabActive = "shadow-sm";

  return (
    <section
      id="about"
      className="group relative overflow-hidden rounded-2xl border border-light2 bg-light1 px-6 py-10 shadow-sm
             transition hover:-translate-y-1 hover:border-accent2/60 hover:shadow-md
             dark:border-dark2 dark:bg-dark1 dark:hover:border-accent2/70
             md:px-10 md:py-14">
      {/* Glows */}
      <div className="pointer-events-none absolute -top-10 right-10 h-28 w-28 rounded-full bg-accent5/12 blur-3xl dark:bg-accent1/16" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-accent3/10 blur-3xl dark:bg-accent5/20" />

      {/* Label */}
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent5 dark:text-accent1">
        About
      </p>

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.65fr)_minmax(0,1.05fr)] md:items-start">
        {/* LEFT */}
        <div className="space-y-6">
          {/* Headline */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-dark2 dark:text-light1 md:text-3xl">
              I turn raw market data into decision-ready outputs.
            </h2>
            <p className="text-base leading-relaxed text-dark1/85 dark:text-light1/80 md:text-lg text-justify">
              I’m{" "}
              <span className="font-medium text-accent5 dark:text-accent1">Daryll Banal</span>, a
              Research Analyst at PRIME Philippines. I work on the workflow behind research:
              gathering data, structuring it, analyzing trends, and presenting insights clearly.
            </p>
          </div>

          {/* Workflow card (now hover-glow) */}
          <article className={HOVER_CARD}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-dark2/75 transition-colors group-hover:text-accent2 dark:text-light1/70">
                Current workflow
              </h3>
              <span className="rounded-full bg-accent5/10 px-2.5 py-1 text-[11px] font-semibold text-accent5 dark:bg-accent1/10 dark:text-accent1">
                Research → Data
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {WORKFLOW.map((w) => (
                <div
                  key={w.step}
                  className="rounded-xl border border-light2 bg-light1/70 p-4 transition dark:border-dark2 dark:bg-dark1/60"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${w.dot}`} />
                      <span className="text-[11px] font-semibold tracking-[0.18em] text-dark1/65 dark:text-light1/60">
                        {w.step}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark2 dark:text-light1">{w.title}</p>
                      <p className="mt-1 text-sm text-dark1/75 dark:text-light1/70">{w.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <details className="group mt-4">
              <summary className="cursor-pointer list-none text-sm font-semibold text-accent5 dark:text-accent1">
                <span className="inline-flex items-center gap-2">
                  What I’m improving next
                  <span className="text-dark1/60 transition group-open:rotate-180 dark:text-light1/60">
                    ▾
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-dark1/80 dark:text-light1/75 text-justify">
                I’m making this workflow more repeatable by moving more steps into Python + SQL,
                reducing manual Excel steps, and packaging insights into dashboards that update faster.
              </p>
            </details>
          </article>
        </div>

        {/* RIGHT */}
        <aside className="space-y-5">
          {/* At a glance (now hover-glow) */}
          <article className={HOVER_CARD}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-dark2/75 transition-colors group-hover:text-accent2 dark:text-light1/70">
              At a glance
            </h3>

            <div className="mt-4 space-y-3 text-[13px] text-dark1/85 dark:text-light1/80">
              <div className="flex items-start gap-3">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-accent5" />
                <div>
                  <p className="text-xs font-semibold text-dark2 dark:text-light1">Role</p>
                  <p>Research Analyst · PRIME Philippines</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-accent3" />
                <div>
                  <p className="text-xs font-semibold text-dark2 dark:text-light1">Strength</p>
                  <p>Turning messy inputs into structured insights</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-accent2" />
                <div>
                  <p className="text-xs font-semibold text-dark2 dark:text-light1">Outputs</p>
                  <p>Excel analysis · Power BI dashboards · PPT summaries</p>
                </div>
              </div>
            </div>
          </article>

          {/* Toolkit tabs (now hover-glow) */}
          <article className={HOVER_CARD}>
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent5 dark:text-accent1">
                Current toolkit
              </p>
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${TOOL[active].tagClass}`}
              >
                Focus
              </span>
            </div>

            {/* Tabs */}
            <div className="mt-3 flex flex-wrap gap-2">
              {(["python", "sql", "powerbi"] as ToolKey[]).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setActive(k)}
                  className={[
                    tabBase,
                    active === k ? `${TOOL[k].tagClass} ${tabActive}` : tabInactive,
                  ].join(" ")}
                >
                  {TOOL[k].label}
                </button>
              ))}
            </div>

            {/* Panel */}
            <div className="mt-4 rounded-xl border border-light2 bg-light1/70 p-4 dark:border-dark2 dark:bg-dark1/60">
              <p className="text-sm font-semibold text-dark2 dark:text-light1">{TOOL[active].desc}</p>

              <ul className="mt-3 space-y-1.5 text-sm text-dark1/80 dark:text-light1/75">
                {TOOL[active].bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}

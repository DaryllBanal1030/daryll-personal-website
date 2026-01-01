export default function ContactSection() {
  return (
    <section
  id="contact"
  className="group relative overflow-hidden rounded-2xl border border-light2 bg-light1 px-6 py-10 shadow-sm
             transition hover:-translate-y-1 hover:border-accent2/60 hover:shadow-md
             dark:border-dark2 dark:bg-dark1 dark:hover:border-accent2/70
             md:px-10 md:py-14">
  {/* Soft accent glow */}
  <div className="pointer-events-none absolute -top-6 left-10 h-20 w-20 rounded-full bg-accent5/12 blur-2xl dark:bg-accent1/16" />

  {/* Section label */}
  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent5 dark:text-accent1">
    Contact
  </p>

  <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
    {/* LEFT — Main CTA copy */}
    <div className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-dark2 dark:text-light1">
        Let&apos;s talk about data, research, or opportunities.
      </h2>

      <p className="text-sm md:text-base leading-relaxed text-dark1/85 dark:text-light1/80 text-justify">
        If you&apos;d like to discuss a role, collaborate on a project, or just
        learn more about what I&apos;m working on, feel free to reach out. I&apos;m
        especially interested in opportunities related to research, data
        analytics, or early-stage data engineering work.
      </p>

      <p className="text-sm md:text-base leading-relaxed text-dark1/85 dark:text-light1/80 text-justify">
        You can contact me directly via email or connect with me on LinkedIn.
        I&apos;m always open to thoughtful messages and conversations about
        real-world data problems, dashboards, and how research can support
        better decisions.
      </p>

      {/* Primary CTA buttons */}
      <div className="mt-3 flex flex-wrap gap-3 text-sm">
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center justify-center rounded-md bg-accent5 px-4 py-2 text-sm font-semibold text-light1 shadow-sm transition hover:bg-accent3"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/darylllbanal/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-light2 px-4 py-2 text-sm font-medium text-dark2 transition hover:bg-light2 dark:border-dark2 dark:text-light1 dark:hover:bg-dark2"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>

    {/* RIGHT — Contact details cards */}
    <aside className="space-y-4 md:space-y-5">
      {/* Email card */}
      <div className="hover:-translate-y-1 hover:border-accent2/60 hover:shadow-md
             dark:border-dark2 dark:bg-dark1 rounded-xl border border-light2 bg-light1/95 p-4 text-sm shadow-sm dark:border-dark2 dark:bg-dark1/90 md:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dark1/70 dark:text-light1/70">
          Email
        </p>
        <p className="mt-2 text-xs md:text-sm text-dark1/80 dark:text-light1/80">
          For roles, project inquiries, or general questions:
        </p>
        <a
          href="mailto:darylllbanal@gmail.com"
          className="mt-3 block text-sm font-medium text-accent5 underline-offset-4 hover:underline dark:text-accent1"
        >
          darylllbanal@gmail.com
        </a>
      </div>

      {/* LinkedIn card */}
      <div className="hover:-translate-y-1 hover:border-accent2/60 hover:shadow-md
             dark:border-dark2 dark:bg-dark1 rounded-xl border border-light2 bg-light1/95 p-4 text-sm shadow-sm dark:border-dark2 dark:bg-dark1/90 md:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dark1/70 dark:text-light1/70">
          LinkedIn
        </p>
        <p className="mt-2 text-xs md:text-sm text-dark1/80 dark:text-light1/80">
          Let&apos;s connect professionally and stay in touch.
        </p>
        <a
          href="https://www.linkedin.com/in/darylllbanal/"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center text-sm font-medium text-accent5 underline-offset-4 hover:underline dark:text-accent1"
        >
          Daryll Banal
        </a>
      </div>

      {/* GitHub / portfolio card (optional) */}
      <div className="hover:-translate-y-1 hover:border-accent2/60 hover:shadow-md
             dark:border-dark2 dark:bg-dark1 rounded-xl border border-light2 bg-light1/95 p-4 text-sm shadow-sm dark:border-dark2 dark:bg-dark1/90 md:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dark1/70 dark:text-light1/70">
          GitHub / Portfolio
        </p>
        <p className="mt-2 text-xs md:text-sm text-dark1/80 dark:text-light1/80">
          As I publish more projects, I&apos;ll keep this updated with code,
          experiments, and case studies.
        </p>
        <a
          href="https://github.com/DaryllBanal1030"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center text-sm font-medium text-accent5 underline-offset-4 hover:underline dark:text-accent1"
        >
          View my Github
        </a>
      </div>
    </aside>
  </div>
</section>
  );
}

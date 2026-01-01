import { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  label: string;
  children: ReactNode;
  glow?: ReactNode; // optional decorative glows per section
};

export default function SectionShell({ id, label, glow, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 rounded-xl border border-light2 bg-light1 px-6 py-10 shadow-sm dark:border-dark2 dark:bg-dark1 md:px-10 md:py-12"
    >
      {/* Decorative glows */}
      {glow}

      {/* Section label */}
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent5 dark:text-accent1">
        {label}
      </p>

      {children}
    </section>
  );
}

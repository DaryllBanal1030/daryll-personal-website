"use client";

export function Section({
  id,
  title,
  children,
  className = "",
  dark = false,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean; // toggle background
}) {
  return (
    <section
      id={id}
      className={`
        border border-light2 dark:border-dark2
        rounded-xl
        p-6 md:p-10 
        scroll-mt-24
        transition-colors
        ${dark ? "bg-light2 dark:bg-dark2" : "bg-light1 dark:bg-dark1"}
        ${className}
      `}
    >
      {title && (
        <h2 className="text-lg font-semibold text-dark2 dark:text-light1 mb-4">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

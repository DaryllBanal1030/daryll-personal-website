"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => setMounted(true), []);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Scrollspy via IntersectionObserver
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Take the entries that are intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          // Prefer the one with the highest intersection ratio
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        // Adjust for sticky navbar height (roughly)
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) => {
    const isActive = activeId === id;

    return [
      "rounded-md px-2 py-1 text-dark2 transition dark:text-light1",
      "hover:bg-light2 dark:hover:bg-dark2",
      isActive
        ? "bg-light2 font-semibold text-accent5 dark:bg-dark2 dark:text-accent1"
        : "",
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-20 border-b border-light2 bg-light1/80 backdrop-blur-md dark:border-dark2 dark:bg-dark1/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* LEFT: Logo + name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-light2 bg-light2 dark:border-dark2 dark:bg-dark2">
            <Image
              src="/logo-daryll.png"
              alt="Daryll logo"
              fill
              className="object-contain p-1.5"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-bold text-dark2 dark:text-light1">
              Daryll Banal
            </span>
            <span className="text-[11px] text-accent5 dark:text-accent1">
              Research Analyst · Data Professional
            </span>
          </div>
        </Link>

        {/* RIGHT: Links + Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 text-sm md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToId(item.id)}
                className={linkClass(item.id)}
                aria-current={activeId === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-light2 text-xs shadow-sm transition hover:bg-light2 dark:border-dark2 dark:text-slate-100 dark:hover:bg-dark2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

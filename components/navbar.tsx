"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

type NavId = (typeof NAV_ITEMS)[number]["id"];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Default to "about" so one item is highlighted after first scroll/observe.
  const [activeId, setActiveId] = useState<NavId>("about");

  // Keep intersection ratios for ALL sections (more reliable than sorting "entries" only)
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => setMounted(true), []);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Scrollspy (reliable)
  // Scrollspy (top proximity based - works both down and up)
// Scrollspy (deterministic: based on section top positions)
useEffect(() => {
  const sectionEls = NAV_ITEMS
    .map((item) => document.getElementById(item.id))
    .filter(Boolean) as HTMLElement[];

  if (sectionEls.length === 0) return;

  // Distance from top where we consider a section "active"
  // Adjust if needed. Should be >= navbar height.
  const OFFSET = 110;

  let ticking = false;

  const updateActive = () => {
    ticking = false;

    // Find the last section whose top is <= OFFSET
    let current: NavId = NAV_ITEMS[0].id;

    for (const item of NAV_ITEMS) {
      const el = document.getElementById(item.id);
      if (!el) continue;

      const top = el.getBoundingClientRect().top;
      if (top <= OFFSET) current = item.id;
    }

    setActiveId((prev) => (prev === current ? prev : current));
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateActive);
    }
  };

  // Run once on mount (for refresh / direct load)
  updateActive();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  };
}, []);


  const baseBtn =
    "rounded-md px-2.5 py-1.5 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent5/40 dark:focus-visible:ring-accent1/40";
  const inactiveBtn =
    "text-dark2 hover:bg-light2 dark:text-light1 dark:hover:bg-dark2";
  const activeBtn =
    "bg-accent5/15 text-accent5 shadow-sm dark:bg-accent1/15 dark:text-accent1";

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
              priority
            />
          </div>

          <div className="flex flex-col leading-tight">
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
          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className={[
                    baseBtn,
                    isActive ? activeBtn : inactiveBtn,
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Theme toggle */}
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
  {/* Section links (hidden on very small screens) */}
  <div className="hidden items-center gap-2 text-sm md:flex">
    <button
      type="button"
      onClick={() => scrollToId("about")}
      className="rounded-md px-2 py-1 text-dark2 transition hover:bg-light2 dark:text-light1 dark:hover:bg-dark2"
    >
      About
    </button>
    <button
      type="button"
      onClick={() => scrollToId("experience")}
      className="rounded-md px-2 py-1 text-dark2 transition hover:bg-light2 dark:text-light1 dark:hover:bg-dark2"
    >
      Experience
    </button>
    <button
      type="button"
      onClick={() => scrollToId("skills")}
      className="rounded-md px-2 py-1 text-dark2 transition hover:bg-light2 dark:text-light1 dark:hover:bg-dark2"
    >
      Skills
    </button>
    <button
      type="button"
      onClick={() => scrollToId("projects")}
      className="rounded-md px-2 py-1 text-dark2 transition hover:bg-light2 dark:text-light1 dark:hover:bg-dark2"
    >
      Projects
    </button>
    <button
      type="button"
      onClick={() => scrollToId("contact")}
      className="rounded-md px-2 py-1 text-dark2 transition hover:bg-light2 dark:text-light1 dark:hover:bg-dark2"
    >
      Contact
    </button>
  </div>

  {/* Theme toggle stays the same below */}
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

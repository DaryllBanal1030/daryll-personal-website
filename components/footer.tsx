export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <span>© {new Date().getFullYear()} Daryll. All rights reserved.</span>
        <span>Built with Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
}

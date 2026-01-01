import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-light1 text-dark2 dark:bg-dark1 dark:text-light1">
      <Navbar />

      <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-10 md:gap-14 md:py-16">
        <HeroSection />
        {/* AboutSection */}
        {/* ExperienceSection */}
        {/* SkillsSection */}
        {/* ProjectsSection */}
        {/* ContactSection */}
      </main>
    </div>
  );
}

import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import CoursesSection from "@/components/CoursesSection";
import ContactSection from "@/components/ContactSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      <HeroSection />
      <TimelineSection />
      <ProjectsSection />
      <CoursesSection />
      <ContactSection />
    </main>
  );
};

export default Index;

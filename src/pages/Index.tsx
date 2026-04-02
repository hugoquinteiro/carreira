import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Index;

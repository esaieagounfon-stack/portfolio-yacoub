import Hero06 from "@/components/originkit/hero-06";
import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExpertiseSection } from "@/components/portfolio/expertise-section";
import { SiteFooter } from "@/components/portfolio/footer";
import { ProcessSection } from "@/components/portfolio/process-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ToolsMarquee } from "@/components/portfolio/tools-marquee";

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5ee] text-black">
      <Hero06 />
      <AboutSection />
      <ToolsMarquee />
      <ExpertiseSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}

export default App;

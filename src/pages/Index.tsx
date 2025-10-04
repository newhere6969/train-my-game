import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SportsGrid from "@/components/SportsGrid";
import TutorialSection from "@/components/TutorialSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SportsGrid />
      <TutorialSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;

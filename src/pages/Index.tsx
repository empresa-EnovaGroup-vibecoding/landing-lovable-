import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import PackSection from "@/components/landing/PackSection";
import ComparisonTable from "@/components/landing/ComparisonTable";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PackSection />
      <ComparisonTable />
      <TestimonialsSection />
      <HowItWorks />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;

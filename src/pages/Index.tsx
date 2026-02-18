import HeroSection from "@/components/landing/HeroSection";

import ProblemSection from "@/components/landing/ProblemSection";
import PromptsSection from "@/components/landing/PromptsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import HowItWorks from "@/components/landing/HowItWorks";
import PackSection from "@/components/landing/PackSection";
import NexusVsOthersTable from "@/components/landing/NexusVsOthersTable";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* E5: EXCITE */}
      <HeroSection />

      {/* E5: EDUCATE */}
      <ProblemSection />

      {/* E5: ENGAGE */}
      <PromptsSection />
      <TestimonialsSection />

      {/* E5: EXPLAIN */}
      <HowItWorks />
      <PackSection />
      <NexusVsOthersTable />

      {/* E5: EXECUTE */}
      <FAQSection />
      <CTASection />

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;

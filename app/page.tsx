import {
  Navbar,
  MarqueeSection,
  HeroSection,
  StatsSection,
  FeaturesSection,
  RoadmapSection,
  TestimonialsSection,
  PricingSection,
  FooterSection
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Fixed Header with Marquee */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <MarqueeSection />
        <div className="bg-white">
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-[84px]"> {/* 48px (marquee) + 72px (navbar) */}
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <div id="features" className="scroll-mt-[140px]">
          <StatsSection />
          <FeaturesSection />
        </div>

        {/* Roadmap Section */}
        <div id="roadmap" className="scroll-mt-[140px]">
          <RoadmapSection />
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="scroll-mt-[140px]">
          <TestimonialsSection />
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="scroll-mt-[140px]">
          <PricingSection />
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </main>
  );
}

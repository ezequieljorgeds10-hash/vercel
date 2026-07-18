import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ImpactSection } from "@/components/impact-section";
import { AboutSection } from "@/components/about-section";
import { DonationSection } from "@/components/donation-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ActivitySection } from "@/components/activity-section";
import { LocationSection } from "@/components/location-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <ImpactSection />
        <AboutSection />
        <DonationSection />
        <TestimonialsSection />
        <ActivitySection />
        <LocationSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

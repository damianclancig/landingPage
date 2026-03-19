
import BioSection from '@/components/sections/bio';
import ContactSection from '@/components/sections/contact';
import CtaSection from '@/components/sections/cta';
import DetailedOfferingsSection from '@/components/sections/detailed-offerings';
import HeroSection from '@/components/landing/HeroSection';
import TechStackMarquee from '@/components/landing/TechStackMarquee';
import PricingCards from '@/components/landing/PricingCards';
import PortfolioGrid from '@/components/landing/PortfolioGrid';
import SmartContactHub from '@/components/landing/SmartContactHub';
import PricingSection from '@/components/sections/pricing';
import ProjectsSection from '@/components/sections/projects';
import ServicesSection from '@/components/sections/services';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackMarquee />
      <PricingCards />
      <PortfolioGrid />
      <SmartContactHub />
    </>
  );
}

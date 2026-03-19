
import HeroSection from '@/components/landing/HeroSection';
import TechStackMarquee from '@/components/landing/TechStackMarquee';
import PricingCards from '@/components/landing/PricingCards';
import PortfolioGrid from '@/components/landing/PortfolioGrid';
import SmartContactHub from '@/components/landing/SmartContactHub';

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

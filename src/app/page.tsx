import dynamic from 'next/dynamic';
import HeroSection from '@/components/landing/HeroSection';
import TechStackMarquee from '@/components/landing/TechStackMarquee';
import PricingCards from '@/components/landing/PricingCards';
import PortfolioGrid from '@/components/landing/PortfolioGrid';

const SmartContactHub = dynamic(() => import('@/components/landing/SmartContactHub'), {
  ssr: true, // Maintain SEO but load JS later
});

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

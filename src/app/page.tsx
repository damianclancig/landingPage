
import BioSection from '@/components/sections/bio';
import ContactSection from '@/components/sections/contact';
import CtaSection from '@/components/sections/cta';
import DetailedOfferingsSection from '@/components/sections/detailed-offerings';
import HeroSection from '@/components/sections/hero';
import PricingSection from '@/components/sections/pricing';
import ServicesSection from '@/components/sections/services';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BioSection />
      <ServicesSection />
      <DetailedOfferingsSection />
      <PricingSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}

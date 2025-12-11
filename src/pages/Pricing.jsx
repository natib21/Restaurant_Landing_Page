// src/pages/Pricing.jsx
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import PricingSection from '../component/Pricing/PricingSection';

import { CreditCard, QrCode, Smartphone, Store, Users, Wallet } from 'lucide-react';

const pricingWhyChooseUs = [
  {
    title: 'Free Forever Plan',
    icon: CreditCard,
    desc: 'Start with no cost — perfect for small cafes',
  },
  {
    title: 'No Hidden Fees',
    icon: QrCode,
    desc: 'What you see is what you pay — always',
  },
  {
    title: 'Offline Ready',
    icon: Smartphone,
    desc: 'Works perfectly even without internet',
  },
  {
    title: 'Ethiopian Payments',
    icon: Wallet,
    desc: 'Telebirr, CBE Birr, HelloCash — all built-in',
  },
];

export default function Pricing() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-16 lg:py-0">
        <div className="mx-auto max-w-7xl px-6">
          <HeroSection
            badge="Simple & Transparent"
            heading={
              <>
                Pick Your Plan
                <br />
                <span className="text-blue-900 font-merienda">Free Forever</span>
              </>
            }
            description="No hidden fees. No contracts. Start free forever — upgrade only when you're ready. Built for Ethiopian restaurants."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="Contact Sales"
            ctaSecondaryLink="/contact"
            stats={[
              { value: 'Free', label: 'Forever Plan' },
              { value: '0 ETB', label: 'Setup Cost' },
              { value: '14-Day', label: 'Pro Trial' },
              { value: '50+', label: 'Happy Restaurants' },
            ]}
          />
        </div>
      </section>

      <WhyChooseUsSection features={pricingWhyChooseUs} className="" />

      <section className=" bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <PricingSection />
        </div>
      </section>
    </>
  );
}

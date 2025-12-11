// pages/features/MultiMenu.jsx  (ULTIMATE VERSION – Includes Categories + Combos)
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import ReusableFlow from '../component/common/ReusableFlow';
import {
  Package, Store, Layers, Zap, Globe, QrCode, Smartphone,
  Clock, Calendar, Sunrise, Tag, EyeOff, Shuffle,
  Plus, Percent, Languages , Palette , Camera,Shield ,Heart 
} from 'lucide-react';
const digitalMenuWhyChooseUs = [
  { title: 'Stunning Mobile Design', icon: Smartphone, desc: 'Looks beautiful on every phone — no cheap PDF' },
  { title: 'Add Food Photos', icon: Camera, desc: 'Show your delicious dishes — customers order more' },
  { title: 'Your Branding', icon: Palette, desc: 'Logo, colors, fonts — feels like your restaurant' },
  { title: 'Amharic + English', icon: Languages, desc: 'Full bilingual — customers switch instantly' },
  { title: 'Update in 1 Second', icon: Zap, desc: 'Change price, hide item — live immediately' },
  { title: 'Works Offline', icon: Shield, desc: 'Menu loads fast even without internet' },
  { title: 'Customer Favorites', icon: Heart, desc: 'Highlight most popular items first' },
  { title: 'Custom Link', icon: Globe, desc: 'menu.yourrestaurant.com — professional URL' },
];
const MultiMenu = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl px-6">
          <HeroSection
          
            badge="The Only Menu System You’ll Ever Need"
            heading={
              <>
                One Master Menu
                <br />
                <span className="text-blue-900 font-merienda">Endless Possibilities Per Branch</span>
              </>
            }
            description="Create once. Customize per branch. Add smart categories, time-based visibility, and unlimited combos — all without printing a single paper menu again."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="See Full Demo"
            ctaSecondaryLink="/contact"
            stats={[
              { value: '1 Menu', label: 'To Rule All Branches' },
              { value: '∞', label: 'Variations & Combos' },
              { value: '0', label: 'Paper Menus Forever' },
            ]}
          />
        </div>
      </section>

      <WhyChooseUsSection features={digitalMenuWhyChooseUs}/>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="No More Menu Chaos Across Branches"
            title={
              <>
                Full Control at Every Branch
                <br />
                <span className="text-blue-900 font-merienda">From Portal → Customer → Done</span>
              </>
            }
          >
            One central menu. Smart categories. Time-based visibility. Branch-specific pricing & combos. Real-time sync. Zero printing.
          </SectionHeader>
        </div>
      </section>

      {/* Core Features – Now Includes Categories + Combos */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-20">

          {/* Master Menu Library */}
          <FeatureHighlight
            badge="One Source of Truth"
            title={
              <>
                Master Menu Library
                <br />
                <span className="text-blue-900 font-merienda">Add Once, Use Everywhere</span>
              </>
            }
            description="Build your full menu once: injera, kitfo, shiro, coffee, drinks, desserts — instantly available to all branches."
            imageSrc="/images/master-menu-library.webp"
            imageAlt="Central menu library"
            features={[
              { icon: Package, title: 'Central Database', desc: 'Edit once → updates everywhere' },
              { icon: Tag, title: 'Smart Tagging', desc: 'Spicy, Vegan, Fasting, Ramadan, etc.' },
              { icon: Globe, title: 'Multi-Language Ready', desc: 'Amharic + English + photos' },
              { icon: Zap, title: 'Instant Availability', desc: 'New item live in seconds' },
            ]}
          />

          {/* Smart Categories */}
          <FeatureHighlight
            reverse
            zebra
            badge="Ethiopian-Style Categories"
            title={
              <>
                Categories That Make Sense
                <br />
                <span className="text-blue-900 font-merienda">Auto Show/Hide by Time & Branch</span>
              </>
            }
            description="Breakfast disappears at 11 AM. Fasting category appears during Lent. Alcohol hidden in conservative branches — automatically."
            imageSrc="/images/ethiopian-menu-categories.webp"
            imageAlt="Smart time and branch-based categories"
            features={[
              { icon: Sunrise, title: 'Breakfast Auto-Hide', desc: 'Gone after 11 AM' },
              { icon: Calendar, title: 'Ramadan & Fasting Mode', desc: 'Auto-activate during seasons' },
              { icon: EyeOff, title: 'Hide Per Branch', desc: 'No alcohol in certain locations' },
              { icon: Shuffle, title: 'Drag & Drop Order', desc: 'Put “Fasting” first when needed' },
            ]}
          />

          {/* Branch Variations */}
          <FeatureHighlight
            badge="Branch-Level Freedom"
            title={
              <>
                Each Branch, Its Own Menu
                <br />
                <span className="text-blue-900 font-merienda">Without Losing Control</span>
              </>
            }
            description="Bole prices higher. Piassa hides alcohol. Sarbet has student combos. All from one dashboard."
            imageSrc="/images/branch-menu-variation.webp"
            imageAlt="Branch-specific pricing and visibility"
            features={[
              { icon: Store, title: 'Custom Pricing', desc: '450 ETB in Bole → 380 ETB in Piassa' },
              { icon: EyeOff, title: 'Hide Items & Categories', desc: 'Per branch control' },
              { icon: Layers, title: 'Reorder Categories', desc: 'Different flow per location' },
              { icon: QrCode, title: 'Unique QR Per Branch', desc: 'Always shows correct menu' },
            ]}
          />

          {/* Combos & Deals */}
          <FeatureHighlight
            reverse
            zebra
            badge="Unlimited Combos & Deals"
            title={
              <>
                Create Deals That Sell
                <br />
                <span className="text-blue-900 font-merienda">Per Branch or Nationwide</span>
              </>
            }
            description="Family platters, lunch specials, coffee + cake, iftar bundles — build once, activate anywhere."
            imageSrc="/images/menu-combos-specials.webp"
            imageAlt="Creating powerful combo deals"
            features={[
              { icon: Plus, title: 'Any Combo Type', desc: 'Main + Drink + Side = Discount' },
              { icon: Percent, title: 'Auto Discounts', desc: 'Fixed price or % off' },
              { icon: Clock, title: 'Time-Limited Deals', desc: 'Lunch combo 11AM–3PM only' },
              { icon: Store, title: 'Branch-Exclusive', desc: 'Student deal only near universities' },
            ]}
          />

          {/* Instant Updates & Sync */}
          <FeatureHighlight
            badge="Zero Printing. Zero Delays."
            title={
              <>
                Update Once → Live Everywhere
                <br />
                <span className="text-blue-900 font-merienda">In Under 3 Seconds</span>
              </>
            }
            description="Price change? New combo? Seasonal category? Push to all (or selected) branches — customers see it instantly."
            imageSrc="/images/menu-instant-update.webp"
            imageAlt="Real-time menu sync across branches"
            ctaText="See Sync in Action"
            ctaLink="/contact"
            features={[
              { icon: Zap, title: 'Real-Time Sync', desc: 'No delays, no confusion' },
              { icon: Smartphone, title: 'Customer Sees Latest', desc: 'On their phone immediately' },
              { icon: QrCode, title: 'QR Always Current', desc: 'Never reprint again' },
              { icon: Globe, title: 'Selective Push', desc: 'Update only certain branches' },
            ]}
          />
        </div>
      </section>

      {/* Onboarding Flow */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Go From Paper to Digital in 10 Minutes"
            title={
              <>
                Your Perfect Multi-Branch Menu
                <br />
                <span className="text-blue-900 font-merienda">Live & Selling in Minutes</span>
              </>
            }
          >
            <div className="mt-12">
              <ReusableFlow
                steps={[
                  'Add items to master menu',
                  'Organize into smart categories',
                  'Set branch pricing & visibility',
                  'Create combos → Print QRs → Done!',
                ]}
              />
            </div>
          </SectionHeader>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to bottom right, rgba(30, 64, 175,0.92), rgba(30, 58, 138, 0.88)),
            url(${abstractBackground})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-merienda leading-tight">
            Ready to Kill Paper Menus Forever?
          </h2>
          <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto font-merienda">
            One menu. All branches. Smart categories. Powerful combos.
            <br className="hidden sm:block" />
            Zero printing. Total control.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://app.menuroom.et/signup"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-xl font-bold text-blue-900 shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
              <span className="transform transition-transform group-hover:translate-x-2">→</span>
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 text-white text-lg font-semibold hover:text-blue-200 transition">
              Book Full Menu Demo
              <span>→</span>
            </Link>
          </div>
          <p className="mt-12 text-blue-200 text-sm">
            14-day free trial • No credit card • Works offline • Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
};

export default MultiMenu;
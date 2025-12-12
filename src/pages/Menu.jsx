// src/pages/features/DigitalMenu.jsx
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import ReusableFlow from '../component/common/ReusableFlow';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import menu from '/images/Menu.jpg';
import {
  Smartphone,
  Camera,
  Palette,
  Languages,
  Zap,
  Shield,
  Globe,
  Clock,
  Users,
  QrCode,
  FileText,
  Heart,
} from 'lucide-react';

// Why Choose Digital Menu
const digitalMenuWhyChooseUs = [
  {
    title: 'Stunning Mobile Design',
    icon: Smartphone,
    desc: 'Beautiful and responsive on every phone — never a boring PDF.',
  },
  {
    title: 'Add Food Photos',
    icon: Camera,
    desc: 'Show your dishes with mouthwatering photos — boost orders.',
  },
  {
    title: 'Your Branding',
    icon: Palette,
    desc: 'Use your logo, colors, and fonts — matches your restaurant style.',
  },
  {
    title: 'Amharic + English',
    icon: Languages,
    desc: 'Full bilingual support — switch languages instantly.',
  },
  {
    title: 'Update in 1 Second',
    icon: Zap,
    desc: 'Edit prices or hide items — changes appear live immediately.',
  },
  {
    title: 'Works Offline',
    icon: Shield,
    desc: 'Menu loads fast even if the internet goes down.',
  },
  {
    title: 'Customer Favorites',
    icon: Heart,
    desc: 'Highlight popular items first — boost repeat orders.',
  },
  {
    title: 'Custom Link',
    icon: Globe,
    desc: 'Professional URL like menu.yourrestaurant.com for easy sharing.',
  },
];

export default function DigitalMenu() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white  sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl px-6">
          <HeroSection
            badge="Digital Menu"
            heading={
              <>
                Stunning Mobile Menus
                <br />
                <span className="text-blue-900 font-merienda">Your Brand, Perfected</span>
              </>
            }
            description="Professional, fast-loading digital menu with photos, variants, and real-time updates. Works on every phone. No app needed."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="See Live Demo"
            ctaSecondaryLink="https://menuroom.et/demo"
            stats={[
              { value: '100%', label: 'Mobile Ready' },
              { value: '1sec', label: 'Load Speed' },
              { value: 'Zero', label: 'Printing Cost' },
              { value: '50+', label: 'Restaurants Using' },
            ]}
          />
        </div>
      </section>

      {/* WHY CHOOSE DIGITAL MENU */}
      <WhyChooseUsSection features={digitalMenuWhyChooseUs} />

      {/* MAIN FEATURES */}
      <section className=" bg-white">
        <div className="mx-auto max-w-7xl  px-5 sm:px-0">
          <SectionHeader
            badge="The Most Beautiful Menu in Ethiopia"
            title={
              <>
                Your Restaurant Deserves
                <br />
                <span className="text-blue-900 font-merienda">A Perfect Digital Menu</span>
              </>
            }
          >
            Photos • Branding • Bilingual • Variants • Offline • Fast
          </SectionHeader>

          {/* Stunning Design & Photos */}
          <FeatureHighlight
            reverse
            zebra
            badge="Beautiful Design"
            title={
              <>
                Looks Amazing
                <br />
                <span className="text-blue-900 font-merienda">On Every Phone</span>
              </>
            }
            description="Clean layout, big photos, easy categories. Your food looks delicious — customers order more."
            imageSrc="/images/digital-menu-design.webp"
            imageAlt="Beautiful mobile menu"
            features={[
              {
                icon: Camera,
                title: 'High-Quality Photos',
                desc: 'Upload your own mouth-watering images',
              },
              { icon: Palette, title: 'Your Branding', desc: 'Logo, colors, fonts — 100% yours' },
              { icon: Smartphone, title: 'Mobile-First', desc: 'Fast loading, touch-friendly' },
              { icon: Heart, title: 'Customer Favorites', desc: 'Highlight top-selling items' },
            ]}
          />

          {/* Bilingual + Variants */}
          <FeatureHighlight
            badge="Bilingual & Variants"
            title={
              <>
                Speak Every Customer’s Language
                <br />
                <span className="text-blue-900 font-merienda">English + አማርኛ</span>
              </>
            }
            description="Full Amharic + English. Add variants: spicy, no onion, large, small, extra cheese — customers choose exactly what they want."
            imageSrc="/images/digital-menu-bilingual.webp"
            imageAlt="Bilingual menu with variants"
            features={[
              { icon: Languages, title: 'Full Bilingual', desc: 'Toggle with one tap' },
              { icon: FileText, title: 'Item Variants', desc: 'Spicy, veg, size, extras' },
              { icon: Users, title: 'Special Requests', desc: 'Customer can add notes' },
              { icon: Globe, title: 'Future Languages', desc: 'Oromiffa, Tigrinya coming' },
            ]}
          />

          {/* Instant Updates */}
          <FeatureHighlight
            reverse
            zebra
            badge="Instant Updates"
            title={
              <>
                Change Menu in 1 Second
                <br />
                <span className="text-blue-900 font-merienda">Live Everywhere</span>
              </>
            }
            description="Price change? Sold out? Special today? Update once — every customer sees it instantly. No stickers."
            imageSrc="/images/digital-menu-update.webp"
            imageAlt="Instant menu update"
            features={[
              { icon: Zap, title: 'Real-Time Sync', desc: 'Change → live in 1 second' },
              { icon: Clock, title: 'Time-Based Items', desc: 'Breakfast until 11am only' },
              { icon: Shield, title: 'Sold Out Toggle', desc: 'Hide items with one click' },
              { icon: Globe, title: 'Branch-Specific', desc: 'Different menu per location' },
            ]}
          />

          {/* Offline + Fast */}
          <FeatureHighlight
            badge="Fast & Reliable"
            title={
              <>
                Works Even Without Internet
                <br />
                <span className="text-blue-900 font-merienda">Always Available</span>
              </>
            }
            description="Menu loads instantly. Works offline. No slow loading. No “no internet” errors."
            imageSrc="/images/digital-menu-offline.webp"
            imageAlt="Offline digital menu"
            features={[
              { icon: Shield, title: '100% Offline', desc: 'Menu works without internet' },
              { icon: Zap, title: 'Lightning Fast', desc: 'Loads in under 1 second' },
              { icon: Smartphone, title: 'No App Needed', desc: 'Works in any browser' },
              { icon: QrCode, title: 'QR Ready', desc: 'Scan table → menu opens instantly' },
            ]}
          />
        </div>

        {/* HOW IT WORKS */}
        <div className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              badge="Go Live in Minutes"
              title={
                <>
                  Launch Your Digital Menu in
                  <br />
                  <span className="text-blue-900 font-merienda">Less Than 10 Minutes</span>
                </>
              }
            />
            <div className="mt-12 max-w-4xl mx-auto">
              <ReusableFlow />
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section
          className="relative py-24 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(30, 64, 175, 0.95), rgba(15, 23, 42, 0.95)),
              url(${menu})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30" />

          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-merienda leading-tight">
              Your Restaurant Deserves a Beautiful Menu
            </h2>
            <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join 50+ smart restaurants already using Menuroom Digital Menu across Ethiopia.
              <br className="hidden sm:block" />
              Start free — look professional, sell more.
            </p>

            <div className="mt-12">
              <a
                href="https://app.menuroom.et/signup"
                className="group inline-flex items-center gap-4 rounded-xl bg-white px-12 py-6 text-2xl font-bold text-blue-900 shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
              >
                Start Free 14-Day Trial
                <span className="transform transition-transform group-hover:translate-x-3 text-3xl">
                  →
                </span>
              </a>
            </div>

            <p className="mt-8 text-blue-200 text-lg">
              No credit card • Cancel anytime • Full access from day one
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

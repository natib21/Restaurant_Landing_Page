// src/pages/features/QRMenu.jsx
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import ReusableFlow from '../component/common/ReusableFlow';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import {
  QrCode,
  Smartphone,
  Globe,
  Zap,
  Users,
  Camera,
  Palette,
  Languages,
  Clock,
  Shield,
  FileText,
  Store,
} from 'lucide-react';

// Why Choose QR Menu
const qrWhyChooseUs = [
  {
    title: 'Print Once Forever',
    icon: QrCode,
    desc: 'Print QR codes once — never reprint paper menus again',
  },
  {
    title: 'Update in 1 Second',
    icon: Zap,
    desc: 'Change price, hide sold-out items — instantly live on all phones',
  },
  {
    title: 'Beautiful on Every Phone',
    icon: Smartphone,
    desc: 'Stunning mobile-first design that looks perfect on any device',
  },
  {
    title: 'Amharic + English',
    icon: Languages,
    desc: 'Full bilingual menu — customers switch language with one tap',
  },
  {
    title: 'Food Photos & Variants',
    icon: Camera,
    desc: 'Show appetizing photos + options: spicy, large, no onion, extra cheese',
  },
  {
    title: 'Works Offline',
    icon: Shield,
    desc: 'Menu loads instantly even without internet connection',
  },
  {
    title: 'Your Branding',
    icon: Palette,
    desc: 'Add your logo, colors, and style — matches your restaurant perfectly',
  },
  {
    title: 'Call Waiter Button',
    icon: Users,
    desc: 'Customers press one button → waiter gets notification instantly',
  },
];

export default function QRMenu() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white  sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl ">
          <HeroSection
            badge="Digital QR Menu"
            heading={
              <>
                Print Once.
                <br />
                <span className="text-blue-900 font-merienda">Use Forever</span>
              </>
            }
            description="Beautiful digital menu on customer phones. Update prices, hide items, add photos — instantly live. No reprinting. No app needed."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="See Live Demo"
            ctaSecondaryLink="https://menuroom.et/demo"
            stats={[
              { value: 'Zero', label: 'Reprinting Cost' },
              { value: '1sec', label: 'Update Speed' },
              { value: '100%', label: 'Phone Compatible' },
              { value: '50+', label: 'Restaurants Using' },
            ]}
          />
        </div>
      </section>

      {/* WHY CHOOSE QR MENU */}
      <WhyChooseUsSection features={qrWhyChooseUs} />

      {/* MAIN FEATURES */}
      <section className=" sm:py-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-0">
          <SectionHeader
            badge="The Last Menu You’ll Ever Print"
            title={
              <>
                One QR Code to Rule
                <br />
                <span className="text-blue-900 font-merienda">All Your Tables</span>
              </>
            }
          >
            Update anytime • Beautiful design • Works offline • Bilingual
          </SectionHeader>

          {/* Instant Updates */}
          <FeatureHighlight
            reverse
            badge="Instant Updates"
            title={
              <>
                Change Menu in 1 Second
                <br />
                <span className="text-blue-900 font-merienda">Live Everywhere</span>
              </>
            }
            description="Price up? Item sold out? Special today? Update once — every customer sees it instantly. No stickers. No confusion."
            imageSrc="/images/order-management-manage-order-like-a-pro.webp"
            imageAlt="Instant menu update"
            features={[
              { icon: Zap, title: 'Real-Time Sync', desc: 'Change → live in 1 second' },
              {
                icon: Clock,
                title: 'Time-Based Menus',
                desc: 'Breakfast until 11am, dinner after 5pm',
              },
              { icon: Shield, title: 'Sold Out Toggle', desc: 'Hide items with one click' },
              { icon: Globe, title: 'Branch-Specific', desc: 'Different menu per location' },
            ]}
          />

          {/* Beautiful Mobile Design */}
          <FeatureHighlight
            badge="Stunning Design"
            zebra
            title={
              <>
                Looks Perfect
                <br />
                <span className="text-blue-900 font-merienda">On Every Phone</span>
              </>
            }
            description="Professional photos, clean layout, easy categories. Your brand shines — no cheap PDF look."
            imageSrc="/images/order-management-manage-order-like-a-pro.webp"
            imageAlt="Beautiful digital menu"
            features={[
              { icon: Camera, title: 'High-Quality Photos', desc: 'Upload your own food photos' },
              { icon: Palette, title: 'Your Branding', desc: 'Logo, colors, fonts' },
              { icon: Smartphone, title: 'Mobile-First', desc: 'Fast loading, touch-friendly' },
              { icon: Users, title: 'Customer Favorites', desc: 'Show most popular items first' },
            ]}
          />

          {/* Bilingual & Variants */}
          <FeatureHighlight
            reverse
            badge="Bilingual + Variants"
            title={
              <>
                Speak Every Customer’s Language
                <br />
                <span className="text-blue-900 font-merienda">English + አማርኛ</span>
              </>
            }
            description="Full Amharic + English menu. Add variants: spicy, no onion, large, small — customers choose exactly what they want."
            imageSrc="/images/qr-bilingual.webp"
            imageAlt="Amharic and English menu"
            features={[
              { icon: Languages, title: 'Full Bilingual', desc: 'Toggle with one tap' },
              { icon: FileText, title: 'Item Variants', desc: 'Spicy, veg, size options' },
              { icon: Users, title: 'Allergies & Notes', desc: 'Customer can add special request' },
              { icon: Globe, title: 'Future Languages', desc: 'Oromiffa, Tigrinya coming' },
            ]}
          />

          {/* QR Table Management */}
          <FeatureHighlight
            badge="Smart Tables"
            zebra
            title={
              <>
                Every Table Has Its Own QR
                <br />
                <span className="text-blue-900 font-merienda">No More Mix-Ups</span>
              </>
            }
            description="Print or stick QR codes on tables. System knows exactly which table ordered what — perfect for waiters and kitchen."
            imageSrc="/images/qr-table-management.webp"
            imageAlt="QR table system"
            features={[
              { icon: QrCode, title: 'Auto Table Link', desc: 'Scan → bill opens for that table' },
              { icon: Store, title: 'Floor Plan View', desc: 'See all tables live' },
              {
                icon: Users,
                title: 'Waiter Assignment',
                desc: 'Each waiter sees only their tables',
              },
              { icon: Zap, title: 'Call Waiter Button', desc: 'Customer presses → notification' },
            ]}
          />
        </div>

        {/* HOW IT WORKS */}
        <SectionHeader
          badge="Go Live in Minutes"
          title={
            <>
              Launch Your QR Menu in
              <br />
              <span className="text-blue-900 font-merienda">Less Than 10 Minutes</span>
            </>
          }
        >
          <div className="mt-12 max-w-4xl mx-auto">
            <ReusableFlow />
          </div>
        </SectionHeader>

        {/* FINAL CTA */}
        {/*  <section
          className="relative py-24 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(30, 64, 175,0.95), rgba(15, 23, 42, 0.95)),
              url(${abstractBackground})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>

          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-merienda leading-tight">
              Stop Printing Menus Forever
            </h2>
            <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join 50+ smart restaurants already using Menuroom QR Menu across Ethiopia.
              <br className="hidden sm:block" />
              Start free — save time, save money.
            </p>

            <div className="mt-12">
              <a
                href="https://app.menuroom.et/signup"
                className="group inline-flex items-center gap-4 rounded-xl bg-white px-12 py-6 text-2xl font-bold text-blue-900 shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
              >
                Start Free 14-Day Trial
                <span className="transform transition-transform group-hover:translate-x-3 text-3xl">
                  Go
                </span>
              </a>
            </div>

            <p className="mt-8 text-blue-200 text-lg">
              No credit card • Cancel anytime • Full access from day one
            </p>
          </div>
        </section> */}
      </section>
    </>
  );
}

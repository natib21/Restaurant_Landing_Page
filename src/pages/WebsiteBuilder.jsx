// src/pages/features/WebsiteBuilder.jsx
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import ReusableFlow from '../component/common/ReusableFlow';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import {
  Globe,
  Smartphone,
  Palette,
  Zap,
  Search,
  Camera,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  QrCode,
  Languages,
  Shield,
} from 'lucide-react';

// Why Choose Menuroom Website Builder
const websiteWhyChooseUs = [
  { title: 'Stunning Templates', icon: Palette, desc: 'Beautiful restaurant-specific designs' },
  { title: 'Mobile Perfect', icon: Smartphone, desc: 'Looks amazing on phones & tablets' },
  { title: 'Your Domain', icon: Globe, desc: 'www.yourrestaurant.com — fully yours' },
  { title: 'Google Loves It', icon: Search, desc: 'SEO optimized — rank higher locally' },
  { title: 'Update Instantly', icon: Zap, desc: 'Change menu, hours, photos in seconds' },
  { title: 'Amharic + English', icon: Languages, desc: 'Full bilingual support built-in' },
  { title: 'No Coding Needed', icon: Shield, desc: 'Drag & drop — easy for anyone' },
  { title: 'Live in 1 Hour', icon: Clock, desc: 'From zero to professional site fast' },
];

export default function WebsiteBuilder() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white py-16 sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl px-6">
          <HeroSection
            badge="Website Builder"
            heading={
              <>
                Your Own Professional
                <br />
                <span className="text-blue-900 font-merienda">Restaurant Website</span>
              </>
            }
            description="Beautiful, fast, mobile-friendly website with online menu, photos, location, hours, and WhatsApp ordering. No coding. Live in under 1 hour."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="See Live Examples"
            ctaSecondaryLink="https://menuroom.et/examples"
            stats={[
              { value: '1hr', label: 'Go Live Time' },
              { value: '100%', label: 'Mobile Ready' },
              { value: 'Zero', label: 'Coding Needed' },
              { value: '30+', label: 'Sites Launched' },
            ]}
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUsSection features={websiteWhyChooseUs} />

      {/* MAIN FEATURES */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="The Smartest Website for Restaurants in Ethiopia"
            title={
              <>
                Stop Using Facebook
                <br />
                <span className="text-blue-900 font-merienda">Get a Real Website</span>
              </>
            }
          >
            Professional • Fast • Yours Forever • Google Friendly
          </SectionHeader>

          {/* Beautiful Design */}
          <FeatureHighlight
            reverse
            zebra
            badge="Gorgeous Design"
            title={
              <>
                Looks Like a 500,000 Birr Website
                <br />
                <span className="text-blue-900 font-merienda">But Costs Pennies</span>
              </>
            }
            description="Choose from restaurant-optimized templates. Big photos, clean layout, your logo & colors. Customers will think you hired a top designer."
            imageSrc="/images/website-design.webp"
            imageAlt="Beautiful restaurant website"
            features={[
              { icon: Palette, title: 'Premium Templates', desc: 'Designed specifically for cafes & restaurants' },
              { icon: Camera, title: 'Food Photography Ready', desc: 'Show your dishes in full glory' },
              { icon: Smartphone, title: 'Perfect on Mobile', desc: '90% of customers browse on phone' },
              { icon: Star, title: 'Trust & Professionalism', desc: 'Customers trust real websites more' },
            ]}
          />

          {/* Online Menu + Ordering */}
          <FeatureHighlight
            badge="Digital Menu + Ordering"
            title={
              <>
                Your Menu Is Always Online
                <br />
                <span className="text-blue-900 font-merienda">With Direct WhatsApp Orders</span>
              </>
            }
            description="Full digital menu embedded. Customers tap 'Order' → message goes straight to your WhatsApp. No app, no middleman, no commission."
            imageSrc="/images/website-menu-whatsapp.webp"
            imageAlt="Menu with WhatsApp ordering"
            features={[
              { icon: MessageCircle, title: 'WhatsApp Orders', desc: 'Direct chat — no delivery apps' },
              { icon: Languages, title: 'Bilingual Menu', desc: 'English + አማርኛ with one click' },
              { icon: Zap, title: 'Real-Time Updates', desc: 'Price change? Live instantly' },
              { icon: QrCode, title: 'QR Code Ready', desc: 'Print once, use forever' },
            ]}
          />

          {/* SEO & Google */}
          <FeatureHighlight
            reverse
            zebra
            badge="Found on Google"
            title={
              <>
                Be #1 When Customers Search
                <br />
                <span className="text-blue-900 font-merienda">“Restaurant Near Me”</span>
              </>
            }
            description="Optimized for Google. Add your location, hours, photos — appear in local search and Google Maps."
            imageSrc="/images/website-seo.webp"
            imageAlt="Restaurant ranking on Google"
            features={[
              { icon: Search, title: 'Local SEO Built-In', desc: 'Rank higher in your area' },
              { icon: MapPin, title: 'Google Maps Integration', desc: 'Customers find you easily' },
              { icon: Clock, title: 'Live Hours Display', desc: 'Show open/closed status' },
              { icon: Globe, title: 'Fast Loading', desc: 'Google loves speed — you rank higher' },
            ]}
          />

          {/* Easy Editor */}
          <FeatureHighlight
            badge="No Designer? No Problem"
            title={
              <>
                Edit Your Site Like a Word Document
                <br />
                <span className="text-blue-900 font-merienda">Anyone Can Do It</span>
              </>
            }
            description="Change text, upload photos, update menu — all with simple clicks. No tech skills needed."
            imageSrc="/images/website-editor.webp"
            imageAlt="Easy drag and drop editor"
            features={[
              { icon: Palette, title: 'Drag & Drop', desc: 'Move sections easily' },
              { icon: Zap, title: 'Instant Preview', desc: 'See changes live' },
              { icon: Shield, title: 'No Coding', desc: 'Safe and simple for everyone' },
              { icon: Clock, title: 'Update in Seconds', desc: 'New special? Live immediately' },
            ]}
          />
        </div>

        {/* HOW IT WORKS */}
        <div className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              badge="Your Website Live in 1 Hour"
              title={
                <>
                  From Zero to Professional Site
                  <br />
                  <span className="text-blue-900 font-merienda">In Just 4 Simple Steps</span>
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
              url(${abstractBackground})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30" />

          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-merienda leading-tight">
              Your Restaurant Needs a Real Website
            </h2>
            <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join 30+ restaurants who left Facebook pages behind.
              <br className="hidden sm:block" />
              Get found on Google. Look professional. Grow faster.
            </p>

            <div className="mt-12">
              <a
                href="https://app.menuroom.et/signup"
                className="group inline-flex items-center gap-4 rounded-xl bg-white px-12 py-6 text-2xl font-bold text-blue-900 shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
              >
                Build My Website Free
                <span className="transform transition-transform group-hover:translate-x-3 text-3xl">
                  Go
                </span>
              </a>
            </div>

            <p className="mt-8 text-blue-200 text-lg">
              Free 14-day trial • No card needed • Full website + menu from day one
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
// pages/LoungeBar.jsx – Lounge & Bar Focused Version (Upscale Ethiopian Lounges & Bars)
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import {
  QrCode,
  Coffee,
  Smartphone,
  Zap,
  Users,
  BellRing,
  Wifi,
  DollarSign,
  Package,
  Timer,
  Layers,
  Store,
} from 'lucide-react';
import ReusableFlow from '../component/common/ReusableFlow';
import RestaurantHero from '../component/Home/Hero/RestaurantHero';

// Import your loungeBarFeatures variant (create in variants folder)
import { loungeBarFeatures } from '../component/Home/WhyChooseUs/variants/loungeBar';

const LoungAndBar = () => {
  return (
    <>
      <section className="bg-white sm:py-0 lg:py-0">
        <div className="mx-auto max-w-7xl">
          {/* Customized Hero for Lounge & Bar – Using deep purple/teal theme */}
          <RestaurantHero
            leftImage="/images/LoungeBar.png" // Elegant cocktails & buna ceremony
            rightImage="/images/LoungeBar1.png" // Stylish bar counter with bartender
            mobileImage="/images/LoungeBarMobile.png" // Rooftop lounge night view
            badgeText="Trusted by 60+ premium lounges & bars in Addis Ababa"
            titleMain="Lounge & Bar,"
            titleHighlight="Elevated & Digital"
            subtitle="QR Menus → Table Ordering → Unforgettable Nights\nCraft cocktails • Live music • VIP tables • Maximum vibe"
            primaryCTAText="Join"
            primaryCTAHref="https://app.menuroom.et/signup"
            accentColor="emerald" // Sophisticated teal for upscale nightlife feel (or use 'emerald')
            showTrustLine={true}
          />
        </div>
      </section>

      {/* Why Choose Us – Lounge & Bar specific features */}
      <WhyChooseUsSection features={loungeBarFeatures} />

      <section className="bg-white sm:py-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-0">
          <SectionHeader
            badge="The Premium Tool for Modern Lounges & Bars"
            title={
              <>
                One Platform →{' '}
                <span className="text-teal-700 font-merienda">Total Nightlife Control</span>
                <br />
                From Tej to Table Service.
              </>
            }
          >
            Digital QR Menu • Table Ordering • VIP Reservations • Events • Inventory • POS
            <br />
            <span className="font-bold text-teal-700">One system. Full vibe. Higher revenue.</span>
          </SectionHeader>

          {/* Digital QR Menu & Table Ordering */}
          <FeatureHighlight
            badge="Stunning Digital Menus"
            title={
              <>
                Guests Order from Phone at Table
                <br />
                <span className="text-teal-700 font-merienda">No Waiting • No Paper • Pure Elegance</span>
              </>
            }
            description="Beautiful photo menus with craft cocktails, imported wines, tej specials, and premium bites. Guests scan QR on table, browse, customize, and order instantly — perfect for dim lighting."
            imageSrc="https://menuaddis.com/wp-content/uploads/2020/08/Menu-Addis-Free-QR-Code-Generator-1.png" // Local Ethiopian QR menu example
            imageAlt="Guest scanning QR menu in upscale lounge"
            learnMoreLink="/features/menu"
            features={[
              {
                icon: QrCode,
                title: 'Table QR Menus',
                desc: 'Unique QR per table/VIP section. Menu updates live — no reprints.',
              },
              {
                icon: Coffee,
                title: 'Signature Drinks & Bites',
                desc: 'Highlight tonight’s special cocktail or buna ceremony with photos.',
              },
              {
                icon: Smartphone,
                title: 'Order & Pay from Seat',
                desc: 'Supports all mobile payments + card + cash.',
              },
              {
                icon: Timer,
                title: 'Ready Notification',
                desc: 'Buzz when mojito or shiro platter is ready — no shouting.',
              },
            ]}
          />

          {/* Faster Service & VIP Experience */}
          <FeatureHighlight
            reverse
            zebra
            badge="Elevate Guest Experience"
            title={
              <>
                Faster Service = Happier Guests
                <br />
                <span className="text-teal-700 font-merienda">More Rounds • More Tips • More Returns</span>
              </>
            }
            description="Orders go straight to bar screen. Staff focus on crafting perfect drinks and creating vibe, not running back and forth."
            imageSrc="https://static.wixstatic.com/media/021768_7280ed776d874819a495fe6d8cdef5dc~mv2.png/v1/fill/w_980,h_735,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/021768_7280ed776d874819a495fe6d8cdef5dc~mv2.png" // Stylish bar counter
            imageAlt="Bartender preparing drinks in modern Ethiopian lounge"
            ctaText="See How Lounges Boost Service"
            ctaLink="/lounge-service"
            features={[
              {
                icon: Zap,
                title: 'Instant Bar Display',
                desc: 'New cocktail order appears with table number and special requests.',
              },
              {
                icon: Users,
                title: 'VIP & Table Management',
                desc: 'Mark tables as VIP, add minimum spend, track bottle service.',
              },
              {
                icon: BellRing,
                title: 'Call Staff Button',
                desc: 'Guest needs ice, hookah, or bill? One tap notification.',
              },
              {
                icon: Package,
                title: 'Event & Special Menus',
                desc: 'Switch to DJ night menu or ladies’ night specials instantly.',
              },
            ]}
          />

          {/* Reservations & Events */}
          <FeatureHighlight
            badge="Built for Events & Busy Nights"
            title={
              <>
                Manage Reservations & Events
                <br />
                <span className="text-teal-700 font-merienda">From Jazz Night to Private Parties</span>
              </>
            }
            description="Accept table bookings online. Block sections for events. Sell tickets for live music or themed nights — all integrated."
            imageSrc="https://cdn.getyourguide.com/img/tour/9da14b3ef79ae75dc4e06cc09d33d89303604ce1ce4c4a08dbaa376946a0bf6e.jpeg/68.jpg" // Group enjoying nightlife
            imageAlt="Friends celebrating in Addis Ababa lounge"
            learnMoreLink="/features/reservations"
            features={[
              {
                icon: Store,
                title: 'Online Table Booking',
                desc: 'Guests reserve VIP booths directly from your site.',
              },
              {
                icon: Layers,
                title: 'Event Mode',
                desc: 'Different menu & pricing for special nights.',
              },
              {
                icon: Wifi,
                title: 'Works Offline',
                desc: 'Power cut during party? Keep serving.',
              },
              {
                icon: DollarSign,
                title: 'Nightly Sales Insights',
                desc: 'See which cocktail sold most on Friday night.',
              },
            ]}
          />

          {/* Inventory for Bar */}
          <FeatureHighlight
            reverse
            zebra
            badge="Never Run Out of Premium Stock"
            title={
              <>
                Smart Bar Inventory
                <br />
                <span className="text-teal-700 font-merienda">Auto Alerts for Whiskey & Tej</span>
              </>
            }
            description="Track liquor bottles, mixers, and food ingredients. Get low-stock alerts before the weekend rush."
            imageSrc="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-06/Coffee%20Cocktail%20Drinks%2010%20Must-Try%20Options%20to%20Follow%20in%202025.jpg" // Elegant cocktails
            imageAlt="Premium cocktails on bar counter"
            learnMoreLink="/features/inventory"
            features={[
              {
                icon: Package,
                title: 'Liquor & Ingredient Tracking',
                desc: 'Auto-deduct per drink ordered.',
              },
              {
                icon: Timer,
                title: 'Expiry & Waste Alerts',
                desc: 'Know when limes or herbs are going bad.',
              },
              {
                icon: DollarSign,
                title: 'Cost Control',
                desc: 'See exact pour cost per cocktail.',
              },
            ]}
          />

          {/* POS for Bar */}
          <FeatureHighlight
            badge="Sleek POS for Busy Nights"
            title={
              <>
                Fast Checkout on Tablet
                <br />
                <span className="text-teal-700 font-merienda">No Clunky Machines Needed</span>
              </>
            }
            description="Use any tablet as full POS. Split bills, add service charge, apply happy hour discounts — all offline."
            imageSrc="https://evendo-location-media.s3.amazonaws.com/BarImages/0fcd83ad-887e-41db-bd1a-d15077fa1e4f" // Rooftop lounge vibe
            imageAlt="Bartender using tablet POS in upscale bar"
            learnMoreLink="/features/pos"
            features={[
              {
                icon: Smartphone,
                title: 'Any Tablet = POS',
                desc: 'Modern and discreet — fits the vibe.',
              },
              {
                icon: Zap,
                title: 'Offline Ready',
                desc: 'Internet down? Keep the party going.',
              },
              {
                icon: Users,
                title: 'Tab Management',
                desc: 'Open tabs, transfer between tables, split bills.',
              },
            ]}
          />
        </div>

        {/* Onboarding Flow */}
        <SectionHeader
          badge="Go Digital Before Your Next Event"
          title={
            <>
              Your Lounge Goes Digital in{' '}
              <span className="text-teal-700 font-merienda">Under 10 Minutes</span>
              <br />
              No Training • No Setup Fee • Works Offline
            </>
          }
        >
          <div className="mt-10">
            <ReusableFlow />
          </div>
        </SectionHeader>

        {/* Final CTA – Lounge Style */}
        <section
          className="relative py-24 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(15, 120, 120, 0.95), rgba(15, 80, 100, 0.9)),
              url(${abstractBackground})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-merienda leading-tight">
              Ready to Elevate Your Lounge?
            </h2>

            <p className="mt-6 text-xl lg:text-2xl text-teal-100 max-w-3xl mx-auto font-light">
              Join top lounges in Bole, Sarbet, Kazanchis & beyond
              <br className="hidden sm:block" />
              delivering unforgettable nights with seamless digital service.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://app.menuroom.et/signup"
                className="group inline-flex items-center gap-3 rounded-xl bg-teal-50 px-10 py-5 text-2xl font-bold text-teal-900 shadow-2xl hover:shadow-teal-400/50 transform hover:scale-105 transition-all duration-300"
              >
                Start Free 14-Day Trial
                <span className="transform transition-transform group-hover:translate-x-2">→</span>
              </a>

              <Link
                to="/pricing"
                className="text-teal-100 text-lg font-semibold hover:text-white transition underline"
              >
                See Pricing →
              </Link>
            </div>

            <p className="mt-10 text-teal-200 text-sm">
              ✓ No credit card • ✓ Cancel anytime • ✓ We help you set up for free
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default LoungAndBar;
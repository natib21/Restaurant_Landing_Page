// pages/Home.jsx – Café-Owner Focused Version (Ethiopian Cafés)
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';

import {
  QrCode,
  Coffee,
  Timer,
  Smartphone,
  Zap,
  Store,
  Layers,
  Users,
  ArrowRightLeft,
  BellRing,
  Wifi,
  DollarSign,
} from 'lucide-react';
import ReusableFlow from '../component/common/ReusableFlow';
import RestaurantHero from '../component/Home/Hero/RestaurantHero';
import { cafeeFeatures } from '../component/Home/WhyChooseUs/variants/cafee';
const Cafee = () => {
  return (
    <>
      <section className="bg-white sm:py-0 lg:py-0">
        <div className="mx-auto max-w-7xl ">
          <RestaurantHero />
        </div>
      </section>
      <WhyChooseUsSection features={cafeeFeatures} />

      <section className="bg-white sm:py-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-0">
          <SectionHeader
            badge="The Only Tool Your Café Will Ever Need"
            title={
              <>
                One Platform →{' '}
                <span className="text-amber-700 font-merienda">Total Café Control</span>
                <br />
                From Macchiato to Management.
              </>
            }
          >
            Digital Menu • QR Ordering • Table Management • Loyalty • Inventory • POS
            <br />
            <span className="font-bold text-amber-700">One system. Zero stress. More profit.</span>
          </SectionHeader>

          {/* Digital Menu & QR Ordering */}
          <FeatureHighlight
            badge="Digital Menu & QR Ordering"
            title={
              <>
                Customers Order From Their Phone
                <br />
                <span className="text-amber-700 font-merienda">No App • No Waiting • No Paper</span>
              </>
            }
            description="Turn every table into a self-service counter. Customers scan QR, see your beautiful menu with photos, customize their drink (extra shot? oat milk? cinnamon?), and order + pay instantly."
            imageSrc="/images/cafe-qr-ordering.webp"
            imageAlt="Customer scanning QR at café table"
            learnMoreLink="/features/menu"
            features={[
              {
                icon: QrCode,
                title: 'Instant QR Menu',
                desc: 'Auto-generated QR for each table. Menu updates live — no reprinting.',
              },
              {
                icon: Coffee,
                title: 'Custom Drink Options',
                desc: 'Let customers choose milk type, syrup, shots, ice level, sweetness — just like in-person.',
              },
              {
                icon: Smartphone,
                title: 'Order & Pay from Phone',
                desc: 'Supports Telebirr, CBE Birr, HelloCash, Amole, and cash on delivery.',
              },
              {
                icon: Timer,
                title: 'Ready Notification',
                desc: 'Customer gets buzz when their cappuccino is ready — no shouting names.',
              },
            ]}
          />

          {/* Speed & Table Turnover */}
          <FeatureHighlight
            reverse
            zebra
            badge="Faster Service = More Customers"
            title={
              <>
                Serve 2× More Customers
                <br />
                <span className="text-amber-700 font-merienda">Without Hiring Extra Staff</span>
              </>
            }
            description="Peak hours? No problem. Customers order while in line or at table → baristas focus on making perfect coffee, not taking orders."
            imageSrc="/images/cafe-busy-counter.webp"
            imageAlt="Busy café with smooth digital ordering"
            ctaText="See How Cafés Handle Rush Hour"
            ctaLink="/cafe-rush"
            features={[
              {
                icon: Zap,
                title: 'Orders Go Straight to Barista Screen',
                desc: 'New order pops up instantly with customer name/table.',
              },
              {
                icon: Users,
                title: 'Waiter/Barista Mode',
                desc: 'Staff can also take orders on tablet if customer prefers.',
              },
              {
                icon: ArrowRightLeft,
                title: 'Move Orders Easily',
                desc: 'Customer moved from outdoor to indoor? Transfer order in 1 tap.',
              },
              {
                icon: BellRing,
                title: 'Call Barista Button',
                desc: 'Customer needs spoon or water? Press button → notification to staff.',
              },
            ]}
          />

          {/* Multi-Branch & Chain Cafés */}
          <FeatureHighlight
            badge="Perfect for Café Chains"
            title={
              <>
                Manage All Your Branches
                <br />
                <span className="text-amber-700 font-merienda">
                  From One Coffee-Scented Dashboard
                </span>
              </>
            }
            description="Bole, Piassa, CMC, Hawassa… Update today’s special bunna price once — all branches updated instantly. Same login for 2 or 20 locations."
            imageSrc="/images/cafe-multi-branch.webp"
            imageAlt="Café owner checking all branches"
            learnMoreLink="/features/multi-branch"
            features={[
              {
                icon: Store,
                title: 'Central Menu Control',
                desc: 'Change price of espresso once → all branches updated.',
              },
              {
                icon: Layers,
                title: 'Branch-Specific Specials',
                desc: 'Only Sarbet branch has that viral Drip Coffee? Hide it elsewhere.',
              },
              {
                icon: Wifi,
                title: 'Works Offline',
                desc: 'Internet down in Piassa? Keep selling. Syncs when back.',
              },
              {
                icon: DollarSign,
                title: 'Daily Sales Report per Branch',
                desc: 'See which location sold most macchiatos today.',
              },
            ]}
          />

          {/* Loyalty & Returning Customers */}
          <FeatureHighlight
            reverse
            zebra
            badge="Turn First-Timers into Regulars"
            title={
              <>
                Built-in Loyalty System
                <br />
                <span className="text-amber-700 font-merienda">Free Coffee After 10 Visits</span>
              </>
            }
            description="Automatic digital stamp card. Customer scans same QR every time → system remembers them and gives free drink after 10 purchases."
            imageSrc="/images/cafe-loyalty.webp"
            imageAlt="Customer getting free coffee reward"
            learnMoreLink="/features/loyalty"
            features={[
              {
                icon: Coffee,
                title: 'Buy 10 Get 1 Free',
                desc: 'Fully customizable — works for bunna, cake, sandwiches.',
              },
              {
                icon: Users,
                title: 'Know Your Regulars',
                desc: 'See "Abebe comes every morning, always orders double macchiato."',
              },
              {
                icon: BellRing,
                title: 'Push Notifications',
                desc: 'Send “New Tiramisu Cake!” to all past customers.',
              },
            ]}
          />

          {/* Simple POS for Counter */}
          <FeatureHighlight
            badge="Counter POS That Actually Works"
            title={
              <>
                Fast Checkout on Phone or Tablet
                <br />
                <span className="text-amber-700 font-merienda">No Expensive Machines Needed</span>
              </>
            }
            description="Use any Android phone/tablet as full POS. Take cash, mobile money, split bills, give discounts — all offline."
            imageSrc="/images/cafe-pos.webp"
            imageAlt="Barista using phone as POS"
            learnMoreLink="/features/pos"
            features={[
              {
                icon: Smartphone,
                title: 'Any Android Device = POS',
                desc: 'No need to buy expensive POS hardware.',
              },
              {
                icon: Zap,
                title: 'Works Offline',
                desc: 'Power or internet out? Keep selling.',
              },
              {
                icon: DollarSign,
                title: 'All Ethiopian Payments',
                desc: 'Cash, Telebirr, CBE Birr, HelloCash, card.',
              },
            ]}
          />
        </div>

        {/* Onboarding Flow */}
        <SectionHeader
          badge="Go Live Before Your Next Bunna Ceremony"
          title={
            <>
              Your Café Goes Digital in{' '}
              <span className="text-amber-700 font-merienda">Under 10 Minutes</span>
              <br />
              No Training • No Setup Fee • Works Offline
            </>
          }
        >
          <div className="mt-10">
            <ReusableFlow />
          </div>
        </SectionHeader>

        {/* Final CTA – Café Style */}
        <section
          className="relative py-24 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(120, 53, 15, 0.95), rgba(101, 37, 15, 0.9)),
              url(${abstractBackground})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-merienda leading-tight">
              Ready to Run a Smarter Café?
            </h2>

            <p className="mt-6 text-xl lg:text-2xl text-amber-100 max-w-3xl mx-auto font-light">
              Join 80+ cafés in Addis, Dire Dawa, Bahir Dar & beyond
              <br className="hidden sm:block" />
              who ditched paper menus and doubled their table turnover.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://app.menuroom.et/signup"
                className="group inline-flex items-center gap-3 rounded-xl bg-amber-50 px-10 py-5 text-2xl font-bold text-amber-900 shadow-2xl hover:shadow-amber-400/50 transform hover:scale-105 transition-all duration-300"
              >
                Start Free 14-Day Trial
                <span className="transform transition-transform group-hover:translate-x-2">→</span>
              </a>

              <Link
                to="/pricing"
                className="text-amber-100 text-lg font-semibold hover:text-white transition underline"
              >
                See Pricing →
              </Link>
            </div>

            <p className="mt-10 text-amber-200 text-sm">
              ✓ No credit card • ✓ Cancel anytime • ✓ We help you set up for free
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Cafee;

// pages/Home.jsx (Final Clean & Consistent Version – No Visual Changes)
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import {
  QrCode,
  Globe,
  Smartphone,
  Zap,
  Package,
  Store,
  Layers,
  Printer,
  Users,
  ArrowRightLeft,
  BellRing,
} from 'lucide-react';
import ReusableFlow from '../component/common/ReusableFlow';

const Home = () => {
  return (
    <>
      <section className="bg-white py-16 sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl ">
          <HeroSection bgImgB />
        </div>
      </section>

      <WhyChooseUsSection />

      <section className="bg-white py-4">
        <div className="mx-auto max-w-7xl ">
          <SectionHeader
            badge="The Only Tool Your Restaurant Needs"
            title={
              <>
                One Platform <span className="text-blue-900 font-merienda">Complete Control</span>{' '}
                <br />
                Over Your Restaurant.
              </>
            }
          >
            QR Menus • Orders • Tables • Branches • Inventory • POS
            <br />
            <span className="font-bold text-blue-900">One platform. Zero headache.</span>
          </SectionHeader>

          {/* Menu Management – unchanged */}
          <FeatureHighlight
            badge="Menu Management"
            title={
              <>
                Full control at every branch
                <br />
                <span className="text-blue-900 font-merienda">From Portal → Customer → Done</span>
              </>
            }
            description="One master menu, unlimited branch variations. Create combos, menu groups, hide/show items per location, and launch specials — all without touching a printer."
            imageSrc="/images/order-management-manage-order-like-a-pro.webp"
            imageAlt="Menuroom Branch Menu Management Dashboard"
            learnMoreLink="/features/menu"
            features={[
              {
                icon: Package,
                title: 'Master Menu',
                desc: 'Central menu library — add, edit, or archive items once, use everywhere.',
              },
              {
                icon: Store,
                title: 'Branch-Specific Menus',
                desc: 'Each branch can hide items, change prices, or reorder categories independently.',
              },
              {
                icon: Layers,
                title: 'Menu Groups & Categories',
                desc: 'Organize items into Breakfast, Lunch, Drinks, Desserts or custom groups.',
              },
              {
                icon: Package,
                title: 'Combo & Bundle Menus',
                desc: 'Create meal deals, family packs, or happy hour combos exclusive to branches.',
              },
            ]}
          />

          {/* Order Management – now uses EXACT SAME layout as Menu Management */}
          <FeatureHighlight
            reverse
            badge="Order Management"
            title={
              <>
                Lightning-Fast Orders
                <br />
                <span className="text-blue-900 font-merienda">From Table → Kitchen → Done</span>
              </>
            }
            description="Customers order directly from QR code, your website, or waiter tablet. Orders fly straight to the kitchen screen or printer — no shouting, no mistakes, no delays."
            imageSrc="/images/order-management-manage-order-like-a-pro.webp"
            imageAlt="Menuroom Order Management – From QR Scan to Kitchen in Seconds"
            ctaText="See Order Flow in Action"
            ctaLink="/features/order-management"
            zebra
            features={[
              {
                icon: QrCode,
                title: 'Scan & Order from Phone',
                desc: 'Customers scan QR → browse menu → place order → pay (or pay later).',
              },
              {
                icon: Globe,
                title: 'Order from Your Website',
                desc: 'Online ordering built-in. Customers order for pickup or delivery.',
              },
              {
                icon: Smartphone,
                title: 'Waiter Tablet Ordering',
                desc: 'Staff take orders on tablet — appears instantly in kitchen.',
              },
              {
                icon: Zap,
                title: 'Instant Kitchen Display',
                desc: 'New orders pop up on kitchen screen with timer. No paper tickets lost.',
              },
            ]}
            learnMoreLink="/features/order"
          />
          {/* Multi-Branch Management */}
          <FeatureHighlight
            badge="Multi-Branch Management"
            title={
              <>
                Control All Your Branches
                <br />
                <span className="text-blue-900 font-merienda">From One Dashboard</span>
              </>
            }
            description="Manage 4, 10, or 100+ branches like a pro. Each branch has its own menu, pricing, combos, staff, tables, and reports — all controlled from a single login."
            imageSrc="/images/order-management-manage-order-like-a-pro.webp"
            imageAlt="Multi-Branch Management Dashboard"
            learnMoreLink="/features/multi-branch"
            features={[
              {
                icon: Store,
                title: 'Central + Branch Control',
                desc: 'Update master menu once — push to all or selected branches instantly.',
              },
              {
                icon: Layers,
                title: 'Branch-Specific Menus',
                desc: 'Different prices, hide/show items, custom combos per location.',
              },
              {
                icon: Package,
                title: 'Corporate & Franchise Ready',
                desc: 'Perfect for chains, hotels, or franchise networks in Ethiopia.',
              },
              {
                icon: Zap,
                title: 'Real-Time Sync',
                desc: 'Changes appear instantly across all branches — no delays.',
              },
            ]}
          />

          {/* POS System */}
          <FeatureHighlight
            reverse
            badge="Modern POS System"
            title={
              <>
                Fast, Simple, Powerful POS
                <br />
                <span className="text-blue-900 font-merienda">Built for Ethiopian Restaurants</span>
              </>
            }
            description="Take orders, split bills, apply discounts, manage cash & mobile payments — all offline-capable and lightning fast."
            imageSrc="/images/order-management-manage-order-like-a-pro.webp"
            imageAlt="Menuroom POS Interface"
            learnMoreLink="/features/pos"
            zebra
            features={[
              {
                icon: Smartphone,
                title: 'Tablet & Phone POS',
                desc: 'Use any Android device as a full POS — no expensive hardware.',
              },
              {
                icon: Zap,
                title: 'Works Offline',
                desc: 'Internet down? Keep selling. Everything syncs when back online.',
              },
              {
                icon: Globe,
                title: 'Cash, Telebirr, CBE Birr',
                desc: 'Accept all payment methods Ethiopian customers love.',
              },
              {
                icon: Printer,
                title: 'Auto Print Receipts',
                desc: 'Kitchen docket + customer receipt — printed automatically.',
              },
            ]}
          />

          {/* Smart Table Management */}
          <FeatureHighlight
            badge="Smart Table Management"
            title={
              <>
                QR-Powered Tables
                <br />
                <span className="text-blue-900 font-merienda">No More Confusion</span>
              </>
            }
            description="Every table gets its own QR code. Customers scan, order, and pay. Waiters assign tables, move orders, merge bills — all digital."
            imageSrc="/images/order-management-manage-order-like-a-pro.webp"
            imageAlt="QR Table Management System"
            learnMoreLink="/features/table"
            features={[
              {
                icon: QrCode,
                title: 'Auto QR Generation',
                desc: 'Print or stick QR codes on tables — instantly linked to your system.',
              },
              {
                icon: Users,
                title: 'Waiter Table Assignment',
                desc: 'Assign tables to waiters — they see only their orders.',
              },
              {
                icon: ArrowRightLeft,
                title: 'Move & Merge Tables',
                desc: 'Customer moved? Transfer order in 2 seconds.',
              },
              {
                icon: BellRing,
                title: 'Call Waiter Button',
                desc: 'Customers press “Call Waiter” from phone — notification sent instantly.',
              },
            ]}
          />
        </div>
        <SectionHeader
          badge="Start Using Mesob in 3 Simple Steps"
          title={
            <>
              Go Live in <span className="text-blue-900 font-merienda">Less Than 10 Minutes</span>
              <br />
              No Training • No Money • Works Offline
            </>
          }
        >
          <div className="">
            <ReusableFlow />
          </div>
        </SectionHeader>
        <section
          className="relative py-24 lg:py-20 overflow-hidden"
          style={{
            backgroundImage: `
      linear-gradient(to bottom right, rgba(30, 64, 175,0.9), rgba(30, 58, 138, 0.8)),
      url(${abstractBackground})
    `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-grid-white/10 bg-grid"></div>

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-merienda leading-tight">
              Ready to Go Digital?
            </h2>

            <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto font-merienda">
              Join 50+ smart restaurants in Ethiopia already using Mesob.
              <br className="hidden sm:block" />
              Start your free trial today — no Money required.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://app.menuroom.et/signup"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-xl font-bold text-blue-900 shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
                <span className="transform transition-transform group-hover:translate-x-2">→</span>
              </a>

              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 text-white text-lg font-semibold hover:text-blue-200 transition"
              >
                View Pricing
                <span>→</span>
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-12 text-blue-200 text-sm">
              ✓ 14-day free trial • ✓ No credit card needed • ✓ Cancel anytime
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;

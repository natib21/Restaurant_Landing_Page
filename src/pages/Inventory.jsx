// pages/features/Inventory.jsx
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import ReusableFlow from '../component/common/ReusableFlow';
import {
  Package,
  AlertTriangle,
  BellRing,
  Smartphone,
  Zap,
  Store,
  ArrowDown,
  ArrowUp,
  History,
  Printer,
  ShoppingCart,
  Truck,
  UserCheck,
  Scale,
} from 'lucide-react';

// Dedicated Why Choose for Inventory
const inventoryWhyChooseUs = [
  { title: 'Real-Time Stock Tracking', icon: Package, desc: 'Know exactly how much teff, coffee, or meat you have — across all branches' },
  { title: 'Low Stock Alerts', icon: BellRing, desc: 'Get notified before injera or berbere runs out' },
  { title: 'Works Offline', icon: Smartphone, desc: 'Track stock even when internet is down — syncs automatically' },
  { title: 'Multi-Branch Sync', icon: Store, desc: 'See total stock or per-branch — one dashboard' },
  { title: 'Auto Deduct on Sale', icon: ArrowDown, desc: 'Every order reduces stock instantly — no manual entry' },
  { title: 'Supplier Management', icon: Truck, desc: 'Track who supplies what and when to reorder' },
  { title: 'Waste & Theft Control', icon: AlertTriangle, desc: 'Spot unusual drops instantly' },
  { title: 'Print Reorder Lists', icon: Printer, desc: 'One-click list for market day — no guessing' },
];

const Inventory = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl px-6">
          <HeroSection
            badge="Never Run Out of Injera Again"
            heading={
              <>
                Smart Inventory 
                <br />
                <span className="text-blue-900 font-merienda">For Ethiopian Restaurants</span>
              </>
            }
            description="Track teff, berbere, coffee, meat, and everything else in real-time. Get alerts before you run out. Reduce waste. Stop theft. Save money — automatically."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="See Inventory Demo"
            ctaSecondaryLink="/contact"
            stats={[
              { value: '0', label: 'Stock-Outs' },
              { value: '30%', label: 'Less Waste' },
              { value: '100%', label: 'Peace of Mind' },
            ]}
          />
        </div>
      </section>

      {/* Why Choose Us – Dedicated to Inventory */}
      <WhyChooseUsSection features={inventoryWhyChooseUs} />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Stop Guessing. Start Knowing."
            title={
              <>
                Full Control Over Your Stock
                <br />
                <span className="text-blue-900 font-merienda">Across All Branches</span>
              </>
            }
          >
            No more “We’re out of shiro” surprises. No more buying too much. No more late-night Excel stress.
          </SectionHeader>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-20">

          {/* Real-Time Tracking */}
          <FeatureHighlight
            badge="Live Stock Levels"
            title={
              <>
                See Everything, Everywhere
                <br />
                <span className="text-blue-900 font-merienda">In Real Time</span>
              </>
            }
            description="How many kilos of teff in Bole? How many liters of oil in Piassa? Check from your phone — updated instantly."
            imageSrc="/images/inventory-dashboard.webp"
            imageAlt="Live inventory dashboard"
            features={[
              { icon: Package, title: 'All Items Tracked', desc: 'Teff, berbere, meat, coffee, drinks — everything' },
              { icon: Store, title: 'Per-Branch View', desc: 'Switch between locations instantly' },
              { icon: Smartphone, title: 'Mobile Access', desc: 'Check stock while at the market' },
              { icon: Zap, title: 'Auto Update on Sale', desc: 'Every order deducts stock immediately' },
            ]}
          />

          {/* Smart Alerts */}
          <FeatureHighlight
            reverse
            zebra
            badge="Never Run Out Again"
            title={
              <>
                Low Stock? You’ll Know
                <br />
                <span className="text-blue-900 font-merienda">Before It’s Too Late</span>
              </>
            }
            description="Set minimum levels for injera flour, coffee beans, or meat — get notified by app, SMS, or email when running low."
            imageSrc="/images/low-stock-alert.webp"
            imageAlt="Low stock notification"
            features={[
              { icon: BellRing, title: 'Custom Thresholds', desc: 'You decide when to be alerted' },
              { icon: AlertTriangle, title: 'Critical Alerts', desc: 'Red alert when dangerously low' },
              { icon: Smartphone, title: 'Push + SMS', desc: 'Never miss an alert' },
              { icon: UserCheck, title: 'Assign to Staff', desc: 'Chef, manager, or owner gets notified' },
            ]}
          />

          {/* Waste & Theft Detection */}
          <FeatureHighlight
            badge="Catch Waste & Theft"
            title={
              <>
                Spot Problems Early
                <br />
                <span className="text-blue-900 font-merienda">Save Thousands Every Month</span>
              </>
            }
            description="Used 50kg of meat but only sold 30kg worth? System flags it instantly."
            imageSrc="/images/inventory-theft-detection.webp"
            imageAlt="Inventory variance report"
            features={[
              { icon: ArrowDown, title: 'Auto vs Actual', desc: 'Compare used vs sold' },
              { icon: AlertTriangle, title: 'Variance Alerts', desc: 'Unusual drops flagged immediately' },
              { icon: History, title: 'Full Audit Trail', desc: 'Who adjusted what and when' },
              { icon: Scale, title: 'Weigh & Track', desc: 'Perfect for meat, flour, oil' },
            ]}
          />

          {/* Supplier & Reordering */}
          <FeatureHighlight
            reverse
            zebra
            badge="Smart Reordering"
            title={
              <>
                Know Exactly What to Buy
                <br />
                <span className="text-blue-900 font-merienda">And From Whom</span>
              </>
            }
            description="One click generates a shopping list. Know which supplier gave you berbere last time. Track prices."
            imageSrc="/images/reorder-list.webp"
            imageAlt="Auto-generated reorder list"
            ctaText="See Reorder Magic"
            ctaLink="/contact"
            features={[
              { icon: ShoppingCart, title: 'Auto Shopping List', desc: 'Print or send to supplier' },
              { icon: Truck, title: 'Supplier History', desc: 'Who supplied what last time' },
              { icon: Printer, title: 'Print Ready', desc: 'Market day? Just print and go' },
              { icon: ArrowUp, title: 'Price Tracking', desc: 'See if berbere price went up' },
            ]}
          />
        </div>
      </section>

      {/* Quick Setup */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Start Tracking in Minutes"
            title={
              <>
                From Chaos to Control
                <br />
                <span className="text-blue-900 font-merienda">In Less Than 15 Minutes</span>
              </>
            }
          >
            <div className="mt-12">
              <ReusableFlow
                steps={[
                  'Add your main ingredients (teff, meat, coffee, etc.)',
                  'Set current stock levels',
                  'Set low-stock alerts',
                  'Start selling — stock updates automatically!',
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
            Ready to Stop Losing Money on Stock?
          </h2>
          <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto font-merienda">
            Join 50+ restaurants saving thousands every month with smart inventory.
            <br className="hidden sm:block" />
            Never run out. Never overbuy. Total control.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://app.menuroom.et/signup"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-xl font-bold text-blue-900 shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
              <span className="transform transition-transform group-hover:translate-x-2">Arrow Right</span>
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 text-white text-lg font-semibold hover:text-blue-200 transition">
              Book Inventory Demo
              <span>Arrow Right</span>
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

export default Inventory;
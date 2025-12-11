// src/pages/features/TableManagement.jsx
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import ReusableFlow from '../component/common/ReusableFlow';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import {
  QrCode,
  Users,
  BellRing,
  ArrowRightLeft,
  Zap,
  Shield,
  Smartphone,
  Store,
  Clock,
  Eye,
  Table as TableIcon,
} from 'lucide-react';

// Why Choose Table Management
const tableWhyChooseUs = [
  {
    title: 'Every Table Has QR',
    icon: QrCode,
    desc: 'Print once and let customers scan to order easily.',
  },
  {
    title: 'Live Table Status',
    icon: TableIcon,
    desc: 'See free, occupied, or cleaning status instantly.',
  },
  {
    title: 'Call Waiter Button',
    icon: BellRing,
    desc: 'Customers tap once and waiters get instant alerts.',
  },
  {
    title: 'Move & Merge Tables',
    icon: ArrowRightLeft,
    desc: 'Move customers or merge bills in seconds anytime.',
  },
  {
    title: 'Waiter Assignment',
    icon: Users,
    desc: 'Each waiter only views and manages their tables.',
  },
  {
    title: 'Works Offline',
    icon: Shield,
    desc: 'Table features continue working even without internet.',
  },
  {
    title: 'Floor Plan View',
    icon: Store,
    desc: 'Visualize your full restaurant layout live anytime.',
  },
  {
    title: 'Real-Time Updates',
    icon: Zap,
    desc: 'All staff see synced table status instantly.',
  },
];


export default function TableManagement() {
  return (
    <>
    
      <section className="bg-white  sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl px-6">
          <HeroSection
            badge="Smart Table Management"
            heading={
              <>
                QR-Powered Tables
                <br />
                <span className="text-blue-900 font-merienda">No More Confusion</span>
              </>
            }
            description="Every table has its own QR code. Customers scan, order, and pay. Waiters assign tables, move orders, merge bills — all digital, all real-time."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="Watch Demo"
            ctaSecondaryLink="https://menuroom.et/demo"
            stats={[
              { value: 'Zero', label: 'Paper Bills' },
              { value: '100%', label: 'Table Tracking' },
              { value: '2sec', label: 'Table Move' },
              { value: '50+', label: 'Restaurants Using' },
            ]}
          />
        </div>
      </section>

      {/* WHY CHOOSE TABLE MANAGEMENT */}
      <WhyChooseUsSection features={tableWhyChooseUs} />

      {/* MAIN FEATURES */}
      <section className=" bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-0">
          <SectionHeader
            badge="End Table Chaos Forever"
            title={
              <>
                One System to Manage
                <br />
                <span className="text-blue-900 font-merienda">Every Table Perfectly</span>
              </>
            }
          >
            QR tables • Live status • Call waiter • Move & merge • Waiter zones
          </SectionHeader>

          {/* QR Table Assignment */}
          <FeatureHighlight
            reverse
            zebra
            badge="QR Table Assignment"
            title={
              <>
                Every Table Has Its Own QR
                <br />
                <span className="text-blue-900 font-merienda">No More Mix-Ups</span>
              </>
            }
            description="Print or stick QR codes on tables. System automatically knows which table ordered what — perfect for waiters and kitchen."
            imageSrc="/images/table-qr-assignment.webp"
            imageAlt="QR table system"
            features={[
              { icon: QrCode, title: 'Auto Table Link', desc: 'Scan → bill opens for that table' },
              { icon: TableIcon, title: 'Print QR Once', desc: 'Never reprint again' },
              { icon: Zap, title: 'Instant Recognition', desc: 'System knows table number' },
              { icon: Shield, title: 'Works Offline', desc: 'QR scanning works without internet' },
            ]}
          />

          {/* Live Floor Plan & Status */}
          <FeatureHighlight
            badge="Live Floor Plan"
            title={
              <>
                See Your Restaurant Live
                <br />
                <span className="text-blue-900 font-merienda">Every Table Status</span>
              </>
            }
            description="Beautiful floor plan view. Green = free, yellow = eating, red = needs cleaning. Drag & drop tables. Full control."
            imageSrc="/images/table-floor-plan.webp"
            imageAlt="Live table status"
            features={[
              { icon: Eye, title: 'Real-Time Status', desc: 'Free / Occupied / Cleaning' },
              { icon: Store, title: 'Custom Layout', desc: 'Drag tables to match your restaurant' },
              {
                icon: Clock,
                title: 'Time Tracking',
                desc: 'Know how long customers have been sitting',
              },
              { icon: Smartphone, title: 'Mobile View', desc: 'Manager checks from phone' },
            ]}
          />

          {/* Call Waiter + Move Tables */}
          <FeatureHighlight
            reverse
            zebra
            badge="Smart Table Actions"
            title={
              <>
                Call Waiter & Move Tables
                <br />
                <span className="text-blue-900 font-merienda">In 2 Seconds</span>
              </>
            }
            description="Customer presses “Call Waiter” → waiter gets notification. Customer moved? Transfer bill instantly."
            imageSrc="/images/table-actions.webp"
            imageAlt="Call waiter and move tables"
            features={[
              {
                icon: BellRing,
                title: 'Call Waiter Button',
                desc: 'Customer presses → instant alert',
              },
              { icon: ArrowRightLeft, title: 'Move Table', desc: 'Transfer entire bill in 2 taps' },
              { icon: Users, title: 'Merge Bills', desc: 'Combine multiple tables easily' },
              { icon: Zap, title: 'Waiter Notification', desc: 'Push alert to waiter’s phone' },
            ]}
          />

          {/* Waiter Zones & Assignment */}
          <FeatureHighlight
            badge="Waiter Management"
            title={
              <>
                Each Waiter Sees Only Their Tables
                <br />
                <span className="text-blue-900 font-merienda">No Confusion</span>
              </>
            }
            description="Assign tables to waiters. They only see their section. Better service. Happier staff."
            imageSrc="/images/table-waiter-assignment.webp"
            imageAlt="Waiter zones"
            features={[
              { icon: Users, title: 'Waiter Assignment', desc: 'Drag tables to assign' },
              { icon: Smartphone, title: 'Waiter App', desc: 'Only their tables appear' },
              { icon: Zap, title: 'Real-Time Updates', desc: 'New order → waiter notified' },
              {
                icon: Shield,
                title: 'Permission Control',
                desc: 'Waiter can’t see other sections',
              },
            ]}
          />
        </div>

        {/* HOW IT WORKS */}
        <SectionHeader
          badge="Go Live in Minutes"
          title={
            <>
              Launch Smart Tables in
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
        <section
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
              Run Your Restaurant Like a Pro
            </h2>
            <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join 50+ smart restaurants already using Menuroom Table Management across Ethiopia.
              <br className="hidden sm:block" />
              Start free — better service, happier customers.
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
        </section>
      </section>
    </>
  );
}

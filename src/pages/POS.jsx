// src/pages/features/POS.jsx
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import ReusableFlow from '../component/common/ReusableFlow';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import {
  Smartphone,
  Zap,
  Wallet,
  Printer,
  Globe,
  QrCode,
  Users,
  ArrowRightLeft,
  BellRing,
  CreditCard,
  Store,
  Layers,
  Package,
  Bike,
  FileText,
  TableIcon,
  Eye,
  Undo,
  XCircle,
  FileCheck,
  //   Store
} from 'lucide-react';

const posWhyChooseUs = [
  { title: 'Works Offline', icon: Zap, desc: 'Internet down? Keep selling. Syncs when back.' },
  {
    title: 'Any Android Device',
    icon: Smartphone,
    desc: 'Phone or tablet — no expensive hardware.',
  },
  { title: 'All Ethiopian Payments', icon: Wallet, desc: 'Telebirr, CBE Birr, HelloCash, Cash' },
  { title: 'Auto Print Receipts', icon: Printer, desc: 'Kitchen + customer receipt instantly' },
  {
    title: 'Split & Merge Bills',
    icon: ArrowRightLeft,
    desc: 'Handle groups and table moves easily',
  },
  { title: 'Fast Local Support', icon: Users, desc: 'Real help from Ethiopia — anytime' },
  {
    title: 'Multi-Branch Control',
    icon: Store,
    desc: 'Manage all locations from one phone',
  },
  {
    title: 'ERCA Compliant Receipts',
    icon: FileCheck,
    desc: 'Legal fiscal receipts with QR code — no tax problems',
  },
];
export default function POS() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl">
          <HeroSection
            badge="Modern POS System"
            heading={
              <>
                Fast, Simple, Powerful POS
                <br />
                <span className="text-blue-900 font-merienda">Built for Ethiopia</span>
              </>
            }
            description="Use any Android phone or tablet as a full POS. Works 100% offline. Accept Telebirr, CBE Birr, cash — all in seconds."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="Watch Demo"
            ctaSecondaryLink="https://menuroom.et/demo"
            stats={[
              { value: '0 ETB', label: 'Hardware Cost' },
              { value: '100%', label: 'Offline Ready' },
              { value: '10sec', label: 'Checkout Speed' },
              { value: '50+', label: 'Restaurants Using' },
            ]}
          />
        </div>

        {/* WHY CHOOSE POS */}
        <WhyChooseUsSection features={posWhyChooseUs} />

        {/* MAIN FEATURES */}
        <section className=" py-4">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="Everything Your Cashier Needs"
              title={
                <>
                  One POS to Replace
                  <br />
                  <span className="text-blue-900 font-merienda">All Your Old Tools</span>
                </>
              }
            >
              No training • No hardware • Works offline • Ethiopian payments
            </SectionHeader>

            {/* 1. Multi-Branch POS – Feels Like One Business */}
            <FeatureHighlight
              reverse
              badge="Multi-Branch POS"
              title={
                <>
                  Run 100+ Branches
                  <br />
                  <span className="text-blue-900 font-merienda">Like One Restaurant</span>
                </>
              }
              description="One login. One system. All branches share the same menu, prices, and reports — but each has its own tables, staff, and real-time orders. No duplicate work."
              imageSrc="/images/order-management-manage-order-like-a-pro.webp"
              imageAlt="Multi-branch POS dashboard"
              features={[
                {
                  icon: Store,
                  title: 'Central Control',
                  desc: 'Update menu once → all branches updated',
                },
                {
                  icon: Users,
                  title: 'Branch-Specific Access',
                  desc: 'Staff only see their location',
                },
                {
                  icon: Zap,
                  title: 'Real-Time Sync',
                  desc: 'Orders appear instantly across branches',
                },
                {
                  icon: Layers,
                  title: 'Unified Reports',
                  desc: 'See total sales from all locations',
                },
              ]}
            />

            {/* 2. Dine-In, Takeaway, Delivery + Table Linking */}
            <FeatureHighlight
              zebra
              badge="Order Types & Table Linking"
              title={
                <>
                  Dine-In, Takeaway, Delivery
                  <br />
                  <span className="text-blue-900 font-merienda">All in One System</span>
                </>
              }
              description="Handle every order type perfectly. Link customers to tables, track who ordered what — no confusion, no lost orders."
              imageSrc="/images/order-management-manage-order-like-a-pro.webp"
              imageAlt="Dine-in, takeaway, delivery management"
              features={[
                {
                  icon: Users,
                  title: 'Link Customer to Table',
                  desc: 'Know exactly who is sitting where',
                },
                {
                  icon: Package,
                  title: 'Takeaway Ready',
                  desc: 'Quick pickup orders with name & time',
                },
                { icon: Bike, title: 'Delivery Tracking', desc: 'Assign rider, track status live' },
                {
                  icon: QrCode,
                  title: 'QR Table Assignment',
                  desc: 'Scan table → bill opens automatically',
                },
              ]}
            />

            {/* 3. Perfect Invoice & Receipt Printing */}
            <FeatureHighlight
              reverse
              badge="Smart Printing"
              title={
                <>
                  Print Everything
                  <br />
                  <span className="text-blue-900 font-merienda">In One Click</span>
                </>
              }
              description="Customer receipt, kitchen docket, full invoice — all generated and printed instantly with your logo and tax info. 100% ERCA compliant."
              imageSrc="/images/order-management-manage-order-like-a-pro.webp"
              imageAlt="Smart receipt and invoice printing"
              features={[
                {
                  icon: Printer,
                  title: 'One-Click Print',
                  desc: 'Customer + Kitchen + Invoice instantly',
                },
                {
                  icon: FileText,
                  title: 'ERCA Compliant',
                  desc: 'Auto fiscal signature & QR code',
                },
                {
                  icon: CreditCard,
                  title: 'Custom Receipts',
                  desc: 'Your logo, thank you note, promo',
                },
                { icon: Zap, title: 'Thermal & A4 Support', desc: 'Works with any printer' },
              ]}
            />

            {/* 4. Flexible Payments – Pay First or Later */}
            <FeatureHighlight
              zebra
              badge="Flexible Payments"
              title={
                <>
                  Pay Before or After Eating
                  <br />
                  <span className="text-blue-900 font-merienda">Customer Chooses</span>
                </>
              }
              description="Let customers pay at ordering (QR), pay later (table), or split payment. Accept cash, Telebirr, CBE Birr — all in one bill."
              imageSrc="/images/order-management-manage-order-like-a-pro.webp"
              imageAlt="Pay first or pay later"
              features={[
                { icon: QrCode, title: 'Pay with QR', desc: 'Scan → pay → eat (prepaid)' },
                { icon: TableIcon, title: 'Pay at Table', desc: 'Eat first → pay later' },
                { icon: Wallet, title: 'Split Payment', desc: 'Part cash, part Telebirr' },
                {
                  icon: Smartphone,
                  title: 'Mobile Banking',
                  desc: 'All Ethiopian banks supported',
                },
              ]}
            />

            {/* 5. Full Order Management – Refunds, Cancel, Live Monitoring */}
            <FeatureHighlight
              reverse
              badge="Complete Order Control"
              title={
                <>
                  Full Control Over Every Order
                  <br />
                  <span className="text-blue-900 font-merienda">Refund, Cancel, Monitor</span>
                </>
              }
              description="Manager dashboard shows all live orders. Cancel item, refund payment, void bill — with reason and approval. Nothing gets lost."
              imageSrc="/images/order-management-manage-order-like-a-pro.webp"
              imageAlt="Live order monitoring and control"
              features={[
                {
                  icon: Eye,
                  title: 'Live Order Dashboard',
                  desc: 'See all active orders in real-time',
                },
                { icon: Undo, title: 'Easy Refund', desc: 'Return money with one tap' },
                { icon: XCircle, title: 'Cancel Item/Order', desc: 'With manager PIN approval' },
                {
                  icon: BellRing,
                  title: 'Order Alerts',
                  desc: 'Delayed? Kitchen notified automatically',
                },
              ]}
            />
            <FeatureHighlight
              zebra
              badge="Lightning Fast"
              title={
                <>
                  Checkout in Seconds
                  <br />
                  <span className="text-blue-900 font-merienda">No Lag, No Waiting</span>
                </>
              }
              description="Tap item → apply discount → split bill → accept Telebirr → done. Built for speed during rush hour."
              imageSrc="/images/order-management-manage-order-like-a-pro.webp"
              imageAlt="Fast POS checkout"
              learnMoreLink="/features/pos"
              features={[
                { icon: Zap, title: 'Instant Load', desc: 'Opens in under 1 second' },
                {
                  icon: Smartphone,
                  title: 'Touch-Optimized',
                  desc: 'Big buttons, easy for everyone',
                },
                { icon: ArrowRightLeft, title: 'Split Bills', desc: 'By person or item in 3 taps' },
                { icon: Wallet, title: 'All Payments', desc: 'Cash, Telebirr, CBE Birr' },
              ]}
            />

            {/* Offline + Sync */}
            <FeatureHighlight
              reverse
              badge="Works Offline"
              title={
                <>
                  Internet Down?
                  <br />
                  <span className="text-blue-900 font-merienda">Keep Selling</span>
                </>
              }
              description="Full POS works without internet. All orders and payments saved locally — sync automatically when back online."
              imageSrc="/images/order-management-manage-order-like-a-pro.webp"
              imageAlt="POS works offline"
              features={[
                { icon: Zap, title: '100% Offline', desc: 'No internet? No problem' },
                { icon: Globe, title: 'Auto Sync', desc: 'Everything updates when connected' },
                { icon: Printer, title: 'Print Receipts', desc: 'Even without internet' },
                { icon: CreditCard, title: 'Mobile Payments', desc: 'Telebirr works offline too' },
              ]}
            />

            {/* Smart Features */}
            <FeatureHighlight
              zebra
              badge="Smart Features"
              title={
                <>
                  Built for Real Restaurant Chaos
                  <br />
                  <span className="text-blue-900 font-merienda">Handle Anything</span>
                </>
              }
              description="Hold orders, move tables, apply staff discounts, void items — all with simple taps. Designed by restaurant owners."
              imageSrc="/images/order-management-manage-order-like-a-pro.webp"
              imageAlt="Advanced POS features"
              features={[
                {
                  icon: ArrowRightLeft,
                  title: 'Move & Merge Tables',
                  desc: 'Customer moved? Transfer in 2 seconds',
                },
                { icon: Users, title: 'Staff Permissions', desc: 'Cashier vs Manager access' },
                { icon: BellRing, title: 'Hold & Resume', desc: 'Pause order, serve others' },
                { icon: QrCode, title: 'QR Table Link', desc: 'Scan table → open bill' },
              ]}
            />
          </div>

          {/* HOW IT WORKS */}
          <SectionHeader
            badge="Go Live in Minutes"
            title={
              <>
                Start Using POS in
                <br />
                <span className="text-blue-900 font-merienda">Less Than 10 Minutes</span>
              </>
            }
          >
            <div className="mt-12">
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
                Replace Your Old Cash Register Today
              </h2>
              <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
                Join 50+ restaurants already using Menuroom POS across Ethiopia.
                <br className="hidden sm:block" />
                Start free — no hardware, no risk.
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
                No credit card • Cancel anytime • Full POS access from day one
              </p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

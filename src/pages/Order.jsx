// src/pages/features/OrderManagement.jsx
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import ReusableFlow from '../component/common/ReusableFlow';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';

import {
  ShoppingCart,
  Zap,
  QrCode,
  Globe,
  Smartphone,
  Users,
  BellRing,
  Clock,
  Shield,
  Printer,
  Store,
  Package,
  Bike,
} from 'lucide-react';

// Why Choose Order Management
const orderWhyChooseUs = [
  {
    title: 'No More Shouting',
    icon: Zap,
    desc: 'Orders go straight to the kitchen—no paper or noise.',
  },
  {
    title: 'From Any Source',
    icon: ShoppingCart,
    desc: 'QR, website, and tablet orders all flow together.',
  },
  {
    title: 'Real-Time Kitchen',
    icon: BellRing,
    desc: 'New orders appear instantly on the kitchen screen.',
  },
  {
    title: 'Track Every Order',
    icon: Users,
    desc: 'See who placed orders and follow each step clearly.',
  },
  {
    title: 'Works Offline',
    icon: Shield,
    desc: 'Internet issues? Orders continue without interruption.',
  },
  {
    title: 'Auto Print Dockets',
    icon: Printer,
    desc: 'Kitchen prints every order instantly and accurately.',
  },
  {
    title: 'Delivery Ready',
    icon: Bike,
    desc: 'Assign riders easily and track delivery status live.',
  },
  {
    title: 'Multi-Branch Sync',
    icon: Store,
    desc: 'All branches receive and view orders in real-time.',
  },
];


export default function OrderManagement() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl px-6">
          <HeroSection
            badge="Order Management"
            heading={
              <>
                Orders Fly Straight
                <br />
                <span className="text-blue-900 font-merienda">From Table to Kitchen to Done</span>
              </>
            }
            description="Customers order from QR, website, or tablet. Orders appear instantly in kitchen. No shouting. No mistakes. No delays."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="Watch Demo"
            ctaSecondaryLink="https://menuroom.et/demo"
            stats={[
              { value: 'Zero', label: 'Paper Orders' },
              { value: '1sec', label: 'Kitchen Alert' },
              { value: '100%', label: 'Accuracy' },
              { value: '50+', label: 'Restaurants Using' },
            ]}
          />
        </div>
      </section>

      {/* WHY CHOOSE ORDER MANAGEMENT */}
      <WhyChooseUsSection features={orderWhyChooseUs} />

      {/* MAIN FEATURES */}
      <section className=" bg-white sm:py-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-0">
          <SectionHeader
            badge="End Paper Chaos Forever"
            title={
              <>
                One System to Handle
                <br />
                <span className="text-blue-900 font-merienda">Every Single Order</span>
              </>
            }
          >
            QR • Website • Tablet • Delivery • Takeaway — all connected
          </SectionHeader>

          {/* Multiple Order Sources */}
          <FeatureHighlight
            reverse
            zebra
            badge="Multiple Order Sources"
            title={
              <>
                Accept Orders From Anywhere
                <br />
                <span className="text-blue-900 font-merienda">All in One Place</span>
              </>
            }
            description="QR table ordering, online orders, waiter tablet, delivery apps — every order lands in the same kitchen queue."
            imageSrc="/images/order-sources.webp"
            imageAlt="Multiple order channels"
            features={[
              {
                icon: QrCode,
                title: 'QR Table Ordering',
                desc: 'Customer scans to orders directly',
              },
              { icon: Globe, title: 'Website Orders', desc: 'Pickup & delivery from your site' },
              {
                icon: Smartphone,
                title: 'Waiter Tablet',
                desc: 'Fast & accurate table-side ordering',
              },
              { icon: Bike, title: 'Delivery Apps', desc: 'Connect with external riders' },
            ]}
          />

          {/* Kitchen Display System */}
          <FeatureHighlight
            badge="Kitchen Display System"
            title={
              <>
                Orders Appear Instantly
                <br />
                <span className="text-blue-900 font-merienda">No Paper Tickets Lost</span>
              </>
            }
            description="New orders pop up on kitchen screen with timer. Mark as ready. No shouting. No missed items."
            imageSrc="/images/kitchen-display.webp"
            imageAlt="Real-time kitchen screen"
            features={[
              { icon: Zap, title: 'Instant Alert', desc: 'New order to beep + highlight' },
              {
                icon: Clock,
                title: 'Cooking Timer',
                desc: 'Know how long each order has been waiting',
              },
              { icon: BellRing, title: 'Mark as Ready', desc: 'One tap to waiter notified' },
              { icon: Shield, title: 'Works Offline', desc: 'Kitchen screen stays live' },
            ]}
          />

          {/* Live Order Tracking */}
          <FeatureHighlight
            reverse
            zebra
            badge="Live Order Tracking"
            title={
              <>
                See Every Order Live
                <br />
                <span className="text-blue-900 font-merienda">Nothing Gets Lost</span>
              </>
            }
            description="Manager dashboard shows all active orders. Filter by table, delivery, status — full control."
            imageSrc="/images/live-order-tracking.webp"
            imageAlt="Live order dashboard"
            features={[
              { icon: Users, title: 'Table View', desc: 'See who’s eating where' },
              { icon: Package, title: 'Takeaway Queue', desc: 'Ready for pickup' },
              { icon: Bike, title: 'Delivery Status', desc: 'Assigned to On the way to Delivered' },
              { icon: Zap, title: 'Real-Time Updates', desc: 'Everyone sees the same screen' },
            ]}
          />

          {/* Smart Notifications */}
          <FeatureHighlight
            badge="Smart Notifications"
            title={
              <>
                Never Miss an Order
                <br />
                <span className="text-blue-900 font-merienda">Kitchen & Waiters Alerted</span>
              </>
            }
            description="New order? Kitchen gets beep. Ready? Waiter gets notification. Delayed? Manager alerted."
            imageSrc="/images/order-notifications.webp"
            imageAlt="Smart alerts"
            features={[
              { icon: BellRing, title: 'Kitchen Alert', desc: 'Beep + flash for new orders' },
              { icon: Smartphone, title: 'Waiter App', desc: 'Push notification when food ready' },
              { icon: Clock, title: 'Delay Alerts', desc: 'Auto notify if order takes too long' },
              { icon: Users, title: 'Role-Based', desc: 'Only relevant staff get alerts' },
            ]}
          />
        </div>

        {/* HOW IT WORKS */}
        <SectionHeader
          badge="Go Live in Minutes"
          title={
            <>
              Start Taking Orders in
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
              Say Goodbye to Paper Orders Forever
            </h2>
            <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join 50+ smart restaurants already using Menuroom Order Management across Ethiopia.
              <br className="hidden sm:block" />
              Start free — faster service, happier customers.
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

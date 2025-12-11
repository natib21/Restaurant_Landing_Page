// pages/features/DeliveryManagement.jsx
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import ReusableFlow from '../component/common/ReusableFlow';
import {
  Truck,
  MapPin,
  Clock,
  PhoneCall,
  Smartphone,
  CheckCircle,
  Users,
  Zap,
  Wallet,
  Globe,
  BellRing,
  Package,
  ArrowRight,
  Store,
} from 'lucide-react';

// Dedicated Why Choose for Delivery
const deliveryWhyChooseUs = [
  {
    title: 'Own Riders or 3rd Party',
    icon: Truck,
    desc: 'Use your riders OR connect DeliverAddis, ZayRide, etc.',
  },
  { title: 'Live Order Tracking', icon: MapPin, desc: 'Customer sees rider location in real-time' },
  { title: 'Auto Dispatch', icon: Zap, desc: 'New order → nearest rider gets it instantly' },
  {
    title: 'Cash + Mobile Payment',
    icon: Wallet,
    desc: 'Pay on delivery or online — both supported',
  },
  {
    title: 'Delivery Zones & Fees',
    icon: Globe,
    desc: 'Set different fees for Bole, Piassa, Sarbet, etc.',
  },
  { title: 'Customer Calls Rider', icon: PhoneCall, desc: 'One-tap call from tracking page' },
  { title: 'Rider App (Android)', icon: Smartphone, desc: 'Free rider app — no training needed' },
  { title: 'Proof of Delivery', icon: CheckCircle, desc: 'Photo + signature + OTP options' },
];

const DeliveryManagement = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-16 sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl px-6">
          <HeroSection
            bgImgB={true}
            badge="Delivery Management That Actually Works in Ethiopia"
            heading={
              <>
                Turn Your Restaurant
                <br />
                <span className="text-blue-900 font-merienda">Into a Delivery Powerhouse</span>
              </>
            }
            description="Own riders or 3rd-party? Live tracking? Auto dispatch? Cash on delivery? Mesob handles everything — smoothly, reliably, profitably."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="See Delivery Flow"
            ctaSecondaryLink="/contact"
            stats={[
              { value: '2x', label: 'More Delivery Orders' },
              { value: '100%', label: 'Happy Customers' },
              { value: '0', label: 'Missed Calls' },
            ]}
          />
        </div>
      </section>

      <WhyChooseUsSection features={deliveryWhyChooseUs} />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Stop Losing Delivery Sales"
            title={
              <>
                Full Delivery Control
                <br />
                <span className="text-blue-900 font-merienda">From Order to Doorstep</span>
              </>
            }
          >
            Online orders → auto dispatch → live tracking → proof of delivery → money in your
            pocket. No chaos. No missed orders. No angry customers.
          </SectionHeader>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-20">
          {/* Own Riders + 3rd Party */}
          <FeatureHighlight
            badge="Your Riders or 3rd Party — You Choose"
            title={
              <>
                Total Flexibility
                <br />
                <span className="text-blue-900 font-merienda">No Lock-In</span>
              </>
            }
            description="Use your own motorbikes OR connect DeliverAddis, ZayRide, Ride, etc. Switch anytime."
            imageSrc="/images/delivery-riders-options.webp"
            imageAlt="Own riders vs 3rd party delivery"
            features={[
              { icon: Truck, title: 'Your Own Riders', desc: 'Full control, lower cost' },
              { icon: Globe, title: '3rd Party Partners', desc: 'DeliverAddis, ZayRide, etc.' },
              { icon: ArrowRight, title: 'Switch Anytime', desc: 'No contracts, no lock-in' },
              { icon: Store, title: 'Per-Branch Setup', desc: 'Different setup per location' },
            ]}
          />

          {/* Live Tracking & Customer Experience */}
          <FeatureHighlight
            reverse
            zebra
            badge="Customers Watch Every Step"
            title={
              <>
                Real-Time Tracking
                <br />
                <span className="text-blue-900 font-merienda">Like Talabat & Glovo</span>
              </>
            }
            description="Customer gets link → sees rider moving on map → knows exactly when food arrives."
            imageSrc="/images/live-delivery-tracking.webp"
            imageAlt="Customer tracking rider on map"
            features={[
              { icon: MapPin, title: 'Live GPS Tracking', desc: 'Accurate to the meter' },
              { icon: Clock, title: 'ETA Countdown', desc: '“Your kitfo arrives in 12 mins”' },
              { icon: PhoneCall, title: 'Call Rider Button', desc: 'One tap to speak' },
              { icon: BellRing, title: 'Push Notifications', desc: '“Rider is nearby” alert' },
            ]}
          />

          {/* Auto Dispatch & Rider App */}
          <FeatureHighlight
            badge="No More Phone Calls"
            title={
              <>
                Orders Fly to Riders
                <br />
                <span className="text-blue-900 font-merienda">Automatically</span>
              </>
            }
            description="New delivery order → nearest available rider gets it instantly on their phone."
            imageSrc="/images/auto-dispatch-rider-app.webp"
            imageAlt="Rider receiving order on phone"
            features={[
              { icon: Zap, title: 'Auto Assign', desc: 'Nearest rider gets order' },
              {
                icon: Smartphone,
                title: 'Free Rider App',
                desc: 'Android app — no training needed',
              },
              { icon: Users, title: 'Manual Assign Option', desc: 'You can override anytime' },
              {
                icon: Package,
                title: 'Order Details + Navigation',
                desc: 'Full info + Google Maps link',
              },
            ]}
          />

          {/* Proof of Delivery + Payments */}
          <FeatureHighlight
            reverse
            zebra
            badge="Get Paid & Close the Loop"
            title={
              <>
                Proof of Delivery + Payment
                <br />
                <span className="text-blue-900 font-merienda">100% Secure</span>
              </>
            }
            description="Cash on delivery? Online payment? Rider collects money or customer pays upfront — all tracked."
            imageSrc="/images/proof-of-delivery.webp"
            imageAlt="Rider taking photo and collecting cash"
            ctaText="See Full Delivery Flow"
            ctaLink="/contact"
            features={[
              {
                icon: CheckCircle,
                title: 'Photo + Signature + OTP',
                desc: 'Multiple proof options',
              },
              { icon: Wallet, title: 'Cash on Delivery', desc: 'Rider collects & deposits' },
              { icon: Smartphone, title: 'Pre-Payment', desc: 'Pay with Telebirr before dispatch' },
              {
                icon: Store,
                title: 'Daily Cash Report',
                desc: 'Know exactly what riders collected',
              },
            ]}
          />
        </div>
      </section>

      {/* Quick Setup */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Start Delivering in 10 Minutes"
            title={
              <>
                From Zero to Delivery Hero
                <br />
                <span className="text-blue-900 font-merienda">Today</span>
              </>
            }
          >
            <div className="mt-12">
              <ReusableFlow
                steps={[
                  'Set your delivery zones & fees',
                  'Add your riders (or connect 3rd party)',
                  'Enable delivery on menu',
                  'First order out in minutes!',
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
            Ready to Dominate Delivery in Ethiopia?
          </h2>
          <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto font-merienda">
            Own riders or 3rd party. Live tracking. Auto dispatch. Cash or mobile pay.
            <br className="hidden sm:block" />
            One system. Total control. Double your sales.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://app.menuroom.et/signup"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-xl font-bold text-blue-900 shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white text-lg font-semibold hover:text-blue-200 transition"
            >
              Book Delivery Demo
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

export default DeliveryManagement;

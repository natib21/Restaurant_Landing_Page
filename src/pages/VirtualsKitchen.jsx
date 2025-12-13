// pages/VirtualKitchen.jsx – Updated with Customized RestaurantHero & Suggested Images
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import {
  Package,
  Truck,
  Smartphone,
  Timer,
  Zap,
  Layers,
  Store,
  DollarSign,
  BellRing,
  Wifi,
  Users,
  ArrowRightLeft,
  QrCode,
} from 'lucide-react';
import ReusableFlow from '../component/common/ReusableFlow';
import RestaurantHero from '../component/Home/Hero/RestaurantHero'; // The reusable hero with props
// Remove old import if any: import { cafeeFeatures } ... (we'll create a new one below)
import { virtualKitchenFeatures } from '../component/Home/WhyChooseUs/variants';


const VirtualKitchen = () => {
  return (
    <>
      <section className="bg-white sm:py-0 lg:py-0">
        <div className="mx-auto max-w-7xl">
          {/* Customized Hero using the reusable RestaurantHero component */}
          <RestaurantHero
            leftImage="/images/VirtualImage1.png" // Vibrant Ethiopian food platter
            rightImage="/images/VirtualImage2.png" // Delivery rider in Addis
            mobileImage="/images/VirtualImageMobile.png" // Another appetizing platter for mobile
            badgeText="Powering 50+ delivery-only kitchens in Ethiopia"
            titleMain="Virtual Kitchen"
            titleHighlight="Fully Optimized"
            subtitle="Direct Orders → Efficient Prep → Doorstep Delivery\nNo commissions • Multi-brand • Maximum profit"
            primaryCTAText="Join"
            primaryCTAHref="https://app.menuroom.et/signup"
            accentColor="amber" // Keeps the warm Ethiopian theme
            showTrustLine={true}
          />
        </div>
      </section>

      {/* Updated WhyChooseUs with virtual kitchen specific features */}
      <WhyChooseUsSection features={virtualKitchenFeatures} />

      <section className="bg-white sm:py-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-0">
          <SectionHeader
            badge="The Ultimate Tool for Delivery-Only Kitchens"
            title={
              <>
                One Platform →{' '}
                <span className="text-amber-700 font-merienda">Total Delivery Control</span>
                <br />
                From Kitfo to Customer Doorstep.
              </>
            }
          >
            Digital Menu • Online Ordering • Delivery Management • Multi-Brand • Inventory • POS
            <br />
            <span className="font-bold text-amber-700">One system. Zero hassle. Maximum profit.</span>
          </SectionHeader>

          {/* Digital Menu & Online Ordering */}
          <FeatureHighlight
            badge="Beautiful Digital Menu & Ordering"
            title={
              <>
                Customers Order Directly Online
                <br />
                <span className="text-amber-700 font-merienda">No Aggregator Fees • Full Control</span>
              </>
            }
            description="Your own branded online menu with mouthwatering photos of tibs, shiro, injera combos. Customers order via your website or app link — you keep 100% of the profit."
            imageSrc="https://tb-static.uber.com/prod/image-proc/processed_images/079e4e9d3224000c34d9d87f03debcf2/885ba8620d45ab36746a0e8c7b85ee66.jpeg"
            imageAlt="Customer browsing Ethiopian delivery menu on phone"
            learnMoreLink="/features/menu"
            features={[
              {
                icon: Smartphone,
                title: 'Branded Online Menu',
                desc: 'Live updates — add today’s special doro wot in seconds.',
              },
              {
                icon: Package,
                title: 'Customizable Options',
                desc: 'Extra berbere? Mild for kids? Add-ons like ayib or extra injera.',
              },
              {
                icon: DollarSign,
                title: 'All Ethiopian Payments',
                desc: 'Telebirr, CBE Birr, HelloCash, Amole, card, and cash on delivery.',
              },
              {
                icon: QrCode,
                title: 'Shareable QR/Link',
                desc: 'Post on social media or WhatsApp groups for direct orders.',
              },
            ]}
          />

          {/* Faster Prep & Delivery Coordination */}
          <FeatureHighlight
            reverse
            zebra
            badge="Handle Peak Hours Like a Pro"
            title={
              <>
                Prepare & Deliver 2× Faster
                <br />
                <span className="text-amber-700 font-merienda">Without Extra Staff</span>
              </>
            }
            description="Orders flow straight to your kitchen screen/tablet. Batch similar orders, track rider assignment, and notify customers when kitfo is on the way."
            imageSrc="https://www.globaltimes.cn/Portals/0/attachment/2022/2022-07-26/424a0fa8-a2b9-4222-b607-7559ca0e63f9.jpeg"
            imageAlt="Delivery rider picking up order in Addis Ababa"
            ctaText="See How Delivery Kitchens Scale"
            ctaLink="/virtual-rush"
            features={[
              {
                icon: Zap,
                title: 'Orders to Kitchen Display Instantly',
                desc: 'New tibs order pops up with customer notes and ETA.',
              },
              {
                icon: Timer,
                title: 'Prep Timer & Batching',
                desc: 'Group multiple shiro orders for efficient cooking.',
              },
              {
                icon: Truck,
                title: 'Rider Management',
                desc: 'Assign to your riders or integrate with platforms like Deliver Addis, beU.',
              },
              {
                icon: BellRing,
                title: 'Customer Notifications',
                desc: 'Auto SMS: “Your injera combo is out for delivery!”',
              },
            ]}
          />

          {/* Multi-Brand & Virtual Brands */}
          <FeatureHighlight
            badge="Run Multiple Brands from One Kitchen"
            title={
              <>
                Launch Virtual Brands Easily
                <br />
                <span className="text-amber-700 font-merienda">
                  Ethiopian Classics + Burger/Pizza Side Hustle
                </span>
              </>
            }
            description="One kitchen, multiple menus. Sell traditional kitfo under your main brand, and fast burgers under a virtual brand — all from the same space."
            imageSrc="https://aviaanaccounting.com/wp-content/uploads/2025/08/image-198.png"
            imageAlt="Modern cloud kitchen running multiple brands"
            learnMoreLink="/features/multi-brand"
            features={[
              {
                icon: Layers,
                title: 'Separate Menus & Reports',
                desc: 'Track which brand sells most tibs vs. burgers.',
              },
              {
                icon: Store,
                title: 'Brand-Specific Customizations',
                desc: 'Hide injera options on your pizza virtual brand.',
              },
              {
                icon: Wifi,
                title: 'Works Offline',
                desc: 'Internet down? Keep preparing. Sync orders later.',
              },
              {
                icon: DollarSign,
                title: 'Combined or Separate Sales',
                desc: 'See total revenue or per-brand performance.',
              },
            ]}
          />

          {/* Inventory & Waste Reduction */}
          <FeatureHighlight
            reverse
            zebra
            badge="Smarter Inventory = Higher Profit"
            title={
              <>
                Never Run Out of Teff or Berbere
                <br />
                <span className="text-amber-700 font-merienda">Auto Low-Stock Alerts</span>
              </>
            }
            description="Track ingredients across all brands. System predicts needs based on sales and alerts you before you run out mid-rush."
            imageSrc="https://cdn.prod.website-files.com/67bdfd7ed46e178f2d23b4d6/683912790c5cd7c75c33fcf4_kds%20system%20for%20restaurants.webp"
            imageAlt="Kitchen display dashboard in virtual kitchen"
            learnMoreLink="/features/inventory"
            features={[
              {
                icon: Package,
                title: 'Real-Time Stock Tracking',
                desc: 'Deduct ingredients automatically per order.',
              },
              {
                icon: Users,
                title: 'Waste Reduction Insights',
                desc: 'See what’s expiring soon and suggest specials.',
              },
              {
                icon: ArrowRightLeft,
                title: 'Multi-Brand Shared Inventory',
                desc: 'Onions used for both tibs and burger brands.',
              },
            ]}
          />

          {/* Simple POS for Prep & Pickup */}
          <FeatureHighlight
            badge="Kitchen POS Built for Delivery"
            title={
              <>
                Fast Order Management on Tablet
                <br />
                <span className="text-amber-700 font-merienda">No Expensive Hardware Needed</span>
              </>
            }
            description="Use any Android tablet/phone as full kitchen POS. Accept direct orders, manage prep status, and handle rider pickups — all offline."
            imageSrc="https://hotelandcatering.com/wp-content/uploads/2023/03/talabat-Kitchen-interiors-scaled.jpg"
            imageAlt="Chef using tablet in delivery-only cloud kitchen"
            learnMoreLink="/features/pos"
            features={[
              {
                icon: Smartphone,
                title: 'Any Device = Kitchen Station',
                desc: 'Cheap Android tablets work perfectly.',
              },
              {
                icon: Zap,
                title: 'Offline Mode',
                desc: 'No internet? Keep accepting and preparing orders.',
              },
              {
                icon: Truck,
                title: 'Rider Pickup Ready',
                desc: 'Mark order ready → notify rider instantly.',
              },
            ]}
          />
        </div>

        {/* Onboarding Flow */}
        <SectionHeader
          badge="Launch Your Delivery Kitchen Fast"
          title={
            <>
              Go Live & Start Selling in{' '}
              <span className="text-amber-700 font-merienda">Under 10 Minutes</span>
              <br />
              No Setup Fee • No Training • Works Offline
            </>
          }
        >
          <div className="mt-10">
            <ReusableFlow />
          </div>
        </SectionHeader>

        {/* Final CTA – Delivery Style */}
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
              Ready to Dominate Delivery in Addis?
            </h2>

            <p className="mt-6 text-xl lg:text-2xl text-amber-100 max-w-3xl mx-auto font-light">
              Join dozens of virtual kitchens in Bole, Piassa, Merkato & beyond
              <br className="hidden sm:block" />
              delivering fresh kitfo, tibs, and shiro — with higher margins and zero dine-in hassle.
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

export default VirtualKitchen;
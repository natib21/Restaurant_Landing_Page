// pages/Bakery.jsx – Bakery / Pastry Shop Focused Version (Ethiopian Bakeries & Pastries)
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

// Import your bakeryFeatures variant (create in variants folder)
import { bakeryFeatures } from '../component/Home/WhyChooseUs/variants/bakery';

const Bakery = () => {
  return (
    <>
      <section className="bg-white sm:py-0 lg:py-0">
        <div className="mx-auto max-w-7xl">
          {/* Customized Hero for Bakery – Warm orange/amber theme for fresh-baked feel */}
          <RestaurantHero
            leftImage="/images/Bakery.png" // Fresh ambasha/himbasha & pastries display
            rightImage="/images/Bakery1.png" // Modern bakery counter with cakes
            mobileImage="/images/Bakery2.png" // Cozy bakery interior or bread basket
            badgeText="Loved by 70+ bakeries & pastry shops in Addis Ababa"
            titleMain="Your Bakery,"
            titleHighlight="Fresh & Digital"
            subtitle="QR Menu → Instant Orders → Fresh Bread All Day\nAmbasha • Cakes • Kita • Pastries • Coffee"
            primaryCTAText="Join"
            primaryCTAHref="https://app.menuroom.et/signup"
            accentColor="orange" // Warm, appetizing orange for bakery freshness (or 'amber')
            showTrustLine={true}
          />
        </div>
      </section>

      {/* Why Choose Us – Bakery specific features */}
      <WhyChooseUsSection features={bakeryFeatures} />

      <section className="bg-white sm:py-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-0">
          <SectionHeader
            badge="The Perfect Tool for Modern Bakeries"
            title={
              <>
                One Platform →{' '}
                <span className="text-orange-700 font-merienda">Total Bakery Control</span>
                <br />
                From Ambasha to Afternoon Cake.
              </>
            }
          >
            Digital Menu • QR Ordering • Pre-Orders • Inventory • Counter POS
            <br />
            <span className="font-bold text-orange-700">One system. Fresh sales. More smiles.</span>
          </SectionHeader>

          {/* Digital Menu & QR Ordering */}
          <FeatureHighlight
            badge="Beautiful Digital Menus"
            title={
              <>
                Customers Browse & Order Fresh Goods
                <br />
                <span className="text-orange-700 font-merienda">No Paper • Live Updates • Photos</span>
              </>
            }
            description="Show mouthwatering photos of today's fresh ambasha, kita, cakes, donuts, and macchiato combos. Customers scan QR at counter or table and order instantly."
            imageSrc="/images/bakery-display.webp" // Use generated or real image
            imageAlt="Fresh Ethiopian bakery display with ambasha and pastries"
            learnMoreLink="/features/menu"
            features={[
              {
                icon: QrCode,
                title: 'Counter & Table QR',
                desc: "QR for queue or seats. Update today's specials in seconds.",
              },
              {
                icon: Coffee,
                title: 'Highlight Fresh Items',
                desc: 'Mark "Just Baked!" on ambasha or cake of the day.',
              },
              {
                icon: Smartphone,
                title: 'Order & Pay Instantly',
                desc: 'Telebirr, CBE Birr, HelloCash, card, or cash.',
              },
              {
                icon: Timer,
                title: 'Ready Notification',
                desc: 'Buzz when custom cake or bread order is ready.',
              },
            ]}
          />

          {/* Faster Service & Queue Management */}
          <FeatureHighlight
            reverse
            zebra
            badge="Handle Morning Rush Smoothly"
            title={
              <>
                Serve 2× More Customers
                <br />
                <span className="text-orange-700 font-merienda">Without Extra Staff</span>
              </>
            }
            description="Morning bunna & bread rush? Customers order from phone while in line → you focus on baking and packing."
            imageSrc="/images/bakery-counter.webp"
            imageAlt="Busy Ethiopian bakery counter with fresh bread"
            ctaText="See How Bakeries Beat the Rush"
            ctaLink="/bakery-rush"
            features={[
              {
                icon: Zap,
                title: 'Orders to Counter Screen',
                desc: 'New kita order pops up instantly with customer name.',
              },
              {
                icon: Users,
                title: 'Pre-Order Pickup',
                desc: 'Customers order birthday cake online → ready at chosen time.',
              },
              {
                icon: BellRing,
                title: 'Call Customer Button',
                desc: 'Order ready? Notify customer phone instantly.',
              },
              {
                icon: Package,
                title: 'Custom Cake Orders',
                desc: 'Size, flavor, message — all customizable online.',
              },
            ]}
          />

          {/* Multi-Branch Bakeries */}
          <FeatureHighlight
            badge="Perfect for Bakery Chains"
            title={
              <>
                Manage All Branches Easily
                <br />
                <span className="text-orange-700 font-merienda">From One Fresh Dashboard</span>
              </>
            }
            description="Bole, Piassa, Merkato… Update cake prices or specials once — all locations updated. Track which branch sells most ambasha."
            imageSrc="/images/multi-branch-bakery.webp"
            imageAlt="Bakery owner checking sales dashboard"
            learnMoreLink="/features/multi-branch"
            features={[
              {
                icon: Store,
                title: 'Central Menu & Pricing',
                desc: 'Change donut price once → everywhere updated.',
              },
              {
                icon: Layers,
                title: 'Branch-Specific Items',
                desc: 'Only CMC branch has vegan options? Easy.',
              },
              {
                icon: Wifi,
                title: 'Works Offline',
                desc: 'Internet down? Keep selling bread.',
              },
              {
                icon: DollarSign,
                title: 'Sales per Branch',
                desc: 'See top-selling items by location.',
              },
            ]}
          />

          {/* Inventory for Ingredients */}
          <FeatureHighlight
            reverse
            zebra
            badge="Never Run Out of Flour or Sugar"
            title={
              <>
                Smart Inventory Alerts
                <br />
                <span className="text-orange-700 font-merienda">Bake More • Waste Less</span>
              </>
            }
            description="Track flour, yeast, sugar, eggs across batches. Get alerts before you run low during peak hours."
            imageSrc="/images/bakery-inventory.webp"
            imageAlt="Baker checking inventory on tablet"
            learnMoreLink="/features/inventory"
            features={[
              {
                icon: Package,
                title: 'Auto Ingredient Deduction',
                desc: 'Per bread or cake sold.',
              },
              {
                icon: Timer,
                title: 'Expiry Tracking',
                desc: 'Alert for soon-expiring cream or fruits.',
              },
              {
                icon: DollarSign,
                title: 'Cost Insights',
                desc: 'Know exact cost per ambasha loaf.',
              },
            ]}
          />

          {/* Simple Counter POS */}
          <FeatureHighlight
            badge="Fast Counter POS"
            title={
              <>
                Quick Checkout on Phone/Tablet
                <br />
                <span className="text-orange-700 font-merienda">No Expensive Machines</span>
              </>
            }
            description="Use any Android device as full POS. Scan, pack, pay — all offline during power cuts."
            imageSrc="/images/bakery-pos.webp"
            imageAlt="Baker using tablet POS in shop"
            learnMoreLink="/features/pos"
            features={[
              {
                icon: Smartphone,
                title: 'Any Device Works',
                desc: 'Cheap tablet = professional POS.',
              },
              {
                icon: Zap,
                title: 'Offline Mode',
                desc: 'Keep selling fresh bread anytime.',
              },
              {
                icon: Users,
                title: 'Loyalty Built-In',
                desc: 'Buy 10 coffee → free pastry.',
              },
            ]}
          />
        </div>

        {/* Onboarding Flow */}
        <SectionHeader
          badge="Go Digital Before Your Next Batch"
          title={
            <>
              Your Bakery Goes Digital in{' '}
              <span className="text-orange-700 font-merienda">Under 10 Minutes</span>
              <br />
              No Training • No Setup Fee • Works Offline
            </>
          }
        >
          <div className="mt-10">
            <ReusableFlow />
          </div>
        </SectionHeader>

        {/* Final CTA – Bakery Style */}
        <section
          className="relative py-24 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(194, 65, 12, 0.95), rgba(180, 50, 10, 0.9)),
              url(${abstractBackground})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-merienda leading-tight">
              Ready to Sell More Fresh Bread?
            </h2>

            <p className="mt-6 text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto font-light">
              Join popular bakeries in Bole, 4 Kilo, Mexico & beyond
              <br className="hidden sm:block" />
              serving fresh ambasha, cakes, and pastries with digital ease.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://app.menuroom.et/signup"
                className="group inline-flex items-center gap-3 rounded-xl bg-orange-50 px-10 py-5 text-2xl font-bold text-orange-900 shadow-2xl hover:shadow-orange-400/50 transform hover:scale-105 transition-all duration-300"
              >
                Start Free 14-Day Trial
                <span className="transform transition-transform group-hover:translate-x-2">→</span>
              </a>

              <Link
                to="/pricing"
                className="text-orange-100 text-lg font-semibold hover:text-white transition underline"
              >
                See Pricing →
              </Link>
            </div>

            <p className="mt-10 text-orange-200 text-sm">
              ✓ No credit card • ✓ Cancel anytime • ✓ We help you set up for free
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Bakery;
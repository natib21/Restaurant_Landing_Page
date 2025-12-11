// pages/features/MultiBranch.jsx
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import ReusableFlow from '../component/common/ReusableFlow';
import {
  Store,
  Layers,
  Package,
  Zap,
  Globe,
  Users,
  ArrowRightLeft,
  Shield,
  Smartphone,
  BellRing,
  QrCode,
} from 'lucide-react';

const MultiBranch = () => {
  return (
    <>
      {/* HERO - Using your REAL HeroSection component correctly */}
      <section className="bg-white py-16 sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl px-6">
          <HeroSection
            badge="Multi-Branch & Franchise Ready"
            heading={
              <>
                Manage All Your Branches
                <br />
                <span className="text-blue-900 font-merienda">From One Dashboard</span>
              </>
            }
            description="Control 2, 10, or 100+ locations with ease. Update menus, prices, staff, and track sales across Addis Ababa, regions, or franchise networks — instantly and securely."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="Book Demo for Chains"
            ctaSecondaryLink="/contact"
            stats={[
              { value: '50+', label: 'Restaurants Using Mesob' },
              { value: '200+', label: 'Branches Live' },
              { value: '4.9/5', label: 'Owner Satisfaction' },
            ]}
          />
        </div>
      </section>

      {/* Why Choose Us - Trust Builder (Same as Homepage) */}
      <WhyChooseUsSection />

      {/* Intro Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Built for Growing Ethiopian Restaurant Chains"
            title={
              <>
                One System. Total Control.
                <br />
                <span className="text-blue-900 font-merienda">No Matter How Many Branches</span>
              </>
            }
          >
            From family-owned cafes in Bole & Piassa to hotel F&B chains and full franchise networks
            across Ethiopia — Mesob grows with you.
          </SectionHeader>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-20">
          <FeatureHighlight
            badge="Centralized Control"
            title={
              <>
                One Master Menu
                <br />
                <span className="text-blue-900 font-merienda">Unlimited Local Variations</span>
              </>
            }
            description="Update your core menu once. Push to all branches instantly — or let each location customize prices, hide items, or launch local specials."
            imageSrc="/images/multi-branch-central-control.webp"
            imageAlt="Master menu control across branches"
            features={[
              {
                icon: Globe,
                title: 'Global Menu Library',
                desc: 'Add items once — available everywhere.',
              },
              { icon: Store, title: 'Selective Push', desc: 'Choose which branches get updates.' },
              {
                icon: Layers,
                title: 'Branch Customization',
                desc: 'Local pricing, combos, and availability.',
              },
              { icon: Zap, title: 'Instant Sync', desc: 'Changes live in seconds, not days.' },
            ]}
          />

          <FeatureHighlight
            reverse
            zebra
            badge="Branch Independence"
            title={
              <>
                Each Branch Runs Independently
                <br />
                <span className="text-blue-900 font-merienda">But You’re Always in Charge</span>
              </>
            }
            description="Give branch managers access to tweak their menu and staff — while you retain full override from headquarters."
            imageSrc="/images/multi-branch-local-control.webp"
            imageAlt="Branch manager customizing local menu"
            features={[
              {
                icon: Package,
                title: 'Location-Based Pricing',
                desc: 'Adjust prices based on rent, demand, or competition.',
              },
              {
                icon: Shield,
                title: 'Role-Based Permissions',
                desc: 'Owner sees all. Managers see only their branch.',
              },
              {
                icon: Users,
                title: 'Per-Branch Staff',
                desc: 'Add waiters, cashiers, chefs per location.',
              },
              {
                icon: QrCode,
                title: 'Unique QR Menus',
                desc: 'Each branch has its own digital menu link.',
              },
            ]}
          />

          <FeatureHighlight
            badge="Real-Time Insights"
            title={
              <>
                See Every Branch, Every Sale
                <br />
                <span className="text-blue-900 font-merienda">In One Live Dashboard</span>
              </>
            }
            description="Compare performance, track best-sellers, spot issues early — all updated in real-time, from your phone or laptop."
            imageSrc="/images/multi-branch-analytics-dashboard.webp"
            imageAlt="Live multi-branch sales dashboard"
            features={[
              {
                icon: Store,
                title: 'Branch Comparison',
                desc: 'See which location sells more kitfo or coffee.',
              },
              {
                icon: ArrowRightLeft,
                title: 'Consolidated Reports',
                desc: 'Total revenue + individual branch breakdowns.',
              },
              {
                icon: Smartphone,
                title: 'Mobile Access',
                desc: 'Check sales while visiting any branch.',
              },
              {
                icon: BellRing,
                title: 'Smart Alerts',
                desc: 'Low stock, slow service, or unusual drops — notified instantly.',
              },
            ]}
          />

          <FeatureHighlight
            reverse
            zebra
            badge="Franchise & Enterprise Ready"
            title={
              <>
                Built for Chains, Hotels & Franchises
                <br />
                <span className="text-blue-900 font-merienda">Across Ethiopia & Beyond</span>
              </>
            }
            description="Launch new branches in hours. Enforce brand standards. Scale without chaos."
            imageSrc="/images/franchise-multi-branch.webp"
            imageAlt="Franchise network using Mesob"
            ctaText="Talk to Enterprise Team"
            ctaLink="/contact"
            features={[
              {
                icon: Shield,
                title: 'Locked Core Items',
                desc: 'Franchisees can’t change your signature dishes.',
              },
              {
                icon: Package,
                title: 'Franchisee Portal',
                desc: 'Limited access for partners, full control for you.',
              },
              {
                icon: Globe,
                title: 'Nationwide Support',
                desc: 'Add branches in Hawassa, Bahir Dar, Mekelle...',
              },
              {
                icon: Zap,
                title: 'Zero-Downtime Launch',
                desc: 'New branch live in under 10 minutes.',
              },
            ]}
          />
        </div>
      </section>

      {/* Quick Onboarding */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Add a New Branch in Minutes"
            title={
              <>
                From 1 to 100 Branches
                <br />
                <span className="text-blue-900 font-merienda">No Training Needed</span>
              </>
            }
          >
            <div className="mt-12">
              <ReusableFlow
                steps={[
                  'Create your master menu once',
                  'Click “Add Branch” → enter name & address',
                  'Customize pricing & generate QR codes',
                  'Go live — start taking orders immediately!',
                ]}
              />
            </div>
          </SectionHeader>
        </div>
      </section>

      {/* Final CTA - Same as Homepage */}
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
            Ready to Unify All Your Branches?
          </h2>

          <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto font-merienda">
            Join the smartest restaurant owners in Ethiopia.
            <br className="hidden sm:block" />
            One platform. All locations. Total peace of mind.
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
              to="/contact"
              className="inline-flex items-center gap-2 text-white text-lg font-semibold hover:text-blue-200 transition"
            >
              Book a Demo for Chains
              <span>→</span>
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

export default MultiBranch;

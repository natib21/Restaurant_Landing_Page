// pages/Hotel.jsx – Luxury Hotel & Resort Version
import { Link } from 'react-router-dom';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import ReusableFlow from '../component/common/ReusableFlow';
import RestaurantHero from '../component/Home/Hero/RestaurantHero'; // renamed to CafeHero → now use same component
import abstractBackground from '/images/image_1_1765301758645.jpg';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import { hotelFeatures } from '../component/Home/WhyChooseUs/variants/hotel';
import {
  Coffee,
  BedDouble,
  ConciergeBell,
  Smartphone,
  Zap,
  Store,
  Users,
  Wifi,
  DollarSign,
  BellRing,
  Utensils,
  Globe,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

const HotelResort = () => {
  return (
    <>
      <section className="bg-white sm:py-0 lg:py-0">
        <div className="mx-auto max-w-7xl ">
          <RestaurantHero
            leftImage="/images/hotel_res.png"
            rightImage="/images/hotel_res1.png"
            mobileImage="/images/hotel_res.png"
            badgeText="Trusted by 50+ Hotels & Resorts in Ethiopia"
            titleMain="Elevate Your"
            titleHighlight="Guest Experience"
            subtitle="In-room dining • Poolside orders • Spa bookings • Events\nAll from their phone. Zero interruptions. More revenue."
            primaryCTAText="Join"
            accentColor="teal" // Luxury teal-gold vibe
          />
        </div>
      </section>
      <WhyChooseUsSection features={hotelFeatures} />
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="The Complete Digital Guest Experience Platform"
            title={
              <>
                One Platform →{' '}
                <span className="text-teal-700 font-merienda">Total Hotel Control</span>
                <br />
                From Lobby to Last Bite.
              </>
            }
          >
            Room Service • Restaurant • Bar • Spa • Events • Housekeeping Requests
            <br />
            <span className="font-bold text-teal-700">
              One system. Five-star service. Higher revenue.
            </span>
          </SectionHeader>

          {/* In-Room & Poolside Ordering */}
          <FeatureHighlight
            badge="In-Room & Poolside Ordering"
            title={
              <>
                Guests Order From Anywhere
                <br />
                <span className="text-teal-700 font-merienda">Room • Pool • Beach • Spa</span>
              </>
            }
            description="No phone calls. No missed orders. Guests scan QR on TV, table, or sunbed → order food, drinks, towels, spa — delivered in minutes."
            imageSrc="/images/hotel-room-qr.jpg"
            imageAlt="Guest ordering room service via QR"
            learnMoreLink="/features/in-room"
            features={[
              {
                icon: BedDouble,
                title: 'TV & Table QR',
                desc: 'Every room has personalized QR menu.',
              },
              {
                icon: Coffee,
                title: '24/7 Room Service',
                desc: 'Order breakfast at 3 AM — kitchen gets it instantly.',
              },
              {
                icon: Smartphone,
                title: 'Pay with Mobile Money',
                desc: 'Telebirr, CBE Birr, card — charged to room or paid directly.',
              },
              {
                icon: Zap,
                title: 'Real-Time Kitchen Sync',
                desc: 'Order appears on kitchen screen instantly.',
              },
            ]}
          />

          {/* Restaurant & Multi-Outlet Management */}
          <FeatureHighlight
            reverse
            zebra
            badge="Run All Outlets Like Clockwork"
            title={
              <>
                One Menu, Multiple Outlets
                <br />
                <span className="text-teal-700 font-merienda">
                  Restaurant • Bar • Pool • Events
                </span>
              </>
            }
            description="Update today’s lobster price once — appears in main restaurant, rooftop bar, and beach club instantly."
            imageSrc="/images/hotel-multi-outlet.jpg"
            features={[
              {
                icon: Store,
                title: 'Central + Outlet Control',
                desc: 'Different menus, prices, availability per outlet.',
              },
              {
                icon: Utensils,
                title: 'Event & Banquet Menus',
                desc: 'Wedding? Conference? Custom menu in seconds.',
              },
              {
                icon: Globe,
                title: 'Multi-Language Menus',
                desc: 'English • Amharic • French • Arabic — auto-switch.',
              },
              { icon: Wifi, title: 'Works Offline', desc: 'Internet down? Guests keep ordering.' },
            ]}
          />

          {/* Guest Requests & Housekeeping */}
          <FeatureHighlight
            badge="Digital Guest Requests"
            title={
              <>
                From “Extra Towel” to “Late Checkout”
                <br />
                <span className="text-teal-700 font-merienda">All Handled Digitally</span>
              </>
            }
            description="Guests request anything via QR — housekeeping, maintenance, concierge — routed to the right department instantly."
            imageSrc="/images/hotel-guest-request.jpg"
            features={[
              {
                icon: ConciergeBell,
                title: '100+ Request Types',
                desc: 'Towel, pillow, iron, airport transfer...',
              },
              {
                icon: BellRing,
                title: 'Instant Staff Notification',
                desc: 'Housekeeping sees “Room 512 needs shampoo” immediately.',
              },
              {
                icon: ShieldCheck,
                title: 'Track & Close Requests',
                desc: 'Manager sees all open/closed requests in real-time.',
              },
            ]}
          />

          {/* Revenue & Upselling */}
          <FeatureHighlight
            reverse
            zebra
            badge="Turn Every Order into Extra Revenue"
            title={
              <>
                Smart Upselling Built-In
                <br />
                <span className="text-teal-700 font-merienda">+35% Average Check Size</span>
              </>
            }
            description="Suggest dessert when they order main course. Promote spa package when they book massage. All automatic."
            imageSrc="/images/hotel-upsell.jpg"
            features={[
              {
                icon: DollarSign,
                title: 'Auto-Suggestions',
                desc: '“Add fries?” • “Upgrade to ocean view?”',
              },
              {
                icon: Users,
                title: 'VIP Guest Recognition',
                desc: 'Know returning guests → offer free dessert.',
              },
              {
                icon: Zap,
                title: 'Dynamic Pricing',
                desc: 'Peak season? Happy hour? Prices adjust automatically.',
              },
            ]}
          />
        </div>

        {/* Onboarding */}
        <SectionHeader
          badge="Go Live Before Your Next Guest Arrives"
          title={
            <>
              Your Hotel Goes Digital in{' '}
              <span className="text-teal-700 font-merienda">Under 30 Minutes</span>
              <br />
              No Training Needed • Free Onboarding • Works Offline
            </>
          }
        >
          <div className="mt-10">
            <ReusableFlow />
          </div>
        </SectionHeader>

        {/* Final CTA – Luxury Hotel Style */}
        <section
          className="relative py-32 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(6, 78, 99, 0.97), rgba(19, 38, 66, 0.95)),
              url(${abstractBackground})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-merienda leading-tight">
              Ready for Five-Star Digital?
            </h2>

            <p className="mt-8 text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto font-light">
              Join Sheraton Addis, Haile Resort, Kuriftu, Golden Tulip & 50+ others
              <br className="hidden sm:block" />
              who transformed guest experience and increased F&B revenue by 40%+
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://app.menuroom.et/signup"
                className="group inline-flex items-center gap-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 px-12 py-6 text-2xl font-bold text-white shadow-2xl hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Start Free 14-Day Trial
                <span className="transform transition-transform group-hover:translate-x-3">
                  {<ArrowRight/>}
                </span>
              </a>

              <Link
                to="/pricing"
                className="text-teal-100 text-lg font-semibold hover:text-white transition underline underline-offset-4"
              >
                View Hotel Pricing →
              </Link>
            </div>

            <p className="mt-10 text-teal-200 text-sm font-medium">
              Free onboarding • Dedicated account manager • 24/7 support
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default HotelResort;

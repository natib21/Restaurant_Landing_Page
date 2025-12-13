// pages/FastFood.jsx – Fast Food Chain Version (Ethiopia)
import { Link } from 'react-router-dom';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import ReusableFlow from '../component/common/ReusableFlow';
import RestaurantHero from '../component/Home/Hero/RestaurantHero';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import { fastFoodFeatures } from '../component/Home/WhyChooseUs/variants/fastFood';

import {
  QrCode,
  Zap,
  Smartphone,
  Store,
  Users,
  DollarSign,
  Clock,
  ShoppingBag,
  Wifi,
  ArrowRight,
  Timer,
  Package,
} from 'lucide-react';

const FastFood = () => {
  return (
    <>
      {/* HERO – Fast Food Energy */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <RestaurantHero
            leftImage="/images/fastFood1.png"
            rightImage="/images/fastFood2.png"
            mobileImage="/images/fastFoodMobile.png"
            badgeText="Used by 200+ fast food outlets in Ethiopia"
            titleMain="Faster Orders,"
            titleHighlight="Happier Customers"
            subtitle="Customers scan → order & pay from phone → food ready in minutes.\nNo queues. No mistakes. More sales."
            primaryCTAText="Join"
            accentColor="red" // Classic fast-food red
          />
        </div>
      </section>

      <WhyChooseUsSection features={fastFoodFeatures} />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="The #1 System for Fast Food in Ethiopia"
            title={
              <>
                One Platform → <span className="text-red-600 font-merienda">Total Control</span>
                <br />
                From Order to Delivery.
              </>
            }
          >
            QR Ordering • Kitchen Display • Multi-Branch • Delivery • POS
            <br />
            <span className="font-bold text-red-600">Faster service. Bigger profits.</span>
          </SectionHeader>

          {/* QR Ordering & Speed */}
          <FeatureHighlight
            badge="Lightning-Fast Ordering"
            title={
              <>
                Customers Order From Phone
                <br />
                <span className="text-red-600 font-merienda">Skip the Queue Completely</span>
              </>
            }
            description="Long line? No problem. Customers scan QR on table, counter, or poster → order burger, shawarma, pizza, juice → pay instantly → food ready faster."
            imageSrc="/images/fastfood-qr.jpg"
            imageAlt="Customer scanning QR at fast food counter"
            learnMoreLink="/features/qr"
            features={[
              { icon: QrCode, title: 'QR on Table & Counter', desc: 'Scan → menu opens instantly with photos.' },
              { icon: Smartphone, title: 'Order & Pay in 30 Seconds', desc: 'Telebirr, CBE Birr, HelloCash, cash.' },
              { icon: Timer, title: 'Ready Notification', desc: 'Buzz when food is ready — no shouting names.' },
              { icon: Zap, title: 'Orders Fly to Kitchen Screen', desc: 'No paper tickets lost. No mistakes.' },
            ]}
          />

          {/* Kitchen & Speed */}
          <FeatureHighlight
            reverse
            zebra
            badge="Kitchen Runs Like Clockwork"
            title={
              <>
                Serve 3× Faster
                <br />
                <span className="text-red-600 font-merienda">During Peak Hours</span>
              </>
            }
            description="Rush hour chaos gone. Orders pop up on kitchen screen with timer → staff focus on cooking, not writing."
            imageSrc="/images/fastfood-kitchen.jpg"
            features={[
              { icon: Zap, title: 'Kitchen Display System', desc: 'New orders appear instantly with countdown.' },
              { icon: Package, title: 'Combo & Upsell Auto', desc: '“Add fries & drink?” → +40 % check size.' },
              { icon: Clock, title: 'Track Prep Time', desc: 'Know exactly how long each burger takes.' },
              { icon: ShoppingBag, title: 'Delivery & Takeaway Ready', desc: 'Mark “Ready” → customer notified.' },
            ]}
          />

          {/* Multi-Branch Control */}
          <FeatureHighlight
            badge="Perfect for Fast Food Chains"
            title={
              <>
                Control All Branches
                <br />
                <span className="text-red-600 font-merienda">From One Dashboard</span>
              </>
            }
            description="Bole • Piassa • Merkato • Hawassa • Bahir Dar… Update burger price once → all branches updated instantly."
            imageSrc="/images/fastfood-branches.jpg"
            features={[
              { icon: Store, title: 'Central Menu Control', desc: 'Change price once → live everywhere.' },
              { icon: Users, title: 'Branch-Specific Promos', desc: 'Only CMC branch has 2-for-1 shawarma today.' },
              { icon: DollarSign, title: 'Daily Sales Per Branch', desc: 'See which location sold most today.' },
              { icon: Wifi, title: 'Works Offline', desc: 'Internet down? Keep selling.' },
            ]}
          />

          {/* Simple POS */}
          <FeatureHighlight
            reverse
            zebra
            badge="Counter POS That Never Slows Down"
            title={
              <>
                Fast Checkout on Any Phone
                <br />
                <span className="text-red-600 font-merienda">No Expensive Machines</span>
              </>
            }
            description="Use any Android phone/tablet as full POS. Take cash, mobile money, split bills — lightning fast."
            imageSrc="/images/fastfood-pos.jpg"
            features={[
              { icon: Smartphone, title: 'Any Android = POS', desc: 'Cheap & reliable.' },
              { icon: Zap, title: 'Works Offline', desc: 'Power out? Keep selling.' },
              { icon: DollarSign, title: 'All Payments', desc: 'Cash, Telebirr, CBE Birr, card.' },
            ]}
          />
        </div>

        {/* Onboarding */}
        <SectionHeader
          badge="Go Live Before Lunch Rush"
          title={
            <>
              Your Outlet Goes Digital in{' '}
              <span className="text-red-600 font-merienda">Under 10 Minutes</span>
              <br />
              No Training • No Setup Fee • Works Offline
            </>
          }
        >
          <div className="mt-10">
            <ReusableFlow />
          </div>
        </SectionHeader>

        {/* Final CTA – Fast Food Style */}
        <section
          className="relative py-32 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(220, 38, 38, 0.95), rgba(185, 28, 28, 0.9)),
              url(${abstractBackground})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-merienda leading-tight">
              Ready to Serve Faster?
            </h2>

            <p className="mt-8 text-xl lg:text-2xl text-yellow-100 max-w-4xl mx-auto font-light">
              Join 200+ burger, shawarma, pizza & juice outlets in Addis, Dire Dawa, Hawassa & beyond
              <br className="hidden sm:block" />
              who cut waiting time in half and doubled sales.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://app.menuroom.et/signup"
                className="group inline-flex items-center gap-4 rounded-xl bg-yellow-400 px-12 py-6 text-2xl font-bold text-red-900 shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Start Free 14-Day Trial
                <span className="transform transition-transform group-hover:translate-x-3">
                  <ArrowRight />
                </span>
              </a>

              <Link
                to="/pricing"
                className="text-yellow-100 text-lg font-semibold hover:text-white transition underline underline-offset-4"
              >
                View Pricing →
              </Link>
            </div>

            <p className="mt-10 text-yellow-200 text-sm font-medium">
              No card needed • Cancel anytime • We help you set up free
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default FastFood;
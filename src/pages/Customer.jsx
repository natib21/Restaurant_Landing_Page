// src/pages/features/CustomerManagement.jsx
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import ReusableFlow from '../component/common/ReusableFlow';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import customer from '/images/customer.png';
import {
  Users,
  MessageCircle,
  Heart,
  TrendingUp,
  Star,
  Gift,
  Clock,
  Smartphone,
  Zap,
  FileText,
  BarChart3,
  UserCheck,
  Bell,
  ThumbsUp,
  Globe,
} from 'lucide-react';

// Why Choose Customer Management
const customerWhyChooseUs = [
  {
    title: 'Know Your Regulars',
    icon: UserCheck,
    desc: 'Identify your frequent visitors and their top spends instantly.',
  },
  {
    title: 'Chat Directly',
    icon: MessageCircle,
    desc: 'Connect via WhatsApp or in-app chat with any customer quickly.',
  },
  {
    title: 'Loyalty Points',
    icon: Gift,
    desc: 'Automatically reward repeat customers and keep them coming back.',
  },
  {
    title: 'Smart Reports',
    icon: BarChart3,
    desc: 'Track top customers, peak hours, and your best days effortlessly.',
  },
  {
    title: 'Feedback & Reviews',
    icon: ThumbsUp,
    desc: 'Collect ratings and comments easily to improve your service.',
  },
  {
    title: 'Order History',
    icon: FileText,
    desc: 'See exactly what each customer loves and personalize offers.',
  },
  {
    title: 'Birthday Offers',
    icon: Gift,
    desc: 'Automatically send gifts like free coffee or dessert on birthdays.',
  },
  {
    title: 'Push Notifications',
    icon: Bell,
    desc: 'Remind customers about special offers and promotions instantly.',
  },
];

export default function CustomerManagement() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white  sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl px-6">
          <HeroSection
            badge="Customer Management"
            heading={
              <>
                Know Your Customers
                <br />
                <span className="text-blue-900 font-merienda">Like Family</span>
              </>
            }
            description="Turn one-time visitors into loyal regulars. Track visits, chat directly, reward favorites, collect feedback — all in one beautiful dashboard."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="See Dashboard Demo"
            ctaSecondaryLink="https://menuroom.et/demo"
            stats={[
              { value: '300%', label: 'Loyalty Growth' },
              { value: '1:1', label: 'Personal Chat' },
              { value: '100%', label: 'Automated' },
              { value: '50+', label: 'Restaurants Using' },
            ]}
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUsSection features={customerWhyChooseUs} />

      {/* MAIN FEATURES */}
      <section className="sm:py-4 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-0">
          <SectionHeader
            badge="The Smartest Way to Build Customer Loyalty in Ethiopia"
            title={
              <>
                Stop Treating Customers
                <br />
                <span className="text-blue-900 font-merienda">Like Strangers</span>
              </>
            }
          >
            Know Names • Remember Orders • Reward Loyalty • Grow Repeat Business
          </SectionHeader>

          {/* Top Customers & Reports */}
          <FeatureHighlight
            reverse
            zebra
            badge="VIP Recognition"
            title={
              <>
                Know Who Your Best Customers Are
                <br />
                <span className="text-blue-900 font-merienda">By Name & Face</span>
              </>
            }
            description="Automatically track visits and spending. See your top 10 regulars, their favorite dishes, and when they last came."
            imageSrc="/images/customer-top-list.webp"
            imageAlt="Top customers dashboard"
            features={[
              { icon: TrendingUp, title: 'Top Spenders List', desc: 'See who loves you most' },
              { icon: Star, title: 'VIP Tags', desc: 'Mark your favorites automatically' },
              { icon: Heart, title: 'Favorite Items', desc: 'Know what they always order' },
              { icon: Clock, title: 'Visit Frequency', desc: 'Daily, weekly, monthly patterns' },
            ]}
          />

          {/* Direct Chat & WhatsApp */}
          <FeatureHighlight
            badge="Talk to Any Customer"
            title={
              <>
                Chat With Customers
                <br />
                <span className="text-blue-900 font-merienda">Like a Friend</span>
              </>
            }
            description="Click any customer → send WhatsApp message or in-app chat. Wish happy birthday, thank them, or offer a free dessert."
            imageSrc="/images/customer-chat.webp"
            imageAlt="Direct customer messaging"
            features={[
              { icon: MessageCircle, title: 'Direct WhatsApp', desc: 'One tap to message' },
              { icon: Smartphone, title: 'In-App Chat', desc: 'No phone number needed' },
              { icon: Gift, title: 'Send Offers', desc: 'Free item, discount, or thank you' },
              { icon: Bell, title: 'Auto Birthday Message', desc: 'Never forget again' },
            ]}
          />

          {/* Loyalty & Rewards */}
          <FeatureHighlight
            reverse
            zebra
            badge="Loyalty System"
            title={
              <>
                Reward Your Regulars
                <br />
                <span className="text-blue-900 font-merienda">They’ll Come Back Forever</span>
              </>
            }
            description="Automatic points for every visit or order. Customer redeems for free coffee, dessert, or discount. You set the rules."
            imageSrc="/images/customer-loyalty.webp"
            imageAlt="Loyalty points system"
            features={[
              { icon: Gift, title: 'Points System', desc: 'Earn on every order' },
              { icon: Star, title: 'Free Items', desc: 'Redeem for coffee, cake, etc.' },
              { icon: Zap, title: 'Fully Automatic', desc: 'No manual tracking' },
              { icon: Users, title: 'Tier Levels', desc: 'Bronze → Silver → Gold' },
            ]}
          />

          {/* Feedback & Reviews */}
          <FeatureHighlight
            badge="Feedback & Reviews"
            title={
              <>
                Hear What Customers Really Think
                <br />
                <span className="text-blue-900 font-merienda">And Improve Fast</span>
              </>
            }
            description="After every order, ask for rating + comment. See trends, fix issues, and showcase 5-star reviews on your site."
            imageSrc="/images/customer-feedback.webp"
            imageAlt="Customer feedback collection"
            features={[
              { icon: ThumbsUp, title: 'Quick Rating', desc: '1-tap feedback after order' },
              { icon: FileText, title: 'Written Reviews', desc: 'Collect detailed comments' },
              { icon: BarChart3, title: 'Feedback Reports', desc: 'What’s working, what’s not' },
              { icon: Globe, title: 'Show on Website', desc: 'Display best reviews publicly' },
            ]}
          />
        </div>

        {/* HOW IT WORKS */}
        <div className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              badge="Start Building Loyalty Today"
              title={
                <>
                  Turn Visitors into Regulars
                  <br />
                  <span className="text-blue-900 font-merienda">In Just 3 Simple Steps</span>
                </>
              }
            />
            <div className="mt-12 max-w-4xl mx-auto">
              <ReusableFlow />
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section
          className="relative py-24 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(30, 64, 175, 0.95), rgba(15, 23, 42, 0.95)),
              url(${customer})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30" />

          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-merienda leading-tight">
              Your Best Customers Deserve Better
            </h2>
            <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join 50+ smart restaurants using Menuroom to know, reward, and grow their loyal
              customers.
              <br className="hidden sm:block" />
              More visits. Higher spending. Happier regulars.
            </p>

            <div className="mt-12">
              <a
                href="https://app.menuroom.et/signup"
                className="group inline-flex items-center gap-4 rounded-xl bg-white px-12 py-6 text-2xl font-bold text-blue-900 shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
              >
                Start Knowing Your Customers
                <span className="transform transition-transform group-hover:translate-x-3 text-3xl">
                  Go
                </span>
              </a>
            </div>

            <p className="mt-8 text-blue-200 text-lg">
              Free 14-day trial • No card needed • Full customer system from day one
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

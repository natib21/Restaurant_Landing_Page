// pages/features/PaymentIntegration.jsx  (ULTIMATE VERSION – "Works with ALL Gateways")
import { HeroSection } from '../component/Home/Hero/HeroSection';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import { FeatureHighlight } from '../component/Home/FeatureHighlight';
import { Link } from 'react-router-dom';
import abstractBackground from '/images/image_1_1765301758645.jpg';
import ReusableFlow from '../component/common/ReusableFlow';
import {
  CreditCard, Smartphone, Wallet, QrCode, CheckCircle,
  Zap, Shield, Globe, ArrowDownUp, Users, Store, Clock, PlusCircle
} from 'lucide-react';

const paymentWhyChooseUs = [
  { title: 'Telebirr', icon: Smartphone, desc: 'Ethiopia’s #1 mobile payment — fully integrated' },
  { title: 'CBE Birr', icon: CreditCard, desc: 'Commercial Bank of Ethiopia wallet' },
  { title: 'HelloCash', icon: Wallet, desc: 'Lion Bank & partners' },
  { title: 'Amole', icon: CreditCard, desc: 'Dashen Bank digital wallet' },
  { title: 'Ebirr', icon: Smartphone, desc: 'Ethio telecom’s new wallet — ready' },
  { title: 'M-Birr', icon: Wallet, desc: 'Microfinance institutions wallet' },
  { title: 'Any New Gateway', icon: PlusCircle, desc: 'We add new ones in days, not months' },
  { title: 'Cash & Counter Pay', icon: Wallet, desc: 'Traditional still fully supported' },
];

const PaymentIntegration = () => {
  return (
    <>
      {/* HERO – Now even bolder */}
      <section className="bg-white py-16 sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl px-6">
          <HeroSection
            
            badge="Works With EVERY Ethiopian Payment Method"
            heading={
              <>
                Accept Any Payment
                <br />
                <span className="text-blue-900 font-merienda">Today & Tomorrow</span>
              </>
            }
            description="Telebirr • CBE Birr • HelloCash • Amole • Ebirr • M-Birr • Cash — and any new gateway that launches next month. We integrate them all. Automatically."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="See All Integrations"
            ctaSecondaryLink="/contact"
            stats={[
              { value: 'ALL', label: 'Ethiopian Gateways' },
              { value: '100%', label: 'Future-Proof' },
              { value: '0', label: 'Customer Complaints' },
            ]}
          />
        </div>
      </section>

      <WhyChooseUsSection features={paymentWhyChooseUs} />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Never Say “We Don’t Accept That” Again"
            title={
              <>
                Your Customers Pay Their Way
                <br />
                <span className="text-blue-900 font-merienda">You Never Lose a Sale</span>
              </>
            }
          >
            A new bank launches a wallet tomorrow? We add it in days. Your restaurant stays ahead — always.
          </SectionHeader>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-20">

          {/* All Current Gateways */}
          <FeatureHighlight
            badge="Every Gateway in Ethiopia Today"
            title={
              <>
                Full Integration With All Major Players
                <br />
                <span className="text-blue-900 font-merienda">No Exceptions</span>
              </>
            }
            description="Customer chooses their wallet → scans QR → pays in 3 seconds → order confirmed. Works perfectly with every single one."
            imageSrc="/images/all-payment-gateways.webp"
            imageAlt="Telebirr, CBE Birr, HelloCash, Amole, Ebirr logos"
            features={[
              { icon: Smartphone, title: 'Telebirr • CBE Birr • HelloCash', desc: 'Deep native integration' },
              { icon: CreditCard, title: 'Amole • Ebirr • M-Birr', desc: 'Fully supported' },
              { icon: Zap, title: '3-Second Payments', desc: 'Faster than cash' },
              { icon: CheckCircle, title: 'Auto Verified', desc: 'No fake payments' },
            ]}
          />

          {/* Future-Proof Promise */}
          <FeatureHighlight
            reverse
            zebra
            badge="Future-Proof Guarantee"
            title={
              <>
                New Gateway Launches?
                <br />
                <span className="text-blue-900 font-merienda">We Add It Free — In Days</span>
              </>
            }
            description="Ethio telecom launches a new wallet? A bank starts something new? You’re covered. Automatically. No extra cost. Ever."
            imageSrc="/images/future-proof-payments.webp"
            imageAlt="Future payment gateway integration"
            features={[
              { icon: PlusCircle, title: 'We Add New Ones Fast', desc: 'Usually within 1 week' },
              { icon: Shield, title: 'Free Forever', desc: 'No hidden fees for new gateways' },
              { icon: Globe, title: 'You Stay Ahead', desc: 'Competitors still catching up' },
              { icon: Users, title: 'Your Customers Happy', desc: 'They always have their favorite option' },
            ]}
          />

          {/* Split Bill + Mixed Payments */}
          <FeatureHighlight
            badge="Split Bills • Mixed Payments"
            title={
              <>
                One Pays Telebirr, Another Cash
                <br />
                <span className="text-blue-900 font-merienda">No Problem</span>
              </>
            }
            description="Group of friends? Part pays with Telebirr, part with CBE Birr, part cash — system handles everything smoothly."
            imageSrc="/images/mixed-split-payments.webp"
            imageAlt="Mixed payment methods on one bill"
            features={[
              { icon: Users, title: 'Per-Person QR', desc: 'Each pays only their share' },
              { icon: ArrowDownUp, title: 'Mix Any Methods', desc: 'Telebirr + cash + Amole = OK' },
              { icon: Clock, title: '30 Seconds Total', desc: 'Faster than arguing' },
              { icon: CheckCircle, title: 'Auto Tracked', desc: 'Waiter sees who paid what' },
            ]}
          />

          {/* Instant Settlement */}
          <FeatureHighlight
            reverse
            zebra
            badge="Money Hits Your Account Instantly"
            title={
              <>
                No Waiting • No Delays
                <br />
                <span className="text-blue-900 font-merienda">Real-Time Settlement</span>
              </>
            }
            description="Payment confirmed → money in your Telebirr/CBE account immediately. Daily/weekly reports included."
            imageSrc="/images/instant-settlement-all.webp"
            imageAlt="Real-time money transfer"
            ctaText="See How Fast Money Moves"
            ctaLink="/contact"
            features={[
              { icon: Zap, title: 'Instant Transfer', desc: 'No T+1 or T+3 nonsense' },
              { icon: Store, title: 'Per-Branch Breakdown', desc: 'Know exactly who made what' },
              { icon: Shield, title: 'Bank-Level Security', desc: 'Encrypted end-to-end' },
              { icon: Globe, title: 'Works Nationwide', desc: 'Even in regions' },
            ]}
          />
        </div>
      </section>

      {/* Quick Setup */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Accept ALL Payments Today"
            title={
              <>
                Go Live With Every Gateway
                <br />
                <span className="text-blue-900 font-merienda">In Under 5 Minutes</span>
              </>
            }
          >
            <div className="mt-12">
              <ReusableFlow
                steps={[
                  'Connect your main wallet (30 seconds)',
                  'Enable all other gateways automatically',
                  'Print table QR codes',
                  'Start accepting every payment method — instantly!',
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
            Accept Every Payment Method in Ethiopia
          </h2>
          <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto font-merienda">
            Telebirr • CBE Birr • HelloCash • Amole • Ebirr • Cash • and whatever comes next.
            <br className="hidden sm:block" />
            One system. All payments. Zero excuses.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://app.menuroom.et/signup"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-xl font-bold text-blue-900 shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 text-white text-lg font-semibold hover:text-blue-200 transition">
              Book Full Payment Demo
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

export default PaymentIntegration;
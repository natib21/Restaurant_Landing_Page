// pages/About.jsx – Updated with HeroAbout.png background
import { Link } from 'react-router-dom';
import { Users, Zap, Heart, Sparkles } from 'lucide-react';

// Reusable Value Card Component (unchanged)
const ValueCard = ({ Icon, title, desc }) => (
  <div className="group rounded-2xl bg-white p-8 sm:p-10 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-100">
    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-200 group-hover:bg-blue-300 transition-colors duration-300">
      <Icon className="h-8 w-8 text-blue-900" />
    </div>
    <h3 className="text-2xl font-semibold text-blue-950 mb-3">
      {title}
    </h3>
    <p className="text-gray-600 leading-normal">{desc}</p>
  </div>
);

const About = () => {
  return (
    <>
      {/* Hero Section – Now with your HeroAbout.png as background */}
      <section className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat">
        {/* Background Image */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url(/images/HeroAbout.png)',
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Optional subtle radial gradient on top of image */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display leading-tight tracking-tight">
            About MenuRoom
            <span className="block mt-4 text-blue-300 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Empowering Ethiopian Hospitality
            </span>
          </h1>
          <p className="mt-8 text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto opacity-90">
            We build simple, powerful digital tools so cafés, virtual kitchens,
            lounges, and bakeries can focus on what they do best — creating unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Story Section – Using your images */}
  <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-950 font-display tracking-tight">
              Our Story
            </h2>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed">
              MenuRoom was born in Addis Ababa from a simple observation:
              Ethiopian hospitality is rich in culture and warmth, yet many
              owners still lose time to manual orders and operational complexities. Our mission is to digitalize effortlessly.
            </p>
            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              We built an all-in-one platform combining beautiful **QR digital menus**, smart **POS**, efficient **table
              management**, **inventory tracking**, and critical **offline support**. Crucially, our system is optimized for local payments
              like <span className="font-bold text-blue-700">Telebirr</span>, <span className="font-bold text-blue-700">CBE Birr</span>, HelloCash, and Amole.
            </p>
            <p className="mt-6 text-xl text-gray-700 leading-relaxed font-semibold">
              Today, MenuRoom proudly powers hundreds of businesses across Addis Ababa, Dire Dawa, Bahir Dar, and beyond.
            </p>
          </div>

          {/* Right Column: Visual Grid */}
          <div className="grid grid-cols-2 gap-5 p-3 rounded-2xl bg-gray-50/50 border border-gray-100 shadow-inner">
            
            {/* Image 1: QR Menu */}
            <div className=" overflow-hidden shadow-2xl transition-all hover:shadow-blue-500/20 aspect-square">
              <img
                src="/images/QrMenu.png"
                alt="Customer scanning QR digital menu"
                className="w-full h-full object-cover transform hover:scale-[1.05] transition-transform duration-500"
              />
            </div>

            {/* Image 2: Cafe Experience */}
            <div className=" overflow-hidden shadow-2xl transition-all hover:shadow-blue-500/20 aspect-square">
              <img
                src="/images/CafeeExpiriance.png"
                alt="Warm Ethiopian café bunna experience"
                className="w-full h-full object-cover transform hover:scale-[1.05] transition-transform duration-500"
              />
            </div>

            {/* Image 3: POS Terminal (Wide) */}
            <div className=" overflow-hidden shadow-2xl transition-all hover:shadow-blue-500/20 col-span-2 aspect-[16/9]">
              <img
                src="/images/Pos_terminal.png"
                alt="Barista using tablet POS system"
                className="w-full h-full object-cover transform hover:scale-[1.05] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
   {/* Tradition Section */}
           {/* Tradition Section – Full-width immersive card with responsive layout */}
      <section className="py-12 lg:py-20">
        <div className="max-w-full mx-auto">
          {/* Full-width Card Container */}
          <div className="relative flex flex-col lg:flex-row min-h-screen lg:min-h-[80vh] rounded-none  overflow-hidden shadow-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
            
            {/* Image Side – Full height on desktop, full width on mobile */}
            <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto">
              <img
                src="/images/CafeeExpiriance.png"
                alt="Traditional Ethiopian bunna ceremony blended with modern digital tools"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark gradient overlay for depth and text protection on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/40 to-transparent lg:hidden" />
            </div>

            {/* Content Side – Full height, decorated beautifully */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center px-8 py-16 lg:px-20 lg:py-24">
              {/* Subtle decorative radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_70%)] pointer-events-none" />

              {/* Decorative top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

              <div className="relative max-w-3xl text-center text-white">
                {/* Elegant heading with subtle glow */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-8 drop-shadow-2xl">
                  Where Tradition
                  <br />
                  <span className="text-blue-300">Meets Tomorrow</span>
                </h2>

                {/* Rich description with improved spacing and emphasis */}
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed opacity-95 mb-10">
                  From the time-honored <strong className="text-blue-200">bunna ceremony</strong> with its sacred rituals
                  to vibrant late-night <strong className="text-blue-200">tej</strong> shared in modern lounges —
                  MenuRoom preserves the soul of Ethiopian hospitality while delivering the speed, insight, and control of cutting-edge digital technology.
                </p>

                {/* Decorative callout with elegant styling */}
                <div className="mt-12 inline-block">
                  <p className="text-base sm:text-lg lg:text-xl font-medium text-blue-200 italic border-t-2 border-b-2 border-blue-400/50 py-4 px-8 bg-blue-950/30 rounded-2xl shadow-inner">
                    Authentic culture. Modern efficiency. One seamless platform.
                  </p>
                </div>

                {/* Optional subtle bottom decoration */}
                <div className="mt-12 flex justify-center gap-4 opacity-60">
                  <div className="w-16 h-px bg-blue-400" />
                  <div className="w-3 h-3 rounded-full bg-blue-300" />
                  <div className="w-16 h-px bg-blue-400" />
                </div>
              </div>

              {/* Decorative bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Values Section (unchanged) */}
      <section className="py-20 lg:py-28 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 font-display text-center mb-16">
            Our Core Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <ValueCard Icon={Zap} title="Simple & Fast" desc="Offline-ready technology that is set up in minutes and requires zero complex training." />
            <ValueCard Icon={Heart} title="Ethiopian at Heart" desc="Built specifically for the local market, including seamless integration with all major local payments." />
            <ValueCard Icon={Users} title="Owner-First Growth" desc="Maximize profit margins, reduce operational stress, and elevate the overall guest experience." />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 font-display mb-12">
            Meet Our Team
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-16">
            A diverse, passionate team of developers, designers, and local hospitality experts 
            based in Addis Ababa, dedicated to innovation in the Ethiopian market.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl shadow-lg bg-white overflow-hidden">
                <img
                  src="/images/Tech.png"
                  alt={`Team Member ${i}`}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <p className="font-semibold text-blue-900 text-lg">Team Member Name {i}</p>
                  <p className="text-sm text-gray-500 mt-1">Role Title</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   

      {/* CTA Section (unchanged) */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-700 to-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-6xl font-bold font-display mb-8">
            Ready to Go Digital?
          </h2>
          <p className="text-xl lg:text-2xl mb-12">
            Join the MenuRoom Family: Go digital. Grow faster. Serve better.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://app.menuroom.et/signup"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-xl font-bold text-blue-900 shadow-2xl hover:bg-blue-100 transition duration-300 transform hover:scale-[1.03]"
            >
              Start Free Trial
              <Sparkles className="h-5 w-5 fill-blue-500 text-blue-500" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-white px-10 py-5 text-xl font-medium hover:bg-white/20 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            No credit card • Free setup assistance • Fully functional offline
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
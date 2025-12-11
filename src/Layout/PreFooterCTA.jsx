// src/components/layout/PreFooterCTA.jsx
import { Link } from 'react-router-dom';
import ctaBg from '/images/glowbg.webp';

export default function PreFooterCTA() {
  return (
    <section
      className="relative  overflow-hidden pt-7 "
      style={{
        backgroundImage: ` url(${ctaBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // optional: parallax effect
      }}
    >
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl sm:text-5xl lg:text-3xl font-bold text-blue-500 font-merienda leading-tight">
          Ready to Grow Your Restaurant?
        </h2>
        <p className="mt-6 text-xl lg:text-xl text-blue-900 max-w-2xl mx-auto">
          Join 50+ restaurants already saving time and money with Menuroom.
        </p>

        <div className="mt-10">
          <Link
            to="/signup"
            className="font-merienda group inline-flex items-center gap-4 rounded-xl bg-blue-900 px-5 py-4 text-lg lg:text-2xl font-bold text-white  hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}

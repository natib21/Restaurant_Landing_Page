// src/components/Home/Hero/CafeHero.jsx
import { HeroBadge } from './HeroBadge';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const RestaurantHero = ({
  leftImage = '/images/Cafee4.png',
  rightImage = '/images/Cafee2.png',
  mobileImage = '/images/Cafee2.png',
  badgeText = 'Used by 100+ cafés across Ethiopia',
  titleMain = 'Your Café,',
  titleHighlight = 'Completely Digital',
  subtitle = 'QR Scan → Phone Order → More Tables',
  primaryCTAText = 'Join',
  primaryCTAHref = 'https://app.menuroom.et/signup',
  accentColor = 'amber',
  showTrustLine = true,
}) => {
  const colorMap = {
    amber: {
      btnBg: 'bg-amber-600',
      btnHover: 'hover:bg-amber-700',
      highlightColor: 'text-amber-700',
      badgeBg: 'bg-amber-100 text-amber-800',
      shadow: 'shadow-amber-500/30',
    },
    emerald: {
      btnBg: 'bg-emerald-600',
      btnHover: 'hover:bg-emerald-700',
      highlightColor: 'text-emerald-700',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      shadow: 'shadow-emerald-500/30',
    },
    teal: {
      btnBg: 'bg-teal-600',
      btnHover: 'hover:bg-teal-700',
      highlightColor: 'text-teal-700',
      badgeBg: 'bg-teal-100 text-teal-800',
      shadow: 'shadow-teal-500/30',
    },
    orange: {
      btnBg: 'bg-orange-600',
      btnHover: 'hover:bg-orange-700',
      highlightColor: 'text-orange-700',
      badgeBg: 'bg-orange-100 text-orange-800',
      shadow: 'shadow-orange-500/30',
    },
  };

  const selectedColors = colorMap[accentColor] || colorMap.amber;

  const { btnBg, btnHover, highlightColor, badgeBg, shadow } = selectedColors;

  return (
    <section className="relative   overflow-hidden bg-gradient-to-br from-amber-50/60 via-white to-orange-50/40 py-14 ">
      <motion.div
        initial={{ rotate: -90, x: -300, y: -200, opacity: 0 }}
        animate={{ rotate: -6, x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.2,
          type: 'spring',
          stiffness: 70,
          damping: 20,
        }}
        className="absolute left-8  bottom-8 lg:bottom-36 hidden sm:block"
      >
        <div className="relative rotate-[-6deg] hover:rotate-[-3deg] transition-transform duration-500">
          <img
            src={leftImage}
            alt="Happy café moment"
            className="w-72 lg:w-96 rounded-2xl shadow-2xl object-cover border-8 border-white"
          />
          <div className="absolute inset-0 rounded-2xl ring-4 ring-white/60 -z-10"></div>
        </div>
      </motion.div>

      {/* Floating Right Image - Top Right */}
      <motion.div
        initial={{ rotate: 90, x: 300, y: -200, opacity: 0 }}
        animate={{ rotate: 6, x: 0, y: 0, opacity: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.4,
          type: 'spring',
          stiffness: 70,
          damping: 20,
        }}
        className="absolute right-8  top-8 lg:top-12 hidden sm:block"
      >
        <div className="relative rotate-[6deg] hover:rotate-[9deg] transition-transform duration-500">
          <img
            src={rightImage}
            alt="Digital ordering in action"
            className="w-72 lg:w-96 rounded-2xl shadow-2xl object-cover border-8 border-white"
          />
          <div className="absolute inset-0 rounded-2xl ring-4 ring-white/60 -z-10"></div>
        </div>
      </motion.div>

      {/* Mobile Background – Shorter height (doesn't fill whole screen) */}
      <div className="absolute inset-x-0 top-0 h-[80vh] sm:hidden overflow-hidden">
        <img
          src={mobileImage}
          alt="Café"
          className="w-full h-full object-cover object-top brightness-75 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      </div>

      {/* Center Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Use the new badgeBg variable for the complete class */}
          <HeroBadge>{badgeText}</HeroBadge>

          <h1 className="mt-10 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white sm:text-gray-900 leading-tight drop-shadow-lg">
            {titleMain}
            <br />
            {/* Use the new highlightColor variable for the complete class */}
            <span className={`${highlightColor} font-merienda text-6xl sm:text-7xl lg:text-8xl`}>
              {titleHighlight}
            </span>
          </h1>

          <p className="sm:w-80 mt-8 text-xl sm:text-2xl text-white text-bold  sm:text-gray-700 max-w-3xl mx-auto leading-relaxed whitespace-pre-line font-light">
            {subtitle}
          </p>

          <div className="mt-10">
            {/* Primary Button – Smaller & Elegant */}
            <a
              href={primaryCTAHref}
              className={`group inline-flex items-center gap-2.5 ${btnBg} ${btnHover} text-white font-bold text-lg px-6 py-4 rounded-xl ${shadow} transform hover:scale-105 transition-all duration-300 shadow-xl`}
            >
              {primaryCTAText}
              <span className="transition-transform group-hover:translate-x-1.5">
                {<ArrowRight />}
              </span>
            </a>
          </div>

          {showTrustLine && (
            <p className="mt-10 text-white sm:text-gray-600 text-lg font-medium">
              No credit card • Setup in 10 minutes • Works offline
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

RestaurantHero.propTypes = {
  leftImage: PropTypes.string,
  rightImage: PropTypes.string,
  mobileImage: PropTypes.string,
  badgeText: PropTypes.string,
  titleMain: PropTypes.string,
  titleHighlight: PropTypes.string,
  subtitle: PropTypes.string,
  primaryCTAText: PropTypes.string,
  primaryCTAHref: PropTypes.string,
  secondaryCTAText: PropTypes.string,
  secondaryCTALink: PropTypes.string,
  accentColor: PropTypes.oneOf(['amber', 'emerald', 'teal', 'orange', 'rose']),
  showTrustLine: PropTypes.bool,
};

export default RestaurantHero;

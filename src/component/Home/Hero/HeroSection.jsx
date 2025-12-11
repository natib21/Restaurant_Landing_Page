// src/components/home/HeroSection.jsx
import { HeroBadge } from './HeroBadge';
import { HeroHeading } from './HeroHeading';
import { HeroDescription } from './HeroDescription';
import { HeroCTAs } from './HeroCTAs';
import { HeroStats } from './HeroStats';
import bgImageAbs from '/images/abstract.webp';
export const HeroSection = ({
  badge = 'Built for Smart Restaurants',
  heading = (
    <>
      All-in-One <span className="text-blue-900 font-merienda">Restaurant</span> Platform
    </>
  ),
  description = 'Run your cafe, hotel, or traditional restaurant with modern digital tools. QR menus, multi-branch control, offline support — built for Ethiopia.',
  ctaPrimaryText,
  ctaPrimaryLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  stats,
  bgImg = bgImageAbs,
  bgImgB,
}) => {
  return (
    <div
      className={`relative  overflow-hidden rounded-xl `}
      style={{
        backgroundImage: bgImgB && bgImg ? `url(${bgImg})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`relative z-10 mx-auto max-w-3xl text-center py-14`}>
        <HeroBadge>{badge}</HeroBadge>
        <HeroHeading>{heading}</HeroHeading>
        <HeroDescription>{description}</HeroDescription>
        <HeroCTAs
          primaryText={ctaPrimaryText}
          primaryLink={ctaPrimaryLink}
          secondaryText={ctaSecondaryText}
          secondaryLink={ctaSecondaryLink}
        />
        <HeroStats stats={stats} />
      </div>
    </div>
  );
};

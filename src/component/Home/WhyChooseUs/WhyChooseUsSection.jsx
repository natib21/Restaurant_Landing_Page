// src/components/home/WhyChooseUs/WhyChooseUsSection.jsx
import { WhyChooseUsCard } from './WhyChooseUsCard';
import { homeFeatures } from './variants';

export const WhyChooseUsSection = ({
  variant = 'home',
  features: customFeatures,
  className = '',
}) => {
  const features =
    customFeatures ||
    (variant === 'order'
      ? require('./variants/order').orderFeatures
      : variant === 'pricing'
        ? require('./variants/pricing').pricingFeatures
        : homeFeatures);

  return (
    <section className={`relative  py-20 lg:pt-9  overflow-hidden ${className} `}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 justify-center place-items-center">
          {features.map((feature, i) => (
            <WhyChooseUsCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

import { HeroSection } from '../component/Home/Hero/HeroSection';
import { featuresFeatures } from '../component/Home/WhyChooseUs/variants/features';
import { WhyChooseUsSection } from '../component/Home/WhyChooseUs/WhyChooseUsSection';
import SectionHeader from '../component/Home/SectionHeader';
import ReusableFlow from '../component/common/ReusableFlow';
const Features = () => {
  return (
    <>
      <section className="bg-white  sm:py-24 lg:py-0">
        <div className="mx-auto max-w-7xl ">
          <HeroSection
            badge="All 13 Powerful Features"
            heading={
              <>
                Every Feature You Need
                <br />
                <span className="text-blue-900 font-merienda">In One Place</span>
              </>
            }
            description="Everything your restaurant needs — in one simple, affordable app. Built for Ethiopia."
            ctaPrimaryText="Start Free Trial"
            ctaPrimaryLink="https://app.menuroom.et/signup"
            ctaSecondaryText="Watch Demo"
            ctaSecondaryLink="https://menuroom.et/demo"
            stats={[
              { value: '50+', label: 'Restaurants Using' },
              { value: '10min', label: 'Setup Time' },
              { value: '100%', label: 'Offline Ready' },
              { value: 'Zero', label: 'Printing Cost' },
            ]}
          />
        </div>
        <section className="bg-gradient-to-b from-blue-50 via-white to-gray-50 py-4">
          <SectionHeader
            badge="All-in-One Restaurant Platform"
            title={
              <>
                13 Powerful Features
                <br />
                <span className="text-blue-900 font-merienda">Built for Ethiopia</span>
              </>
            }
            className="text-center"
          >
            <WhyChooseUsSection features={featuresFeatures}  />
          </SectionHeader>
        </section>
        <SectionHeader
          badge="Start Using Menuroom in 3 Simple Steps"
          title={
            <>
              Go Live in <span className="text-blue-900 font-merienda">Less Than 10 Minutes</span>
              <br />
              Easier Than Slicing a Banana
            </>
          }
        >
          <div className="">
            <ReusableFlow />
          </div>
        </SectionHeader>
      </section>
    </>
  );
};

export default Features;

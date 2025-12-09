// components/home/HowToStartFlow.jsx
import { UserPlus, ListPlus, QrCode } from 'lucide-react';

// Import your SVG arrow icons
import Arrow1 from '/images/Asset 1.svg';
import Arrow2 from '/images/Asset 2.svg';

export default function ReusableFlow() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Account',
      desc: 'Sign up free — takes 60 seconds',
    },
    {
      icon: ListPlus,
      title: 'Add Your Menu',
      desc: 'Import or type items in minutes',
    },
    {
      icon: QrCode,
      title: 'Print QR & Go Live',
      desc: 'Stick on tables — customers scan & order',
    },
  ];

  return (
    <div className="relative rounded-3xl py-12 lg:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-12 lg:gap-20">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              {/* Step */}
              <div className="text-center group">
                <step.icon className="w-10 h-10 mx-auto mb-4 text-gray-800 group-hover:scale-110 transition-all duration-300" />

                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-xs mx-auto leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <div className="mx-6 lg:mx-10">
                  <img
                    src={i === 0 ? Arrow1 : Arrow2}
                    alt="Next step"
                    className="w-20 h-20 lg:w-14 lg:h-16 opacity-70 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <step.icon className="w-8 h-8 mx-auto mb-3 text-gray-800" />

              <h3 className="text-base font-semibold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

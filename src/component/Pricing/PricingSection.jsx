// src/components/pricing/PricingSection.jsx
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '0',
      period: 'Forever',
      description: 'Perfect for small cafes & startups',
      features: [
        'Digital QR Menu',
        'Basic Order Management',
        '1 Branch Only',
        'Website with Menu',
        'Community Support',
        'Qr Menu Generation',
        'Table Managment',
      ],
      cta: 'Start Free',
      ctaLink: 'https://app.menuroom.et/signup',
      popular: false,
    },
    {
      name: 'Pro',
      price: '4,999',
      period: 'per month',
      description: 'Best for growing restaurants & chains',
      features: [
        'Everything in Free',
        'Unlimited Branches',
        'POS System (Offline)',
        'Inventory & Stock Tracking',
        'Payment Integration (Telebirr, CBE Birr)',
        'Priority Local Support',
        'Custom Reports',
        'Custom Website',
      ],
      cta: 'Start 14-Day Trial',
      ctaLink: 'https://app.menuroom.et/signup',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Let’s talk',
      description: 'For hotels, franchises & large chains',
      features: [
        'Everything in Pro & Everything Custom',
        'Dedicated Account Manager',
        'Custom Features',
        'White-Label Option',
        'On-Premise Deployment',
        'Training & Onboarding',
        'SLA & 24/7 Support',
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      popular: false,
    },
  ];

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:pb-32 lg:px-8">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-700 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-900">Pricing</h2>
        <p className="mt-4 text-5xl font-bold tracking-tight text-blue-900 sm:text-6xl">
          Simple, Transparent Pricing
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 font-merienda">
          Choose the perfect plan for your restaurant. Start free — upgrade when you're ready.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-12 sm:mt-20 lg:max-w-5xl lg:grid-cols-3 lg:gap-x-8">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl p-8 shadow-xl ring-1 ring-gray-200 ${
              plan.popular ? 'bg-blue-900 text-white ring-blue-900' : 'bg-white text-gray-900'
            } ${plan.popular ? 'lg:scale-110 lg:z-10' : ''}`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-blue-900 shadow-md">
                Most Popular
              </div>
            )}

            <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-blue-900'}`}>
              {plan.name}
            </h3>
            <p
              className={`mt-4 text-4xl font-bold tracking-tight ${plan.popular ? 'text-white' : 'text-gray-900'}`}
            >
              {plan.price === 'Custom' ? 'Custom' : `ETB ${plan.price}`}
              <span className="text-lg font-normal opacity-80"> {plan.period}</span>
            </p>
            <p className={`mt-4 text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
              {plan.description}
            </p>

            <ul role="list" className="mt-8 space-y-4 text-left">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    className={`h-6 w-6 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-blue-900'}`}
                  />
                  <span className={`text-sm ${plan.popular ? 'text-blue-50' : 'text-gray-700'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to={plan.ctaLink}
              className={`mt-10 block rounded-xl px-6 py-4 text-center text-lg font-bold transition-all duration-300 ${
                plan.popular
                  ? 'bg-white text-blue-900 hover:bg-gray-100 shadow-lg'
                  : 'bg-blue-900 text-white hover:bg-blue-800 shadow-md hover:shadow-xl'
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Trust Line */}
      <p className="mt-16 text-center text-sm text-gray-500">
        No hidden fees • Cancel anytime • All plans include free updates
      </p>
    </div>
  );
}

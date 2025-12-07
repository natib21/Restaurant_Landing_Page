import { Link } from 'react-router-dom';
import { QrCode, Globe, Headphones, Store } from 'lucide-react';

const whyChooseUs = [
  {
    title: 'Digital QR Menus',
    icon: QrCode,
    desc: 'Contactless, beautiful menus customers scan & browse instantly on their phone.',
  },
  {
    title: 'Free Website',
    icon: Globe,
    desc: 'Get a stunning restaurant website with online ordering — no coding needed.',
  },
  {
    title: '24/7 Local Support',
    icon: Headphones,
    desc: 'Real humans, real fast help — anytime you need us, day or night.',
  },
  {
    title: 'Complete RMS',
    icon: Store,
    desc: 'POS, orders, inventory, tables, staff — everything in one easy platform.',
  },
];
const Home = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-6 py-2.5 text-sm font-medium text-blue-800">
              {/* Left Arrow */}
              <svg
                className="w-12 h-6 ml-3 mr-3 text-blue-600"
                viewBox="0 0 54 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.04233 6.19922C4.7314 6.5094 4.73088 7.01295 5.04106 7.32388C5.19061 7.47377 5.39378 7.55782 5.60555 7.55742L48.3413 7.5295C48.7804 7.53681 49.1423 7.1868 49.1497 6.74766C49.1571 6.30853 48.807 5.94664 48.3678 5.93923C48.3586 5.93908 48.3495 5.93909 48.3402 5.93925L5.60451 5.96717C5.39375 5.96699 5.19158 6.05041 5.04233 6.19922Z"
                  fill="currentColor"
                />
              </svg>

              <span className="font-bold uppercase tracking-wider text-blue-900 font-merienda">
                Built for Smart Restaurants
              </span>

              <svg
                className="w-12 h-6 ml-3 text-blue-600 rotate-180"
                viewBox="0 0 54 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.04233 6.19922C4.7314 6.5094 4.73088 7.01295 5.04106 7.32388C5.19061 7.47377 5.39378 7.55782 5.60555 7.55742L48.3413 7.5295C48.7804 7.53681 49.1423 7.1868 49.1497 6.74766C49.1571 6.30853 48.807 5.94664 48.3678 5.93923C48.3586 5.93908 48.3495 5.93909 48.3402 5.93925L5.60451 5.96717C5.39375 5.96699 5.19158 6.05041 5.04233 6.19922Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <h1 className="mt-10 text-4xl font-bold tracking-tight text-blue-500 sm:text-6xl lg:text-7xl text-center leading-tight">
              All-in-One <span className="text-blue-900 font-merienda">Restaurant</span> Platform
            </h1>

            {/* Subheadline */}
            <p className="mt-8 text-lg leading-8 text-gray-600 sm:text-xl font-merienda">
              Run your cafe, hotel, or traditional restaurant with modern digital tools. QR menus,
              multi-branch control, offline support — built for Ethiopia.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://app.menuroom.et/signup"
                className="w-full sm:w-auto rounded-xl bg-gradient-to-br from-blue-500 to-blue-900 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-500 transition"
              >
                Start Free Trial
              </a>
              <Link
                to="/features/qr-code"
                className="w-full sm:w-auto text-lg font-semibold text-blue-900 hover:text-blue-500 transition"
              >
                See how it works →
              </Link>
            </div>

            {/* Trust Row */}
            <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-8 text-gray-600">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-blue-900 font-merienda">500+</span>
                <span className="text-sm mt-1 text-blue-500 font-merienda">Restaurants</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-blue-900 font-merienda">24/7</span>
                <span className="text-sm mt-1 text-blue-500 font-merienda">Works Offline</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-blue-900 font-merienda">100%</span>
                <span className="text-sm mt-1 text-blue-500 font-merienda">Made in Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-6 p-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white hover:bg-blue-500 rounded-sm cursor-pointer transition-all duration-700 overflow-hidden border border-blue-100 m-2"
              >
                {/* Top animated bar – unchanged */}
                <div className="absolute top-0 left-0 h-1 w-20 bg-blue-900/50 transition-all duration-500 group-hover:bg-white group-hover:w-1/2 z-10" />

                <div className="p-3 text-left relative flex-col items-start">
                  <item.icon className="w-8 h-8 mb-6 text-blue-900 group-hover:text-white" />

                  <h3 className="font-merienda text-lg font-bold text-blue-900 group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>

                  <p className="font-merienda mt-4 text-sm text-blue-500 group-hover:text-white transition-colors duration-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Only this line changed to bg-blue-500 */}
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

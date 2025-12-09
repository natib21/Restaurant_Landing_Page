import { Link } from 'react-router-dom';
import {
  QrCode,
  Globe,
  Headphones,
  Store,
  Smartphone,
  Pencil,
  Eye,
  Share2,
  Package,
  Layers,
  Zap,
  Truck,
  BellRing
} from 'lucide-react';

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
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-32 lg:py-16">
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

            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl lg:text-7xl text-center leading-tight">
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
                <span className="text-4xl font-bold text-blue-900 font-merienda">50+</span>
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
      <section className="relative bg-gradient-to-b from-blue-100 via-white to-gray-50 py-20 lg:py-32 overflow-hidden">
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

      <section className="overflow-hidden bg-white pt-10 sm:pt-16 px-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-7 pt-10 sm:pt-12 ">
          <header className="mx-auto max-w-3xl text-center  lg:my-5">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-sm font-bold text-blue-900">
              <svg
                className="w-8 h-8 mr-3 text-blue-600"
                viewBox="0 0 54 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.04233 6.19922C4.7314 6.5094 4.73088 7.01295 5.04106 7.32388C5.19061 7.47377 5.39378 7.55782 5.60555 7.55742L48.3413 7.5295C48.7804 7.53681 49.1423 7.1868 49.1497 6.74766C49.1571 6.30853 48.807 5.94664 48.3678 5.93923C48.3586 5.93908 48.3495 5.93909 48.3402 5.93925L5.60451 5.96717C5.39375 5.96699 5.19158 6.05041 5.04233 6.19922Z"
                  fill="currentColor"
                />
              </svg>

              <span className="uppercase  font-merienda text-xs sm:text-xs">
                Everything Your Restaurant Needs — In One Place
              </span>

              <svg
                className="w-8 h-8 ml-3 text-blue-600 rotate-180"
                viewBox="0 0 54 13"
                fill="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.04233 6.19922C4.7314 6.5094 4.73088 7.01295 5.04106 7.32388C5.19061 7.47377 5.39378 7.55782 5.60555 7.55742L48.3413 7.5295C48.7804 7.53681 49.1423 7.1868 49.1497 6.74766C49.1571 6.30853 48.807 5.94664 48.3678 5.93923C48.3586 5.93908 48.3495 5.93909 48.3402 5.93925L5.60451 5.96717C5.39375 5.96699 5.19158 6.05041 5.04233 6.19922Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <h1 className="mt-5 text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
              One Platform
              <span className="text-blue-900 font-merienda"> Complete Control</span> Over Your
              <br />
              Restaurant.
            </h1>
            <p className="mt-8 text-base sm:text-lg leading-9 text-gray-700 font-medium max-w-2xl mx-auto">
              Go fully digital with{' '}
              <span className="text-blue-800 font-merienda">QR code menus</span>, manage{' '}
              <span className="text-blue-800 font-merienda">multiple branches</span> from one
              dashboard, take orders at the table, accept track inventory, and grow loyalty
              <br />
              <span className="font-bold text-blue-900 capitalize">
                all in one Ethiopian-made system
              </span>
              .
            </p>
          </header>

          <article className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/branch-menu-management.png"
                alt="Menuroom Branch Menu Management Dashboard"
                className="w-full max-w-lg rounded-2xl shadow-2xl ring-1 ring-gray-200/50 transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* Right Side - Mockup */}
            <div className="lg:pr-8 lg:pt-6">
              <div className="lg:max-w-lg">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 ml-3 mr-3 text-blue-600"
                    viewBox="0 0 54 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.04233 6.19922C4.7314 6.5094 4.73088 7.01295 5.04106 7.32388C5.19061 7.47377 5.39378 7.55782 5.60555 7.55742L48.3413 7.5295C48.7804 7.53681 49.1423 7.1868 49.1497 6.74766C49.1571 6.30853 48.807 5.94664 48.3678 5.93923C48.3586 5.93908 48.3495 5.93909 48.3402 5.93925L5.60451 5.96717C5.39375 5.96699 5.19158 6.05041 5.04233 6.19922Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-base font-semibold leading-7 text-blue-900 uppercase font-merienda">
                    Menu Management
                  </span>
                </div>
                <h1 className="mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-lg capitalize">
                  Full control at every branch
                </h1>
                <p className="mt-6 text-base leading-8 text-gray-600 font-merienda">
                  One master menu, unlimited branch variations. Create combos, menu groups,
                  hide/show items per location, and launch specials — all without touching a
                  printer.
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-10">
                    <dt className="inline font-semibold text-gray-900">
                      <Package className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                      Master Menu
                    </dt>
                    <dd className="inline">
                      {' '}
                      Central menu library — add, edit, or archive items once, use everywhere.
                    </dd>
                  </div>

                  <div className="relative pl-10">
                    <dt className="inline font-semibold text-gray-900">
                      <Store className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                      Branch-Specific Menus
                    </dt>
                    <dd className="inline">
                      {' '}
                      Each branch can hide items, change prices, or reorder categories
                      independently.
                    </dd>
                  </div>

                  <div className="relative pl-10">
                    <dt className="inline font-semibold text-gray-900">
                      <Layers className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                      Menu Groups & Categories
                    </dt>
                    <dd className="inline">
                      {' '}
                      Organize items into Breakfast, Lunch, Drinks, Desserts or custom groups per
                      branch.
                    </dd>
                  </div>

                  <div className="relative pl-10">
                    <dt className="inline font-semibold text-gray-900">
                      <Package className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                      Combo & Bundle Menus
                    </dt>
                    <dd className="inline">
                      {' '}
                      Create meal deals, family packs, or happy hour combos exclusive to specific
                      branches.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>


<article className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 items-center px-6 lg:px-8">
  {/* Left Side – Image First (alternates with previous section) */}
 

  {/* Right Side – Content */}
  <div className="lg:pl-12 order-2 lg:order-1">
    <div className="lg:max-w-lg">
      {/* Badge */}
      <div className="flex items-center gap-3 mb-4">
        <svg className="w-10 h-6 text-blue-600" viewBox="0 0 54 13" fill="none">
          <path d="M5.04233 6.19922C4.7314 6.5094 4.73088 7.01295 5.04106 7.32388L48.3413 7.5295C48.7804 7.53681 49.1423 7.1868 49.1497 6.74766L5.60451 5.96717C5.39375 5.96699 5.19158 6.05041 5.04233 6.19922Z" fill="currentColor"/>
        </svg>
        <span className="text-base font-bold uppercase tracking-wider text-blue-900 font-merienda">
          Order Management
        </span>
      </div>

      <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
        Lightning-Fast Orders<br />
        <span className="text-blue-900 font-merienda">From Table → Kitchen → Done</span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Customers order directly from QR code, your website, or waiter tablet. 
        Orders fly straight to the kitchen screen or printer — no shouting, no mistakes, no delays.
      </p>

      <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600">
        <div className="relative pl-10">
          <dt className="inline font-semibold text-gray-900">
            <QrCode className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
            Scan & Order from Phone
          </dt>
          <dd className="inline"> Customers scan QR → browse menu → place order → pay (or pay later). Zero waiter needed.</dd>
        </div>

        <div className="relative pl-10">
          <dt className="inline font-semibold text-gray-900">
            <Globe className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
            Order from Your Website
          </dt>
          <dd className="inline"> Online ordering built-in. Customers order for pickup or delivery directly from your free site.</dd>
        </div>

        <div className="relative pl-10">
          <dt className="inline font-semibold text-gray-900">
            <Smartphone className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
            Waiter Tablet Ordering
          </dt>
          <dd className="inline"> Staff take orders on tablet — appears instantly in kitchen. Perfect for dine-in.</dd>
        </div>

        <div className="relative pl-10">
          <dt className="inline font-semibold text-gray-900">
            <Zap className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
            Instant Kitchen Display
          </dt>
          <dd className="inline"> New orders pop up on kitchen screen with timer. No paper tickets lost.</dd>
        </div>
      </dl>

      {/* Optional CTA */}
      <div className="mt-10">
        <Link
          to="/features/order-management"
          className="text-blue-900 font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all"
        >
          See Order Flow in Action →
        </Link>
      </div>
    </div>
  </div>
   <div className="flex justify-center lg:justify-start order-1 lg:order-2">
    <img
      src="/images/order-management-flow.png"
      alt="Menuroom Order Management – From QR Scan to Kitchen in Seconds"
      className="w-full max-w-lg rounded-2xl shadow-2xl ring-1 ring-gray-200/50 hover:scale-105 transition duration-500"
    />
  </div>
</article>

        </div>
      </section>
    </>
  );
};

export default Home;

import { Link } from "react-router-dom";
const Home = ()=>{
    return (
   <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center rounded-full bg-gray-100 px-6 py-2.5 text-sm font-medium text-gray-800">
  {/* Left Arrow */}
  <svg
    className="w-12 h-6 ml-3 mr-3 text-orange-600"
    viewBox="0 0 54 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.04233 6.19922C4.7314 6.5094 4.73088 7.01295 5.04106 7.32388C5.19061 7.47377 5.39378 7.55782 5.60555 7.55742L48.3413 7.5295C48.7804 7.53681 49.1423 7.1868 49.1497 6.74766C49.1571 6.30853 48.807 5.94664 48.3678 5.93923C48.3586 5.93908 48.3495 5.93909 48.3402 5.93925L5.60451 5.96717C5.39375 5.96699 5.19158 6.05041 5.04233 6.19922Z"
      fill="currentColor"
    />
  </svg>

  {/* Text */}
  <span className="font-bold uppercase tracking-wider text-gray-900">
    Built for Smart Restaurants
  </span>

  {/* Right Arrow */}
  <svg
    className="w-12 h-6 ml-3 text-orange-600 rotate-180"
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

          {/* Headline */}
          <h1 className="mt-10 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            The Future of Ethiopian Restaurants
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-lg leading-8 text-gray-600 sm:text-xl">
            Run your cafe, hotel, or traditional restaurant with modern digital tools. 
            QR menus, multi-branch control, offline support — built for Ethiopia.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://app.menuroom.et/signup"
              className="w-full sm:w-auto rounded-xl bg-orange-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-orange-700 transition"
            >
              Start Free Trial
            </a>
            <Link
              to="/features/qr-code"
              className="w-full sm:w-auto text-lg font-semibold text-gray-900 hover:text-orange-600 transition"
            >
              See how it works →
            </Link>
          </div>

          {/* Trust Row */}
          <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-8 text-gray-600">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-gray-900">500+</span>
              <span className="text-sm mt-1">Restaurants</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-gray-900">24/7</span>
              <span className="text-sm mt-1">Works Offline</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-gray-900">100%</span>
              <span className="text-sm mt-1">Made in Ethiopia</span>
            </div>
          </div>
        </div>
      </div>
    </div>

)}

export default Home
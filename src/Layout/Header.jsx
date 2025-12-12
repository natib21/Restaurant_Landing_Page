// components/Layout/Header.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import {
  X,
  ChevronDown,
  ChevronRight,
  CreditCard,
  QrCode,
  ShoppingCart,
  Table as TableIcon,
  Smartphone,
  Globe,
  Users,
  Store,
  BookOpen,
  Package,
  Wallet,
  BarChart3,
  Coffee,
  Hotel,
  Utensils,
  Cloud,
  GlassWater,
  Croissant,
  MoveRight,
  Languages,
  Phone,
  Mail,
  SquareMenu,
} from 'lucide-react';

const features = [
  { to: '/pos', label: 'POS System', desc: 'Fast & reliable checkout', icon: CreditCard },
  { to: 'qr-menu', label: 'QR Code Menu', desc: 'Print once, use forever', icon: QrCode },
  {
    to: '/order',
    label: 'Order Management',
    desc: 'Track & manage all orders',
    icon: ShoppingCart,
  },
  {
    to: '/table',
    label: 'Table Management',
    desc: 'Real-time table status',
    icon: TableIcon,
  },
  {
    to: '/menu',
    label: 'Digital Menu',
    desc: 'Beautiful mobile menus',
    icon: Smartphone,
  },
  {
    to: '/website-builder',
    label: 'Restaurant Website',
    desc: 'Professional online presence',
    icon: Globe,
  },
  {
    to: '/customer',
    label: 'Customer Management',
    desc: 'Loyalty & feedback',
    icon: Users,
  },
  {
    to: '/multi-branch',
    label: 'Multi-Branch',
    desc: 'Control all locations',
    icon: Store,
  },
  {
    to: '/multi-menu',
    label: 'Multi-Menu',
    desc: 'Different menus per branch',
    icon: BookOpen,
  },
  {
    to: '/inventory',
    label: 'Inventory',
    desc: 'Track stock & reduce waste',
    icon: Package,
  },
  {
    to: '/payment-integration',
    label: 'Payment Integration',
    desc: 'Telebirr, CBE Birr',
    icon: Wallet,
  },

  // { to: "/features/reports-analytics", label: "Reports & Analytics", desc: "Data-driven decisions", icon: BarChart3 },
  {
    to: '/features',
    label: 'View All',
    desc: 'View All Features',
    icon: MoveRight,
  },
];

const restaurantTypes = [
  { to: '/cafe', label: 'Cafes & Coffee Shops', icon: Coffee },
  { to: '/hotel', label: 'Hotels & Resorts', icon: Hotel },
  { to: '/fast-food', label: 'Fast Food', icon: Utensils },
  { to: '/virtual-kitchen', label: 'Virtual Kitchen', icon: Cloud },
  { to: '/lounge-bar', label: 'Lounges & Bars', icon: GlassWater },
  { to: '/bakery', label: 'Bakeries', icon: Croissant },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [restaurantOpen, setRestaurantOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setFeaturesOpen(false);
  }, [location]);
  return (
    <>
      <div className="text-white">
        <div className="max-w-7xl mx-auto sm:px-4 sm:py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <div className="flex items-center gap-4 sm:h-12 ">
            <img
              src="/images/restaurantBanner.gif"
              alt="Special Offer"
              className="object-contain -z-10 sm:h-40 "
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-950 text-white text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-6 font-semibold">
          <div className="flex items-center gap-6">
            <a
              href="tel:+251923479921"
              className="flex items-center gap-2 hover:underline font-medium transition"
            >
              <Phone className="h-10 w-10 text-white/80" />
              <span>Need help?: +251 923 479 921</span>
            </a>

            <a
              href="mailto:support@menuroom.et"
              className="flex items-center gap-2 hover:underline font-medium transition"
            >
              <Mail className="h-4 w-4 text-white/80" />
              <span>support@menuroom.et</span>
            </a>
          </div>

          <div className="flex gap-2">
            <a
              href="https://menuroom.et/affiliate"
              className="hover:underline text-white/90 transition"
            >
              Contact
            </a>
            |
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 hover:underline transition"
              >
                <Languages className="h-4 w-4" />
                English
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${langOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {langOpen && (
                <div className=" border border-red-300 absolute top-full left-0 mt-2 bg-white rounded-sm shadow-xl ring-1 ring-black ring-opacity-5 z-50 overflow-hidden">
                  <div className="py-1">
                    {['English', 'አማርኛ'].map(lang => (
                      <a
                        key={lang}
                        href="#"
                        className="block px-5 py-3 text-sm text-gray-800 hover:bg-blue-50 transition"
                        onClick={() => setLangOpen(false)}
                      >
                        {lang}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="bg-white sticky top-0 z-40 lg:px-10 px-4 lg:py-1 py-4 ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-blue-950  lg:hidden -z-10"
          /*  style={{
            backgroundImage: `url('/images/abstract.webp')`, // Put this image in public/images/
            backgroundBlendMode: 'multiply',
            backgroundPosition:'center 30%'
          }} */
          aria-hidden="true"
        />

        {/* White background only on desktop */}
        <div className="hidden lg:block absolute inset-0 bg-white -z-10" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between " aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Menuroom</span>
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-900 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">M</span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="  hover:text-blue-900 transition border border-blue-500 p-2"
            >
              <SquareMenu className="h-full text-white " />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="relative h-14 hidden lg:flex lg:items-center lg:gap-x-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center text-sm font-semibold transition h-full ${
                  isActive ? 'text-blue-600 font-extrabold' : 'text-blue-900 hover:text-blue-500'
                }`
              }
            >
              Home
            </NavLink>

            <div className=" h-full" onMouseLeave={() => setFeaturesOpen(false)}>
              <button
                onMouseEnter={() => setFeaturesOpen(true)}
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="h-full flex items-center gap-x-1 text-sm font-semibold text-blue-900 hover:text-blue-600 transition relative z-10"
              >
                Features
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${featuresOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Invisible hover bridge */}
              <div
                className="absolute inset-x-0 top-full h-8 pointer-events-none"
                aria-hidden="true"
              />

              {/* Dropdown Panel */}
              <div
                className={`absolute inset-x-0 top-14 left-1/2 -translate-x-1/2 w-max max-w-6xl z-50 transition-all duration-300 ease-out origin-top ${
                  featuresOpen
                    ? 'opacity-100 visible scale-100'
                    : 'opacity-0 invisible scale-95 pointer-events-none'
                }`}
                onMouseEnter={() => setFeaturesOpen(true)}
                onMouseLeave={() => setFeaturesOpen(false)}
              >
                <div className="w-max min-w-[900px] max-w-6xl bg-white rounded-sm shadow-2xl ring-1 ring-gray-200 overflow-hidden">
                  <div className="grid grid-cols-4 gap-4 p-10">
                    {features.map(item => {
                      const isViewAll = item.label === 'View All';
                      return (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          onClick={() => setFeaturesOpen(false)}
                          className={`
                            block rounded-sm p-2 transition-all duration-300 group/item
                            ${
                              isViewAll
                                ? 'bg-blue-200 hover:bg-blue-300 text-white shadow-lg hover:shadow-xl'
                                : 'border border-blue-200 hover:border-blue-500 hover:shadow-lg'
                            }
                          `}
                        >
                          <div
                            className={`flex ${isViewAll ? 'flex-row-reverse justify-between px-2' : ''} items-center gap-5`}
                          >
                            <item.icon className="h-8 w-8 text-blue-500 group-hover/item:text-blue-600 transition" />
                            <div>
                              <p className="font-semibold text-blue-900 group-hover/item:text-blue-600">
                                {item.label}
                              </p>
                              <p className="text-sm text-blue-600 mt-1 font-merienda text-nowrap">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>

                  <div className="bg-blue-50 border-t border-blue-200 px-10 py-4">
                    <div className="flex justify-between items-center">
                      <a
                        href="https://menuroom.et/demo"
                        onClick={() => setFeaturesOpen(false)}
                        className="text-sm font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-2"
                      >
                        Watch Demo
                      </a>
                      <a
                        href="https://menuroom.et/contact"
                        onClick={() => setFeaturesOpen(false)}
                        className="text-sm font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-2"
                      >
                        Contact Sales
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Restaurant Type Dropdown */}
            <div className="relative group h-full">
              <button className="peer h-full flex items-center gap-x-1 text-sm font-semibold text-blue-900 hover:text-blue-600 transition">
                Restaurant type
                <ChevronDown className="h-4 w-4 transition-transform peer-hover:rotate-180" />
              </button>
              <div
                className="absolute inset-x-0 top-full h-8 pointer-events-none"
                aria-hidden="true"
              />

              <div
                className="absolute inset-x-0 top-14 left-1/2 -translate-x-1/2 w-max max-w-6xl 
                opacity-0 invisible scale-95 
                group-hover:opacity-100 group-hover:visible group-hover:scale-100 
                transition-all duration-300 ease-out 
                pointer-events-none group-hover:pointer-events-auto z-50"
              >
                <div className="w-max min-w-[500px] max-w-6xl bg-white rounded-sm shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-2 p-2 gap-4">
                    {restaurantTypes.map(item => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className="group flex items-center justify-between px-6 py-4 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <item.icon className="h-9 w-9 text-blue-900 transition border p-2 rounded-sm" />
                          <span className="font-medium text-blue-500">{item.label}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-900 transition" />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `flex items-center h-full text-sm font-semibold transition ${
                  isActive ? 'text-blue-600 font-extrabold' : 'text-blue-900 hover:text-blue-600'
                }`
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `flex items-center h-full text-sm font-semibold transition ${
                  isActive ? 'text-blue-600 font-extrabold' : 'text-blue-900 hover:text-blue-600'
                }`
              }
            >
              Resources
            </NavLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
            <a
              href="https://app.menuroom.et/login"
              className="text-sm font-semibold text-blue-900 hover:text-blue-600 transition"
            >
              Log in
            </a>
            <a
              href="https://app.menuroom.et/signup"
              className="rounded-xl bg-blue-900 px-8 py-3 text-sm font-bold text-white shadow-lg hover:bg-blue-600 transition"
            >
              Start Free Trial
            </a>
          </div>
        </nav>
        <AnimatePresence>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 "
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="fixed right-0 top-0 h-full w-full bg-white shadow-2xl"
                onClick={e => e.stopPropagation()}
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              >
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-8 w-8 text-gray-600" />
                  </button>
                </div>

                <div className="p-6 space-y-4 overflow-y-auto h-full pb-32 flex flex-col justify-between ">
                  <div>
                    <NavLink
                      onClick={() => setMobileMenuOpen(false)}
                      to="/"
                      className="font-merienda block text-2xl font-bold text-blue-950 py-3 border-b"
                    >
                      Home
                    </NavLink>

                    {/* Features Dropdown */}
                    <div>
                      <button
                        onClick={() => setFeaturesOpen(!featuresOpen)}
                        className="font-merienda w-full flex items-center justify-between text-2xl font-bold text-blue-950 py-3 border-b"
                      >
                        Features
                        <ChevronDown
                          className={`h-6 w-6 transition ${featuresOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {featuresOpen && (
                        <AnimatePresence>
                          <motion.div
                            className="mt-4 space-y-3 pl-4 border-l-4 border-blue-200"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                              hidden: { opacity: 0 },
                              visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.08 },
                              },
                            }}
                          >
                            {features.map(item => (
                              <motion.div
                                key={item.to}
                                variants={{
                                  hidden: { opacity: 0, x: 40 },
                                  visible: { opacity: 1, x: 0 },
                                }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.25 }}
                              >
                                <NavLink
                                  to={item.to}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-blue-50 transition"
                                >
                                  <item.icon className="h-8 w-8 text-blue-600" />
                                  <div>
                                    <p className="font-semibold text-blue-900">{item.label}</p>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                  </div>
                                </NavLink>
                              </motion.div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </div>

                    {/* Restaurant Type Dropdown */}
                    {/* Restaurant Type Dropdown */}
                    <div>
                      <button
                        onClick={() => setRestaurantOpen(!restaurantOpen)}
                        className="w-full font-merienda flex items-center justify-between text-2xl font-bold text-blue-950 py-3 border-b"
                      >
                        Restaurant Type
                        <ChevronDown
                          className={`h-6 w-6 transition ${restaurantOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {restaurantOpen && (
                        <AnimatePresence>
                          <motion.div
                            className="mt-4 space-y-3 pl-4 border-l-4 border-blue-200"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                              hidden: { opacity: 0 },
                              visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.08 },
                              },
                            }}
                          >
                            {restaurantTypes.map(item => (
                              <motion.div
                                key={item.to}
                                variants={{
                                  hidden: { opacity: 0, x: 40 },
                                  visible: { opacity: 1, x: 0 },
                                }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.25 }}
                              >
                                <NavLink
                                  to={item.to}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-4 py-4 px-4 rounded-xl hover:bg-blue-50 transition"
                                >
                                  <item.icon className="h-9 w-9 text-blue-600" />
                                  <span className="font-medium text-blue-900">{item.label}</span>
                                </NavLink>
                              </motion.div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </div>

                    <NavLink
                      onClick={() => setMobileMenuOpen(false)}
                      to="/pricing"
                      className="block text-2xl font-bold text-blue-950 py-3 border-b font-merienda"
                    >
                      Pricing
                    </NavLink>
                    <NavLink
                      onClick={() => setMobileMenuOpen(false)}
                      to="/resources"
                      className="block text-2xl font-bold text-blue-950 py-3 border-b font-merienda"
                    >
                      Resources
                    </NavLink>
                    <NavLink
                      onClick={() => setMobileMenuOpen(false)}
                      to="/about"
                      className="block text-2xl font-bold text-blue-950 py-3 border-b font-merienda"
                    >
                      About Us
                    </NavLink>
                    <a
                      href="https://app.menuroom.et/login"
                      className="block text-1xl font-bold text-blue-600 py-3 border-b"
                    >
                      Log in
                    </a>
                    <a
                      href="https://app.menuroom.et/login"
                      className="block text-1xl font-bold text-blue-600 py-3 border-b"
                    >
                      Sign Up
                    </a>
                  </div>
                  <div className="border-t border bg-blue-100 p-12 rounded-lg">
                    <div className="space-y-5  ">
                      <a
                        href="tel:+251923479921"
                        className="flex items-center justify-start gap-3 text-xl font-bold text-blue-950 hover:text-blue-950 transition"
                      >
                        <Phone className="h-7 w-7" />
                        +251 923 479 921
                      </a>
                      <a
                        href="mailto:support@menuroom.et"
                        className="flex items-center justify-start gap-3 text-lg font-medium text-blue-900 hover:text-blue-950 transition"
                      >
                        <Mail className="h-6 w-6" />
                        support@menuroom.et
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className=" flex gap-7">
                      <a
                        href="https://app.menuroom.et/login"
                        className=" w-full  flex justify-center items-center text-2xl font-bold border-2 border-blue-950 text-blue-950 rounded-xl hover:bg-blue-50"
                      >
                        Log in
                      </a>
                      <a
                        href="https://app.menuroom.et/signup"
                        className=" w-full text-center py-4 text-2xl font-bold text-white bg-blue-950 rounded-xl shadow-lg"
                      >
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

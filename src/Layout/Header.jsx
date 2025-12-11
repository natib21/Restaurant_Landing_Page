// components/Layout/Header.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
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
    desc: 'Telebirr, CBE Birr, HelloCash',
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
  { to: '/for/cafe', label: 'Cafes & Coffee Shops', icon: Coffee },
  { to: '/for/hotel', label: 'Hotels & Resorts', icon: Hotel },
  { to: '/for/fast-food', label: 'Fast Food', icon: Utensils },
  { to: '/for/virtual-kitchen', label: 'Virtual Kitchen', icon: Cloud },
  { to: '/for/lounge-bar', label: 'Lounges & Bars', icon: GlassWater },
  { to: '/for/bakery', label: 'Bakeries', icon: Croissant },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setFeaturesOpen(false);
  }, [location]);
  return (
    <>
      {/* PROMO BANNER WITH GIF */}
      <div className="text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <div className="flex items-center gap-4 h-12">
            <img
              src="/images/restaurantBanner.gif"
              alt="Special Offer"
              className="object-contain -z-10 h-40"
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-950 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-6 font-semibold">
          <div className="flex items-center gap-6">
            <a
              href="tel:+251923479921"
              className="flex items-center gap-2 hover:underline font-medium transition"
            >
              <Phone className="h-4 w-4 text-white/80" />
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
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Global">
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
              className="p-2 text-gray-700 hover:text-blue-900 transition"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="relative h-14 hidden lg:flex lg:items-center lg:gap-x-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center text-sm font-semibold transition h-full ${
                  isActive ? 'text-blue-900' : 'text-blue-900 hover:text-blue-500'
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
                  <div className="grid grid-cols-4 gap-2 p-4">
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
                              <p className="text-sm text-blue-600 mt-1 font-merienda">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>

                  <div className="bg-blue-50 border-t border-blue-200 px-10 py-2">
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
                  isActive ? 'text-blue-600' : 'text-blue-900 hover:text-blue-600'
                }`
              }
            >
              Pricing
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `flex items-center h-full text-sm font-semibold transition ${
                  isActive ? 'text-blue-600' : 'text-blue-900 hover:text-blue-600'
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed inset-x-0 top-0 z-50 bg-white shadow-xl">
              <div className="flex items-center justify-between p-6 border-b">
                <Link to="/" className="-m-1.5 p-1.5">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="px-6 py-8 space-y-6">
                <NavLink to="/" className="block text-lg font-semibold text-blue-900">
                  Home
                </NavLink>
                <NavLink to="/pricing" className="block text-lg font-semibold text-blue-900">
                  Pricing
                </NavLink>
                <NavLink to="/resources" className="block text-lg font-semibold text-blue-900">
                  Resources
                </NavLink>

                <div className="pt-8 border-t space-y-4">
                  <a
                    href="https://app.menuroom.et/login"
                    className="font-merienda block w-full text-center py-3 text-lg font-semibold text-blue-500 border border-blue-300 rounded-xl hover:border-blue-600"
                  >
                    Log in
                  </a>
                  <a
                    href="https://app.menuroom.et/signup"
                    className="block w-full text-center py-3 text-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-900 rounded-xl hover:bg-blue-700 shadow-lg"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

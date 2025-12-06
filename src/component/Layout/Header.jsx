// components/Layout/Header.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  Menu, X, ChevronDown, ChevronRight,
  CreditCard, QrCode, ShoppingCart, Table as TableIcon,
  Smartphone, Globe, Users, Store, BookOpen, Package, Wallet, BarChart3,
  Coffee, Hotel, Utensils, Cloud, GlassWater, Croissant
} from "lucide-react";
const features = [
  { to: "/features/pos", label: "POS System", desc: "Fast & reliable checkout", icon: CreditCard },
  { to: "/features/qr-code", label: "QR Code Menu", desc: "Print once, use forever", icon: QrCode },
  { to: "/features/order-management", label: "Order Management", desc: "Track & manage all orders", icon: ShoppingCart },
  { to: "/features/table-management", label: "Table Management", desc: "Real-time table status", icon: TableIcon },
  { to: "/features/menu-management", label: "Digital Menu", desc: "Beautiful mobile menus", icon: Smartphone },
  { to: "/features/website-builder", label: "Restaurant Website", desc: "Professional online presence", icon: Globe },
  { to: "/features/customer-management", label: "Customer Management", desc: "Loyalty & feedback", icon: Users },
  { to: "/features/multi-branch", label: "Multi-Branch", desc: "Control all locations", icon: Store },
  { to: "/features/multi-menu", label: "Multi-Menu", desc: "Different menus per branch", icon: BookOpen },
  { to: "/features/inventory", label: "Inventory", desc: "Track stock & reduce waste", icon: Package },
  { to: "/features/payment-integration", label: "Payment Integration", desc: "Telebirr, CBE Birr, HelloCash", icon: Wallet },
  { to: "/features/reports-analytics", label: "Reports & Analytics", desc: "Data-driven decisions", icon: BarChart3 },
];

const restaurantTypes = [
  { to: "/for/cafe", label: "Cafes & Coffee Shops", icon: Coffee },
  { to: "/for/hotel", label: "Hotels & Resorts", icon: Hotel },
  { to: "/for/fast-food", label: "Fast Food", icon: Utensils },
  { to: "/for/virtual-kitchen", label: "Virtual Kitchen", icon: Cloud },
  { to: "/for/lounge-bar", label: "Lounges & Bars", icon: GlassWater },
  { to: "/for/bakery", label: "Bakeries", icon: Croissant },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [typesOpen, setTypesOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Menuroom</span>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">M</span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-gray-700 hover:text-orange-600 transition"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-semibold transition ${isActive ? "text-orange-600" : "text-gray-900 hover:text-orange-600"}`
            }
          >
            Home
          </NavLink>

          {/* Features Dropdown */}
          <div
            className="relative"
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <button
              onMouseEnter={() => setFeaturesOpen(true)}
              className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 hover:text-orange-600 transition"
            >
              Features
              <ChevronDown className={`h-4 w-4 transition-transform ${featuresOpen ? "rotate-180" : ""}`} />
            </button>

            {featuresOpen && (
             <div
  onMouseEnter={() => setFeaturesOpen(true)}
  onMouseLeave={() => setFeaturesOpen(false)}
  className="fixed inset-x-0 top-20 left-1/2 -translate-x-1/2 w-max min-w-[900px] max-w-6xl 
             bg-white rounded-3xl shadow-2xl ring-1 ring-gray-200 z-50 overflow-hidden"
>
                <div className="grid grid-cols-4 gap-2 p-2">
                  {features.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setFeaturesOpen(false)}
                      className="block rounded-2xl border border-gray-200 p-5 hover:border-orange-500 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-5">
                        <item.icon className="h-8 w-8 text-gray-800 group-hover:text-orange-600 transition" />
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-orange-600">{item.label}</p>
                          <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </NavLink>
                  ))}
                </div>

                <div className="bg-gray-50 border-t border-gray-200 px-10 py-2">
                  <div className="flex justify-between items-center">
                    <a href="https://menuroom.et/demo" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-2">
                      Watch Demo →
                    </a>
                    <a href="https://menuroom.et/contact" className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-2">
                      Contact Sales →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* For Dropdown */}
          <div
            className="relative"
            onMouseLeave={() => setTypesOpen(false)}
          >
            <button
              onMouseEnter={() => setTypesOpen(true)}
              className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 hover:text-orange-600 transition"
            >
              Restaurant type
              <ChevronDown className={`h-4 w-4 transition-transform ${typesOpen ? "rotate-180" : ""}`} />
            </button>

            {typesOpen && (
              <div
                onMouseEnter={() => setTypesOpen(true)}
                className="fixed inset-x-0 top-20 left-1/2 -translate-x-1/2 w-max min-w-[900px] max-w-6xl 
             bg-white rounded-3xl shadow-2xl ring-1 ring-gray-200 z-50 overflow-hidden"
              >
                <div className="grid grid-cols-2 p-6 gap-4">
                  {restaurantTypes.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setTypesOpen(false)}
                      className="group flex items-center justify-between rounded-2xl  px-6 py-4 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <item.icon className="h-7 w-7 text-gray-800 group-hover:text-orange-600 transition" />
                        <span className="font-medium text-gray-900 group-hover:text-orange-600">{item.label}</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition" />
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `text-sm font-semibold transition ${isActive ? "text-orange-600" : "text-gray-900 hover:text-orange-600"}`
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `text-sm font-semibold transition ${isActive ? "text-orange-600" : "text-gray-900 hover:text-orange-600"}`
            }
          >
            Resources
          </NavLink>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          <a
            href="https://app.menuroom.et/login"
            className="text-sm font-semibold text-gray-900 hover:text-orange-600 transition"
          >
            Log in
          </a>
          <a
            href="https://app.menuroom.et/signup"
            className="rounded-xl bg-orange-600 px-8 py-3 text-sm font-bold text-white shadow-lg hover:bg-orange-700 transition"
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
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-6 py-8 space-y-6">
              <NavLink to="/" className="block text-lg font-semibold text-gray-900">Home</NavLink>
              <NavLink to="/pricing" className="block text-lg font-semibold text-gray-900">Pricing</NavLink>
              <NavLink to="/resources" className="block text-lg font-semibold text-gray-900">Resources</NavLink>

              <div className="pt-8 border-t space-y-4">
                <a href="https://app.menuroom.et/login" className="block w-full text-center py-3 text-lg font-semibold text-gray-900 border border-gray-300 rounded-xl hover:border-orange-600">
                  Log in
                </a>
                <a href="https://app.menuroom.et/signup" className="block w-full text-center py-3 text-lg font-bold text-white bg-orange-600 rounded-xl hover:bg-orange-700 shadow-lg">
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
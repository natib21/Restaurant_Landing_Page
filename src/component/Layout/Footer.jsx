// components/Layout/Footer.jsx
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl shadow-lg" />
              <h2 className="text-3xl font-bold text-gray-900">Menuroom</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              The complete digital platform for Ethiopian restaurants. From QR menus to multi-branch
              management — built locally, loved nationally.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-6">Product</h3>
            <ul className="space-y-4">
              {[
                { to: '/features/qr-code', label: 'QR Code Menu' },
                { to: '/features/menu-management', label: 'Digital Menu' },
                { to: '/features/order-management', label: 'Order Management' },
                { to: '/features/table-management', label: 'Table Management' },
                { to: '/features/pos', label: 'POS System' },
                { to: '/features/multi-branch', label: 'Multi-Branch Control' },
                { to: '/pricing', label: 'Pricing' },
              ].map(item => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/blog', label: 'Blog' },
                { to: '/careers', label: 'Careers' },
                { to: '/contact', label: 'Contact' },
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Service' },
              ].map(item => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-gray-600 hover:text-blue-600 transition group flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-6">Get in Touch</h3>
            <ul className="space-y-5 mb-8">
              <li className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <span>hello@menuroom.et</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <span>+251 911 234 567</span>
              </li>
              <li className="flex items-start text-gray-600">
                <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-0.5" />
                <span>
                  Addis Ababa, Ethiopia
                  <br />
                  Bole Medhanealem
                </span>
              </li>
            </ul>

            <a
              href="https://app.menuroom.et/signup"
              className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-900 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Mesob Technologies PLC. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Proudly made in <span className="text-green-600 font-bold">Ethiopia</span> for Ethiopian
            restaurants
          </p>
        </div>
      </div>
    </footer>
  );
}

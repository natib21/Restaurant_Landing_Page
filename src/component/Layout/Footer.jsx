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
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl" />
              <h2 className="text-3xl font-bold text-white">Menuroom</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              The all-in-one digital solution for Ethiopian restaurants. From QR menus to
              multi-branch management — built for cafes, hotels, fast food, and traditional
              restaurants.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/menuroom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/menuroom.et"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/menuroomet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@menuroom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Product</h3>
            <ul className="space-y-3">
              {[
                { to: '/features/pos', label: 'POS System' },
                { to: '/features/menu-management', label: 'Digital Menu' },
                { to: '/features/table-management', label: 'Table Management' },
                { to: '/features/qr-code', label: 'QR Code Menu' },
                { to: '/features/multi-branch', label: 'Multi-Branch' },
                { to: '/pricing', label: 'Pricing' },
              ].map(item => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center space-x-2 hover:text-orange-500 transition group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold text-lg mb-5">Company</h3>
              <ul className="space-y-3">
                {[
                  { to: '/about', label: 'About Us' },
                  { to: '/careers', label: 'Careers' },
                  { to: '/blog', label: 'Blog' },
                  { to: '/contact', label: 'Contact' },
                  { to: '/privacy', label: 'Privacy Policy' },
                  { to: '/terms', label: 'Terms of Service' },
                ].map(item => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="flex items-center space-x-2 hover:text-orange-500 transition group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-5">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>hello@menuroom.et</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>+251 911 234 567</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <span>
                    Addis Ababa, Ethiopia
                    <br />
                    Bole Road, Near Medhanealem
                  </span>
                </li>
              </ul>

              <a
                href="https://app.menuroom.et/signup"
                className="inline-block mt-8 px-8 py-4 bg-orange-600 text-white font-bold rounded-xl rounded-lg hover:bg-orange-700 transition shadow-lg"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-10 border-t border-gray-800 text-center text-gray-500">
            <p className="text-sm">
              © {new Date().getFullYear()} Menuroom Technologies PLC. All rights reserved. Made with{' '}
              <span className="text-red-500">❤</span> in Ethiopia
            </p>
            <p className="text-xs mt-3">Empowering Ethiopian restaurants with modern technology</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

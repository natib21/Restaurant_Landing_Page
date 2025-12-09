// src/components/home/HeroCTAs.jsx
import { Link } from 'react-router-dom';

export const HeroCTAs = ({
  primaryText = 'Start Free Trial',
  primaryLink = 'https://app.menuroom.et/signup',
  secondaryText = 'See how it works',
  secondaryLink = '/features/qr-code',
}) => (
  <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
    <a
      href={primaryLink}
      className="w-full sm:w-auto rounded-xl bg-gradient-to-br from-blue-500 to-blue-900 px-6 py-3 text-lg font-bold text-white shadow-lg hover:from-blue-600 hover:to-blue-800 transition"
    >
      {primaryText}
    </a>
    <Link
      to={secondaryLink}
      className="text-lg font-semibold text-blue-900 hover:text-blue-600 transition"
    >
      {secondaryText}
    </Link>
  </div>
);

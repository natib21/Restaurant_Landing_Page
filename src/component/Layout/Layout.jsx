// components/Layout/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../ScrollTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pb-16 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

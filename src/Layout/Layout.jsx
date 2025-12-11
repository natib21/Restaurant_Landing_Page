// components/Layout/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../component/ScrollTop';
import PreFooterCTA from './PreFooterCTA';
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-white">
        <Outlet />
      </main>

      <PreFooterCTA />

      <Footer />
    </>
  );
}

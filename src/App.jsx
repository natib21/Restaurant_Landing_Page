import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
// import ScrollToTop from "./component/ScrollTop";
import { useEffect } from 'react';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import POS from './pages/POS';
import QRMenu from './pages/QrCodeMenu';
import OrderManagement from './pages/Order';
import TableManagement from './pages/Table';
import Menu from './pages/Menu';
import WebBuilder from './pages/WebsiteBuilder';
import Customer from './pages/Customer';
import MultiBranch from './pages/MultiBranch';
import MultiMenu from './pages/MultiMenu';
import Inventory from './pages/Inventory';
import PaymentIntegration from './pages/PaymentIntegration';
import DeliveryManagement from './pages/Delivery';
import Cafee from './pages/Cafee';
import FastFood from './pages/FastFood';
import LoungeAndBar from './pages/LoungeAndBars';
import VirtualKitchen from './pages/VirtualsKitchen';
import HoteResorts from './pages/HotelsResorts';
import Bakeries from './pages/Bakeries';
// import Pricing from "./pages/Pricing";
// import Resources from "./pages/Resources";
// import NotFound from "./pages/NotFound";
// import RestaurantTypesLayout from "./pages/RestaurantTypes/RestaurantTypesLayout";
// import Cafe from "./pages/RestaurantTypes/Cafe";
// import Hotel from "./pages/RestaurantTypes/Hotel";
// import FastFood from "./pages/RestaurantTypes/FastFood";
// import VirtualKitchen from "./pages/RestaurantTypes/VirtualKitchen";
// import LoungeBar from "./pages/RestaurantTypes/LoungeBar";
// import Bakery from "./pages/RestaurantTypes/Bakery";
// import FeaturesLayout from "./features/FeaturesLayout";
// import POS from "./features/POS/POS";
// import OrderManagement from "./features/OrderManagement/OrderManagement";
// import MenuManagement from "./features/MenuManagement/MenuManagement";
// import TableManagement from "./features/TableManagement/TableManagement";
// import QRCode from "./features/QRCode/QRCode";
// import CustomerManagement from "./features/CustomerManagement/CustomerManagement";
// import WebsiteBuilder from "./features/WebsiteBuilder/WebsiteBuilder";
// import Delivery from "./features/Delivery/Delivery";
// import ReportsAnalytics from "./features/ReportsAnalytics/ReportsAnalytics";
// import MultiBranch from "./features/MultiBranch/MultiBranch";
// import MultiMenu from "./features/MultiMenu/MultiMenu";
// import PaymentIntegration from "./features/PaymentIntegration/PaymentIntegration";
// import Inventory from "./features/Inventory/Inventory";

function App() {
   useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/677283df49e2fd8dfe00696a/1igbl68tu";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup when component unmounts
    };
  }, []);
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="pos" element={<POS />} />
          <Route path="qr-menu" element={<QRMenu />} />
          <Route path="order" element={<OrderManagement />} />
          <Route path="table" element={<TableManagement />} />
          <Route path="menu" element={<Menu />} />
          <Route path="website-builder" element={<WebBuilder />} />
          <Route path="customer" element={<Customer />} />
          <Route path="multi-branch" element={<MultiBranch />} />
          <Route path="multi-menu" element={<MultiMenu />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="payment-integration" element={<PaymentIntegration />} />
          <Route path="delivery-managment" element={<DeliveryManagement />} />
          <Route path="cafe" element={<Cafee />} />
          <Route path="fast-food" element={<FastFood />} />
          <Route path="lounge-bar" element={<LoungeAndBar />} />
          <Route path="virtual-kitchen" element={<VirtualKitchen />} />
          <Route path="hotel" element={<HoteResorts />} />
          <Route path="bakery" element={<Bakeries />} />

          {/* RESTAURANT TYPES */}
          {/* <Route path="/for" element={<RestaurantTypesLayout />}>
            <Route index element={<Navigate to="cafe" replace />} />
            <Route path="cafe" element={<Cafe />} />
            <Route path="hotel" element={<Hotel />} />
            <Route path="fast-food" element={<FastFood />} />
            <Route path="virtual-kitchen" element={<VirtualKitchen />} />
            <Route path="lounge-bar" element={<LoungeBar />} />
            <Route path="bakery" element={<Bakery />} />
          </Route> */}

          {/* STATIC PAGES */}
          {/* <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} /> */}

          {/* Redirects */}
          {/* <Route path="/home" element={<Navigate to="/" replace />} /> */}
        </Route>

        {/* AUTH & DASHBOARD */}
        <Route path="/signin" element={<div>Sign In</div>} />
        <Route path="/signup" element={<div>Sign Up</div>} />
        <Route path="/dashboard/*" element={<div>Dashboard</div>} />

        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;

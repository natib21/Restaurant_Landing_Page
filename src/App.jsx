import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './component/Layout/Layout';
// import ScrollToTop from "./component/ScrollTop";

import Home from './pages/Home';
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
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* FEATURES — All in features/ folder */}
          {/* <Route path="/features" element={<FeaturesLayout />}>
            <Route index element={<POS />} />
            <Route path="pos" element={<POS />} />
            <Route path="order-management" element={<OrderManagement />} />
            <Route path="menu-management" element={<MenuManagement />} />
            <Route path="table-management" element={<TableManagement />} />
            <Route path="qr-code" element={<QRCode />} />
            <Route path="customer-management" element={<CustomerManagement />} />
            <Route path="website-builder" element={<WebsiteBuilder />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="reports-analytics" element={<ReportsAnalytics />} />
            <Route path="multi-branch" element={<MultiBranch />} />
            <Route path="multi-menu" element={<MultiMenu />} />
            <Route path="payment-integration" element={<PaymentIntegration />} />
            <Route path="inventory" element={<Inventory />} />
          </Route> */}

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

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Pricing from "../pages/Pricing";
import Quote from "../pages/Quote";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminPortfolio from "../pages/admin/AdminPortfolio";
import AdminServices from "../pages/admin/AdminServices";
import AdminPricing from "../pages/admin/AdminPricing";
import AdminQuotes from "../pages/admin/AdminQuotes";
import ProtectedRoute from "./ProtectedRoute";





export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={
  <ProtectedRoute>
    <AdminDashboard />
  </ProtectedRoute>
} />

<Route path="/admin/services" element={
  <ProtectedRoute>
    <AdminServices />
  </ProtectedRoute>
} />

<Route path="/admin/portfolio" element={
  <ProtectedRoute>
    <AdminPortfolio />
  </ProtectedRoute>
} />

<Route path="/admin/pricing" element={
  <ProtectedRoute>
    <AdminPricing />
  </ProtectedRoute>
} />

<Route path="/admin/quotes" element={
  <ProtectedRoute>
    <AdminQuotes />
  </ProtectedRoute>
} />






      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

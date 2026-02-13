import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      <div className="flex-grow">
        <AppRoutes />
      </div>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}

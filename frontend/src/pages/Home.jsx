import { useEffect, useState } from "react";
import api from "../api/api";
import ServiceBox from "../components/ServiceBox";
import PortfolioCard from "../components/PortfolioCard";
import PricingCard from "../components/PricingCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [services, setServices] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [pricing, setPricing] = useState([]);

  const [loadingServices, setLoadingServices] = useState(true);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);
  const [loadingPricing, setLoadingPricing] = useState(true);

  // ✅ Fetch Services
  const fetchServices = async () => {
    try {
      setLoadingServices(true);
      const res = await api.get("/services");
      setServices(res.data);
    } catch (error) {
      console.log("Services Error:", error);
    } finally {
      setLoadingServices(false);
    }
  };

  // ✅ Fetch Portfolio
  const fetchPortfolio = async () => {
    try {
      setLoadingPortfolio(true);
      const res = await api.get("/portfolio");
      setPortfolio(res.data);
    } catch (error) {
      console.log("Portfolio Error:", error);
    } finally {
      setLoadingPortfolio(false);
    }
  };

  // ✅ Fetch Pricing
  const fetchPricing = async () => {
    try {
      setLoadingPricing(true);
      const res = await api.get("/pricing");
      setPricing(res.data);
    } catch (error) {
      console.log("Pricing Error:", error);
    } finally {
      setLoadingPricing(false);
    }
  };

  useEffect(() => {
    fetchServices();
    fetchPortfolio();
    fetchPricing();
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50 py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">
                    <p class=" text-4x1 text-red-500 font-bold ">
    Trusted by 5000+ Customers
  </p>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Premium Printing Services <br />
            <span className="text-blue-600">Pooja Printers</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide high-quality visiting cards, banners, stickers,
            pamphlets, bill books, wedding cards and more in Kandivali West,
            Mumbai.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/quote"
              className="px-7 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Get Quote
            </Link>

            <a
              href="https://wa.me/917506110844"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Our Services
              </h2>
              <p className="mt-2 text-gray-600">
                Explore our professional printing services.
              </p>
            </div>

            <Link
              to="/services"
              className="px-6 py-2 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              View More →
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loadingServices ? (
              <p className="text-gray-500 font-semibold">Loading services...</p>
            ) : (
              services.slice(0, 8).map((service) => (
                <ServiceBox
                  key={service._id}
                  title={service.title}
                  desc={service.desc}
                  icon={service.icon}
                  color={service.color}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why Choose Pooja Printers?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We deliver premium printing solutions with quality assurance, fast
            delivery and affordable pricing in Kandivali West, Mumbai.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow border rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900">
                High Quality Print
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                We use premium paper and advanced printing machines for perfect
                output.
              </p>
            </div>

            <div className="bg-white shadow border rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Get your orders delivered quickly with our efficient production
                process.
              </p>
            </div>

            <div className="bg-white shadow border rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900">
                Affordable Pricing
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                We offer the best printing prices in Mumbai for bulk and retail
                orders.
              </p>
            </div>

            <div className="bg-white shadow border rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900">
                Trusted Local Service
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Trusted by businesses and customers in Kandivali West for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Latest Portfolio
              </h2>
              <p className="mt-2 text-gray-600">
                Some of our recent printing work.
              </p>
            </div>

            <Link
              to="/portfolio"
              className="px-6 py-2 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              View More →
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loadingPortfolio ? (
              <p className="text-gray-500 font-semibold">
                Loading portfolio...
              </p>
            ) : (
              portfolio.slice(0, 6).map((item) => (
                <PortfolioCard
                  key={item._id}
                  img={item.imageUrl}
                  category={item.category}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Pricing Packages
              </h2>
              <p className="mt-2 text-gray-600">
                Affordable pricing for all printing needs.
              </p>
            </div>

            <Link
              to="/pricing"
              className="px-6 py-2 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              View More →
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadingPricing ? (
              <p className="text-gray-500 font-semibold">Loading pricing...</p>
            ) : (
              pricing.slice(0, 6).map((item) => (
                <PricingCard
                  key={item._id}
                  title={item.title}
                  price={item.price}
                  unit={item.unit}
                  features={item.features}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Visit Our Shop
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              We are located in Kandivali West, Mumbai. Visit us for premium
              printing services.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl shadow-lg border">
            <iframe
              title="Pooja Printers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.133965916876!2d72.8440601!3d19.2091441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c5d7c9a1a1%3A0x1234567890abcdef!2sKandivali%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold">
            Need High Quality Printing?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-white/90 text-lg">
            Contact Pooja Printers today and get premium printing services at
            affordable rates.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/quote"
              className="px-7 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:bg-gray-100 transition"
            >
              Get Quote
            </Link>

            <a
              href="https://wa.me/917506110844"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useState } from "react";
import api from "../api/api";
import PricingCard from "../components/PricingCard";

export default function Pricing() {
  const [pricing, setPricing] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPricing = async () => {
    try {
      setLoading(true);
      const res = await api.get("/pricing");
      setPricing(res.data);
    } catch (error) {
      console.log("Pricing Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPricing();
  }, []);

  return (
    <div>
      {/* HEADER */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50 py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Our Pricing Packages
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Affordable pricing plans for visiting cards, banners, stickers,
            pamphlets, bill books and more.
          </p>
        </div>
      </section>

      {/* PRICING LIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {loading ? (
            <p className="text-center text-gray-500 text-lg font-semibold">
              Loading pricing...
            </p>
          ) : pricing.length === 0 ? (
            <p className="text-center text-gray-500 text-lg font-semibold">
              No pricing packages found ❌
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricing.map((item) => (
                <PricingCard
                  key={item._id}
                  title={item.title}
                  price={item.price}
                  unit={item.unit}
                  features={item.features}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Need Custom Pricing?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Contact us for bulk printing orders and custom package pricing.
          </p>

          <div className="mt-7 flex justify-center gap-4 flex-wrap">
            <a
              href="/quote"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Get Custom Quote
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useState } from "react";
import ServiceBox from "../components/ServiceBox";
import api from "../api/api";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const res = await api.get("/services");
      setServices(res.data);
    } catch (error) {
      console.log("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      {/* HEADER */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50 py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Our Services
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            We offer comprehensive printing solutions for all your business and
            personal needs in Kandivali West, Mumbai.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {loading ? (
            <p className="text-center text-gray-500 text-lg font-semibold">
              Loading services...
            </p>
          ) : services.length === 0 ? (
            <p className="text-center text-gray-500 text-lg font-semibold">
              No services found ❌
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceBox
                  key={service._id}
                  title={service.title}
                  desc={service.desc}
                  icon={service.icon}
                  color={service.color}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Need Bulk Printing?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide affordable bulk printing packages for businesses, shops,
            events and corporate orders.
          </p>

          <div className="mt-7 flex justify-center gap-4 flex-wrap">
            <a
              href="/quote"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Get Bulk Quote
            </a>

            <a
              href="https://wa.me/917506110844"
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

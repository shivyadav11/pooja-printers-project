import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

export default function ServicesPreview() {
  const services = [
    {
      title: "Visiting Cards",
      desc: "Premium quality business cards",
    },
    {
      title: "Sticker Printing",
      desc: "Custom vinyl & paper stickers",
    },
    {
      title: "Bill Book",
      desc: "Customized bill books",
    },
    {
      title: "Challan Book",
      desc: "Professional challan books",
    },
    {
      title: "Voucher",
      desc: "Payment & receipt vouchers",
    },
    {
      title: "Banner Printing",
      desc: "Large format banners & flex",
    },
    {
      title: "Letter Head",
      desc: "Professional letterheads",
    },
    {
      title: "Binding Works",
      desc: "Book & document binding",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Best Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive printing solutions for all your business and
            personal needs
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((item, index) => (
            <ServiceCard key={index} title={item.title} desc={item.desc} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            View More →
          </Link>
        </div>
      </div>
    </section>
  );
}

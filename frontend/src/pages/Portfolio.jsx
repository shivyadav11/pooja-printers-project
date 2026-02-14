import { useEffect, useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import api from "../api/api";

export default function Portfolio() {
  const categories = [
    "All",
    "Visiting Cards",
    "Banners",
    "Stickers",
    "Pamphlets",
    "Bill Books",
    "Letterhead",
    "Cards",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPortfolio = async () => {
    try {
      const res = await api.get("/portfolio");
      setPortfolio(res.data);
    } catch (error) {
      console.log("Portfolio fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const filteredData =
    activeCategory === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* HEADER */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50 py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Our Portfolio
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our latest printing work including visiting cards, banners,
            stickers, pamphlets and more.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium border transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {loading ? (
            <p className="text-center text-gray-500 text-lg font-semibold">
              Loading portfolio...
            </p>
          ) : filteredData.length === 0 ? (
            <p className="text-center text-gray-500 text-lg font-semibold">
              No portfolio items found ❌
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredData.map((item) => (
                <PortfolioCard
                  key={item._id}
                  img={item.imageUrl}
                  category={item.category}
                />
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-14">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Want Similar Printing Designs?
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Contact us today and get high-quality printing at affordable
              prices.
            </p>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <a
                href="/quote"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Get Quote
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
        </div>
      </section>
    </div>
  );
}

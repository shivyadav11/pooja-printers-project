export default function PortfolioPreview() {
  const images = [
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1607082349566-1870c37e2f9d?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Recent Work
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Check out our latest printing designs and completed projects.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition"
            >
              <img
                src={img}
                alt="Portfolio"
                className="w-full h-44 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/portfolio"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

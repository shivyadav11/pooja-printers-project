export default function PortfolioCard({ img, category }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition group">
      <img
        src={img}
        alt={category}
        className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="p-4 bg-white">
        <p className="text-sm font-semibold text-gray-800">{category}</p>
      </div>
    </div>
  );
}

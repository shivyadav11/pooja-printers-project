export default function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white border shadow-sm rounded-2xl p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">{desc}</p>

      <button className="mt-5 px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
        Order Now
      </button>
    </div>
  );
}

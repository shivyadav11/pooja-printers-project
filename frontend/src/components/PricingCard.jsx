export default function PricingCard({ title, price, unit, features }) {
  return (
    <div className="bg-white border shadow-sm rounded-2xl p-7 hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      <div className="mt-4">
        <p className="text-4xl font-extrabold text-blue-600">{price}</p>
        <p className="text-sm text-gray-500 mt-1">{unit}</p>
      </div>

      <ul className="mt-5 space-y-2 text-gray-600 text-sm">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green-600 font-bold">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex gap-3">
        <a
          href="/quote"
          className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition w-full text-center"
        >
          Get Quote
        </a>

        <a
          href="https://wa.me/917506110844"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition w-full text-center"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

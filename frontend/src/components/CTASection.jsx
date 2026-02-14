export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Need Printing Services in Mumbai ?
        </h2>

        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          Contact Pooja Printers today and get your order delivered fast with
          premium quality printing.
        </p>

        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <a
            href="tel:+919999999999"
            className="px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold hover:bg-gray-200 transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
          >
            WhatsApp Order
          </a>
        </div>
      </div>
    </section>
  );
}

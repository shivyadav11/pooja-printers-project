export default function WhyChooseUs() {
  const points = [
    {
      title: "High Quality Print",
      desc: "We use premium printing materials for sharp colors and clean finish.",
    },
    {
      title: "Fast Delivery",
      desc: "Quick turnaround time with same-day printing for selected products.",
    },
    {
      title: "Affordable Pricing",
      desc: "Best rates for bulk orders and regular customers.",
    },
    {
      title: "Trusted Local Service",
      desc: "Serving Kandivali and nearby areas with reliability and trust.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Why Choose Pooja Printers?
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We deliver quality printing solutions that help your business grow.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

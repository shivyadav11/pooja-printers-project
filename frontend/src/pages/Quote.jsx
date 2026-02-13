import { useEffect, useState } from "react";
import api from "../api/api";

export default function Quote() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    product: "",
    quantity: "",
    size: "",
    message: "",
    estimatedPrice: "",
  });

  // ✅ Basic price chart (demo)
  const priceChart = {
    "Visiting Cards": 0.6, // per piece
    Banners: 25, // per sq.ft
    Stickers: 2, // per piece
    Pamphlets: 3, // per piece
    "Bill Books": 30, // per book
    Letterhead: 1.5, // per page
    "Wedding Cards": 12, // per card
    Posters: 15, // per poster
    Brochure: 10, // per brochure
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Auto price calculate
  useEffect(() => {
    if (!formData.product || !formData.quantity) return;

    const rate = priceChart[formData.product] || 0;
    const qty = Number(formData.quantity);

    if (!qty || qty <= 0) {
      setFormData((prev) => ({ ...prev, estimatedPrice: "" }));
      return;
    }

    const total = Math.round(rate * qty);

    setFormData((prev) => ({
      ...prev,
      estimatedPrice: total.toString(),
    }));
  }, [formData.product, formData.quantity]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.product ||
      !formData.quantity ||
      !formData.size
    ) {
      alert("Please fill all required fields ❌");
      return;
    }

    if (formData.mobile.length < 10) {
      alert("Enter valid mobile number ❌");
      return;
    }

    try {
      setLoading(true);

      await api.post("/quotes", formData);

      alert("Quote Request Submitted Successfully ✅");

      setFormData({
        name: "",
        mobile: "",
        product: "",
        quantity: "",
        size: "",
        message: "",
        estimatedPrice: "",
      });
    } catch (error) {
      console.log("Quote Submit Error:", error);
      alert(error.response?.data?.message || "Quote submission failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* HEADER */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50 py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Get a Quote
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Fill out the form below and we will contact you with the best price
            for your printing needs.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow border rounded-2xl p-10">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center">
              Request Your Printing Quote
            </h2>

            <p className="text-gray-600 text-center mt-2">
              Estimated price will be calculated automatically.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Mobile Number *
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Product */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Product Type *
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Product</option>
                  <option value="Visiting Cards">Visiting Cards</option>
                  <option value="Banners">Banners</option>
                  <option value="Stickers">Stickers</option>
                  <option value="Pamphlets">Pamphlets</option>
                  <option value="Bill Books">Bill Books</option>
                  <option value="Letterhead">Letterhead</option>
                  <option value="Wedding Cards">Wedding Cards</option>
                  <option value="Posters">Posters</option>
                  <option value="Brochure">Brochure</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Quantity *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Example: 1000"
                  className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Size *
                </label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  placeholder="Example: 3.5 x 2 inch"
                  className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Estimated Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Estimated Price (Auto Calculated)
                </label>
                <input
                  type="text"
                  name="estimatedPrice"
                  value={formData.estimatedPrice}
                  readOnly
                  className="mt-2 w-full px-4 py-3 rounded-xl border bg-gray-100 font-bold text-blue-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us your printing requirements..."
                  className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Quote Request"}
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                *Estimated price is approximate. Final price depends on design &
                material.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

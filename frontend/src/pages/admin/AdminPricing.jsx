import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../api/api";

export default function AdminPricing() {
  const [pricingList, setPricingList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    unit: "",
    featureInput: "",
    features: [],
  });

  // ✅ Fetch Pricing
  const fetchPricing = async () => {
    try {
      setLoading(true);
      const res = await api.get("/pricing");
      setPricingList(res.data);
    } catch (error) {
      console.log("Pricing Fetch Error:", error);
      alert("Error fetching pricing ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPricing();
  }, []);

  // ✅ Handle Inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Add Feature
  const addFeature = () => {
    if (!formData.featureInput.trim()) return;

    setFormData({
      ...formData,
      features: [...formData.features, formData.featureInput],
      featureInput: "",
    });
  };

  // ✅ Remove Feature
  const removeFeature = (index) => {
    const updated = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: updated });
  };

  // ✅ Add Pricing Package (Backend)
  const handleAddPricing = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.price || !formData.unit) {
      alert("Please fill all required fields ❌");
      return;
    }

    try {
      await api.post("/pricing", {
        title: formData.title,
        price: formData.price,
        unit: formData.unit,
        features: formData.features,
      });

      alert("Pricing Package Added ✅");

      setFormData({
        title: "",
        price: "",
        unit: "",
        featureInput: "",
        features: [],
      });

      fetchPricing();
    } catch (error) {
      console.log("Pricing Add Error:", error);
      alert("Pricing add failed ❌");
    }
  };

  // ✅ Delete Pricing
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this pricing package?"))
      return;

    try {
      await api.delete(`/pricing/${id}`);
      alert("Pricing Deleted ✅");
      fetchPricing();
    } catch (error) {
      console.log("Delete Pricing Error:", error);
      alert("Delete failed ❌");
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">
          Manage Pricing
        </h1>
        <p className="text-gray-600 mt-2">
          Add and manage pricing packages for your website.
        </p>

        {/* ADD PRICING FORM */}
        <div className="mt-10 bg-white shadow border rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Add New Pricing Package
          </h2>

          <form onSubmit={handleAddPricing} className="mt-6 grid gap-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Package Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Example: Banner Printing"
                className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Price + Unit */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Price *
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Example: ₹499"
                  className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Unit *
                </label>
                <input
                  type="text"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  placeholder="Example: 500 pcs"
                  className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Add Features (Optional)
              </label>

              <div className="flex gap-3 mt-2">
                <input
                  type="text"
                  name="featureInput"
                  value={formData.featureInput}
                  onChange={handleChange}
                  placeholder="Example: Premium Quality Paper"
                  className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <button
                  type="button"
                  onClick={addFeature}
                  className="px-5 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition"
                >
                  Add
                </button>
              </div>

              {/* Feature List */}
              {formData.features.length > 0 && (
                <div className="mt-4 space-y-2">
                  {formData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-xl"
                    >
                      <p className="text-sm text-gray-800 font-medium">
                        {feature}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="text-red-600 font-bold hover:text-red-800"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition"
            >
              Add Pricing Package
            </button>
          </form>
        </div>

        {/* PRICING LIST */}
        <div className="mt-12 bg-white shadow border rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900">Pricing Packages</h2>

          {loading ? (
            <p className="text-gray-500 mt-6 font-semibold">
              Loading pricing...
            </p>
          ) : pricingList.length === 0 ? (
            <p className="text-gray-500 mt-6 font-semibold">
              No pricing packages found ❌
            </p>
          ) : (
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingList.map((item) => (
                <div
                  key={item._id}
                  className="bg-white border shadow-sm rounded-2xl p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-3xl font-extrabold text-blue-600">
                    ₹{item.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{item.unit}</p>

                  <ul className="mt-5 space-y-2 text-sm text-gray-600">
                    {item.features?.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="mt-6 w-full py-2 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

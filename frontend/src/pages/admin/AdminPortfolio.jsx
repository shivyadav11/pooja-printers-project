import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../api/api";

export default function AdminPortfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const categories = [
    "Visiting Cards",
    "Banners",
    "Stickers",
    "Pamphlets",
    "Bill Books",
    "Letterhead",
    "Cards",
  ];

  // ✅ Fetch Portfolio
  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      const res = await api.get("/portfolio");
      setPortfolio(res.data);
    } catch (error) {
      console.log("Portfolio Fetch Error:", error);
      alert("Error fetching portfolio ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  // ✅ Handle Text Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle File Input
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ✅ Upload Portfolio
  const handleAddPortfolio = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.category || !image) {
      alert("Please fill all fields and upload image ❌");
      return;
    }

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("category", formData.category);
      data.append("image", image);

      await api.post("/portfolio", data);

      alert("Portfolio Added Successfully ✅");

      setFormData({
        title: "",
        category: "",
      });

      setImage(null);
      setPreview("");

      fetchPortfolio();
    } catch (error) {
      console.log("Portfolio Upload Error:", error);
      alert("Portfolio upload failed ❌");
    }
  };

  // ✅ Delete Portfolio
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this portfolio item?")) return;

    try {
      await api.delete(`/portfolio/${id}`);
      alert("Portfolio Deleted ✅");
      fetchPortfolio();
    } catch (error) {
      console.log("Delete Error:", error);
      alert("Delete failed ❌");
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">
          Manage Portfolio
        </h1>
        <p className="text-gray-600 mt-2">
          Upload portfolio images and manage your gallery.
        </p>

        {/* ADD PORTFOLIO FORM */}
        <div className="mt-10 bg-white shadow border rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Upload New Portfolio Item
          </h2>

          <form onSubmit={handleAddPortfolio} className="mt-6 grid gap-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Example: Wedding Invitation Card"
                className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Upload Image */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Upload Image *
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2 w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Preview */}
            {preview && (
              <div className="mt-3">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Preview:
                </p>
                <img
                  src={preview}
                  alt="preview"
                  className="w-full max-w-sm rounded-xl border shadow"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition"
            >
              Upload Portfolio
            </button>
          </form>
        </div>

        {/* PORTFOLIO LIST */}
        <div className="mt-12 bg-white shadow border rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900">Portfolio Gallery</h2>

          {loading ? (
            <p className="text-gray-500 mt-6 font-semibold">
              Loading portfolio...
            </p>
          ) : portfolio.length === 0 ? (
            <p className="text-gray-500 mt-6 font-semibold">
              No portfolio items found ❌
            </p>
          ) : (
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {portfolio.map((item) => (
                <div
                  key={item._id}
                  className="bg-white border shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-44 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      Category: {item.category}
                    </p>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="mt-4 w-full py-2 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

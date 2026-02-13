import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import api from "../../api/api";

import {
  FaIdCard,
  FaReceipt,
  FaBook,
  FaStickyNote,
  FaFlag,
  FaPrint,
  FaEnvelope,
  FaFileAlt,
  FaTools,
} from "react-icons/fa";

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    icon: "",
    color: "",
  });

  const iconList = [
    "FaIdCard",
    "FaReceipt",
    "FaBook",
    "FaStickyNote",
    "FaFlag",
    "FaPrint",
    "FaEnvelope",
    "FaFileAlt",
    "FaTools",
  ];

  const colorList = [
    "bg-blue-600",
    "bg-green-600",
    "bg-orange-500",
    "bg-red-500",
    "bg-purple-600",
    "bg-indigo-600",
    "bg-pink-600",
    "bg-teal-600",
    "bg-yellow-500",
  ];

  const iconMap = {
    FaIdCard: <FaIdCard />,
    FaReceipt: <FaReceipt />,
    FaBook: <FaBook />,
    FaStickyNote: <FaStickyNote />,
    FaFlag: <FaFlag />,
    FaPrint: <FaPrint />,
    FaEnvelope: <FaEnvelope />,
    FaFileAlt: <FaFileAlt />,
    FaTools: <FaTools />,
  };

  // ✅ Fetch Services
  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await api.get("/services");
      setServices(res.data);
    } catch (error) {
      console.log("Fetch Services Error:", error);
      alert("Services load failed ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Add Service
  const handleAddService = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.desc || !formData.icon || !formData.color) {
      alert("Please fill all fields ❌");
      return;
    }

    try {
      await api.post("/services", formData);

      alert("Service Added Successfully ✅");

      setFormData({
        title: "",
        desc: "",
        icon: "",
        color: "",
      });

      fetchServices();
    } catch (error) {
      console.log("Add Service Error:", error);
      alert(error.response?.data?.message || "Service add failed ❌");
    }
  };

  // ✅ Delete Service
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this service?")) return;

    try {
      await api.delete(`/services/${id}`);
      alert("Service Deleted ✅");
      fetchServices();
    } catch (error) {
      console.log("Delete Service Error:", error);
      alert("Delete failed ❌");
    }
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Manage Services
        </h1>
        <p className="text-gray-600 mt-2">
          Add and manage services for your website.
        </p>

        {/* ADD FORM */}
        <div className="mt-10 bg-white shadow border rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900">Add New Service</h2>

          <form onSubmit={handleAddService} className="mt-6 grid gap-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Service Title
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

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Service Description
              </label>
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                placeholder="Example: Flex banner printing with high quality material"
                rows="3"
                className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            {/* Icon */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Select Icon
              </label>

              <select
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Icon</option>
                {iconList.map((icon, index) => (
                  <option key={index} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>

              {/* Icon Preview */}
              {formData.icon && (
                <div className="mt-3 flex items-center gap-3 text-gray-800 font-semibold">
                  <span className="text-xl">{iconMap[formData.icon]}</span>
                  <span>{formData.icon}</span>
                </div>
              )}
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Select Color
              </label>
              <select
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Color</option>
                {colorList.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>

              {/* Color Preview */}
              {formData.color && (
                <div className="mt-3 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${formData.color}`}
                  ></div>
                  <span className="text-gray-700 font-semibold">
                    {formData.color}
                  </span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition"
            >
              Add Service
            </button>
          </form>
        </div>

        {/* SERVICES LIST */}
        <div className="mt-12 bg-white shadow border rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900">Services List</h2>

          {loading ? (
            <p className="text-gray-500 mt-6">Loading services...</p>
          ) : services.length === 0 ? (
            <p className="text-gray-500 text-center mt-8">
              No services found.
            </p>
          ) : (
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service._id}
                  className="bg-white border shadow-sm rounded-2xl p-6 hover:shadow-lg transition"
                >
                  <div
                    className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl`}
                  >
                    {iconMap[service.icon] || <FaPrint />}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mt-5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">{service.desc}</p>

                  <p className="text-xs text-gray-500 mt-4">
                    Icon: {service.icon} <br />
                    Color: {service.color}
                  </p>

                  <button
                    onClick={() => handleDelete(service._id)}
                    className="mt-5 w-full py-2 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
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

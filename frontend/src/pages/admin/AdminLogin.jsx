import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api"; // <-- check path (agar folder different ho to change)

export default function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/admin/login", formData);

      // Save token
      localStorage.setItem("adminToken", res.data.token);

      // optional flag
      localStorage.setItem("adminAuth", "true");

      alert("Login Successful ✅");

      navigate("/admin/dashboard");
    } catch (error) {
      console.log("Login Error:", error);

      alert(
        error.response?.data?.message || "Login Failed ❌ Please try again"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-lg border rounded-2xl p-10 w-full max-w-md">
        <u>
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Admin Panel
          </h1>
        </u>

        <p className="text-gray-600 text-center mt-2">
          Pooja Printers Dashboard Access
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@pooja.com"
              className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            Only authorized admin can access this panel.
          </p>
        </form>
      </div>
    </div>
  );
}

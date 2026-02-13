import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "block px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold"
      : "block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 transition";

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-400">Admin Panel</h2>
            <p className="text-sm text-gray-300 mt-1">Pooja Printers</p>
          </div>

          {/* Close Button Mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden text-gray-300 text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        <div className="mt-10 space-y-3">
          <NavLink
            to="/admin/dashboard"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/services"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Manage Services
          </NavLink>

          <NavLink
            to="/admin/portfolio"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Manage Portfolio
          </NavLink>

          <NavLink
            to="/admin/pricing"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Manage Pricing
          </NavLink>

          <NavLink
            to="/admin/quotes"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Quote Requests
          </NavLink>
        </div>

        <button
          onClick={handleLogout}
          className="mt-10 w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition font-semibold"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 w-full">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden px-4 py-2 rounded-xl bg-gray-900 text-white font-bold"
            >
              ☰
            </button>

            <h1 className="text-xl font-bold text-gray-900">
              Admin Dashboard Panel
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}

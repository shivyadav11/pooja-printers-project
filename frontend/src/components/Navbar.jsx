import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600 transition pb-1";

  return (
    <nav className="w-full bg-gradient-to-r from-blue-50 via-white to-orange-50 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png.png"
            alt="Pooja Printers Logo"
            className="w-19 h-20 object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-xl font-extrabold tracking-wide">
              <span className="text-blue-600">POOJA</span>{" "}
              <span className="text-orange-500">PRINTERS</span>
            </h1>
            <p className="text-xs text-gray-500 font-medium">
            
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-7">
          <NavLink className={linkClass} to="/">
            Home
          </NavLink>
          <NavLink className={linkClass} to="/services">
            Services
          </NavLink>
          <NavLink className={linkClass} to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className={linkClass} to="/pricing">
            Pricing
          </NavLink>
          <NavLink className={linkClass} to="/quote">
            Get Quote
          </NavLink>
          <NavLink className={linkClass} to="/contact">
            Contact
          </NavLink>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+917506110844"
            className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition font-semibold shadow-sm"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917506110844"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition font-semibold shadow-sm"
          >
            WhatsApp
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md px-6 py-5 flex flex-col gap-4">

          <NavLink
            onClick={() => setIsOpen(false)}
            className={linkClass}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            className={linkClass}
            to="/services"
          >
            Services
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            className={linkClass}
            to="/portfolio"
          >
            Portfolio
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            className={linkClass}
            to="/pricing"
          >
            Pricing
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            className={linkClass}
            to="/quote"
          >
            Get Quote
          </NavLink>

          <NavLink
            onClick={() => setIsOpen(false)}
            className={linkClass}
            to="/contact"
          >
            Contact
          </NavLink>

          {/* MOBILE BUTTONS */}
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="tel:+917506110844"
              className="w-full text-center px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition font-semibold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917506110844"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition font-semibold"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

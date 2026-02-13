export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          {/* <h2 className="text-2xl font-bold text-blue-400">POOJA PRINTERS</h2> */}
                    <h1 className="text-xl font-extrabold tracking-wide">
            <span className="text-blue-600">POOJA</span>{" "}
            <span className="text-orange-500">PRINTERS</span>
          </h1>
          <p className="text-gray-300 mt-3 text-sm leading-relaxed">
            Premium printing solutions in Kandivali West, Mumbai.  
            Visiting cards, bill books, stickers, banners, pamphlets & more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold">Contact</h3>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            📍 Kandivali West, Mumbai <br />
            📞 +91 7506110844<br />
            ⏰ Mon-Sat: 10 AM - 9 PM
          </p>

          <a
            href="https://wa.me/917506110844"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 px-5 py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
          >
            WhatsApp Now
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Pooja Printers | All Rights Reserved WIth ❤️
      </div>
    </footer>
  );
}

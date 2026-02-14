import { useState } from "react";
import { sendWhatsAppMessage } from "../utils/whatsapp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919999999999"; // replace with real number later

    const finalMessage = `
Hello Pooja Printers 👋

📌 Name: ${formData.name}
📞 Mobile: ${formData.mobile}

📝 Message:
${formData.message}

Please contact me.
    `;

    sendWhatsAppMessage(whatsappNumber, finalMessage);
  };

  return (
    <div>
      {/* HEADER */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50 py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Contact Pooja Printers
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Get in touch with us for all types of printing services in Kandivali
            West, Mumbai.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          
          {/* LEFT SIDE - DETAILS */}
          <div className="bg-white shadow-lg border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Business Details
            </h2>
            <p className="mt-2 text-gray-600">
              Visit our shop or contact us directly for fast printing solutions.
            </p>

            <div className="mt-8 space-y-5 text-gray-700">
              <div>
                <h3 className="font-bold text-gray-900">📍 Address</h3>
                <p className="text-sm mt-1">
                  Shop No. 14, , Mahavir Nagar, 
                  West, Mumbai - 400067
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">📞 Phone</h3>
                <p className="text-sm mt-1">+91 919999999999</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900">⏰ Working Hours</h3>
                <p className="text-sm mt-1">
                  Mon - Sat: 10:00 AM - 9:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="tel:919999999999"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white shadow-lg border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>
            <p className="mt-2 text-gray-600">
              Fill the form below and we will respond quickly.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="4"
                  className="mt-2 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition"
              >
                Send Message on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-lg border">
            <iframe
              title="Pooja Printers Location"
              src="https://www.google.com/maps?q=Kandivali%20West%20Mumbai&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

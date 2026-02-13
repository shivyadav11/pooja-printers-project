export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-orange-50">
      
      
     {/* 🔥 Blur Glow Background (Strong Visible) */}
<div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-blue-500 rounded-full blur-[120px] opacity-50"></div>

<div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-orange-500 rounded-full blur-[120px] opacity-50"></div>

<div className="absolute top-32 right-32 w-[350px] h-[350px] bg-purple-500 rounded-full blur-[120px] opacity-30"></div>


      <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
<div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md shadow-md px-4 py-2 rounded-full border border-white/30">
  <span className="text-yellow-500 text-lg">★</span>
  <p class="text-red-500 blink">
    Trusted by 5000+ Customers
  </p>
</div>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Pooja Printers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Premium Printing
            </span>{" "}
            Solutions
          </h1>

          <p className="blink text-sm font-semibold text-gray-800">
            We provide high-quality printing services in Kandivali West, Mumbai.
            Visiting Cards, Banners, Stickers, Bill Books, Pamphlets & more.
          </p>

          {/* Small Stats */}
          <div className="mt-10 grid grid-cols-3 gap-5">
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-sm border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h2 className="text-xl font-bold text-gray-900">10+</h2>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>

            <div className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-sm border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h2 className="text-xl font-bold text-gray-900">50+</h2>
              <p className="text-sm text-gray-600">Services</p>
            </div>

            <div className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-sm border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h2 className="text-xl font-bold text-gray-900">5000+</h2>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="relative bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border w-full max-w-md 
          transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] overflow-hidden group">

            {/* Glow Effect on Card */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>

            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
              alt="Printing Machine"
              className="relative rounded-xl w-full h-64 object-cover"
            />

            <div className="relative mt-4">
              <h3 className="text-lg font-bold text-gray-900">
                Fast & Quality Printing
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Same day printing available for selected products.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

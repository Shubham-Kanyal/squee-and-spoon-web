export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-[#03202B]/90 backdrop-blur-sm border-b border-[#CEAB79]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-[#CEAB79] font-semibold text-lg tracking-wide">
            Squee & Spoon
          </span>
          <div className="hidden md:flex gap-8 text-sm text-[#F4EFFA]/70">
            <a href="#menu" className="hover:text-[#CEAB79] transition-colors">Menu</a>
            <a href="#about" className="hover:text-[#CEAB79] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#CEAB79] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8">
          <img
            src="https://www.uengage.in/images/addo/logos/image-1680801747.jpg"
            alt="Squee & Spoon Logo"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mx-auto shadow-lg border-2 border-[#CEAB79]/30"
          />
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#F4EFFA] mb-4">
          Squee <span className="text-[#CEAB79]">&</span> Spoon
        </h1>
        <p className="text-lg md:text-xl text-[#F4EFFA]/60 font-light tracking-wide">
          Pan-Asian Kitchen · Seawoods
        </p>
        <div className="mt-12 w-px h-16 bg-gradient-to-b from-[#CEAB79]/50 to-transparent" />
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#CEAB79] mb-16 text-center">
            Menu Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {/* Ramen */}
            <div className="group text-center md:text-left">
              <h3 className="text-2xl font-light text-[#F4EFFA] mb-4">Ramen</h3>
              <div className="space-y-2 text-[#F4EFFA]/60 text-sm">
                <p className="py-2 border-b border-[#CEAB79]/10">Spicy Korean</p>
                <p className="py-2 border-b border-[#CEAB79]/10">Shoyu</p>
              </div>
            </div>
            {/* Bao */}
            <div className="group text-center md:text-left">
              <h3 className="text-2xl font-light text-[#F4EFFA] mb-4">Bao</h3>
              <div className="space-y-2 text-[#F4EFFA]/60 text-sm">
                <p className="py-2 border-b border-[#CEAB79]/10">Char Siu Lamb</p>
                <p className="py-2 border-b border-[#CEAB79]/10">Chicken Katsu</p>
              </div>
            </div>
            {/* Sushi */}
            <div className="group text-center md:text-left">
              <h3 className="text-2xl font-light text-[#F4EFFA] mb-4">Sushi</h3>
              <div className="space-y-2 text-[#F4EFFA]/60 text-sm">
                <p className="py-2 border-b border-[#CEAB79]/10">Prawns Tempura</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-[#CEAB79]/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#CEAB79] mb-8">
            About
          </h2>
          <p className="text-xl md:text-2xl font-light text-[#F4EFFA]/80 leading-relaxed">
            A cozy Pan-Asian cafe tucked away in Seawoods, offering bold flavours 
            from across the continent. With warm indoor seating and a breezy outdoor 
            area, Squee & Spoon is your neighbourhood spot for ramen, bao, sushi, 
            and everything in between.
          </p>
        </div>
      </section>

      {/* Contact / Location */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#CEAB79] mb-12">
            Find Us
          </h2>
          <div className="space-y-6 text-[#F4EFFA]/70">
            <p className="text-lg font-light leading-relaxed">
              Shop 7-10, SukhKarta CHS,<br />
              Sector 40, Seawoods West,<br />
              Navi Mumbai — 400706
            </p>
            <a
              href="tel:+918369716726"
              className="inline-block text-[#CEAB79] hover:text-[#CEAB79]/80 transition-colors text-lg"
            >
              +91 8369 716 726
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#CEAB79]/10">
        <div className="max-w-6xl mx-auto text-center text-xs text-[#F4EFFA]/40">
          © {new Date().getFullYear()} Squee & Spoon. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

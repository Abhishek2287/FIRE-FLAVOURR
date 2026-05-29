import { motion } from "framer-motion";
import restaurantExterior from "/assets/restaurant-exterior.jpg";

export default function HeroSection() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${restaurantExterior})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-[#B22222]/50" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#FF7A00]/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#B22222]/10 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-10">
            Authentic Tandoor,<br />
            <span className="text-[#FF7A00]">Shawarma</span> &<br />
            Mughlai Flavours
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              data-testid="hero-view-menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll("#menu")}
              className="px-8 py-4 bg-[#B22222] text-white font-semibold rounded-full text-base shadow-lg hover:bg-[#8B1A1A] transition-colors duration-200"
            >
              View Menu
            </motion.button>
            <motion.button
              data-testid="hero-order-now"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll("#order")}
              className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-full text-base border border-white/30 hover:bg-white/25 transition-colors duration-200"
            >
              Order Now
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2"
        >
          <div className="w-1 h-3 rounded-full bg-white/70" />
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Phone, MessageCircle, ShoppingBag } from "lucide-react";

export default function OnlineOrderingSection() {
  return (
    <section id="order" className="py-20 bg-[#B22222] dark:bg-[#8B1A1A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/70 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Order Online
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Your Favourite Food Delivered
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Serving Daltonganj (Medininagar) and nearby localities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <a
            data-testid="order-zomato"
            href="#"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <ShoppingBag size={26} className="text-white" />
            </div>
            <span className="text-white font-bold text-lg">Order on Zomato</span>
            <span className="text-white/70 text-sm">Fast delivery</span>
          </a>

          <a
            data-testid="order-call"
            href="tel:+917463969026"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <Phone size={26} className="text-white" />
            </div>
            <span className="text-white font-bold text-lg">Call Now</span>
            <span className="text-white/70 text-sm">+91 74639 69026</span>
          </a>

          <a
            data-testid="order-whatsapp"
            href="https://wa.me/917463969026"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle size={26} className="text-white" />
            </div>
            <span className="text-white font-bold text-lg">WhatsApp Order</span>
            <span className="text-white/70 text-sm">Chat to order</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

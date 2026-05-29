import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 items-center">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            data-testid="scroll-to-top"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center shadow-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        data-testid="floating-call-btn"
        href="tel:+917463969026"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
        className="w-13 h-13 rounded-full bg-[#B22222] text-white flex items-center justify-center shadow-lg hover:bg-[#8B1A1A] transition-colors"
        style={{ width: 52, height: 52 }}
        aria-label="Call us"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone size={22} />
      </motion.a>

      <motion.a
        data-testid="floating-whatsapp-btn"
        href="https://wa.me/917463969026"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.3 }}
        className="rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:bg-[#1DA851] transition-colors"
        style={{ width: 56, height: 56 }}
        aria-label="WhatsApp order"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </div>
  );
}

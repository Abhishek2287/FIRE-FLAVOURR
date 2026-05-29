import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logoPath from "/assets/logo.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A0A0A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logoPath} alt="Fire and Flavour" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="font-serif font-bold text-lg text-[#FF7A00] leading-tight">FIRE & FLAVOUR</p>
                <p className="text-gray-400 text-xs tracking-widest uppercase">Restaurant</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Authentic tandoor, shawarma, and Mughlai cuisine served with passion and premium ingredients in the heart of Daltonganj.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF size={16} />, href: "#", label: "Facebook" },
                { icon: <FaInstagram size={16} />, href: "#", label: "Instagram" },
                { icon: <FaYoutube size={16} />, href: "#", label: "YouTube" },
                { icon: <FaWhatsapp size={16} />, href: "https://wa.me/917463969026", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B22222] flex items-center justify-center transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                    onClick={() => handleNav(link.href)}
                    className="text-gray-400 hover:text-[#FF7A00] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">Opening Hours</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock size={14} className="text-[#FF7A00] flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Monday – Sunday</p>
                  <p>3:00 PM – 9:00 PM</p>
                </div>
              </div>
              <div className="mt-2 px-3 py-2 rounded-lg bg-[#B22222]/20 border border-[#B22222]/30">
                <p className="text-[#FF7A00] text-xs font-semibold">Open 7 Days a Week</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+917463969026" className="flex items-start gap-3 text-gray-400 hover:text-[#FF7A00] transition-colors group">
                <Phone size={16} className="mt-0.5 text-[#FF7A00] flex-shrink-0" />
                <span className="text-sm">+91 74639 69026</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="mt-0.5 text-[#FF7A00] flex-shrink-0" />
                <span className="text-sm leading-relaxed">TV Tower, Bairia, Near TV Tower,<br />Medininagar, Jharkhand 822101</span>
              </div>
              <a
                href="https://wa.me/917463969026"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
                className="flex items-center gap-2 text-sm text-[#25D366] hover:text-[#1DA851] transition-colors"
              >
                <FaWhatsapp size={16} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            &copy; 2026 Fire &amp; Flavour Restaurant. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            TV Tower, Bairia, Medininagar, Jharkhand
          </p>
        </div>
      </div>
    </footer>
  );
}

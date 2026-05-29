import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFF8F0] dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FF7A00] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Find Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Visit Us Today
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            We are open every day — come experience the fire and flavour firsthand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-[#B22222]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Available during business hours</p>
                <a href="tel:+917463969026" data-testid="contact-phone-link" className="text-[#B22222] font-bold text-lg hover:underline">
                  +91 74639 69026
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-[#FF7A00]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  TV Tower, Bairia, Near TV Tower,<br />
                  Medininagar (Daltonganj),<br />
                  Jharkhand – 822101
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Opening Hours</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Monday – Sunday</span>
                  <span className="font-semibold text-gray-900 dark:text-white">3:00 PM – 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                data-testid="contact-call-btn"
                href="tel:+917463969026"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#B22222] text-white font-semibold text-sm hover:bg-[#8B1A1A] transition-colors shadow-md"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                data-testid="contact-whatsapp-btn"
                href="https://wa.me/917463969026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1DA851] transition-colors shadow-md"
              >
                <FaWhatsapp size={18} /> WhatsApp
              </a>
              <a
                data-testid="contact-directions-btn"
                href="https://maps.google.com/?q=TV+Tower+Bairia+Medininagar+Jharkhand"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-[#B22222] text-[#B22222] dark:text-[#FF7A00] dark:border-[#FF7A00] font-semibold text-sm hover:bg-[#B22222] hover:text-white dark:hover:bg-[#FF7A00] dark:hover:text-white transition-colors"
              >
                <ExternalLink size={16} /> Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl h-[480px] border border-gray-200 dark:border-gray-800"
          >
            <iframe
              data-testid="contact-map"
              title="Fire and Flavour Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.9467312347856!2d84.06957841497997!3d23.531000984692344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993afe6b5daaaab%3A0x99ecba14b24c49f4!2sDaltonganj%2C%20Jharkhand%20822101!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

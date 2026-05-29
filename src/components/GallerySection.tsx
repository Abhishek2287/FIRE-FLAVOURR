import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryData = [
  { id: 1, src: "/assets/gallery-1.png", alt: "Paneer Tikka from the Tandoor", span: "col-span-1 row-span-2" },
  { id: 2, src: "/assets/gallery-2.png", alt: "Chicken Shawarma Roll", span: "col-span-1 row-span-1" },
  { id: 3, src: "/assets/gallery-3.png", alt: "Tandoori Platter", span: "col-span-1 row-span-1" },
  { id: 4, src: "/assets/gallery-4.jpg", alt: "Matka Paneer in Earthen Pot", span: "col-span-2 row-span-1" },
  { id: 5, src: "/assets/gallery-5.jpg", alt: "Chicken Angara", span: "col-span-1 row-span-1" },
  { id: 6, src: "/assets/gallery-6.jpg", alt: "Virgin Mojito Beverages", span: "col-span-1 row-span-1" },
  { id: 7, src: "/assets/gallery-7.jpg", alt: "Restaurant Interior Ambiance", span: "col-span-1 row-span-1" },
  { id: 8, src: "/assets/gallery-8.jpg", alt: "Chicken Wings Platter", span: "col-span-1 row-span-1" },
];

const gradients = [
  "from-red-400 to-orange-500",
  "from-orange-500 to-amber-600",
  "from-amber-400 to-red-500",
  "from-red-600 to-rose-700",
  "from-orange-400 to-red-500",
  "from-teal-400 to-green-500",
  "from-amber-500 to-orange-600",
  "from-red-500 to-orange-400",
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FFF8F0] dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FF7A00] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Our Gallery
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            A Feast for the Eyes
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            A glimpse into the dishes and moments that define Fire & Flavour
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryData.map((item, idx) => (
            <motion.div
              key={item.id}
              data-testid={`gallery-item-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              onClick={() => setLightbox(idx)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-square"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx % gradients.length]}`} />
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0";
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button
              data-testid="lightbox-close"
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
            >
              <div className={`w-full aspect-video bg-gradient-to-br ${gradients[lightbox % gradients.length]}`} />
              <img
                src={galleryData[lightbox].src}
                alt={galleryData[lightbox].alt}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium">{galleryData[lightbox].alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

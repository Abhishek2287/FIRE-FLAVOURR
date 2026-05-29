import { motion } from "framer-motion";
import { featuredDishes } from "@/lib/data";

const dishGradients = [
  "from-red-400 to-orange-500",
  "from-orange-500 to-red-600",
  "from-amber-400 to-orange-600",
  "from-red-600 to-rose-800",
  "from-orange-400 to-amber-500",
  "from-green-400 to-teal-500",
];

export default function FeaturedDishesSection() {
  return (
    <section id="featured" className="py-20 lg:py-28 bg-[#FFF8F0] dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FF7A00] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Chef's Selection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Dishes
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Handpicked favourites that keep our guests coming back for more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDishes.map((dish, idx) => (
            <motion.div
              key={dish.id}
              data-testid={`featured-dish-${dish.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className={`relative h-52 bg-gradient-to-br ${dishGradients[idx % dishGradients.length]} overflow-hidden`}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-[#B22222]">
                  {dish.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {dish.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

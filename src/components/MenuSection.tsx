import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { menuItems, menuCategories } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "VEG STARTERS": "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "NON VEG STARTERS": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  "MAIN COURSE": "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  "BREADS": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  "SHAWARMA": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  "BEVERAGES": "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories = ["ALL", ...menuCategories];

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCat = activeCategory === "ALL" || item.category === activeCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const groupedByCategory = useMemo(() => {
    if (activeCategory !== "ALL") {
      return { [activeCategory]: filtered };
    }
    const groups: Record<string, typeof menuItems> = {};
    menuCategories.forEach((cat) => {
      const items = filtered.filter((i) => i.category === cat);
      if (items.length > 0) groups[cat] = items;
    });
    return groups;
  }, [filtered, activeCategory]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#FF7A00] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Our Menu
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Flavours for Every Craving
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            From tandoor-kissed starters to refreshing beverages, every item is crafted with care
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              data-testid="menu-search"
              type="search"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B22222] text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            {allCategories.map((cat) => (
              <button
                key={cat}
                data-testid={`menu-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#B22222] text-white shadow-md scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {cat === "ALL" ? "All Items" : cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {Object.entries(groupedByCategory).map(([category, items]) => (
              <div key={category} className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${categoryColors[category] || "bg-gray-100 text-gray-700"}`}>
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                  <span className="text-xs text-gray-400">{items.length} items</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      data-testid={`menu-item-${item.id}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-[#FFF8F0] dark:bg-gray-800 border border-orange-100 dark:border-gray-700 hover:border-[#B22222]/40 hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="flex-1 min-w-0 pr-3">
                        <p className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-[#B22222] dark:group-hover:text-[#FF7A00] transition-colors">
                          {item.name}
                        </p>
                        <span className={`mt-1 inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category] || ""}`}>
                          {item.category === "VEG STARTERS" || item.category === "BEVERAGES" ? "VEG" : 
                           item.category === "NON VEG STARTERS" || item.category === "MAIN COURSE" && item.name.includes("Chicken") ? "NON-VEG" : ""}
                        </span>
                      </div>
                      <div className="font-bold text-[#B22222] dark:text-[#FF7A00] text-sm flex-shrink-0">
                        ₹{item.price}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-400 dark:text-gray-500">
                <p className="text-lg font-medium">No items found</p>
                <p className="text-sm mt-1">Try a different search or category</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

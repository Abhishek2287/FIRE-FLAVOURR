import { motion } from "framer-motion";
import { Clock, MapPin, Star } from "lucide-react";
import restaurantExterior from "/assets/restaurant-exterior.jpg";

const hours = [
  { day: "Monday – Sunday", time: "3:00 PM – 9:00 PM" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={restaurantExterior}
                alt="Fire and Flavour Restaurant"
                className="w-full h-[420px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#B22222] text-white rounded-2xl p-5 shadow-xl">
              <p className="font-serif text-3xl font-bold">2024</p>
              <p className="text-sm text-white/80">Est. Daltonganj</p>
            </div>
            <div className="absolute top-6 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg flex items-center gap-3">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} className="fill-[#FF7A00] text-[#FF7A00]" />
                ))}
              </div>
              <div>
                <p className="font-bold text-sm text-gray-800 dark:text-white">4.8/5</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Customer Rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-[#FF7A00] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Passion on Every<br />
                <span className="text-[#B22222]">Plate</span>
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Nestled in the heart of Daltonganj near the iconic TV Tower, Fire & Flavour was born from a deep passion for authentic Indian grilled cuisine. We bring the timeless art of the tandoor to life — each dish crafted with hand-selected spices, premium ingredients, and a genuine love for flavour.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              From smoky Chicken Tikka and succulent Tangdi Kabab to the crowd-favourite Chicken Shawarma and silky Matka Paneer, our menu is a celebration of India's richest culinary traditions. Whether you're craving the earthy warmth of Mughlai classics or the bold char of freshly grilled Soya Chaap, every bite at Fire & Flavour is an experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We serve Medininagar and all nearby localities with heart, warmth, and the kind of food you'll want to come back for — every single evening.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-gray-800">
                <Clock size={20} className="text-[#B22222] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Opening Hours</p>
                  {hours.map((h) => (
                    <p key={h.day} className="text-gray-500 dark:text-gray-400 text-sm">{h.day}<br />{h.time}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 dark:bg-gray-800">
                <MapPin size={20} className="text-[#FF7A00] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Location</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">TV Tower, Bairia, Near TV Tower, Medininagar, Jharkhand 822101</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

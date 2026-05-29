import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, Filter } from "lucide-react";

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const sampleReviews: Review[] = [
  { id: "r1", name: "Rajesh Kumar", rating: 5, text: "Best tandoori food in Daltonganj. Highly recommended.", date: "2026-04-10" },
  { id: "r2", name: "Priya Singh", rating: 5, text: "Chicken Shawarma is amazing. The flavours are authentic and fresh!", date: "2026-04-18" },
  { id: "r3", name: "Amit Verma", rating: 5, text: "Excellent ambience and service. The Matka Paneer is outstanding.", date: "2026-05-02" },
  { id: "r4", name: "Sunita Devi", rating: 4, text: "Really loved the Chicken Tikka. Perfectly spiced and juicy. Will visit again!", date: "2026-05-15" },
  { id: "r5", name: "Deepak Yadav", rating: 5, text: "Paneer Tikka here is the best I have had. Absolutely delicious. Keep it up!", date: "2026-05-20" },
];

function StarRating({ rating, onRate, interactive = false }: { rating: number; onRate?: (r: number) => void; interactive?: boolean }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type={interactive ? "button" : undefined}
          onClick={() => interactive && onRate?.(s)}
          onMouseEnter={() => interactive && setHovered(s)}
          onMouseLeave={() => interactive && setHovered(0)}
          className={interactive ? "cursor-pointer" : "cursor-default pointer-events-none"}
          data-testid={interactive ? `star-${s}` : undefined}
        >
          <Star
            size={interactive ? 24 : 16}
            className={`transition-colors ${
              s <= (hovered || rating)
                ? "fill-[#FF7A00] text-[#FF7A00]"
                : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filterRating, setFilterRating] = useState(0);
  const [form, setForm] = useState({ name: "", rating: 0, text: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const stored = localStorage.getItem("ff_reviews");
    if (stored) {
      setReviews(JSON.parse(stored));
    } else {
      setReviews(sampleReviews);
      localStorage.setItem("ff_reviews", JSON.stringify(sampleReviews));
    }
  }, []);

  const filtered = filterRating === 0 ? reviews : reviews.filter((r) => r.rating === filterRating);

  const avgRating = reviews.length > 0
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : "0";

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (form.rating === 0) e.rating = "Please select a rating";
    if (!form.text.trim()) e.text = "Review text is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const newReview: Review = {
      id: `r${Date.now()}`,
      name: form.name.trim(),
      rating: form.rating,
      text: form.text.trim(),
      date: new Date().toISOString().split("T")[0],
    };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("ff_reviews", JSON.stringify(updated));
    setForm({ name: "", rating: 0, text: "" });
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FF7A00] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            What People Say
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Customer Reviews
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex flex-col items-center">
              <span className="font-serif text-6xl font-bold text-[#B22222]">{avgRating}</span>
              <StarRating rating={Math.round(Number(avgRating))} />
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{reviews.length} reviews</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              data-testid="filter-all"
              onClick={() => setFilterRating(0)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filterRating === 0 ? "bg-[#B22222] text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              }`}
            >
              <Filter size={14} /> All
            </button>
            {[5, 4, 3, 2, 1].map((r) => (
              <button
                key={r}
                data-testid={`filter-${r}star`}
                onClick={() => setFilterRating(filterRating === r ? 0 : r)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filterRating === r ? "bg-[#B22222] text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                }`}
              >
                <Star size={12} className={filterRating === r ? "fill-white text-white" : "fill-[#FF7A00] text-[#FF7A00]"} />
                {r} Star{r !== 1 ? "s" : ""}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatePresence>
                {filtered.map((review, idx) => (
                  <motion.div
                    key={review.id}
                    data-testid={`review-card-${review.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="p-5 rounded-2xl bg-[#FFF8F0] dark:bg-gray-800 border border-orange-100 dark:border-gray-700 flex flex-col gap-3"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B22222] to-[#FF7A00] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{review.name}</p>
                      <p className="text-gray-400 dark:text-gray-500 text-xs">{new Date(review.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
              {filtered.length === 0 && (
                <div className="col-span-2 text-center py-12 text-gray-400">
                  <p>No reviews for this rating yet.</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="sticky top-24 p-6 rounded-2xl bg-[#FFF8F0] dark:bg-gray-800 border border-orange-100 dark:border-gray-700">
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-5">
                Share Your Experience
              </h3>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <div className="text-4xl mb-3">★</div>
                    <p className="font-semibold text-[#B22222] text-lg">Thank you!</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Your review has been posted.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <input
                        data-testid="review-name"
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B22222] text-sm"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Your Rating</p>
                      <StarRating rating={form.rating} onRate={(r) => setForm({ ...form, rating: r })} interactive />
                      {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating}</p>}
                    </div>
                    <div>
                      <textarea
                        data-testid="review-text"
                        placeholder="Share your experience..."
                        value={form.text}
                        onChange={(e) => setForm({ ...form, text: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B22222] text-sm resize-none"
                      />
                      {errors.text && <p className="text-red-500 text-xs mt-1">{errors.text}</p>}
                    </div>
                    <button
                      data-testid="review-submit"
                      type="submit"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#B22222] text-white font-semibold text-sm hover:bg-[#8B1A1A] transition-colors"
                    >
                      <Send size={16} /> Submit Review
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

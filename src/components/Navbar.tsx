import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import logoPath from "/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            data-testid="nav-logo"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-3 group"
          >
            <img
              src={logoPath}
              alt="Fire and Flavour logo"
              className="h-12 w-12 rounded-full object-cover shadow-md"
            />
            <div className="hidden sm:block">
              <p className="font-serif font-bold text-lg leading-tight text-[#B22222] dark:text-[#FF7A00]">
                FIRE & FLAVOUR
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 tracking-widest uppercase">
                Restaurant
              </p>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#B22222] dark:hover:text-[#FF7A00] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B22222] dark:bg-[#FF7A00] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              data-testid="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              data-testid="nav-order-btn"
              onClick={() => handleNav("#order")}
              className="hidden sm:block px-5 py-2 rounded-full bg-[#B22222] text-white text-sm font-semibold hover:bg-[#8B1A1A] transition-colors duration-200 shadow-md"
            >
              Order Now
            </button>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-800 hover:text-[#B22222] font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#order")}
              className="mt-2 px-4 py-3 rounded-full bg-[#B22222] text-white font-semibold text-center"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

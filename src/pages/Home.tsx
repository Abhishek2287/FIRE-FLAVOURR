import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OnlineOrderingSection from "@/components/OnlineOrderingSection";
import AboutSection from "@/components/AboutSection";
import FeaturedDishesSection from "@/components/FeaturedDishesSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <OnlineOrderingSection />
      <AboutSection />
      <FeaturedDishesSection />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

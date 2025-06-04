import Hero from "@/components/Hero";
import BookingSection from "@/components/BookingSection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BookingSection />
      <MenuSection />
      <ContactSection />
    </div>
  );
};

export default Index;

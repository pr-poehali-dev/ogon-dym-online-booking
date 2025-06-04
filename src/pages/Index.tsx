import Hero from "@/components/Hero";
import BookingSection from "@/components/BookingSection";
import MenuSection from "@/components/MenuSection";
import TableSchemeSection from "@/components/TableSchemeSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BookingSection />
      <MenuSection />
      <TableSchemeSection />
      <EventsSection />
      <ContactSection />
    </div>
  );
};

export default Index;

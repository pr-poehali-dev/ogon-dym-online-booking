import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Quick Navigation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Быстрый переход</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link to="/about">
              <Button variant="outline" className="w-full h-20 text-lg">
                О нас
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline" className="w-full h-20 text-lg">
                Меню
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="outline" className="w-full h-20 text-lg">
                Бронирование
              </Button>
            </Link>
            <Link to="/tables">
              <Button variant="outline" className="w-full h-20 text-lg">
                Схема столов
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" className="w-full h-20 text-lg">
                События
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full h-20 text-lg">
                Контакты
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

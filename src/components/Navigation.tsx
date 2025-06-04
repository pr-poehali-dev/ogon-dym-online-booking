import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
              Огонь и Дым
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-orange-400 hover:bg-white/10"
                onClick={() => scrollToSection("hero")}
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-orange-400 hover:bg-white/10"
                onClick={() => scrollToSection("about")}
              >
                О нас
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-orange-400 hover:bg-white/10"
                onClick={() => scrollToSection("menu")}
              >
                Меню
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-orange-400 hover:bg-white/10"
                onClick={() => scrollToSection("tables")}
              >
                Столики
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-orange-400 hover:bg-white/10"
                onClick={() => scrollToSection("events")}
              >
                События
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-orange-400 hover:bg-white/10"
                onClick={() => scrollToSection("contacts")}
              >
                Контакты
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => scrollToSection("booking")}
              >
                Бронировать
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-white"
              onClick={() => scrollToSection("booking")}
            >
              🔥 Бронь
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

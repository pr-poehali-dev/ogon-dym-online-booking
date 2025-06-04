import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden"
    >
      <Navigation />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
          Огонь и Дым
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Премиальный кальянный ресторан в самом сердце Перми
        </p>
        <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
          Насладитесь изысканными табачными миксами, авторской кухней и
          неповторимой атмосферой в нашем уютном заведении
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
            onClick={() =>
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            🔥 Забронировать столик
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg"
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            💨 Посмотреть меню
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;

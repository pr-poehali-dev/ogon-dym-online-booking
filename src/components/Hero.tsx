import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/31db462e-48f6-4bdb-b56d-a8c0cdf1742e/files/59817896-03fe-43bb-8cac-3ad103c1fc11.jpg')" }}
      />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

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
            onClick={() => navigate("/booking")}
          >
            🔥 Забронировать столик
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg"
            onClick={() => navigate("/menu")}
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
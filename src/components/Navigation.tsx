import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/about", label: "О нас" },
    { path: "/menu", label: "Меню" },
    { path: "/booking", label: "Бронирование" },
    { path: "/tables", label: "Схема столов" },
    { path: "/events", label: "События" },
    { path: "/contact", label: "Контакты" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            Ресторан
          </Link>

          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={
                    location.pathname === item.path ? "default" : "ghost"
                  }
                  className="text-sm"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Меню
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

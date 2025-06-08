import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MenuSection = () => {
  const hookahs = [
    {
      name: "Классический микс",
      description: "Двойное яблоко с мятой",
      price: "800 ₽",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    },
    {
      name: "Тропический рай",
      description: "Манго, ананас, кокос",
      price: "950 ₽",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
    },
    {
      name: "Ягодный взрыв",
      description: "Клубника, черника, малина",
      price: "900 ₽",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    },
    {
      name: "Цитрусовая свежесть",
      description: "Апельсин, лимон, лайм, мята",
      price: "850 ₽",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop",
    },
    {
      name: "Шоколадный десерт",
      description: "Молочный шоколад с ванилью",
      price: "1000 ₽",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop",
    },
    {
      name: "Огненный микс",
      description: "Острые специи с вишней",
      price: "1100 ₽",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1578928026881-7c7ecb78481f?w=400&h=300&fit=crop",
    },
  ];

  const drinks = [
    {
      name: "Чай зелёный/чёрный",
      price: "200 ₽",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop",
    },
    {
      name: "Кофе американо",
      price: "250 ₽",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    },
    {
      name: "Лимонад домашний",
      price: "350 ₽",
      image:
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=300&h=200&fit=crop",
    },
    {
      name: "Смузи ягодный",
      price: "450 ₽",
      image:
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop",
    },
  ];

  const snacks = [
    {
      name: "Крылышки BBQ",
      description: "8 шт., соус барбекю",
      price: "650 ₽",
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop",
    },
    {
      name: "Крылышки острые",
      description: "8 шт., острый соус",
      price: "650 ₽",
      image:
        "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop",
    },
    {
      name: "Наггетсы куриные",
      description: "10 шт., соус на выбор",
      price: "450 ₽",
      image:
        "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
    },
    {
      name: "Картофель фри",
      description: "Хрустящий, с солью",
      price: "350 ₽",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
    },
    {
      name: "Сырная тарелка",
      description: "Ассорти из 4 видов сыра",
      price: "750 ₽",
      image:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop",
    },
    {
      name: "Мясная тарелка",
      description: "Колбасы, ветчина, пастрами",
      price: "850 ₽",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    },
    {
      name: "Пицца Маргарита",
      description: "Томаты, моцарелла, базилик",
      price: "600 ₽",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    },
    {
      name: "Пицца Пепперони",
      description: "Пепперони, моцарелла",
      price: "700 ₽",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    },
    {
      name: "Пицца 4 сыра",
      description: "Моцарелла, пармезан, горгонзола, фета",
      price: "750 ₽",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    },
  ];

  const cocktails = [
    {
      name: "Мохито",
      description: "Ром, мята, лайм, содовая",
      price: "650 ₽",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&h=200&fit=crop",
    },
    {
      name: "Олд Фэшн",
      description: "Виски, биттер, сахар, апельсин",
      price: "750 ₽",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=300&h=200&fit=crop",
    },
    {
      name: "Космополитен",
      description: "Водка, клюквенный сок, лайм",
      price: "700 ₽",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&h=200&fit=crop",
    },
    {
      name: "Виски Сауэр",
      description: "Виски, лимонный сок, сахар, белок",
      price: "720 ₽",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1560508036-c9eabb73e908?w=300&h=200&fit=crop",
    },
    {
      name: "Негрони",
      description: "Джин, кампари, красный вермут",
      price: "680 ₽",
      popular: false,
      image:
        "https://images.unsplash.com/photo-1536935338686-2775d12fca2f?w=300&h=200&fit=crop",
    },
    {
      name: "Маргарита",
      description: "Текила, трипл сек, лайм, соль",
      price: "650 ₽",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=300&h=200&fit=crop",
    },
  ];

  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-br from-slate-800 via-purple-800 to-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Наше меню</h2>
          <p className="text-xl text-slate-300">
            Изысканные табачные миксы и напитки
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hookah Menu */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              💨 Кальянное меню
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hookahs.map((hookah, index) => (
                <Card
                  key={index}
                  className="relative hover:shadow-lg transition-shadow bg-slate-900 border-slate-700"
                >
                  {hookah.popular && (
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      🔥 Хит
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <div className="mb-3">
                      <img
                        src={hookah.image}
                        alt={hookah.name}
                        className="w-full h-40 object-cover rounded-md"
                      />
                    </div>
                    <CardTitle className="text-lg text-white flex justify-between items-start">
                      <span>{hookah.name}</span>
                      <span className="text-orange-400 font-bold">
                        {hookah.price}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{hookah.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Snacks Menu */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                🍗 Закуски
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {snacks.map((snack, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow bg-slate-900 border-slate-700"
                  >
                    <CardHeader className="pb-3">
                      <div className="mb-3">
                        <img
                          src={snack.image}
                          alt={snack.name}
                          className="w-full h-40 object-cover rounded-md"
                        />
                      </div>
                      <CardTitle className="text-lg text-white flex justify-between items-start">
                        <span>{snack.name}</span>
                        <span className="text-orange-400 font-bold">
                          {snack.price}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{snack.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Cocktails Menu */}
          <div className="mt-12 lg:mt-0">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              🍸 Барная карта
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {cocktails.map((cocktail, index) => (
                <Card
                  key={index}
                  className="relative hover:shadow-lg transition-shadow bg-slate-900 border-slate-700"
                >
                  {cocktail.popular && (
                    <div className="absolute -top-2 -right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      ⭐ Топ
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <div className="mb-3">
                      <img
                        src={cocktail.image}
                        alt={cocktail.name}
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                    <CardTitle className="text-base text-white flex justify-between items-start">
                      <span>{cocktail.name}</span>
                      <span className="text-purple-400 font-bold">
                        {cocktail.price}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm">
                      {cocktail.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Drinks Menu */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              ☕ Напитки
            </h3>
            <Card className="shadow-lg bg-slate-900 border-slate-700">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {drinks.map((drink, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-slate-700 last:border-b-0"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={drink.image}
                          alt={drink.name}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                        <span className="text-slate-300">{drink.name}</span>
                      </div>
                      <span className="font-semibold text-orange-400">
                        {drink.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special offer */}
            <Card className="mt-6 bg-gradient-to-br from-orange-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold mb-2">🎉 Акция дня</h4>
                <p className="text-sm mb-3">
                  При заказе любого кальяна — чай в подарок!
                </p>
                <p className="text-xs opacity-90">*до 22:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

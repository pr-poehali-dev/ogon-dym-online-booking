import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MenuSection = () => {
  const hookahs = [
    {
      name: "Классический микс",
      description: "Двойное яблоко с мятой",
      price: "800 ₽",
      popular: false,
    },
    {
      name: "Тропический рай",
      description: "Манго, ананас, кокос",
      price: "950 ₽",
      popular: true,
    },
    {
      name: "Ягодный взрыв",
      description: "Клубника, черника, малина",
      price: "900 ₽",
      popular: false,
    },
    {
      name: "Цитрусовая свежесть",
      description: "Апельсин, лимон, лайм, мята",
      price: "850 ₽",
      popular: false,
    },
    {
      name: "Шоколадный десерт",
      description: "Молочный шоколад с ванилью",
      price: "1000 ₽",
      popular: true,
    },
    {
      name: "Огненный микс",
      description: "Острые специи с вишней",
      price: "1100 ₽",
      popular: false,
    },
  ];

  const drinks = [
    { name: "Чай зелёный/чёрный", price: "200 ₽" },
    { name: "Кофе американо", price: "250 ₽" },
    { name: "Лимонад домашний", price: "350 ₽" },
    { name: "Смузи ягодный", price: "450 ₽" },
  ];

  const snacks = [
    {
      name: "Крылышки BBQ",
      description: "8 шт., соус барбекю",
      price: "650 ₽",
    },
    {
      name: "Крылышки острые",
      description: "8 шт., острый соус",
      price: "650 ₽",
    },
    {
      name: "Наггетсы куриные",
      description: "10 шт., соус на выбор",
      price: "450 ₽",
    },
    {
      name: "Картофель фри",
      description: "Хрустящий, с солью",
      price: "350 ₽",
    },
    {
      name: "Сырная тарелка",
      description: "Ассорти из 4 видов сыра",
      price: "750 ₽",
    },
    {
      name: "Мясная тарелка",
      description: "Колбасы, ветчина, пастрами",
      price: "850 ₽",
    },
    {
      name: "Пицца Маргарита",
      description: "Томаты, моцарелла, базилик",
      price: "600 ₽",
    },
    {
      name: "Пицца Пепперони",
      description: "Пепперони, моцарелла",
      price: "700 ₽",
    },
    {
      name: "Пицца 4 сыра",
      description: "Моцарелла, пармезан, горгонзола, фета",
      price: "750 ₽",
    },
  ];

  const cocktails = [
    {
      name: "Мохито",
      description: "Ром, мята, лайм, содовая",
      price: "650 ₽",
      popular: true,
    },
    {
      name: "Олд Фэшн",
      description: "Виски, биттер, сахар, апельсин",
      price: "750 ₽",
      popular: true,
    },
    {
      name: "Космополитен",
      description: "Водка, клюквенный сок, лайм",
      price: "700 ₽",
      popular: false,
    },
    {
      name: "Виски Сауэр",
      description: "Виски, лимонный сок, сахар, белок",
      price: "720 ₽",
      popular: false,
    },
    {
      name: "Негрони",
      description: "Джин, кампари, красный вермут",
      price: "680 ₽",
      popular: false,
    },
    {
      name: "Маргарита",
      description: "Текила, трипл сек, лайм, соль",
      price: "650 ₽",
      popular: true,
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
                      className="flex justify-between items-center py-2 border-b border-slate-700 last:border-b-0"
                    >
                      <span className="text-slate-300">{drink.name}</span>
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

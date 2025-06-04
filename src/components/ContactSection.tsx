import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Контакты</h2>
          <p className="text-xl text-slate-600">
            Найдите нас в самом центре Перми
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
              <CardTitle className="text-2xl">Огонь и Дым</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Адрес</h3>
                  <p className="text-slate-600">
                    г. Пермь, ул. Луначарского, 32
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Телефон</h3>
                  <p className="text-slate-600">+7 (342) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🕒</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">
                    Режим работы
                  </h3>
                  <div className="text-slate-600 space-y-1">
                    <p>Понедельник - Четверг: 18:00 - 02:00</p>
                    <p>Пятница - Суббота: 18:00 - 04:00</p>
                    <p>Воскресенье: 18:00 - 00:00</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">
                    Социальные сети
                  </h3>
                  <div className="space-y-2">
                    <p className="text-purple-600 hover:text-purple-800 cursor-pointer">
                      📘 ВКонтакте: @ogon_i_dim_perm
                    </p>
                    <p className="text-purple-600 hover:text-purple-800 cursor-pointer">
                      📸 Instagram: @ogon_i_dim_perm
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map placeholder */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">
                Как нас найти
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-600">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-lg font-medium mb-2">Карта</p>
                  <p className="text-sm">ул. Луначарского, 32</p>
                  <p className="text-sm text-slate-500 mt-2">
                    В самом центре города
                    <br />
                    Удобная парковка
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-purple-50 border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                🎯 Почему выбирают нас?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                <div>
                  <div className="text-2xl mb-2">🏆</div>
                  <p className="font-medium">Премиум качество</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🎨</div>
                  <p className="font-medium">Уютная атмосфера</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">👨‍🍳</div>
                  <p className="font-medium">Опытные мастера</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section
      id="contacts"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Контакты</h2>
          <p className="text-xl text-slate-300">
            Найдите нас в самом центре Перми
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="shadow-xl bg-slate-800 border-slate-700">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-orange-500 text-white">
              <CardTitle className="text-2xl">Огонь и Дым</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Адрес</h3>
                  <p className="text-slate-300">
                    г. Пермь, ул. Луначарского, 32
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Телефон</h3>
                  <p className="text-slate-300">+7 (342) 298-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🕒</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Режим работы
                  </h3>
                  <div className="text-slate-300 space-y-1">
                    <p>Понедельник - Четверг: 18:00 - 02:00</p>
                    <p>Пятница - Суббота: 18:00 - 04:00</p>
                    <p>Воскресенье: 18:00 - 00:00</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Социальные сети
                  </h3>
                  <div className="space-y-2">
                    <p className="text-orange-400 hover:text-orange-300 cursor-pointer">
                      📘 ВКонтакте: @ogon_i_dim_perm
                    </p>
                    <p className="text-orange-400 hover:text-orange-300 cursor-pointer">
                      📸 Instagram: @ogon_i_dim_perm
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map placeholder */}
          <Card className="shadow-xl bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                Как нас найти
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-slate-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-lg font-medium mb-2">Карта</p>
                  <p className="text-sm">ул. Луначарского, 32</p>
                  <p className="text-sm text-slate-400 mt-2">
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
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-500/20 to-purple-500/20 border-orange-400/30 bg-slate-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                🎯 Почему выбирают нас?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300">
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

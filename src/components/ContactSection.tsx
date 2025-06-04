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
              <div className="h-96 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2229.8674!2d56.2431!3d58.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e8c6c6d6c6c6c6%3A0x1!2z0YPQuy4g0JvRg9C90LDRh9Cw0YDRgdC60L7Qs9C-LCAzMiwg0J_QtdGA0LzRjCwg0J_QtdGA0LzRgdC60LjQuSDQutGA0LDQuSwgUlVTU0lB!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/30 to-transparent pointer-events-none"></div>
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

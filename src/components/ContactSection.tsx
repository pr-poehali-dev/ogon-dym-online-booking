import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section
      id="contacts"
      className="min-h-screen relative overflow-hidden flex flex-col"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/31db462e-48f6-4bdb-b56d-a8c0cdf1742e/files/f40fd4c7-a133-4f7e-820b-5ef8452b9870.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Title area — top, transparent */}
        <div className="text-center pt-20 pb-8 px-4">
          <h2 className="text-5xl font-bold text-white mb-3">Контакты</h2>
          <p className="text-xl text-white/70">
            Найдите нас в самом центре Перми
          </p>
        </div>

        {/* Cards — pushed to bottom */}
        <div className="mt-auto pb-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Contact Info */}
            <Card className="shadow-xl bg-black/40 backdrop-blur-sm border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-white">Огонь и Дым</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <h3 className="font-semibold text-white/90 mb-0.5">Адрес</h3>
                    <p className="text-white/60">г. Пермь, ул. Луначарского, 32</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <h3 className="font-semibold text-white/90 mb-0.5">Телефон</h3>
                    <p className="text-white/60">+7 (342) 298-45-67</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">🕒</span>
                  <div>
                    <h3 className="font-semibold text-white/90 mb-0.5">Режим работы</h3>
                    <div className="text-white/60 space-y-0.5">
                      <p>Пн–Чт: 18:00 – 02:00</p>
                      <p>Пт–Сб: 18:00 – 04:00</p>
                      <p>Вс: 18:00 – 00:00</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">💬</span>
                  <div>
                    <h3 className="font-semibold text-white/90 mb-0.5">Соцсети</h3>
                    <div className="space-y-1">
                      <p className="text-orange-400/80 hover:text-orange-300 cursor-pointer">📘 ВКонтакте: @ogon_i_dim_perm</p>
                      <p className="text-orange-400/80 hover:text-orange-300 cursor-pointer">📸 Instagram: @ogon_i_dim_perm</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-xl bg-black/40 backdrop-blur-sm border-white/10 overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">Как нас найти</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-64 relative overflow-hidden">
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
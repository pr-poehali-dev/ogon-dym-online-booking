const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">О нас</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Место, где создаются воспоминания.{" "}
                <span className="text-orange-400 font-semibold">
                  Огонь и дым
                </span>{" "}
                — это не просто кальянная, а целый мир удовольствий и отдыха. Мы
                создали уютное пространство, где каждый гость чувствует себя
                особенным. Наша команда профессионалов знает всё о создании
                идеального кальяна и атмосферы.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Уже более{" "}
                <span className="text-purple-400 font-semibold">5 лет</span> мы
                радуем наших гостей отличным сервисом, разнообразием вкусов и
                уютной атмосферой. Наше заведение стало популярным местом встреч
                друзей, деловых переговоров и романтических свиданий.
              </p>

              {/* Decorative elements */}
              <div className="flex justify-center items-center mt-8 space-x-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔥</div>
                  <p className="text-sm text-gray-500">Премиум качество</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💨</div>
                  <p className="text-sm text-gray-500">Уютная атмосфера</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⭐</div>
                  <p className="text-sm text-gray-500">5+ лет опыта</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: "music" | "show" | "party" | "special";
  description: string;
  price: string;
  image: string;
}

const EventsSection = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Джаз-вечер с живой музыкой",
      date: "15 Июня",
      time: "20:00",
      type: "music",
      description: "Атмосферный джазовый вечер с известными музыкантами города",
      price: "от 2000₽",
      image:
        "https://cdn.poehali.dev/files/ea9c8f5a-d797-4b7e-8c26-c1618d6482fe.png",
    },
    {
      id: 2,
      title: "Танцы живота с Айшей",
      date: "18 Июня",
      time: "21:30",
      type: "show",
      description:
        "Завораживающее шоу восточных танцев от профессиональной танцовщицы",
      price: "Бесплатно",
      image:
        "https://cdn.poehali.dev/files/0c20db88-189d-45c4-b8b9-62cc927a1cd1.jpg",
    },
    {
      id: 3,
      title: "Караоке-батл",
      date: "22 Июня",
      time: "19:00",
      type: "party",
      description: "Веселый вечер караоке с призами для лучших исполнителей",
      price: "от 1500₽",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",
    },
    {
      id: 4,
      title: "Вечер с Вовочкой",
      date: "25 Июня",
      time: "18:00",
      type: "special",
      description:
        "Встреча с легендарным Вовочкой - анекдоты и весёлые истории",
      price: "от 2500₽",
      image:
        "https://cdn.poehali.dev/files/ea9c8f5a-d797-4b7e-8c26-c1618d6482fe.png",
    },
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case "music":
        return "Music";
      case "show":
        return "Sparkles";
      case "party":
        return "PartyPopper";
      case "special":
        return "Star";
      default:
        return "Calendar";
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "music":
        return "from-blue-500 to-purple-600";
      case "show":
        return "from-pink-500 to-red-600";
      case "party":
        return "from-green-500 to-blue-600";
      case "special":
        return "from-orange-500 to-purple-600";
      default:
        return "from-slate-500 to-slate-600";
    }
  };

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🎭 Афиша мероприятий
          </h2>
          <p className="text-xl text-slate-300">
            Не пропустите яркие события нашего ресторана
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <Card
              key={event.id}
              className="bg-slate-900 border-slate-700 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover brightness-90 contrast-110"
                />
                <div
                  className={`absolute top-4 left-4 bg-gradient-to-r ${getEventColor(event.type)} px-3 py-1 rounded-full text-white text-sm flex items-center gap-2`}
                >
                  <Icon name={getEventIcon(event.type)} size={16} />
                  {event.type === "music" && "Музыка"}
                  {event.type === "show" && "Шоу"}
                  {event.type === "party" && "Вечеринка"}
                  {event.type === "special" && "Особое"}
                </div>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  {event.price}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-white text-xl">
                  {event.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-orange-400">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    <span>{event.time}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-slate-300 mb-6">{event.description}</p>
                <div className="flex gap-3">
                  <Button
                    className={`flex-1 bg-gradient-to-r ${getEventColor(event.type)} hover:opacity-90`}
                  >
                    Забронировать место
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Icon name="Share2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter signup */}
        <Card className="max-w-2xl mx-auto mt-12 bg-gradient-to-r from-orange-500 to-purple-600 border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              📅 Не пропустите новые события!
            </h3>
            <p className="text-white mb-6">
              Подпишитесь на уведомления о предстоящих мероприятиях
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 rounded border-0 text-slate-800"
              />
              <Button className="bg-white text-orange-600 hover:bg-slate-100">
                Подписаться
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EventsSection;

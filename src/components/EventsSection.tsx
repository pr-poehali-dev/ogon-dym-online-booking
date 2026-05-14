import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

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
  const [bookingData, setBookingData] = useState({
    eventId: null as number | null,
    name: "",
    phone: "",
    guests: "2",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
        "https://cdn.poehali.dev/projects/31db462e-48f6-4bdb-b56d-a8c0cdf1742e/files/3f345a8b-390f-424e-8ab8-7aa241bbe6c8.jpg",
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
        "https://cdn.poehali.dev/projects/31db462e-48f6-4bdb-b56d-a8c0cdf1742e/files/01c60da4-2c40-474f-aa20-28981bb6d7c9.jpg",
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
        "https://cdn.poehali.dev/projects/31db462e-48f6-4bdb-b56d-a8c0cdf1742e/files/2aa6681e-f7d6-4d9e-add0-22fa20e71b21.jpg",
    },
    {
      id: 4,
      title: "Мастер-класс по кальянам",
      date: "25 Июня",
      time: "18:00",
      type: "special",
      description:
        "Научитесь готовить идеальный кальян от профессионального кальянщика",
      price: "от 2500₽",
      image:
        "https://cdn.poehali.dev/projects/31db462e-48f6-4bdb-b56d-a8c0cdf1742e/files/dcbb471c-5551-408c-8db4-0aa2234f1a54.jpg",
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
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900"
    >
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
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        className={`flex-1 bg-gradient-to-r ${getEventColor(event.type)} hover:opacity-90`}
                        onClick={() =>
                          setBookingData({ ...bookingData, eventId: event.id })
                        }
                      >
                        Забронировать место
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-800 border-slate-700 text-white">
                      <DialogHeader>
                        <DialogTitle className="text-xl">
                          Бронирование на событие
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {(() => {
                          const currentEvent = events.find(
                            (e) => e.id === bookingData.eventId,
                          );
                          return currentEvent ? (
                            <div className="bg-slate-700 p-4 rounded-lg mb-4">
                              <h3 className="font-bold text-orange-400">
                                {currentEvent.title}
                              </h3>
                              <p className="text-sm text-slate-300">
                                {currentEvent.date} в {currentEvent.time}
                              </p>
                              <p className="text-sm text-slate-300">
                                {currentEvent.price}
                              </p>
                            </div>
                          ) : null;
                        })()}
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Ваше имя
                          </label>
                          <Input
                            placeholder="Введите ваше имя"
                            value={bookingData.name}
                            onChange={(e) =>
                              setBookingData({
                                ...bookingData,
                                name: e.target.value,
                              })
                            }
                            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Телефон
                          </label>
                          <Input
                            placeholder="+7 (xxx) xxx-xx-xx"
                            value={bookingData.phone}
                            onChange={(e) => {
                              let value = e.target.value;
                              if (!value.startsWith("+7")) {
                                value = "+7 " + value.replace(/^\+?7?\s*/, "");
                              }
                              setBookingData({
                                ...bookingData,
                                phone: value,
                              });
                            }}
                            onFocus={(e) => {
                              if (!e.target.value) {
                                setBookingData({
                                  ...bookingData,
                                  phone: "+7 ",
                                });
                              }
                            }}
                            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Количество мест
                          </label>
                          <select
                            className="w-full p-2 border border-slate-600 rounded-md bg-slate-700 text-white"
                            value={bookingData.guests}
                            onChange={(e) =>
                              setBookingData({
                                ...bookingData,
                                guests: e.target.value,
                              })
                            }
                          >
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? "место" : "места"}
                              </option>
                            ))}
                          </select>
                        </div>
                        <Button
                          className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:opacity-90"
                          onClick={() => {
                            if (bookingData.name && bookingData.phone) {
                              const event = events.find(
                                (e) => e.id === bookingData.eventId,
                              );
                              alert(
                                `✅ Место на событие забронировано!\n\nСобытие: ${event?.title}\nДата: ${event?.date} в ${event?.time}\nИмя: ${bookingData.name}\nТелефон: ${bookingData.phone}\nМест: ${bookingData.guests}\nЦена: ${event?.price}\n\nМы свяжемся с вами для подтверждения!`,
                              );
                              setIsDialogOpen(false);
                              setBookingData({
                                eventId: null,
                                name: "",
                                phone: "",
                                guests: "2",
                              });
                            } else {
                              alert("Пожалуйста, заполните все поля");
                            }
                          }}
                        >
                          🎭 Забронировать место на событие
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [guests, setGuests] = useState<string>("2");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");

  const timeSlots = [
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime && name && phone) {
      alert(
        `Спасибо, ${name}! Ваш столик на ${guests} человек забронирован на ${selectedDate.toLocaleDateString()} в ${selectedTime}. Мы свяжемся с вами по номеру ${phone}`,
      );
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  };

  return (
    <section id="booking" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Забронировать столик
          </h2>
          <p className="text-xl text-slate-600">
            Выберите удобное время для незабываемого вечера
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-purple-600 text-white">
            <CardTitle className="text-2xl text-center">
              Онлайн бронирование
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">
                  Выберите дату
                </h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border shadow"
                />
              </div>

              {/* Booking form */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Детали бронирования
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Ваше имя
                      </label>
                      <Input
                        placeholder="Введите ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Телефон
                      </label>
                      <Input
                        placeholder="+7 (xxx) xxx-xx-xx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Количество гостей
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "гость" : "гостя"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Время
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={
                              selectedTime === time ? "default" : "outline"
                            }
                            className="text-sm"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white py-3 text-lg"
                  onClick={handleBooking}
                >
                  🔥 Забронировать столик
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;

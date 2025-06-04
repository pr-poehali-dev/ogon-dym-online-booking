import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [guests, setGuests] = useState<string>("2");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");

  // Pre-order state
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>(
    {},
  );

  // Cancel booking state
  const [cancelPhone, setCancelPhone] = useState<string>("");
  const [cancelBookingId, setCancelBookingId] = useState<string>("");

  // Menu items for pre-order
  const menuItems = [
    {
      id: "classic",
      name: "Классический микс",
      category: "hookah",
      price: 800,
    },
    { id: "tropical", name: "Тропический рай", category: "hookah", price: 950 },
    { id: "berry", name: "Ягодный взрыв", category: "hookah", price: 900 },
    {
      id: "citrus",
      name: "Цитрусовая свежесть",
      category: "hookah",
      price: 850,
    },
    {
      id: "chocolate",
      name: "Шоколадный десерт",
      category: "hookah",
      price: 1000,
    },
    { id: "spicy", name: "Огненный микс", category: "hookah", price: 1100 },
    { id: "tea", name: "Чай зелёный/чёрный", category: "drink", price: 200 },
    { id: "coffee", name: "Кофе американо", category: "drink", price: 250 },
    { id: "lemonade", name: "Лимонад домашний", category: "drink", price: 350 },
    { id: "smoothie", name: "Смузи ягодный", category: "drink", price: 450 },
  ];

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

  const handleItemChange = (itemId: string, quantity: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: quantity,
    }));
  };

  const getTotalPreorderAmount = () => {
    return Object.entries(selectedItems).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find((i) => i.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const handleBooking = () => {
    if (selectedDate && selectedStartTime && selectedEndTime && name && phone) {
      const preorderSummary = Object.entries(selectedItems)
        .filter(([_, quantity]) => quantity > 0)
        .map(([itemId, quantity]) => {
          const item = menuItems.find((i) => i.id === itemId);
          return `${item?.name} x${quantity}`;
        })
        .join(", ");

      const totalAmount = getTotalPreorderAmount();
      const message = `Спасибо, ${name}! Ваш столик на ${guests} человек забронирован на ${selectedDate.toLocaleDateString()} с ${selectedStartTime} до ${selectedEndTime}.${preorderSummary ? `\n\nПредварительный заказ:\n${preorderSummary}\nСумма: ${totalAmount} ₽` : ""}\n\nМы свяжемся с вами по номеру ${phone}`;

      alert(message);
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  };

  const handleCancelBooking = () => {
    if (cancelPhone && cancelBookingId) {
      alert(
        `Бронирование #${cancelBookingId} отменено. Если у вас есть вопросы, звоните по телефону ${cancelPhone}`,
      );
      setCancelPhone("");
      setCancelBookingId("");
    } else {
      alert("Пожалуйста, введите номер телефона и ID бронирования");
    }
  };

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Забронировать столик
          </h2>
          <p className="text-xl text-slate-300">
            Выберите удобное время для незабываемого вечера
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-xl bg-slate-800 border-slate-700">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-purple-600 text-white">
            <CardTitle className="text-2xl text-center">
              Онлайн бронирование
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Tabs defaultValue="book" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="book" className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  Забронировать
                </TabsTrigger>
                <TabsTrigger value="cancel" className="flex items-center gap-2">
                  <Icon name="X" size={16} />
                  Отменить бронь
                </TabsTrigger>
              </TabsList>

              <TabsContent value="book">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">
                      Выберите дату
                    </h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border border-slate-600 bg-slate-700 text-white"
                    />
                  </div>

                  {/* Booking form */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Детали бронирования
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Ваше имя
                          </label>
                          <Input
                            placeholder="Введите ваше имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Телефон
                          </label>
                          <Input
                            placeholder="+7 (xxx) xxx-xx-xx"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Количество гостей
                          </label>
                          <select
                            className="w-full p-2 border border-slate-600 rounded-md bg-slate-700 text-white"
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
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Время начала
                          </label>
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                variant={
                                  selectedStartTime === time
                                    ? "default"
                                    : "outline"
                                }
                                className="text-sm"
                                onClick={() => setSelectedStartTime(time)}
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">
                            Время окончания
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                variant={
                                  selectedEndTime === time
                                    ? "default"
                                    : "outline"
                                }
                                className="text-sm"
                                onClick={() => setSelectedEndTime(time)}
                                disabled={
                                  selectedStartTime && time <= selectedStartTime
                                }
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pre-order section */}
                    <div className="border-t border-slate-600 pt-6">
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Предварительный заказ (опционально)
                      </h4>

                      <div className="space-y-4">
                        <div>
                          <h5 className="text-md font-medium text-slate-300 mb-3">
                            Кальяны
                          </h5>
                          <div className="space-y-2">
                            {menuItems
                              .filter((item) => item.category === "hookah")
                              .map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center justify-between bg-slate-700/50 p-3 rounded-lg"
                                >
                                  <div className="flex-1">
                                    <span className="text-white text-sm">
                                      {item.name}
                                    </span>
                                    <span className="text-slate-400 text-sm ml-2">
                                      {item.price} ₽
                                    </span>
                                  </div>
                                  <select
                                    className="w-16 p-1 bg-slate-600 border border-slate-500 rounded text-white text-sm"
                                    value={selectedItems[item.id] || 0}
                                    onChange={(e) =>
                                      handleItemChange(
                                        item.id,
                                        parseInt(e.target.value),
                                      )
                                    }
                                  >
                                    {[0, 1, 2, 3].map((num) => (
                                      <option key={num} value={num}>
                                        {num}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-md font-medium text-slate-300 mb-3">
                            Напитки
                          </h5>
                          <div className="space-y-2">
                            {menuItems
                              .filter((item) => item.category === "drink")
                              .map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center justify-between bg-slate-700/50 p-3 rounded-lg"
                                >
                                  <div className="flex-1">
                                    <span className="text-white text-sm">
                                      {item.name}
                                    </span>
                                    <span className="text-slate-400 text-sm ml-2">
                                      {item.price} ₽
                                    </span>
                                  </div>
                                  <select
                                    className="w-16 p-1 bg-slate-600 border border-slate-500 rounded text-white text-sm"
                                    value={selectedItems[item.id] || 0}
                                    onChange={(e) =>
                                      handleItemChange(
                                        item.id,
                                        parseInt(e.target.value),
                                      )
                                    }
                                  >
                                    {[0, 1, 2, 3, 4, 5].map((num) => (
                                      <option key={num} value={num}>
                                        {num}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              ))}
                          </div>
                        </div>

                        {getTotalPreorderAmount() > 0 && (
                          <div className="bg-orange-900/30 border border-orange-700 rounded-lg p-4">
                            <div className="flex justify-between items-center text-white">
                              <span className="font-medium">
                                Сумма предзаказа:
                              </span>
                              <span className="text-lg font-bold text-orange-300">
                                {getTotalPreorderAmount()} ₽
                              </span>
                            </div>
                          </div>
                        )}
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
              </TabsContent>

              <TabsContent value="cancel">
                <div className="max-w-md mx-auto space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Отмена бронирования
                    </h3>
                    <p className="text-slate-300">
                      Введите данные для поиска вашего бронирования
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Номер телефона
                      </label>
                      <Input
                        placeholder="+7 (xxx) xxx-xx-xx"
                        value={cancelPhone}
                        onChange={(e) => setCancelPhone(e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        ID бронирования
                      </label>
                      <Input
                        placeholder="Например: BR2024001"
                        value={cancelBookingId}
                        onChange={(e) => setCancelBookingId(e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>

                    <div className="bg-yellow-900/50 border border-yellow-700 rounded-md p-4">
                      <div className="flex items-start gap-2">
                        <Icon
                          name="AlertTriangle"
                          size={16}
                          className="text-yellow-400 mt-0.5"
                        />
                        <div className="text-sm text-yellow-200">
                          <p className="font-medium">Важно!</p>
                          <p>
                            ID бронирования был отправлен вам в SMS после
                            подтверждения.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3"
                    onClick={handleCancelBooking}
                  >
                    <Icon name="X" size={16} className="mr-2" />
                    Отменить бронирование
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;

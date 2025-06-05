import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useIsMobile } from "@/hooks/use-mobile";

interface Table {
  id: number;
  seats: number;
  type: "regular" | "vip" | "hookah";
  occupied: boolean;
  x: number;
  y: number;
}

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [guests, setGuests] = useState<string>("2");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const isMobile = useIsMobile();

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

  // Добавляем данные о столиках
  const tables: Table[] = [
    { id: 1, seats: 2, type: "vip", occupied: false, x: 1, y: 1 },
    { id: 2, seats: 4, type: "vip", occupied: true, x: 3, y: 1 },
    { id: 3, seats: 2, type: "vip", occupied: false, x: 5, y: 1 },
    { id: 4, seats: 6, type: "vip", occupied: false, x: 1, y: 3 },
    { id: 5, seats: 4, type: "hookah", occupied: false, x: 3, y: 3 },
    { id: 6, seats: 2, type: "regular", occupied: false, x: 5, y: 3 },
    { id: 7, seats: 8, type: "hookah", occupied: false, x: 2, y: 5 },
    { id: 8, seats: 4, type: "regular", occupied: true, x: 4, y: 5 },
  ];

  const getTableColor = (table: Table) => {
    if (table.occupied) return "bg-red-500 opacity-50 cursor-not-allowed";
    if (selectedTable === table.id) return "bg-orange-500";
    switch (table.type) {
      case "vip":
        return "bg-purple-500 hover:bg-purple-400";
      case "hookah":
        return "bg-blue-500 hover:bg-blue-400";
      default:
        return "bg-slate-500 hover:bg-slate-400";
    }
  };

  const getTableTypeIcon = (type: string) => {
    switch (type) {
      case "vip":
        return "👑";
      case "hookah":
        return "💨";
      default:
        return "🪑";
    }
  };

  const getTableTypeName = (type: string) => {
    switch (type) {
      case "vip":
        return "VIP зона";
      case "hookah":
        return "Кальянная";
      default:
        return "Обычный";
    }
  };

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
    if (
      selectedDate &&
      selectedStartTime &&
      selectedEndTime &&
      name &&
      phone &&
      selectedTable
    ) {
      const table = tables.find((t) => t.id === selectedTable);
      const preorderSummary = Object.entries(selectedItems)
        .filter(([_, quantity]) => quantity > 0)
        .map(([itemId, quantity]) => {
          const item = menuItems.find((i) => i.id === itemId);
          return `${item?.name} x${quantity}`;
        })
        .join(", ");

      const totalAmount = getTotalPreorderAmount();
      const message = `Спасибо, ${name}! Столик #${selectedTable} (${getTableTypeName(table?.type || "regular")}, ${table?.seats} мест) забронирован на ${guests} человек на ${selectedDate.toLocaleDateString()} с ${selectedStartTime} до ${selectedEndTime}.${preorderSummary ? `\n\nПредварительный заказ:\n${preorderSummary}\nСумма: ${totalAmount} ₽` : ""}\n\nМы свяжемся с вами по номеру ${phone}`;

      alert(message);
    } else {
      alert("Пожалуйста, заполните все поля и выберите столик");
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
                <div
                  className={`grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"}`}
                >
                  {/* Table selection - добавляем выбор столика */}
                  <div className="space-y-4 order-1">
                    <h3 className="text-lg font-semibold text-white">
                      Выберите столик
                    </h3>
                    <Card className="bg-slate-700 border-slate-600">
                      <CardContent className="p-4">
                        {/* Legend */}
                        <div
                          className={`grid gap-2 mb-4 ${isMobile ? "grid-cols-2" : "grid-cols-4"}`}
                        >
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-purple-500 rounded"></div>
                            <span className="text-slate-300">VIP</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-blue-500 rounded"></div>
                            <span className="text-slate-300">Кальян</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-slate-500 rounded"></div>
                            <span className="text-slate-300">Обычный</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-3 h-3 bg-red-500 rounded"></div>
                            <span className="text-slate-300">Занят</span>
                          </div>
                        </div>

                        {/* Tables Grid - компактная версия для мобильных */}
                        <div
                          className={`grid gap-2 mb-4 ${isMobile ? "grid-cols-4" : "grid-cols-6"}`}
                        >
                          {Array.from(
                            { length: isMobile ? 16 : 36 },
                            (_, index) => {
                              const cols = isMobile ? 4 : 6;
                              const col = (index % cols) + 1;
                              const row = Math.floor(index / cols) + 1;
                              const table = tables.find(
                                (t) => t.x === col && t.y === row,
                              );

                              const uniqueKey = `cell-${col}-${row}`;

                              if (!table) {
                                return (
                                  <div
                                    key={uniqueKey}
                                    className="aspect-square flex items-center justify-center"
                                  >
                                    <div className="w-6 h-6 border border-dashed border-slate-600 rounded opacity-20"></div>
                                  </div>
                                );
                              }

                              return (
                                <button
                                  key={`table-${table.id}`}
                                  className={`aspect-square ${getTableColor(table)} 
                                  ${!table.occupied ? "cursor-pointer hover:scale-105" : ""}
                                  transition-all duration-200 rounded flex flex-col items-center justify-center text-white text-xs font-bold shadow-md`}
                                  onClick={() =>
                                    !table.occupied &&
                                    setSelectedTable(table.id)
                                  }
                                  disabled={table.occupied}
                                >
                                  <span
                                    className={isMobile ? "text-sm" : "text-lg"}
                                  >
                                    {getTableTypeIcon(table.type)}
                                  </span>
                                  <div className="text-center">
                                    <div
                                      className={
                                        isMobile ? "text-xs" : "text-xs"
                                      }
                                    >
                                      #{table.id}
                                    </div>
                                    <div className="text-xs opacity-80">
                                      {table.seats}м
                                    </div>
                                  </div>
                                </button>
                              );
                            },
                          )}
                        </div>

                        {/* Entrance and bar indicators */}
                        <div className="space-y-2">
                          <div className="bg-orange-500 text-white px-3 py-1 rounded text-xs text-center">
                            🚪 Вход
                          </div>
                          <div className="bg-amber-600 text-white px-3 py-1 rounded text-xs text-center">
                            🍸 Бар
                          </div>
                        </div>

                        {/* Selected table info */}
                        {selectedTable && (
                          <div className="mt-4 p-3 bg-orange-500/20 border border-orange-500 rounded-lg">
                            {(() => {
                              const table = tables.find(
                                (t) => t.id === selectedTable,
                              );
                              return table ? (
                                <div className="text-white text-sm">
                                  <div className="font-medium mb-1">
                                    Столик #{selectedTable}
                                  </div>
                                  <div className="text-orange-300">
                                    💺 {table.seats} мест • 🏷️{" "}
                                    {getTableTypeName(table.type)}
                                  </div>
                                </div>
                              ) : null;
                            })()}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Calendar */}
                  <div
                    className={`space-y-4 ${isMobile ? "order-3" : "order-2"}`}
                  >
                    <h3 className="text-lg font-semibold text-white">
                      Выберите дату
                    </h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border border-slate-600 bg-slate-700 text-white mx-auto"
                    />
                  </div>

                  {/* Booking form */}
                  <div
                    className={`space-y-6 ${isMobile ? "order-2 lg:col-span-2" : "order-3 lg:col-span-2"}`}
                  >
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
                            onChange={(e) => {
                              let value = e.target.value;
                              if (!value.startsWith("+7")) {
                                value = "+7 " + value.replace(/^\+?7?\s*/, "");
                              }
                              setPhone(value);
                            }}
                            onFocus={(e) => {
                              if (!e.target.value) {
                                setPhone("+7 ");
                              }
                            }}
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
                      disabled={!selectedTable}
                    >
                      🔥 Забронировать столик{" "}
                      {selectedTable ? `#${selectedTable}` : ""}
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
                        onChange={(e) => {
                          let value = e.target.value;
                          if (!value.startsWith("+7")) {
                            value = "+7 " + value.replace(/^\+?7?\s*/, "");
                          }
                          setCancelPhone(value);
                        }}
                        onFocus={(e) => {
                          if (!e.target.value) {
                            setCancelPhone("+7 ");
                          }
                        }}
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

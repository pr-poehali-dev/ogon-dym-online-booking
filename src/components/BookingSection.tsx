import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useIsMobile } from "@/hooks/use-mobile";
import { BookingData } from "@/types/booking";
import { tables, menuItems } from "@/data/booking";
import TableSelection from "@/components/booking/TableSelection";
import DateTimeSelection from "@/components/booking/DateTimeSelection";
import PreOrderSection from "@/components/booking/PreOrderSection";
import CancelBooking from "@/components/booking/CancelBooking";

const BookingSection = () => {
  const [bookingData, setBookingData] = useState<BookingData>({
    selectedStartTime: "",
    selectedEndTime: "",
    guests: "2",
    phone: "",
    name: "",
    selectedTable: null,
    selectedItems: {},
  });

  const isMobile = useIsMobile();

  const updateBookingData = (updates: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...updates }));
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

  const getTotalPreorderAmount = () => {
    return Object.entries(bookingData.selectedItems).reduce(
      (total, [itemId, quantity]) => {
        const item = menuItems.find((i) => i.id === itemId);
        return total + (item ? item.price * quantity : 0);
      },
      0,
    );
  };

  const handleBooking = () => {
    const {
      selectedDate,
      selectedStartTime,
      selectedEndTime,
      name,
      phone,
      selectedTable,
      guests,
      selectedItems,
    } = bookingData;

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
      const message = `Спасибо, ${name}! Столик #${selectedTable} (${getTableTypeName(table?.type || "regular")}, ${table?.seats} мест) забронирован на ${guests} человек на ${selectedDate.toLocaleDateString()} с ${selectedStartTime} до ${selectedEndTime}.${
        preorderSummary
          ? `\n\nПредварительный заказ:\n${preorderSummary}\nСумма: ${totalAmount} ₽`
          : ""
      }\n\nМы свяжемся с вами по номеру ${phone}`;

      alert(message);
    } else {
      alert("Пожалуйста, заполните все поля и выберите столик");
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
                  className={`grid gap-8 ${
                    isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
                  }`}
                >
                  <TableSelection
                    tables={tables}
                    selectedTable={bookingData.selectedTable}
                    onTableSelect={(tableId) =>
                      updateBookingData({ selectedTable: tableId })
                    }
                  />

                  <DateTimeSelection
                    selectedDate={bookingData.selectedDate}
                    selectedStartTime={bookingData.selectedStartTime}
                    selectedEndTime={bookingData.selectedEndTime}
                    guests={bookingData.guests}
                    phone={bookingData.phone}
                    name={bookingData.name}
                    onDateSelect={(date) =>
                      updateBookingData({ selectedDate: date })
                    }
                    onStartTimeSelect={(time) =>
                      updateBookingData({ selectedStartTime: time })
                    }
                    onEndTimeSelect={(time) =>
                      updateBookingData({ selectedEndTime: time })
                    }
                    onGuestsChange={(guests) => updateBookingData({ guests })}
                    onPhoneChange={(phone) => updateBookingData({ phone })}
                    onNameChange={(name) => updateBookingData({ name })}
                  />

                  <div className="lg:col-span-2">
                    <PreOrderSection
                      menuItems={menuItems}
                      selectedItems={bookingData.selectedItems}
                      onItemChange={(itemId, quantity) =>
                        updateBookingData({
                          selectedItems: {
                            ...bookingData.selectedItems,
                            [itemId]: quantity,
                          },
                        })
                      }
                    />
                  </div>
                </div>

                <Button
                  className="w-full mt-8 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white py-3 text-lg"
                  onClick={handleBooking}
                  disabled={!bookingData.selectedTable}
                >
                  🔥 Забронировать столик{" "}
                  {bookingData.selectedTable
                    ? `#${bookingData.selectedTable}`
                    : ""}
                </Button>
              </TabsContent>

              <TabsContent value="cancel">
                <CancelBooking />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSection;

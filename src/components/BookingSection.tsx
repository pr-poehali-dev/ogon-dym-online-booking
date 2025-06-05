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
          <p className="text-slate-300">
            Выберите удобное время и столик для незабываемого вечера
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="booking" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 bg-slate-800 border-slate-700">
              <TabsTrigger
                value="booking"
                className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-orange-500"
              >
                <Icon name="Calendar" className="w-4 h-4 mr-2" />
                Бронирование
              </TabsTrigger>
              <TabsTrigger
                value="cancel"
                className="text-slate-300 data-[state=active]:text-white data-[state=active]:bg-red-500"
              >
                <Icon name="X" className="w-4 h-4 mr-2" />
                Отменить бронь
              </TabsTrigger>
            </TabsList>

            <TabsContent value="booking" className="space-y-6">
              <div
                className={`grid gap-6 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}
              >
                <div className="space-y-6 order-2">
                  <DateTimeSelection
                    bookingData={bookingData}
                    updateBookingData={updateBookingData}
                  />
                </div>

                <TableSelection
                  tables={tables}
                  selectedTable={bookingData.selectedTable}
                  onTableSelect={(tableId) =>
                    updateBookingData({ selectedTable: tableId })
                  }
                />
              </div>

              <PreOrderSection
                menuItems={menuItems}
                selectedItems={bookingData.selectedItems}
                updateSelectedItems={(items) =>
                  updateBookingData({ selectedItems: items })
                }
                totalAmount={getTotalPreorderAmount()}
              />

              <div className="flex justify-center">
                <Button
                  onClick={handleBooking}
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
                >
                  <Icon name="Calendar" className="w-5 h-5 mr-2" />
                  Забронировать столик
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="cancel">
              <CancelBooking />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

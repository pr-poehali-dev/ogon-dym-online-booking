import { useState, useEffect, useCallback } from "react";
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

const BOOKING_URL = "https://functions.poehali.dev/3598b265-611e-4eef-879d-cddc4ee99d1d";

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
  const [busyTables, setBusyTables] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{ cancelCode: string; tableId: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const isMobile = useIsMobile();

  const updateBookingData = (updates: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...updates }));
  };

  const fetchBusyTables = useCallback(async () => {
    const { selectedDate, selectedStartTime, selectedEndTime } = bookingData;
    if (!selectedDate || !selectedStartTime || !selectedEndTime) {
      setBusyTables([]);
      return;
    }
    setIsLoading(true);
    try {
      const date = selectedDate.toISOString().split("T")[0];
      const res = await fetch(
        `${BOOKING_URL}/busy?date=${date}&start_time=${selectedStartTime}&end_time=${selectedEndTime}`
      );
      const data = await res.json();
      const parsed = typeof data === "string" ? JSON.parse(data) : data;
      setBusyTables(parsed.busy_tables || []);
    } catch {
      setBusyTables([]);
    } finally {
      setIsLoading(false);
    }
  }, [bookingData.selectedDate, bookingData.selectedStartTime, bookingData.selectedEndTime]);

  useEffect(() => {
    fetchBusyTables();
  }, [fetchBusyTables]);

  const getTableTypeName = (type: string) => {
    switch (type) {
      case "vip": return "VIP зона";
      case "hookah": return "Кальянная";
      default: return "Обычный";
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

  const handleBooking = async () => {
    const { selectedDate, selectedStartTime, selectedEndTime, name, phone, selectedTable, guests, selectedItems } = bookingData;

    if (!selectedDate || !selectedStartTime || !selectedEndTime || !name || !phone || !selectedTable) {
      setErrorMsg("Пожалуйста, заполните все поля и выберите столик");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    const preOrder: Record<string, { name: string; quantity: number; price: number }> = {};
    Object.entries(selectedItems).forEach(([itemId, quantity]) => {
      if (quantity > 0) {
        const item = menuItems.find((i) => i.id === itemId);
        if (item) preOrder[itemId] = { name: item.name, quantity, price: item.price };
      }
    });

    try {
      const res = await fetch(BOOKING_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table_id: selectedTable,
          date: selectedDate.toISOString().split("T")[0],
          start_time: selectedStartTime,
          end_time: selectedEndTime,
          name,
          phone,
          guests: parseInt(guests),
          pre_order: preOrder,
        }),
      });

      const raw = await res.json();
      const data = typeof raw === "string" ? JSON.parse(raw) : raw;

      if (res.status === 409 || data.error) {
        setErrorMsg(data.error || "Ошибка бронирования");
        await fetchBusyTables();
      } else if (data.success) {
        setSuccessInfo({ cancelCode: data.cancel_code, tableId: selectedTable });
        setBookingData({
          selectedStartTime: "",
          selectedEndTime: "",
          guests: "2",
          phone: "",
          name: "",
          selectedTable: null,
          selectedItems: {},
        });
        setBusyTables([]);
      }
    } catch {
      setErrorMsg("Ошибка соединения. Попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const tablesWithBusy = tables.map((t) => ({
    ...t,
    occupied: busyTables.includes(t.id),
  }));

  return (
    <section
      id="booking"
      className="py-20 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://cdn.poehali.dev/projects/31db462e-48f6-4bdb-b56d-a8c0cdf1742e/files/3f54936e-c015-44c3-a274-83d15209c338.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="container mx-auto px-4 relative z-10">
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
                {successInfo ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="text-6xl">✅</div>
                    <h3 className="text-2xl font-bold text-white">Столик забронирован!</h3>
                    <p className="text-slate-300">Столик #{successInfo.tableId} успешно забронирован.</p>
                    <div className="bg-orange-500/20 border border-orange-500 rounded-lg p-4 inline-block">
                      <p className="text-slate-300 text-sm mb-1">Ваш код отмены:</p>
                      <p className="text-orange-400 text-2xl font-bold tracking-widest">{successInfo.cancelCode}</p>
                      <p className="text-slate-400 text-xs mt-1">Сохраните его — он нужен для отмены брони</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-600/40 rounded-lg p-3 inline-block">
                      <p className="text-green-300 text-sm">📱 Номер столика с датой и временем бронирования отправили Вам на телефон</p>
                    </div>
                    <div>
                      <Button
                        className="mt-4 bg-slate-700 hover:bg-slate-600 text-white"
                        onClick={() => setSuccessInfo(null)}
                      >
                        Сделать ещё одно бронирование
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    {isLoading && (
                      <div className="text-center text-slate-400 text-sm mb-4 flex items-center justify-center gap-2">
                        <Icon name="Loader" size={14} className="animate-spin" />
                        Обновляю занятость столиков...
                      </div>
                    )}

                    <div className={`grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"}`}>
                      <TableSelection
                        tables={tablesWithBusy}
                        selectedTable={bookingData.selectedTable}
                        onTableSelect={(tableId) => {
                          updateBookingData({ selectedTable: tableId });
                          setErrorMsg("");
                        }}
                      />

                      <DateTimeSelection
                        selectedDate={bookingData.selectedDate}
                        selectedStartTime={bookingData.selectedStartTime}
                        selectedEndTime={bookingData.selectedEndTime}
                        guests={bookingData.guests}
                        phone={bookingData.phone}
                        name={bookingData.name}
                        onDateSelect={(date) => updateBookingData({ selectedDate: date, selectedTable: null })}
                        onStartTimeSelect={(time) => updateBookingData({ selectedStartTime: time, selectedTable: null })}
                        onEndTimeSelect={(time) => updateBookingData({ selectedEndTime: time, selectedTable: null })}
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
                              selectedItems: { ...bookingData.selectedItems, [itemId]: quantity },
                            })
                          }
                        />
                      </div>
                    </div>

                    {errorMsg && (
                      <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-2 text-red-300">
                        <Icon name="AlertCircle" size={16} />
                        {errorMsg}
                      </div>
                    )}

                    <Button
                      className="w-full mt-8 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white py-3 text-lg"
                      onClick={handleBooking}
                      disabled={!bookingData.selectedTable || isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Icon name="Loader" size={16} className="animate-spin" />
                          Бронирование...
                        </span>
                      ) : (
                        <>🔥 Забронировать столик {bookingData.selectedTable ? `#${bookingData.selectedTable}` : ""}</>
                      )}
                    </Button>
                  </>
                )}
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
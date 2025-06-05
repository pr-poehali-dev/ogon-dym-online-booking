import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

interface DateTimeSelectionProps {
  selectedDate?: Date;
  selectedStartTime: string;
  selectedEndTime: string;
  guests: string;
  phone: string;
  name: string;
  onDateSelect: (date: Date | undefined) => void;
  onStartTimeSelect: (time: string) => void;
  onEndTimeSelect: (time: string) => void;
  onGuestsChange: (guests: string) => void;
  onPhoneChange: (phone: string) => void;
  onNameChange: (name: string) => void;
}

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

const DateTimeSelection = ({
  selectedDate,
  selectedStartTime,
  selectedEndTime,
  guests,
  phone,
  name,
  onDateSelect,
  onStartTimeSelect,
  onEndTimeSelect,
  onGuestsChange,
  onPhoneChange,
  onNameChange,
}: DateTimeSelectionProps) => {
  const isMobile = useIsMobile();

  const handlePhoneChange = (value: string) => {
    // Убираем все кроме цифр
    const digits = value.replace(/\D/g, "");

    // Если номер начинается с 8, заменяем на 7
    let formattedValue = digits.startsWith("8")
      ? "7" + digits.slice(1)
      : digits;

    // Добавляем +7 если его нет
    if (formattedValue.startsWith("7")) {
      formattedValue = "+7 " + formattedValue.slice(1);
    } else if (formattedValue && !formattedValue.startsWith("7")) {
      formattedValue = "+7 " + formattedValue;
    } else if (!formattedValue) {
      formattedValue = "+7 ";
    }

    onPhoneChange(formattedValue);
  };

  const handlePhoneFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      onPhoneChange("+7 ");
    }
  };

  return (
    <>
      {/* Calendar */}
      <div className={`space-y-4 ${isMobile ? "order-3" : "order-2"}`}>
        <h3 className="text-lg font-semibold text-white">Выберите дату</h3>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onDateSelect}
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
                onChange={(e) => onNameChange(e.target.value)}
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
                onChange={(e) => handlePhoneChange(e.target.value)}
                onFocus={handlePhoneFocus}
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
                onChange={(e) => onGuestsChange(e.target.value)}
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
                    variant={selectedStartTime === time ? "default" : "outline"}
                    className="text-sm"
                    onClick={() => onStartTimeSelect(time)}
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
                    variant={selectedEndTime === time ? "default" : "outline"}
                    className="text-sm"
                    onClick={() => onEndTimeSelect(time)}
                    disabled={selectedStartTime && time <= selectedStartTime}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateTimeSelection;

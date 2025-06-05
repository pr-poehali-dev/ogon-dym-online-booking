import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CancelBooking = () => {
  const [cancelPhone, setCancelPhone] = useState<string>("");
  const [cancelBookingId, setCancelBookingId] = useState<string>("");

  const handlePhoneChange = (value: string) => {
    if (!value.startsWith("+7")) {
      value = "+7 " + value.replace(/^\+?7?\s*/, "");
    }
    setCancelPhone(value);
  };

  const handlePhoneFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setCancelPhone("+7 ");
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
            onChange={(e) => handlePhoneChange(e.target.value)}
            onFocus={handlePhoneFocus}
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
                ID бронирования был отправлен вам в SMS после подтверждения.
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
  );
};

export default CancelBooking;

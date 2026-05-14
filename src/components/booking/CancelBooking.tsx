import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const BOOKING_URL = "https://functions.poehali.dev/3598b265-611e-4eef-879d-cddc4ee99d1d";

const CancelBooking = () => {
  const [cancelCode, setCancelCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleCancelBooking = async () => {
    const code = cancelCode.trim().toUpperCase();
    if (!code) {
      setResult({ success: false, message: "Пожалуйста, введите код отмены" });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const res = await fetch(BOOKING_URL, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cancel_code: code }),
      });

      const raw = await res.json();
      const data = typeof raw === "string" ? JSON.parse(raw) : raw;

      if (data.success) {
        setResult({ success: true, message: data.message || "Бронирование отменено" });
        setCancelCode("");
      } else {
        setResult({ success: false, message: data.error || "Ошибка отмены" });
      }
    } catch {
      setResult({ success: false, message: "Ошибка соединения. Попробуйте ещё раз." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          Отмена бронирования
        </h3>
        <p className="text-slate-300">Введите код, который вы получили при бронировании</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Код отмены
          </label>
          <Input
            placeholder="Например: AB12CD34"
            value={cancelCode}
            onChange={(e) => {
              setCancelCode(e.target.value.toUpperCase());
              setResult(null);
            }}
            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 uppercase tracking-widest"
          />
        </div>

        <div className="bg-yellow-900/50 border border-yellow-700 rounded-md p-4">
          <div className="flex items-start gap-2">
            <Icon name="AlertTriangle" size={16} className="text-yellow-400 mt-0.5" />
            <div className="text-sm text-yellow-200">
              <p className="font-medium">Важно!</p>
              <p>Код отмены был показан вам сразу после бронирования.</p>
            </div>
          </div>
        </div>

        {result && (
          <div className={`p-3 rounded-lg flex items-center gap-2 ${
            result.success
              ? "bg-green-500/20 border border-green-500 text-green-300"
              : "bg-red-500/20 border border-red-500 text-red-300"
          }`}>
            <Icon name={result.success ? "CheckCircle" : "AlertCircle"} size={16} />
            {result.message}
          </div>
        )}
      </div>

      <Button
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3"
        onClick={handleCancelBooking}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Icon name="Loader" size={16} className="animate-spin" />
            Отмена...
          </span>
        ) : (
          <>
            <Icon name="X" size={16} className="mr-2" />
            Отменить бронирование
          </>
        )}
      </Button>
    </div>
  );
};

export default CancelBooking;

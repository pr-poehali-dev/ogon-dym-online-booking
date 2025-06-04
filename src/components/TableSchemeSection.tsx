import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Table {
  id: number;
  seats: number;
  type: "regular" | "vip" | "hookah";
  occupied: boolean;
  x: number;
  y: number;
}

const TableSchemeSection = () => {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

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
    if (table.occupied) return "bg-red-500";
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

  return (
    <section
      id="tables"
      className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🗺️ Схема столов
          </h2>
          <p className="text-xl text-slate-300">
            Выберите подходящий столик для вашей компании
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Table scheme */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800 border-slate-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  План зала
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="relative bg-slate-700 rounded-lg p-6">
                  {/* Entrance */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium">
                      🚪 Главный вход
                    </div>
                  </div>

                  {/* Tables Grid */}
                  <div className="grid grid-cols-6 gap-4 mb-6 min-h-80">
                    {Array.from({ length: 36 }, (_, index) => {
                      const col = (index % 6) + 1;
                      const row = Math.floor(index / 6) + 1;
                      const table = tables.find(
                        (t) => t.x === col && t.y === row,
                      );

                      if (!table) {
                        return (
                          <div
                            key={index}
                            className="aspect-square flex items-center justify-center"
                          >
                            <div className="w-8 h-8 border-2 border-dashed border-slate-600 rounded opacity-30"></div>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={table.id}
                          className={`aspect-square ${getTableColor(table)} 
                            ${!table.occupied ? "cursor-pointer hover:scale-105 hover:shadow-lg" : "cursor-not-allowed opacity-70"}
                            transition-all duration-200 rounded-lg flex flex-col items-center justify-center text-white text-xs font-bold shadow-md`}
                          onClick={() =>
                            !table.occupied && setSelectedTable(table.id)
                          }
                        >
                          <Icon
                            name={getTableIcon(table.type)}
                            size={16}
                            className="mb-1"
                          />
                          <div className="text-center">
                            <div>#{table.id}</div>
                            <div className="text-xs opacity-80">
                              {table.seats}м
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Stage moved to the right side */}
                  <div className="flex justify-end mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg text-sm font-bold shadow-lg">
                      🎤 Сцена
                    </div>
                  </div>

                  {/* Bar */}
                  <div className="bg-amber-700 rounded-lg p-3 text-center text-white font-medium">
                    🍸 Барная стойка
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Legend and details */}
          <div className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Легенда</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-slate-600 rounded-full"></div>
                  <span className="text-slate-300">Обычный столик</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Кальянная зона</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                  <span className="text-slate-300">VIP зона</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-slate-300">Занят</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-slate-300">Выбранный</span>
                </div>
              </CardContent>
            </Card>

            {selectedTable && (
              <Card className="bg-gradient-to-r from-orange-500 to-purple-600 border-0">
                <CardHeader>
                  <CardTitle className="text-white">
                    Столик #{selectedTable}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const table = tables.find((t) => t.id === selectedTable);
                    return table ? (
                      <div className="text-white space-y-2">
                        <p>💺 Мест: {table.seats}</p>
                        <p>
                          🏷️ Тип:{" "}
                          {table.type === "vip"
                            ? "VIP зона"
                            : table.type === "hookah"
                              ? "Кальянная"
                              : "Обычный"}
                        </p>
                        <Button
                          className="w-full mt-4 bg-white text-orange-600 hover:bg-slate-100"
                          onClick={() =>
                            alert(
                              `Столик #${selectedTable} выбран для бронирования!`,
                            )
                          }
                        >
                          Забронировать этот столик
                        </Button>
                      </div>
                    ) : null;
                  })()}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableSchemeSection;

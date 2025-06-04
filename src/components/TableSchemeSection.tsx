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
    { id: 1, seats: 2, type: "regular", occupied: false, x: 10, y: 10 },
    { id: 2, seats: 4, type: "hookah", occupied: true, x: 50, y: 15 },
    { id: 3, seats: 2, type: "regular", occupied: false, x: 80, y: 20 },
    { id: 4, seats: 6, type: "vip", occupied: false, x: 15, y: 40 },
    { id: 5, seats: 4, type: "hookah", occupied: false, x: 60, y: 45 },
    { id: 6, seats: 2, type: "regular", occupied: false, x: 85, y: 50 },
    { id: 7, seats: 8, type: "vip", occupied: false, x: 30, y: 70 },
    { id: 8, seats: 4, type: "hookah", occupied: true, x: 70, y: 75 },
  ];

  const getTableColor = (table: Table) => {
    if (table.occupied) return "bg-red-500";
    if (selectedTable === table.id) return "bg-orange-500";
    if (table.type === "vip") return "bg-purple-600";
    if (table.type === "hookah") return "bg-orange-400";
    return "bg-slate-600";
  };

  const getTableIcon = (type: string) => {
    switch (type) {
      case "vip":
        return "Crown";
      case "hookah":
        return "Flame";
      default:
        return "Users";
    }
  };

  return (
    <section className="py-20 bg-slate-900">
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
                <div className="relative bg-slate-700 rounded-lg h-96 border-2 border-slate-600">
                  {/* Entrance */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-b text-sm">
                    🚪 Вход
                  </div>

                  {/* Bar */}
                  <div className="absolute bottom-4 left-4 right-4 h-8 bg-amber-700 rounded flex items-center justify-center text-white text-sm">
                    🍸 Бар
                  </div>

                  {/* Tables */}
                  {tables.map((table) => (
                    <div
                      key={table.id}
                      className={`absolute w-12 h-12 rounded-full ${getTableColor(table)} 
                        ${!table.occupied ? "cursor-pointer hover:scale-110" : "cursor-not-allowed"}
                        transition-all duration-200 flex items-center justify-center text-white text-xs font-bold`}
                      style={{ left: `${table.x}%`, top: `${table.y}%` }}
                      onClick={() =>
                        !table.occupied && setSelectedTable(table.id)
                      }
                    >
                      <div className="text-center">
                        <Icon name={getTableIcon(table.type)} size={16} />
                        <div>{table.id}</div>
                      </div>
                    </div>
                  ))}
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

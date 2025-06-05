import { Card, CardContent } from "@/components/ui/card";
import { Table } from "@/types/booking";
import { useIsMobile } from "@/hooks/use-mobile";

interface TableSelectionProps {
  tables: Table[];
  selectedTable: number | null;
  onTableSelect: (tableId: number) => void;
}

const TableSelection = ({
  tables,
  selectedTable,
  onTableSelect,
}: TableSelectionProps) => {
  const isMobile = useIsMobile();

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

  return (
    <div className="space-y-4 order-1">
      <h3 className="text-lg font-semibold text-white">Выберите столик</h3>
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

          {/* Tables Grid */}
          <div
            className={`grid gap-2 mb-4 ${isMobile ? "grid-cols-4" : "grid-cols-6"}`}
          >
            {Array.from({ length: isMobile ? 16 : 36 }, (_, index) => {
              const cols = isMobile ? 4 : 6;
              const col = (index % cols) + 1;
              const row = Math.floor(index / cols) + 1;
              const table = tables.find((t) => t.x === col && t.y === row);

              if (!table) {
                return (
                  <div
                    key={`cell-${col}-${row}`}
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
                  onClick={() => !table.occupied && onTableSelect(table.id)}
                  disabled={table.occupied}
                >
                  <span className={isMobile ? "text-sm" : "text-lg"}>
                    {getTableTypeIcon(table.type)}
                  </span>
                  <div className="text-center">
                    <div className="text-xs">#{table.id}</div>
                    <div className="text-xs opacity-80">{table.seats}м</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Location indicators */}
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
                const table = tables.find((t) => t.id === selectedTable);
                return table ? (
                  <div className="text-white text-sm">
                    <div className="font-medium mb-1">
                      Столик #{selectedTable}
                    </div>
                    <div className="text-orange-300">
                      💺 {table.seats} мест • 🏷️ {getTableTypeName(table.type)}
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TableSelection;

import { MenuItem } from "@/types/booking";

interface PreOrderSectionProps {
  menuItems: MenuItem[];
  selectedItems: { [key: string]: number };
  onItemChange: (itemId: string, quantity: number) => void;
}

const PreOrderSection = ({
  menuItems,
  selectedItems,
  onItemChange,
}: PreOrderSectionProps) => {
  const getTotalPreorderAmount = () => {
    return Object.entries(selectedItems).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find((i) => i.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const renderMenuCategory = (
    category: "hookah" | "drink",
    title: string,
    maxQuantity: number,
  ) => (
    <div>
      <h5 className="text-md font-medium text-slate-300 mb-3">{title}</h5>
      <div className="space-y-2">
        {menuItems
          .filter((item) => item.category === category)
          .map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-slate-700/50 p-3 rounded-lg"
            >
              <div className="flex-1">
                <span className="text-white text-sm">{item.name}</span>
                <span className="text-slate-400 text-sm ml-2">
                  {item.price} ₽
                </span>
              </div>
              <select
                className="w-16 p-1 bg-slate-600 border border-slate-500 rounded text-white text-sm"
                value={selectedItems[item.id] || 0}
                onChange={(e) =>
                  onItemChange(item.id, parseInt(e.target.value))
                }
              >
                {Array.from({ length: maxQuantity + 1 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="border-t border-slate-600 pt-6">
      <h4 className="text-lg font-semibold text-white mb-4">
        Предварительный заказ (опционально)
      </h4>

      <div className="space-y-4">
        {renderMenuCategory("hookah", "Кальяны", 3)}
        {renderMenuCategory("drink", "Напитки", 5)}

        {getTotalPreorderAmount() > 0 && (
          <div className="bg-orange-900/30 border border-orange-700 rounded-lg p-4">
            <div className="flex justify-between items-center text-white">
              <span className="font-medium">Сумма предзаказа:</span>
              <span className="text-lg font-bold text-orange-300">
                {getTotalPreorderAmount()} ₽
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreOrderSection;

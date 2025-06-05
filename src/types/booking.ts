export interface Table {
  id: number;
  seats: number;
  type: "regular" | "vip" | "hookah";
  occupied: boolean;
  x: number;
  y: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: "hookah" | "drink";
  price: number;
}

export interface BookingData {
  selectedDate?: Date;
  selectedStartTime: string;
  selectedEndTime: string;
  guests: string;
  phone: string;
  name: string;
  selectedTable: number | null;
  selectedItems: { [key: string]: number };
}

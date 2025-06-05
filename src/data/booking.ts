import { Table, MenuItem } from "@/types/booking";

export const tables: Table[] = [
  { id: 1, seats: 2, type: "vip", occupied: false, x: 1, y: 1 },
  { id: 2, seats: 4, type: "vip", occupied: true, x: 3, y: 1 },
  { id: 3, seats: 2, type: "vip", occupied: false, x: 5, y: 1 },
  { id: 4, seats: 6, type: "vip", occupied: false, x: 1, y: 3 },
  { id: 5, seats: 4, type: "hookah", occupied: false, x: 3, y: 3 },
  { id: 6, seats: 2, type: "regular", occupied: false, x: 5, y: 3 },
  { id: 7, seats: 8, type: "hookah", occupied: false, x: 2, y: 5 },
  { id: 8, seats: 4, type: "regular", occupied: true, x: 4, y: 5 },
  { id: 9, seats: 10, type: "bar", occupied: false, x: 1, y: 6 },
];

export const menuItems: MenuItem[] = [
  { id: "classic", name: "Классический микс", category: "hookah", price: 800 },
  { id: "tropical", name: "Тропический рай", category: "hookah", price: 950 },
  { id: "berry", name: "Ягодный взрыв", category: "hookah", price: 900 },
  { id: "citrus", name: "Цитрусовая свежесть", category: "hookah", price: 850 },
  {
    id: "chocolate",
    name: "Шоколадный десерт",
    category: "hookah",
    price: 1000,
  },
  { id: "spicy", name: "Огненный микс", category: "hookah", price: 1100 },
  { id: "tea", name: "Чай зелёный/чёрный", category: "drink", price: 200 },
  { id: "coffee", name: "Кофе американо", category: "drink", price: 250 },
  { id: "lemonade", name: "Лимонад домашний", category: "drink", price: 350 },
  { id: "smoothie", name: "Смузи ягодный", category: "drink", price: 450 },
];

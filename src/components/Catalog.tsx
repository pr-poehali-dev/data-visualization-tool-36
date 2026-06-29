import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { useCart, Product } from "@/context/CartContext";

const products: Product[] = [
  {
    id: 1,
    name: "Wireless-наушники Aura",
    description: "Глубокий звук, активное шумоподавление и до 30 часов работы без подзарядки.",
    price: 12990,
    image: "https://cdn.poehali.dev/projects/cab01eb5-ba8f-4033-9cd6-155036473164/files/a97422bc-e479-4eb6-9128-9acd4979a3b7.jpg",
    category: "Электроника",
  },
  {
    id: 2,
    name: "Смарт-часы Pulse",
    description: "Мониторинг здоровья, уведомления и стильный дизайн на каждый день.",
    price: 18990,
    image: "https://cdn.poehali.dev/projects/cab01eb5-ba8f-4033-9cd6-155036473164/files/3a0950bf-aa4e-483b-8b90-241aeaeb6b42.jpg",
    category: "Электроника",
  },
  {
    id: 3,
    name: "Кожаный рюкзак Nomad",
    description: "Натуральная кожа, отделение для ноутбука и продуманная эргономика.",
    price: 9490,
    image: "https://cdn.poehali.dev/projects/cab01eb5-ba8f-4033-9cd6-155036473164/files/932cb5ad-8d45-4c01-a3b1-2f3f89437587.jpg",
    category: "Аксессуары",
  },
  {
    id: 4,
    name: "Настольная лампа Lumen",
    description: "Тёплый свет, сенсорное управление и минималистичный силуэт для рабочего стола.",
    price: 5490,
    image: "https://cdn.poehali.dev/projects/cab01eb5-ba8f-4033-9cd6-155036473164/files/537f4570-bfee-4967-b73b-0a2df8b7025a.jpg",
    category: "Для дома",
  },
];

const categories = ["Все", "Электроника", "Аксессуары", "Для дома"];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const { addToCart } = useCart();

  const filtered =
    activeCategory === "Все"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalog" className="bg-neutral-950 text-white px-6 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          КАТАЛОГ
        </h2>
        <p className="text-neutral-400 max-w-xl mb-10 text-lg">
          Подобранная коллекция вещей с характером. Выбирайте категорию и добавляйте в корзину.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm uppercase tracking-wide border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-neutral-700 hover:border-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col bg-neutral-900 border border-neutral-800 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <span className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">
                    {product.price.toLocaleString("ru-RU")} ₽
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 text-sm uppercase tracking-wide transition-all duration-300 hover:bg-neutral-300"
                  >
                    <Icon name="Plus" size={16} />
                    В корзину
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

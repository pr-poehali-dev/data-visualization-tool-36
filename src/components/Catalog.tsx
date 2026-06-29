import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { useCart, Product } from "@/context/CartContext";

const BCAA_IMG = "https://cdn.poehali.dev/projects/cab01eb5-ba8f-4033-9cd6-155036473164/files/033d6c4f-a827-4b0c-be7b-9cebbba02d3e.jpg";
const SHAKER_IMG = "https://cdn.poehali.dev/projects/cab01eb5-ba8f-4033-9cd6-155036473164/files/f6f54b16-d240-4fc1-ae0c-67d7746057d6.jpg";
const ZMA_IMG = "https://cdn.poehali.dev/projects/cab01eb5-ba8f-4033-9cd6-155036473164/files/4876d528-9453-481d-a848-e92eb50e097f.jpg";

const products: Product[] = [
  {
    id: 1,
    name: "BCAA AMINO-HYDRATE",
    description: "Комплекс BCAA с формулой быстрого восстановления и глубокой гидратации мышц после тренировки.",
    price: 1890,
    image: BCAA_IMG,
    category: "BCAA",
  },
  {
    id: 2,
    name: "BCAA HARDCORE",
    description: "Усиленная формула BCAA 8:1:1 для максимальной защиты мышц при интенсивных нагрузках.",
    price: 2190,
    image: BCAA_IMG,
    category: "BCAA",
  },
  {
    id: 3,
    name: "BCAA ELECTROLYTES",
    description: "BCAA с добавлением электролитов — восполняет потерю солей и поддерживает энергию в ходе тренинга.",
    price: 2090,
    image: BCAA_IMG,
    category: "BCAA",
  },
  {
    id: 4,
    name: "EAA+ HYDRATION",
    description: "Полный профиль незаменимых аминокислот (EAA) с гидратационным комплексом для роста и восстановления.",
    price: 2490,
    image: BCAA_IMG,
    category: "BCAA",
  },
  {
    id: 5,
    name: "Шейкер Reckful Розовый",
    description: "Фирменный шейкер Reckful 700 мл, розовый цвет. Удобный носик, герметичная крышка.",
    price: 690,
    image: SHAKER_IMG,
    category: "Шейкеры",
  },
  {
    id: 6,
    name: "Шейкер Reckful Чёрный",
    description: "Фирменный шейкер Reckful 700 мл, классический чёрный. Металлический шарик-миксер.",
    price: 690,
    image: SHAKER_IMG,
    category: "Шейкеры",
  },
  {
    id: 7,
    name: "Шейкер Reckful Матовый",
    description: "Шейкер Reckful 700 мл в матовом исполнении. Покрытие soft-touch, не скользит в руке.",
    price: 790,
    image: SHAKER_IMG,
    category: "Шейкеры",
  },
  {
    id: 8,
    name: "Шейкер Reckful Красный",
    description: "Яркий красный шейкер Reckful 700 мл. Шкала объёма, удобная петля для карабина.",
    price: 690,
    image: SHAKER_IMG,
    category: "Шейкеры",
  },
  {
    id: 9,
    name: "Шейкер Reckful Серый",
    description: "Нейтральный серый шейкер Reckful 700 мл. Универсальный цвет, плотная крышка с замком.",
    price: 690,
    image: SHAKER_IMG,
    category: "Шейкеры",
  },
  {
    id: 10,
    name: "ZMA Quamtrax",
    description: "Цинк, магний и B6 от Quamtrax — для восстановления, качественного сна и поддержки тестостерона.",
    price: 1490,
    image: ZMA_IMG,
    category: "ZMA",
  },
  {
    id: 11,
    name: "ZMA NOW Sports",
    description: "Классическая ZMA-формула от NOW Sports. Проверенный стандарт для спортсменов любого уровня.",
    price: 1690,
    image: ZMA_IMG,
    category: "ZMA",
  },
  {
    id: 12,
    name: "ZMA Sleep Max",
    description: "ZMA с усиленным комплексом для глубокого сна. Содержит мелатонин и экстракт валерианы.",
    price: 1890,
    image: ZMA_IMG,
    category: "ZMA",
  },
  {
    id: 13,
    name: "ZMA Reckful",
    description: "Фирменная ZMA под брендом Reckful. Максимальная биодоступность, удобные капсулы на ночной приём.",
    price: 1590,
    image: ZMA_IMG,
    category: "ZMA",
  },
];

const categories = ["Все", "BCAA", "Шейкеры", "ZMA"];

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
          Спортивное питание и аксессуары. Выбирайте категорию и добавляйте в корзину.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm uppercase tracking-wide border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#b5f25a] text-black border-[#b5f25a]"
                  : "bg-transparent text-white border-neutral-700 hover:border-[#b5f25a] hover:text-[#b5f25a]"
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
                <span className="text-xs uppercase tracking-wide font-bold mb-2" style={{ color: "#f5d229" }}>
                  {product.category}
                </span>
                <h3 className="text-base font-bold mb-2 leading-snug">{product.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xl font-bold" style={{ color: "#b5f25a" }}>
                    {product.price.toLocaleString("ru-RU")} ₽
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-wide font-semibold text-black transition-all duration-300"
                    style={{ backgroundColor: "#b5f25a" }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#f5d229")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#b5f25a")}
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

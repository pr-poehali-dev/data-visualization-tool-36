import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const { totalCount, openCart } = useCart();

  return (
    <header className={`absolute top-0 left-0 right-0 z-30 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-lg uppercase tracking-wide font-bold">LUMINO</div>
        <nav className="flex gap-8 items-center">
          <a
            href="#catalog"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm hidden sm:inline"
          >
            Каталог
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm hidden sm:inline"
          >
            Контакты
          </a>
          <button
            onClick={openCart}
            className="relative text-white hover:text-neutral-400 transition-colors duration-300"
          >
            <Icon name="ShoppingBag" size={24} />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalPrice,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 z-40"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-neutral-950 text-white z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800">
              <h2 className="text-xl font-bold uppercase tracking-wide">Корзина</h2>
              <button onClick={closeCart} className="hover:text-neutral-400">
                <Icon name="X" size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-neutral-500 gap-3">
                  <Icon name="ShoppingBag" size={48} />
                  <p>Корзина пуста</p>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
                        <p className="text-sm text-neutral-400 mb-2">
                          {item.price.toLocaleString("ru-RU")} ₽
                        </p>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 border border-neutral-700 flex items-center justify-center hover:border-white"
                          >
                            <Icon name="Minus" size={14} />
                          </button>
                          <span className="text-sm w-5 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 border border-neutral-700 flex items-center justify-center hover:border-white"
                          >
                            <Icon name="Plus" size={14} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-neutral-500 hover:text-white self-start"
                      >
                        <Icon name="Trash2" size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-neutral-800 px-6 py-5">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-neutral-400 uppercase text-sm">Итого</span>
                  <span className="text-2xl font-bold">
                    {totalPrice.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
                <button className="w-full bg-white text-black py-3 uppercase tracking-wide text-sm transition-all duration-300 hover:bg-neutral-300">
                  Оформить заказ
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

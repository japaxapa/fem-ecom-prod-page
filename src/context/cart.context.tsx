import { createContext, ReactNode, useContext, useState } from "react";

export interface CartItem {
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  handleChangeQuantity: (item: CartItem) => void;
  handleRemoveItem: (item: CartItem) => void;
  isCartOpen: boolean;
  handleCartOpen: (open: boolean) => void;
  cartQuantity: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleRemoveItem = (item: CartItem) => {
    const index = items.findIndex((i) => i.title === item.title);
    const newItems = [...items];
    const removed = newItems.splice(index, 1);
    setCartQuantity((prev) => prev - removed[0].quantity);
    setItems(newItems);
  };

  const handleChangeQuantity = (item: CartItem) => {
    if (item.quantity === 0) {
      handleRemoveItem(item);
      return;
    }

    const index = items.findIndex((i) => i.title === item.title);

    const newItems = [...items];
    if (index === -1) {
      setCartQuantity((prev) => prev + item.quantity);
      newItems.push(item);
    } else {
      setCartQuantity(
        (prev) => prev + item.quantity - newItems[index].quantity
      );
      newItems[index] = item;
    }
    setItems(newItems);
  };

  const handleCartOpen = (open: boolean) => {
    setIsCartOpen(open);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        handleChangeQuantity,
        handleRemoveItem,
        isCartOpen,
        handleCartOpen,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

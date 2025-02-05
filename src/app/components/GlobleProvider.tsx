import { ReactNode } from "react";
import { CartProvider } from "../context/CartContext";

interface GlobalProviderProps {
  children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  return <CartProvider>{children}</CartProvider>;
}
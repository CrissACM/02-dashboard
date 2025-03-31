import { CartCounter } from "@/app/shopping-cart/components/CartCounter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Un simple contador",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Productos en el carrito</span>

      <CartCounter value={10} />
    </div>
  );
}

"use client";
import Products from "./ui/products";
import CartOrder from "./ui/cartOrder";

export default function Home() {
  return (
    <div className="bg-red-200 h-screen flex justify-center items-center">
      <div className="flex flex-row gap-2">
        <Products></Products>
        <CartOrder></CartOrder>
      </div>
    </div>
  );
}

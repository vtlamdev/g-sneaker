"use client";
import Products from "./ui/products";
import CartOrder from "./ui/cartOrder";

export default function Home() {
  return (
    <div className=" md:h-screen h-auto flex justify-center items-center relative">
      <div className="flex flex-col overflow-y-auto overflow-x-hidden md:overflow-hidden md:flex-row gap-10 md:gap-2 p-8 md:p-0 z-10">
        <Products></Products>
        <CartOrder></CartOrder>
      </div>
      <div
        className="w-full h-[350px] bottom-0 right-0 bg-[#F6C90E] absolute rounded-3xl z-0"
        style={{ borderRadius: "100% 0% 100% 0% / 62% 100% 0% 38% " }}
      ></div>
    </div>
  );
}

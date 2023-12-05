import Image from "next/image";
import CartWrapper from "@/app/ui/cart";
import { RootState } from "@/app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { calcTotal } from "@/app/GlobalRedux/Features/shoppingCart";
import { useEffect } from "react";
export default function CartOrder() {
  const cartItems = useSelector((state: RootState) => state.Cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calcTotal());
  }, [cartItems]);
  const total = useSelector((state: RootState) => state.Cart.total);

  return (
    <div className="w-[300px] md:h-[450px] h-[600px] bg-white rounded-3xl flex flex-col p-6 gap-3 relative">
      <div className="flex flex-col z-10">
        <Image
          src={"/assets/nike.png"}
          alt="nike logo"
          width={50}
          height={50}
        ></Image>
        <div className="flex flex-row justify-between">
          <h3 className="font-bold mt-2">Your cart</h3>
          <h3 className="font-bold text-xl">${total.toFixed(2)}</h3>
        </div>
      </div>
      <div className="overflow-y-auto flex justify-center  scrollbar-hide z-10">
        <CartWrapper></CartWrapper>
      </div>
      <div
        className="w-24 h-32 top-0 left-0 bg-[#F6C90E] absolute rounded-3xl z-1"
        style={{ borderRadius: "99% 1% 100% 0% / 0% 13% 87% 100% " }}
      ></div>
    </div>
  );
}

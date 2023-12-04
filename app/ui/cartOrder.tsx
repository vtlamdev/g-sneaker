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
    <div className="w-[300px] h-[400px] bg-white rounded-3xl flex flex-col p-6 gap-3">
      <div className="flex flex-col">
        <Image
          src={"/assets/nike.png"}
          alt="nike logo"
          width={50}
          height={50}
        ></Image>
        <div className="flex flex-row justify-between">
          <h3>Your cart</h3>
          <h3 className="font-bold text-xl">${total.toFixed(2)}</h3>
        </div>
      </div>
      <div className="overflow-y-auto flex justify-center  scrollbar-hide">
        <CartWrapper></CartWrapper>
      </div>
    </div>
  );
}

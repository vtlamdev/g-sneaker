import Image from "next/image";
import { RootState } from "@/app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increase,
  dicrease,
} from "@/app/GlobalRedux/Features/shoppingCart";
import { useEffect, useState } from "react";
export default function CartWrapper() {
  const cartItems = useSelector((state: RootState) => state.Cart.cartItems);
  return cartItems.length ? (
    <div className="flex flex-col gap-4">
      {cartItems.map((shoe) => (
        <Cart key={shoe.id} cart={shoe}></Cart>
      ))}
    </div>
  ) : (
    <div className="flex justify-center items-center h-full">
      <p className="font-bold">Your cart is empty</p>
    </div>
  );
}
export function Cart({
  cart,
}: {
  cart: {
    id: number;
    image: string;
    name: string;
    description: string;
    color: string;
    amount: number;
    price: number;
    isLoading: boolean;
  };
}) {
  const dispatch = useDispatch();

  const [isScaled1, setIsScaled1] = useState(false);
  const [isScaled2, setIsScaled2] = useState(false);
  const [isScaled3, setIsScaled3] = useState(false);
  const [isScaled4, setIsScaled4] = useState(false);
  const [isRemove, setIsRemove] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setIsScaled1(true);
    }, 900);
    const timeout2 = setTimeout(() => {
      setIsScaled2(true);
    }, 1500);
    const timeout3 = setTimeout(() => {
      setIsScaled3(true);
    }, 1700);
    const timeout4 = setTimeout(() => {
      setIsScaled4(true);
    }, 1900);
    return () => clearTimeout(timeout1);
    return () => clearTimeout(timeout2);
    return () => clearTimeout(timeout3);
    return () => clearTimeout(timeout4);
  }, []);
  return (
    <div
      className={`grid grid-cols-6 w-full  gap-1 mt-2  transition-all duration-200 delay-200 ${
        isRemove ? "scale-0" : "scale-100"
      }`}
    >
      <div
        className={`col-span-2 h-[100px] relative flex justify-center items-center transition-all duration-200 delay-75  ${
          isScaled1 ? "scale-100" : "scale-0"
        }`}
      >
        <Image
          src={cart.image}
          alt="produce image"
          width={200}
          height={200}
          className="rounded-full -rotate-[25deg] absolute"
        ></Image>
        <div
          className="w-16 h-16 rounded-full"
          style={{ background: cart.color }}
        ></div>
      </div>

      <div className="col-span-4 flex flex-col justify-center">
        <h3
          className={`font-bold text-[10px] transition-all duration-200  delay-75 ${
            isScaled2 ? "scale-100" : "scale-0"
          } `}
        >
          {cart.name}
        </h3>
        <h3
          className={`font-bold text-sm transition-all duration-200 delay-75 ${
            isScaled3 ? "scale-100" : "scale-0"
          }`}
        >
          ${cart.price}
        </h3>
        <div
          className={`flex flex-row justify-between items-center delay-75 ${
            isScaled4 ? "scale-100" : "scale-0"
          } `}
        >
          <div className="flex flex-row justify-center items-center gap-4">
            <Image
              className="rounded-full cursor-pointer bg-gray-300 p-2 "
              src={"/assets/minus.png"}
              width={22}
              height={22}
              alt="minus image"
              onClick={() => {
                dispatch(dicrease(cart));
              }}
            ></Image>
            <span>{cart.amount}</span>
            <Image
              className="rounded-full cursor-pointer bg-gray-300 p-2"
              src={"/assets/plus.png"}
              width={22}
              height={22}
              alt="plus image"
              onClick={() => {
                dispatch(increase(cart));
              }}
            ></Image>
          </div>
          <Image
            className="rounded-full cursor-pointer bg-[#F6C90E] p-1"
            src={"/assets/trash.png"}
            width={20}
            height={20}
            alt="trash image"
            onClick={() => {
              setIsRemove(true);
              setTimeout(() => {
                dispatch(removeItem(cart));
              }, 1000);
            }}
          ></Image>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { RootState } from "@/app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increase,
  dicrease,
} from "@/app/GlobalRedux/Features/shoppingCart";
export default function CartWrapper() {
  const cartItems = useSelector((state: RootState) => state.Cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4">
      {cartItems.map((shoe) => (
        <Cart key={shoe.id} cart={shoe}></Cart>
      ))}
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
  return (
    <div className="grid grid-cols-6 w-full  gap-1 mt-2">
      <div className="col-span-2 flex justify-center text-center bg-red-400 rounded-full ">
        <Image
          src={cart.image}
          alt="produce image"
          width={100}
          height={100}
          className="rounded-full "
        ></Image>
      </div>

      <div className="col-span-4 flex flex-col justify-center">
        <h3 className="font-bold text-[10px]">{cart.name}</h3>
        <h3 className="font-bold text-sm">${cart.price}</h3>
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-row justify-center items-center gap-4">
            <Image
              className="rounded-full cursor-pointer"
              src={"/assets/minus.png"}
              width={20}
              height={20}
              alt="trash image"
              onClick={() => {
                dispatch(dicrease(cart));
              }}
            ></Image>
            <span>{cart.amount}</span>
            <Image
              className="rounded-full cursor-pointer"
              src={"/assets/plus.png"}
              width={20}
              height={20}
              alt="trash image"
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
              dispatch(removeItem(cart));
            }}
          ></Image>
        </div>
      </div>
    </div>
  );
}

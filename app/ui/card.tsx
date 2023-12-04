import Image from "next/image";
import showData from "@/app/lib/shoes.json";
import { RootState } from "@/app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { addToCard } from "@/app/GlobalRedux/Features/shoppingCart";
export default function WrapperCard() {
  const products = useSelector((state: RootState) => state.Cart.products);
  return (
    <div className="flex flex-col gap-4">
      {products.map((shoe) => (
        <Card key={shoe.id} card={shoe}></Card>
      ))}
    </div>
  );
}

export function Card({
  card,
}: {
  card: {
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
    <div className="w-full flex flex-col gap-3">
      <div className="h-auto rounded-3xl">
        <Image
          src={card.image}
          alt="image product"
          width={300}
          height={500}
          className={`bg-[${card.color}] rounded-xl`}
        ></Image>
      </div>
      <h3 className="font-bold ">{card.name}</h3>
      <p className="text-gray-800 text-sm">{card.description}</p>
      <div className="flex flex-row justify-between">
        <h3 className="font-bold">{card.price}$</h3>
        <button
          className="p-1 bg-[#F6C90E] rounded-full"
          onClick={
            card.isLoading
              ? () => {
                  dispatch(addToCard(card));
                }
              : () => {}
          }
        >
          {card.isLoading ? (
            <span>Add to Cart</span>
          ) : (
            <Image
              src={"/assets/check.png"}
              alt="check image"
              width={20}
              height={20}
            />
          )}
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";
import WrapperCard from "./card";
export default function Order() {
  return (
    <div className="w-[300px] h-[400px] bg-white rounded-3xl flex flex-col p-6 gap-3">
      <div className="flex flex-col">
        <Image
          src={"/assets/nike.png"}
          alt="nike logo"
          width={50}
          height={50}
        ></Image>
        <h3>Our Products</h3>
      </div>
      <div className="overflow-y-auto flex justify-center "></div>
    </div>
  );
}

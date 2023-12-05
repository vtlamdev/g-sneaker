import Image from "next/image";
import WrapperCard from "./card";
export default function Products() {
  return (
    <div className="w-[300px] md:h-[450px] h-[600px] bg-white rounded-3xl flex flex-col p-6 gap-3 relative shadow-2xl">
      <div className="flex flex-col z-10">
        <Image
          src={"/assets/nike.png"}
          alt="nike logo"
          width={50}
          height={50}
        ></Image>
        <h3 className="font-bold mt-2">Our Products</h3>
      </div>
      <div className="overflow-y-auto overflow-x-hidden  flex justify-center scrollbar-hide z-10">
        <WrapperCard></WrapperCard>
      </div>
      <div
        className="w-24 h-32 top-0 left-0 bg-[#F6C90E] absolute rounded-3xl z-1"
        style={{ borderRadius: "99% 1% 100% 0% / 0% 13% 87% 100% " }}
      ></div>
    </div>
  );
}

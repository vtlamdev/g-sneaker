export function CartSkeleton() {
  return (
    <div className="flex flex-row">
      <div className="w-[50px] h-[50px] rounded-full bg-gray-200"></div>
      <div className="flex flex-col">
        <div className="h-4 bg-gray-200"></div>
        <div className="h-4 bg-gray-200"></div>
        <div className="flex  flex-row justify-between items-center">
          <div className="h-4 bg-gray-200"></div>
          <div className="h-4 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

const ProductCardSkeleton = () => {
  const loadingArr = [1, 2, 3, 4, 5, 6];
  const loadingArrLooping = loadingArr.map((el) => (
    <div key={el} className=" flex flex-col gap-2">
      <div className="aspect-square">
        <div className="skeleton w-full h-full rounded-lg"></div>
      </div>
      <div className="flex justify-between">
        <div className="skeleton w-[40%] h-[12px]"></div>
        <div className="skeleton w-[30%] h-[12px]"></div>
      </div>
      <div className="skeleton w-full h-[12px]"></div>
      <div className=" flex justify-between items-center">
        <div className="skeleton w-[50%] h-[12px]"></div>
        <div className="skeleton w-[25px] h-[25px]"></div>
      </div>
    </div>
  ));
  return <>{loadingArrLooping}</>;
};

export default ProductCardSkeleton;

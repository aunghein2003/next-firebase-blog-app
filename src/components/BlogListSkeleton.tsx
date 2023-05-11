import Skeleton from "react-loading-skeleton";

export default function BlogListSkeleton() {
  return (
    <div className="py-10 flex flex-col-reverse md:flex-row justify-between gap-x-5">
      <div className="space-y-3 w-full md:w-2/3">
        <div className="p-5 border rounded-md shadow-md flex justify-between items-center gap-x-5">
          <div className="w-2/3">
            <Skeleton width={`100%`} height={30} />
            <Skeleton width={`100%`} count={2} />
          </div>
          <div className="w-1/5">
            <Skeleton width={`100%`} className="h-[70px] md:h-[100px]" />
          </div>
        </div>
        <div className="p-5 border rounded-md shadow-md flex justify-between items-center gap-x-5">
          <div className="w-2/3">
            <Skeleton width={`100%`} height={30} />
            <Skeleton width={`100%`} count={2} />
          </div>
          <div className="w-1/5">
            <Skeleton width={`90%`} className="h-[70px] md:h-[100px]" />
          </div>
        </div>
        <div className="p-5 border rounded-md shadow-md flex justify-between items-center gap-x-5">
          <div className="w-2/3">
            <Skeleton width={`100%`} height={30} />
            <Skeleton width={`100%`} count={2} />
          </div>
          <div className="w-1/5">
            <Skeleton width={`90%`} className="h-[70px] md:h-[100px]" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 mb-[3vh] md:mb-0 md:px-5">
        <div className="mb-5 w-full">
          <Skeleton height={30} width={`60%`} />
          <Skeleton width={`100%`} height={30} className="rounded-xl mt-5" />
        </div>
        <div>
          <Skeleton width={`60%`} height={30} />
          <Skeleton width={`100%`} height={30} className="rounded-xl mt-5" />
        </div>
      </div>
    </div>
  );
}

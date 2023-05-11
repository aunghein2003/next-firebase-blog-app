import Skeleton from "react-loading-skeleton";

export default function BlogDetailSkeleton() {
  return (
    <div className="py-5 px-7 mx-auto max-w-7xl overflow-hidden">
      <div className="py-24 flex justify-center items-center">
        <div className="max-w-2xl w-full flex flex-col justify-between gap-y-5 md:gap-y-7">
          <Skeleton width={`60%`} height={30} />
          <Skeleton width={`90%`} height={300} />
          <Skeleton width={`90%`} count={5} />
        </div>
      </div>
    </div>
  );
}

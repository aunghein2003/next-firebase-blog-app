import Image from "next/image";
import Badge from "./ui/Badge";
import { Blog } from "../../types";

interface CardProps {
  data: Blog;
}

function Card({ data }: CardProps) {
  return (
    <div className="grid grid-cols-3 gap-4  overflow-hidden border rounded-md shadow-md transition-all duration-100 cursor-pointer hover:scale-[1.006]">
      <div className="p-3 col-span-2">
        <h3 className="text-xl md:text-2xl font-medium md:font-[650] ">
          {data.title}
        </h3>
        <div className="hidden md:block max-h-[4.85em] line-clamp-3 text-ellipsis overflow-hidden">
          {data.content}
        </div>
        <div className="mt-3">
          {data?.categories.map((category) => (
            <Badge key={category.id}>{category.label}</Badge>
          ))}
        </div>
      </div>
      <div className="relative">
        <Image
          src={data.image}
          alt="blog card"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Card;

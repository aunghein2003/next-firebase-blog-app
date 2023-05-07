import parse from "html-react-parser";
import Image from "next/image";
import Badge from "./ui/Badge";
import { Blog } from "../../types";

interface CardProps {
  data: Blog;
}

function Card({ data }: CardProps) {
  return (
    <div className="p-5 border rounded-md shadow-md flex justify-between items-center gap-x-5 transition-all duration-100 cursor-pointer hover:scale-[1.006]">
      <div>
        <h1 className="text-2xl font-semibold md:font-[650] ">{data.title}</h1>
        <div className="hidden md:block">{parse(data.content)}</div>
        <div className="mt-2">
          {data?.categories.map((category) => (
            <Badge key={category.id}>{category.label}</Badge>
          ))}
        </div>
      </div>
      <div className=" w-[50px] h-[50px] md:w-[150px] md:h-[100px] relative">
        <Image src={data.image} alt="blog card" fill className="object-cover" />
      </div>
    </div>
  );
}

export default Card;

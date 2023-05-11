"use client";

import { getBlog } from "@/controller/blogController";
import { getCategories } from "@/controller/categoryController";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import Parse from "html-react-parser";
import { Blog } from "../../../types";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Oxygen } from "next/font/google";
import BlogDetailSkeleton from "@/components/BlogDetailSkeleton";

const oxygen = Oxygen({
  weight: "300",
  subsets: ["latin"],
});

export default function BlogDetail() {
  const { blogId } = useParams();
  const { data: blog, status: blogStatus } = getBlog(blogId);
  const { data: categories, status: categoriesStatus } = getCategories();

  const blogWithCategories = useMemo(() => {
    return {
      id: blog?.id,
      title: blog?.title,
      image: blog?.image,
      content: blog?.content,
      categories: categories?.filter((category) =>
        blog?.categoryIds?.includes(category.id)
      ),
    } as Blog;
  }, [blog, categories]);

  if (blogStatus === "loading" || categoriesStatus === "loading")
    return <BlogDetailSkeleton />;

  if (blogStatus === "success" || categoriesStatus === "success")
    return (
      <div className="py-5 px-7 mx-auto max-w-7xl overflow-hidden">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-semibold">Blog</h1>
          <div className="flex items-center gap-x-3 md:gap-x-5">
            <Link href={`/create`}>
              <Button>Create</Button>
            </Link>
            <Link href={`/edit`}>
              <Button variant="secondary">Edit</Button>
            </Link>
            <Button variant="danger">Delete</Button>
          </div>
        </div>
        <div className="py-14 flex justify-center items-center">
          <div className="max-w-2xl flex flex-col justify-between gap-y-5 md:gap-y-7">
            <h1 className="text-3xl font-[550]">{blogWithCategories.title}</h1>
            <div className="w-full h-[30vh] md:h-[50vh] relative">
              <Image
                src={blogWithCategories.image}
                alt="blog detail"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div
              className={`${oxygen.className} font-[550] text-lg tracking-wider text-stone-500`}
            >
              {Parse(blogWithCategories.content)}
            </div>
          </div>
        </div>
      </div>
    );
}

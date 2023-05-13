"use client";

import { deleteBlog, getBlog } from "@/controller/blogController";
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
import combinedBlogCategories from "@/helper/combinedBlogCategories";
import { useRouter } from "next/navigation";

const oxygen = Oxygen({
  weight: "300",
  subsets: ["latin"],
});

export default function BlogDetail() {
  const { blogId } = useParams();
  const router = useRouter();
  const { data: blog, status: blogStatus } = getBlog(blogId);
  const { data: categories, status: categoriesStatus } = getCategories();

  const blogWithCategories = useMemo(() => {
    return combinedBlogCategories(blog, categories) as Blog;
  }, [blog, categories]);

  if (blogStatus === "loading" || categoriesStatus === "loading")
    return <BlogDetailSkeleton />;

  if (blogStatus === "success" || categoriesStatus === "success")
    return (
      <div className="py-5 px-7 mx-auto max-w-7xl overflow-hidden">
        <div className="w-full flex justify-between items-center">
          <Link href={`/`}>
            <Image src={`/blogging.png`} alt="Logo" width={40} height={40} />
          </Link>
          <div className="flex items-center gap-x-3 md:gap-x-5">
            <Link href={`/create`}>
              <Button>Create</Button>
            </Link>
            <Link href={`${blogWithCategories.id}/edit`}>
              <Button variant="secondary">Edit</Button>
            </Link>
            <Button
              variant="danger"
              onClick={() => {
                deleteBlog(blog!.id);
                router.push("/");
              }}
            >
              Delete
            </Button>
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
                sizes="100vw"
                quality={75}
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

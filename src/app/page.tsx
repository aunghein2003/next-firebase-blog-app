"use client";

import { useMemo } from "react";
import { getBlogs } from "@/controller/blogController";
import { getCategories } from "@/controller/categoryController";
import { Blog } from "../../types";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BlogList from "@/components/BlogList";
import BlogListSkeleton from "@/components/BlogListSkeleton";

export default function Home() {
  const blogsQuery = getBlogs();
  const categoriesQuery = getCategories();

  const blogsWithCategories = useMemo(() => {
    return blogsQuery.data?.map((blog) => {
      return {
        id: blog.id,
        title: blog.title,
        image: blog.image,
        content: blog.content,
        categories: categoriesQuery.data?.filter((category) =>
          blog.categoryIds.includes(category.id)
        ),
      };
    });
  }, [blogsQuery.data, categoriesQuery.data]);

  return (
    <>
      <div className="py-5 px-7 mx-auto max-w-7xl overflow-hidden">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-semibold">Logo</h1>
          <div className="flex items-center gap-x-3 md:gap-x-5">
            <Link href={`/create`}>
              <Button>Create</Button>
            </Link>
            <Button variant="secondary" outline>
              Edit Tags
            </Button>
          </div>
        </div>
        <>
          {blogsQuery.status === "loading" ? (
            <BlogListSkeleton />
          ) : (
            <BlogList blogs={blogsWithCategories as Blog[]} />
          )}
        </>
      </div>
    </>
  );
}

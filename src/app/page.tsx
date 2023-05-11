"use client";

import { useMemo, useState } from "react";
import { getAllBlogs } from "@/controller/blogController";
import { getCategories } from "@/controller/categoryController";
import { Blog } from "../../types";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BlogList from "@/components/BlogList";
import BlogListSkeleton from "@/components/BlogListSkeleton";
import CategoriesModal from "@/components/CategoriesModal";
import combinedBlogCategories from "@/helper/combinedBlogCategories";

export default function Home() {
  const blogsQuery = getAllBlogs();
  const categoriesQuery = getCategories();

  const [modalOpen, setModalOpen] = useState(false); //Category modal open close

  const blogsWithCategories = useMemo(() => {
    return combinedBlogCategories(blogsQuery.data, categoriesQuery.data);
  }, [blogsQuery.data, categoriesQuery.data]);

  return (
    <>
      <div className="py-5 px-7 mx-auto max-w-7xl overflow-hidden">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-semibold">Blog</h1>
          <div className="flex items-center gap-x-3 md:gap-x-5">
            <Link href={`/create`}>
              <Button>Create</Button>
            </Link>
            <Button
              variant="secondary"
              outline
              onClick={() => setModalOpen(true)}
            >
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
      <CategoriesModal open={modalOpen} close={() => setModalOpen(false)} />
    </>
  );
}

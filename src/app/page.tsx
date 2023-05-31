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
import Image from "next/image";

export default function Home() {
  const blogsQuery = getAllBlogs();
  const categoriesQuery = getCategories();

  const [modalOpen, setModalOpen] = useState(false); //Category modal open close

  const blogsWithCategories = useMemo(() => {
    return combinedBlogCategories(blogsQuery.data, categoriesQuery.data);
  }, [blogsQuery.data, categoriesQuery.data]);

  return (
    <div>
      <div className="py-5 px-7 mx-auto max-w-7xl overflow-hidden">
        <div className="w-full flex justify-between items-center">
          <Link href={`/`}>
            <Image src={`/blogging.png`} alt="Logo" width={40} height={40} />
          </Link>
          <div className="flex items-center gap-x-3 md:gap-x-5">
            <Link href={`/create`}>
              <Button>Create</Button>
            </Link>
            <Button
              variant="secondary"
              outline
              onClick={() => setModalOpen(true)}
            >
              Edit Categories
            </Button>
          </div>
        </div>
        <div>
          {blogsQuery.status === "loading" ? (
            <BlogListSkeleton />
          ) : (
            <BlogList blogs={blogsWithCategories as Blog[]} />
          )}
        </div>
      </div>
      <CategoriesModal open={modalOpen} close={() => setModalOpen(false)} />
    </div>
  );
}

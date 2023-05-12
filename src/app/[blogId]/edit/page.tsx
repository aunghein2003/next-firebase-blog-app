"use client";

import { getBlog, updateBlog } from "@/controller/blogController";
import { getCategories } from "@/controller/categoryController";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { Blog, BlogData } from "../../../../types";
import combinedBlogCategories from "@/helper/combinedBlogCategories";
import FormInput from "@/components/FormInput";
import LoadingIndicator from "@/components/LoadingIndicator";

export default function EditBlog() {
  const { blogId } = useParams();
  const { data: blog, status: blogStatus } = getBlog(blogId);
  const { data: categories, status: categoriesStatus } = getCategories();

  const blogWithCategories = useMemo(() => {
    return combinedBlogCategories(blog, categories) as Blog;
  }, [blog, categories]);

  if (blogStatus === "loading" || categoriesStatus === "loading")
    return <LoadingIndicator />;

  if (blogStatus === "success" || categoriesStatus === "success")
    return (
      <div>
        <FormInput
          heading="Edit Blog"
          onSubmit={(blogData: BlogData) =>
            updateBlog(blog!.id, { ...blogData })
          }
          availableCategories={categories!}
          {...blogWithCategories}
        />
      </div>
    );
}

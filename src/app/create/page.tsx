"use client";

import FormInput from "@/components/FormInput";
import { createBlog } from "@/controller/blogController";
import { getCategories } from "@/controller/categoryController";

function CreateBlog() {
  const {
    data: categoriesData,
    status: categoriesStatus,
    error: categoriesError,
  } = getCategories();

  if (categoriesStatus === "loading")
    return <h1 className="text-4xl">Loading</h1>;

  if (categoriesStatus === "error")
    return <pre>{JSON.stringify(categoriesError)}</pre>;

  if (categoriesStatus === "success") {
    return (
      <>
        <FormInput
          heading="Create Blog"
          onSubmit={createBlog}
          availableCategories={categoriesData}
        />
      </>
    );
  }
}

export default CreateBlog;

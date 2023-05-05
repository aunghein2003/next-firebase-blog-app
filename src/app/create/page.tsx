"use client";

import FormInput from "@/components/FormInput";
import { createBlog } from "@/controller/blogController";

function CreateBlog() {
  return (
    <>
      <FormInput
        heading="Create Blog"
        onSubmit={createBlog}
        availableCategories={[
          { id: "1", label: "tailwind" },
          { id: "2", label: "firebase" },
        ]}
      />
    </>
  );
}

export default CreateBlog;

"use client";

import { useMemo, useState } from "react";
import { getCategories } from "@/controller/categoryController";
import Select from "react-select";
import Card from "./Card";
import Input from "./ui/Input";
import { Blog, Category } from "../../types";

function BlogList({ blogs }: { blogs: Blog[] }) {
  const categoriesQuery = getCategories();

  const [searchBlog, setSearchBlog] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);

  const filteredBlogs = useMemo(() => {
    return blogs?.filter((blog) => {
      return (
        (searchBlog === "" ||
          blog.title.toLowerCase().includes(searchBlog.toLowerCase())) &&
        (selectedCategory.length === 0 ||
          selectedCategory.every((category) =>
            blog.categories.some((c) => c.id === category.id)
          ))
      );
    });
  }, [searchBlog, selectedCategory, blogs]);

  console.log(filteredBlogs);

  return (
    <div className="py-10 flex flex-col-reverse md:flex-row justify-between gap-x-5">
      <div className="space-y-3 w-full md:w-2/3">
        {filteredBlogs?.map((blog) => (
          <Card key={blog.id} data={blog as Blog} />
        ))}
      </div>
      <div className="w-full md:w-1/3 mb-[3vh] md:mb-0 md:px-5">
        <div className="w-full md:w-1/4 md:fixed">
          <div className="mb-5">
            <h3 className="text-xl font-medium mb-5">Search the Blog</h3>
            <Input
              placeholder="Search..."
              value={searchBlog}
              onChange={(e) => setSearchBlog(e.target.value)}
            />
          </div>
          <div>
            <h3 className="text-xl font-medium mb-5">Categories</h3>
            <Select
              isMulti
              options={categoriesQuery.data?.map((category) => ({
                value: category.id,
                label: category.label,
              }))}
              value={selectedCategory.map((category) => ({
                value: category.id,
                label: category.label,
              }))}
              onChange={(categories) => {
                setSelectedCategory(
                  categories.map((category) => ({
                    id: category.value,
                    label: category.label,
                  }))
                );
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 12,
                colors: {
                  ...theme.colors,
                  primary: "rgb(148 163 184)",
                },
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;

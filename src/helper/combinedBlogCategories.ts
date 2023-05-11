import { Blog, Category, RawBlog } from "../../types";

export default function combinedBlogCategories(
  blogs: RawBlog | RawBlog[] = [],
  categories: Category[] = []
): Blog | Blog[] {
  if (Array.isArray(blogs)) {
    return blogs.map((blog) => {
      return {
        id: blog.id,
        title: blog.title,
        image: blog.image,
        content: blog.content,
        categories: categories.filter((category) =>
          blog.categoryIds.includes(category.id)
        ),
      };
    });
  } else {
    return {
      id: blogs.id,
      title: blogs.title,
      image: blogs.image,
      content: blogs.content,
      categories: categories.filter((category) =>
        blogs.categoryIds?.includes(category.id)
      ),
    };
  }
}

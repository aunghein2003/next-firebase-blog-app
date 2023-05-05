export interface RawBlog extends RawBlogData {
  id: string;
}

export interface Blog extends BlogData {
  id: string;
}

export interface RawBlogData {
  title: string;
  image: string;
  content: string;
  categoryIds: string[];
}

export interface BlogData {
  title: string;
  image: string;
  content: string;
  categories: Category[];
}

export interface Category {
  id: string;
  label: string;
}

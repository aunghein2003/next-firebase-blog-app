/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { db } from "@/config/firebase";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { BlogData, RawBlog, RawBlogData } from "../../types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

//Create Blog
const createBlog = async ({ title, image, content, categories }: BlogData) => {
  const newBlog = {
    title,
    image,
    content,
    categoryIds: categories.map((category) => category.id),
  } as RawBlogData;
  const queryClient = useQueryClient();
  try {
    const docRef = await addDoc(collection(db, "blogs"), { ...newBlog });
    queryClient.invalidateQueries(["blogs"]);
    console.log("Create Blog with id: ", docRef.firestore);
  } catch (e) {
    console.log("Error create blog ", e);
  }
};

//Get Blogs
const getBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    refetchInterval: 5000,
    queryFn: async () => {
      const querySnapshot = await getDocs(query(collection(db, "blogs")));
      const blogs = [] as RawBlog[];
      querySnapshot.forEach((doc) => {
        blogs.push({ ...doc.data(), id: doc.id } as RawBlog);
      });
      return blogs;
    },
  });
};

export { getBlogs, createBlog };

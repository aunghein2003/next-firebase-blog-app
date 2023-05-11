/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { db } from "@/config/firebase";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { BlogData, RawBlog, RawBlogData } from "../../types";
import { useQuery } from "@tanstack/react-query";

//Create Blog
const createBlog = async ({ title, image, content, categories }: BlogData) => {
  const newBlog = {
    title,
    image,
    content,
    categoryIds: categories.map((category) => category.id),
  } as RawBlogData;
  try {
    const docRef = await addDoc(collection(db, "blogs"), { ...newBlog });
    console.log("Create Blog with id: ", docRef.firestore);
  } catch (e) {
    console.log("Error create blog ", e);
  }
};

//Get Blogs
const getAllBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    refetchInterval: 5000,
    queryFn: async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogs = [] as RawBlog[];
      querySnapshot.forEach((doc) => {
        blogs.push({ ...doc.data(), id: doc.id } as RawBlog);
      });
      return blogs;
    },
  });
};

const getBlog = (id: string) => {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: async () => {
      const docRef = await getDoc(doc(db, "blogs", id));
      return { ...docRef.data(), id: docRef.id } as RawBlog;
    },
  });
};

export { getAllBlogs, getBlog, createBlog };

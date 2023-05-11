/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { db } from "@/config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { BlogData, RawBlog, RawBlogData } from "../../types";
import { useQuery } from "@tanstack/react-query";

//Get All Blogs
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

//Get a single blog with id
const getBlog = (id: string) => {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: async () => {
      const docRef = await getDoc(doc(db, "blogs", id));
      return { ...docRef.data(), id: docRef.id } as RawBlog;
    },
  });
};

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

//Update Blog
const updateBlog = async (
  id: string,
  { title, image, content, categories }: BlogData
) => {
  const blog = {
    title,
    image,
    content,
    categoryIds: categories.map((category) => category.id),
  } as RawBlogData;

  await updateDoc(doc(db, "blogs", id), { ...blog });
};

//Delete Blog
const deleteBlog = async (id: string) => {
  await deleteDoc(doc(db, "blogs", id));
};

export { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog };

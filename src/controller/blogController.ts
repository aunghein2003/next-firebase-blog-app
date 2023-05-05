import { addDoc, collection } from "firebase/firestore";
import { BlogData, RawBlogData } from "../../types";
import { db } from "@/config/firebase";

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

export { createBlog };

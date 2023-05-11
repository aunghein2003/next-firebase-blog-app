/* eslint-disable react-hooks/rules-of-hooks */
import { db } from "@/config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { Category } from "../../types";

//Add Category
const addCategory = async (label: string) => {
  try {
    const docRef = await addDoc(collection(db, "categories"), { label });
    console.log("Add category with id", docRef.id);
    return docRef.id;
  } catch (e) {
    console.log("Error add category", e);
  }
};

//Get Categories
const getCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const querySnapshot = await getDocs(query(collection(db, "categories")));
      const categories = [] as Category[];
      querySnapshot.forEach((doc) => {
        categories.push({ ...doc.data(), id: doc.id } as Category);
      });
      return categories;
    },
  });
};

//Update Category
const updateCategory = async (id: string, label: string) => {
  await updateDoc(doc(db, "categories", id), { label });
};

//Delete Category
const deleteCategory = async (id: string) => {
  await deleteDoc(doc(db, "categories", id));
};

export { getCategories, addCategory, updateCategory, deleteCategory };

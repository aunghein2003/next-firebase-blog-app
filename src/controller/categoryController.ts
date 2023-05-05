import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";

//Add category
const addCategory = async (label: string) => {
  try {
    const docRef = await addDoc(collection(db, "categories"), { label });
    console.log("Add category with id", docRef.id);
    return docRef.id;
  } catch (e) {
    console.log("Error add category", e);
  }
};

export { addCategory };

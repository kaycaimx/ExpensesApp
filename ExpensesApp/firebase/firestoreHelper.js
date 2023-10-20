import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { database } from "./firebaseSetup";

// Add a new expense to the database
export async function addExpenseToDB(newExpense) {
  try {
    const docRef = await addDoc(collection(database, "expenses"), newExpense);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

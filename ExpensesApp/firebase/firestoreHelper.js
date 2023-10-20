import {
  collection,
  doc,
  addDoc,
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

export async function deleteExpenseFromDB(id) {
  try {
    await deleteDoc(doc(database, "expenses", id));
    console.log("Document deleted with ID: ", id);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}

export async function updateExpenseInDB(id, updatedExpense) {
  try {
    await updateDoc(doc(database, "expenses", id), updatedExpense);
    console.log("Document updated with ID: ", id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

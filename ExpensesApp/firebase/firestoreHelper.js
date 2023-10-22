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

// delete an expense from the database
export async function deleteExpenseFromDB(id) {
  try {
    await deleteDoc(doc(database, "expenses", id));
    console.log("Document deleted with ID: ", id);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}

// update an expense in the database
export async function updateExpenseInDB(id, updatedExpense) {
  try {
    await updateDoc(doc(database, "expenses", id), updatedExpense);
    console.log("Document updated with ID: ", id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

// Test using query to filter data
// export async function test() {
//   const q = query(
//     collection(database, "expenses"),
//     where("isOverbudget", "==", true)
//   );

//   const querySnapshot = await getDocs(q);
//   let data = [];
//   querySnapshot.forEach((doc) => {
//     data.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(data);
//   // querySnapshot.forEach((doc) => {
//   //   // doc.data() is never undefined for query doc snapshots
//   //   console.log(doc.id, " => ", doc.data());
//   // });
// }

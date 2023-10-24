import { FlatList, View } from "react-native";
import React, { useState, useEffect } from "react";
import { database } from "../firebase/firebaseSetup";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import Entry from "./Entry";
import { styles } from "../styles";

const EntriesList = ({ navigation, route }) => {
  const [expenses, setExpenses] = useState([]);

  // set up a listener for the database
  useEffect(() => {
    let q;
    // filter data based on route name at the database level
    if (route.name === "OverbudgetExpenses") {
      q = query(
        collection(database, "expenses"),
        where("isOverbudget", "==", true),
        where("isApproved", "==", false)
      );
    } else {
      q = query(collection(database, "expenses"));
    }
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        let data = [];
        snapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setExpenses(data);
      } else {
        setExpenses([]);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.scrollView}>
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <Entry
            navigation={navigation}
            id={item.id}
            item={item.item}
            unitPrice={item.unitPrice}
            quantity={item.quantity}
            isOverbudget={item.isOverbudget}
            isApproved={item.isApproved}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default EntriesList;

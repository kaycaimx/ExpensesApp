import { KeyboardAvoidingView, ScrollView } from "react-native";
import React from "react";

import Entry from "./Entry";
import { styles } from "../styles";

const EntriesList = ({ navigation, data }) => {
  return (
    <KeyboardAvoidingView style={[styles.container]}>
      <ScrollView style={styles.scrollView}>
        {data.map((expense) => (
          <Entry
            key={expense.id}
            navigation={navigation}
            id={expense.id}
            item={expense.item}
            unitPrice={expense.unitPrice}
            quantity={expense.quantity}
            isOverbudget={expense.isOverbudget}
            isApproved={expense.isApproved}
          />
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EntriesList;

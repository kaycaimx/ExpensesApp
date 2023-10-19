import { KeyboardAvoidingView, ScrollView, Text } from "react-native";
import React from "react";

import { styles } from "../styles";

const EntriesList = ({ navigation, data }) => {
  console.log("data: ", data);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        {data.map((expense) => (
          <Text key={expense.id}>
            {expense.item}: {expense.quantity} * {expense.unitPrice}
          </Text>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EntriesList;

import { Button, KeyboardAvoidingView, View, Text } from "react-native";
import React from "react";

import { styles } from "../styles";

const HomeScreen = () => {
  const sampleExpense = [
    { item: "book", unitPrice: 100, quantity: 2 },
    { item: "pen", unitPrice: 200, quantity: 5 },
    { item: "pencil", unitPrice: 10, quantity: 10 },
  ];

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>HomeScreen</Text>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

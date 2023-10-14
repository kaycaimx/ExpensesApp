import { Button, KeyboardAvoidingView, View, Text } from "react-native";
import React from "react";

import { styles } from "../styles";

const HomeScreen = ({ data }) => {
  console.log(data);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>HomeScreen</Text>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

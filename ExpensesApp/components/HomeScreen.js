import { Button, KeyboardAvoidingView, View, Text } from "react-native";
import React from "react";

import { styles } from "../styles";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Press Me" onPress={() => navigation.navigate("Details")} />
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

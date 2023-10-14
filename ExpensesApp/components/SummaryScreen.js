import { KeyboardAvoidingView, View, Text } from "react-native";
import React from "react";

import { styles } from "../styles";

const SummaryScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>SummaryScreen</Text>
    </KeyboardAvoidingView>
  );
};

export default SummaryScreen;

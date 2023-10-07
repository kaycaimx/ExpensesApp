import { Pressable } from "react-native";
import React from "react";

import { styles } from "../styles";

const PButton = ({ children, pressHandler }) => {
  return (
    <Pressable style={styles.button} onPress={pressHandler}>
      {children}
    </Pressable>
  );
};

export default PButton;

import { Pressable } from "react-native";
import React from "react";

import { styles } from "../styles";

const PIcon = ({ children, pressHandler }) => {
  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) => {
        return [styles.iconDefault, pressed && styles.iconPressed];
      }}
    >
      {children}
    </Pressable>
  );
};

export default PIcon;

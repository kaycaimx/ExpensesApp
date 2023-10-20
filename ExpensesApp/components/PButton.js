import { Pressable } from "react-native";
import React from "react";

import { colors, styles } from "../styles";

const PButton = ({ children, pressHandler }) => {
  
  return (
    <Pressable
      style={({ pressed }) => {
        return [styles.buttonDefault, pressed && styles.buttonPressed];
      }}
      onPress={pressHandler}
      android_ripple={styles.androidRipple}
    >
      {children}
    </Pressable>
  );
};

export default PButton;

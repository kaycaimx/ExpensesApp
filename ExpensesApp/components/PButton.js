import { Pressable } from "react-native";
import React from "react";

import { colors, styles } from "../styles";

const PButton = ({ children, pressHandler }) => {
  const isAndroid = Platform.OS === "android";

  return (
    <Pressable
      style={({ pressed }) => {
        return [styles.buttonDefault, pressed && styles.buttonPressed];
      }}
      onPress={pressHandler}
      android_ripple={{ color: colors.ripple, borderless: false }}
    >
      {children}
    </Pressable>
  );
};

export default PButton;

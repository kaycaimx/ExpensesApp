import { Pressable } from "react-native";
import React from "react";

const PIcon = ({ children, pressHandler, iconStyle }) => {
  return (
    <Pressable style={iconStyle} onPress={pressHandler}>
      {children}
    </Pressable>
  );
};

export default PIcon;

import { Pressable } from "react-native";
import React from "react";

const PIcon = ({ children, pressHandler }) => {
  return <Pressable onPress={pressHandler}>{children}</Pressable>;
};

export default PIcon;

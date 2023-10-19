import { Pressable, Text, View } from "react-native";
import React from "react";

import { Foundation } from "@expo/vector-icons";
import { styles } from "../styles";

const Entry = ({
  navigation,
  id,
  item,
  unitPrice,
  quantity,
  isOverbudget,
  isApproved,
}) => {
  function pressHandler() {
    navigation.navigate("EditExpense", { id: id });
  }
  return (
    <Pressable
      style={({ pressed }) => {
        return [styles.entryWrapper, pressed && styles.entryPressed];
      }}
      onPress={pressHandler}
    >
      <Text style={styles.entryItem}>{item}</Text>
      <View style={styles.priceApprovedWrapper}>
        {isOverbudget && <Foundation name="alert" size={24} color="orange" />}
        <View style={styles.priceQuantity}>
          <Text>
            {quantity} * {unitPrice}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Entry;

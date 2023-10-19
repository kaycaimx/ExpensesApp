import { Pressable, Text, View } from "react-native";
import React from "react";

import { Foundation } from "@expo/vector-icons";
import { colors, styles } from "../styles";

const Entry = ({
  navigation,
  item,
  unitPrice,
  quantity,
  isOverbudget,
  isApproved,
}) => {
  function pressHandler() {
    navigation.navigate("EditExpense", {
      item: item,
      unitPrice: unitPrice,
      quantity: quantity,
      isOverbudget: isOverbudget,
      isApproved: isApproved,
      isEditing: true,
    });
  }
  return (
    <Pressable
      style={({ pressed }) => {
        return [styles.entryWrapper, pressed && styles.entryPressed];
      }}
      android_ripple={styles.androidRipple}
      onPress={pressHandler}
    >
      <Text style={styles.entryItem}>{item}</Text>
      <View style={styles.priceApprovedWrapper}>
        {isOverbudget && (
          <Foundation name="alert" size={24} color={colors.alertTriangle} />
        )}
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

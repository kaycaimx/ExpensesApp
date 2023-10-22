import { Pressable, Text, View } from "react-native";
import React from "react";

import { Foundation } from "@expo/vector-icons";
import { colors, styles } from "../styles";

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
    navigation.navigate("EditExpense", {
      id: id,
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
      <View style={styles.priceAlertWrapper}>
        {isOverbudget && (
          <Foundation name="alert" size={24} color={colors.alertTriangle} />
        )}
        <View style={styles.priceQuantityWrapper}>
          <Text>
            {quantity} * {unitPrice}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Entry;

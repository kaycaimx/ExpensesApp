import { View, Text, TextInput } from "react-native";
import React from "react";

import PButton from "./PButton";
import { colors, styles } from "../styles";

const AddExpScreen = ({
  item,
  unitPrice,
  quantity,
  changeItem,
  changeUnitPrice,
  changeQuantity,
}) => {
  function handleCancel() {
    console.log("Cancel pressed");
  }

  function handleSave() {
    console.log("Save pressed");
    console.log("Item: ", item);
  }

  function handleItemChange(value) {
    changeItem(value);
  }

  function handleUnitPriceChange(value) {
    changeUnitPrice(value);
  }

  function handleQuantityChange(value) {
    changeQuantity(value);
  }

  return (
    <>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Item *</Text>
        <TextInput
          style={styles.inputBox}
          value={item}
          onChangeText={handleItemChange}
        />
        <Text style={styles.inputLabel}>Unit Price *</Text>
        <TextInput
          style={styles.inputBox}
          keyboardType="number-pad"
          value={unitPrice}
          onChangeText={handleUnitPriceChange}
        />
        <Text style={styles.inputLabel}>Quantity *</Text>
      </View>
      <View style={styles.btnsWrapper}>
        <PButton pressHandler={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </PButton>
        <PButton pressHandler={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </PButton>
      </View>
    </>
  );
};

export default AddExpScreen;

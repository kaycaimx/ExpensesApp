import { View, Text, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useState } from "react";

import PButton from "./PButton";
import { styles } from "../styles";

const DetailsScreen = ({
  item,
  unitPrice,
  quantity,
  changeItem,
  changeUnitPrice,
  changeQuantity,
}) => {
  // This is the upper limit for the quantity dropdown picker
  const quantityUpperLimit = 10;

  // This is the array of objects that will be used to populate the quantity dropdown picker
  // The range of quantity has a lower limit of 1, and an upper limit of quantityUpperLimit
  const quantityArray = [];
  for (let i = 1; i <= quantityUpperLimit; i++) {
    quantityArray.push({ label: i.toString(), value: i });
  }

  const [pickerOpen, setPickerOpen] = useState(false);

  function handleCancel() {
    console.log("Cancel pressed");
    changeItem("");
    changeUnitPrice(null);
    changeQuantity(null);
  }

  function handleSave() {
    console.log("Save pressed");
    if (!item || !unitPrice || !quantity) {
      alert("Invalid input", "Please check your input values");
      return;
    }
    console.log("Item: ", item);
    console.log("Unit Price: ", unitPrice);
    console.log("Quantity", quantity);
  }

  function handleItemChange(value) {
    changeItem(value);
  }

  function handleUnitPriceChange(value) {
    changeUnitPrice(value);
  }

  function handleQuantityChange(item) {
    changeQuantity(item.value);
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
        <DropDownPicker
          containerStyle={styles.dropDown}
          open={pickerOpen}
          items={quantityArray}
          setOpen={setPickerOpen}
          onSelectItem={handleQuantityChange}
          placeholder={quantity ? quantity.toString() : ""}
        />
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

export default DetailsScreen;

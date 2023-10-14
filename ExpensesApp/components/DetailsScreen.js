import {
  Alert,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";

import PButton from "./PButton";
import { styles } from "../styles";

const DetailsScreen = () => {
  const [item, setItem] = useState("");
  const [unitPrice, setUnitPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  //const total = unitPrice && quantity ? unitPrice * quantity : 0;
  const [isOverbudget, setIsOverbudget] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  function changeItem(value) {
    setItem(value);
  }

  function changeUnitPrice(value) {
    setUnitPrice(value);
  }

  function changeQuantity(pikcerItem) {
    setQuantity(pikcerItem?.value);
  }

  function checkCheckbox() {
    setIsCheckboxChecked(true);
    console.log("Checkbox checked");
  }
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
    console.log("Item: ", item);
    console.log("Unit Price: ", unitPrice);
    console.log("Quantity", quantity);
    if (!item || !isNaN(item) || !unitPrice || !quantity) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Item *</Text>
        <TextInput
          style={styles.inputBox}
          value={item}
          onChangeText={changeItem}
        />
        <Text style={styles.inputLabel}>Unit Price *</Text>
        <TextInput
          style={styles.inputBox}
          keyboardType="number-pad"
          value={unitPrice}
          onChangeText={changeUnitPrice}
        />
        <Text style={styles.inputLabel}>Quantity *</Text>
        <DropDownPicker
          containerStyle={styles.dropDown}
          open={pickerOpen}
          items={quantityArray}
          setOpen={setPickerOpen}
          onSelectItem={changeQuantity}
          placeholder={quantity ? quantity.toString() : ""}
        />
      </View>
      {isOverbudget && !isApproved && (
        <View style={styles.checkboxWrapper}>
          <Text style={styles.checkboxLabel}>
            This item is marked as overbudget. Select the checkbox if you would
            like to approve it.
          </Text>
          <Checkbox value={isCheckboxChecked} onValueChange={checkCheckbox} />
        </View>
      )}
      <View style={styles.btnsWrapper}>
        <PButton pressHandler={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </PButton>
        <PButton pressHandler={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </PButton>
      </View>
    </KeyboardAvoidingView>
  );
};

export default DetailsScreen;

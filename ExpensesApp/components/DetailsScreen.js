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
import { AntDesign } from "@expo/vector-icons";

import PButton from "./PButton";
import PIcon from "./PIcon";
import { colors, styles } from "../styles";
import { addExpenseToDB } from "../firebase/firestoreHelper";

const DetailsScreen = ({ navigation, route }) => {
  console.log("route.name", route.name);
  console.log("route.params", route.params);

  if (route.name === "EditExpense") {
    navigation.setOptions({
      headerRight: () => (
        <PIcon pressHandler={deleteHandler}>
          <AntDesign name="delete" size={20} color={colors.text} />
        </PIcon>
      ),
    });
  }

  // This is the upper limit for the budget, any expense that is more than this limit will be marked as overbudget
  const budgetLimit = 500;

  const { id, item, unitPrice, quantity, isOverbudget, isApproved, isEditing } =
    route.params;

  const [inputItem, setInputItem] = useState(item);
  const [inputUnitPrice, setInputUnitPrice] = useState(
    unitPrice ? unitPrice.toString() : null
  );
  const [inputQuantity, setInputQuantity] = useState(
    quantity ? quantity.toString() : null
  );

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [overbudget, setOverbudget] = useState(isOverbudget);
  const [approved, setApproved] = useState(isApproved);

  function changeItem(value) {
    setInputItem(value);
  }

  function changeUnitPrice(value) {
    setInputUnitPrice(value);
  }

  function changeQuantity(pikcerItem) {
    setInputQuantity(pikcerItem?.value);
  }

  function checkCheckbox() {
    setIsCheckboxChecked(!isCheckboxChecked);
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

  //Add validation function for item, unitPrice, and quantity!!!
  function validateInput() {
    if (
      !inputItem ||
      !isNaN(inputItem) ||
      !inputUnitPrice ||
      inputUnitPrice < 0 ||
      !inputQuantity
    ) {
      Alert.alert("Invalid input", "Please check your input values");
      return false;
    }
    return true;
  }

  function saveEdits() {
    console.log("Save changes");
  }

  function handleSave() {
    console.log("Save pressed");
    if (!validateInput()) {
      return;
    }
    console.log("isCheckboxChecked", isCheckboxChecked);

    // Create a new expense object, isApproved will be separately set depending on whether it is new expense or an edited expense
    // All new expenses will be marked as not approved, while edited expenses will be updated as per approval status
    const newExpense = {
      item: inputItem,
      unitPrice: Number(inputUnitPrice),
      quantity: Number(inputQuantity),
      isOverbudget:
        Number(inputUnitPrice) * Number(inputQuantity) > budgetLimit,
    };

    if (isEditing) {
      Alert.alert("Important", "Are you sure you want to save these changes?", [
        {
          text: "No",
          onPress: () => {
            console.log("Not saving changes");
            return;
          },
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            saveEdits();
          },
          style: "ok",
        },
      ]);
    } else {
      newExpense.isApproved = false;
      addExpenseToDB(newExpense);
      console.log("Sending new data to database.");
      navigation.navigate("Home");
    }
  }

  function deleteHandler() {
    console.log("Delete button pressed");
    console.log("id", id);
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>Item *</Text>
        <TextInput
          style={styles.inputBox}
          value={inputItem}
          onChangeText={changeItem}
        />
        <Text style={styles.inputLabel}>Unit Price *</Text>
        <TextInput
          style={styles.inputBox}
          keyboardType="number-pad"
          value={inputUnitPrice}
          onChangeText={changeUnitPrice}
        />
        <Text style={styles.inputLabel}>Quantity *</Text>
        <DropDownPicker
          containerStyle={styles.dropDown}
          open={pickerOpen}
          items={quantityArray}
          setOpen={setPickerOpen}
          onSelectItem={changeQuantity}
          placeholder={inputQuantity ? inputQuantity.toString() : ""}
        />
      </View>
      {overbudget && !approved && (
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

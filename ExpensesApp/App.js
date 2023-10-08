import { KeyboardAvoidingView, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

import DetailsScreen from "./components/DetailsScreen";

export default function App() {
  const [item, setItem] = useState("");
  const [unitPrice, setUnitPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);

  function changeItem(value) {
    setItem(value);
  }

  function changeUnitPrice(value) {
    setUnitPrice(value);
  }

  function changeQuantity(value) {
    setQuantity(value);
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <DetailsScreen
        item={item}
        unitPrice={unitPrice}
        quantity={quantity}
        changeItem={changeItem}
        changeUnitPrice={changeUnitPrice}
        changeQuantity={changeQuantity}
      />
      <></>
    </KeyboardAvoidingView>
  );
}

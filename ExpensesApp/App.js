import { Button, KeyboardAvoidingView, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { colors, styles } from "./styles";
import DetailsScreen from "./components/DetailsScreen";
import HomeScreen from "./components/HomeScreen";
import PIcon from "./components/PIcon";

const Stack = createNativeStackNavigator();

export default function App() {
  const [addIconPressed, setAddIconPressed] = useState(false);

  function addExpense() {
    //console.log("Add expense pressed");
    setAddIconPressed(true);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={styles.hearder}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ itemId: 42 }}
          options={({ navigation }) => ({
            title: "All Expenses",
            headerRight: () => (
              <PIcon
                pressHandler={() => {
                  navigation.navigate("Details");
                }}
              >
                <Ionicons
                  name="add"
                  size={24}
                  on
                  color={addIconPressed ? "gold" : "white"}
                />
              </PIcon>
            ),
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        {/* <DetailsScreen
        item={item}
        unitPrice={unitPrice}
        quantity={quantity}
        changeItem={changeItem}
        changeUnitPrice={changeUnitPrice}
        changeQuantity={changeQuantity}
      /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

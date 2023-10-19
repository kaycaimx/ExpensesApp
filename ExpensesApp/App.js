import { Button, KeyboardAvoidingView, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors, styles } from "./styles";
import DetailsScreen from "./components/DetailsScreen";
import HomeScreen from "./components/HomeScreen";
import PIcon from "./components/PIcon";

const Stack = createNativeStackNavigator();

export default function App() {
  const sampleExpense = [
    {
      id: 0,
      item: "book",
      unitPrice: 100,
      quantity: 2,
      isOverBudget: false,
      isApproved: false,
    },
    {
      id: 1,
      item: "pen",
      unitPrice: 200,
      quantity: 5,
      isOverBudget: true,
      isApproved: false,
    },
    {
      id: 2,
      item: "pencil",
      unitPrice: 10,
      quantity: 10,
      isOverBudget: false,
      isApproved: false,
    },
    {
      id: 3,
      item: "pikachu",
      unitPrice: 1000,
      quantity: 1,
      isOverBudget: true,
      isApproved: false,
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          //component={HomeScreen}
          options={{ headerShown: false }}
        >
          {(props) => <HomeScreen {...props} data={sampleExpense} />}
        </Stack.Screen>
        <Stack.Screen
          name="AddExpense"
          component={DetailsScreen}
          options={{ title: "Add An Expense" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

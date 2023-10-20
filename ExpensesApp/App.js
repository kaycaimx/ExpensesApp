import { Button, KeyboardAvoidingView, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

import { colors, styles } from "./styles";
import DetailsScreen from "./components/DetailsScreen";
import HomeScreen from "./components/HomeScreen";
import PIcon from "./components/PIcon";
import { database } from "./firebase/firebaseSetup";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log(database);
  const sampleExpense = [
    {
      id: 0,
      item: "book",
      unitPrice: 100,
      quantity: 2,
      isOverbudget: false,
      isApproved: false,
    },
    {
      id: 1,
      item: "pen",
      unitPrice: 200,
      quantity: 5,
      isOverbudget: true,
      isApproved: false,
    },
  ];

  function deleteHandler() {
    console.log("Delete button pressed");
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.headerFooter },
          headerTintColor: colors.text,
        }}
      >
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <HomeScreen {...props} data={sampleExpense} />}
        </Stack.Screen>
        <Stack.Screen
          name="AddExpense"
          component={DetailsScreen}
          options={{ title: "Add An Expense" }}
        />
        <Stack.Screen
          name="EditExpense"
          component={DetailsScreen}
          options={{
            title: "Edit An Expense",
            headerRight: () => (
              <PIcon pressHandler={deleteHandler}>
                <AntDesign name="delete" size={20} color={colors.text} />
              </PIcon>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { Button, KeyboardAvoidingView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors, styles } from "./styles";
import DetailsScreen from "./components/DetailsScreen";
import HomeScreen from "./components/HomeScreen";

import { database } from "./firebase/firebaseSetup";
import { collection, onSnapshot } from "firebase/firestore";

const Stack = createNativeStackNavigator();

export default function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    onSnapshot(collection(database, "expenses"), (snapshot) => {
      if (!snapshot.empty) {
        let data = [];
        snapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setExpenses(data);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.headerFooter },
          headerTintColor: colors.text,
        }}
      >
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <HomeScreen {...props} data={expenses} />}
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
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

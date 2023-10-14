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
  const sampleExpense = [
    { id: 0, item: "book", unitPrice: 100, quantity: 2 },
    { id: 1, item: "pen", unitPrice: 200, quantity: 5 },
    { id: 2, item: "pencil", unitPrice: 10, quantity: 10 },
  ];

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
          //component={HomeScreen}
          initialParams={{ itemId: 42 }}
          options={({ navigation }) => ({
            title: "All Expenses",
            headerRight: () => (
              <PIcon
                pressHandler={() => {
                  navigation.navigate("AddExpense");
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

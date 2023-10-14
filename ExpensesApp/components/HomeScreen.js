import { Button, KeyboardAvoidingView, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

import { colors, styles } from "../styles";
import PIcon from "./PIcon";
import SummaryScreen from "./SummaryScreen";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation, data }) => {
  //console.log(data);

  const [addIconPressed, setAddIconPressed] = useState(false);

  function addExpense() {
    //console.log("Add expense pressed");
    setAddIconPressed(true);
  }

  function navigateToAddExpense() {
    navigation.navigate("AddExpense");
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.headerFooter },
        headerTintColor: colors.text,
        headerRight: () => (
          <PIcon iconStyle={styles.addIcon} pressHandler={navigateToAddExpense}>
            <Ionicons name="add" size={24} color={"white"} />
          </PIcon>
        ),
      }}
    >
      <Tab.Screen
        name="AllExpenses"
        component={SummaryScreen}
        options={{
          title: "All Expenses",
        }}
      />
      <Tab.Screen
        name="OverbudgetExpenses"
        component={SummaryScreen}
        options={{
          title: "Overbudget Expenses",
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

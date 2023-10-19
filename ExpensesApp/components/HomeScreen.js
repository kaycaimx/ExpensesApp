import { Button, KeyboardAvoidingView, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

import { colors, styles } from "../styles";
import PIcon from "./PIcon";
import EntriesList from "./EntriesList";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation, data }) => {
  const allExpenses = data;
  const overbudgetExpenses = data.filter((expense) => expense.isOverBudget);

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
        options={{
          title: "All Expenses",
        }}
      >
        {(props) => <EntriesList {...props} data={allExpenses} />}
      </Tab.Screen>
      <Tab.Screen
        name="OverbudgetExpenses"
        options={{
          title: "Overbudget Expenses",
        }}
      >
        {(props) => <EntriesList {...props} data={overbudgetExpenses} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeScreen;

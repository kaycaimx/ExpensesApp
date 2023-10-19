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
  const overbudgetExpenses = data.filter((expense) => expense.isOverbudget);

  const [addIconPressed, setAddIconPressed] = useState(false);

  function addExpense() {
    //console.log("Add expense pressed");
    setAddIconPressed(true);
  }

  function navigateToAddExpense() {
    navigation.navigate("AddExpense", {
      item: "",
      unitPrice: null,
      quantity: null,
      isOverbudget: false,
      isApproved: false,
      isEditing: false,
    });
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.headerFooter },
        headerTintColor: colors.text,
        headerRight: () => (
          <PIcon iconStyle={styles.addIcon} pressHandler={navigateToAddExpense}>
            <Ionicons name="add" size={24} color={colors.text} />
          </PIcon>
        ),
        tabBarStyle: { backgroundColor: colors.headerFooter },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let color;
          if (route.name === "AllExpenses") {
            iconName = "home";
            color = focused ? colors.tabBarFocused : colors.tabBarUnfocused;
          } else if (route.name === "OverbudgetExpenses") {
            iconName = "alert";
            color = focused ? colors.tabBarFocused : colors.tabBarUnfocused;
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: colors.tabBarFocused,
        tabBarInactiveTintColor: colors.tabBarUnfocused,
      })}
    >
      <Tab.Screen
        name="AllExpenses"
        options={{
          tabBarLabel: "Home",
        }}
      >
        {(props) => <EntriesList {...props} data={allExpenses} />}
      </Tab.Screen>
      <Tab.Screen
        name="OverbudgetExpenses"
        options={{
          tabBarLabel: "Overbudget",
        }}
      >
        {(props) => <EntriesList {...props} data={overbudgetExpenses} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeScreen;

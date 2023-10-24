import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../styles";
import PIcon from "./PIcon";
import EntriesList from "./EntriesList";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
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
          <PIcon pressHandler={navigateToAddExpense}>
            <Ionicons name="add" size={24} color={colors.text} />
          </PIcon>
        ),
        tabBarStyle: { backgroundColor: colors.headerFooter },
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "AllExpenses") {
            iconName = "home";
          } else if (route.name === "OverbudgetExpenses") {
            iconName = "alert";
          }
          let color = focused ? colors.tabBarFocused : colors.tabBarUnfocused;
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: colors.tabBarFocused,
        tabBarInactiveTintColor: colors.tabBarUnfocused,
      })}
    >
      <Tab.Screen
        name="AllExpenses"
        component={EntriesList}
        options={{
          title: "All Expenses",
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="OverbudgetExpenses"
        component={EntriesList}
        options={{
          title: "Overbudget Expenses",
          tabBarLabel: "Overbudget",
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

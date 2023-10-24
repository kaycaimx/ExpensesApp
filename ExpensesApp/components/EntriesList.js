import { FlatList, ScrollView, View } from "react-native";
import React from "react";

import Entry from "./Entry";
import { styles } from "../styles";

const EntriesList = ({ navigation, data }) => {
  return (
    <View style={styles.scrollView}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Entry
            navigation={navigation}
            id={item.id}
            item={item.item}
            unitPrice={item.unitPrice}
            quantity={item.quantity}
            isOverbudget={item.isOverbudget}
            isApproved={item.isApproved}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <ScrollView style={styles.scrollView}>
        {data.map((expense) => (
          <Entry
            key={expense.id}
            navigation={navigation}
            id={expense.id}
            item={expense.item}
            unitPrice={expense.unitPrice}
            quantity={expense.quantity}
            isOverbudget={expense.isOverbudget}
            isApproved={expense.isApproved}
          />
        ))}
      </ScrollView> */}
    </View>
  );
};

export default EntriesList;

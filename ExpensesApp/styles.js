import { StyleSheet } from "react-native";

const colors = {
  background: "thistle",
  headerFooter: "rebeccapurple",
  text: "white",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { colors, styles };

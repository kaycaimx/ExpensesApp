import { StyleSheet } from "react-native";

const colors = {
  alertTriangle: "goldenrod",
  background: "thistle",
  headerFooter: "midnightblue",
  priceQuantityWrapper: "white",
  priceQuantityText: "black",
  ripple: "mediumslateblue",
  tabBarFocused: "goldenrod",
  tabBarUnfocused: "grey",
  text: "white",
  iconPressed: "mediumslateblue",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon: {
    marginRight: 10,
  },
  scrollView: {
    width: "90%",
  },
  entryWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.headerFooter,
    width: "100%",
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
    marginBottom: 15,
  },
  entryPressed: {
    opacity: 0.5,
  },
  entryItem: {
    color: colors.text,
    fontSize: 16,
  },
  priceApprovedWrapper: {
    flexDirection: "row",
    height: "90%",
    width: "30%",
    alignItems: "center",
  },
  priceQuantity: {
    position: "absolute",
    right: 0,
    backgroundColor: colors.priceQuantityWrapper,
    color: colors.priceQuantityText,
    marginLeft: 10,
    height: "100%",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  inputWrapper: {
    width: "90%",
  },
  inputLabel: {
    color: colors.headerFooter,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputBox: {
    width: "100%",
    backgroundColor: colors.text,
    borderRadius: 5,
    height: 25,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  dropDown: {
    height: 250,
  },
  btnsWrapper: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    width: "70%",
  },
  buttonDefault: {
    width: "45%",
    backgroundColor: colors.headerFooter,
    padding: 5,
    borderRadius: 5,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  androidRipple: {
    color: colors.ripple,
    borderless: false,
  },
  buttonText: {
    color: colors.text,
    textAlign: "center",
  },
  checkboxWrapper: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 25,
  },
  checkboxLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.headerFooter,
  },
  iconDefault: {
    backgroundColor: colors.headerFooter,
    marginRight: 5,
  },
  iconPressed: {
    backgroundColor: colors.iconPressed,
    opacity: 0.5,
  },
});

export { colors, styles };

import { Platform, StyleSheet } from "react-native";

const colors = {
  background: "thistle",
  headerFooter: "midnightblue",
  ripple: "mediumslateblue",
  text: "white",
  iconPressed: "gold",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  hearder: {
    headerStyle: { backgroundColor: colors.headerFooter },
    headerTintColor: colors.text,
  },
  iconDefault: {
    tintColor: colors.text,
  },
  iconPressed: {
    color: colors.iconPressed,
  },
  inputWrapper: {
    width: "90%",
    marginBottom: 20,
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
    ...(Platform.OS === "android" && {
      android_ripple: { color: colors.ripple, borderless: false },
    }),
  },
  buttonText: {
    color: colors.text,
    textAlign: "center",
  },
  checkboxWrapper: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  checkboxLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.headerFooter,
  },
});

export { colors, styles };

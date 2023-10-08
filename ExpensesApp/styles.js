import { StyleSheet } from "react-native";

const colors = {
  background: "thistle",
  headerFooter: "midnightblue",
  text: "white",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
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
    height: 300,
  },
  btnsWrapper: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    width: "70%",
  },
  button: {
    width: "45%",
    backgroundColor: colors.headerFooter,
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.text,
    textAlign: "center",
  },
});

export { colors, styles };

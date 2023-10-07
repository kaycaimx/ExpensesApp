import { KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";

import AddExpScreen from "./components/AddExpScreen";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <AddExpScreen />
    </KeyboardAvoidingView>
  );
}

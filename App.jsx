import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import HomeScreen from "./Components/homeScreen";
// import Signin from "./Components/signin";
// import Signup from "./Components/signup";
// import MainScreen from "./Components/mainScreen";
// import WelcomeScreen from "./Components/welcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
      {/* <Signin></Signin> */}
      {/* <Signup></Signup> */}
      {/* <MainScreen></MainScreen> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

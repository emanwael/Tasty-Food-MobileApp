//import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import RestaurantScreen from "./Components/restaurantScreen";
import Signin from "./Components/signin";
import Signup from "./Components/signup";
import MainScreen from "./Components/mainScreen";
import HomeScreen from "./Components/homeScreen";

import WelcomeScreen from "./Components/welcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import FoodScreen from "./Components/foodScreen";
import CartScreen from "./Components/CartScreen";
import { Provider } from "react-redux";
import store from "./store";
import AccountScreen from './Components/accountScreen';

const Stack = createStackNavigator();
import HomeScreen from "./Components/homeScreen";
// import Signin from "./Components/signin";
// import Signup from "./Components/signup";
// import MainScreen from "./Components/mainScreen";
// import WelcomeScreen from "./Components/welcomeScreen";

export default function App() {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AccountScreen" component={AccountScreen} />
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="homeScreen" component={HomeScreen} />
          <Stack.Screen name="foodscreen" component={FoodScreen} />
          <Stack.Screen name="CartScreen" component={CartScreen} />

        </Stack.Navigator>
      </NavigationContainer></Provider>
  )
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




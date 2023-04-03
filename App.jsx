//import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import RestaurantScreen from "./Components/restaurantScreen";
import Signin from "./Components/signin";
import Signup from "./Components/signup";
// import MainScreen from "./Components/mainScreen";
// import HomeScreen from "./Components/homeScreen";

import WelcomeScreen from "./Components/welcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FoodScreen from "./Components/foodScreen";
import CartScreen from "./Components/CartScreen";
import { Provider } from "react-redux";
import store from "./store";
import AccountScreen from "./Components/accountScreen";
import HomeTabs from "./Components/buttonTab";
import RestaurantCard from "./Components/restaurantCard";
import FoodCard from "./Components/FoodCard";
import Payment from "./Components/payment";
const Stack = createStackNavigator();

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { StripeProvider } from "@stripe/stripe-react-native";
import HomeScreen from "./Components/homeScreen";

export default function App() {
  //   const stripePromise = loadStripe(
  //     "pk_test_51MedOvFmBl6qtJ7QVF4irouRTDbxkRkEf6Oq69eOARVN5RWOpLVnOBJEhiCOQTXbbMJWm87tAUHpYsIGCv0j6zpi00j7vRaKsJ"
  //   );
  const publishKey =
    "pk_test_51MedOvFmBl6qtJ7QVF4irouRTDbxkRkEf6Oq69eOARVN5RWOpLVnOBJEhiCOQTXbbMJWm87tAUHpYsIGCv0j6zpi00j7vRaKsJ";
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={publishKey}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            {/* <Stack.Screen name="welcome" component={WelcomeScreen} /> */}
            {/* <Stack.Screen name="resturantDetails" component={RestaurantCard} />

            {/* <Stack.Screen name="HomeTabs" component={HomeTabs} /> */}
            {/* <Stack.Screen name="welcome" component={WelcomeScreen} /> */}
            {/* <Stack.Screen name="Signup" component={Signup} /> */}
            <Stack.Screen name="resturantDetails" component={RestaurantCard} />

            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} />

            <Stack.Screen name="payment" component={Payment} />

            <Stack.Screen
              name="restaurantscreen"
              component={RestaurantScreen}
            />

            <Stack.Screen name="foodcard" component={FoodCard} />
            <Stack.Screen name="foodscreen" component={FoodScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StripeProvider>
    </Provider>
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

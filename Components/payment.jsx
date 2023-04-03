import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slices/cart";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import baseUrl from "../store/slices/baseUrl";

export default function Payment({ navigation }) {
  const { cartItems, totalPrice } = useSelector((state) => state.cartSlice);
  const { clearItemsCart } = cartActions;
  const { customerData } = useSelector((state) => state.customers);
  const { customer_name, phone_number, address } = customerData;
  const dispatch = useDispatch();

  const [isProcessing, setProcessing] = useState(false);
  const [Error, setError] = useState("");
  const [Success, setSuccess] = useState("pay");

  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const { confirmPayment } = useStripe();
  const fetchCard = async () => {
    const response = await axios.post(`http://${baseUrl}:5100/payments`, {
      amount: 2 * 100,
    });

    const clientSecret = await response.data;
    console.log("erorrrrrrr", clientSecret);
    return clientSecret;
  };
  const handlePayPress = async () => {
    setSuccess("Processing...");
    const { name, phone, address } = credentials;
    const billingInfo = {
      name,
      phone,
      address: {
        line1: address,
      },
    };
    // Create a payment method

    const clientSecret = await fetchCard();
    const { paymentMethod, error } = await confirmPayment(clientSecret, {
      // type: "Card",
      paymentMethodType: "Card",
      billingDetails: billingInfo,
    });

    if (error) {
      console.log("Payment failed:", error);
    } else {
      console.log("Payment successful:", paymentMethod);
      setSuccess("Success! Payment is Complete");
      setTimeout(() => {
        setSuccess("Pay");
        setProcessing(false);
        setCredentials({
          name: "",
          phone: "",
          address: "",
        });
        dispatch(clearItemsCart());
        navigation.navigate("HomeScreen");
      }, 5000);

      // Handle successful payment
    }
  };

  useEffect(() => {
    setCredentials({
      name: customer_name,
      phone: phone_number,
      address,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Payment</Text>
      <StatusBar barStyle="light-content" backgroundColor="#FF5A00" />
      {/* <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2022/11/10/20/44/switzerland-7583676_1280.jpg",
        }}
        style={styles.ImgStyle}
      /> */}
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        onChangeText={(name) => {
          // console.log(name);
          setCredentials({ ...credentials, name: name });
          // console.log(credentials.name);
        }}
        // name="name"
        value={credentials.name}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Phone"
        onChangeText={(phone) => {
          // console.log(name);
          setCredentials({ ...credentials, phone: phone });
          // console.log(credentials.name);
        }}
        // name="name"
        value={credentials.phone}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Adress"
        onChangeText={(address) => {
          // console.log(address);
          setCredentials({ ...credentials, address: address });
          // console.log(credentials.name);
        }}
        // name="name"
        value={credentials.address}
      />
      {/* <CardElement
        options={{
          hidePostalCode: true,

          style: {
            base: {
              fontSize: "20px",
            },
            invalid: {
              color: "red",
            },
          },
        }}
        onChange={handleCardChange}
      /> */}
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        style={{
          width: "100%",
          height: 50,
          margin: 10,
          marginVertical: 10,
        }}
      />
      {Error && <Text>{Error}</Text>}
      <Text style={styles.labelStyle}>${totalPrice}</Text>

      <TouchableOpacity style={styles.button} onPress={handlePayPress}>
        <Text style={styles.buttonText}>{Success}</Text>
      </TouchableOpacity>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ImgStyle: {
    width: 300,
    height: 100,
    borderRadius: 8,
    marginBottom: 100,
  },
  button: {
    backgroundColor: "#FF5A00",
    width: 150,
    height: 45,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: "#f4f4f4",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  inputStyle: {
    backgroundColor: "#2222",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  labelStyle: {
    marginBottom: 5,
    borderRadius: 5,
    fontSize: 30,
    alignSelf: "center",
  },
  text: {
    marginTop: 100,
    fontSize: 29,
    marginBottom: 100,
    textAlign: "center",
  },
});

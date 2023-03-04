import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slices/cart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
export default function Payment() {
  const { cartItems, totalPrice } = useSelector((state) => state.cartSlice);
  const { clearItemsCart } = cartActions;
  const dispatch = useDispatch();

  const stripe = useStripe();
  const element = useElements();

  const [isProcessing, setProcessing] = useState(false);
  const [Error, setError] = useState("");
  const [Success, setSuccess] = useState("pay");

  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // useEffect(() => {
  //   setCredentials({
  //     name: customer_name,
  //     phone: phone_number,
  //     address,
  //   });
  // }, []);

  //
  // };
  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   setCredentials({ ...credentials, [name]: value });
  //   console.log(credentials);
  //   // console.log(credentials);
  // };

  const handleCardChange = (e) => {
    if (e.error) {
      console.log("erorrrrrrrrrr", e.error);
      return setError(e.error.message);
    }
    setError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setSuccess("Processing...");

    const cardElement = element.getElement("card");
    const { name, phone, address } = credentials;
    const billingInfo = {
      name,
      phone,
      address: {
        line1: address,
      },
    };

    try {
      const paymentIntent = await axios.post("http://localhost:5100/payments", {
        amount: totalPrice * 100,
      });

      const paymentMethodObj = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingInfo,
      });

      if (paymentMethodObj.error) {
        console.log("(paymentMethodObj error", paymentMethodObj.error);

        setError(paymentMethodObj.error.message);
        setProcessing(false);
        setSuccess("Pay");
        return;
      }

      const confirmedPayment = await stripe.confirmCardPayment(
        paymentIntent.data,
        {
          payment_method: paymentMethodObj.paymentMethod.id,
        }
      );
      if (confirmedPayment.error) {
        console.log("confirm error", confirmedPayment.error);
        setError(confirmedPayment.error.message);
        setProcessing(false);
        setSuccess("Pay");
        return;
      }

      setSuccess("Success! Payment is Complete");
      setTimeout(() => {
        setSuccess("Pay");
        setProcessing(false);
        setCredentials({
          name: "",
          phone: "",
          address: "",
        });
        cardElement.clear();
        dispatch(clearItemsCart());
        navigator("/home");
      }, 5000);
    } catch (error) {
      console.log("error", error);
      setError(error.message);
      setProcessing(false);
      setSuccess("Pay");
    }
  };
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
      {Error && <Text>{Error}</Text>}
      <Text style={styles.labelStyle}>${totalPrice}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay Now</Text>
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

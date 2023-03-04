import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

import Separator from "../assets/Styles/Separator";
import Colors from "../assets/Styles/Colors";
import Images from "../assets/Styles/Images";
import Display from "../assets/Styles/Display";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { addCustomer } from "../store/slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";

const inputStyle = (state) => {
  switch (state) {
    case "valid":
      return {
        ...styles.inputContainer,
        borderWidth: 1,
        borderColor: Colors.SECONDARY_GREEN,
      };
    case "invalid":
      return {
        ...styles.inputContainer,
        borderWidth: 1,
        borderColor: Colors.DEFAULT_RED,
      };
    default:
      return styles.inputContainer;
  }
};

const showMarker = (state) => {
  switch (state) {
    case "valid":
      return (
        <AntDesign
          name="checkcircleo"
          color={Colors.SECONDARY_GREEN}
          size={18}
          style={{ marginLeft: 5 }}
        />
      );
    case "invalid":
      return (
        <AntDesign
          name="closecircleo"
          color={Colors.DEFAULT_RED}
          size={18}
          style={{ marginLeft: 5 }}
        />
      );
    default:
      return null;
  }
};

export default function Signup({ navigation }) {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [emailState, setEmailState] = useState("default");
  const [usernameState, setUsernameState] = useState("default");
  const [isAutoLoading, setIsAutoLoading] = useState(false); //!
  const [form, setForm] = useState({ isSubmitted: false, isValid: false });

  const [name, setName] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [address, setAddress] = useState("");
  const [addressErrorMessage, setAddressErrorMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");

  const validateData = () => {
    setForm({ ...form, isSubmitted: true });

    !name
      ? setNameErrorMessage("please enter a name")
      : setNameErrorMessage("");

    !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ? setEmailErrorMessage("please enter a valid email")
      : setEmailErrorMessage("");

    !password
      ? setPasswordErrorMessage("please enter a password")
      : setPasswordErrorMessage("");

    !address
      ? setAddressErrorMessage("please enter an address")
      : setAddressErrorMessage("");

    !phone
      ? setPhoneErrorMessage("please enter a phone number")
      : setPhoneErrorMessage("");

    if (
      !nameErrorMessage &&
      !passwordErrorMessage &&
      !emailErrorMessage &&
      !addressErrorMessage &&
      !phoneErrorMessage
    )
      setForm({ ...form, isValid: true });
    else setForm({ ...form, isValid: false });
  };

  //connection with api
  const dispatch = useDispatch();
  const { customerData, isLoading } = useSelector((store) => store.customers);

  useEffect(() => {
    if (customerData._id) navigation.navigate("HomeScreen");
  }, [customerData]);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <View style={styles.container}>
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Sign Up</Text>
        </View>
        <ScrollView>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.content}>
            Enter your email, choose a username and password
          </Text>
          <View style={inputStyle(usernameState)}>
            <View style={styles.inputSubContainer}>
              <Feather
                name="user"
                size={22}
                color={Colors.DEFAULT_GREY}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Name"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={(text) => setName(text)}
              />
              {showMarker(usernameState)}
            </View>
          </View>
          {nameErrorMessage && (
            <Text style={styles.errorMessage}>{nameErrorMessage}</Text>
          )}
          <View style={inputStyle(emailState)}>
            <View style={styles.inputSubContainer}>
              <Feather
                name="mail"
                size={22}
                color={Colors.DEFAULT_GREY}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={(text) => setEmail(text)}
              />
              {showMarker(emailState)}
            </View>
          </View>
          {emailErrorMessage && (
            <Text style={styles.errorMessage}>{emailErrorMessage}</Text>
          )}
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <Feather
                name="lock"
                size={22}
                color={Colors.DEFAULT_GREY}
                style={{ marginRight: 10 }}
              />
              <TextInput
                secureTextEntry={isPasswordShow ? false : true}
                placeholder="Password"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={(text) => setPassword(text)}
              />
              <Feather
                name={isPasswordShow ? "eye" : "eye-off"}
                size={22}
                color={Colors.DEFAULT_GREY}
                style={{ marginRight: 10 }}
                onPress={() => setIsPasswordShow(!isPasswordShow)}
              />
            </View>
          </View>
          {passwordErrorMessage && (
            <Text style={styles.errorMessage}>{passwordErrorMessage}</Text>
          )}
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <Feather
                name="home"
                size={22}
                color={Colors.DEFAULT_GREY}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Address"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={(text) => setAddress(text)}
              />
            </View>
          </View>
          {addressErrorMessage && (
            <Text style={styles.errorMessage}>{addressErrorMessage}</Text>
          )}
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <Feather
                name="phone"
                size={22}
                color={Colors.DEFAULT_GREY}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={(text) => setPhone(text)}
              />
            </View>
          </View>
          {phoneErrorMessage && (
            <Text style={styles.errorMessage}>{phoneErrorMessage}</Text>
          )}
          <TouchableOpacity
            style={styles.signinButton}
            onPress={() => {
              validateData();
              //TODO: addCustomer
              dispatch(
                addCustomer({
                  email,
                  password,
                  customer_name: name,
                  phone_number: phone,
                  address,
                })
              );
              //TODO: navigate to home screen
            }}
          >
            {form.isSubmitted &&
              form.isValid &&
              !isLoading &&
              !customerData._id && (
                <Text style={styles.errorMessage}>
                  the email address is already in use
                </Text>
              )}
            {isAutoLoading ? (
              <Image source={Images.LOADING} autoPlay />
            ) : (
              <Text style={styles.signinButtonText}>Create Account</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity style={styles.facebookButton}>
            <View style={styles.socialButtonsContainer}>
              <View style={styles.signinButtonLogoContainer}>
                <Image
                  source={Images.FACEBOOK}
                  style={styles.signinButtonLogo}
                />
              </View>
              <Text style={styles.socialSigninButtonText}>
                Connect with Facebook
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <View style={styles.socialButtonsContainer}>
              <View style={styles.signinButtonLogoContainer}>
                <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
              </View>
              <Text style={styles.socialSigninButtonText}>
                Connect with Google
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: "center",
  },
  inputSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: "center",
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginLeft: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  facebookButton: {
    backgroundColor: Colors.FABEBOOK_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  googleButton: {
    backgroundColor: Colors.GOOGLE_BLUE,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  socialSigninButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 13,
    lineHeight: 13 * 1.4,
  },
  signinButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    position: "absolute",
    left: 25,
  },
  signinButtonLogo: {
    height: 18,
    width: 18,
  },
  errorMessage: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_RED,
    marginHorizontal: 20,
    marginTop: 3,
    marginBottom: 10,
  },
});

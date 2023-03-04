import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Colors from "../assets/Styles/Colors";
import Display from "../assets/Styles/Display";
import Images from "../assets/Styles/Images";
import Separator from "../assets/Styles/Separator";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { signCustomerIn } from "../store/slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Signin({ navigation }) {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [form, setForm] = useState({ isSubmitted: false, isValid: false });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAutoLoading, setIsAutoLoading] = useState(false); //!
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  //validate data
  const validateData = () => {
    setForm({ ...form, isSubmitted: true });

    !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ? setEmailErrorMessage("please enter a valid email")
      : setEmailErrorMessage("");

    !password
      ? setPasswordErrorMessage("please enter a password")
      : setPasswordErrorMessage("");
    if (!passwordErrorMessage && !emailErrorMessage)
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
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.DEFAULT_WHITE}
          translucent
        />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Sign In</Text>
        </View>
        <ScrollView>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.content}>
            Enter your username and password, and enjoy ordering food
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputSubContainer}>
              <Feather
                name="mail"
                size={22}
                color={Colors.DEFAULT_GREY}
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Username"
                placeholderTextColor={Colors.DEFAULT_GREY}
                selectionColor={Colors.DEFAULT_GREY}
                style={styles.inputText}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          {emailErrorMessage && (
            <Text style={styles.errorMessage}>{emailErrorMessage}</Text>
          )}
          <Separator height={15} />
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
          <View style={styles.forgotPasswordContainer}>
            <View style={styles.toggleContainer}>
              {/* <ToggleButton size={0.5} /> */}
              <Text style={styles.rememberMeText}>Remember me</Text>
            </View>
            <Text
              style={styles.forgotPasswordText}
              //   onPress={() => navigation.navigate('ForgotPassword')}
            >
              Forgot Password
            </Text>
          </View>
          <TouchableOpacity
            style={styles.signinButton}
            onPress={() => {
              validateData();
              //TODO: signCustomerIn
              dispatch(
                signCustomerIn({
                  email,
                  password,
                })
              );
              // navigation.navigate("HomeScreen");
              //TODO: Navigate to home screen
              // console.log(customerData._id);
            }}
            activeOpacity={0.8}
          >
            {form.isSubmitted &&
              form.isValid &&
              !isLoading &&
              !customerData._id && (
                <Text style={styles.errorMessage}>
                  Login Failed: your email or password is incorrect
                </Text>
              )}
            {isAutoLoading ? (
              <Image source={Images.LOADING} autoPlay />
            ) : (
              <Text style={styles.signinButtonText}>Sign In</Text>
            )}
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text style={styles.accountText}>Don't have an account?</Text>
            <Text
              style={styles.signupText}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up
            </Text>
          </View>
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
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
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
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,

    marginBottom: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 20,
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
  forgotPasswordContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rememberMeText: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREY,
  },
  forgotPasswordText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREEN,
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
  signupContainer: {
    marginHorizontal: 20,
    justifyContent: "center",
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  accountText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  signupText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_GREEN,

    marginLeft: 5,
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginLeft: 5,
    alignSelf: "center",
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
  signinButtonLogo: {
    height: 18,
    width: 18,
  },
  signinButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    position: "absolute",
    left: 25,
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
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
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

import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Colors from "../assets/Styles/Colors";
import Display from "../assets/Styles/Display";
import Separator from "../assets/Styles/Separator";
import Images from "../assets/Styles/Images";
import { useSelector } from "react-redux";
import FoodCard from "./FoodCard";

export default function CartScreen({ navigation }) {
  // const cart = useSelector(state => state?.cartState?.cart);
  const { cartItems, totalPrice, countItems } = useSelector(
    (store) => store.cartSlice
  );

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
          <Text style={styles.headerTitle}>My Cart</Text>
        </View>
        {cartItems?.length > 0 ? (
          <>
            <ScrollView>
              <View style={styles.foodList}>
                {cartItems?.map((item) => (
                  // <Text>{item?.meals_name}</Text>
                  <FoodCard
                    // key={item?._id}
                    item={item}
                    navigate={() => navigation.navigate("foodscreen")}
                  />
                ))}
              </View>
              <View style={styles.amountContainer}>
                <View style={styles.amountSubContainer}>
                  <Text style={styles.amountLabelText}>Total Meals</Text>
                  <Text style={styles.amountText}> {countItems}</Text>
                </View>
                <View style={styles.amountSubContainer}>
                  <Text style={styles.amountLabelText}>Delivery Fee</Text>
                  <Text
                    style={{
                      ...styles.amountText,
                      color: Colors.DEFAULT_GREEN,
                    }}
                  >
                    Free
                  </Text>
                </View>
              </View>
              <View style={styles.totalContainer}>
                <Text style={styles.totalText}>{totalPrice}</Text>
                <Text style={styles.totalText}>
                  $ {/*cart?.metaData?.grandTotal?.toFixed(2)*/}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.checkoutButton}
                onPress={() => {
                  navigation.navigate("payment");
                }}
              >
                <View style={styles.rowAndCenter}>
                  <Ionicons
                    name="cart-outline"
                    color={Colors.DEFAULT_WHITE}
                    size={20}
                  />
                  <Text style={styles.checkoutText}>Checkout</Text>
                </View>
                <Text style={styles.checkoutText}>
                  $ {/*cart?.metaData?.grandTotal?.toFixed(2)*/}
                </Text>
              </TouchableOpacity>
              <Separator height={Display.setHeight(9)} />
            </ScrollView>
          </>
        ) : (
          <View style={styles.emptyCartContainer}>
            <Image
              style={styles.emptyCartImage}
              source={Images.EMPTY_CART}
              resizeMode="contain"
            />
            <Text style={styles.emptyCartText}>Cart Empty</Text>
            <Text style={styles.emptyCartSubText}>
              Go ahead and order some tasty food
            </Text>
            <TouchableOpacity style={styles.addButtonEmpty}>
              <AntDesign name="plus" color={Colors.DEFAULT_WHITE} size={20} />
              <Text
                style={styles.addButtonEmptyText}
                onPress={() => {
                  navigation.navigate("homeScreen");
                }}
              >
                Add Food
              </Text>
            </TouchableOpacity>
            <Separator height={Display.setHeight(15)} />
          </View>
        )}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
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
  },
  foodList: {
    marginHorizontal: Display.setWidth(4),
  },
  promoCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: Display.setWidth(4),
    paddingVertical: 15,
    marginTop: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    justifyContent: "space-between",
  },
  promoCodeText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginLeft: 10,
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountContainer: {
    marginHorizontal: Display.setWidth(4),
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  amountSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  amountLabelText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_GREEN,
  },
  amountText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  totalContainer: {
    marginHorizontal: Display.setWidth(4),
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  checkoutButton: {
    flexDirection: "row",
    width: Display.setWidth(80),
    backgroundColor: Colors.DEFAULT_GREEN,
    alignSelf: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    height: Display.setHeight(7),
    marginTop: 10,
  },
  checkoutText: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: Colors.DEFAULT_WHITE,
    marginLeft: 8,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 30,
    lineHeight: 30 * 1.4,
    color: Colors.DEFAULT_GREEN,
  },
  emptyCartSubText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.INACTIVE_GREY,
  },
  addButtonEmpty: {
    flexDirection: "row",
    backgroundColor: Colors.DEFAULT_YELLOW,
    borderRadius: 8,
    paddingHorizontal: Display.setWidth(4),
    paddingVertical: 5,
    marginTop: 10,
    justifyContent: "space-evenly",
    elevation: 3,
    alignItems: "center",
  },
  addButtonEmptyText: {
    fontSize: 12,

    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_WHITE,
    marginLeft: 10,
  },
  emptyCartImage: {
    height: Display.setWidth(60),
    width: Display.setWidth(60),
  },
});

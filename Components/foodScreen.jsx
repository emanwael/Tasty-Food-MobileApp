import React, { useEffect, useState } from "react";
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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

import Images from "../assets/Styles/Images";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/slices/cart";
import { getMeal } from "../store/slices/mealSlice";

import { getMenuItemById } from "../store/slices/menuItemSlice";

const setStyle = (isActive) =>
  isActive
    ? styles.subMenuButtonText
    : { ...styles.subMenuButtonText, color: Colors.DEFAULT_GREY };

const FoodScreen = ({ navigation, route }) => {
  const item = route.params.item;
  const { _id, meal_name, meal_img, price, description } = item;

  //const id =route.params.id
  /// const [food, setFood] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState("Details");

  const { cartItems, countItems } = useSelector((store) => store.cartSlice);
  //   const { MenuItemsList } = useSelector((store) => store.menuItems);
  //   const { myMenu } = useSelector((store) => store.mealSlice);
  const { addToCart, removFromCart } = cartActions;
  //   const id = "63d43fb7680c5824bc4dc884";
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getMeal(id));
  }, []);

  //   const  () => {
  //     let quantity = 0;
  //     if (countItems !== 0) {
  //       const foundItemInCart = cartItems.find((item) => item._id === id);
  //       if (foundItemInCart) {
  //         quantity = foundItemInCart.quantity;
  //       }
  //     }
  //     return quantity;
  //   };
  ////////////////////

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Image style={styles.image} source={{ uri: meal_img }} />
      <ScrollView>
        <Separator height={Display.setWidth(100)} />
        <View style={styles.mainContainer}>
          <View style={styles.titleHeaderContainer}>
            <Text style={styles.titleText}>{meal_name}</Text>
            <Text style={styles.priceText}>${price}</Text>
          </View>
          <View style={styles.subHeaderContainer}>
            <View style={styles.rowAndCenter}>
              <FontAwesome
                name="star"
                size={20}
                color={Colors.DEFAULT_YELLOW}
              />
              <Text style={styles.ratingText}>4.2</Text>
              <Text style={styles.reviewsText}>(255)</Text>
            </View>
            <View style={styles.rowAndCenter}>
              <Image style={styles.iconImage} source={Images.DELIVERY_TIME} />
              <Text style={styles.deliveryText}>20 min</Text>
            </View>
            <View style={styles.rowAndCenter}>
              <Image style={styles.iconImage} source={Images.DELIVERY_CHARGE} />
              <Text style={styles.deliveryText}>Free Delivery</Text>
            </View>
          </View>
          <View style={styles.subMenuContainer}>
            <TouchableOpacity
              style={styles.subMenuButtonContainer}
              onPress={() => setSelectedSubMenu("Details")}
            >
              <Text style={setStyle(selectedSubMenu === "Details")}>
                {description}
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={styles.subMenuButtonContainer}
              onPress={() => setSelectedSubMenu("Reviews")}
              s
            >
              <Text style={setStyle(selectedSubMenu === "Reviews")}>
                Reviews
              </Text>
            </TouchableOpacity> */}
          </View>
          {/* <View style={styles.detailsContainer}>
            {MenuItemsList?.description ? (
              <>
                <Text style={styles.detailHeader}>Description</Text>
                <Text style={styles.detailContent}>
                  {MenuItemsList?.description}
                </Text>
              </>
            ) : null}
            {MenuItemsList?.ingredients ? (
              <>
                <Text style={styles.detailHeader}>Ingredients</Text>
                <Text style={styles.detailContent}>
                  {MenuItemsList?.ingredients}
                </Text>
              </>
            ) : null}
          </View> */}
        </View>
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <View style={styles.itemAddContainer}>
          <AntDesign
            name="minus"
            color={Colors.DEFAULT_YELLOW}
            size={18}
            onPress={() => dispatch(removFromCart(item))}
          />
          <Text style={styles.itemCountText}>{countItems}</Text>
          <AntDesign
            name="plus"
            color={Colors.DEFAULT_YELLOW}
            size={18}
            onPress={() => dispatch(addToCart(item))}
          />
        </View>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate("CartScreen")}
          activeOpacity={0.8}
        >
          <Text style={styles.cartButtonText}>Go to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    height: Display.setWidth(100),
    width: Display.setWidth(100),
    top: 0,
  },
  mainContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  titleHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  titleText: {
    fontSize: 23,
    lineHeight: 23 * 1.4,

    color: Colors.DEFAULT_BLACK,
  },
  priceText: {
    fontSize: 23,
    lineHeight: 23 * 1.4,

    color: Colors.DEFAULT_YELLOW,
  },
  subHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    //marginHorizontal: 1,
    marginTop: 15,
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,

    color: Colors.DEFAULT_BLACK,
    marginLeft: 5,
  },
  reviewsText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,

    color: Colors.DEFAULT_BLACK,
    marginLeft: 5,
  },
  iconImage: {
    height: 20,
    width: 20,
  },
  deliveryText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,

    color: Colors.DEFAULT_BLACK,
    marginLeft: 3,
  },
  subMenuContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingHorizontal: 20,
    marginTop: 20,
    borderColor: Colors.DEFAULT_GREY,
    justifyContent: "space-evenly",
  },
  subMenuButtonContainer: {
    paddingVertical: 15,
    width: Display.setWidth(30),
    alignItems: "center",
  },
  subMenuButtonText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,

    color: Colors.DEFAULT_BLACK,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  detailHeader: {
    fontSize: 15,
    lineHeight: 15 * 1.4,

    color: Colors.DEFAULT_BLACK,
    marginTop: 10,
    marginBottom: 2,
  },
  detailContent: {
    fontSize: 12,
    lineHeight: 12 * 1.4,

    color: Colors.INACTIVE_GREY,
    textAlign: "justify",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    paddingHorizontal: Display.setWidth(5),
    justifyContent: "space-between",
    backgroundColor: Colors.DEFAULT_WHITE,
    width: Display.setWidth(100),
    paddingVertical: Display.setWidth(2.5),
  },
  itemAddContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.LIGHT_GREY2,
    height: Display.setHeight(6),
    width: Display.setWidth(30),
    justifyContent: "center",
    borderRadius: 8,
  },
  itemCountText: {
    color: Colors.DEFAULT_BLACK,
    fontSize: 14,
    lineHeight: 14 * 1.4,

    marginHorizontal: 8,
  },
  cartButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    height: Display.setHeight(6),
    width: Display.setWidth(58),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  cartButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 14,
    lineHeight: 14 * 1.4,
  },
});

export default FoodScreen;

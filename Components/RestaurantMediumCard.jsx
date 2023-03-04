import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Colors from "../assets/Styles/Colors";
import Display from "../assets/Styles/Display";
import Images from "../assets/Styles/Images";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RestaurantMediumCard(props) {
  const { item, navigation } = props;
  const { restaurant_name, _id, logo, branches, menu } = item;
  const { branch_name } = branches[0];

  // console.log(item);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("restaurantscreen", { item });
      }}
    >
      <View style={styles.container}>
        <View>
          <Image
            // source={{uri: StaticImageService.getLogo(logo)}}
            source={{
              uri: logo,
            }}
            style={styles.posterStyle}
          />
        </View>
        <View style={styles.labelContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{restaurant_name}</Text>
            <View style={styles.rowAndCenter}>
              <FontAwesome />
              <Text style={styles.ratingText}>4.2</Text>
              <Text style={styles.reviewsText}>({233})</Text>
            </View>
          </View>
          <Text style={styles.tagsText}>
            {branch_name}
            {/* {tags?.join(' • ')} */}
          </Text>
          <View style={styles.deliveryDetailsContainer}>
            <View style={styles.rowAndCenter}>
              <Image
                source={Images.DELIVERY_CHARGE}
                style={styles.deliveryDetailsIcon}
              />
              <Text style={styles.deliveryDetailsText}>Free Delivery</Text>
            </View>
            <View style={styles.rowAndCenter}>
              <Image
                source={Images.DELIVERY_TIME}
                style={styles.deliveryDetailsIcon}
              />
              <Text style={styles.deliveryDetailsText}>
                35 min
                {/* {time} min */}
              </Text>
            </View>
            {/* <View style={styles.rowAndCenter}>
            <Image style={styles.deliveryDetailsIcon} />
            {/* <Text style={styles.deliveryDetailsText}>
              400 meter
              {/* {distance} 
            </Text> 
          </View> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    elevation: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 8,
  },
  posterStyle: {
    width: Display.setWidth(20),
    height: Display.setWidth(20),
    borderRadius: 10,
    margin: 5,
  },
  labelContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deliveryDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginBottom: 5,
  },
  tagsText: {
    fontSize: 11,
    lineHeight: 11 * 1.4,
    color: Colors.DEFAULT_GREY,
    marginBottom: 7,
  },
  deliveryDetailsText: {
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  deliveryDetailsIcon: {
    height: 16,
    width: 16,
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  reviewsText: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
});

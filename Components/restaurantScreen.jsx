import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CategoryListItem} from '../Components/CategoryListItem';
import {FoodCard} from '../Components/FoodCard';
import Colors from '../assets/Styles/Colors';
import Images from '../assets/Styles/Images';
import Separator from '../assets/Styles/Separator';
import Display from '../assets/Styles/Display';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ListHeader = () => (
  <View
    style={{
      flexDirection: 'row',
      flex: 1,
      width: 40,
      justifyContent: 'flex-end',
    }}>
    <View
      style={{
        backgroundColor: Colors.LIGHT_YELLOW,
        width: 20,
        borderTopLeftRadius: 64,
        borderBottomLeftRadius: 64,
      }}
    />
  </View>
);

const ListFooter = () => (
  <View
    style={{
      flexDirection: 'row',
      flex: 1,
      width: 40,
    }}>
    <View
      style={{
        backgroundColor: Colors.LIGHT_YELLOW,
        width: 20,
        borderTopRightRadius: 64,
        borderBottomRightRadius: 64,
      }}
    />
  </View>
);

const RestaurantScreen = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />
      <>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2022/11/10/20/44/switzerland-7583676_1280.jpg"
          }}
          style={styles.backgroundImage}
        />
        <ScrollView>
          <Separator height={Display.setHeight(35)} />
          <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>title</Text>
              <Ionicons
                color={Colors.DEFAULT_YELLOW}
                size={24}
              />
            </View>
            <View style={styles.ratingReviewsContainer}>
              <FontAwesome
                name="star"
                size={18}
                color={Colors.DEFAULT_YELLOW}
              />
              <Text style={styles.ratingText}>4.2</Text>
              <Text style={styles.reviewsText}>455 Reviews</Text>
            </View>
            <View style={styles.deliveryDetailsContainer}>
              <View style={styles.rowAndCenter}>
                <Image
                  style={styles.deliveryDetailIcon}
                  source={Images.DELIVERY_CHARGE}
                />
                <Text style={styles.deliveryDetailText}>Free Delivery</Text>
              </View>
              <View style={styles.rowAndCenter}>
                <Image
                  style={styles.deliveryDetailIcon}
                  source={Images.DELIVERY_TIME}
                />
                <Text style={styles.deliveryDetailText}> 3 min
                </Text>
               
              </View>
              <View style={styles.rowAndCenter}>
                <Image
                  style={styles.deliveryDetailIcon}
                  source={Images.MARKER}
                />
                <Text style={styles.deliveryDetailText}>
                  200 km
                </Text>
              </View>
              <View style={styles.restaurantType}>
                <Text style={styles.restaurantTypeText}>
                  restaurantType
                </Text>
              </View>
            </View>
            <View style={styles.categoriesContainer}>
              <FlatList
                data={restaurant?.categories}
                keyExtractor={item => item}
                horizontal
                ListHeaderComponent={() => <ListHeader />}
                ListFooterComponent={() => <ListFooter />}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <CategoryListItem
                    name={item}
                    isActive={item === selectedCategory}
                    selectCategory={category => setSelectedCategory(category)}
                  />
                )}
              />
            </View>
            <View style={styles.foodList}>
              {restaurant?.foods
                ?.filter(food => food?.category === selectedCategory)
                ?.map(item => (
                  <FoodCard
                    key={item?.id}
                    {...item}
                    navigate={() =>
                      navigation.navigate('Food', {foodId: item?.id})
                    }
                  />
                ))}
              <Separator height={Display.setHeight(2)} />
            </View>
          </View>
        </ScrollView>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    height: Display.setWidth(100),
    width: Display.setWidth(100),
    alignItems: 'center',
    alignSelf:'center',
    alignContent:"center",
    

  },
  mainContainer: {
    backgroundColor: Colors.SECONDARY_WHITE,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    width: Display.setWidth(100),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 15,
  },
  title: {
    fontSize: 23,
    lineHeight: 23 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  tagText: {
    marginHorizontal: 25,
    marginTop: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_GREY,
  },
  ratingReviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 10,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  reviewsText: {
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  deliveryDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  deliveryDetailText: {
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  deliveryDetailIcon: {
    height: 16,
    width: 16,
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantType: {
    backgroundColor: Colors.LIGHT_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
  },
  restaurantTypeText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_YELLOW,
  },
  categoriesContainer: {
    marginVertical: 20,
  },
  foodList: {
    marginHorizontal: 15,
  },
});

export default RestaurantScreen;
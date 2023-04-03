import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// import Colors from '../assets/Styles/Colors';
import { Images } from "../assets/Styles/Images";

const CategoryMenuItem = ({
  name,
  logo,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    // Here it must be one component like this
    // <TouchableOpacity
    //   onPress={() => setActiveCategory(name)}
    //   style={styles.category()}>
    //   <Image
    //     source={Images[logo]}
    //     style={styles.categoryIcon(activeCategory )}
    //   />
    //   <Text style={styles.categoryText(activeCategory === name)}>{name}</Text>
    // </TouchableOpacity>
    ///////////////////////////////////////////////////////////////////////////////////////////////
    <>
      <TouchableOpacity
        onPress={() => {
          setActiveCategory("All"), console.log(activeCategory);
        }}
        style={styles.category()}
      >
        <Image
          source={require("../assets/images/plate.png")}
          // source={Images[logo]}
          style={styles.categoryIcon(activeCategory)}
        />
        <Text style={styles.categoryText(activeCategory)}>
          All
          {/* {name} */}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveCategory("Burger")}
        style={styles.category()}
      >
        <Image
          source={require("../assets/images/burger.png")}
          // source={Images[logo]}
          style={styles.categoryIcon(activeCategory)}
        />
        <Text style={styles.categoryText(activeCategory)}>
          Burger
          {/* {name} */}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setActiveCategory("Sweets")}
        style={styles.category()}
      >
        <Image
          source={require("../assets/images/dessert.png")}
          // source={Images[logo]}
          style={styles.categoryIcon(activeCategory)}
        />
        <Text style={styles.categoryText(activeCategory)}>
          Sweets
          {/* {name} */}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setActiveCategory("Bakery")}
        style={styles.category()}
      >
        <Image
          source={require("../assets/images/berddd.png")}
          // source={Images[logo]}
          style={styles.categoryIcon(activeCategory)}
        />
        <Text style={styles.categoryText(activeCategory)}>
          Bakery
          {/* {name} */}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setActiveCategory("Pizza")}
        style={styles.category()}
      >
        <Image
          source={require("../assets/images/pizza.png")}
          // source={Images[logo]}
          style={styles.categoryIcon(activeCategory)}
        />
        <Text style={styles.categoryText(activeCategory)}>
          Pizza
          {/* {name} */}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  category: (marginTop = 0) => ({
    alignItems: "center",
    marginTop,
  }),
  categoryIcon: (isActive) => ({
    height: 30,
    width: 30,
    opacity: isActive ? 1 : 0.5,
  }),
  categoryText: (isActive) => ({
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: "#fff",
    marginTop: 5,
    opacity: isActive ? 1 : 0.5,
  }),
});

export default CategoryMenuItem;

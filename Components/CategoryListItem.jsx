import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../assets/Styles/Colors';

const CategoryListItem = ({name, isActive, selectCategory}) => {
  return (
    <View style={styles.container}>
      <Text
        style={
          isActive ? styles.activeCategoryText : styles.inActiveCategoryText
        }
        onPress={() => selectCategory(name)}>
        name
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    color: Colors.LIGHT_YELLOW,
  },
  activeCategoryText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  inActiveCategoryText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.INACTIVE_GREY,
  },
});

export default CategoryListItem;

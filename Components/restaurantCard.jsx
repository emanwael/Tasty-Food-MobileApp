import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Colors from '../assets/Styles/Colors';
import Images from '../assets/Styles/Images';
// import Display from '../assets/Styles/Display';

export default function RestaurantCard() {

    // backend
    // const RestaurantCard = ({
    //     id,
    //     name,
    //     images: {poster},
    //     tags,
    //     distance,
    //     time,
    //     navigate,
    //   }) => {
    //     const dispatch = useDispatch();
    //     const isBookmarked = useSelector(
    //       state =>
    //         state?.bookmarkState?.bookmarks?.filter(item => item?.restaurantId === id)
    //           ?.length > 0,
    //     );
    //     const addBookmark = () =>
    //       dispatch(BookmarkAction.addBookmark({restaurantId: id}));
    //     const removeBookmark = () =>
    //       dispatch(BookmarkAction.removeBookmark({restaurantId: id}));


    return (
        <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={() => navigate(id)}>
        <Ionicons
        //   name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
          color={Colors.DEFAULT_YELLOW}
          size={24}
          style={styles.bookmark}
        //   onPress={() => (isBookmarked ? removeBookmark() : addBookmark())}
        />
        <Image
          source={{uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXhhei5qcGc.jpg?s=gayymr-MoZkhATCpk4H6JF11q8zWqNV8pVstYoefMiE'}}
        //   source={{uri: StaticImageService.getPoster(poster)}}
          style={styles.posterStyle}
        />
        <Text style={styles.titleText}>
            macdonals
            {/* {name} */}
            </Text>
        <Text style={styles.tagText}>
            cairo
            {/* {tags?.join(' • ')} */}
            </Text>
        <View style={styles.footerContainer}>
          <View style={styles.rowAndCenter}>
            <FontAwesome name="star" size={14} color={Colors.DEFAULT_YELLOW} />
            <Text style={styles.ratingText}>4</Text>
            <Text style={styles.reviewsText}>({10})</Text>
          </View>
          <View style={styles.rowAndCenter}>
            <View style={styles.timeAndDistanceContainer}>
              <Ionicons
                name="location-outline"
                color={Colors.DEFAULT_YELLOW}
                size={15}
              />
              <Text style={styles.timeAndDistanceText}>
                200m
                {/* {distance} */}
                </Text>
            </View>
            <View style={styles.timeAndDistanceContainer}>
              <Ionicons
                name="ios-time-outline"
                color={Colors.DEFAULT_YELLOW}
                size={15}
              />
              <Text style={styles.timeAndDistanceText}>
                1h
                {/* {time} */}
                </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
        );
    };

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 5,
    },
    posterStyle: {
    width: 1920 * 0.15,
    height: 1080 * 0.15,
    borderRadius: 10,
    margin: 5,
    },
    titleText: {
    marginLeft: 8,
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    },
    tagText: {
    marginLeft: 8,
    fontSize: 11,
    lineHeight: 11 * 1.4,
    color: Colors.DEFAULT_GREY,
    marginBottom: 5,
    },
    footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 6,
    justifyContent: 'space-between',
    },
    rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    timeAndDistanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: Colors.LIGHT_YELLOW,
    borderRadius: 12,
    marginHorizontal: 3,
    },
    timeAndDistanceText: {
    fontSize: 10,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_YELLOW,
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
    bookmark: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    },
});
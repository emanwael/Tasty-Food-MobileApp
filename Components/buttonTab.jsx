import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './homeScreen'
import CartScreen from './CartScreen'
import Colors from '../assets/Styles/Colors';
import Display from '../assets/Styles/Display';
import AccountScreen from './accountScreen';
export default function BottonTab() {
    const BottomTabs = createBottomTabNavigator();

    return (
        <>
            <BottomTabs.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        position: 'absolute',
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        height: Display.setHeight(8),
                        backgroundColor: Colors.DEFAULT_WHITE,
                        borderTopWidth: 0,
                    },
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: Colors.DEFAULT_GREEN,
                    tabBarInactiveTintColor: Colors.INACTIVE_GREY,
                }}
                op>
                <BottomTabs.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={23} color={color} />
                        ),
                    }}
                />

                <BottomTabs.Screen
                    name="CartScreen"
                    component={CartScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="cart-outline" size={23} color={color} />
                        ),
                    }}
                />
                <BottomTabs.Screen
                    name="AccountScreen"
                    component={AccountScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="person-outline" size={23} color={color} />
                        ),
                    }}
                />
            </BottomTabs.Navigator>


        </>



    )
}

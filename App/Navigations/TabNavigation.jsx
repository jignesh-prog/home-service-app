import { View, Text,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen/HomeScreen"
import BookingScreen from "../Screens/BookingScreen/BookingScreen"
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen"
import React from 'react'

import { FontAwesome } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:"blue",headerShown:false,}}>
    <Tab.Screen options={{tabBarIcon:({color,size}) => (<FontAwesome name="home" size={24} color={color} />)}} name="Home" component={HomeScreen} />
    <Tab.Screen options={{tabBarIcon:({color,size}) => (<FontAwesome name="user-circle-o" size={24} color={color} />)}} name="Profile" component={ProfileScreen} />
    <Tab.Screen options={{tabBarIcon:({color,size}) => (<FontAwesome name="bookmark" size={24} color={color} />)}} name="Booking" component={BookingScreen} />
  </Tab.Navigator>
 
  )
}
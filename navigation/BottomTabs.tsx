import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "~/screens/home/HomeScreen";
import MessagesScreen from "~/screens/MessagesScreen";
import ProfileScreen from "~/screens/profile/ProfileScreen";

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

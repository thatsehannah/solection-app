import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React, { ComponentProps } from "react";
import { View } from "react-native";

const TabIcon = ({
  name,
  focused,
}: {
  name: ComponentProps<typeof MaterialIcons>["name"];
  focused: boolean;
}) => (
  <View>
    <MaterialIcons
      name={name}
      size={24}
      className={focused ? "text-primary" : "text-gray-400"}
    />
  </View>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name='home'
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name='shelves'
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name='person'
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

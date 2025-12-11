import { ThemeName, useTheme } from "@/components/providers/ThemeProvider";
import { colorways } from "@/constants/colorways";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React, { ComponentProps } from "react";
import { Text, View } from "react-native";

const TabIcon = ({
  name,
  focused,
  theme,
  title,
}: {
  name: ComponentProps<typeof MaterialIcons>["name"];
  focused: boolean;
  theme: ThemeName;
  title: string;
}) => (
  <View className='flex-1 mt-3 flex flex-col items-center'>
    <MaterialIcons
      name={name}
      size={24}
      color={focused ? colorways[theme].primary : colorways[theme].secondary}
    />
    <Text
      className={`${focused ? `text-[${colorways[theme].primary}]` : `text-[${colorways[theme].secondary}]`} text-sm w-full text-center mt-1 font-league`}
    >
      {title}
    </Text>
  </View>
);

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colorways[theme].background,
          position: "absolute",
          minHeight: 50,
        },
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
              theme={theme}
              title='Home'
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
              theme={theme}
              title='Explore'
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
              theme={theme}
              title='Profile'
            />
          ),
        }}
      />
    </Tabs>
  );
}

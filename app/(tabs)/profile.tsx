import { useTheme } from "@/components/providers/ThemeProvider";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const { setTheme } = useTheme();

  return (
    <SafeAreaView className='bg-background h-screen'>
      <Text className='text-2xl text-secondary-foreground bg-secondary text-center rounded-md p-3 font-league'>
        Profile Screen
      </Text>
      <TouchableOpacity
        onPress={() => setTheme("neon")}
        className='bg-primary mt-3 w-32 p-5 rounded-lg flex justify-center items-center'
      >
        <Text className='text-primary-foreground font-league-bold'>Button</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

import { useTheme } from "@/components/providers/ThemeProvider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { theme, setTheme } = useTheme();
  const [favorite, setFavorite] = useState(false);

  return (
    <SafeAreaView className='bg-background h-screen px-4'>
      <View className='flex flex-row justify-between items-center mb-3'>
        <TouchableOpacity
          onPress={() => setFavorite(!favorite)}
          className='bg-primary w-28 p-5 flex justify-center items-center rounded-md'
        >
          <Text className='text-primary-foreground'>Favorite</Text>
        </TouchableOpacity>
        {favorite ? (
          <MaterialIcons
            name='favorite'
            size={32}
            color={"red"}
          />
        ) : (
          <MaterialIcons
            name='favorite-outline'
            size={32}
          />
        )}
      </View>
      <Text className='text-2xl text-secondary-foreground bg-secondary text-center rounded-md p-3 font-league'>
        Home Screen
      </Text>
      <TouchableOpacity
        onPress={() => setTheme("default")}
        className='bg-primary mt-3 w-32 p-5 rounded-lg flex justify-center items-center'
      >
        <Text className='text-primary-foreground font-league-bold'>Button</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

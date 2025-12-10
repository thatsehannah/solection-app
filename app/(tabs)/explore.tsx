import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView className='bg-primary h-screen'>
      <Text className='text-2xl text-primary-foreground border-2 border-secondary text-center rounded-md p-3'>
        Explore Screen
      </Text>
    </SafeAreaView>
  );
}

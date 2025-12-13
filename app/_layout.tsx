import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "LeagueSpartan-Black": require("../assets/fonts/LeagueSpartan-Black.ttf"),
    "LeagueSpartan-Bold": require("../assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueSpartan-ExtraBold": require("../assets/fonts/LeagueSpartan-ExtraBold.ttf"),
    "LeagueSpartan-ExtraLight": require("../assets/fonts/LeagueSpartan-ExtraLight.ttf"),
    "LeagueSpartan-Light": require("../assets/fonts/LeagueSpartan-Light.ttf"),
    "LeagueSpartan-Medium": require("../assets/fonts/LeagueSpartan-Medium.ttf"),
    "LeagueSpartan-Regular": require("../assets/fonts/LeagueSpartan-Regular.ttf"),
    "LeagueSpartan-SemiBoldThin": require("../assets/fonts/LeagueSpartan-SemiBold.ttf"),
    "LeagueSpartan-Thin": require("../assets/fonts/LeagueSpartan-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}

import { colorways } from "@/constants/colorways";
import { vars } from "nativewind";
import { createContext, ReactNode, useContext, useState } from "react";
import { View } from "react-native";

const colorwayThemes = {
  default: vars({
    "--color-background": colorways.default.background,
    "--color-primary": colorways.default.primary,
    "--color-secondary": colorways.default.secondary,
    "--color-primary-foreground": colorways.default.primaryForeground,
    "--color-secondary-foreground": colorways.default.secondaryForeground,
  }),
  chicago: vars({
    "--color-background": colorways.chicago.background,
    "--color-primary": colorways.chicago.primary,
    "--color-secondary": colorways.chicago.secondary,
    "--color-primary-foreground": colorways.chicago.primaryForeground,
    "--color-secondary-foreground": colorways.chicago.secondaryForeground,
  }),
  royal: vars({
    "--color-background": colorways.royal.background,
    "--color-primary": colorways.royal.primary,
    "--color-secondary": colorways.royal.secondary,
    "--color-primary-foreground": colorways.royal.primaryForeground,
    "--color-secondary-foreground": colorways.royal.secondaryForeground,
  }),
  neon: vars({
    "--color-background": colorways.neon.background,
    "--color-primary": colorways.neon.primary,
    "--color-secondary": colorways.neon.secondary,
    "--color-primary-foreground": colorways.neon.primaryForeground,
    "--color-secondary-foreground": colorways.neon.secondaryForeground,
  }),
};

export type ThemeName = keyof typeof colorwayThemes;

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  availableThemes: ThemeName[];
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "default",
  setTheme: () => {},
  availableThemes: [],
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorTheme, setColorwayTheme] = useState<ThemeName>("default");
  const [isLoaded, setisLoaded] = useState(false);

  const setTheme = (newTheme: ThemeName) => {
    setColorwayTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: colorTheme,
        setTheme,
        availableThemes: Object.keys(colorwayThemes) as ThemeName[],
      }}
    >
      <View
        style={colorwayThemes[colorTheme]}
        className='flex-1'
      >
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

import { vars } from "nativewind";
import { createContext, ReactNode, useContext, useState } from "react";
import { View } from "react-native";

const colorwayThemes = {
  default: vars({
    "--color-background": "#4c4b3b",
    "--color-primary": "#f76506",
    "--color-secondary": "#d6cfbe",
    "--color-primary-foreground": "#f5f5f5",
    "--color-secondary-foreground": "#141414",
  }),
  chicago: vars({
    "--color-background": "#242424",
    "--color-primary": "#c41e3a",
    "--color-secondary": "#f5f5f5",
    "--color-primary-foreground": "#f5f5f5",
    "--color-secondary-foreground": "#141414",
  }),
  royal: vars({
    "--color-background": "#242424",
    "--color-primary": "#2256cd",
    "--color-secondary": "#f5f5f5",
    "--color-primary-foreground": "#f5f5f5",
    "--color-secondary-foreground": "#141414",
  }),
  neon: vars({
    "--color-background": "#89898d",
    "--color-primary": "#ADFF1A",
    "--color-secondary": "#141414",
    "--color-primary-foreground": "#141414",
    "--color-secondary-foreground": "#f5f5f5",
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

import React, { createContext, useContext, useState } from "react";

type ThemeProps = {
  isLightTheme: boolean;
  changeTheme: () => void;
};

export const ThemeContextCustom = createContext<ThemeProps>({
  isLightTheme: true,
  changeTheme: () => {},
});

export const ThemeProviderCustom: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  const changeTheme = () => {
    setIsLightTheme((oldTheme) => !oldTheme);
  };

  return (
    <ThemeContextCustom.Provider value={{ isLightTheme, changeTheme }}>
      {children}
    </ThemeContextCustom.Provider>
  );
};

export const useThemeCustom = () => useContext(ThemeContextCustom);

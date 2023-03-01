import React, {createContext, useState, useEffect} from 'react';
import {Appearance} from 'react-native';

type ThemeType = {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
};

type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

const lightTheme: ThemeType = {
  backgroundColor: '#ffffff',
  textColor: '#42494D',
  borderColor: '#cccccc',
};

const darkTheme: ThemeType = {
  backgroundColor: '#000000',
  textColor: '#ffffff',
  borderColor: '#999999',
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
    });

    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

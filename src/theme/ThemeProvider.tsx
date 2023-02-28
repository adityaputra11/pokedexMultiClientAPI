import React, {createContext, useState} from 'react';

type ThemeType = {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
};

type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

const defaultTheme: ThemeType = {
  backgroundColor: '#ffffff',
  textColor: '#000000',
  borderColor: '#cccccc',
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

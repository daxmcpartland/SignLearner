import React, { useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(Appearance.getColorScheme() === 'dark');

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setDarkMode(colorScheme === 'dark');
    });

    return () => {
      subscription.remove();
    };
  }, []);


  return (
    <ThemeContext.Provider value={darkMode}>
      {/* We can remove the ThemeUpdateContext.Provider since we don't need the toggleTheme function anymore */}
      {children}
    </ThemeContext.Provider>
  );
}

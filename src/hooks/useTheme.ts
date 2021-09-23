import { useEffect, useState } from 'react';

import { lightTheme, darkTheme } from '../theme';
import { DefaultTheme } from 'styled-components';

const useTheme = (): [DefaultTheme, React.MouseEventHandler<HTMLDivElement>, boolean] => {
  const [theme, setTheme] = useState(lightTheme);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = (): void => {
    const newTheme = isDarkTheme ? lightTheme : darkTheme;
    setTheme(newTheme);
    setIsDarkTheme((prevValue) => !prevValue);
  };
  
  useEffect(() => {
    toggleTheme();
  }, []);

  return [theme, toggleTheme, isDarkTheme];
};

export { useTheme };

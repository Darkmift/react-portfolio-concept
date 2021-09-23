import { useEffect, useState } from 'react';

import { lightTheme, darkTheme } from '../theme';
import { DefaultTheme } from 'styled-components';

const useTheme = (): [DefaultTheme, React.MouseEventHandler<HTMLDivElement>, boolean] => {
  const [theme, setTheme] = useState(lightTheme);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = (): void => {
    setIsDarkTheme((prevValue) => !prevValue);
  };

  useEffect(() => {
    const newTheme = isDarkTheme ? lightTheme : darkTheme;
    setTheme(newTheme);
  }, [isDarkTheme]);

  return [theme, toggleTheme, isDarkTheme];
};

export { useTheme };

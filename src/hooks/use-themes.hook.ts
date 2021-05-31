import { useState, useEffect } from 'react';
import { THEME_CFG } from '../constants/themes.constant';

export default function useThemes() {
  const defaultTheme =
    localStorage.getItem(THEME_CFG.storage) || THEME_CFG.light;

  const [theme, setTheme] = useState(defaultTheme);

  function setMode(mode: string) {
    localStorage.setItem(THEME_CFG.storage, mode);
    setTheme(mode);
  }

  function toggleTheme() {
    theme === THEME_CFG.light
      ? setMode(THEME_CFG.dark)
      : setMode(THEME_CFG.light);
  }

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_CFG.storage);
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
}

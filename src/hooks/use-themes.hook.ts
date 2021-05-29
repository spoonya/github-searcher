import { useState, useEffect } from 'react';
import { THEME_CFG } from '../constants/themes.constant';

export default function useThemes() {
  const [theme, setTheme] = useState(THEME_CFG.light);

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

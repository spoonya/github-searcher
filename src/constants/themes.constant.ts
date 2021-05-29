import TTheme, { TThemeCfg } from '../types/theme.type';

export const THEME_LIGHT: TTheme = {
  alpha: '#0064eb',
  beta: '#fff',
  gamma: '#000',
  psi: '#e5e5e5',
  omega: '#808080',
  link: '#0064eb',
  pagLinkActive: '#fff',
};

export const THEME_DARK: TTheme = {
  alpha: '#2d333b',
  beta: '#383e46',
  gamma: '#cfcfcf',
  psi: '#22272e',
  omega: '#808080',
  link: '#aaa',
  pagLinkActive: '#ccc',
};

export const THEME_CFG: TThemeCfg = {
  light: 'light',
  dark: 'dark',
  storage: 'ghSearcher-theme',
};

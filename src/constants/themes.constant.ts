import Theme, { ThemeCfg } from '../types/theme.type';

const THEME_LIGHT: Theme = {
  alpha: '#0064eb',
  beta: '#fff',
  gamma: '#000',
  psi: '#e5e5e5',
  omega: '#808080',
  link: '#0064eb',
  pagLinkActive: '#fff',
};

const THEME_DARK: Theme = {
  alpha: '#2d333b',
  beta: '#383e46',
  gamma: '#cfcfcf',
  psi: '#22272e',
  omega: '#808080',
  link: '#aaa',
  pagLinkActive: '#ccc',
};

const THEME_CFG: ThemeCfg = {
  light: 'light',
  dark: 'dark',
  storage: 'ghSearcher-theme',
};

export { THEME_LIGHT, THEME_DARK, THEME_CFG };

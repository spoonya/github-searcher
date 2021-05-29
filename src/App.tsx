import { createContext } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './global-styles';
import * as ROUTES from './constants/routes.constant';
import {
  THEME_LIGHT,
  THEME_DARK,
  THEME_CFG,
} from './constants/themes.constant';
import { Browse } from './pages';
import { useThemes } from './hooks';

export const ThemesContext = createContext<any>(null);

function App() {
  const [theme, toggleTheme] = useThemes();

  const themeMode = theme === THEME_CFG.light ? THEME_LIGHT : THEME_DARK;

  return (
    <ThemesContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Route path={ROUTES.BROWSE} component={Browse} exact />
      </ThemeProvider>
    </ThemesContext.Provider>
  );
}

export default App;

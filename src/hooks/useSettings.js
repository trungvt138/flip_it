import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { getColors } from '../theme/colors';
import { getStrings } from '../i18n/strings';

const AppSettingsContext = createContext();

export function AppSettingsProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const colors = useMemo(() => getColors(theme), [theme]);
  const t = useMemo(() => getStrings(language), [language]);

  const value = useMemo(
    () => ({ theme, toggleTheme, colors, language, setLanguage, t }),
    [theme, toggleTheme, colors, language, t]
  );

  return (
    <AppSettingsContext.Provider value={value}>
      {children}
    </AppSettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(AppSettingsContext);
}

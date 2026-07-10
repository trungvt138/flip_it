import { createContext, useContext, useState } from 'react';
import { getColors } from '../theme/colors';
import { getStrings } from '../i18n/strings';

const MINUTES_PER_CARD = 0.5;
const DEFAULT_DAILY_GOAL_MINUTES = 20;

const AppSettingsContext = createContext();

function todayKey() {
  return new Date().toDateString();
}

export function AppSettingsProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [dailyGoalMinutes, setDailyGoalMinutes] = useState(DEFAULT_DAILY_GOAL_MINUTES);
  const [cardsStudiedToday, setCardsStudiedToday] = useState(0);
  const [studyDate, setStudyDate] = useState(todayKey());

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  function recordCardStudied() {
    const key = todayKey();
    if (key !== studyDate) {
      setStudyDate(key);
      setCardsStudiedToday(1);
    } else {
      setCardsStudiedToday((prev) => prev + 1);
    }
  }

  const minutesStudiedToday = cardsStudiedToday * MINUTES_PER_CARD;
  const goalProgress = dailyGoalMinutes > 0 ? Math.min(1, minutesStudiedToday / dailyGoalMinutes) : 0;

  const value = {
    theme,
    toggleTheme,
    colors: getColors(theme),
    language,
    setLanguage,
    t: getStrings(language),
    dailyGoalMinutes,
    setDailyGoalMinutes,
    cardsStudiedToday,
    recordCardStudied,
    minutesStudiedToday,
    goalProgress,
  };

  return (
    <AppSettingsContext.Provider value={value}>
      {children}
    </AppSettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(AppSettingsContext);
}

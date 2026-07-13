import { createContext, useContext, useState, useMemo, useCallback, useRef } from 'react';

const MINUTES_PER_CARD = 0.5;
const DEFAULT_DAILY_GOAL_MINUTES = 20;

const GoalContext = createContext();

function todayKey() {
  return new Date().toDateString();
}

// Split out from useSettings: dailyGoalMinutes/cardsStudiedToday change on
// every card reviewed in Practice, while theme/language change rarely. Since
// all 4 tabs stay mounted (Bottom Tab Navigator), keeping this in its own
// context means only screens that actually read goal state re-render when a
// card is studied, instead of every consumer of useSettings() app-wide.
export function GoalProvider({ children }) {
  const [dailyGoalMinutes, setDailyGoalMinutes] = useState(DEFAULT_DAILY_GOAL_MINUTES);
  const [cardsStudiedToday, setCardsStudiedToday] = useState(0);
  const studyDateRef = useRef(todayKey());

  const recordCardStudied = useCallback(() => {
    const key = todayKey();
    if (key !== studyDateRef.current) {
      studyDateRef.current = key;
      setCardsStudiedToday(1);
    } else {
      setCardsStudiedToday((prev) => prev + 1);
    }
  }, []);

  const minutesStudiedToday = cardsStudiedToday * MINUTES_PER_CARD;
  const goalProgress = dailyGoalMinutes > 0 ? Math.min(1, minutesStudiedToday / dailyGoalMinutes) : 0;

  const value = useMemo(
    () => ({
      dailyGoalMinutes,
      setDailyGoalMinutes,
      cardsStudiedToday,
      recordCardStudied,
      minutesStudiedToday,
      goalProgress,
    }),
    [dailyGoalMinutes, cardsStudiedToday, recordCardStudied, minutesStudiedToday, goalProgress]
  );

  return (
    <GoalContext.Provider value={value}>
      {children}
    </GoalContext.Provider>
  );
}

export function useGoal() {
  return useContext(GoalContext);
}

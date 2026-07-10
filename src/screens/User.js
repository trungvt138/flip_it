import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../components/Navbar";
import HorizontalRuler from "../components/HorizontalRuler";
import { useSettings } from "../hooks/useSettings";

const GOAL_STEP = 5;
const MIN_GOAL = 5;
const MAX_GOAL = 180;

export default function User() {
  const { theme, toggleTheme, language, setLanguage, t, colors, dailyGoalMinutes, setDailyGoalMinutes } = useSettings();

  function adjustGoal(delta) {
    setDailyGoalMinutes((prev) => Math.min(MAX_GOAL, Math.max(MIN_GOAL, prev + delta)));
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.content}>
          <View style={styles.head}>
            <Text style={[styles.screenTitle, { color: colors.text }]}>{t.settingsTitle}</Text>
          </View>
          <HorizontalRuler />

          <View style={styles.body}>
            <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>{t.appearance}</Text>
            <View style={styles.rowGroup}>
              <TouchableOpacity
                style={[
                  styles.optionPill,
                  { borderColor: colors.border, backgroundColor: colors.surface },
                  theme === 'light' && { backgroundColor: colors.primary, borderColor: colors.primary },
                ]}
                onPress={() => theme !== 'light' && toggleTheme()}
              >
                <Ionicons name="sunny-outline" size={18} color={theme === 'light' ? '#fff' : colors.text} />
                <Text style={[styles.optionText, { color: theme === 'light' ? '#fff' : colors.text }]}>{t.light}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionPill,
                  { borderColor: colors.border, backgroundColor: colors.surface },
                  theme === 'dark' && { backgroundColor: colors.primary, borderColor: colors.primary },
                ]}
                onPress={() => theme !== 'dark' && toggleTheme()}
              >
                <Ionicons name="moon-outline" size={18} color={theme === 'dark' ? '#fff' : colors.text} />
                <Text style={[styles.optionText, { color: theme === 'dark' ? '#fff' : colors.text }]}>{t.dark}</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.sectionLabel, { color: colors.textSecondary, marginTop: 28 }]}>{t.language}</Text>
            <View style={styles.rowGroup}>
              <TouchableOpacity
                style={[
                  styles.optionPill,
                  { borderColor: colors.border, backgroundColor: colors.surface },
                  language === 'en' && { backgroundColor: colors.primary, borderColor: colors.primary },
                ]}
                onPress={() => setLanguage('en')}
              >
                <Text style={[styles.optionText, { color: language === 'en' ? '#fff' : colors.text }]}>English</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionPill,
                  { borderColor: colors.border, backgroundColor: colors.surface },
                  language === 'de' && { backgroundColor: colors.primary, borderColor: colors.primary },
                ]}
                onPress={() => setLanguage('de')}
              >
                <Text style={[styles.optionText, { color: language === 'de' ? '#fff' : colors.text }]}>Deutsch</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.sectionLabel, { color: colors.textSecondary, marginTop: 28 }]}>{t.dailyGoalSetting}</Text>
            <View style={[styles.stepper, { borderColor: colors.border, backgroundColor: colors.surface }]}>
              <TouchableOpacity style={styles.stepperButton} onPress={() => adjustGoal(-GOAL_STEP)}>
                <Ionicons name="remove" size={20} color={colors.primary} />
              </TouchableOpacity>
              <Text style={[styles.stepperValue, { color: colors.text }]}>{dailyGoalMinutes} {t.minutesShort}</Text>
              <TouchableOpacity style={styles.stepperButton} onPress={() => adjustGoal(GOAL_STEP)}>
                <Ionicons name="add" size={20} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Navbar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  head: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  screenTitle: {
    fontSize: 24,
  },
  body: {
    width: "100%",
    paddingTop: 24,
    paddingHorizontal: 30,
    alignItems: "stretch",
  },
  sectionLabel: {
    fontSize: 13,
    marginBottom: 10,
  },
  rowGroup: {
    flexDirection: "row",
    gap: 12,
  },
  optionPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "600",
  },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 14,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  stepperButton: {
    padding: 6,
  },
  stepperValue: {
    fontSize: 16,
    fontWeight: "600",
  },
});

import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSettings } from "../hooks/useSettings";
import { useGoal } from "../hooks/useGoal";

const MILESTONES = [0.25, 0.5, 0.75, 1];

export default function DailyGoalCard() {
  const { t, colors } = useSettings();
  const { dailyGoalMinutes, minutesStudiedToday, goalProgress } = useGoal();
  const reached = goalProgress >= 1;

  const fillAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const bounceAnim = useRef(new Animated.Value(1)).current;
  const wasReached = useRef(false);

  useEffect(() => {
    Animated.timing(fillAnim, {
      toValue: goalProgress,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [goalProgress]);

  useEffect(() => {
    if (reached) return;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.15, duration: 700, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 700, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [reached]);

  useEffect(() => {
    if (reached && !wasReached.current) {
      wasReached.current = true;
      Animated.sequence([
        Animated.spring(bounceAnim, { toValue: 1.35, friction: 3, useNativeDriver: true }),
        Animated.spring(bounceAnim, { toValue: 1, friction: 4, useNativeDriver: true }),
      ]).start();
    }
    if (!reached) {
      wasReached.current = false;
    }
  }, [reached]);

  const fillWidth = fillAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const barColor = reached ? colors.success : colors.primary;

  let message = t.goalMessageStart;
  if (reached) message = t.goalReached;
  else if (goalProgress >= 0.5) message = t.goalMessageAlmost;
  else if (goalProgress > 0) message = t.goalMessageEarly;

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={styles.headerRow}>
        <Animated.View
          style={[
            styles.iconBadge,
            { backgroundColor: reached ? colors.success : colors.primary },
            { transform: [{ scale: Animated.multiply(pulseAnim, bounceAnim) }] },
          ]}
        >
          <Ionicons name={reached ? 'trophy' : 'flame'} size={18} color="#fff" />
        </Animated.View>

        <View style={styles.headerText}>
          <Text style={[styles.title, { color: colors.text }]}>{t.dailyGoal}</Text>
          <Text style={[styles.message, { color: colors.textSecondary }]} numberOfLines={1}>{message}</Text>
        </View>

        <Text style={[styles.fraction, { color: barColor }]}>
          {Math.min(minutesStudiedToday, dailyGoalMinutes)}/{dailyGoalMinutes} {t.minutesShort}
        </Text>
      </View>

      <View style={styles.trackWrapper}>
        <View style={[styles.track, { backgroundColor: colors.card }]}>
          <Animated.View style={[styles.fill, { width: fillWidth, backgroundColor: barColor }]} />
        </View>
        {MILESTONES.map((m) => {
          const hit = goalProgress >= m;
          return (
            <View
              key={m}
              style={[
                styles.milestone,
                {
                  left: `${m * 100}%`,
                  backgroundColor: hit ? barColor : colors.surface,
                  borderColor: hit ? barColor : colors.border,
                },
              ]}
            >
              {hit && <Ionicons name="checkmark" size={9} color="#fff" />}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerText: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
  },
  message: {
    fontSize: 12,
    marginTop: 2,
  },
  fraction: {
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 8,
  },
  trackWrapper: {
    marginTop: 16,
    height: 10,
    justifyContent: 'center',
  },
  track: {
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 5,
  },
  milestone: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    marginLeft: -8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

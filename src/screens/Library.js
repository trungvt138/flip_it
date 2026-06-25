import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Animated } from "react-native";
import { useRef, useState, useMemo, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import TextBox from "../components/TextBox";
import HorizontalRuler from "../components/HorizontalRuler";
import Navbar from "../components/Navbar";
import LearningBox from "../components/LearningBox";
import { useLearningBoxes } from "../hooks/useLearningBoxes";

const SORT_OPTIONS = [
  { id: 'newest', label: 'Newest first',     icon: 'arrow-down-outline' },
  { id: 'oldest', label: 'Oldest first',     icon: 'arrow-up-outline'   },
  { id: 'az',     label: 'A → Z',            icon: 'text-outline'       },
  { id: 'za',     label: 'Z → A',            icon: 'text-outline'       },
  { id: 'recent', label: 'Recently opened',  icon: 'eye-outline'        },
];

export default function Library() {
  const { learningBoxes, deleteLearningBox, markOpened } = useLearningBoxes();
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [sortOpen, setSortOpen] = useState(false);

  const panelAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(panelAnim, {
      toValue: sortOpen ? 1 : 0,
      useNativeDriver: true,
      tension: 65,
      friction: 10,
    }).start();
  }, [sortOpen]);

  const panelStyle = {
    opacity: panelAnim,
    transform: [{ translateY: panelAnim.interpolate({ inputRange: [0, 1], outputRange: [-8, 0] }) }],
  };

  const displayedBoxes = useMemo(() => {
    let result = learningBoxes.map((box, i) => ({ ...box, _origIndex: i }));

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(b => b.name.toLowerCase().includes(q));
    }

    switch (sortBy) {
      case 'newest': result = [...result].reverse(); break;
      case 'oldest': break;
      case 'az':     result = [...result].sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'za':     result = [...result].sort((a, b) => b.name.localeCompare(a.name)); break;
      case 'recent': result = [...result].sort((a, b) => (b.lastOpenedAt ?? 0) - (a.lastOpenedAt ?? 0)); break;
    }

    return result;
  }, [learningBoxes, query, sortBy]);

  const activeLabel = SORT_OPTIONS.find(o => o.id === sortBy)?.label ?? '';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>

          <View style={styles.searchRow}>
            <TextBox
              style={styles.textBox}
              placeholder="Search..."
              value={query}
              onChangeText={setQuery}
              onFilterPress={() => setSortOpen(o => !o)}
              filterActive={sortBy !== 'newest'}
            />

            {sortOpen && (
              <Animated.View style={[styles.sortPanel, panelStyle]}>
                {SORT_OPTIONS.map(opt => (
                  <TouchableOpacity
                    key={opt.id}
                    style={styles.sortOption}
                    onPress={() => { setSortBy(opt.id); setSortOpen(false); }}
                  >
                    <Ionicons name={opt.icon} size={16} color={sortBy === opt.id ? '#c4b5fd' : 'rgba(255,255,255,0.6)'} />
                    <Text style={[styles.sortLabel, sortBy === opt.id && styles.sortLabelActive]}>
                      {opt.label}
                    </Text>
                    {sortBy === opt.id && (
                      <Ionicons name="checkmark" size={16} color="#c4b5fd" style={styles.checkmark} />
                    )}
                  </TouchableOpacity>
                ))}
              </Animated.View>
            )}
          </View>

          <HorizontalRuler />

          <Text style={styles.sortText}>{activeLabel}</Text>

          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{ alignItems: "center", gap: 38, paddingVertical: 8 }}
            keyboardShouldPersistTaps="handled"
          >
            {displayedBoxes.length === 0 ? (
              <Text style={styles.emptyText}>No sets found</Text>
            ) : (
              displayedBoxes.map(box => (
                <LearningBox
                  key={box._origIndex}
                  index={box._origIndex}
                  name={box.name}
                  date={box.date}
                  cardCount={box.cardCount}
                  cards={box.cards}
                  onDelete={() => deleteLearningBox(box._origIndex)}
                  onOpen={() => markOpened(box._origIndex)}
                />
              ))
            )}
          </ScrollView>

        </View>
        <Navbar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 8,
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  searchRow: {
    width: '100%',
    paddingHorizontal: 20,
    zIndex: 10,
  },
  textBox: {},
  sortPanel: {
    position: 'absolute',
    top: 42,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.82)',
    borderRadius: 10,
    overflow: 'hidden',
    minWidth: 170,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  sortOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 12,
    gap: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.12)',
  },
  sortLabel: {
    flex: 1,
    fontSize: 13,
    color: '#fff',
  },
  sortLabelActive: {
    color: '#c4b5fd',
    fontWeight: '600',
  },
  checkmark: {
    marginLeft: 'auto',
  },
  sortText: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-start',
    marginLeft: 22,
    marginTop: 10,
    marginBottom: 6,
  },
  emptyText: {
    marginTop: 60,
    fontSize: 14,
    color: '#aaa',
  },
});

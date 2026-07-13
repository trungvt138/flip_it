import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import ProgressBar from "../components/ProgressBar";
import LCard from "../components/LCard";
import { useNavigation } from "@react-navigation/native";
import useProgressBar from "../hooks/useProgressBar";
import { usePracticeSession } from "../hooks/usePracticeSession";
import { useSettings } from "../hooks/useSettings";
import { useGoal } from "../hooks/useGoal";

export default function Practice({ route }) {
  const navigation = useNavigation();
  const { progress, incrementProgress } = useProgressBar();
  const { easy, repeat, repeatCards, markEasy, markRepeat } = usePracticeSession();
  const { colors } = useSettings();
  const { recordCardStudied } = useGoal();
  const { cards = [], name = "" } = route.params || {};
  const currentCard = cards[progress] || {};

  function handleEasy() {
    const newEasy = easy + 1;
    markEasy();
    recordCardStudied();
    if (progress < cards.length - 1) {
      incrementProgress();
    } else {
      navigation.navigate('SessionComplete', { easy: newEasy, repeat, repeatCards, cards, name });
    }
  }

  function handleRepeat() {
    const newRepeat = repeat + 1;
    const newRepeatCards = [...repeatCards, currentCard];
    markRepeat(currentCard);
    recordCardStudied();
    if (progress < cards.length - 1) {
      incrementProgress();
    } else {
      navigation.navigate('SessionComplete', { easy, repeat: newRepeat, repeatCards: newRepeatCards, cards, name });
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.head}>
          <Text style={[styles.screenTitle, { color: colors.text }]}>{name}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Image source={require("../../assets/x.png")} />
          </TouchableOpacity>
        </View>

        <ProgressBar progress={progress + 1} cardCount={cards.length} />

        <LCard front={currentCard.front} back={currentCard.back} onEasy={handleEasy} onRepeat={handleRepeat} />
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
  head: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  screenTitle: {
    fontSize: 24,
    textAlign: "center",
    flex: 1,
    maxWidth: "90%",
  },
  closeButton: {},
});

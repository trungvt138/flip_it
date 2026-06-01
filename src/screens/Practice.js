import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import ProgressBar from "../components/ProgressBar";
import LCard from "../components/LCard";
import { useNavigation } from "@react-navigation/native";
import useProgressBar from "../hooks/useProgressBar";
import { usePracticeSession } from "../hooks/usePracticeSession";

export default function Practice({ route }) {
  const navigation = useNavigation();
  const { progress, incrementProgress } = useProgressBar();
  const { easy, repeat, repeatCards, markEasy, markRepeat } = usePracticeSession();
  const { cards = [], name = "" } = route.params || {};
  const currentCard = cards[progress] || {};

  function handleEasy() {
    const newEasy = easy + 1;
    markEasy();
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
    if (progress < cards.length - 1) {
      incrementProgress();
    } else {
      navigation.navigate('SessionComplete', { easy, repeat: newRepeat, repeatCards: newRepeatCards, cards, name });
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.screenTitle}>{name}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Image source={require("../../assets/X.png")} />
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
    backgroundColor: "#fff",
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
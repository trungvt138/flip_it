import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import ProgressBar from "../components/ProgressBar";
import LCard from "../components/LCard";
import { useNavigation } from "@react-navigation/native";
import useProgressBar from "../hooks/useProgressBar";

export default function Practice({ route }) {
  const navigation = useNavigation();
  const { progress, incrementProgress } = useProgressBar();
  const { cards = [], name = "" } = route.params || {};
  const currentCard = cards[progress] || {};

  function handleNext() {
    if (progress < cards.length - 1) {
        incrementProgress();
    } else {
        navigation.goBack();
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

        <LCard front={currentCard.front} back={currentCard.back} onNext={handleNext} />
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
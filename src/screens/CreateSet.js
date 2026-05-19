import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
import HorizontalRuler from "../components/HorizontalRuler";
import LabeledInput from "../components/LabeledInput";
import Card from "../components/Card";
import { useCards } from "../hooks/useCards";
import { useText } from "../hooks/useText";
import { useNavigation } from "@react-navigation/native";

export default function CreateSet() {
  const { cards, addCard, deleteCard, updateCard } = useCards();
  const { text, handleChange } = useText();
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.head}>
            <TouchableOpacity>
              <Image source={require("../../assets/trash.png")} />
            </TouchableOpacity>
            <Text style={styles.screenTitle}>Create New Set</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate("Library", { name: text, date: new Date().toLocaleDateString(), cardCount: cards.length, cards: cards })
             }}>
              <Image source={require("../../assets/check.png")} />
            </TouchableOpacity>
          </View>
          <HorizontalRuler />

          <View style={styles.body}>
            <LabeledInput label={"Set Name:"} style={styles.labeledInput} onChangeText={handleChange} />

            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={{ gap: 40 }}
            >
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    index={index}
                    front={{ value: card.front }, {handleChange: (text) => updateCard(index, text, "front") }}
                    back={{ value: card.back }, {handleChange: (text) => updateCard(index, text, "back") }}
                    onDelete={deleteCard}
                  />
                );
              })}

              <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => addCard({ front: "", back: "" })}>
                  <Image source={require("../../assets/plus-circle.png")} />
                </TouchableOpacity>
              </View>
            </ScrollView>
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
    backgroundColor: "#fff",
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
    justifyContent: "space-around",
    width: "100%",
  },
  screenTitle: {
    fontSize: 24,
  },
  body: {
    width: "100%",
    paddingTop: 20,
    alignItems: "stretch",
    justifyContent: "flex-start",
    flex: 1,
  },
  labeledInput: {
    paddingHorizontal: 30,
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop: 40,
  },
});

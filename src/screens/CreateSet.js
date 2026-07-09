import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
import HorizontalRuler from "../components/HorizontalRuler";
import LabeledInput from "../components/LabeledInput";
import Card from "../components/Card";
import ConfirmModal from "../components/ConfirmModal";
import { useCards } from "../hooks/useCards";
import { useText } from "../hooks/useText";
import { useNavigation } from "@react-navigation/native";
import { useLearningBoxes } from "../hooks/useLearningBoxes";

export default function CreateSet() {
  const { cards, addCard, deleteCard, updateCard } = useCards();
  const { text, handleChange } = useText();
  const navigation = useNavigation();
  const { addLearningBox } = useLearningBoxes();
  const [discardModalVisible, setDiscardModalVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <ConfirmModal
          visible={discardModalVisible}
          title="Discard Set"
          message="Are you sure you want to discard this new set? This cannot be undone."
          confirmLabel="Discard"
          confirmColor="#E53935"
          onConfirm={() => { setDiscardModalVisible(false); navigation.goBack(); }}
          onCancel={() => setDiscardModalVisible(false)}
        />
        <ConfirmModal
          visible={saveModalVisible}
          title="Save Set"
          message="Do you want to save this new set?"
          confirmLabel="Save"
          confirmColor="#9080F7"
          onConfirm={() => { setSaveModalVisible(false); addLearningBox({ name: text, date: new Date().toLocaleDateString('de-DE'), cardCount: cards.length, cards }); navigation.navigate("Library"); }}
          onCancel={() => setSaveModalVisible(false)}
        />

        <View style={styles.content}>

          <View style={styles.head}>
            <TouchableOpacity onPress={() => setDiscardModalVisible(true)}>
              <Image source={require("../../assets/trash.png")} />
            </TouchableOpacity>
            <Text style={styles.screenTitle}>Create New Set</Text>
            <TouchableOpacity onPress={() => setSaveModalVisible(true)}>
              <Image source={require("../../assets/check.png")} />
            </TouchableOpacity>
          </View>
          <HorizontalRuler />

          <View style={styles.body}>
            <LabeledInput label={"Set Name:"} style={styles.labeledInput} onChangeText={handleChange} />
            <Text style={styles.cardCount}>{cards.length} {cards.length === 1 ? "Card" : "Cards"}</Text>

            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={{ gap: 40 }}
            >
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    index={index}
                    front={card.front}
                    back={card.back}
                    onFrontChange={(text) => updateCard(index, "front", text)}
                    onBackChange={(text) => updateCard(index, "back", text)}
                    onDelete={deleteCard}
                  />
                );
              })}



            </ScrollView>
          </View>
        </View>
        <View style={styles.addButton}>
          <TouchableOpacity onPress={() => addCard({ front: "", back: "" })}>
            <Image source={require("../../assets/create.png")} style={styles.addIcon} />
          </TouchableOpacity>
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
  cardCount: {
    paddingHorizontal: 30,
    paddingTop: 6,
    fontSize: 13,
    color: '#888',
  },
  scrollView: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 95,
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#9080F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  addIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  }
});

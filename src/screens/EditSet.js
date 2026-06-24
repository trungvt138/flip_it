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

export default function EditSet({ route }) {
  const { cards: initialCards, name: initialName } = route.params;
  const { cards, addCard, deleteCard, updateCard } = useCards(initialCards);
  const { text, handleChange } = useText(initialName);
  const navigation = useNavigation();
  const { updateLearningBox, deleteLearningBox } = useLearningBoxes();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ConfirmModal
          visible={deleteModalVisible}
          title="Delete Set"
          message={`Are you sure you want to delete "${initialName}"? This cannot be undone.`}
          confirmLabel="Delete"
          confirmColor="#E53935"
          onConfirm={() => { setDeleteModalVisible(false); deleteLearningBox(route.params.index); navigation.goBack(); }}
          onCancel={() => setDeleteModalVisible(false)}
        />
        <ConfirmModal
          visible={saveModalVisible}
          title="Save Changes"
          message="Do you want to save the changes to this set?"
          confirmLabel="Save"
          confirmColor="#9080F7"
          onConfirm={() => { setSaveModalVisible(false); updateLearningBox(route.params.index, { name: text, date: new Date().toLocaleDateString('de-DE'), cardCount: cards.length, cards }); navigation.navigate("Library"); }}
          onCancel={() => setSaveModalVisible(false)}
        />
        <View style={styles.content}>
          <View style={styles.head}>

            <TouchableOpacity onPress={() => setDeleteModalVisible(true)}>
              <Image source={require("../../assets/trash.png")} />
            </TouchableOpacity>

            <Text style={styles.screenTitle}>Edit Set</Text>

            <TouchableOpacity onPress={() => setSaveModalVisible(true)}>
              <Image source={require("../../assets/check.png")} />
            </TouchableOpacity>

          </View>
          <HorizontalRuler />

          <View style={styles.body}>
            <LabeledInput label={"Set Name:"} style={styles.labeledInput} onChangeText={handleChange} value={text} />

            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={{ gap: 40 }}
            >
              {cards.map((card, index) => {
                return (
                  <Card
                    key={card.id}
                    index={index}
                    front={card.front}
                    back={card.back}
                    onFrontChange={(text) => updateCard(index, "front", text)}
                    onBackChange={(text) => updateCard(index, "back", text)}
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

import { StyleSheet, Image, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";
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
import { useSettings } from "../hooks/useSettings";

export default function EditSet({ route }) {
  const { cards: initialCards, name: initialName } = route.params;
  const { cards, addCard, deleteCard, updateCard } = useCards(initialCards);
  const { text, handleChange } = useText(initialName);
  const navigation = useNavigation();
  const { updateLearningBox, deleteLearningBox } = useLearningBoxes();
  const { t, colors } = useSettings();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const scrollViewRef = useRef(null);
  const pendingScrollToEnd = useRef(false);

  function handleAddCard() {
    addCard({ front: "", back: "" });
    pendingScrollToEnd.current = true;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <ConfirmModal
          visible={deleteModalVisible}
          title={t.deleteSetTitle}
          message={t.deleteSetMessage(initialName)}
          confirmLabel={t.delete}
          confirmColor={colors.danger}
          onConfirm={() => { setDeleteModalVisible(false); deleteLearningBox(route.params.index); navigation.goBack(); }}
          onCancel={() => setDeleteModalVisible(false)}
        />
        <ConfirmModal
          visible={saveModalVisible}
          title={t.saveChangesTitle}
          message={t.saveChangesMessage}
          confirmLabel={t.save}
          confirmColor={colors.primary}
          onConfirm={() => { setSaveModalVisible(false); updateLearningBox(route.params.index, { name: text, date: new Date().toLocaleDateString('de-DE'), cardCount: cards.length, cards }); navigation.navigate("Library"); }}
          onCancel={() => setSaveModalVisible(false)}
        />
        <View style={styles.content}>
          <View style={styles.head}>

            <TouchableOpacity onPress={() => setDeleteModalVisible(true)}>
              <Image source={require("../../assets/trash.png")} />
            </TouchableOpacity>

            <Text style={[styles.screenTitle, { color: colors.text }]}>{t.editSet}</Text>

            <TouchableOpacity onPress={() => setSaveModalVisible(true)}>
              <Image source={require("../../assets/check.png")} />
            </TouchableOpacity>

          </View>
          <HorizontalRuler />

          <View style={styles.body}>
            <LabeledInput label={t.setNameLabel} style={styles.labeledInput} onChangeText={handleChange} value={text} />
            <Text style={[styles.cardCount, { color: colors.textSecondary }]}>{t.cardsCount(cards.length)}</Text>

            <ScrollView
              ref={scrollViewRef}
              style={styles.scrollView}
              contentContainerStyle={{ gap: 40 }}
              onContentSizeChange={() => {
                if (pendingScrollToEnd.current) {
                  pendingScrollToEnd.current = false;
                  scrollViewRef.current?.scrollToEnd({ animated: true });
                }
              }}
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
                <TouchableOpacity onPress={handleAddCard}>
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
});

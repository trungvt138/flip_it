import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View, ScrollView, TextInput, TouchableOpacity, Animated, Keyboard, Platform } from "react-native";
import { useState, useEffect, useRef } from "react";
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

export default function CreateSet() {
  const { cards, addCard, deleteCard, updateCard } = useCards();
  const { text, handleChange } = useText();
  const navigation = useNavigation();
  const { addLearningBox } = useLearningBoxes();
  const { t, colors } = useSettings();
  const [discardModalVisible, setDiscardModalVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const REST_BOTTOM = 95;
  const buttonBottom = useRef(new Animated.Value(REST_BOTTOM)).current;
  const scrollViewRef = useRef(null);
  const pendingScrollToEnd = useRef(false);

  function handleAddCard() {
    addCard({ front: "", back: "" });
    pendingScrollToEnd.current = true;
  }

  useEffect(() => {
    const showEvent = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const showSub = Keyboard.addListener(showEvent, (e) => {
      Animated.timing(buttonBottom, {
        toValue: e.endCoordinates.height + 12,
        duration: Platform.OS === "ios" ? e.duration || 250 : 200,
        useNativeDriver: false,
      }).start();
    });
    const hideSub = Keyboard.addListener(hideEvent, (e) => {
      Animated.timing(buttonBottom, {
        toValue: REST_BOTTOM,
        duration: Platform.OS === "ios" ? e.duration || 250 : 200,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>

        <ConfirmModal
          visible={discardModalVisible}
          title={t.discardSetTitle}
          message={t.discardSetMessage}
          confirmLabel={t.discard}
          confirmColor={colors.danger}
          onConfirm={() => { setDiscardModalVisible(false); navigation.goBack(); }}
          onCancel={() => setDiscardModalVisible(false)}
        />
        <ConfirmModal
          visible={saveModalVisible}
          title={t.saveSetTitle}
          message={t.saveSetMessage}
          confirmLabel={t.save}
          confirmColor={colors.primary}
          onConfirm={() => { setSaveModalVisible(false); addLearningBox({ name: text, date: new Date().toLocaleDateString('de-DE'), cardCount: cards.length, cards }); navigation.navigate('Main', { screen: 'Library' }); }}
          onCancel={() => setSaveModalVisible(false)}
        />

        <View style={styles.content}>

          <View style={styles.head}>
            <TouchableOpacity onPress={() => setDiscardModalVisible(true)}>
              <Image source={require("../../assets/trash.png")} />
            </TouchableOpacity>
            <Text style={[styles.screenTitle, { color: colors.text }]}>{t.createNewSet}</Text>
            <TouchableOpacity onPress={() => setSaveModalVisible(true)}>
              <Image source={require("../../assets/check.png")} />
            </TouchableOpacity>
          </View>
          <HorizontalRuler />

          <View style={styles.body}>
            <LabeledInput label={t.setNameLabel} style={styles.labeledInput} onChangeText={handleChange} />
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
        <Animated.View style={[styles.addButton, { bottom: buttonBottom }]}>
          <TouchableOpacity onPress={handleAddCard}>
            <Image source={require("../../assets/create.png")} style={styles.addIcon} />
          </TouchableOpacity>
        </Animated.View>

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

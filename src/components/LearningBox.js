import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import ConfirmModal from "./ConfirmModal";

export default function LearningBox(props) {
  const navigation = useNavigation();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <View style={styles.learningBox}>
      <ConfirmModal
        visible={deleteModalVisible}
        title="Delete Set"
        message={`Are you sure you want to delete "${props.name}"?`}
        confirmLabel="Delete"
        confirmColor="#E53935"
        onConfirm={() => { setDeleteModalVisible(false); props.onDelete(props.id); }}
        onCancel={() => setDeleteModalVisible(false)}
      />

      <View style={styles.header}>
        <Text style={styles.datum}> {props.date} </Text>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={() => navigation.navigate('EditSet', { cards: props.cards, name: props.name, index: props.index })}>
            <Feather name="edit-2" size={16} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDeleteModalVisible(true)}>
            <Image source={require("../../assets/x.png")} style={styles.xIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.karteiName}> {props.name} </Text>
      <Text style={styles.cardName}> {props.cardCount} Cards </Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.practiceButton} onPress={() => navigation.navigate('Practice', { cards: props.cards, name: props.name })}>
          <Text style={styles.practiceText}>Practice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  learningBox: {
    width: 300,
    borderRadius: 14,
    backgroundColor: '#ede9fe',
    overflow: 'hidden',
  },

  header: {
    height: 29,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
    backgroundColor: '#9080F7',
  },

  datum: {
    color: 'white',
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  xIcon: {
    width: 16,
    height: 16,
    tintColor: '#fff',
  },

  karteiName: {
    alignSelf: 'center',
    marginTop: 16,
    fontSize: 16,
    color: 'black',
  },

  cardName: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 3,
    fontSize: 12,
    color: '#373737',
  },

  actions: {
    marginTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#c4b5fd',
  },

  practiceButton: {
    paddingVertical: 13,
    alignItems: 'center',
    backgroundColor: '#a78bfa',
  },

  practiceText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});

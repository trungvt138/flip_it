import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
        <TouchableOpacity style={styles.deleteButton} onPress={() => setDeleteModalVisible(true)}>
          <Image source={require("../../assets/x.png")} style={{ width: 20, height: 20, tintColor: '#fff' }} />
        </TouchableOpacity>
      </View>

      <Text style={styles.karteiName}> {props.name} </Text>
      <Text style={styles.cardName}> {props.cardCount} Cards </Text>

      <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditSet', { cards: props.cards, name: props.name, index: props.index })}>
        <Text style={{ color: 'white' }}> Edit </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.practiceButton} onPress={() => navigation.navigate('Practice', { cards: props.cards, name: props.name })}>
        <Text style={{ color: '#9080F7' }}> Practice </Text> 
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  learningBox: {
    width: 300, 
    height: 152, 
    borderRadius: 14, 
    backgroundColor: '#D9D9D9',
  },

  header: {
    width: 300, 
    height: 29, 
    borderTopLeftRadius: 9, 
    borderTopRightRadius: 9, 
    justifyContent: 'center', 
    backgroundColor: '#9080F7',
  },

  datum: {
    marginLeft: 11, color: 'white'
  },

  deleteButton: {
    width: 20,
    heihgt: 20, 
    marginLeft: 272,
    marginTop: -20,
  },

  karteiName: {
    alignSelf: 'center',
    marginTop: 16, 
    fontSize: 16, 
    color: 'black'
  },

  cardName: {
    alignSelf: 'center',
    height: 22, 
    textAlign: 'center', 
    marginTop: 3, 
    fontSize: 12,
    color: '#37373'
  },

  editButton: {
    width: 125, 
    height: 31, 
    marginTop: 15, 
    marginLeft: 11, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 9, 
    backgroundColor: '#9080F7',
  },

  practiceButton: {
    width: 125, 
    height: 31, 
    marginTop: -31, 
    marginLeft: 163, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 9, 
    borderWidth: 1,
    borderColor: '#9080F7',
    backgroundColor: '#FFF',
  },
})
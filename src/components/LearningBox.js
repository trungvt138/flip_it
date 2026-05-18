import { StyleSheet, View, Text, TouchableOpacity    } from "react-native";

export default function LearningBox() {
    return (
        <View style={styles.learningBox} />
    );
}

const styles = StyleSheet.create({
    learningBox: {
    width: 300, height: 152, borderRadius: 14, marginTop: 12, backgroundColor:'#D9D9D9',
  },

  header: {
     width: 300, height: 29, borderRadius: 9, justifyContent: 'center', backgroundColor: '#9080F7'
  }
})